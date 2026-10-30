# bczak.github.io — CV

Jakhongir Tashpulatov, full-stack developer. Live at https://bczak.github.io/ in English, Czech and Russian.

- `npm run dev` — run locally
- `npm run build` — build into `dist/`
- All text and facts: `src/content.ts` (one dictionary per language; TypeScript flags missing keys)
- Language: `?lang=cs|ru`, otherwise the browser language, otherwise English
- Print / Save as PDF gives a one-page A4 CV in the current language. `?print` shows that sheet on screen.
- Pushing to `main` deploys automatically (`.github/workflows/deploy.yml`), and it redeploys daily
- GitHub activity comes from `src/github.json`. Every deploy refreshes it; to refresh locally run `GITHUB_TOKEN=$(gh auth token) npm run github`
- The link preview `public/og.png` is a 1200×630 screenshot of `scripts/og.html`
