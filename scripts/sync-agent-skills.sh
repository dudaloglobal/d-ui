#!/bin/sh
# Copy .cursor/skills into .claude/skills and .agents/skills (real files).
set -e
root="$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)"
cd "$root"
if [ ! -d .cursor/skills ]; then
  echo "sync-agent-skills: .cursor/skills missing" >&2
  exit 1
fi
for dest in .claude/skills .agents/skills; do
  mkdir -p "$dest"
  for d in .cursor/skills/*/; do
    name=$(basename "$d")
    rm -rf "$dest/$name"
    mkdir -p "$dest/$name"
    cp -R "$d." "$dest/$name/"
  done
done
echo "sync-agent-skills: copied $(ls -1 .cursor/skills | wc -l | tr -d ' ') skills to .claude/skills and .agents/skills"
