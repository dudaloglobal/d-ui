#!/usr/bin/env python3
"""Find or create a GitHub issue. Reads issue JSON on stdin unless --patch-pr."""
from __future__ import annotations

import json
import os
import re
import subprocess
import sys


def patch_pr() -> None:
    pr = os.environ["ENSURE_PR_NUMBER"]
    issue = os.environ["ENSURE_ISSUE"]
    body = os.environ.get("ENSURE_PR_BODY", "")
    if re.search(
        rf"(?i)\b(?:close[sd]?|fix(?:e[sd])?|resolve[sd]?|related to)\s+#{re.escape(issue)}\b",
        body,
    ):
        return
    ticket = f"## Ticket\n\nCloses #{issue}\n"
    if re.search(r"(?im)^## Ticket\s*$", body):
        body = re.sub(
            r"(?im)^## Ticket\s*\n+(?:.*\n)*?(?=^## |\Z)",
            ticket + "\n",
            body,
            count=1,
        )
    else:
        body = ticket + "\n" + body
    subprocess.run(["gh", "pr", "edit", pr, "--body", body], check=True)
    print(f"patched {pr}", file=sys.stderr)


if sys.argv[1:] == ["--patch-pr"]:
    patch_pr()
    sys.exit(0)

issues = json.load(sys.stdin)
branch = os.environ.get("ENSURE_BRANCH", "")
subject = os.environ.get("ENSURE_SUBJECT", "")
pr_body = os.environ.get("ENSURE_PR_BODY", "")
log_text = os.environ.get("ENSURE_LOG", "")
changed = os.environ.get("ENSURE_CHANGED", "")
blob = f"{pr_body}\n{log_text}\n{branch}\n{subject}"

m = re.search(
    r"(?i)\b(?:close[sd]?|fix(?:e[sd])?|resolve[sd]?|related to)\s+#(\d+)\b",
    blob,
)
if m:
    print(f"reuse {m.group(1)} linked")
    sys.exit(0)

ds = re.search(r"(?i)DS-0*(\d+)", branch)
if ds:
    print(f"reuse {ds.group(1)} branch-ds")
    sys.exit(0)

STOP = {
    "feat",
    "fix",
    "chore",
    "docs",
    "style",
    "refactor",
    "test",
    "ci",
    "the",
    "and",
    "for",
    "with",
    "from",
    "this",
    "that",
    "into",
    "onto",
    "add",
    "update",
    "added",
}


def tokens(text: str) -> set[str]:
    words = re.findall(
        r"[a-zA-Zà-ÿ]{4,}", text.lower().replace("-", " ").replace("_", " ")
    )
    return {w for w in words if w not in STOP}


need = tokens(f"{branch} {subject}")
best_n = None
best_score = 0
for item in issues:
    issue_blob = f"{item.get('title') or ''}\n{item.get('body') or ''}"
    if branch and branch in issue_blob:
        print(f"reuse {item['number']} branch-in-issue")
        sys.exit(0)
    score = sum(1 for t in need if t in issue_blob.lower())
    if score > best_score:
        best_score = score
        best_n = item["number"]

if best_n is not None and best_score >= 2:
    print(f"reuse {best_n} backlog-match")
    sys.exit(0)

if re.search(r"(?i)follow-?up|rebase|deps|dependabot", branch):
    print("skip not-new")
    sys.exit(0)

paths = [p.strip() for p in changed.splitlines() if p.strip()]
if paths:
    trivial = all(
        p.endswith(("pnpm-lock.yaml", "package-lock.json", "yarn.lock"))
        or "/.changeset/" in f"/{p}"
        or p.startswith(".changeset/")
        for p in paths
    )
    if trivial:
        print("skip trivial")
        sys.exit(0)

print("create")
