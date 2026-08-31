@AGENTS.md

# Claude Code

Project skills are real files under `.claude/skills/<name>/SKILL.md` (same
content as `.cursor/skills/`). Claude Code loads this directory on clone.

Before `git commit`, `.githooks/pre-commit` runs `pre-commit-review` on this
machine. Before `git push`, `.githooks/ensure-github-issue` **reuses** an
existing ticket, and **creates** one only if the work is brand-new and the
backlog has no match. Do not add a GitHub Actions workflow for the AI review.
