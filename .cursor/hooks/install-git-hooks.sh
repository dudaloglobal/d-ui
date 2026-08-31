#!/bin/sh
# Install repo git hooks (core.hooksPath=.githooks).
set -e
input=$(cat)
root="${CURSOR_PROJECT_DIR:-.}"
if [ -x "$root/.githooks/install.sh" ]; then
  "$root/.githooks/install.sh" >/dev/null 2>&1 || true
fi
echo '{}'
