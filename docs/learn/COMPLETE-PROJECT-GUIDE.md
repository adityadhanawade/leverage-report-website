# The Leverage Report — Complete Project Study Guide

### Everything about the website: design, frontend, backend, deployment — and how to talk about it in an interview

---

**Live site:** https://leverage-report-website.vercel.app
**Source code:** https://github.com/adityadhanawade/leverage-report-website
**Design file (Figma):** https://www.figma.com/design/nLgaNdrpRv8b15FU8PwEzc

**Guide version:** 1.0 — 28 July 2026

---

## How to use this document

This guide has three kinds of content, and you should read them differently.

**Sections 1–3** are the story and the process. Read them once, properly. This is what
you talk about in the first five minutes of an interview.

**Sections 4–9** are the technical explanation — the languages, the frontend, the
backend, the deployment. This is the part to study slowly, with the actual code open
next to you. Do not try to memorise it. Understand it, then the words come out on
their own.

**Section 10** is interview preparation: 60+ real questions with model answers. Read
this last, after the rest makes sense. If you read it first the answers will be
hollow, and interviewers can tell.

One rule for the whole document: **never claim more than you did.** This project is
genuinely strong. It does not need inflating, and a single exaggerated claim that
falls apart under a follow-up question will do more damage than anything the project
gains you.

---

# 1. The project at a glance

## 1.1 What it is

A free website called **The Leverage Report** — a small collection of tools that help
ordinary people use AI to save, earn, and manage money. It is the web companion to an
existing Instagram page (@the.leverage.report) that posts short videos on the same
subject.

There is no signup wall, no ads, no paid tier, and nothing costs the visitor anything.

## 1.2 What it contains — 10 pages

| # | Page | URL | What it does |
|---|---|---|---|
| 1 | Home | `/` | Brand line + routes visitors to the right tool fast |
| 2 | Tools index | `/tools` | Lists all four interactive tools |
| 3 | AI Prompt Tool | `/tools/prompt` | Rough request in → well-structured AI prompt out |
| 4 | Subscription-Leak Calculator | `/tools/subscriptions` | Subscriptions in → yearly waste + chart |
| 5 | Savings Goal Planner | `/tools/savings` | Goal + monthly saving → timeline + chart |
| 6 | Raise & Negotiation Builder | `/tools/raise` | Role + ask → ready-to-send script |
| 7 | Prompt Library | `/library` | 13 searchable, hand-written prompts to copy |
| 8 | Message Templates | `/templates` | 12 ready-made scripts (raise, bills, outreach) |
| 9 | AI Terms Glossary | `/glossary` | 16 plain-English AI definitions (also the SEO entry point) |
| 10 | About | `/about` | Short, anonymous brand story |

Plus a branded 404 page, an `/api/subscribe` backend endpoint, and generated
`/sitemap.xml` and `/robots.txt`.

## 1.3 The technology, in one table

| Layer | Technology | Version | Why it's there |
|---|---|---|---|
| Language | **TypeScript** | 5 | JavaScript with type checking |
| UI library | **React** | 19.2.4 | Builds the interface out of reusable functions |
| Framework | **Next.js** (App Router) | 16.2.11 | Routing, rendering, server, build, SEO |
| Styling | **Tailwind CSS** | v4 | Utility CSS + the design tokens |
| Animation | **Framer Motion** | 12 | Scroll reveals, count-ups, hover states |
| Charts | **Recharts** | 3 | The two calculator charts |
| Email backend | **MailerLite API** | free tier | Stores newsletter subscribers |
| Hosting | **Vercel** | free tier | Builds and serves the site |
| Version control | **Git + GitHub** | — | Source history; triggers auto-deploys |
| Design | **Figma** | free | Wireframes, design system, mockups, prototype |

## 1.4 The numbers

- **~2,360 lines** of application code across **33 files**
- **15 build routes** — 14 pre-rendered as static, 1 dynamic (the API)
- **14 wireframe screens** + **14 high-fidelity mockups** (8 mobile + 6 desktop each)
- **53 prototype click connections** in Figma across two independent flows
- **9 design tokens** (8 colours + 2 radii) and **2 font families**
- **Total cost: ₹0.** Every service used sits inside a free tier.

---

# 2. The problem, and why the site exists

This matters more than the code. Interviewers ask "why did you build this?" and a
weak answer ("to learn React") wastes the best part of the project.

## 2.1 The real problem

The Instagram page already had an audience. But Instagram has a structural weakness
for practical content: **a tip is useful for the fifteen seconds it is on screen, and
then it disappears into an unsearchable feed.** Somebody who saw a genuinely useful
tip last week has no realistic way to find it again.

At the same time, the existing "AI + money" content online falls into two unhelpful
categories:

- **Generic prompt-list sites** — huge, unfiltered, no niche, no quality bar.
- **Personal-finance blogs** — cluttered with ads, affiliate links, and upsells.

Neither is built to be *used*. Both are built to be scrolled past, or monetised
against the visitor.

## 2.2 The gap

> There was no simple, honest, free place that turned "AI can help your money" into a
> tool a visitor could actually use in under two minutes — with no signup wall and no
> catch buried in the fine print.

That sentence is the entire product strategy. Every decision in the project traces
back to it:

| Decision | Traces back to |
|---|---|
| Four working tools, not a blog | "a tool you can *use*", not read |
| No signup wall anywhere | "under two minutes", no friction |
| A visible "the catch" note on every tool | "no catch buried in the fine print" |
| No ads, no affiliate links, no paid tier | the competitor gap |
| Multi-page site with real URLs | each tool gets a shareable link |

## 2.3 Two goals, held at once

This project was deliberately built to serve two audiences:

1. **For visitors** — genuinely useful free tools, not a vanity page.
2. **For the portfolio** — one project that produces *both* a UI/UX design portfolio
   (Figma research, wireframes, design system, mockups, prototype) *and* a full-stack
   engineering portfolio (real coded, tested, deployed application).

That dual goal is unusual and worth stating in an interview. Most student projects
show one or the other.

## 2.4 The hard constraints

Four rules were locked at the start and never broken:

1. **100% free.** Zero investment. Free hosting, free tier services, open-source
   stack, no paid domain.
2. **Legitimate tools only.** Nothing illegal, pirated, or sketchy — consistent with
   the brand's honesty positioning.
3. **Ownership stays private.** The public site is anonymous under the brand name.
   Authorship is disclosed privately, to recruiters only.
4. **The AI Prompt Tool must be free forever** — built with in-browser templates, not
   a paid API, so it can never start costing money or quietly break.

Constraint 4 is the most interesting one technically, and section 6.4 explains how it
was met.
---

# 3. The design process — how a real website gets designed before any code

The project ran through a **ten-phase professional process**. Phases 1–8 are UI/UX
design work (done in Figma and written docs). Phases 9–10 are engineering.

This ordering is the single most important thing to understand about the project.
**Nothing was coded until it had been researched, structured, wireframed, styled, and
prototyped.** That is how professional teams work, and it is the thing that separates
this from a tutorial project.

```
1 Discovery → 2 Research → 3 Information Architecture → 4 Wireframes →
5 Design System → 6 Mockups → 7 Prototype → 8 Test →
9 Development → 10 Deploy
```

## Phase 1 — Discovery (the Project Brief)

**Artifact:** `docs/01-project-brief.md`

Before anything else: write down what is being built, for whom, why, and how success
will be measured. A brief prevents the most common failure in solo projects — scope
that quietly grows until nothing ever ships.

The brief locked:
- the audience (Western — US/UK/CA/AU — everyday people, matching the Instagram
  audience)
- the problem statement (section 2.2 above)
- the eight deliverables the site must provide
- the success metrics

**Why it matters:** every later argument ("should we add feature X?") gets settled by
pointing at the brief instead of by opinion.

## Phase 2 — Research (personas + competitor analysis)

**Artifact:** `docs/02-research.md`

Two **proto-personas** were built from the brand's real Instagram audience data:

- **Emma, 28, UK** — money "leaks away" each month; has tried ChatGPT but doesn't
  know how to prompt it well; wants something usable in under two minutes with no
  signup.
- **Ryan, 22, US** — student freelancer; needs to sound professional in client
  outreach; wants to understand AI terminology without feeling behind.

Then a **competitor scan** across generic prompt-list sites, personal-finance blogs,
and AI-influencer link pages. The finding was consistent: every category traded
something away — quality, cleanliness, or honesty — in exchange for reach or
monetisation.

### An honesty problem, and how it was handled

There is a real methodological weakness here, and the project documents it rather
than hiding it: the personas are Western, and were written by someone based in India,
without primary user interviews.

They are therefore labelled **proto-personas** — the correct industry term for
personas built from existing data and assumptions rather than from fresh user
research. The limitation is stated openly in the research doc.

> **This is a strength in an interview, not a weakness.** Knowing the difference
> between a persona and a proto-persona, and labelling your work honestly, is a more
> senior signal than claiming user interviews you never ran. If an interviewer probes
> it, the answer is: *"They're proto-personas grounded in real audience analytics from
> the Instagram page, not interview-based personas. For a solo v1 that's the honest
> label, and validating them with real users is the stated next step."*

## Phase 3 — Information Architecture (sitemap + user flows)

**Artifact:** `docs/03-information-architecture.md`

**Information Architecture** = deciding what pages exist and how they connect, before
deciding how anything looks.

Two parts:

**A. The sitemap** — a multi-page structure was chosen over one long scrolling page,
for three concrete reasons:
1. Each tool gets its own shareable URL (droppable in an Instagram bio or reel).
2. The Glossary pages can be found on Google individually (SEO).
3. It demonstrates real routing — a stronger engineering signal.

**B. User flows** — the step-by-step path a visitor takes. Three were mapped:
- *Emma saves money:* reel → link in bio → Home → Subscription Calculator → sees
  yearly waste → joins email list.
- *Ryan learns a term:* Google search → Glossary → definition → related tool → AI
  Prompt Tool → copies a prompt.
- *Core interaction:* open Prompt Tool → type request → pick tone → build → copy →
  paste into an AI.

**Five IA principles** were locked and guided every later screen:
1. Home is a launchpad, not a wall of text.
2. Every tool reachable in ≤2 clicks from anywhere.
3. No dead ends — always offer a next step after a result.
4. Consistent nav and footer on every page.
5. Each page has exactly one job.

## Phase 4 — Wireframes

**Artifact:** `docs/04-wireframes.md` + Figma page "Wireframes — v1"

A **wireframe** is a grey-box layout: boxes and labels only, no colour, no fonts, no
images. The point is to decide *structure* — what goes where, in what order, at what
size — without being distracted by how pretty it is.

**14 screens** were built: all 8 pages at mobile width, plus desktop versions of the
6 that started mobile-only.

**A process note worth being honest about:** the desktop wireframes were built *after*
the desktop mockups, not before. The real sequence was: wireframe everything at
mobile, iterate fast on Home at desktop, build the desktop mockups, and then backfill
the missing desktop wireframes once the gap was noticed. That is a legitimate real
project workflow — but the doc says so plainly rather than presenting a tidy fiction.

## Phase 5 — Design System

**Artifact:** `docs/05-design-system.md` + Figma page "Design System"

