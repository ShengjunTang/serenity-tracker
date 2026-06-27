#!/usr/bin/env bash
set -euo pipefail

REPO_URL="${SERENITY_REPO_URL:-https://github.com/ShengjunTang/serenity-tracker.git}"
RAW_URL="https://raw.githubusercontent.com/ShengjunTang/serenity-tracker/main/data/ideas.json"
PAGES_URL="https://ShengjunTang.github.io/serenity-tracker/data/ideas.json"
CLOUDFLARE_URL="https://serenity-tracker.tangshengjun19910801.workers.dev/data/ideas.json"
COMMIT_MESSAGE="Update Serenity tracker"
PUSH=false
DEPLOY_CLOUDFLARE=false

usage() {
  cat <<'EOF'
Usage: scripts/publish.sh [--push] [--cloudflare] [--message TEXT]

Without --push, validates the tracker and shows the files that would publish.
--push        Commit and push through a temporary clone when needed.
--cloudflare  Deploy the pushed snapshot when CLOUDFLARE_API_TOKEN is set.
EOF
}

while (($#)); do
  case "$1" in
    --push) PUSH=true ;;
    --cloudflare) DEPLOY_CLOUDFLARE=true ;;
    --message)
      shift
      [[ $# -gt 0 ]] || { echo "Missing value for --message" >&2; exit 2; }
      COMMIT_MESSAGE="$1"
      ;;
    -h|--help) usage; exit 0 ;;
    *) echo "Unknown option: $1" >&2; usage >&2; exit 2 ;;
  esac
  shift
done

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "[1/5] Validating data and JavaScript"
node scripts/validate-data.mjs
node --check app.js
EXPECTED_GENERATED_AT="$(node -p "require('./data/ideas.json').generatedAt")"

TRACKER_FILES=(app.js data/ideas.json index.html styles.css wrangler.jsonc scripts README.md)

if [[ "$PUSH" != true ]]; then
  echo "[2/5] Publish preview"
  printf '  %s\n' "${TRACKER_FILES[@]}"
  echo "Validation passed. Run scripts/publish.sh --push to publish."
  exit 0
fi

WORK_DIR=""
cleanup() {
  [[ -z "$WORK_DIR" ]] || rm -rf "$WORK_DIR"
}
trap cleanup EXIT

echo "[2/5] Preparing clean publish checkout"
WORK_DIR="$(mktemp -d "${TMPDIR:-/tmp}/serenity-publish.XXXXXX")"
git clone --quiet "$REPO_URL" "$WORK_DIR/repo"

for path in "${TRACKER_FILES[@]}"; do
  [[ -e "$ROOT_DIR/$path" ]] || continue
  rm -rf "$WORK_DIR/repo/$path"
  cp -R "$ROOT_DIR/$path" "$WORK_DIR/repo/$path"
done

cd "$WORK_DIR/repo"
node scripts/validate-data.mjs
node --check app.js

if git diff --quiet; then
  echo "No tracker changes to publish."
  exit 0
fi

echo "[3/5] Committing tracker-only changes"
git status --short
git add -- "${TRACKER_FILES[@]}"
git commit --quiet -m "$COMMIT_MESSAGE"
git push origin HEAD:main
COMMIT_HASH="$(git rev-parse --short HEAD)"

fetch_generated_at() {
  local url="$1"
  curl --fail --silent --show-error --location \
    --retry 5 --retry-all-errors --retry-delay 2 \
    "${url}?v=$(date +%s)" | node -e '
      let body = "";
      process.stdin.on("data", chunk => body += chunk);
      process.stdin.on("end", () => {
        try { process.stdout.write(JSON.parse(body).generatedAt || ""); }
        catch { process.exit(1); }
      });
    '
}

wait_for_freshness() {
  local label="$1" url="$2" attempts="${3:-12}" actual=""
  for ((i=1; i<=attempts; i++)); do
    actual="$(fetch_generated_at "$url" 2>/dev/null || true)"
    if [[ "$actual" == "$EXPECTED_GENERATED_AT" ]]; then
      echo "  $label: fresh ($actual)"
      return 0
    fi
    sleep 5
  done
  echo "  $label: stale or unavailable (expected $EXPECTED_GENERATED_AT, got ${actual:-none})" >&2
  return 1
}

echo "[4/5] Verifying GitHub publication"
wait_for_freshness "Raw GitHub" "$RAW_URL" 6
wait_for_freshness "GitHub Pages" "$PAGES_URL" 18

echo "[5/5] Checking optional Cloudflare deployment"
if [[ "$DEPLOY_CLOUDFLARE" == true ]]; then
  if [[ -z "${CLOUDFLARE_API_TOKEN:-}" ]]; then
    echo "Cloudflare skipped: set CLOUDFLARE_API_TOKEN before using --cloudflare." >&2
  else
    npx --yes wrangler@4 deploy
    wait_for_freshness "Cloudflare" "$CLOUDFLARE_URL" 12
  fi
else
  echo "Cloudflare skipped (use --cloudflare to deploy it)."
fi

echo "Published commit $COMMIT_HASH with generatedAt $EXPECTED_GENERATED_AT"
