#!/bin/sh
# Point this clone at repo hooks (local git config). Safe to re-run.
set -e
root="$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)"
git_dir="$root/.git"
if [ ! -d "$git_dir" ]; then
  echo "install-hooks: skip (no .git)"
  exit 0
fi

chmod +x "$root/.githooks/commit-msg" \
  "$root/.githooks/prepare-commit-msg" \
  "$root/.githooks/pre-push" \
  "$root/.githooks/pre-commit" \
  "$root/.githooks/install.sh"

if git -C "$root" config core.hooksPath .githooks; then
  echo "install-hooks: core.hooksPath=.githooks"
  exit 0
fi

# Fallback when git config is unavailable: copy into .git/hooks.
mkdir -p "$git_dir/hooks"
for name in commit-msg prepare-commit-msg pre-push pre-commit; do
  cp "$root/.githooks/$name" "$git_dir/hooks/$name"
  chmod +x "$git_dir/hooks/$name"
done
echo "install-hooks: copied commit-msg, prepare-commit-msg, pre-push, pre-commit"
