---
name: pr-reviewers
description: Assigns the pull request author and requests Angelo-Cosme and fruitizz as reviewers. Use when creating, opening, pushing, or updating a GitHub pull request in this design-system repo.
---

# PR reviewers

On every pull request (create or update):

1. Assign the PR author (`gh pr edit --add-assignee <author>`).
2. Request reviewers **`Angelo-Cosme`** (Angelo Vodoumbo) and **`fruitizz`**. Skip a login if it is the author.
3. Do not add `Co-authored-by` or tooling attribution.

Prefer GitHub Action `.github/workflows/pr-assignment.yml` (runs on `opened` / `synchronize`). If creating a PR with `gh`, still pass:

```bash
gh pr create --assignee @me --reviewer Angelo-Cosme,fruitizz
```

After create or edit, move linked issues on the project board:

```bash
.github/scripts/sync-project-status.sh <pr-number>
```

Use `Closes #N` for finished work (board: En revue, then Terminé on merge) and `Related to #N` for unfinished work (board: En cours). See `.cursor/rules/project-status.mdc`.

Do not leave a PR without author assignee or those two reviewers.