A **design system** is the reusable rulebook for how the site looks and behaves. Once
it is locked, every later screen *applies* the rules instead of re-deciding them. It
is what makes a site feel designed rather than hand-assembled.

### The colour palette (8 tokens)

| Role | Hex | Used for |
|---|---|---|
| Brand accent | `#E0531E` | Buttons, icons, borders, active states |
| Accent text | `#be471a` | Small accent-coloured *text* (see below) |
| Background | `#FBF6E9` | Page background (warm off-white) |
| Surface | `#FFFFFF` | Cards, input fields |
| Ink | `#211C16` | Body text and headings |
| Muted | `#6E6558` | Secondary text, labels, hints |
| Border | `#E5DFD1` | Card borders, dividers |
| Success | `#3B7A3F` | Positive results |
| Error | `#b3261e` | Form errors (added later, in Phase 9) |

**Two deliberate decisions here, both worth explaining in an interview:**

**1. The accent colour was inherited, not invented.** `#E0531E` is the Instagram
brand's existing locked accent. Reusing it means a follower instantly recognises the
website as the same brand. Brand consistency across mediums beats picking a fresh
colour you like better.

**2. The theme deliberately does *not* match the Instagram look.** The reels use a
dark, textured, torn-paper aesthetic. The website is light, clean, and spacious. This
is not inconsistency — it is two mediums with two different jobs:

> A 30-second reel has to *interrupt a scroll*, so it needs to be loud. A website
> visitor has already arrived and wants to *get something done fast*, so it needs to
> get out of the way. The accent colour is what ties them together — not the whole
> visual system.

### Typography

| Role | Font | Why |
|---|---|---|
| Headings | **Sora** (Google Fonts) | Geometric, modern, reads as "fintech/tech", strong at large sizes |
| Body & UI | **Inter** (Google Fonts) | The industry-standard UI font — extremely legible at small sizes |

Again the reels' fonts (Archivo Black + Caveat) were deliberately *not* reused: they
are built for video impact, not for reading long UI text at 13–16px.

**Type scale:** H1 32px, H2 24px, H3 18px, body 16px, small 13px, caption 11px.

### Spacing and shape
- **8-point grid** — every margin, padding and gap is a multiple of 8px.
- **Corner radius** — 8px on buttons and inputs, 12px on cards.
- **Max content width** — 1200px, centred, with side padding.

### The motion spec

Written in Phase 5, implemented in Phase 9. The principle: **purposeful motion only,
nothing over 600ms, and every animation disabled for visitors who ask for reduced
motion.**

| Interaction | Motion | Why it exists |
|---|---|---|
| Section enters view | Fade + rise 12px, 400ms | Guides attention |
| Button hover | Scale 1.02, 150ms | Confirms it's clickable |
| Button press | Scale 0.97, 100ms | Tactile feedback |
| Calculator result | Count-up, 600ms | Makes the "that's how much I waste" moment land |
| Chart | Draws in from 0, 500ms | Feels alive, not a static image |
| Copy button | Icon morphs to a checkmark, 200ms, reverts after 1.5s | Clear confirmation |
| Tool card hover | Border shifts to accent, 150ms | Invites the click |

The 600ms ceiling comes straight from Phase 2's finding that speed-to-value is what
this audience wants. Slow animations fight the product's own goal.

## Phase 6 — High-fidelity mockups

**Artifact:** `docs/06-high-fidelity-mockups.md` + Figma page "Mockups"

**14 screen designs** (8 mobile + 6 desktop) — the real thing, in full colour, with
the Phase 5 tokens applied. This is what the site is supposed to look like when built.

## Phase 7 — Clickable prototype

**Artifact:** `docs/07-prototype.md`

**53 click connections** wired in Figma: 22 across the 8 mobile screens, 31 across the
7 desktop screens, forming **two independent, self-contained flows** with two starting
points. Pressing Present in Figma lets someone click through the whole site before a
single line of code exists.

**A real bug found here, and it is a good story:** the first version wired Home
Desktop's buttons to mobile-only destination screens. Clicking anything in Presenter
mode snapped the viewport from 1440px down to 375px — a jarring, broken-feeling jump.
The fix was to build proper desktop destinations, and the rule learned was recorded:
*never wire a prototype connection across mismatched frame widths.*

## Phase 8 — Test & refine

**Deliberately deferred, and documented as a conscious decision rather than an
oversight.** Extensive UX issues were already caught and fixed live while building and
testing the prototype, so formal usability testing was traded for a heavier
self-testing and bug-hunting pass on the *coded* site (see section 9).

> **How to say this in an interview:** *"Phase 8 was formal usability testing and I
> deliberately deferred it. For a solo v1 with no test participants, I traded it for a
> much heavier QA pass on the real build — a 20-input regression battery on the prompt
> engine, an accessibility audit, and an XSS pass. Real-user testing is the honest next
> step, and it's written up as such."* That answer is far stronger than pretending you
> ran usability sessions.

## The documentation discipline

Every phase produced a written artifact, and the whole project kept a running
progress log. Two files are worth calling out specifically:

- **`PROJECT.md`** — the internal working log and single source of truth. Every
  session appended what was decided, what was built, what broke, and what was next.
- **`docs/_figma-build-lessons.md`** — a running checklist of **12 rules**, one added
  every time a bug was found in the Figma build, with the standing rule that the
  checklist gets re-read *before* every new build.

That second file is the strongest process artifact in the project. It is a written
record of learning from mistakes systematically instead of fixing each one and moving
on. Rule #12 even records a *meta*-lesson: documenting a rule did not prevent
violating the same rule later under a different name — so the practice became
re-reading the existing rules before adding new blanket habits.
---

# 4. Web fundamentals — what actually happens when someone visits your site

Everything in sections 5–8 sits on top of this. If this part is solid, the rest is
much easier.

## 4.1 The three original languages

Every website in the world, no matter how modern, ends up as three kinds of file that
a browser understands:

| Language | Job | Analogy |
|---|---|---|
| **HTML** | Structure and content | The skeleton — what things *are* |
| **CSS** | Appearance | The clothes — what things *look like* |
| **JavaScript** | Behaviour | The muscles — what things *do* |

A browser understands **only** these three. It has never heard of React, Next.js,
TypeScript, or Tailwind. This is the single most important fact in this document:

> **Every tool in this project exists to help *you* write code. All of it is
> translated into plain HTML, CSS, and JavaScript before it reaches a visitor.**

## 4.2 The request/response cycle

When someone types your URL:

```
1. Browser  →  "GET https://leverage-report-website.vercel.app/"
2. Vercel's server receives it
3. Server responds with HTML  →  Browser
4. Browser reads the HTML, sees it needs CSS and JS, requests those too
5. Browser paints the page
6. JavaScript loads and makes the page interactive
```

Steps 5 and 6 are separate, and the gap between them matters — see hydration (5.5).

## 4.3 Client and server

Two words used constantly, and constantly confused:

- **Client** = the visitor's browser. On their phone or laptop. You do not control it.
  **Anything you send here, the visitor can read** — including your JavaScript.
- **Server** = a computer you control (here: Vercel's). The visitor never sees inside
  it. **Secrets live here and only here.**

This distinction is why the MailerLite API key lives in a server file and not in a
component (section 7.3). Get this one right and backend security mostly follows.

## 4.4 Frontend and backend

- **Frontend** = everything the visitor sees and interacts with. The 10 pages, the
  buttons, the charts. Runs mostly in the browser.
- **Backend** = code that runs on a server, that the visitor never sees. In this
  project it is exactly one file: `src/app/api/subscribe/route.ts`.

**Full-stack** means you built both. You did.

## 4.5 What an API is

An **API** (Application Programming Interface) is a way for one program to ask another
program to do something, over the internet.

Your site has one API *of its own*: `/api/subscribe`. Your browser sends an email
address to it. It responds with success or an error.

Your site also *calls* someone else's API: MailerLite's. Your server sends the email
address on to `https://connect.mailerlite.com/api/subscribers`, and MailerLite stores
it.

So the same address travels: **browser → your API → MailerLite's API.** Section 7
walks through exactly why that middle step exists instead of the browser calling
MailerLite directly.

---

# 5. The stack, explained from zero

## 5.1 Why five dependencies and not one

The real `package.json`:

```json
"dependencies": {
  "framer-motion": "^12.42.2",
  "next": "16.2.11",
  "react": "19.2.4",
  "react-dom": "19.2.4",
  "recharts": "^3.10.0"
},
"devDependencies": {
  "@tailwindcss/postcss": "^4",
  "typescript": "^5",
  "tailwindcss": "^4",
  "eslint": "^9",
  ...
}
```

**`dependencies` ship to visitors' browsers. `devDependencies` only run on your
machine during the build.** TypeScript and Tailwind are in the second group — they
*disappear* before the site reaches anyone. TypeScript compiles to plain JavaScript;
Tailwind compiles to plain CSS.

## 5.2 React — UI as functions

### The problem React solves

Plain HTML has no concept of reuse. This site has a header on all 10 pages. In plain
HTML you would copy-paste it 10 times, and edit 10 files whenever it changes.

### The idea

> **A piece of UI is just a function that returns markup.**

Here is a complete React component from the project — the whole of
`src/components/Container.tsx`:

```tsx
export function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-6 ${className}`}>
      {children}
    </div>
  );
}
```

A function named `Container`. It returns something markup-shaped. Now `<Container>`
can be used on any page to get a centred 1200px column. Written once, used everywhere.

### JSX

That `<div>` inside JavaScript is **JSX** — a syntax React added so markup can sit
directly inside code. It is not HTML and it is not a string; it compiles to function
calls. Four differences from HTML that trip up every beginner:

| HTML | JSX | Why |
|---|---|---|
| `class="..."` | `className="..."` | `class` is a reserved word in JavaScript |
| `for="..."` | `htmlFor="..."` | same reason |
| `onclick="..."` | `onClick={...}` | camelCase, and takes a real function |
| `<br>` | `<br />` | every tag must close |

Curly braces `{}` mean "switch back to JavaScript here". So
`` className={`... ${className}`} `` is JavaScript building a string.

### Props

**Props** are the inputs to a component — exactly like function arguments, because
that is what they are. `Container` takes two: `children` and `className`.

`children` is special: it is whatever you put *between* the opening and closing tags.

```tsx
<Container className="pb-16">
  <h1>Hello</h1>     ←  this is `children`
</Container>
```

### Rendering a list

From the real homepage (`src/app/page.tsx`):

```tsx
{tools.map((tool, i) => (
  <Reveal key={tool.slug} delay={i * 0.06}>
    <ToolCard tool={tool} />
  </Reveal>
))}
```

`tools` is an array of four objects. `.map()` turns each one into a `<ToolCard>`. This
is why adding a fifth tool means adding one object to an array, not writing new
markup.

**The `key` prop** is required on lists. React uses it to tell items apart between
re-renders. Without it React warns, and can mis-associate state when the list
reorders. `tool.slug` is used because it is unique and stable — never use the array
index as a key for a list that can reorder.

## 5.3 State — how a page becomes interactive

A component is a function that returns markup. So how does anything change?

**State** is a value React remembers between renders. When state changes, React
re-runs the function and updates only the parts of the page that actually differ.

The real search box from `SearchableLibrary.tsx`:

```tsx
const [query, setQuery] = useState("");
const [filter, setFilter] = useState<string>("All");
```

`useState("")` returns two things: the current value (`query`) and a function to
change it (`setQuery`). The `""` is the starting value.

```tsx
<input
  value={query}
  onChange={(e) => setQuery(e.target.value)}
