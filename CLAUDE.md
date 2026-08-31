@AGENTS.md

# Claude Code

Project skills are in `.claude/skills/` (symlinks to `.cursor/skills/`). Load
them like any other project skill.

Before `git commit`, `.githooks/pre-commit` runs `pre-commit-review` on this
machine. Do not add a GitHub Actions workflow for that review.
