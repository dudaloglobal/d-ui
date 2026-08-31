---
name: create-pr
description: Creates or updates GitHub pull requests with the French d-ui description template (Ticket, Résumé, Preview Storybook, Tests, Accessibilité, Breaking changes). Use when creating, opening, editing, or pushing a pull request, or when the user asks for a PR, gh pr create, or a PR description.
---

# Create PR

When creating or updating a pull request, follow this skill. Do not use an English body (`## Summary`, `## Test plan`, or similar).

Source of truth for the sections: `.github/PULL_REQUEST_TEMPLATE.md` (same structure as [PR #86](https://github.com/dudaloglobal/d-ui/pull/86)).

Also follow `pr-reviewers`, `no-cursor-attribution`, and `pre-push-ci`.

## Language

- **Title:** English conventional commit (`feat(select): add Select and Combobox`).
- **Body:** French only — headings, résumé bullets, breaking-changes line, comments. Do not mix English prose into the body.

## Body template

Use this exact section order and these exact headings. Keep a blank line after the preview URL.

```markdown
## Ticket

Closes #<issue-number>

## Résumé

- <quoi et pourquoi, pas le diff ligne à ligne>
- <2–4 puces>

## Preview Storybook

URL du preview : https://dudaloglobal.github.io/d-ui/prs/<numéro-de-PR>/

## Tests

- [ ] `pnpm lint`
- [ ] `pnpm typecheck`
- [ ] `pnpm test`
- [ ] `pnpm build`

## Accessibilité

- [ ] Contrastes et focus visibles
- [ ] Clavier (Tab, Enter, Escape)
- [ ] Addon a11y Storybook sans violation serious/critical
- [ ] Nom accessible si contrôle icon-only

## Breaking changes

Aucun
```

## Fill-in rules

1. **Ticket:** `Closes #<n>` (or `Fixes` / `Resolves` if that matches the issue). Never omit this section.
2. **Résumé:** French bullets on why and user-facing behavior. No file lists, no commit dumps.
3. **Preview Storybook:** After `gh pr create`, set `https://dudaloglobal.github.io/d-ui/prs/<n>/`. If the number is not known yet, leave `URL du preview :` and edit once GitHub returns the number. Required to merge (CI copies the URL if the field is empty).
4. **Tests:** Check a box only if that command just passed locally (pre-push CI). Otherwise leave `[ ]`.
5. **Accessibilité:** Check only what this PR actually covers. Leave `[ ]` when not done or not applicable in a way that was verified.
6. **Breaking changes:** `Aucun`, or a French sentence plus a major changeset.

Do not add extra top-level sections. Do not replace this template with Summary / Test plan.

## After create or edit

1. `gh pr view --json title,body --jq '{title,body}'`
2. If the body is missing a section, is in English, or has a Cursor / Co-authored-by footer: `gh pr edit` and verify again.
3. Assign author and request reviewers (`pr-reviewers`).