/>
```

This is a **controlled input**: the input's displayed value comes *from* state, and
every keystroke calls `setQuery`, which updates state, which re-renders, which updates
the displayed value. React state is the single source of truth, not the DOM.

**The mental model that makes React click:**

> You never tell the page *how* to change. You change the state and describe what the
> UI should look like for that state. React works out the difference.

### `useMemo` — and why it is here

```tsx
const filtered = useMemo(() => {
  const q = query.trim().toLowerCase();
  return items.filter((item) => {
    const matchesCategory = filter === "All" || item.category === filter;
    const matchesQuery =
      q.length === 0 ||
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.copyText.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });
}, [items, query, filter]);
```

`useMemo` caches a computed result and only recalculates when something in the
dependency array `[items, query, filter]` changes. Without it this filter would re-run
on *every* render, including ones caused by unrelated state.

Note the logic: category and search combine with **AND** (`matchesCategory &&
matchesQuery`), not as two exclusive modes. Picking "Career" and typing "invoice"
correctly gives zero results and an honest empty state, rather than silently falling
back to an OR.

## 5.4 Next.js — everything React does not do

React alone gives you components and nothing else: no URLs, no server, no `<title>`,
no build, no deployment. React is a **library**. Next.js is the **framework** around
it.

### File-based routing

In Next.js's App Router, **the folder structure *is* the URL structure.** A file named
`page.tsx` becomes a visitable page at its folder's path:

```
src/app/page.tsx                    →  /
src/app/about/page.tsx              →  /about
src/app/glossary/page.tsx           →  /glossary
src/app/library/page.tsx            →  /library
src/app/templates/page.tsx          →  /templates
src/app/tools/page.tsx              →  /tools
src/app/tools/prompt/page.tsx       →  /tools/prompt
src/app/tools/raise/page.tsx        →  /tools/raise
src/app/tools/savings/page.tsx      →  /tools/savings
src/app/tools/subscriptions/page.tsx→  /tools/subscriptions
src/app/api/subscribe/route.ts      →  /api/subscribe   (an API, not a page)
src/app/not-found.tsx               →  the 404 page
```

There is no routing configuration file anywhere in this project. Creating a folder
with a `page.tsx` creates a URL. That is the whole system.

**Special filenames** in the App Router:

| File | Meaning |
|---|---|
| `page.tsx` | A visitable page at this path |
| `layout.tsx` | Wrapper UI shared by this path and everything below it |
| `route.ts` | An API endpoint (returns data, not a page) |
| `not-found.tsx` | The 404 page |
| `sitemap.ts` / `robots.ts` | Generate `/sitemap.xml` and `/robots.txt` |
| `icon.svg` | The favicon |

### The root layout

`src/app/layout.tsx` wraps **every** page. It is where the `<html>` and `<body>` tags
live — you write them once for the entire site:

```tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a href="#main" className="sr-only focus:not-sr-only ...">Skip to content</a>
        <Header />
        <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
```

`{children}` is where the current page gets injected. This is why the header, footer
and skip link appear on all 10 pages without being written 10 times.

### Metadata — you declare, Next generates

No `<title>` tag was typed anywhere in this project. Instead, `layout.tsx` exports an
object:

```tsx
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "The Leverage Report — Free AI-Money Toolkit",
    template: "%s — The Leverage Report",
  },
  description: "Free tools to write better AI prompts, cut wasted subscriptions...",
  openGraph: { title, description, siteName: "The Leverage Report", type: "website" },
  twitter: { card: "summary", title, description },
};
```

Next turns this into real `<head>` tags at build time. The `template: "%s — The
Leverage Report"` means any page that sets its own title gets the brand appended
automatically — so the glossary page becomes "AI Terms Glossary — The Leverage Report"
without repeating the brand name in every file.

### Font optimisation

```tsx
import { Sora, Inter } from "next/font/google";

const sora = Sora({ variable: "--font-sora", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
```

Next downloads these Google Fonts **at build time** and serves them from your own
domain. Two real benefits: no request to Google's servers on page load (faster, and
better for privacy), and no layout shift when the font swaps in. Each font is exposed
as a CSS variable that Tailwind then uses.

## 5.5 Server Components, Client Components, and `"use client"`

This is the most confusing part of modern Next.js, and the part interviewers probe.

**By default, every component in the App Router is a Server Component.** It runs on
the server, at build time, and only its finished HTML is sent to the browser. Its
JavaScript is *never* downloaded by the visitor.

That is great for speed — but server components cannot be interactive. There is no
click handler, no state, no browser on a server.

So when a component needs interactivity, you put **`"use client"`** at the top of the
file:

```tsx
"use client";

import { useMemo, useState } from "react";
```

That marks the boundary. That file, and everything it imports, gets bundled and sent
to the browser.

**In this project:**

| Client components (`"use client"`) | Why |
|---|---|
| `SearchableLibrary.tsx` | Search box and filter chips need state |
| `Header.tsx` | Mobile menu opens and closes |
| `EmailSignup.tsx` | Form submission and status states |
| `CopyButton.tsx` | Clipboard access and the checkmark animation |
| `Reveal.tsx` / `AppearIn.tsx` / `CountUp.tsx` | Animation, needs the browser |
| `GlossaryList.tsx` | Search state |
| All four tool pages | Inputs and live results |

| Server components (default) | Why they can be |
|---|---|
| `page.tsx` (Home) | Static content; the interactive bits are nested children |
| `/library`, `/templates` | Pure content; the interactivity lives inside `SearchableLibrary` |
| `/about`, `/tools` | Entirely static |
| `Container.tsx`, `ToolCard.tsx`, `Footer.tsx` | No state of their own |

**The pattern to notice, because it is a genuinely good architectural decision:**
`/library` and `/templates` are *server* components that render a *client* component
inside them. Only the small interactive part ships JavaScript; the page shell around
it does not. This happened naturally when the shared search/filter/grid pattern was
extracted into `SearchableLibrary` — the pages became thin wrappers that just supply
content.

### Hydration — and a real bug it caused

**Hydration** is the moment the browser's React "takes over" the server-rendered HTML
and attaches interactivity. For this to work, **React's first render in the browser
must produce exactly the same output as the server did.** If it does not, React
reports a hydration mismatch.

This project hit a genuine hydration bug, and it is one of the best interview stories
in the whole build. Read the fix, in `src/components/Reveal.tsx`:

```tsx
export function Reveal({ children, delay = 0, className = "" }) {
  const mounted = useHasMounted();
  const prefersReducedMotion = useReducedMotion();

  if (mounted && prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
```

**The bug:** `useReducedMotion()` reads a browser setting. On the server there is no
browser, so it returns nothing and the server renders an animated `motion.div`. On the
client, for a visitor who has "reduce motion" turned on, it immediately returns `true`
and renders a plain `div`. Server HTML and first client render disagree → hydration
mismatch.

The irony worth mentioning: **the bug only affected visitors with reduced motion
enabled — the exact people the accessibility feature was written to serve.**

**The fix** is the `useHasMounted()` gate:

```tsx
const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export function useHasMounted(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
```

It returns `false` during server rendering **and** during the client's very first
render, and `true` on every render after. So the first render is now identical
everywhere, hydration succeeds, and the swap to the reduced-motion `div` happens as a
normal client-side re-render immediately after.

It uses `useSyncExternalStore` rather than the more common `useState` + `useEffect`
pair, because that is React's recommended shape for "am I on the client" and it avoids
an extra render pass.

## 5.6 TypeScript

TypeScript is JavaScript plus type annotations. It catches a whole class of bugs
before the code ever runs, and it **compiles away completely** — the browser receives
plain JavaScript.

The syntax to recognise:

```tsx
export type LibraryItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  copyText: string;
};
```

That defines a shape. Now any function that takes a `LibraryItem` is guaranteed to
receive an object with those five string fields — or the build fails.

**Union types** — a value that must be one of a fixed set:

```tsx
export type ToneValue =
  | "confident" | "friendly" | "formal" | "persuasive" | "concise";

const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
```

That `status` type is genuinely useful: it makes it **impossible** to typo a status
into a state the UI does not handle. `setStatus("succes")` fails at build time, not in
production.

**Typed props:**

```tsx
export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
```

The `?` means optional. `React.ReactNode` means "anything React can render". So
`<Container>` without children is a compile error, and `<Container className={5}>` is
too.

**What TypeScript actually bought this project:** the whole site builds with zero type
errors (`tsc --noEmit` is clean), which means every component is called with the right
props everywhere, every time. On a 33-file project that is checked automatically
instead of by hand.

## 5.7 Tailwind CSS v4 and the design tokens

Traditional CSS: write a class name, then define it in a separate stylesheet.
Tailwind: compose small single-purpose utility classes directly in the markup.

```tsx
<div className="rounded-card border border-border bg-surface p-5">
```

That reads: 12px corners, a 1px border in the border colour, white background, 20px
padding.

**The objection everyone raises** — "isn't that just inline styles with extra steps?"
The answer: no, because these utilities can only produce values from your design
system. You cannot accidentally write `#e15420` instead of `#E0531E`. And Tailwind
deletes every class you did not use, so the shipped CSS file is tiny.

### The design tokens — where Figma becomes code

This is the bridge between Phase 5 and Phase 9, and it is worth understanding
properly. `src/app/globals.css`:

```css
@import "tailwindcss";

@theme {
  --color-accent: #e0531e;
  --color-accent-text: #be471a;
  --color-background: #fbf6e9;
  --color-surface: #ffffff;
  --color-ink: #211c16;
  --color-muted: #6e6558;
  --color-border: #e5dfd1;
  --color-success: #3b7a3f;
  --color-error: #b3261e;

  --font-heading: var(--font-sora), ui-sans-serif, system-ui, sans-serif;
  --font-sans: var(--font-inter), ui-sans-serif, system-ui, sans-serif;

  --radius-control: 8px;
  --radius-card: 12px;
}
```

Tailwind v4's `@theme` block turns each variable into utility classes automatically:

| Token | Generates |
|---|---|
| `--color-accent` | `bg-accent`, `text-accent`, `border-accent` |
| `--color-muted` | `text-muted`, `bg-muted`, … |
| `--radius-card` | `rounded-card` |
| `--font-heading` | `font-heading` |

**The consequence, and this is the point:** after this file, **no hex code is ever
typed into a component again.** The Phase 5 design system exists in exactly one place
in the codebase. Changing the brand colour is a one-line edit that updates all 10
pages.

This is the concrete, demonstrable link between the design phase and the engineering
phase — and it is a strong thing to show an interviewer.

### Responsive design

Tailwind prefixes apply a class only above a certain screen width. The site is
**mobile-first**: the unprefixed class is the mobile style, and prefixes add desktop
behaviour.

```tsx
<div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
```

Two columns on mobile; four from the `lg` breakpoint (1024px) up.

```tsx
<h1 className="font-heading text-[32px] font-bold leading-[1.15] md:text-[56px]">
```

