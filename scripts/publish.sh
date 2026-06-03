#!/usr/bin/env bash
set -euo pipefail

node scripts/validate-data.mjs
git status --short

echo
echo "If the changes look right, run:"
echo "  git add index.html styles.css app.js data/ideas.json README.md .gitignore .github/workflows/pages.yml scripts"
echo "  git commit -m \"Update Serenity tracker\""
echo "  git push"

