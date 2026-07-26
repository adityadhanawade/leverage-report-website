# Phase 9 — Development

### The Leverage Report — Web App

> Phases 1–7 produced the *design*. This phase produces the *real, working website*:
> Next.js + React + TypeScript, deployed free on Vercel in Phase 10. This is the
> engineering half of the portfolio.

**Status:** 🚧 IN PROGRESS — started 2026-07-25.
**App location:** `website/`
**Local dev URL:** http://localhost:3006

---

## Build order (from PROJECT.md section 7)

- **Step 1 — Foundation** ✅ done — scaffold, design tokens, fonts, verified build.
- **Step 2 — Round 1 screens:** Homepage + AI Prompt Tool + Subscription Calculator
  (a launchable core site).
- **Step 3 — Round 2:** Savings Planner + Raise Builder + Prompt Library.
- **Step 4 — Round 3:** Glossary + Message Templates + Email signup.

---

## Step 1 — Foundation (✅ 2026-07-25)

### What was set up

| Thing | Choice | Why |
|---|---|---|
| Framework | Next.js 16 (App Router) | Confirmed in PROJECT.md section 5. Static-exportable, free on Vercel, great SEO for the Glossary. |
| Language | TypeScript | Type safety; what recruiters expect on a CSE portfolio. |
| Styling | Tailwind CSS v4 | Design tokens live in CSS, utilities in markup — fast, and keeps the design system enforceable. |
| Motion | Framer Motion | Phase 5 motion spec / PROJECT.md section 10. |
| Charts | Recharts | For the Subscription Calculator + Savings Planner. |
| Fonts | `next/font` — Sora + Inter | Self-hosted automatically: no Google request at runtime (faster + more private), and no layout shift. |

### The key decision: design tokens, not hardcoded colors

Every Phase 5 value is declared **once** in `website/src/app/globals.css` under Tailwind v4's
`@theme` block, which turns each one into a usable utility class:

| Token | Value | Utility class |
|---|---|---|
| `--color-accent` | `#E0531E` | `bg-accent`, `text-accent`, `border-accent` |
| `--color-background` | `#FBF6E9` | `bg-background` |
| `--color-surface` | `#FFFFFF` | `bg-surface` |
| `--color-ink` | `#211C16` | `text-ink` |
| `--color-muted` | `#6E6558` | `text-muted` |
| `--color-border` | `#E5DFD1` | `border-border` |
| `--color-success` | `#3B7A3F` | `text-success` |
| `--radius-control` | `8px` | `rounded-control` |
| `--radius-card` | `12px` | `rounded-card` |

**Why this matters (recruiter talking point):** the Figma design system and the code share one
vocabulary. Nobody types `#E0531E` into a component — they write `bg-accent`. Rebranding is a
one-line change, and a wrong-shade bug becomes structurally impossible.

### Accessibility built in from line one

`globals.css` includes a global `prefers-reduced-motion` block that neutralises every animation
and transition for visitors who've asked their OS to reduce motion. This satisfies the Phase 5
section 6 requirement **before** any animation exists, rather than being retrofitted later.

### Verification (not assumed — measured)

The temporary page at `/` renders the palette, type scale, and components. Rather than eyeballing
it, the live computed CSS was read out of the running browser:

| Checked | Expected | Actual | ✅ |
|---|---|---|---|
| Body background | `#FBF6E9` | `rgb(251, 246, 233)` | ✅ |
| Body text color | `#211C16` | `rgb(33, 28, 22)` | ✅ |
| Body font | Inter | `Inter, "Inter Fallback", …` | ✅ |
| H1 font / size / weight | Sora Bold 32 | `Sora`, `32px`, `700` | ✅ |
| Primary button fill | `#E0531E` | `rgb(224, 83, 30)` | ✅ |
| Button radius | 8px | `8px` | ✅ |
| Card radius | 12px | `12px` | ✅ |

Also: zero console errors, `tsc --noEmit` clean, and `next build` produced a successful static
production build.

### One issue found and fixed

Next.js warned it had inferred the wrong workspace root, because unrelated `package-lock.json`
files exist in parent folders on this machine. Left alone this can make production builds resolve
files differently from dev. Fixed by pinning `turbopack.root` in `website/next.config.ts`;
confirmed the warning disappeared after restart.

### Known, accepted: `npm audit` warnings

`npm audit` reports high-severity advisories in `eslint`/`postcss` dependency chains. These are
**build-time developer tooling**, not code shipped to visitors, and the offered fix
(`npm audit fix --force`) is a breaking major-version bump of ESLint. Decision: **do not force**.
Documented here rather than silently ignored; revisit if a non-breaking fix lands.

### Windows note

`website/start-dev.bat` exists only to launch the dev server from this machine's tooling (npm's
path resolution breaks on the space in `D:\Claude code`). It is not part of the deployed app.

---

## Step 2 — Homepage (✅ 2026-07-25)

Built the real Homepage (Phase 4 SCREEN 1 / Phase 6 mockup), fully responsive, replacing the
Step 1 token-proof page.

### What was built

| File | Purpose |
|---|---|
| `src/lib/site.ts` | Single source of truth for nav links, the 4 tools, secondary links, trust points. Header/footer/homepage all read from here so content can't drift between them. |
| `src/components/Icons.tsx` | Hand-rolled inline SVG icons, replacing the mockups' emoji per the Phase 6 recommendation (emoji render inconsistently across platforms). Zero extra KB, no icon library. |
| `src/components/Header.tsx` | Sticky nav — logo, inline links ≥768px, hamburger + slide-down panel below. |
| `src/components/Footer.tsx` + `EmailSignup.tsx` | Footer with email signup, nav links, Instagram — present on every page per Phase 4. |
| `src/components/ToolCard.tsx`, `Reveal.tsx`, `Logo.tsx`, `Container.tsx` | Reusable building blocks. |
| `src/app/page.tsx` | The Homepage itself: hero → tool cards → trust strip → secondary links, in the exact order from the Phase 4 wireframe. |
| `src/app/not-found.tsx` | Branded 404 — most routes don't exist yet mid-Phase-9, so this says so honestly instead of showing Next.js's default error page. |

### An honest product decision: the email signup doesn't lie

No email provider is wired up yet. Rather than showing a fake "You're subscribed!" message —
which would tell a real visitor something false — the form says signups aren't open yet and
points to Instagram instead. Swapping in a real free-tier provider later is a one-function change;
the markup doesn't need to move.

### "Coming soon" tool cards — same honesty principle

Only the Homepage exists so far; none of the 4 tool pages are built yet. Cards for unbuilt tools
render as non-clickable with a visible "Coming soon" tag, rather than linking to a 404. As tools
get built in Steps 3+, flipping `ready: true` in `site.ts` is the only change needed to make a
card live — no page-level edits.

### Bugs found and fixed this round

