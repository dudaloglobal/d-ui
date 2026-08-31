# Agent instructions

This repository is `d-ui` (Dudalo Design System). Skills and rules in the
repo apply to **every clone**, whether the developer uses **Cursor**, **Claude
Code**, or another Agent Skills client.

## Where skills live

Same `SKILL.md` files in both trees (real files, not symlinks — Claude Code
does not load git symlinks as project skills):

- `.cursor/skills/` — Cursor
- `.claude/skills/` — Claude Code
- `.agents/skills/` — other Agent Skills clients

When you edit a skill, update **all three** copies (or run
`sh scripts/sync-agent-skills.sh` from the repo root).

## Always-on project rules

`.cursor/rules/*.mdc` (Cursor). Claude Code and other agents: treat this file
plus those rules as standing instructions. In particular:

- French PR body (`.cursor/skills/create-pr/SKILL.md`); English conventional-commit title
- Reviewers: `fruitizz`, `Angelo-Cosme`, `noukpoherve` (`.cursor/skills/pr-reviewers/SKILL.md`)
- No `Co-authored-by` / tooling attribution
- Storybook docs: `storybook-docs` + `docs-locale`
- Before push: `.cursor/skills/pre-push-ci/SKILL.md`
- Before **local** commit: `.cursor/skills/pre-commit-review/SKILL.md`

## Local pre-commit review (not CI)

`.githooks/pre-commit` calls a **local** `claude` or `agent` CLI and reviews
the staged diff for YAGNI, SOLID, KISS, DRY, and Storybook coverage of every
public component option (e.g. propose Button + icon if only a bare button is
documented).

This must **not** run on GitHub Actions (no cloud AI token). The hook exits 0
when `CI` is set.

Install hooks (also run by `pnpm install`):

```bash
sh .githooks/install.sh
```

Needs one local CLI:

- Claude Code: `claude` on `PATH`
- Cursor: `agent` on `PATH` (`curl https://cursor.com/install -fsS | bash`)

Emergency only: `SKIP_COMMIT_REVIEW=1 git commit …`

## Component bar

`CONTRIBUTING.md`, `docs/component-conventions.md`, gold docs:
`Button.mdx` / `TextInput.mdx` / `TimeAgo.mdx`.
