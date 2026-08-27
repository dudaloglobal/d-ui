---
name: rebase-branch
description: Rebases the current feature branch onto origin/main without dropping either side’s work, then force-with-lease. Use when the user says "rebase branch", "rebase la branche", "safe rebase", or asks to update the PR branch onto main.
---

# Rebase branch

When the user says **rebase branch** (or rebase la branche / safe rebase / rebase onto main):

1. Rebase the **current feature branch** onto up-to-date `origin/main`.
2. Keep **both** what landed on main **and** what this branch added.
3. Push with `--force-with-lease` after pre-push CI.

Do not wait for a file-by-file confirmation. Do report the ours / theirs / overlap split before resolving.

## Guardrails

- Working tree must be **clean**. If it is not, stop; do not stash unless the user asked.
- Never rebase `main` or `master`. Never `git rebase -i`. Never `--no-verify`.
- Never `git push --force`. Use `--force-with-lease` on the feature branch only.
- Do not rebase onto stale local `main`. Always `git fetch origin main` and rebase onto `origin/main`.
- Follow `no-cursor-attribution` on the replayed commit message.

## Classify first

```bash
git fetch origin main
git merge-base HEAD origin/main
```

List three sets and tell the user:

| Set | Meaning |
| --- | --- |
| **This branch** | `git diff --name-only origin/main...HEAD` |
| **Incoming (main)** | files changed on `origin/main` since the merge-base |
| **Overlap** | intersection — will conflict or need a manual keep-both |

Incoming unique files (Icon, typography, tokens, …) stay as on main. This-branch unique files (the ticket’s component, changeset, stories) stay as on this branch.

## Rebase

```bash
GIT_EDITOR=true git rebase origin/main
```

If already up to date, say so and stop (unless there is follow-up work the user asked for).

## Overlap: keep both

On conflict, **do not** take only ours or only theirs.

Typical d-ui overlap and how to combine:

- `packages/ui/src/index.ts` — keep main’s new exports **and** this branch’s exports.
- `docs/accessibility.md` — keep main’s numbered rules **and** append this component as the next number. Do not delete the Overlays section.
- `.storybook/docs-copy.ts` / `docs-locale.ts` / `arg-types.ts` — keep main’s keys **and** this branch’s keys (`calendarCopy`, `storyNameEn`, ArgTypes, …).
- `docs-locale.test.ts` and `e2e/storybook.smoke.spec.ts` — keep both assertion lists.
- Skills such as `docs-locale/SKILL.md` — keep main’s copy helpers **and** this branch’s extra rules (alphabetical sidebar, …).

After resolving: `git add` the files, then `GIT_EDITOR=true git rebase --continue`.

If the rebase is stuck and the user did not ask to abort, keep resolving. Only `git rebase --abort` when they ask to cancel.

## After a successful rebase

1. `git log -1 --format=%B` — strip Co-authored-by / Made with Cursor if a hook injected them (`--amend` only if that commit is not yet pushed under the new hash).
2. Run `.cursor/skills/pre-push-ci/SKILL.md` in order.
3. `git push --force-with-lease origin HEAD`
4. If a PR exists, leave it; the updated branch is enough. Do not rewrite the French PR body unless rebase changed user-facing scope.

## Do not

- Merge `origin/main` into the feature branch when the user said rebase.
- Skip overlap files or drop main’s Icon / typography / foundations work to “make Calendar apply cleanly”.
- Force-push to `main`.
