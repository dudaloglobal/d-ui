---
name: pr-reviewers
description: Assigns the pull request author and requests fruitizz and kplaricos as reviewers. Use when creating, opening, pushing, or updating a GitHub pull request in this design-system repo.
---

# PR reviewers

On every pull request (create or update), write the body with `.cursor/skills/create-pr/SKILL.md` (French template). Then:

1. Assign the PR author (`gh pr edit --add-assignee <author>`).
2. Request `fruitizz` and `kplaricos` as reviewers. Skip a login if it is the author.
3. Do not add `Co-authored-by` or tooling attribution.

Prefer GitHub Action `.github/workflows/pr-assignment.yml` (runs on `opened` / `synchronize` / assignee changes). If creating a PR with `gh`, still pass `--assignee` and `--reviewer` for the reviewers above.

After create or edit, move linked issues on the project board and assign them
(`.cursor/skills/project-status/SKILL.md`):

```bash
.github/scripts/sync-project-status.sh <pr-number>
```

Use `Closes #N` for finished work (board: En revue, then Terminé on merge) and `Related to #N` for unfinished work (board: En cours). See `.cursor/rules/project-status.mdc`.

Do not leave a PR without its author assignee or the eligible reviewers above.