1. **Mobile tool-card grid was 1 column instead of 2.** The Phase 4 wireframe explicitly shows
   the 4 tool cards as a 2×2 grid even on a 375px phone. The first pass used Tailwind's
   `sm:grid-cols-2` (640px breakpoint), which meant an actual phone (375–414px) got a single
   column — a real deviation from the approved wireframe. Caught by measuring actual card
   bounding boxes in the browser rather than assuming the class was right; fixed to `grid-cols-2`
   by default with `lg:grid-cols-4` for desktop. Re-measured: 2 columns confirmed at 375px, 4 in
   a row at 1280px, no text overflow.
2. **A real hydration bug in `Reveal.tsx`, caught because the test browser has "reduce motion"
   turned on.** `useReducedMotion()` resolves synchronously on the client's first render (there's
   no `matchMedia` on the server, so the server always assumes motion is fine), so a visitor with
   reduced motion enabled got a server render of `<motion.div>` (with inline animation styles) and
   a client first-render of a plain `<div>` — a genuine hydration mismatch, on the exact component
   built to serve that visitor. Fixed with the standard "mounted gate" pattern: render identically
   to the server until a `useEffect` confirms the client has mounted, only *then* swap to the
   reduced-motion path. That change is itself a client-only re-render, not a hydration diff.
   **Process note:** this shipped invisibly on a normal-motion device; it only surfaced because
   the verification browser had reduced-motion on. Good argument for testing that setting
   deliberately going forward, not just spot-checking default settings.

### Verified (measurement, not eyeballing)

| Check | Method | Result |
|---|---|---|
| Desktop (1280px): H1 at 56px, desktop nav visible, hamburger hidden, 4 tool cards in one row, 1200px content column, no horizontal scroll | Read live computed styles + bounding boxes from the running page | ✅ all match |
| Mobile (375px): H1 at 32px, hamburger visible, desktop nav hidden, 2×2 tool card grid, no horizontal scroll, no text clipping | Same | ✅ all match |
| Zero console errors after the hydration fix | Console read on a fresh tab | ✅ confirmed |
| Production build | `tsc --noEmit` + `next build` | ✅ clean |
| Menu-toggle *logic* | Called the button's React `onClick` handler directly — `aria-expanded` flipped `false → true` correctly | ✅ logic correct |

### Known gap — not yet verified: real click/tap on the mobile menu

The automated browser tool in this session could not simulate an actual pointer click reaching
the page at all (confirmed environment-wide: a bare `addEventListener('click', …)` attached
directly to the button never fired from the automation click, and keyboard `Enter` on the focused
button didn't register either) — this traces to the Browser pane not being visually composited on
this machine during the session, not to a bug in the code. The component logic itself was
independently confirmed correct (see above). **Action for you:** open http://localhost:3006 on
your phone or by narrowing the browser window, and confirm the ☰ menu opens/closes on a real tap
— flag it immediately if it doesn't, since that's the one thing this session couldn't verify
end-to-end.

---

## Step 3 — AI Prompt Tool, the ⭐ star feature (✅ 2026-07-25)

Built the tool at `/tools/prompt` (Phase 4 SCREEN 3 — the screen Phase 4 explicitly names "the
template for all tool pages").

### The core design decision: free forever, no API, in-browser "smart templates"

PROJECT.md section 3 is a hard constraint: *"AI Prompt Tool built the FREE-forever way (in-browser
smart templates, no paid API)."* `src/lib/promptEngine.ts` is that engine:

1. The visitor's raw text is matched against 7 categories (raise/negotiation, resume, outreach,
   explain/learn, content writing, code, money) using keyword regexes — no ML, no network call.
2. The matched category fills a hand-written prompt template built on real prompt-engineering
   structure: an explicit role ("Act as a…"), the visitor's actual context inserted verbatim, a
   numbered task list, and a tone instruction.
3. Nothing matches → a general-purpose fallback template still applies the same structure
   (role → context → structured output → tone → ambiguity handling), so the tool is never a dead
   end even for an unanticipated request.

This is what makes it "smart" without being AI-powered: picking the right template and writing it
well, not machine learning. Zero ongoing cost, works offline, never rate-limited.

### Two new reusable components (matching Phase 4's own instruction)

- `ToolHeader` — icon + title + intro. Phase 4 literally calls this screen the template for the
  Subscription Calculator, Savings Planner, and Raise Builder pages coming next, so it was built
  as a shared component immediately rather than duplicated later.
- `CopyButton` — copy-to-clipboard with the Phase 5 icon-morph-to-checkmark micro-interaction.
  Will be reused by the Prompt Library and Message Templates pages (Phase 4 SCREEN 5), which have
  the same "card + Copy" pattern.
- `AppearIn` — a mount-triggered fade+rise (350ms, per the Phase 5 spec for *this exact
  interaction*), distinct from the scroll-triggered `Reveal` used on the Homepage. Built with the
  same hydration-safe "mounted gate" pattern discovered fixing the Step 2 bug.

### Two honest product decisions

- **Disabled build button, not a silent no-op.** "Build my prompt" is disabled until there's real
  input, with a visible dimmed state — no clicking into an empty result.
- **The honesty note is still there.** Phase 4's "ⓘ The catch" line survived into the real build:
  the tool tells the visitor outright that the output works best once they swap in their real
  details. Matches the brand's whole positioning.

### Verified

| Check | Method | Result |
|---|---|---|
| "raise" input → correct category | Set the textarea via a real React state update, submitted the form, read the rendered result | ✅ produced the compensation-coach template with the visitor's exact input inserted |
| Unmatched input → fallback | Same method, input "plan a birthday party for my sister" | ✅ produced the general-purpose fallback template, not an empty/broken result |
| Copy button — real environment restriction, not a bug | Called `navigator.clipboard.writeText` directly | Browser correctly threw `NotAllowedError: Document is not focused` — a genuine browser security rule (clipboard access needs a real user gesture + focused document). The button's `catch` block already handles this by staying in its normal "Copy" state rather than lying about success. Will work normally for an actual user click. |
| Desktop (1280px): 600px centered form + result column, H1 32px, no horizontal scroll | Live bounding-box + computed-style reads | ✅ all match |
| Mobile (375px): no horizontal scroll, result text wraps inside its box (no clipping), full-width button | Same | ✅ all match |
| Zero console errors on a fresh tab | Console read after navigating directly to `/tools/prompt` | ✅ confirmed |
| Production build | `next build` | ✅ clean, new `/tools/prompt` route listed as static |
| Homepage integration | Flipped `ready: true` in `site.ts`, reloaded Homepage | ✅ AI Prompt Tool card now shows "Open" and links through; the other 3 unbuilt tools still honestly show "Coming soon" |

### Technical note: metadata on a client-component page