32px heading on mobile, 56px from 768px up — exactly the Phase 5 type scale.

Breakpoints used: `sm` 640px, `md` 768px, `lg` 1024px.
---

# 6. Frontend architecture — how this specific site is built

## 6.1 The folder structure

```
leverage-report-website/
├── README.md            ← public overview (what recruiters see on GitHub)
├── PROJECT.md           ← internal working log & source of truth
├── docs/                ← one artifact per phase + case study
│   ├── 01-project-brief.md      05-design-system.md
│   ├── 02-research.md           06-high-fidelity-mockups.md
│   ├── 03-information-architecture.md   07-prototype.md
│   ├── 04-wireframes.md         09-development.md
│   ├── case-study.md            _figma-build-lessons.md
│   └── learn/           ← this study guide
├── design/              ← Figma exports
├── assets/screenshots/  ← images for the README and case study
└── website/             ← THE APPLICATION
    ├── package.json     ← dependency list + npm scripts
    ├── tsconfig.json    ← TypeScript configuration
    ├── next.config.ts   ← Next.js configuration
    ├── eslint.config.mjs
    ├── .env.local       ← SECRETS — never committed to git
    └── src/
        ├── app/         ← routes (folders = URLs)
        ├── components/  ← reusable UI pieces
        ├── lib/         ← pure logic & content, no UI
        └── hooks/       ← custom React hooks
```

**The one idea behind `src/`:** three folders, three responsibilities.

- **`app/`** — *where things live* (URLs, pages, layouts, API)
- **`components/`** — *what things look like* (UI, JSX, styling)
- **`lib/`** — *what things do* (calculations, content data, no JSX at all)

## 6.2 The separation of logic and UI — the most important architectural decision

Every tool in this project splits into two files:

| Tool | UI file (`components`/`app`) | Logic file (`lib/`) |
|---|---|---|
| AI Prompt Tool | `app/tools/prompt/page.tsx` | `lib/promptEngine.ts` |
| Subscription Calculator | `app/tools/subscriptions/page.tsx` | `lib/subscriptions.ts` |
| Savings Planner | `app/tools/savings/page.tsx` | `lib/savings.ts` |
| Raise Builder | `app/tools/raise/page.tsx` | `lib/raiseBuilder.ts` |

**Why this matters.** The `lib/` files are **pure functions**: data in, data out, no
React, no DOM, no side effects. That gives three real benefits:

1. **The maths is readable on its own.** Anyone can check `monthlyCost()` is correct
   without understanding React.
2. **It is testable in isolation** — you can call `computeSavingsPlan()` directly
   without rendering anything.
3. **The UI can be redesigned without touching the logic**, and vice versa.

Look at how small and clear the logic gets when it is not tangled with markup —
`lib/subscriptions.ts`:

```ts
/** A subscription's cost normalized to a monthly figure. Invalid/blank price → 0. */
export function monthlyCost(sub: Subscription): number {
  const price = parseFloat(sub.price);
  if (!Number.isFinite(price) || price <= 0) return 0;
  return sub.period === "year" ? price / 12 : price;
}

export function totalMonthly(subs: Subscription[]): number {
  return subs.reduce((sum, s) => sum + monthlyCost(s), 0);
}

export function totalYearly(subs: Subscription[]): number {
  return totalMonthly(subs) * 12;
}
```

Notice `monthlyCost` handles bad input **at the source**: a blank field, letters, or a
negative number all become `0` rather than `NaN`. Because every total flows through
this one function, `NaN` can never appear anywhere in the UI. That is defensive
programming in the right place — once, at the boundary, not scattered through the
components.

## 6.3 `lib/site.ts` — one source of truth for content

A subtle but genuinely good decision. The nav links, the four tools, the footer links,
and the trust points are defined **once**:

```ts
export const tools: Tool[] = [
  {
    slug: "prompt",
    href: "/tools/prompt",
    name: "AI Prompt Tool",
    shortName: "Prompt Tool",
    blurb: "Turn a rough idea into a prompt that actually gets a good answer.",
    icon: "prompt",
    ready: true,
  },
  ...
];

export const navLinks = [
  { href: "/tools", label: "Tools" },
  { href: "/library", label: "Library" },
  { href: "/templates", label: "Templates" },
  { href: "/glossary", label: "Glossary" },
] as const;
```

The header, the footer, the homepage grid, and the `/tools` page all read from this
array. **They cannot drift apart**, because there is only one list. Renaming a tool is
a one-word edit that updates four places.

The `ready: boolean` field is the honesty mechanism: during development, tools that
were not built yet rendered with a visible "Coming soon" tag instead of linking to a
404. Nothing was ever faked.

## 6.4 The AI Prompt Tool — the star feature

**The constraint:** it must be free forever. No paid API. That rules out calling
OpenAI or Anthropic.

**The solution** in `lib/promptEngine.ts`: keyword-based intent detection plus
hand-written prompt-engineering templates, running entirely in the visitor's browser.
Zero network calls, zero cost, zero "we sent your text to a third party" risk.

Each category is an object with a regular expression and a template builder:

```ts
type Category = {
  id: string;
  test: RegExp;
  build: (input: string, tone: ToneValue) => string;
};

{
  id: "raise",
  test: /\b(raise|promotion|salary|pay ?rise|negotiat\w*|compensation)\b/i,
  build: (input, tone) => `Act as an experienced compensation coach...

Here's my situation: ${input}

Write a short script I can say out loud when I ask for this. Include:
1. A confident opening line that states what I want
2. 2-3 specific reasons this is deserved, pulled from what I told you above
...
${toneLine[tone]}`,
}
```

Matching is one line:

```ts
const category = categories.find((c) => c.test.test(input));
return (category ?? { build: fallback }).build(input, tone);
```

### The priority ladder — the interesting part

`.find()` returns the **first** match, so **the order of the array is the logic.** The
categories are deliberately ordered:

1. **Strong, specific signals first** — `raise`, `resume`, `outreach`, `ai-tool`,
   `content`, `code`, `money`. Narrow keywords, high confidence.
2. **`explain` second-to-last** — a deliberately broad "how to / what is / why does"
   catch-all.
3. **A generic fallback** for anything with no keyword match at all.

Why `explain` is near the bottom: the phrase *"how to fix this bug"* contains both a
broad signal (`how to`) and a strong one (`bug`). Putting the broad category last
guarantees the specific one wins.

### A real bug found by a user, and the fix

The user typed **"how to tell claude to build a website"** and got the generic
fallback. Two genuine defects:

1. The `explain` category matched `"how does"` but not `"how to"`.
2. There was **no category at all** for "help me use ChatGPT/Claude to do X" — which
   is a huge share of what this specific audience actually wants.

**The fix** was a new `ai-tool` category:

```ts
test: /\b(claude|chatgpt|chat gpt|gpt-?[0-9](\.[0-9])?|copilot|gemini|midjourney|perplexity|ai assistant|chatbot)\b/i,
```

Note it matches **named AI assistants specifically, not the bare word "ai"**. Matching
`"ai"` would have hijacked enormous numbers of unrelated money and career requests
from an audience whose entire interest is "AI and money" — a fix that would have
caused a bigger bug than the one it solved.

The fix was then verified with a **20-input regression battery** run through the live
app — real state updates, real submits, real rendered output. 20/20 passed, including
the originally reported phrase.

### The honest limitation

Keyword matching can never have perfect coverage. *"Should I rent or buy a house"*
still hits the generic fallback. This is documented as the **permanent, accepted
limit** of the free-forever approach — not a bug to chase forever.

> **This is a strong interview answer.** *"It's a deliberate architectural tradeoff.
> The constraint was zero ongoing cost, so I chose deterministic keyword routing over
> an LLM call. The cost is imperfect coverage on unusual phrasings, which I documented
> rather than pretended away. If the constraint changed, the engine is one function
> behind a clean interface — swapping in a real model is a contained change."*

## 6.5 The Savings Planner — simulation over formula

There is a closed-form compound-interest formula that would have answered "how many
months?" in one line. The project deliberately used a **month-by-month simulation**
instead:

```ts
let balance = start;
for (let month = 1; month <= MAX_MONTHS; month++) {
  balance = balance * (1 + monthlyRate) + contribution;
  points.push({ month, balance });
  if (balance >= goalAmount) {
    const targetDate = new Date();
    targetDate.setMonth(targetDate.getMonth() + month);
    return { valid: true, reached: true, months: month, targetDate, dataPoints: points };
  }
}
```

**Why:** the loop produces `dataPoints` as a side effect — and those points *are* the
chart. A formula would have given the answer but no graph.

**Three states are handled explicitly**, which is where most beginner implementations
fall down:

```ts
// 1. Goal already met
if (start >= goalAmount) return { valid: true, reached: true, months: 0, ... };

// 2. Genuinely unreachable — nothing to grow the balance
if (contribution <= 0 && monthlyRate <= 0)
  return { valid: true, reached: false, months: 0, targetDate: null, ... };

// 3. Otherwise simulate, capped at 600 months (50 years)
```

`MAX_MONTHS = 600` is the safety valve. Without it, an impossible goal would loop
forever and freeze the browser tab. With it, the tool reports "not reached" honestly
instead of hanging or lying.

There is also a small performance detail — `sampleForChart()` reduces up to 600 data
points down to 60 evenly-spaced ones, so a 50-year plan still renders a readable,
fast chart.

## 6.6 The shared components

Ten small components carry the whole site. The three that earned their extraction:

**`SearchableLibrary.tsx`** — the biggest reuse win. Phase 4's own spec said the
Message Templates page reuses the Prompt Library's exact layout. So instead of
duplicating a page, the search + filter chips + card grid pattern was extracted into
one component, and `/library` was rebuilt on top of it too. Both pages became thin
wrappers that just supply content:

```tsx
<SearchableLibrary
  items={promptLibrary}
  categories={["Career", "Money", "Freelance"]}
  searchPlaceholder="Search prompts…"
  emptyLabel="prompts"
  searchId="library-search"
/>
```

A useful side effect: because the interactivity now lives inside the component, both
pages became plain **server** components.

