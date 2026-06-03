# Serenity Tracker

Serenity Tracker is a static research dashboard for tracking public X posts from `@aleabitoreddit` and organizing the ideas into a bilingual investment-watchlist format.

## Local Preview

Because the page reads `data/ideas.json`, open it through a local web server instead of directly through `file://`.

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000/index.html
```

## GitHub Pages

This repo is ready to publish as a static GitHub Pages site. The page uses:

- `index.html` for the app shell
- `styles.css` for layout and presentation
- `app.js` for filtering, sorting, and bilingual rendering
- `data/ideas.json` for the current research data

After publishing with GitHub Pages, every update to `data/ideas.json` will be reflected on the public site after Pages rebuilds.

## Daily Update Flow

Recommended flow:

1. Collect Serenity's newest public X posts before the U.S. market opens.
2. Update `data/ideas.json` with new ideas, changed tiers, evidence links, risks, and next checks.
3. Commit and push the changed JSON file.
4. GitHub Pages serves the refreshed dashboard.

The X collection step is best run from a logged-in local browser or Codex automation because X content may depend on login/session state.

