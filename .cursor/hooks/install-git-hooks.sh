#!/bin/sh
# Keep .git/hooks in sync with .githooks without changing git config.
set -e
input=$(cat)
root="${CURSOR_PROJECT_DIR:-.}"
if [ -x "$root/.githooks/install.sh" ]; then
  "$root/.githooks/install.sh" >/dev/null 2>&1 || true
fi
echo '{}'
