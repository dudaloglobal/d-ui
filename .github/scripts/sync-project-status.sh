#!/usr/bin/env bash
# Link issues to the PR, assign them, set En cours / En revue / Terminé.
# Usage: .github/scripts/sync-project-status.sh <pr-number>
#    or: ISSUE_NUMBER=<n> .github/scripts/sync-project-status.sh
set -euo pipefail

if [[ -n "${1:-}" ]]; then
  export PR_NUMBER="$1"
fi

if [[ -z "${PR_NUMBER:-}" && -z "${ISSUE_NUMBER:-}" ]]; then
  echo "usage: $0 <pr-number>" >&2
  echo "   or: ISSUE_NUMBER=<n> $0" >&2
  exit 1
fi

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
python3 "$ROOT/.github/scripts/sync-project-status.py"
