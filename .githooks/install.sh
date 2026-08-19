#!/bin/sh
# Install repo hooks into .git/hooks (does not change git config).
set -e
root="$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)"
git_dir="$root/.git"
if [ ! -d "$git_dir" ]; then
  echo "install-hooks: .git not found" >&2
  exit 1
fi
mkdir -p "$git_dir/hooks"
for name in commit-msg prepare-commit-msg pre-push; do
  cp "$root/.githooks/$name" "$git_dir/hooks/$name"
  chmod +x "$git_dir/hooks/$name"
done
echo "install-hooks: commit-msg, prepare-commit-msg, pre-push installed"
