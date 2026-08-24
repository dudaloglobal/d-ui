#!/usr/bin/env bash
# Publish from main only when NPM_TOKEN is present. Exit 0 otherwise so
# Changesets can still open the version PR without failing the workflow.
set -euo pipefail

if [[ -z "${NPM_TOKEN:-}" ]]; then
  echo "NPM_TOKEN is not set; skipping npm publish."
  exit 0
fi

exec pnpm changeset publish
