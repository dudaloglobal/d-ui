---
name: pr-reviewers
description: Assigns the pull request author and requests the other two of fruitizz, Angelo-Cosme, and noukpoherve as reviewers. Use when creating, opening, pushing, or updating a GitHub pull request in this design-system repo.
---

# PR reviewers

On every pull request (create or update), write the body with `.cursor/skills/create-pr/SKILL.md` (French template). Then:

1. Assign the PR author (`gh pr edit --add-assignee <author>`).
2. Request reviewers as the **other two** of `fruitizz`, `Angelo-Cosme`, and `noukpoherve`, based on the PR or ticket assignee:
   - `fruitizz` → `Angelo-Cosme`, `noukpoherve`
   - `Angelo-Cosme` → `fruitizz`, `noukpoherve`
   - `noukpoherve` → `fruitizz`, `Angelo-Cosme`
     Skip a login if it is the author. If the assignee is not in that list, request all three except the author.
3. Do not add `Co-authored-by` or tooling attribution.

Prefer GitHub Action `.github/workflows/pr-assignment.yml` (runs on `opened` / `synchronize` / assignee changes). If creating a PR with `gh`, still pass `--assignee` and `--reviewer` for the pair above.

Do not leave a PR without author assignee or those reviewers.
