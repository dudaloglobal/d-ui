#!/usr/bin/env bash
# Move Design System DudaX project cards to match a pull request.
# Usage: .github/scripts/sync-project-status.sh <pr-number>
set -euo pipefail

PR_NUMBER="${1:-}"
if [[ -z "$PR_NUMBER" ]]; then
  echo "usage: $0 <pr-number>" >&2
  exit 1
fi

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
export PR_NUMBER
python3 "$ROOT/.github/scripts/sync-project-status.py"