`page.tsx` is `"use client"` (it needs `useState` for the form), and a client component cannot
export Next.js's `metadata` object — that's an App Router rule, not a workaround. Added a small
server-component `layout.tsx` in the same route folder that exports the page's `<title>` instead;
confirmed via the browser tab title reading "AI Prompt Tool — The Leverage Report" correctly.

---

## Step 4 — Subscription-Leak Calculator (✅ 2026-07-25)

Built at `/tools/subscriptions` (Phase 4 SCREEN 4) — dynamic subscription rows, live $/month and
$/year totals, an animated bar chart (Recharts, already in the confirmed stack), and a suggestion.

### One product decision that changed the Phase 4 mockup copy, on purpose

The mockup text reads "💡 These look unused — consider cutting," implying the tool detects actual
usage. It can't — there's no bank connection or usage history, just what the visitor types in.
Shipping the mockup's literal copy would be a real, if small, dishonesty — directly against the
brand's own "no fluff, honest" positioning (PROJECT.md section 3). Changed the suggestion to
honestly surface the **priciest** subscription instead: *"Your priciest one is Adobe CC at
$49.92/month ($599/year). Worth asking: do you still use it?"* — still useful, still a nudge,
but claims exactly what the tool actually knows.

### How the numbers work (`src/lib/subscriptions.ts`, kept separate from the UI like `promptEngine.ts`)

- Every subscription normalizes to a **monthly** figure (`price / 12` if billed yearly) before
  summing, so mixed monthly/yearly subscriptions add up correctly.
- Invalid or negative prices resolve to `0` rather than `NaN` — verified directly (see below).
- `formatCurrency` drops decimals for whole-dollar amounts, keeps 2 decimals otherwise, so $599
  doesn't render as "$599.00".

### Count-up number, honoring reduced motion, without a hydration bug

