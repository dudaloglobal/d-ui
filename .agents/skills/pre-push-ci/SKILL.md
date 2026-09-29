---
name: pre-push-ci
description: Runs the GitHub Actions quality job locally before every git push so Prettier and the rest of CI do not fail on the PR. Use when committing, pushing, creating or updating a pull request, or when format:check / Prettier CI fails.
---

# Pre-push CI

CI job **Lint, types, tests, build** (`.github/workflows/ci.yml`) failed on PR #80 because `bun run format:check` was not run before push (`docs-locale.ts`, `TimeAgo.stories.tsx`).

Never push until that job’s commands pass locally, **in this order**:

```bash
bun run lint
bun run format:check
bun run typecheck
bun run test
bun run build
bun run build-storybook
```

## Format

`bun run format:check` is `prettier --check .`. If it fails:

1. Run `bun run format`.
2. Include the formatted files in the commit (new commit if HEAD is already pushed; amend only when the git-no-coauthor amend rules allow it).
3. Re-run `bun run format:check` and the rest of the list.
4. Only then `git push`. Do not skip hooks (`--no-verify`).

`.githooks/pre-push` also runs `bun run format:check`,
`.githooks/ensure-github-issue`, and `.github/scripts/sync-project-status.sh`
(assign the issue, En cours / En revue / Terminé).
Treat a hook failure as the same gate.

## Do not

- Push with known Prettier drift.
- Skip `format:check` because lint or tests already passed.
- Fix formatting only on the two files from one CI log — check the whole tree.
