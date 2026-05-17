# brittanychiang.com local clone

This repository is a local Next.js wrapper around a downloaded production snapshot of https://brittanychiang.com.

## Important limitation

This is not the original source code. It is a built output (`index.html` + `_next` assets). You can edit the snapshot, but you cannot recover the original component/file structure from this alone.

## Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Open http://localhost:3000

## How this setup works

- The downloaded snapshot is served from `public/snapshot`.
- `/` rewrites to `/snapshot/index.html`.
- Asset URLs like `/_next/static/*` and `/favicon/*` are internally rewritten to `public/snapshot`.
- Any missing asset path falls back to `https://brittanychiang.com/...` so the page can still render if your downloaded copy is incomplete.

## Editing

- Main page markup: `public/snapshot/index.html`
- Styles from snapshot: `public/snapshot/_next/static/css/1205f04d95fac248.css`
- JS bundles from snapshot: `public/snapshot/_next/static/chunks/*`

If you want a clean, fully editable source version (React components, structured sections), we can recreate the page in a fresh Next.js codebase section by section.
