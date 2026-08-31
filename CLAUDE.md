@AGENTS.md

# Claude Code

Project skills are real files under `.claude/skills/<name>/SKILL.md` (same
content as `.cursor/skills/`). Claude Code loads this directory on clone.

Before `git commit`, `.githooks/pre-commit` runs `pre-commit-review` on this
machine. Do not add a GitHub Actions workflow for that review.
