#!/usr/bin/env bash
# GitHub Packages authentication is supplied by the release workflow.
set -euo pipefail

: "${NODE_AUTH_TOKEN:?NODE_AUTH_TOKEN is required to publish to GitHub Packages}"
exec bun run changeset publish
