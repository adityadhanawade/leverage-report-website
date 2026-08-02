# Lesson 1 — What the stack actually is

**Files to have open:** `website/package.json`, `website/src/app/layout.tsx`,
`website/src/components/Container.tsx`

---

## 1. The five dependencies

From the real `package.json`:

```json
"dependencies": {
  "framer-motion": "^12.42.2",
  "next": "16.2.11",
  "react": "19.2.4",
  "react-dom": "19.2.4",
  "recharts": "^3.10.0"
}
```

| Package | What it actually does |
|---|---|
| `react` | Lets you build UI out of reusable **functions** instead of hand-written HTML |
| `react-dom` | Takes React's output and actually puts it on a web page |
| `next` | Everything React doesn't do: routing, a server, a build system, SEO |
| `framer-motion` | Animation (the scroll-reveals, the count-up numbers) |
| `recharts` | The charts in the Subscription and Savings tools |

The first three are the stack. The last two are features this project chose.

React and React-DOM are split because React itself doesn't assume a web browser —
the same React can drive a mobile app (React Native). `react-dom` is the piece
that specifically targets a web page.

---

## 2. Why React exists

Plain HTML has no concept of reuse. This site has a header on all 10 pages. In
plain HTML you would copy-paste that header 10 times, and edit 10 files whenever
it changes.

React's core idea: **a piece of UI is just a function that returns HTML.**

The whole of `src/components/Container.tsx`:

```tsx
/** Centered page column — 1200px max width per Phase 5 section 3. */
export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-6 ${className}`}>
      {children}
    </div>
  );
}
```

A function named `Container` that returns something HTML-shaped. Now `<Container>`
can be used on any page to get a centered 1200px column. Written once, used
everywhere.

Three things to notice — they are essentially all of React:

1. **It is a function.** Not a template language, not a special file format. A
   normal JavaScript function.
2. **HTML lives inside the JavaScript.** That `<div>` is not a string. It is JSX,
   a syntax extension React added. Covered properly in Lesson 3.
3. **`{children}` is a slot.** Whatever is written between `<Container>` and
   `</Container>` gets rendered there.

---

## 3. Why Next.js exists

React alone gives components and nothing else — no URLs, no server, no `<title>`
tag, no deployment story. React is a *library*. Next.js is the *framework* that
wraps React and supplies everything a real website needs.

`src/app/layout.tsx`, line 2:

```tsx
import { Sora, Inter } from "next/font/google";
```

A Next.js feature. It downloads the Google Fonts at build time and serves them
from this site's own server, so text does not flicker or shift on load. React has
no opinion about fonts; Next.js does.

Lines 25–31 of the same file:

```tsx
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  openGraph: { title, description, siteName: "The Leverage Report", type: "website" },
  twitter: { card: "summary", title, description },
};
```

No `<title>` tag was written anywhere in this project. An object was exported, and
Next.js turned it into the real HTML `<head>`. That is the framework's pattern
throughout: **you declare, Next.js generates.**

---

## 4. Where TypeScript and Tailwind fit

Neither appears in `dependencies`. Both are in `devDependencies`, and the
distinction is important:

- **`dependencies`** ship to visitors' browsers.
- **`devDependencies`** only run on the developer's machine during the build.
  Visitors never download them.

TypeScript and Tailwind both **disappear** before the site reaches anyone.
TypeScript compiles to plain JavaScript. Tailwind compiles to plain CSS. They are
tools for the author, not for the browser.

---

## 5. The mental model

```
You write:     TypeScript + JSX + Tailwind classes
Next.js:       compiles it, routes it, renders it, serves it
Browser gets:  plain HTML + plain CSS + plain JavaScript
```

Visitors never receive React components, or types, or Tailwind class names. They
receive ordinary web files. Everything in `src/` is an author-time convenience
that gets flattened away by the build.

---

## Exercise 1

In `website/`, run:

```bash
npm run build
```

Then look at what it printed. Answer these three questions:

1. How many routes did it list?
2. Which one is marked differently from all the others, and what is different
   about it?
3. Find the "First Load JS" number. What do you think that number represents,
   given the mental model in section 5?

---

## Recruiter talking point

> "React is a UI library — components are just functions returning markup.
> Next.js is the framework around it that handles routing, rendering strategy,
> font optimisation and metadata. TypeScript and Tailwind are build-time only;
> nothing about them ships to the client."