**`CopyButton.tsx`** — used by the Prompt Tool, the Prompt Library, and Message
Templates. It implements the Phase 5 motion spec exactly ("icon morphs to checkmark,
reverts after 1.5s"):

```tsx
async function handleCopy() {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    // Clipboard API blocked — nothing safe to fall back to, so the button
    // simply stays in its normal "Copy" state.
    return;
  }
  setCopied(true);
  window.setTimeout(() => setCopied(false), 1500);
}
```

Note the error handling: if the clipboard is blocked, the button **stays as "Copy"**
rather than showing "Copied!" — it does not lie to the visitor about something that
did not happen.

**`Reveal.tsx`** — the scroll-reveal wrapper, covered in section 5.5.

**A note on when NOT to reuse.** The Glossary was deliberately *not* forced into
`SearchableLibrary`. Glossary terms do not split into clean filter categories, and
there is nothing to "copy" — they are reference content, not scripts. So a small
separate `GlossaryList` component was written instead of bending the shared one with
special-case props. Knowing when a shared abstraction stops fitting is as important as
spotting one that does.

## 6.7 The Header — a subtle React pattern

```tsx
const [open, setOpen] = useState(false);
const pathname = usePathname();
const [lastPathname, setLastPathname] = useState(pathname);

// Close the menu the moment the route changes, so it never covers the new page.
if (pathname !== lastPathname) {
  setLastPathname(pathname);
  setOpen(false);
}
```

The mobile menu must close when you navigate. The obvious way is a `useEffect` that
watches `pathname`. This code instead compares **during render**.

That is React's officially recommended shape for "adjust state when a prop changes",
and it avoids an extra render pass — with `useEffect` the new page briefly renders
with the menu still open, then re-renders with it closed. This version never shows
that intermediate frame.

This pattern came out of a real lint error: `npm run lint` flagged
`react-hooks/set-state-in-effect` in three places. The fixes were done **properly**
rather than by suppressing the warning — this render-time comparison in `Header`, and
a new `useHasMounted()` hook for `Reveal`/`AppearIn`.
---

# 7. The backend — how the email signup actually works

This is the full-stack part of the project. It is small (one file, 47 lines) but it
contains most of the important backend concepts, so it is worth knowing line by line.

## 7.1 The problem

The footer has an email signup. When someone submits it, their address must be stored
somewhere permanent so a newsletter can be sent later. **MailerLite** (free up to
1,000 subscribers) does the storing.

MailerLite's API requires an **API key** — a secret password that proves the request
came from your account. Anyone holding that key can add, read, or delete your entire
subscriber list.

## 7.2 The question that defines the architecture

*Why not have the browser call MailerLite directly?*

Because **the browser cannot keep a secret.** Any JavaScript sent to the browser can
be read by anyone who opens DevTools. If the API key were in a React component, it
would be shipped to every visitor, and within days someone would find it and have full
control of the mailing list.

**So the key must stay on a server.** That is the entire reason the backend exists.

The flow becomes:

```
Browser                Your server (Vercel)          MailerLite
   │                          │                          │
   │  POST /api/subscribe     │                          │
   │  { email: "a@b.com" }    │                          │
   ├─────────────────────────►│                          │
   │                          │  validate the email      │
   │                          │  attach the secret key   │
   │                          │  POST /api/subscribers   │
   │                          ├─────────────────────────►│
   │                          │                          │ stores it
   │                          │◄─────────────────────────┤
   │  { ok: true }            │                          │
   │◄─────────────────────────┤                          │
```

The browser never sees the key. It only ever talks to your own server.

## 7.3 The code, line by line

`src/app/api/subscribe/route.ts`:

```ts
import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
```

Because this file is named `route.ts`, Next.js treats it as an **API endpoint**, not a
page. Exporting a function named `POST` means it handles HTTP POST requests to
`/api/subscribe`. (A `GET` export would handle GET requests; there isn't one, so GET
returns 405.)

```ts
  let email: unknown;
  try {
    const body = await request.json();
    email = body?.email;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
```

**Never trust the incoming request.** If somebody posts malformed JSON, `request.json()`
throws — so it is wrapped in `try/catch` and answers with a clean `400 Bad Request`
instead of crashing the server. The type is `unknown`, not `string`, precisely because
at this point nobody has proved it is a string.

```ts
  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }
```

**Server-side validation.** The HTML form already has `type="email"` and `required`,
but browser validation is a *convenience*, not a security control — anyone can bypass
it with a direct request. The rule is: **validate on the client for user experience,
validate on the server for correctness.** Both, always.

```ts
  const apiKey = process.env.MAILERLITE_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Signups aren't configured yet." }, { status: 503 });
  }
```

**Environment variables.** The key is read from `process.env`, never written in the
code. And if it is missing, the endpoint returns an honest `503 Service Unavailable`
rather than crashing or, worse, silently pretending to succeed.

```ts
  const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ email }),
  });
```

The server-to-server call. `Authorization: Bearer <key>` is the standard way to
authenticate an API request. This `fetch` runs **on the server**, so the key never
travels to the browser.

```ts
  if (!res.ok) {
    return NextResponse.json({ error: "Something went wrong. Try again in a moment." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
```

If MailerLite fails, the visitor gets a generic message and a `502 Bad Gateway`. **The
upstream error is deliberately not forwarded** — internal error details are exactly
the kind of thing that leaks information useful to an attacker.

## 7.4 Environment variables and secrets

The key lives in `website/.env.local`:

```
MAILERLITE_API_KEY=...
```

Three things make this safe:

1. **`.env*` is in `.gitignore`** — verified *before* the first commit, so the key has
   never been in git history. (A secret committed once is compromised forever, even if
   deleted in a later commit, because it remains in the history.)
2. **No `NEXT_PUBLIC_` prefix.** In Next.js this is a hard rule: a variable whose name
   starts with `NEXT_PUBLIC_` is *deliberately* embedded into the browser bundle.
   Anything without that prefix stays server-only. `MAILERLITE_API_KEY` has no prefix,
   so it is server-only. `NEXT_PUBLIC_SITE_URL` does — and that is fine, because a
   public URL is not a secret.
3. **On Vercel, the key is set in the dashboard**, not in a file. Production reads it
   from Vercel's encrypted environment settings.

## 7.5 The frontend half

`EmailSignup.tsx` handles the browser side, with a four-state machine:

```tsx
const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
```

That union type is doing real work — it makes an unhandled state impossible to write.

```tsx
onSubmit={async (e) => {
  e.preventDefault();
  setStatus("loading");
  try {
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (!res.ok) {
      setErrorMessage(data?.error ?? "Something went wrong.");
      setStatus("error");
      return;
    }
    setStatus("success");
  } catch {
    setErrorMessage("Something went wrong. Try again in a moment.");
    setStatus("error");
  }
}}
```

Points worth knowing:

- **`e.preventDefault()`** stops the browser's default form behaviour (a full page
  reload). Without it the React handler would be pointless.
- **`async/await`** — the network call takes time, so the function pauses at `await`
  without freezing the page.
- **Both failure paths are handled**: `!res.ok` (the server answered with an error)
  and `catch` (the request never completed at all — offline, DNS failure). Beginners
  usually handle only one.
- The input and button are **disabled** during loading and after success, so
  double-clicking cannot fire two requests.
- The button label reflects state: `"Joining…"` → `"Joined"`.

And accessibility is built in:

```tsx
{status === "success" && <p role="status">You&apos;re on the list — check your inbox…</p>}
{status === "error" && <p role="alert">{errorMessage}</p>}
```

`role="status"` announces politely; `role="alert"` interrupts. A screen-reader user
hears the outcome instead of nothing happening.

## 7.6 The honesty history of this feature

Worth telling, because it demonstrates a professional instinct:

For most of development, the form was shipped **deliberately non-functional** with a
message saying signups were not open yet. It would have been trivial to fake a "You're
subscribed!" confirmation that stored nothing. That was refused, because the brand's
central promise is honesty.

The original code carried a comment predicting the future: *"swap in a real free-tier
provider and this becomes a one-function change — the markup stays exactly as-is."*
When MailerLite was wired up, that prediction held exactly.

---

# 8. Build, version control, and deployment

## 8.1 What `npm run build` actually does

```
npm run build   →   next build
```

The real output from this project:

```
▲ Next.js 16.2.11 (Turbopack)
✓ Compiled successfully in 3.1s
  Running TypeScript ...
✓ Generating static pages using 11 workers (16/16) in 335ms

Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /about
├ ƒ /api/subscribe
├ ○ /glossary
├ ○ /icon.svg
├ ○ /library
├ ○ /robots.txt
├ ○ /sitemap.xml
├ ○ /templates
├ ○ /tools
├ ○ /tools/prompt
├ ○ /tools/raise
├ ○ /tools/savings
└ ○ /tools/subscriptions

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```

Four things happen: TypeScript is type-checked, JSX is compiled to JavaScript, Tailwind
scans every file and emits only the CSS actually used, and pages are pre-rendered.

**The `○` vs `ƒ` distinction is the important one, and interviewers ask about it.**

- **`○` Static** — the page's HTML is generated **once, at build time**, and served as
  a plain file to everyone. Extremely fast, essentially free to serve, cacheable on a
  CDN worldwide. 14 of the 15 routes are static.
- **`ƒ` Dynamic** — runs **on the server, on every request**. Exactly one route is
  dynamic: `/api/subscribe`, and it must be, because each request carries a different
  email and needs the secret key.

**Why a page with a search box can still be static:** the *initial HTML* is identical
for every visitor, so it is pre-rendered. The interactivity is JavaScript that runs in
the visitor's browser afterwards. Static ≠ non-interactive.

## 8.2 Git and GitHub

- **Git** is version control — it records the history of every change and lets you go
  back.
- **GitHub** hosts that history online, and is what a recruiter actually browses.

Before the first commit, `.gitignore` was verified to exclude `.env.local`,
`node_modules/`, and build artifacts. Then 91 real files were committed and pushed to
a **public** repository.

`node_modules/` is excluded because it holds thousands of downloaded dependency files —
`package.json` plus `package-lock.json` is enough for anyone to reproduce them exactly
with `npm install`.

## 8.3 Vercel and continuous deployment

**Vercel** is the hosting platform, made by the same company that makes Next.js. On
the free tier it:

1. watches the GitHub repository,
2. runs `npm run build` automatically whenever you push,
3. serves the result on a global CDN with HTTPS,
4. injects your environment variables at build and run time.

This is **continuous deployment**: `git push` is the entire deploy process.

### A real deployment failure, and what it teaches

The first deploy **failed**:

```
Error: No Output Directory named "public" found
```

**Root cause:** Vercel's **Framework Preset** was left on "Other" instead of "Next.js".
It was easy to miss because the *Root Directory* setting had already been correctly
set to `website` — two different fields, and only one of them had been noticed.

With the preset on "Other", Vercel assumed a plain static site and looked for a
`public/` folder. A Next.js build does not produce one.

**Fix:** Settings → General → Framework Settings → preset to Next.js → redeploy.

There is a second useful detail here: two lines in the deploy log *looked* like errors
but were actually yellow warnings about `outputFileTracingRoot`/`turbopack.root`. The
build compiled fine. **Reading the log carefully instead of panicking at the first red
text is a real skill.**

### Verifying the deploy properly

"Ready" in the dashboard is not proof the site works. The verification actually done:

1. Loaded the live URL and confirmed zero console errors on the homepage and a tool page.
2. **POSTed a genuine request to the live `/api/subscribe`** and got back
   `200 {"ok":true}` — which proves `MAILERLITE_API_KEY` reached the *production*
   environment, not just the local machine.
3. Added `NEXT_PUBLIC_SITE_URL`, redeployed, and fetched the live `/sitemap.xml` to
   confirm all 10 URLs had switched from the placeholder domain to the real one.

> **Interview point:** *"I don't treat a green 'deployed' badge as verification. I test
> the thing that could actually be different in production — in this case whether the
> secret made it into the production environment — by hitting the live endpoint."*

## 8.4 SEO infrastructure

Because the Glossary was specified as an SEO entry point, the site generates:

- **`sitemap.ts` → `/sitemap.xml`** — lists all 10 real pages for search engines.
- **`robots.ts` → `/robots.txt`** — tells crawlers what they may index.
- **`metadataBase`** — so social-share URLs resolve absolutely.
- **Open Graph and Twitter metadata** — controls the preview card when a link is
  shared.
