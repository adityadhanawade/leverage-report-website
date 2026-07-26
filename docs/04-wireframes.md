# Phase 4 — Wireframes (Low-Fidelity)
### The Leverage Report — Web App

> **Wireframes** are plain grey-box sketches of each screen. **No colours, no fonts, no
> images, no animation** — on purpose. They answer ONE question: *where does everything go?*
> We lock layout first, then add looks (Phase 5) and motion (Phase 9). Building layout before
> style is exactly how professionals work — and "why did you wireframe first?" is a great
> interview answer. These are text/ASCII sketches you'll rebuild in **Figma**. Portfolio artifact.

**Status:** ✅ BUILT — all 8 screens at mobile width, PLUS desktop (1440px) wireframes for the
6 that were mobile-only (Tools Index, AI Prompt Tool, Subscription Calculator, Prompt Library,
Glossary, About — Home already had both). 14 wireframe screens total, matching full coverage
in Phase 6. Added retroactively after the Phase 6/7 mockup+prototype work revealed the gap —
see the note at the bottom of this doc for why that order happened and what was checked.
**🔗 Live Figma file:** https://www.figma.com/design/nLgaNdrpRv8b15FU8PwEzc
**Date:** 2026-07-25

> This markdown file is the **plan/spec**. The **real deliverable is the Figma file above** —
> built node-by-node via the Figma MCP connector, fully editable, on the user's own Student
> plan account. This is what gets linked in the portfolio/case study, not this text file.
**Approach:** **Mobile-first** (most traffic = Instagram = phones). Desktop adapts by widening
and placing boxes side-by-side.

**How to read these sketches:**
```
[ Button ]      = a clickable button
______          = a text input / typing box
+-----+         = a box / card / container
▓▓▓▓            = an image or icon placeholder (grey)
( • • • )       = a chart placeholder
```
**Pro tip for Figma:** use an **8-point grid** (all spacing in multiples of 8px) — it's a simple
trick that instantly makes a design look professional and consistent.

---

## GLOBAL — Navigation bar (top of every page)

**Mobile**
```
+------------------------------------------+
|  LEVERAGE REPORT ▓            [ ☰ menu ]  |
+------------------------------------------+
```
**Desktop**
```
+--------------------------------------------------------------+
|  LEVERAGE REPORT ▓      Tools   Library   Templates   Glossary |
+--------------------------------------------------------------+
```
- Logo (left) always links Home. On mobile the links collapse into a ☰ menu.

## GLOBAL — Footer (bottom of every page)
```
+------------------------------------------+
|  ✉️  Get one tested money tip a week      |
|  __________________________  [ Join ]     |
|                                          |
|  Tools · Library · Templates · Glossary  |
|  Follow on Instagram → @the.leverage...  |
|  The Leverage Report · no fluff, honest  |
+------------------------------------------+
```
- The email signup lives here so it's on every page but never in the way.

---

## SCREEN 1 — Home (the launchpad)

**Mobile**
```
+------------------------------------------+
|  [ nav bar ]                             |
+------------------------------------------+
|                                          |
|   Make your money work —                 |   <- HERO headline (one honest line)
|   with AI, no fluff.                      |
|                                          |
|   Free tools to save, earn & grow.       |   <- sub-line
|                                          |
|   [ Explore the tools ]  [ Prompt tool ] |   <- 2 CTA buttons
+------------------------------------------+
|   WHAT YOU'LL FIND                        |
|  +-------------+  +-------------+          |
|  | 🤖 Prompt   |  | 💸 Sub.     |          |   <- tool cards (tap to open)
|  | Tool        |  | Calculator  |          |
|  | one line →  |  | one line →  |          |
|  +-------------+  +-------------+          |
|  +-------------+  +-------------+          |
|  | 🎯 Savings  |  | 💬 Raise    |          |
|  | Planner     |  | Builder     |          |
|  +-------------+  +-------------+          |
+------------------------------------------+
|   WHY TRUST THIS                          |
|   ✓ Free   ✓ Honest   ✓ Tested            |   <- trust strip
+------------------------------------------+
|   📋 Prompt Library   📖 Glossary          |   <- secondary links
+------------------------------------------+
|  [ footer w/ email signup ]              |
+------------------------------------------+
```
**Desktop:** hero centered wider; the 4 tool cards sit in a single row of 4.

---

## SCREEN 2 — Tools index (/tools)
```
+------------------------------------------+
|  [ nav ]                                 |
|  All Tools                                |
|  Pick a tool. Each does one job, fast.    |
|                                          |
|  +------------------------------------+  |
|  | 🤖 AI Prompt Tool                   |  |
|  | Turn a rough idea into a great      |  |
|  | prompt.                    [ Open ] |  |
|  +------------------------------------+  |
|  | 💸 Subscription Calculator          |  |
|  | See what you waste per year.[ Open]|  |
|  +------------------------------------+  |
|  | 🎯 Savings Planner        [ Open ] |  |
|  +------------------------------------+  |
|  | 💬 Raise Builder          [ Open ] |  |
|  +------------------------------------+  |
|  [ footer ]                              |
+------------------------------------------+
```

---

