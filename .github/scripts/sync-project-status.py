#!/usr/bin/env python3
"""Link issues to the PR, put them on the project board, set En cours / En revue / Terminé."""

from __future__ import annotations

import json
import os
import re
import subprocess
import sys
from typing import Any

OWNER = "dudaloglobal"
REPO = "d-ui"
PROJECT_NUMBER = 2
PROJECT_ID = "PVT_kwDOEtz-7c4BgsSb"
STATUS_FIELD_ID = "PVTSSF_lADOEtz-7c4BgsSbzhfq32Q"
STATUS = {
    "En cours": "47fc9ee4",
    "En revue": "24251453",
    "Terminé": "98236657",
}

CLOSES_RE = re.compile(
    r"(?i)\b(?:close[sd]?|fix(?:e[sd])?|resolve[sd]?)\s+#(\d+)\b"
)
RELATED_RE = re.compile(
    r"(?i)\brelated to\s+#(\d+)((?:\s*,\s*#\d+)*)"
)
DS_RE = re.compile(r"(?i)\bDS-0*(\d+)\b")
HASH_RE = re.compile(r"#(\d+)")


def gh(*args: str) -> str:
    result = subprocess.run(
        ["gh", *args],
        check=True,
        capture_output=True,
        text=True,
    )
    return result.stdout


def parse_issue_numbers(text: str) -> tuple[set[int], set[int]]:
    closes = {int(n) for n in CLOSES_RE.findall(text)}
    related: set[int] = set()
    for first, rest in RELATED_RE.findall(text):
        related.add(int(first))
        related.update(int(n) for n in HASH_RE.findall(rest))
    related -= closes
    return closes, related


def project_items() -> dict[int, str]:
    try:
        raw = gh(
            "project",
            "item-list",
            str(PROJECT_NUMBER),
            "--owner",
            OWNER,
            "--limit",
            "200",
            "--format",
            "json",
        )
    except subprocess.CalledProcessError as exc:
        print(
            f"could not list project items — {exc.stderr}",
            file=sys.stderr,
        )
        return {}
    data = json.loads(raw)
    items = data.get("items", data)
    mapping: dict[int, str] = {}
    for item in items:
        content = item.get("content") or {}
        number = content.get("number") if isinstance(content, dict) else None
        if isinstance(number, int):
            mapping[number] = item["id"]
    return mapping


def add_to_project(number: int) -> str:
    raw = gh(
        "project",
        "item-add",
        str(PROJECT_NUMBER),
        "--owner",
        OWNER,
        "--url",
        f"https://github.com/{OWNER}/{REPO}/issues/{number}",
        "--format",
        "json",
    )
    data = json.loads(raw)
    item_id = data.get("id")
    if not item_id:
        raise RuntimeError(f"#{number}: item-add returned no id")
    return str(item_id)


def ensure_on_project(number: int, items: dict[int, str]) -> str | None:
    existing = items.get(number)
    if existing:
        return existing
    try:
        item_id = add_to_project(number)
    except (subprocess.CalledProcessError, RuntimeError) as exc:
        err = getattr(exc, "stderr", None) or str(exc)
        print(f"#{number}: could not add to project — {err}", file=sys.stderr)
        return None
    items[number] = item_id
    print(f"#{number}: added to project")
    return item_id


def set_status(item_id: str, status_name: str) -> None:
    gh(
        "project",
        "item-edit",
        "--id",
        item_id,
        "--project-id",
        PROJECT_ID,
        "--field-id",
        STATUS_FIELD_ID,
        "--single-select-option-id",
        STATUS[status_name],
    )


def assign_issue(number: int, login: str) -> None:
    try:
        gh(
            "issue",
            "edit",
            str(number),
            "--repo",
            f"{OWNER}/{REPO}",
            "--add-assignee",
            login,
        )
        print(f"#{number}: assigned to {login}")
    except subprocess.CalledProcessError as exc:
        print(
            f"#{number}: could not assign {login} — {exc.stderr}",
            file=sys.stderr,
        )


def pr_state(pr: dict[str, Any]) -> str:
    if pr.get("mergedAt") or pr.get("state") == "MERGED":
        return "merged"
    if pr.get("state") == "CLOSED":
        return "closed"
    if pr.get("isDraft"):
        return "draft"
    return "open"


def target_status(kind: str, state: str) -> str:
    if kind == "closes":
        if state == "merged":
            return "Terminé"
        if state == "open":
            return "En revue"
        return "En cours"
    return "En cours"


def current_login() -> str:
    return json.loads(gh("api", "user"))["login"]


def sync_issue(number: int, status_name: str, items: dict[int, str], assignee: str) -> None:
    item_id = ensure_on_project(number, items)
    if item_id:
        try:
            set_status(item_id, status_name)
            print(f"#{number} -> {status_name}")
        except subprocess.CalledProcessError as exc:
            print(f"#{number}: could not set {status_name} — {exc.stderr}", file=sys.stderr)
    if assignee:
        assign_issue(number, assignee)


def main() -> int:
    pr_number = os.environ.get("PR_NUMBER") or (
        sys.argv[1] if len(sys.argv) > 1 else ""
    )
    issue_only = os.environ.get("ISSUE_NUMBER", "")
    if not pr_number and not issue_only:
        print(
            "usage: sync-project-status.py <pr-number>  or  ISSUE_NUMBER=<n>",
            file=sys.stderr,
        )
        return 1

    items = project_items()
    assignee = ""

    if not pr_number:
        try:
            assignee = current_login()
        except (subprocess.CalledProcessError, KeyError):
            assignee = ""
        sync_issue(int(issue_only), "En cours", items, assignee)
        return 0

    pr = json.loads(
        gh(
            "pr",
            "view",
            str(pr_number),
            "--repo",
            f"{OWNER}/{REPO}",
            "--json",
            "number,title,body,state,isDraft,mergedAt,headRefName,author",
        )
    )
    author = (pr.get("author") or {}).get("login") or ""
    try:
        assignee = author or current_login()
    except (subprocess.CalledProcessError, KeyError):
        assignee = author

    blob = f"{pr.get('title') or ''}\n{pr.get('body') or ''}"
    closes, related = parse_issue_numbers(blob)
    if not closes and not related:
        related |= {int(n) for n in DS_RE.findall(pr.get("headRefName") or "")}
    state = pr_state(pr)

    moves: list[tuple[int, str]] = []
    for number in sorted(closes):
        moves.append((number, target_status("closes", state)))
    for number in sorted(related):
        moves.append((number, target_status("related", state)))

    if not moves:
        print(f"PR #{pr_number}: no linked issues")
        return 0

    for number, status_name in moves:
        sync_issue(number, status_name, items, assignee)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