- Each glossary term has a **stable HTML `id`**, so `/glossary#token` deep-links
  directly to one definition.

All of them read the domain from a single constant in `lib/site.ts`, which reads
`NEXT_PUBLIC_SITE_URL` — one value to change, not ten.

---

# 9. Quality — the work that does not show up in screenshots

This section is disproportionately valuable in interviews. Anyone can build features.
Far fewer people can describe how they found and fixed their own bugs.

## 9.1 The bugs that were found and fixed

### Bug 1 — The mobile tool-card grid was wrong

The wireframe specified a 2×2 grid on mobile; the build rendered one column. Found by
**measuring the actual rendered card positions**, not by trusting the Tailwind class.

*Lesson: verify the output, not the intention.*

### Bug 2 — The hydration mismatch (section 5.5)

A scroll-reveal component crashed hydration **only for visitors with reduced motion
enabled** — the exact people the accessibility feature was for.

*Lesson: server and client must agree on the first render.*

### Bug 3 — The Prompt Tool matched too narrowly (section 6.4)

Reported by a real user. Fixed with a new category and a documented priority ladder,
then verified with a 20-input regression battery.

*Lesson: a user-reported failure usually means a whole class of failures, not one.*

### Bug 4 — Grid overflow from unbroken long text

A 300-character subscription name **broke the entire page layout**, causing horizontal
scroll on mobile.