## SCREEN 3 — AI Prompt Tool (⭐ the star; template for all tool pages)
```
+------------------------------------------+
|  [ nav ]                                 |
|  🤖 AI Prompt Tool                        |
|  Describe your task → get a great prompt. |
|                                          |
|  What do you need help with?              |
|  +------------------------------------+  |
|  |  e.g. "help me ask for a raise"    |  |   <- big typing box (textarea)
|  |                                    |  |
|  +------------------------------------+  |
|  Tone:  [ Confident  ▼ ]                  |   <- dropdown
|                                          |
|          [  Build my prompt  ]            |   <- main action button
|                                          |
|  ---- your prompt ----                    |   <- (appears after click)
|  +------------------------------------+  |
|  |  Act as a salary expert. I'm a...  |  |   <- result box
|  +------------------------------------+  |
|          [ Copy ]   ✓ Copied!            |
|  ⓘ The catch: works best if you add       |   <- honesty note
|     your real details.                    |
|                                          |
|  Related → Browse the Prompt Library      |   <- no dead end
|  [ footer ]                              |
+------------------------------------------+
```

---

## SCREEN 4 — Subscription Calculator (input + live result)
```
+------------------------------------------+
|  [ nav ]                                 |
|  💸 Subscription-Leak Calculator          |
|  Add your subscriptions, see the damage.  |
|                                          |
|  YOUR SUBSCRIPTIONS                        |
|  +------------------------------------+  |
|  | Name______  $____ / [month ▼]  🗑️ |  |   <- one row
|  | Name______  $____ / [month ▼]  🗑️ |  |
|  +------------------------------------+  |
|          [ + Add subscription ]           |
|                                          |
|  ====== RESULT (updates live) ======      |
|   You spend  $ 54 / month                 |   <- big number (count-up later)
|   = $ 648 / year                          |
|                                          |
|   ( • • •  bar chart  • • • )             |   <- chart placeholder
|                                          |
|   💡 These look unused — consider cutting  |   <- honest suggestion
|  [ footer ]                              |
+------------------------------------------+
```
**Desktop:** inputs on the LEFT, result panel on the RIGHT (side by side). Mobile stacks them.

---

## SCREEN 5 — Prompt Library (search + copy)
```
+------------------------------------------+
|  [ nav ]                                 |
|  📋 Prompt Library                        |
|  🔍 ______________________                |   <- search box
|  [ All ][ Career ][ Money ][ Freelance ]  |   <- filter chips
|                                          |
|  +------------------------------------+  |
|  | Rewrite my resume        [Career]  |  |   <- prompt card
|  | Short desc...            [ Copy ]  |  |
|  +------------------------------------+  |
|  | Audit my bank statement  [Money]   |  |
|  |                          [ Copy ]  |  |
|  +------------------------------------+  |
|  ...more cards...                         |
|  [ footer ]                              |
+------------------------------------------+
```
> **Message Templates** page reuses this exact layout (cards + copy), just different content.

---

## SCREEN 6 — Glossary (learn + SEO)
```
+------------------------------------------+
|  [ nav ]                                 |
|  📖 AI Terms, Decoded                     |
|  🔍 ______________________                |
|                                          |
|  +------------------------------------+  |
|  | AI Agent                            |  |
|  | Plain-English definition...         |  |
|  | Related tool → Prompt Tool          |  |
|  +------------------------------------+  |
|  | Tokens                              |  |
|  | Plain-English definition...         |  |
|  +------------------------------------+  |
|  ...A–Z...                                |
|  [ footer ]                              |
+------------------------------------------+
```

---

## SCREEN 7 — About (short, anonymous)
```
+------------------------------------------+
|  [ nav ]                                 |
|  About The Leverage Report                |
|  We share honest, tested ways to use AI   |
|  for your money. No fluff. No upsells.    |
|  No sketchy tools. Everything here is free.|
|                                          |
|  [ Follow on Instagram ]                  |
|  [ footer ]                              |
+------------------------------------------+
```
(No names, no personal info — stays anonymous per the brief.)

---

## Layout principles used (for your case study)
1. **Mobile-first** — designed for phones (Instagram traffic), scaled up to desktop.
2. **One primary action per screen** — the biggest button is the main thing to do.
3. **Consistent nav + footer** everywhere (matches IA principle #4).
4. **No dead ends** — every tool ends with a "related" link or the email signup.
5. **8-pt spacing grid** — consistent, professional spacing.

---
### ✅ Phase 4 sign-off (2026-07-25)
All 8 screens approved as built in Figma. No changes requested.

---
## Note added 2026-07-25: desktop wireframes built out of order, on purpose
Originally only Home was wireframed at both mobile and desktop — the other 6 screens skipped a
desktop wireframe pass and went straight to desktop high-fidelity mockups in Phase 6 once the
mobile pattern was proven (fast iteration). The user noticed this gap after seeing full desktop
coverage in the mockups and chose to go back and build the missing desktop wireframes for
completeness — done here, all 6, grey-box style matching the originals, applying every rule in
`docs/_figma-build-lessons.md` (built clean, zero bugs, verified via `get_metadata` + screenshots
before calling it done). **Honest process note for the case study:** this reflects a real
iterative workflow — validate a pattern fast on one screen (Home), extend it directly to polish
once proven (Phase 6/7), then backfill the intermediate artifact for documentation completeness
once the full shape of the work was clear. That's a legitimate way real projects move, not a
mistake being covered up.
