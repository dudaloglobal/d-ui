---
name: ensure-issue
description: >-
  Links a GitHub backlog issue before push. Creates one only when the work is
  brand-new and no issue (open or closed) already covers it. Use before git
  push, before gh pr create, when the branch has no DS-XXX, or when the user
  mentions backlog, issue manquante, or hors backlog. Never duplicate an
  existing ticket.
---

# Ensure GitHub issue

Create a GitHub issue **only if both** are true:

1. **No issue already exists** for this work (open **or** closed): no
   `Closes #N` / `Related to #N` / `DS-XXX` on the branch, and a search of the
   backlog finds no match.
2. **The work is brand-new** — not a follow-up, rebase, dependency bump, or
   lockfile/format-only change.

If an issue already exists, **reuse it**. Do not open a second ticket.

Enforcement: `.githooks/pre-push` runs `.githooks/ensure-github-issue`
(local `gh`, not a GitHub Actions AI token). Skip when `CI` is set.

## When to create

- New component, new tooling, new task that is **not** in the backlog
- Before `git push` / `gh pr create` only after the search above is empty

## When not to create

- Branch `feature/DS-037-…` → issue **#37** already exists
- PR or commits already say `Closes #N` / `Related to #N`
- Follow-up / rebase / dependabot / lockfile-only
- Same subject already has an issue (open or closed)

Then link `Closes #N` (finished in this PR) or `Related to #N` (not finished).
Never write `Hors backlog`.

## How

1. Run `sh .githooks/ensure-github-issue`.
2. Reuse if found; **create** only for brand-new work with no backlog match.
3. New issue title: `DS-NNN — …`. Body includes the branch name.
4. If a PR exists, set the Ticket section to `Closes #<n>` and run
   `sync-project-status.sh`.

## Do not

- Create an issue “just in case” when one already tracks the task
- Push with `SKIP_GITHUB_ISSUE` except a documented emergency