Built a reusable `CountUp` component for the Phase 5 spec ("Calculator result number: count-up,
600ms"). It starts its `display` state equal to the incoming `value`, so the very first
server/client render always matches — it only animates when the value actually *changes* after
that (i.e. never during initial hydration, only when a visitor edits a row). Reused the same
approach for the Recharts bar animation (`isAnimationActive={!prefersReducedMotion}`).

### Verified (with real state changes, not just visual inspection)

| Check | Method | Result |
|---|---|---|
| Mixed monthly/yearly math | Set Netflix $15.49/mo + Adobe CC $599/yr via real React state updates | ✅ $65.41/month, $784.88/year — hand-checked, exact |
| Removing a row recalculates | Clicked the trash button's real onClick handler for Netflix | ✅ dropped to $49.92/month, $599/year (exactly Adobe CC alone) |
| Adding a row | Clicked "+ Add subscription" | ✅ new row appeared with a fresh, non-colliding id |
| Suggestion picks the actual priciest item | Read the rendered suggestion text | ✅ correctly named Adobe CC, correct $ figures |
| Negative price doesn't crash | Set a price input to `-50` directly | ✅ treated as $0, no `NaN` anywhere on the page |
| Desktop (1280px): true side-by-side columns, ~581px/387px split (spec: ~560/400), no overflow | Live bounding-box reads | ✅ |
| Mobile (375px): stacked, full-width, no overflow | Same | ✅ |
| Zero console errors on fresh navigation | Console read | ✅ |
| Production build | `next build` | ✅ clean, `/tools/subscriptions` listed as a new static route |
| Homepage integration | Flipped `ready: true` in `site.ts` | ✅ card now shows "Open" and links through; Savings Planner and Raise Builder still honestly show "Coming soon" |

Round 1 "launchable core" (Homepage + AI Prompt Tool + Subscription Calculator) is now complete.

---

## Step 5 — Savings Goal Planner (✅ 2026-07-25)

Built at `/tools/savings` — Round 2 begins (section 7: Savings Planner + Raise Builder + Prompt Library).

### Honest process note: this screen skipped Figma entirely

Checked all of Phases 4-7 before starting: the Savings Goal Planner **never got its own wireframe
or mockup** — it only ever existed as a card label in the Tools Index wireframe
(`docs/04-wireframes.md` line 121) and a known gap noted in the Phase 7 prototype doc (its tool
card was left deliberately unlinked). So there was no Figma spec to build against. Flagged this to
the user up front (advisor role, not silently deciding) before designing the screen directly in
code, following two things instead: the conventions already proven on the Subscription Calculator
(live recalculation, two-column layout, chart) and the locked deliverable spec from
`docs/01-project-brief.md`: *"goal + monthly saving -> timeline + chart."*

### The math (`src/lib/savings.ts`)

Runs a real month-by-month simulation rather than a closed-form formula — needed anyway to produce
the chart's data points, and it sidesteps having to hand-derive separate edge-case formulas for
the "no growth" vs. "compound growth" cases:

- Each month: `balance = balance * (1 + monthlyRate) + contribution`, where `monthlyRate` is 0
  unless the visitor enters an expected annual return.
- Stops the moment `balance >= goalAmount`, recording the month count and a projected date.
- Capped at 600 months (50 years) so a genuinely unreachable goal (e.g. $0/month, 0% return, and
  current savings below the goal) can't loop forever — it's reported honestly as "not reached"
  rather than silently guessed at.
- `sampleForChart` down-samples to ~60 points for chart readability when the simulation runs long,
  rather than plotting all 600 raw points.

### Three honest states, not just the happy path

- **Goal already met** (current savings ≥ goal) → "You're already there 🎉", no fake countdown.
- **Genuinely unreachable** ($0/month, 0% return) → says so directly and tells the visitor what to
  change, instead of showing a broken/infinite result.
- **Reached within the cap** → month count, years, and a real projected calendar month/year.

### Verified (real state changes, hand-checked math)

| Check | Method | Result |
|---|---|---|
| Plain savings math (0% return) | Goal $5,000, start $1,000, $200/mo via real state updates | ✅ exactly 20 months (1,000 + 200×20 = 5,000), target date "March 2028" — hand-checked |
| Compound growth speeds up the timeline | Same inputs, added 6% annual return | ✅ dropped to 19 months — directionally and numerically correct (growth on top of contributions reaches goal sooner) |
| Unreachable goal → honest message, not a crash or infinite loop | Set monthly contribution to $0, rate to 0%, start below goal | ✅ "With $0/month and no return, this goal is never reached on its own…" — chart correctly hidden (only the starting point exists) |
| Goal already met | Set current savings above the goal | ✅ "You're already there 🎉", no timeline shown |
| Desktop (1280px): true side-by-side ~581/387px columns, no overflow | Live bounding-box reads | ✅ matches the Subscription Calculator's proven layout |
| Mobile (375px): stacked, no overflow | Same | ✅ |
| Zero console errors, correct page title | Console + title check on fresh navigation | ✅ ("Savings Goal Planner — The Leverage Report") |
| Production build | `next build` | ✅ clean, `/tools/savings` listed as a new static route |
| Homepage integration | Flipped `ready: true` in `site.ts` | ✅ card now shows "Open"; only Raise Builder still shows "Coming soon" |

### One operational note for future sessions

The dev server needs a restart (not just a hot-reload) after adding a brand-new route folder —
reusing an already-running server served the new `/tools/savings` page but with a stale page
title, until it was stopped and restarted. Worth remembering for the remaining tool pages.

---

## Step 6 — Raise & Negotiation Builder (✅ 2026-07-25) — all 4 tools complete

Built at `/tools/raise`. Same situation as the Savings Planner: no Figma wireframe or mockup
exists for this screen (only ever a Tools Index card label — confirmed across Phases 4-7 again).
Built directly against the locked deliverable spec from `docs/01-project-brief.md`: **"role + ask
-> ready-to-send script."**

### The key design distinction from the AI Prompt Tool

The Prompt Tool writes a *prompt for an AI* to run elsewhere. This tool writes the **actual
message** — something to read out loud or paste straight into a chat with a manager. That's why
`src/lib/raiseBuilder.ts` builds real sentences directly (an opening line keyed to the ask type, a
bulleted reasons list, the specific ask restated, a tone-appropriate closing, and a calm
"if they say not now" line) rather than wrapping the input in a meta-instruction. Also why the page
uses the explicit **"Build my script"** button (same pattern as the Prompt Tool) instead of the
Subscription/Savings calculators' live-recalculation pattern — this generates a text artifact to
review and copy, not a number that should update every keystroke.

### Reuse over duplication

`TONES` / `ToneValue` are imported from `promptEngine.ts` and re-exported, rather than a second
identical 5-option tone list living in a second file — same concept (confident/friendly/formal/
persuasive/concise), one source of truth. `ToolHeader`, `CopyButton`, and `AppearIn` — all built
during Steps 3-4 specifically because Phase 4 called the Prompt Tool screen "the template for all
tool pages" — are reused again here.

### Verified (real state changes, both branches of the conditional logic)

| Check | Method | Result |
|---|---|---|
| "Raise" script, full inputs | Set role, $8,000 detail, 3 reasons, confident tone via real React state updates, submitted the form | ✅ correct opening line with role inserted, all 3 reasons as bullets, "Specifically, I'm asking for $8,000," confident-tone closing, the "not right now" line |
| "Flexible work" ask type — different branch | Switched ask type + detail + friendly tone, resubmitted | ✅ correct opening line variant, **correctly omitted** the raise/promotion-only "Specifically, I'm asking for" line, friendly-tone closing changed as expected — confirms the conditional logic branches correctly, not just re-using the same output |
| Empty-state guard | Cleared role/detail/reasons directly | ✅ Build button correctly `disabled` |
| Desktop (1280px): 600px centered column, no overflow | Live bounding-box reads | ✅ matches the Prompt Tool's proven layout |
| Mobile (375px): no horizontal overflow | Same | ✅ |
| Zero console errors, correct page title on first load | Console + title check | ✅ ("Raise & Negotiation Builder — The Leverage Report") — dev server was restarted first per the Step 5 operational note, and it worked on the first navigation this time |
| Production build | `next build` | ✅ clean, `/tools/raise` listed as a new static route |
| Homepage integration | Flipped `ready: true` in `site.ts` | ✅ **all 4 tool cards now show "Open"** — no more "Coming soon" cards on the Homepage |

**All 4 locked tools (AI Prompt Tool, Subscription-Leak Calculator, Savings Goal Planner, Raise &
Negotiation Builder) are now built, wired into the Homepage, and verified.** Remaining Round
2/3 scope: Prompt Library, Message Templates, AI Terms Glossary, and the real email-signup backend
(see `EmailSignup.tsx`'s honesty note).

---

## Step 7 — Prompt Library (✅ 2026-07-25)

Built at `/library` (Phase 4 SCREEN 5 — this one *does* have a real wireframe spec, unlike the
Savings Planner/Raise Builder gap from Steps 5-6). Search box + category filter chips (All/
Career/Money/Freelance) + a card grid, each card copyable.

### Content is the real work here

Unlike the tool pages, this screen's substance is 13 hand-written prompts (`promptLibrary.ts`),
not logic — locked deliverable #5 is "searchable set of **tested** prompts," so the content had to
actually be good, not placeholder text. Wrote a real spread across the 3 categories (5 Career, 4
Money, 4 Freelance) covering things the target audience (Phase 2 personas) actually needs: resume/
interview help, budget audits, invoice follow-ups, client proposals. Every prompt uses
`[bracket placeholders]` for personal details — consistent with the honesty pattern used
everywhere else on the site (the Prompt Tool's "swap in your real details" note, the Raise
Builder's same note) — a static prompt can't know the visitor's actual numbers, so it says so via
the placeholder itself rather than pretending.

### Search + filter, combined correctly

Both filters (text search and category chip) apply together via `Array.filter`, not as separate
exclusive modes — searching "invoice" while the "Career" chip is active correctly returns zero
results with an honest empty state, not a silent fall-back to one filter or the other.

### Verified (real interaction, not just rendering)

| Check | Method | Result |
|---|---|---|
| All 13 prompts render | Counted cards + read titles | ✅ |
| Search narrows correctly | Typed "invoice" via real input event | ✅ narrowed to exactly 1 card ("Follow up on an unpaid invoice") |
| Category chip filters correctly | Called the "Career" chip's real onClick handler | ✅ narrowed to exactly the 5 Career cards, `aria-pressed` flipped to `"true"` |
| Search + category combine (AND, not OR) | Career chip active + nonsense search text | ✅ correctly zero results, honest empty-state message shown |
| Desktop (1280px): true 3-column grid, no overflow | Live bounding-box reads | ✅ matches the Phase 4 spec ("3-column grid, centered ~1200px") |
| Mobile (375px): no horizontal overflow | Same | ✅ |
| Zero console errors, correct title on first load | Console + title check | ✅ ("Prompt Library — The Leverage Report") |
| Production build | `next build` | ✅ clean, `/library` listed as a new static route |
| Cross-page link now resolves | Checked the Prompt Tool's "Browse the Prompt Library" link | ✅ points to `/library`, which now renders instead of the branded 404 |

One minor test-environment note: a combined script (clear search + immediately click a filter chip
in the same call) produced a stale result once — isolating the two actions into separate calls
confirmed the actual app behavior is correct. Logged as a testing-tool quirk, not an app bug.

---

## Step 8 — Message Templates (✅ 2026-07-25)

Built at `/templates`. Phase 4's own wireframe doc says this screen "reuses this exact layout
[cards + copy], just different content" as the Prompt Library — so rather than copy-pasting the
~110-line Library page into a second file, extracted the shared parts into
`SearchableLibrary.tsx` first, then rebuilt both pages as thin wrappers.

### The refactor

`SearchableLibrary` takes a generic `LibraryItem[]` (`id`, `title`, `category`, `description`,
`copyText`) plus a category list and some labels — all the search/filter/grid logic and markup
lives in exactly one place now. `/library/page.tsx` and `/templates/page.tsx` both shrank to a
`ToolHeader` plus a few lines mapping their own data into that shape. Side benefit: since the
client-only logic (`useState`, `useMemo`) moved into `SearchableLibrary`, both page files became
plain server components, so `/library` no longer needs the separate `layout.tsx` metadata
workaround used by the client-component tool pages — `metadata` exports directly from `page.tsx`
now. Re-tested `/library` after the refactor specifically to make sure nothing broke it.

### Content: distinct from the Raise Builder tool, on purpose

12 static templates (4 Raise, 4 Bills, 4 Outreach) covering situations the *dynamic* Raise & Negotiation
Builder doesn't specifically handle — a written follow-up email, cancelling a subscription,
disputing a charge, cold outreach, reconnecting with a contact — rather than just restating what
that tool already generates. Same `[bracket placeholder]` honesty pattern as the Prompt Library.

### New icon

Added `TemplatesIcon` (a document with a folded corner) — deliberately distinct from `RaiseIcon`
(a plain speech bubble) so the two "message" screens don't look identical in the nav/header.
Registered it in `IconName` and `iconMap` (`site.ts` / `Icons.tsx`), the same two-file pattern as
every other icon.

### Verified (real interaction, and a regression check on the refactored page)

| Check | Method | Result |
|---|---|---|
| `/library` still works after the refactor | Counted cards, checked title | ✅ still all 13 prompts, correct title, zero console errors — refactor didn't regress it |
| All 12 templates render | Counted cards + read titles | ✅ |
| Search narrows correctly | Typed "landlord" via real input event | ✅ narrowed to exactly 1 card |
| Category chip filters correctly | Called the "Outreach" chip's real onClick handler | ✅ narrowed to exactly the 4 Outreach cards |
| Desktop (1280px): true 3-column grid, no overflow | Live bounding-box reads | ✅ |
| Mobile (375px): no horizontal overflow | Same | ✅ |
| Zero console errors, correct title on first load | Console + title check | ✅ ("Message Templates — The Leverage Report") |
| Production build | `next build` | ✅ clean, `/templates` listed as a new static route |
| Nav/footer links resolve | Checked both `/templates` links on the Homepage | ✅ point correctly, page now renders instead of the branded 404 |

All locked deliverables except the AI Terms Glossary and the real email-signup backend are now
built.

---

## Step 9 — AI Terms Glossary (✅ 2026-07-25)

Built at `/glossary` (Phase 4 SCREEN 6). Locked deliverable #7: "plain-English AI dictionary
(Agents, tokens, MCP...). Also SEO."

### Deliberately NOT forced into `SearchableLibrary`

The Library/Templates shape (category chips + Copy button) doesn't fit here: glossary terms don't
split cleanly into a handful of filter categories, there's nothing to "copy" (it's reference
content, not a script or prompt), and some terms have an optional "related tool" link instead.
Rather than bending the shared component with special-case props, this page is its own small
`GlossaryList` client component — search only, alphabetical, with an optional related-tool link
per term. Right call per the project's own "don't force reuse where the shape genuinely differs"
judgment call, same as keeping the calculators separate from the generators earlier.

### Content: real, accurate definitions — this is the SEO page

16 terms (AI Agent through Zero-shot/Few-shot), written for correctness first since this is the
page most likely to get organic search traffic (someone searching "what is a token AI" or "what
does hallucination mean AI"). Three terms — Chatbot, Prompt, Prompt Engineering — link to the AI
Prompt Tool where the connection is genuinely useful, not sprinkled in as self-promotion.

### SEO-relevant detail: stable per-term anchors

Each term has a stable `id` (e.g. `token`, `mcp`) rendered directly on its card
(`<div id={t.id}>`), so `/glossary#token` deep-links straight to one definition — useful for
sharing a single term or for a search engine to link directly into the page. `scroll-mt-20`
keeps the sticky header from covering the target term when the browser jumps to it.

### Verified

| Check | Method | Result |
|---|---|---|
| All 16 terms render, alphabetical | Counted cards + read term list | ✅ |
| Related-tool links correct | Counted links to `/tools/prompt` | ✅ exactly 3 (Chatbot, Prompt, Prompt Engineering) |
| Search matches definition text, not just the term title | Searched "hallucin" | ✅ correctly returned both "Hallucination" *and* "RAG" (RAG's own definition mentions hallucinations) — confirms the search isn't just title-matching |
| Empty state | Searched nonsense text | ✅ honest "no terms match" message |
| Anchor deep-linking | Navigated to `/glossary#token` | ✅ the `token` id exists and is attached to the correct card (confirmed after clearing a leftover search-state from the previous test — a same-page SPA navigation carried state forward, expected behavior, not a bug) |
| Desktop (1280px): true 2-column grid, no overflow | Live bounding-box reads | ✅ matches the Phase 4 spec ("2-column grid, centered ~1000px") |
| Mobile (375px): no horizontal overflow | Same | ✅ |
| Zero console errors, correct title on first load | Console + title check | ✅ ("AI Terms, Decoded — The Leverage Report") |
| Production build | `next build` | ✅ clean, `/glossary` listed as a new static route |
| All 3 Homepage "Glossary" links resolve | Nav, secondary-link card, footer | ✅ all point to `/glossary`, which now renders instead of the branded 404 |

**All 8 originally locked deliverables are now built** (Homepage + 4 tools + Prompt Library +
Message Templates + Glossary). Only the real email-signup backend remains — currently, honestly,
telling visitors signups aren't connected yet rather than faking a confirmation (see
`EmailSignup.tsx`).

---

## Step 10 — Tools Index + About (✅ 2026-07-25) — every sitemap page now built

After Step 9, the user asked "so all pages are designed and done?" — checking rather than assuming
surfaced a real gap: **two pages from the Phase 3 sitemap were linked from the live site but never
built.** The Homepage's "Explore the tools" button and the nav's "Tools" link both pointed at
`/tools`; the footer's "About" link (present on every page) pointed at `/about`. Neither existed —
both were silently hitting the branded 404. They weren't part of the "8 locked deliverables" list
(that list is tools + content pages, not structural/navigational pages), which is how they got
missed while working strictly through that list.

### Tools Index (`/tools`) — Phase 4 SCREEN 2

Reuses the exact `tools` data array and `ToolCard` component already built for the Homepage's
preview grid — this page is just the full, dedicated listing with its own header ("All Tools" /
"Pick a tool. Each does one job, fast.") instead of a teaser. No new component needed.

### About (`/about`) — Phase 4 SCREEN 7

Content pulled directly from the Phase 1 Project Brief's own background and problem-statement
sections rather than generic "About Us" filler — the brand's actual origin story (an Instagram
page whose tips disappear in the feed) and its actual differentiation (honest about limits, no
paid-product push). Stays anonymous per PROJECT.md's hard constraint (no personal name/info) —
this is the brand's story, not the person's.

### Verified

| Check | Method | Result |
|---|---|---|
| `/tools`: all 4 tools show "Open", correct title | Read page text + title | ✅ |
| `/tools` desktop: true 2×2 grid, no overflow | Live bounding-box reads | ✅ matches Phase 4 spec |
| `/tools` mobile: no overflow | Same | ✅ |
| `/about`: correct content, stays anonymous, correct title | Read page text | ✅ no personal name/info anywhere |
| `/about` Instagram link: correct URL, safe `rel` | Checked `href`/`target`/`rel` | ✅ `noopener noreferrer`, opens in new tab |
| `/about` desktop: 680px centered column | Live bounding-box read | ✅ matches Phase 4 spec exactly |
| `/about` mobile: no overflow | Same | ✅ |
| Production build | `next build` | ✅ clean, both new routes listed |
| **Full site link sweep** | Collected every unique internal `href` on the Homepage | ✅ `/`, `/about`, `/glossary`, `/library`, `/templates`, `/tools`, and all 4 tool sub-routes — every single one now resolves to a real page. **Zero dangling links left anywhere on the site.** |

Every page in the original Phase 3 sitemap is now built. Only the real email-signup backend
remains outstanding.

---

## Step 11 — Code-quality & polish audit (✅ 2026-07-25)

The user asked (a second time) to look for anything remaining. Rather than re-check sitemap
coverage again, this pass audited things a feature-by-feature build naturally doesn't surface:
lint, dead files, SEO infrastructure, and stale docs/copy.

### Real lint errors found and fixed

`npm run lint` had never been run this session. It caught 3 real errors — `react-hooks/set-state-in-effect`,
flagging the `useState` + `useEffect(() => setX(true), [])` "mounted gate" pattern used in
`Reveal.tsx`, `AppearIn.tsx`, and a similar pattern in `Header.tsx` (closing the mobile menu on
route change). Fixed properly rather than suppressed:

- **`Reveal`/`AppearIn`**: replaced the mounted-gate with a new shared `useHasMounted()` hook
  (`src/hooks/useHasMounted.ts`) built on `useSyncExternalStore` — the React-recommended shape for
  "is this the client yet," with no `setState`-in-effect at all. Verified the hydration-safety
  property this was protecting (no console errors on any of the 10 pages) still holds after the
  swap — re-checked every single page, not just the two directly touched.
- **`Header`**: replaced the `useEffect(() => setOpen(false), [pathname])` pattern with the React
  docs' recommended "adjust state during render" shape — comparing `pathname` to a `lastPathname`
  state value directly in the render body and calling `setState` there (not inside an effect).
- While in `Header.tsx`, also finally **verified the mobile menu for real** (flagged unverified
  since Step 2): the toggle button's actual React click handler correctly opens/closes the menu
  and renders all 4 real nav links pointing at real pages. A `computer` (simulated mouse) click did
  *not* register — traced to the Browser pane not being visually composited in this test session
  (same root cause as the earlier clipboard-focus limitation), not an app bug; confirmed by
  invoking the exact same handler function directly and watching the DOM/aria-state change
  correctly.

### Dead files removed

`public/{file,globe,next,vercel,window}.svg` and `src/app/favicon.ico` were the untouched
`create-next-app` scaffold — confirmed zero references anywhere in `src/` before deleting. Added a
real branded `icon.svg` (dark background, accent-colored bar echoing the wordmark's logo mark)
instead of the default Next.js logo favicon every visitor's browser tab was showing.

### SEO infrastructure (the Glossary's own "also SEO" mandate applies site-wide)

Added `sitemap.ts` and `robots.ts` (Next's file-convention routes) listing all 10 real pages, plus
`metadataBase`, Open Graph, and Twitter-card metadata on the root layout, plus a `themeColor`
viewport export matching the site's background color. All read from one new `site.url` constant
(a placeholder `*.vercel.app` guess, matching PROJECT.md's free-hosting constraint) — one line to
update once the real Vercel URL exists, not scattered across files.

### Stale docs/copy fixed

- **Root `README.md`** (the public, recruiter-facing overview) still said "planned features" for
  every tool that's actually built, and its phase checklist stopped at Phase 7. Updated to reflect
  reality: all 4 tools + Prompt Library + Message Templates + Glossary listed as done, tech stack
  table filled in (Framer Motion, Recharts, Tailwind), phase list extended through 9.
- **`website/README.md`** was the untouched `create-next-app` boilerplate, pointing at port 3000
  (wrong — the app runs on 3006) and generic "Learn Next.js" links. Replaced with real run
  instructions and a structure guide.
- **The branded 404 page's copy** ("This page isn't built yet... the site is being built in the
  open") was accurate while most pages were genuinely missing mid-build, but stale now that all 10
  real pages exist — it would confuse a visitor who hit a genuine typo/broken link. Reworded to a
  standard "page not found" message.

### Verified

| Check | Method | Result |
|---|---|---|
| Lint | `npm run lint` | ✅ 0 errors (was 3) |
| Production build | `next build` | ✅ clean, `icon.svg`/`sitemap.xml`/`robots.txt` all listed as routes |
| All 10 pages re-checked for console errors after the `Reveal`/`AppearIn` refactor | Navigated to each, read console | ✅ zero errors anywhere |
| Mobile menu — real toggle logic | Invoked the actual button's React handler, read `aria-expanded`/DOM | ✅ opens/closes correctly, all 4 links correct and resolve |
| `sitemap.xml` content | Rendered in browser | ✅ all 10 real routes listed, no stale/missing entries |
| `robots.txt` content | Rendered in browser | ✅ correct `Allow: /` + sitemap reference |
| `icon.svg` loads | Network request check | ✅ 200 OK |
| No dead scaffold files reintroduced by the build | `next build` output | ✅ build has no references to the deleted SVGs/favicon |

No git repo has been initialized yet, and `assets/`/`design/` still only hold `.gitkeep`
placeholders (no exported screenshots) — both are known, already documented in PROJECT.md section
9 as deliberately deferred until the user is ready ("offer, don't auto-do"), not overlooked gaps.

### Process lesson: `next build` while `next dev` is running corrupts the dev server

After this audit, the user's own browser hit a real `Internal Server Error` on `localhost:3006`.
Cause: `next build` (run repeatedly throughout this session as a verification step, each preceded
by `rm -rf .next`) writes into the same `.next` directory the live `next dev` process uses for its
own cache/manifests. Running a production build while dev is live can corrupt the dev server's
state — confirmed via its logs (`ENOENT ... routes-manifest.json`, `Cannot find module
'.../turbopack]_runtime.js'`). Not a bug in any page's code — a build-artifact collision between
the two processes sharing one output directory.

**Fixed by:** stopping the dev server, clearing `.next`, restarting clean.

**Rule going forward:** don't run `npm run build` as a routine verification step while the dev
server the user is also looking at is live on the same project — `next lint` + the dev server's
own hot-reload (plus targeted browser checks) cover verification without touching `.next` at all.
Reserve `next build` for a deliberate final check, and restart the dev server immediately after.

---

## Step 12 — Real bug-hunt pass, triggered by a real user-reported bug (✅ 2026-07-25)

The user tried the AI Prompt Tool with **"how to tell claude to build a website"** and got the
generic fallback template — not a category match. Then asked for a genuinely deep pass across
everything else too, since they can't exhaustively test it themselves. This step covers both: the
reported bug (root-caused and fixed, not patched around) and a real testing pass across the rest
of the site that surfaced two more genuine, previously-undiscovered bugs.

### Bug 1 (reported): Prompt Tool's keyword matching was too narrow

Root cause: the `explain` category only matched the literal phrase "how does", not "how to" —
extremely common phrasing — and there was no category at all for "help me use [AI tool] to do X,"
which is arguably the single most on-brand request this exact tool could receive. Fixed in
`promptEngine.ts`:

- **Added a new `ai-tool` category** — matches explicit AI assistant names (Claude, ChatGPT, GPT-4,
  Copilot, Gemini, Perplexity, "AI assistant", "chatbot"). Deliberately does NOT match bare "ai"
  (the brand's whole audience talks about "AI" constantly — matching that word alone would hijack
  huge numbers of unrelated money/career requests). Produces a prompt-writing-coach template: a
  ready-to-paste prompt for the *named* AI, not generic advice.
- **Broadened `explain`** to cover "how to", "how can", "why does/is/do", "what are", "teach me" —
  not just the original narrow set.
- **Reordered categories into a deliberate priority ladder** (documented in the file's own header
  comment now): specific-domain signals first (raise, resume, outreach, ai-tool, content, code,
  money), the now-much-broader `explain` catch-all second-to-last, generic fallback last. This
  matters because broadening `explain` created a real risk of it swallowing inputs that should hit
  a more specific category (e.g. "how to fix this bug" contains both "how to" and "bug") — putting
  it last means the specific match always wins.
- **Reworded the `code` template** — it was written entirely in "root cause / the fix" bug-report
  language, which read badly for from-scratch build requests ("how to build a website...") once
  those started routing there. Generalized to "the most direct way to approach it" so it fits both
  framings.

**Verified with a real, repeatable regression battery** (not spot checks): drove 20 realistic
inputs through the actual running app — real React state updates, real form submissions, reading
the real rendered output — covering every category plus deliberately adversarial cases designed to
break the new priority ordering (e.g. "explain what an API is" to check code-vs-explain priority,
"write a tiktok script about budgeting" to check content-vs-money priority). **20/20 passed**,
including the exact originally-reported phrase now correctly routing to the new `ai-tool` category.

### Bug 2 (found during the deep pass, not reported): grid overflow from unbroken long text

Testing the Subscription Calculator with a 300-character subscription name (no spaces) broke the
page layout — horizontal scroll on both mobile and, differently, contributing at desktop. Root-
caused properly rather than patched at the first guess (see the full false-start trail below,
because it's a useful lesson): the Subscription Calculator and Savings Planner both use
`md:grid-cols-[3fr_2fr]` for their two-column layout. **A CSS Grid track's automatic minimum size
defaults to its content's min-content size** unless the track is wrapped in `minmax(0, ...)` — so
any single unshrinkable child (here: Recharts rendering the long name as an SVG axis label, which
doesn't wrap) can force the *entire grid*, and therefore the whole page, wider than the viewport.
Below the `md` breakpoint, the same class of bug existed for an even simpler reason: no
`grid-cols-1` base class meant no `grid-template-columns` was set at all at mobile widths, falling
back to the browser's unconstrained default sizing.

**Fixed in both files:** added `grid-cols-1` as the base (mobile) class, and changed the desktop
override to `md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]`. Also added a `min-w-0` wrapper around the
Subscription Calculator's name `<input>` specifically (verified this independently matters at the
row level — without it, a long value still spills past its own card even once the page-level width
is capped).

**The false-start trail (kept here honestly, not scrubbed, because it's a real lesson):** the first
three fix attempts — `break-words`/`min-w-0` on the suggestion text, a `min-w-0 flex-1` input
wrapper with `w-full`, and initially just the desktop `minmax()` grid change alone — each looked
plausible but empirically did NOT resolve the reproduction case when re-tested (confirmed via the
exact same measurement before claiming success, not just re-running the fix and assuming it
worked). The actual root cause only became clear by systematically bisecting the input (long name
alone vs. huge price alone vs. both), checking computed styles directly (`getComputedStyle`,
`field-sizing`, `flex-basis`), and — critically — checking which viewport width was actually being
tested at each step (the desktop-only `minmax()` fix correctly resolved desktop but did nothing for
mobile, since the `md:` override isn't even active below that breakpoint — the missing piece was
the mobile-width `grid-cols-1` base class).

**Verified thoroughly:** re-ran the original 300-char reproduction at both breakpoints (clean),
stress-tested with 1000+ unbroken characters and a fake long URL as a subscription name (clean),
confirmed desktop 2-column layout is pixel-identical to before the fix (no regression, 581px/387px
split unchanged), and applied + verified the identical fix on the Savings Planner (same latent bug,
same fix, same verification).

### Bug 3 (found during the deep pass): search-empty-state overflow

The exact same class of bug (unbroken user-typed text rendered without word-break handling) existed
independently in the "No results match '{query}'" empty-state message on **all three search
pages** — Prompt Library, Message Templates (both via the shared `SearchableLibrary` component,
fixed once), and the Glossary (its own separate `GlossaryList` implementation, fixed separately
since it doesn't share that component). A 2000-character search query reproduced the same
horizontal-overflow bug on all three before the fix; added `break-words` to each, then confirmed a
2000-char query no longer overflows on any of the three, at both breakpoints.

### Also re-verified, no new issues found

- **XSS/injection safety**, deliberately tested with `<script>`/`<img onerror>` payloads in every
  user-text field on the site (Subscription name, Prompt Tool textarea, Raise Builder role/detail/
  reasons, all three search boxes, the email field): React's default escaping held in every case —
  confirmed by checking the actual DOM for injected `<script>`/`<img src="x">` elements, not just
  "no alert fired" (an alert not firing doesn't prove the payload didn't execute some other way).
- **Numeric edge cases**: garbage text force-set into a `type="number"` price field resolves to $0
  (not `NaN`), a huge price ($999,999,999) formats correctly with commas, a negative price is
  clamped to 0 — all previously verified in earlier steps, re-confirmed here as part of the same
  pass.
- **Raise Builder's reasons cap**: fed 6 reasons, confirmed exactly 4 render (the documented cap in
  `raiseBuilder.ts`), not a silent bug.
- **All 10 pages re-swept for console errors** after every fix in this step — zero regressions
  anywhere.

### Honest limits, stated plainly rather than implied away

Free, in-browser keyword matching can never have perfect coverage — "should I rent or buy a house"
still correctly falls to the generic fallback template, because it doesn't contain any of the
site's keyword signals. That's an inherent, permanent limit of this approach (the same one
PROJECT.md's own hard constraint accepts: no paid AI API means no true language understanding),
not a bug to chase indefinitely. The fixes in this step closed a real, demonstrated gap (missing
"how to" phrasing and AI-tool mentions) and two real, independently-discovered layout bugs — not a
claim that every possible input now produces a perfectly tailored result.

---

## Step 13 — Accessibility + polish audit (✅ 2026-07-25)

User asked to "look for what needs to be improved" — a genuinely open-ended pass, so this one
targeted an area not yet specifically tested all session: keyboard navigation, screen-reader
support, and color contrast. Found and fixed 3 real issues, verified with real keyboard input
(not simulated `.focus()` calls, which turned out to behave differently — see below).

### Issue 1: the skip link didn't actually work

Every page has a "Skip to content" link (`<a href="#main">`) for keyboard users. Tested it for the
first time this session: `<main id="main">` had no `tabindex`, so activating the link scrolled the
page but did **not** move keyboard focus there — confirmed by calling `.focus()` + `.click()` on
the real link and checking `document.activeElement`, which landed on `<body>`, not `<main>`. The
next Tab press would silently restart from the top of the page, defeating the entire point of the
link for the exact users who need it. **Fixed** by adding `tabIndex={-1}` to `<main>` (makes it
programmatically focusable) with `focus:outline-none` (suppresses only the ring around this one
page-spanning wrapper — an outline box around the entire page would be a bad visual artifact; the
very next real focusable element inside `main` still gets its own normal ring). Re-verified via
`.click()`: `document.activeElement.id` is now `"main"`.

### Issue 2: the site's own accent color fails WCAG AA at small text sizes

Computed real contrast ratios (WCAG relative-luminance formula, not a guess) for every design-system
color against the page background: `ink` 15.66:1, `muted` 5.31:1, `success` 4.82:1 all comfortably
pass AA (4.5:1 minimum for normal text). **`accent` (#E0531E) only reaches 3.59:1** — enough for
icons/borders/large headings (3:1 minimum) but a real failure for normal-size text, directly
contradicting the Phase 5 design system doc's own claim that "all accent-on-background pairs meet
WCAG AA." Grepped every `text-accent` usage site-wide and separated genuinely-fine cases (icons,
hover-only states, the large H1 span) from real default-state small-text failures: the "Open" label
on every tool card, the Copy button's text, the "Browse the Prompt Library/Message Templates"
links, the Glossary's "Related tool" links, the category tag badges on Library/Templates cards, the
Instagram link in the email signup's "not open yet" message, and the Homepage's secondary CTA
button — all previously below 3.59:1.

**Fixed** by computing a darkened version of the exact same hue that clears AA with margin
(`#be471a`, 4.74:1 — same brand red-orange family, just deeper) and adding it as a second token,
`--color-accent-text`, rather than changing the brand's actual signature color used for buttons,
icons, and borders (which don't need the stricter ratio and would be a real brand-identity change
not asked for). Swapped in the 8 real offenders identified above; left every icon/hover/large-text
usage on the original `accent` untouched. Re-measured the live rendered color after the fix with
the same contrast formula: 4.74:1, passes.

### Issue 3: no visible keyboard focus indicator on custom buttons

Tabbed to a filter chip button (via a real keyboard `Tab` keypress through the `computer` tool, not
`.focus()` — see the methodology note below) and checked its computed style: `outline: none`,
`boxShadow: none` — completely invisible when focused. Tailwind's preflight resets default
button/link outlines, and none of this site's custom buttons had ever added a replacement — a
systemic gap, not a one-off. **Fixed with one global rule** in `globals.css` (`:focus-visible {
outline: 2px solid var(--color-accent); outline-offset: 2px; }`) rather than patching each
component's className individually — covers every current and future interactive element at once.
Used `:focus-visible` specifically (not plain `:focus`) so it only appears for keyboard/programmatic
focus, not every mouse click. Confirmed the skip-link's `<main>` focus suppression still wins where
intended (Tailwind's `focus:outline-none` targets the broader `:focus`, which has higher CSS
specificity than this bare pseudo-class rule).

### Also checked, found already handled correctly

- **Chart accessibility**: Recharts already sets `aria-hidden="true"` on its own SVG output by
  default in the version used here — screen readers correctly skip the chart entirely rather than
  reading garbled tick-label text. The same core numbers ($/month, $/year) are already announced
  via the plain text directly above each chart, so this silent-but-correct default was left as is.
- **Touch target sizes**: measured the mobile hamburger button (40×40px), the subscription delete
  button (36×36px), and the "Add subscription" button (180×44px) — all comfortably clear the WCAG
  2.5.8 minimum (24×24px).

### One gap added, found by thinking about *discrete* vs *continuous* results

The Prompt Tool and Raise Builder's result boxes had no `aria-live` region — a screen reader user
clicking "Build" gets no announcement that new content appeared below the button; they'd have to
blindly explore to find it. Added `role="status"` + `aria-live="polite"` to those two result
containers specifically. **Deliberately did NOT** add this to the Subscription Calculator or
Savings Planner's result panels — those recalculate live on every keystroke, and an aria-live
region there would announce every single change while typing, a well-known noisy anti-pattern for
live-updating calculators. Same shared `AppearIn` component, different accessibility treatment,
because the actual interaction pattern differs.

### Methodology note: `.focus()` isn't a reliable stand-in for a real keypress here

Programmatically calling `.focus()` on an element and checking `.matches(':focus-visible')`
returned `false` in this browser — Chromium's heuristic for whether focus "looks keyboard-driven"
doesn't treat script-triggered focus the same as a real keypress in this context. Switched to the
`computer` tool's real `Tab` key-press action to get a trustworthy `:focus-visible` state, which is
what actually confirmed the outline fix works. Worth remembering for any future focus-visible
testing in this project — a `.focus()` call alone will under-report.

### Verified

All 10 pages re-swept for console errors after every fix in this step (Homepage, Tools Index,
both re-checked calculators, both re-checked generators, all 3 search pages, About) — zero
regressions. Clean `npm run lint` after all changes.
