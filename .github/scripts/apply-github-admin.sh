#!/bin/sh
# Apply labels, milestones, project link, and main branch protection (DS-062).
# Requires gh auth with repo Maintain/admin. Does not assign people.
set -eu

REPO="${REPO:-dudaloglobal/design-system}"
ROOT="$(CDPATH= cd -- "$(dirname "$0")/../.." && pwd)"
META="$ROOT/.github/github-admin.json"
PROJECT_NUMBER="${PROJECT_NUMBER:-2}"
PROJECT_OWNER="${PROJECT_OWNER:-dudaloglobal}"

if ! command -v gh >/dev/null 2>&1; then
  echo "apply-github-admin: gh is required" >&2
  exit 1
fi
if ! command -v python3 >/dev/null 2>&1; then
  echo "apply-github-admin: python3 is required" >&2
  exit 1
fi

python3 - "$REPO" "$META" <<'PY'
import json, subprocess, sys

repo, meta_path = sys.argv[1], sys.argv[2]
meta = json.loads(open(meta_path, encoding="utf-8").read())

def gh(*args, input_text=None):
    r = subprocess.run(
        ["gh", *args],
        input=input_text,
        capture_output=True,
        text=True,
    )
    if r.returncode != 0:
        raise SystemExit(f"{' '.join(args)}\n{r.stderr or r.stdout}")
    return r.stdout

for label in meta["labels"]:
    gh(
        "label", "create", label["name"],
        "--repo", repo,
        "--color", label["color"],
        "--description", label["description"],
        "--force",
    )
    print(f"label {label['name']}")

existing = json.loads(gh("api", f"repos/{repo}/milestones?state=all&per_page=100"))
titles = {m["title"] for m in existing}
for title in meta["milestones"]:
    if title in titles:
        print(f"milestone exists {title}")
        continue
    subprocess.run(
        ["gh", "api", f"repos/{repo}/milestones", "--input", "-"],
        input=json.dumps({"title": title, "state": "open"}),
        capture_output=True,
        text=True,
        check=True,
    )
    print(f"milestone {title}")
PY

gh project link "$PROJECT_NUMBER" --owner "$PROJECT_OWNER" --repo "$REPO"

python3 - "$REPO" "$META" <<'PY'
import json, subprocess, sys

repo, meta_path = sys.argv[1], sys.argv[2]
meta = json.loads(open(meta_path, encoding="utf-8").read())
checks = [{"context": name} for name in meta["required_status_checks"]]
payload = {
    "required_status_checks": {
        "strict": True,
        "contexts": meta["required_status_checks"],
        "checks": checks,
    },
    "enforce_admins": True,
    "required_pull_request_reviews": {
        "dismiss_stale_reviews": True,
        "require_code_owner_reviews": False,
        "required_approving_review_count": 1,
    },
    "restrictions": None,
    "allow_force_pushes": False,
    "allow_deletions": False,
    "block_creations": False,
}
r = subprocess.run(
    [
        "gh", "api",
        "--method", "PUT",
        f"repos/{repo}/branches/main/protection",
        "--input", "-",
    ],
    input=json.dumps(payload),
    capture_output=True,
    text=True,
)
if r.returncode != 0:
    print("branch protection: skipped")
    print((r.stderr or r.stdout).strip())
    print(
        "GitHub Free + private repo does not allow classic branch protection or rulesets. "
        "Upgrade the org to Team/Pro, then re-run this script."
    )
    sys.exit(0)
print("branch protection: main")
PY
