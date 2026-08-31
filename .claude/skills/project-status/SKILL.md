---
name: project-status
description: >-
  Links the GitHub issue to the pull request, assigns it, and moves the project
  card to En cours, En revue, or Terminé. Use when creating or updating a PR,
  after git push, when the user mentions board, projet, En cours, En revue,
  Terminé, or assigning an issue to a PR.
---

# Project status (issue ↔ PR)

Every developer, on every clone. Local hook `.githooks/pre-push` runs
`.github/scripts/sync-project-status.sh` (local `gh`). The GitHub Action
runs on every same-repo PR (opened, ready for review, merged) so **Terminé**
still happens when someone merges from the GitHub UI. `PROJECT_TOKEN` (org
project write) is preferred; without it the job still assigns the issue with
`GITHUB_TOKEN` and tries the board.

## Link the issue to the PR

Ticket section must contain:

- `Closes #N` — this PR finishes the issue
- `Related to #N` — work started, issue not finished

Never leave Ticket empty or “Hors backlog”. Follow `ensure-issue` if the
task is brand-new and no issue exists.

## Assign

- Assign the **issue** to the PR author (`gh issue edit N --add-assignee`).
- Assign the **PR** to the author and request reviewers (`pr-reviewers`).

## Board status (Design System DudaX)

| PR state               | `Closes #N` | `Related to #N` |
| ---------------------- | ----------- | --------------- |
| Draft, or no PR yet    | En cours    | En cours        |
| Open, ready for review | En revue    | En cours        |
| Merged                 | Terminé     | En cours        |
| Closed without merge   | En cours    | En cours        |

If the issue is not on the project yet, **add it**, then set Status. Do not
leave finished work in Backlog.

## How

After `gh pr create` / `gh pr edit` / `git push`:

```bash
.github/scripts/sync-project-status.sh <pr-number>
```

Do not add Co-authored-by or tooling attribution.