**Root cause:** `md:grid-cols-[3fr_2fr]` without `minmax(0, ...)`. A CSS grid track
will not shrink below its content's minimum size by default, so one unshrinkable child
(the chart's SVG axis label) forced the grid — and the whole page — wider than the
viewport. Below `md` there was no `grid-cols-1` base at all.

**Three earlier fix attempts genuinely did not work**, and they were kept in the
development log rather than quietly deleted. The real fix only came from systematically
bisecting the reproduction and checking exactly which breakpoint was under test each
time.

*Lesson: this is the best debugging story in the project. Keeping the failed attempts
is what makes it credible.*

### Bug 5 — The same overflow, independently, in three more places

Having found bug 4, the same pattern was checked elsewhere — and a 2,000-character
search query broke the "no results match" message on the Library, Templates, and
Glossary pages too. Fixed with `break-words`.

*Lesson (and this became a standing rule): **one instance of a silent-default bug means
audit the whole codebase for the same pattern, not just the reported spot.** The same
rule was applied in the Figma phase, where one white-sliver bug turned out to affect 12
frames across three screens.*

## 9.2 The accessibility audit

A dedicated pass on keyboard navigation, screen readers, and colour contrast found
three real failures.

### Failure 1 — The skip link did not actually work

A "Skip to content" link exists so keyboard users can jump past the nav. Activating it
scrolled the page — but **focus stayed on `<body>`**, so the next Tab press started
again from the top. The feature looked like it worked and did not.

**Fix:** `tabIndex={-1}` on `<main>`, making it programmatically focusable.

```tsx
<main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
```

### Failure 2 — The brand accent colour failed WCAG AA

Real contrast ratios were **computed**, not eyeballed. `#E0531E` on the cream
background reaches only **3.59:1**.

WCAG AA requires **4.5:1** for normal-size text and **3:1** for large text, icons, and
UI borders. So the accent is fine for buttons, icons and borders — and a **genuine
failure** for small text.

This contradicted the Phase 5 design doc's own claim that all pairs passed. And it was
not one spot: it affected the "Open" label on every tool card, the Copy button text,
"Browse X" links, glossary related-tool links, category tags, the Instagram link, and
the homepage's secondary CTA.

**The fix shows good judgment.** Rather than change the brand colour — which would have
broken the deliberate Instagram consistency, and which was not even wrong for its main
uses — a darker same-hue variant was computed that clears AA with margin:

```css
--color-accent-text: #be471a;   /* 4.74:1 — passes AA for small text */
```

Two tokens, each used where it is correct. `bg-accent` for fills; `text-accent-text`
for small text.

### Failure 3 — No visible keyboard focus indicator

Tailwind's preflight resets default browser outlines, and none of the custom buttons
had replaced it. **Tabbing to a filter chip showed literally nothing** — confirmed via
`getComputedStyle` returning `outline: none` and `boxShadow: none`.

**Fix — one global rule instead of patching every component:**

```css
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
  border-radius: 2px;
}
```

`:focus-visible` rather than `:focus` so the ring appears for keyboard users but not on
every mouse click — the modern standard. One rule covers every interactive element,
present and future.

### Reduced motion

Honoured from day one, not retrofitted:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Things that were checked and were already fine

Worth mentioning, because knowing what to check is the skill:

- Recharts already sets `aria-hidden="true"` on its chart SVGs, so screen readers skip
  them instead of reading garbled tick labels.
- Touch targets — 40×40 hamburger, 36×36 delete, 180×44 Add — all clear the WCAG 24×24
  minimum.
- `aria-live="polite"` was added to the Prompt Tool's and Raise Builder's result boxes
  (a discrete "click Build, get a result" event worth announcing) but **deliberately not**
  to the two calculators, whose results update on every keystroke and would be noisy
  rather than helpful.

That last decision — knowing when *not* to add an accessibility attribute — is a
stronger signal than adding them everywhere.

## 9.3 The security pass

**XSS (Cross-Site Scripting)** is the attack where someone types code into an input and
the site executes it for other visitors.

Real payloads (`<script>`, `<img onerror=...>`) were entered into **every text field on
the site**, and the resulting **DOM was inspected** — not just "no alert box appeared".

The site is safe, and the reason is worth understanding: **React escapes any value
interpolated into JSX by default.** `{userInput}` renders as visible text, never as
markup. React only renders raw HTML if you explicitly use
`dangerouslySetInnerHTML` — deliberately given an alarming name — and this project
never uses it.

Also checked:
- Numeric edge cases: garbage input → `$0`, huge numbers, negative clamping, no `NaN`
  anywhere.
- API edge cases: invalid email → clean `400`; empty body → clean `400`; missing body
  → clean `400`. No server crash in any case.
- Secrets: `.env*` git-ignored and verified before the first commit.

## 9.4 The quality gate

Three commands that all had to pass clean before deploy:

```bash
npx tsc --noEmit      # type checking — no type errors anywhere
npm run lint          # ESLint — code quality and React rules
npm run build         # full production build
```

`npm run lint` was genuinely valuable: run for the first time late in development, it
immediately caught three real `react-hooks/set-state-in-effect` errors. They were fixed
properly (a new `useHasMounted` hook, and the render-time comparison in `Header`)
rather than suppressed with a disable comment.

> **A good interview line:** *"The lint rule was right and my code was wrong. It's
> tempting to add an eslint-disable and move on — I've seen that in a lot of codebases —
> but the rule existed because the pattern causes an extra render pass. I fixed the
> pattern."*
---

# 10. Interview preparation

## 10.1 How to use this section

Do **not** memorise these answers word for word. Memorised answers sound memorised,
and the follow-up question exposes them instantly.

Instead: read the answer, close the guide, and say it out loud in your own words. If
you cannot, that is a signal to go back to the relevant section — not to re-read the
answer.

**Three rules for the whole interview:**

1. **Never claim more than you did.** Especially: you did not run usability tests, and
   the personas were not interview-based. Both have strong honest answers below.
2. **Every technical choice should come with a *why*.** "I used Next.js" is a weak
   answer. "I used Next.js because I needed file-based routing for shareable tool URLs
   and static pre-rendering for the SEO pages" is a strong one.
3. **Volunteer your bugs.** Counter-intuitive, but describing a bug you found and
   fixed is the single most credible thing you can do. It proves you actually built it.

## 10.2 The 90-second project pitch

You will be asked "tell me about this project" almost immediately. Have this ready:

> "The Leverage Report is a free web app with four tools that help people use AI to
> manage their money — a prompt builder, a subscription cost calculator, a savings
> planner, and a salary-negotiation script builder. It's the companion site to an
> Instagram page in the same niche.
>
> The problem was that short-form video is useless for practical content — a tip is
> good for fifteen seconds and then it's gone into an unsearchable feed. So the site
> turns the advice into tools people can actually use and come back to.
>
> I ran it as a full ten-phase process: project brief, research and competitor
> analysis, information architecture, then wireframes, a design system, high-fidelity
> mockups and a clickable prototype in Figma — then built it for real in Next.js,
> React and TypeScript, and deployed it to Vercel.
>
> The parts I'm proudest of are the design system translating directly into code
> tokens so no hex code is ever typed in a component, and the QA work — I found a
> hydration bug that only affected users with reduced motion turned on, and an
> accessibility audit showed my own brand accent colour failed WCAG contrast for small
> text, which my design doc had wrongly claimed passed."

Then stop and let them pick a thread.

---

## 10.3 Project & process questions

**Q: Why did you build this?**
The Instagram page had an audience but no permanent home for the content — a tip
disappears into an unsearchable feed. And the alternatives online were either generic
prompt-list sites with no quality bar, or personal-finance blogs full of ads and
upsells. Neither was built to actually be used. I also wanted one project that would
produce both a UI/UX portfolio and an engineering portfolio, rather than two shallow
ones.

**Q: Walk me through your process.**
Ten phases. One to three were written: a project brief, research with proto-personas
and a competitor scan, then information architecture — the sitemap and three user
flows. Four to seven were Figma: 14 wireframe screens, a design system, 14
high-fidelity mockups, and a 53-connection clickable prototype. Nine and ten were
code: build in Next.js, then deploy to Vercel. Every phase produced a written artifact
that's in the repo.

**Q: Why so much design work before coding?**
Because changing a wireframe takes a minute and changing built code takes a day. The
information architecture phase in particular saved real time — deciding the multi-page
structure up front is why every tool has its own shareable URL, and that decision
would have been painful to retrofit.

**Q: Did you do user testing?**
Not formal usability testing — that was Phase 8, and I deliberately deferred it. As a
solo project with no test participants, I traded it for much heavier self-testing on
the real build: a 20-input regression battery on the prompt engine, a full
accessibility audit, and an XSS pass on every input. It's documented as a conscious
tradeoff, not an oversight, and real-user testing is the stated next step. I'd rather
tell you that than claim sessions I didn't run.

**Q: Tell me about the personas.**
They're proto-personas, not interview-based personas — built from the real Instagram
audience analytics rather than from primary user research. That distinction matters and
I labelled it in the doc. There's also an honest limitation I flagged: the audience is
Western and I'm based in India, so they're grounded in behavioural data rather than
lived experience. Validating them with real users is the next step.

**Q: What would you do differently?**
Three things. I'd run the linter from day one instead of late in development — when I
finally ran it, it caught three real React errors that had been sitting there. I'd
build desktop and mobile wireframes together instead of backfilling desktop later. And
I'd do the accessibility contrast check during the design phase, not after building —
my design doc claimed all colour pairs passed WCAG and that turned out to be wrong,
which meant fixing it in about eight places across the built site instead of one place
in Figma.

**Q: What was the hardest part?**
The grid overflow bug. A very long subscription name broke the entire page layout on
mobile. Three fix attempts genuinely didn't work — I kept them in the dev log rather
than deleting them. The real cause was that a CSS grid track won't shrink below its
content's minimum size unless you use `minmax(0, ...)`, and one unshrinkable chart
label was forcing the whole page wider than the viewport. I only found it by
systematically bisecting the reproduction case and being careful about exactly which
breakpoint I was testing at each time.

---

## 10.4 React questions

**Q: What is React and why use it?**
It's a library for building UIs out of components — functions that take inputs and
return markup. The core benefit is reuse and consistency: my header is written once
and used on all ten pages. The deeper idea is that you never manipulate the page
directly; you change state and describe what the UI should look like for that state,
and React works out the minimum set of DOM changes.

**Q: What are props?**
The inputs to a component, exactly like function arguments. My `Container` component
takes `children` and an optional `className`. Props flow one way — parent to child —
which is what makes data flow easy to trace.

**Q: What is state, and how does it differ from props?**
Props come from the parent and the component can't change them. State is owned by the
component and changing it triggers a re-render. In my searchable library, the search
text is state — it's owned by that component and changes as you type. The list of items
is a prop — it comes from the page.

**Q: Explain `useState` in your own words.**
It gives a component memory between renders. `const [query, setQuery] = useState("")`
gives me the current value and a setter. Calling the setter tells React the value
changed, React re-runs the component function, and the UI updates.

**Q: What is a controlled input?**
An input whose displayed value comes from React state rather than from the DOM. My
search box sets `value={query}` and `onChange={(e) => setQuery(e.target.value)}`. State
is the single source of truth, which means I can filter, clear, or pre-fill it
programmatically and the input always agrees.

**Q: Why does React need a `key` on lists?**
So it can tell items apart between renders. Without keys React matches by position,
which breaks when the list reorders or filters — state can end up attached to the wrong
item. I use `tool.slug` and `item.id`, never the array index, because indexes change
when the list changes.

**Q: What is `useMemo` and why did you use it?**
It caches a computed value and only recalculates when its dependencies change. My
library filter runs over every item checking title, description and body text. Without
`useMemo` it would re-run on every render, including renders caused by unrelated state.
With `[items, query, filter]` as dependencies, it only recalculates when one of those
actually changes.

**Q: What is a custom hook?**
A function starting with `use` that packages reusable stateful logic. I wrote
`useHasMounted()`, which returns false during server rendering and the first client
render, then true. It's used by two animation components that both need to know when
it's safe to differ from the server HTML.

**Q: Why `useSyncExternalStore` instead of `useState` + `useEffect`?**
`useSyncExternalStore` takes a separate server snapshot, which is exactly the shape of
"am I on the client" — and it's what React recommends for it. The `useState` +
`useEffect` version works but causes an extra render pass, since the effect runs after
the first paint and then sets state.

**Q: Why did you avoid `useEffect` for closing the mobile menu?**
Because "adjust state when a prop changes" doesn't need an effect. I compare the
pathname to the previous pathname during render and call `setOpen(false)` if they
differ. With a `useEffect`, the new page would render once with the menu still open,
then re-render with it closed — a visible intermediate frame. Comparing during render
avoids that, and it's React's documented recommendation.

---

## 10.5 Next.js questions

**Q: What does Next.js give you that React doesn't?**
Routing, server rendering, a build system, image and font optimisation, API routes, and
metadata handling. React is a UI library — it has no opinion about URLs or servers.
Next is the framework around it.

**Q: How does routing work in your app?**
File-based, with the App Router. A folder containing a `page.tsx` becomes a URL — so
`src/app/tools/prompt/page.tsx` is `/tools/prompt`. There's no routing config file in
the project at all. `layout.tsx` wraps everything below it, `route.ts` makes an API
endpoint instead of a page, and `not-found.tsx` is the 404.

**Q: What is a Server Component?**
The default in the App Router. It runs on the server, and only its rendered HTML
reaches the browser — its JavaScript is never downloaded. That makes pages smaller and
faster. The tradeoff is it can't be interactive, because there's no browser on a
server.

**Q: So when do you use `"use client"`?**
When a component needs state, event handlers, or browser APIs. In my project that's
the header (the mobile menu toggles), the search components, the email form, the copy
button, the animation wrappers, and the four tool pages.

**Q: Give me an example of how you used that boundary well.**
My `/library` and `/templates` pages are server components that render a client
component inside them. The page shell — headings, layout, static copy — ships zero
JavaScript. Only the search box and filter chips do. That happened naturally when I
extracted the shared search pattern into one component, and the pages became thin
wrappers.

**Q: What is hydration?**
The moment React in the browser takes over the server-rendered HTML and attaches
interactivity. The requirement is that React's first browser render produces exactly
the same output as the server did — otherwise React reports a mismatch.

**Q: Did you hit a hydration bug?**
Yes, and it's my favourite one. My scroll-reveal component checks whether the user has
"reduce motion" enabled. On the server there's no browser, so that check returns
nothing and the server renders the animated version. On the client, for a user who has
reduced motion on, it immediately returns true and renders a plain div. Server and
first client render disagreed — mismatch. The irony is it only affected users with
reduced motion enabled, the exact people the feature was written for. I fixed it with
a mounted gate so the first render is identical everywhere, and the swap happens as a
normal re-render right after.

**Q: Static vs dynamic rendering — what does your build show?**
Fifteen routes: fourteen static, one dynamic. Static means the HTML is generated once
at build time and served as a file — fast, cacheable on a CDN, essentially free. The
one dynamic route is `/api/subscribe`, which has to run per request because each one
carries a different email and needs the secret key.

**Q: But your library page has a search box — how is that static?**
Because the *initial HTML* is the same for every visitor, so it's pre-rendered. The
searching is JavaScript running in the visitor's browser afterwards. Static doesn't
mean non-interactive; it means the server didn't have to build the page per request.

**Q: How did you handle metadata and SEO?**
I export a `metadata` object from the root layout instead of writing `<head>` tags.
It uses a title template so every page gets the brand appended automatically. I also
generate `sitemap.xml` and `robots.txt` from `sitemap.ts` and `robots.ts`, added Open
Graph and Twitter card data, and gave every glossary term a stable HTML id so
`/glossary#token` deep-links to a single definition. All of them read the domain from
one constant.

---

## 10.6 TypeScript questions

**Q: Why TypeScript over JavaScript?**
It catches a whole class of bugs at build time instead of in production — wrong prop
types, typo'd property names, missing fields. On a 33-file project, that's checked
automatically instead of by hand. It also documents intent: reading a type tells you
the shape of the data without hunting for where it's created.

**Q: Show me a type that actually did something.**
```tsx
const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
```
That's a union type on my email form's state. It makes it impossible to typo a status
into a state the UI doesn't handle — `setStatus("succes")` fails the build rather than
silently rendering nothing in production.

**Q: What's `React.ReactNode`?**
"Anything React can render" — elements, strings, numbers, arrays, null. It's the right
type for a `children` prop.

**Q: Does TypeScript slow your site down?**
No — it's a devDependency and compiles away entirely. The browser receives plain
JavaScript. It costs build time, not runtime.

---

## 10.7 CSS, Tailwind & design-system questions

**Q: Why Tailwind instead of writing CSS?**
Two reasons that mattered here. First, the utilities can only produce values from my
design system, so I can't accidentally use a slightly-wrong orange. Second, Tailwind
strips every class I didn't use, so the shipped CSS is tiny. The tradeoff is that
markup gets verbose, which I accept.

**Q: How does your Figma design system connect to the code?**
Directly, and this is the part I'd point at. Every Phase 5 token — 8 colours, 2 radii,
2 font families — is declared once in a Tailwind `@theme` block in `globals.css`.
Tailwind turns each into utility classes: `--color-accent` generates `bg-accent`,
`text-accent`, `border-accent`. After that file, **no hex code is ever typed into a
component**. Changing the brand colour is one line and all ten pages follow.

**Q: How did you make it responsive?**
Mobile-first with Tailwind breakpoint prefixes. The unprefixed class is the mobile
style and prefixes add larger-screen behaviour — `grid-cols-2 lg:grid-cols-4` is two
columns on phones and four from 1024px. My headline is `text-[32px] md:text-[56px]`,
matching the Phase 5 type scale exactly. And I verified layouts by reading actual
computed styles and bounding boxes at 375px and 1280px, not by eyeballing.

**Q: Tell me about a CSS bug you fixed.**
A long subscription name broke the whole mobile layout. The cause was `grid-cols-[3fr_2fr]`
without `minmax(0, ...)` — a grid track won't shrink below its content's minimum size
by default, so one unshrinkable chart label forced the grid, and the page, wider than
the viewport. There was also no `grid-cols-1` base below the `md` breakpoint. I found
the same class of bug independently in three other places afterwards and fixed those
too.

**Q: Why do you have two accent colours?**
Because the brand accent `#E0531E` only reaches 3.59:1 contrast on my background. WCAG
AA needs 4.5:1 for normal text but only 3:1 for icons, borders and large text. So the
original is correct for buttons and icons and genuinely fails for small text. Rather
than change the brand colour — which is inherited from the Instagram page deliberately
— I computed a darker same-hue variant, `#be471a` at 4.74:1, as a second token and used
it for small accent text only.

---

## 10.8 Backend, API & security questions

**Q: Is this full-stack? What's the backend?**
Yes. One API route, `src/app/api/subscribe/route.ts`, which handles newsletter signups
and forwards them to MailerLite. It's small, but it covers the real concerns: request
validation, secret management, upstream API calls, and error handling.

**Q: Why does that route exist at all? Why not call MailerLite from the browser?**
Because the browser can't keep a secret. Any JavaScript sent to the client can be read
by anyone with DevTools. MailerLite's API key gives full control of the subscriber
list — add, read, delete. So the key has to live on a server, and the route exists to
be the thing that holds it. The browser only ever talks to my own endpoint.

**Q: Walk me through the request.**
The form posts JSON to `/api/subscribe`. The route parses the body inside a try/catch
so malformed JSON returns a clean 400 instead of crashing. It validates the email
against a regex server-side. It reads the API key from `process.env` and returns a 503
if it's missing rather than failing silently. Then it POSTs to MailerLite with an
`Authorization: Bearer` header. If MailerLite fails it returns a generic 502 — I
deliberately don't forward the upstream error, because internal details leak
information. On success it returns `{ ok: true }`.

**Q: The form already validates the email in HTML. Why validate again?**
Because client-side validation is user experience, not security. Anyone can bypass the
form entirely and post directly to the endpoint. The rule is validate on the client for
UX and on the server for correctness — both, always.

**Q: How do you keep the API key out of the repo?**
It's in `website/.env.local`, and `.env*` is in `.gitignore` — which I verified *before*
the first commit, because a secret committed once is compromised forever even if you
delete it later; it stays in the history. In Next.js there's also a naming rule: any
variable prefixed `NEXT_PUBLIC_` is deliberately embedded in the browser bundle,
anything without it stays server-only. My key has no prefix. In production the value
lives in Vercel's encrypted environment settings.

**Q: How did you verify it worked in production, not just locally?**
I POSTed a real request to the live `/api/subscribe` on the deployed URL and got back
`200 {"ok":true}`. That's the specific thing that proves the environment variable made
it into production — a green "deployed" badge doesn't prove that.

**Q: What about XSS?**
I tested it rather than assumed it. I put `<script>` and `<img onerror=...>` payloads
into every text field on the site and inspected the resulting DOM — not just "no alert
appeared". It's safe because React escapes anything interpolated into JSX by default;
`{userInput}` becomes visible text, never markup. React only renders raw HTML through
`dangerouslySetInnerHTML`, which is deliberately named to make you think twice, and I
never use it.

**Q: What error handling does the frontend do?**
Both failure paths. `!res.ok` means the server answered with an error, and a `catch`
covers the request never completing at all — offline, DNS failure. Most people handle
only the first. The input and button are also disabled during loading and after
success, so a double-click can't fire two requests.

---

## 10.9 Deployment & tooling questions

**Q: How is it deployed?**
GitHub repo connected to Vercel. Vercel watches the repo, runs `npm run build` on every
push, and serves the output on a global CDN with HTTPS. So `git push` is the whole
deploy process — that's continuous deployment.

**Q: Did anything go wrong deploying?**
Yes, the first deploy failed with "No Output Directory named 'public' found". The cause
was that Vercel's Framework Preset was still on "Other" instead of Next.js — a separate
field from Root Directory, which I *had* set correctly. With the preset on "Other",
Vercel assumed a plain static site and looked for a `public/` folder that a Next build
doesn't produce. Changed the preset, redeployed, worked. There were also two lines in
the log that looked like errors but were actually warnings about a config path — reading
the log properly instead of panicking mattered.

**Q: What's in your `.gitignore` and why?**
`.env*` for secrets, `node_modules/` because it's thousands of downloaded dependency
files that anyone can regenerate from `package.json` and `package-lock.json`, and build
artifacts like `.next/` because they're generated output, not source.

**Q: What's your quality gate before shipping?**
Three commands, all clean: `tsc --noEmit` for types, `npm run lint` for code quality,
and `npm run build`. Then live-testing every page for console errors and driving each
tool's actual logic with real inputs — including hand-checking the calculator maths.

**Q: Tell me about a linter error you fixed.**
I ran lint late — my own mistake — and it caught three `react-hooks/set-state-in-effect`
errors. The lint rule was right and my code was wrong: setting state in an effect
causes an extra render pass. It's tempting to add an eslint-disable comment, but I
fixed the actual pattern instead — a `useHasMounted` hook using `useSyncExternalStore`
for two animation components, and a render-time comparison in the header.

---

## 10.10 Accessibility questions

**Q: What accessibility work did you do?**
A dedicated audit on keyboard navigation, screen readers, and colour contrast, which
found three real failures. The skip link scrolled but never moved keyboard focus, so
the next Tab press started from the top again — it looked like it worked and didn't.
My brand accent failed WCAG AA for small text at 3.59:1. And custom buttons had no
visible focus ring at all, because Tailwind's preflight resets outlines and nothing had
replaced it.

**Q: How did you fix the focus ring?**
One global `:focus-visible` rule with an on-brand outline, rather than patching every
component's className. That covers every interactive element, including ones I haven't
written yet. `:focus-visible` rather than `:focus` so it appears for keyboard users but
not on every mouse click.

**Q: How do you handle motion for users who don't want it?**
A global `prefers-reduced-motion` media query that flattens animation and transition
durations, added at the start of development rather than retrofitted. Plus
`useReducedMotion` in the animation components to skip the animation entirely — which is
what caused the hydration bug I mentioned.

**Q: Anything you decided *not* to do for accessibility?**
Yes, and I think that's the more interesting decision. I added `aria-live="polite"` to
the prompt tool and raise builder result boxes, because those are discrete "click
Build, get a result" events worth announcing. I deliberately didn't add it to the two
calculators, whose results update on every keystroke — a screen reader would announce
constantly and it would be noise, not help.

---

## 10.11 Hard questions and how to handle them

**Q: This is a solo project — how do I know you can work in a team?**
Fair. What I'd point to is that I worked as if there were a team: every phase has a
written artifact, there's a running decision log with the reasoning for each choice,
and I kept a lessons file where every bug I found became a written rule that got
re-checked before the next build. That documentation exists so somebody else could pick
it up — which is the actual skill teams need.

**Q: The AI Prompt Tool doesn't use AI at all. Isn't that misleading?**
It's a prompt builder, not an AI product, and the page says so — every tool carries a
visible note about what it can't do. The constraint was zero ongoing cost, so I chose
deterministic keyword routing over an API call. It's a real architectural tradeoff:
the cost is imperfect coverage on unusual phrasings, which I documented rather than
hid. The engine sits behind one clean function, so swapping in a real model later is a
contained change.

**Q: Isn't keyword matching a bit primitive?**
For the constraint, it's the right tool. But the ordering is where the real design is —
`.find()` returns the first match, so the array order *is* the logic. Specific
categories go first and a broad "how to / what is" catch-all goes second-to-last,
because "how to fix this bug" contains both a broad signal and a specific one and the
specific one should win. When I added a category for named AI assistants, I
deliberately matched "claude", "chatgpt", "gemini" and so on rather than the bare word
"ai" — matching "ai" would have hijacked huge numbers of unrelated money and career
requests from an audience whose entire interest is AI and money. The fix would have
caused a worse bug than it solved.

**Q: What's the weakest part of this project?**
No automated tests. I verified everything by hand — driving real state changes,
hand-checking the calculator maths, running a 20-input regression battery through the
live app — and that's genuinely thorough, but it isn't repeatable. My logic is already
in pure functions in `lib/` with no React dependency, so it's structured to be
testable; I just haven't written the tests. That's the first thing I'd add.

**Q: How would you scale this?**
The frontend already scales fine — 14 of 15 routes are static and served from a CDN.
The real limits are elsewhere. MailerLite's free tier caps at 1,000 subscribers.
There's no rate limiting on the subscribe endpoint, so someone could spam it — I'd add
that before promoting the site widely. And a database would only be needed if I wanted
features that store user data, which right now I deliberately don't, since everything
runs in the browser and nothing personal is collected.

**Q: How much of this did you write yourself?**
Answer honestly — you used AI assistance, and that is completely normal in 2026. The
strong version of this answer is: *"I used AI assistance while building it, the same way
I'd use any tool. What I can tell you is why every decision was made — why the
categories in the prompt engine are ordered the way they are, why there are two accent
tokens, why the mobile menu closes during render instead of in an effect. Ask me about
any file and I'll walk you through it."* Then be able to actually do that — which is what
this guide is for. Never claim you wrote every line unaided if you didn't; a single
follow-up question you can't answer costs you far more than the honest answer ever
would.

---

## 10.12 Questions to ask them

Always have two or three. It signals you're evaluating them too.

- What does the frontend stack look like here, and how much say do engineers have in
  design decisions?
- How does design hand-off work — do you use a shared design system with tokens?
- What's your testing culture like? Where's the line between unit tests and manual QA?
- How do accessibility requirements get decided and enforced?
- What would my first three months look like?

## 10.13 Ten-second answers to have ready

| If they ask | Say |
|---|---|
| Tech stack? | Next.js 16, React 19, TypeScript, Tailwind v4, Framer Motion, Recharts, deployed on Vercel |
| Size? | ~2,360 lines, 33 files, 10 pages, 15 build routes |
| Frontend or full-stack? | Full-stack — one API route handling newsletter signups with a server-side secret |
| Why Next over plain React? | File-based routing for shareable URLs, static pre-rendering for SEO, and API routes so I didn't need a separate backend |
| Best bug story? | The hydration mismatch that only hit users with reduced motion on |
| Design system? | 8 colour tokens + 2 radii + 2 fonts in a Tailwind `@theme` block — no hex code appears in any component |
| Accessibility? | Dedicated audit; found a broken skip link, a WCAG contrast failure in my own brand colour, and missing focus rings |
| Weakest part? | No automated tests — the logic is structured for it but I haven't written them |

---

# 11. Glossary of terms

| Term | Meaning |
|---|---|
| **API** | A way for one program to ask another to do something, usually over the internet |
| **API route** | A Next.js file that responds with data instead of a page (`route.ts`) |
| **App Router** | Next.js's routing system where folders become URLs |
| **Client** | The visitor's browser. Cannot keep secrets |
| **Client Component** | A React component marked `"use client"` — ships JS, can be interactive |
| **Component** | A function that returns UI. The basic unit of React |
| **Continuous deployment** | Pushing to git automatically builds and deploys |
| **Controlled input** | An input whose value comes from React state |
| **CSS** | The language that controls appearance |
| **Dependency** | An external package your project uses |
| **devDependency** | A package used only while building; never shipped to visitors |
| **DOM** | The browser's live in-memory representation of the page |
| **Environment variable** | A config value kept outside the code (e.g. a secret key) |
| **ESLint** | A tool that flags code-quality and React-rule problems |
| **Framework** | Opinionated structure that calls your code (Next.js) |
| **Full-stack** | Both frontend and backend |
| **Git / GitHub** | Version control / the site that hosts it online |
| **Hook** | A React function starting with `use` that adds state or behaviour |
| **HTML** | The language that defines structure and content |
| **Hydration** | The browser's React taking over server-rendered HTML |
| **JSX** | Markup syntax written inside JavaScript |
| **Library** | Code you call (React) |
| **Mobile-first** | Base styles target phones; prefixes add larger screens |
| **Prop** | An input passed to a component |
| **Pure function** | Same input always gives same output, no side effects |
| **Regex** | A pattern for matching text |
| **Server** | A computer you control. Where secrets live |
| **Server Component** | The Next.js default — renders on the server, ships no JS |
| **State** | A value a component remembers between renders |
| **Static rendering** | HTML generated once at build time and served as a file |
| **Tailwind** | Utility-class CSS framework |
| **TypeScript** | JavaScript with type checking; compiles away |
| **Union type** | A type that must be one of a fixed set of values |
| **WCAG AA** | The accessibility standard — 4.5:1 contrast for normal text |
| **XSS** | An attack where injected input gets executed as code |

---

# 12. Final study checklist

Tick these off. If you can do all of them, you know this project.

**Can you explain, without notes:**

- [ ] Why the site exists, in one sentence
- [ ] The ten phases, in order
- [ ] The difference between React and Next.js
- [ ] What a component, a prop, and state each are
- [ ] Why `"use client"` exists and where you used it
- [ ] What hydration is and the bug you hit
- [ ] Why `/api/subscribe` exists instead of calling MailerLite from the browser
- [ ] Why 14 routes are static and one is dynamic
- [ ] How a Figma colour becomes `bg-accent` in a component
- [ ] Why there are two accent tokens
- [ ] Three bugs you found and how you fixed them
- [ ] The weakest part of the project and what you'd do next

**Can you open these files and explain them line by line:**

- [ ] `src/app/layout.tsx`
- [ ] `src/app/globals.css`
- [ ] `src/components/SearchableLibrary.tsx`
- [ ] `src/components/Reveal.tsx` + `src/hooks/useHasMounted.ts`
- [ ] `src/app/api/subscribe/route.ts`
- [ ] `src/lib/promptEngine.ts`
- [ ] `src/lib/subscriptions.ts`

---

*End of guide. Live site: https://leverage-report-website.vercel.app —
Source: https://github.com/adityadhanawade/leverage-report-website*
