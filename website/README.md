# The Leverage Report — website app

The Next.js application code for [The Leverage Report](../README.md). See the root README for
project context, the design/build process, and links to the Figma files.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3006](http://localhost:3006) — the dev server runs on port 3006 (set in
`package.json`'s `dev` script), not the Next.js default 3000.

## Other scripts

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # ESLint
```

## Structure

- `src/app/` — routes (App Router). Each tool/content page has its own folder.
- `src/components/` — shared UI (Header, Footer, ToolCard, CopyButton, icons, etc.)
- `src/lib/` — content and logic kept separate from UI: site-wide data (`site.ts`), each tool's
  calculation/generation logic (`promptEngine.ts`, `subscriptions.ts`, `savings.ts`,
  `raiseBuilder.ts`), and static content (`promptLibrary.ts`, `messageTemplates.ts`, `glossary.ts`).
- `src/hooks/` — small shared hooks (`useHasMounted`).

Full build log, including every design decision and how each page was verified:
[`../docs/09-development.md`](../docs/09-development.md).
