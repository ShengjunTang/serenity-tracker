# Serenity Tracker

Serenity Tracker is a static research dashboard for tracking public X posts from `@aleabitoreddit` and organizing the ideas into a bilingual investment-watchlist format.

## Public Site

Primary publishing flow is GitHub Pages. After pushing to `main`, the public site updates through the Pages workflow.

```text
https://shengjuntang.github.io/serenity-tracker/
```

## Local Preview

Local preview is optional and only used for development checks. Directly opening `index.html` through `file://` may not load `data/ideas.json` because browsers restrict local JSON fetching.

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
3. Commit and push the changed JSON file and any bilingual copy updates.
4. GitHub Pages serves the refreshed dashboard. No local deployment is needed for readers.

The X collection step is best run from a logged-in local browser or Codex automation because X content may depend on login/session state.
