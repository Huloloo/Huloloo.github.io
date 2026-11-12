# Huloloo North America Landing Page

Static English-language landing page for Huloloo's North American audience.

## Production

- North America landing page: `https://en.huloloo.com/`
- Existing primary site remains unchanged at `https://www.huloloo.com/`
- Hosting: GitHub Pages
- Publishing source: `main` branch, repository root

## Huloloo App legal (English only)

Published on this site for app store listings and external links:

| Document | URL |
| --- | --- |
| Privacy Policy | `https://en.huloloo.com/privacy/` |
| Terms of Service | `https://en.huloloo.com/terms/` |

Clean paths are served as directory indexes (`privacy/index.html`, `terms/index.html`) — no `.html` in public URLs.

Source Markdown lives in `legal/`. Regenerate HTML after edits:

```bash
node scripts/build-legal-html.mjs
```

## Local preview

Run a static HTTP server from this directory and open `index.html`.
