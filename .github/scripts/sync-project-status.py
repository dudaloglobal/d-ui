#!/usr/bin/env python3
"""Move GitHub Project cards from PR closing/related issue references."""

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
    data = json.loads(raw)
    items = data.get("items", data)
    mapping: dict[int, str] = {}
    for item in items:
        content = item.get("content") or {}
        number = content.get("number") if isinstance(content, dict) else None
        if isinstance(number, int):
            mapping[number] = item["id"]
    return mapping


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


def main() -> int:
    pr_number = os.environ.get("PR_NUMBER") or (sys.argv[1] if len(sys.argv) > 1 else "")
    if not pr_number:
        print("usage: sync-project-status.py <pr-number>", file=sys.stderr)
        return 1

    pr = json.loads(
        gh(
            "pr",
            "view",
            str(pr_number),
            "--repo",
            f"{OWNER}/{REPO}",
            "--json",
            "number,title,body,state,isDraft,mergedAt,headRefName",
        )
    )
    blob = f"{pr.get('title') or ''}\n{pr.get('body') or ''}"
    closes, related = parse_issue_numbers(blob)
    if not closes and not related:
        related |= {int(n) for n in DS_RE.findall(pr.get("headRefName") or "")}
    state = pr_state(pr)
    items = project_items()

    moves: list[tuple[int, str]] = []
    for number in sorted(closes):
        moves.append((number, target_status("closes", state)))
    for number in sorted(related):
        moves.append((number, target_status("related", state)))

    if not moves:
        print(f"PR #{pr_number}: no linked issues")
        return 0

    for number, status_name in moves:
        item_id = items.get(number)
        if not item_id:
            print(f"#{number}: not on project, skip", file=sys.stderr)
            continue
        set_status(item_id, status_name)
        print(f"#{number} -> {status_name}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
