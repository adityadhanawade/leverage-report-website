# Phase 7 — Prototype
### The Leverage Report — Web App

> A **prototype** makes static screens *clickable* — buttons and links actually jump to the
> right screen, so anyone (a recruiter, a friend, you) can click through the site as if it were
> real, entirely inside Figma, before a single line of code is written. This is what a "click
> through my design" portfolio moment looks like.

**Status:** ✅ BUILT — 53 click connections wired: 22 across the 8 mobile screens, 31 across
the 7 desktop screens (Home + the 6 newly-built desktop versions), fully separated by breakpoint
so no click ever jumps between a phone-sized and desktop-sized frame.
**🔗 Live Figma file:** https://www.figma.com/design/nLgaNdrpRv8b15FU8PwEzc (page: "Mockups")
**Date:** 2026-07-25

## How to try it
In Figma, open the "Mockups" page. Two separate, fully self-contained flows exist:
- Select **Home — Mobile** and hit **▶ Present** for the phone click-through.
- Select **Home — Desktop** and hit **▶ Present** for the desktop click-through.
Both flows have their own "▶ Start" chip (flow starting point) in the Figma UI. Every button
stays within its own breakpoint — clicking never jumps between a phone-sized and desktop-sized
frame.

## Connection map (22 links, following the Phase 3 user flows)

**Home (Mobile) →**
- "Explore tools" button → Tools Index
- "Prompt tool" button → AI Prompt Tool
- AI Prompt Tool card → AI Prompt Tool
- Subscription Calculator card → Subscription Calculator
- "Prompt Library" link → Prompt Library
- "Glossary" link → Glossary

**Tools Index →** nav logo → Home · AI Prompt Tool card → AI Prompt Tool ·
Subscription Calculator card → Subscription Calculator

**AI Prompt Tool →** nav logo → Home · "Related → Browse the Prompt Library" → Prompt Library

**Subscription Calculator / Prompt Library / Glossary / About →** nav logo → Home
(consistent "always one click back to Home" rule, per Phase 3 IA principle #2: every tool
reachable in ≤2 clicks)

**Home (Desktop) →** now fully wired to the 6 real desktop screens (nav links, hero buttons,
tool cards) — see "Desktop update" below.

## Desktop update (built after the user asked for the site to work on both phone and desktop)
Originally Home Desktop was the only desktop-sized screen, so its links were unlinked entirely
(clicking anything would have snapped Presenter mode down to a tiny 375px frame — a real bug
the user caught). **Fix: built full desktop (1440px) versions of all 6 remaining screens**
(Tools Index, AI Prompt Tool, Subscription Calculator, Prompt Library, Glossary, About) with
layouts adapted per screen (e.g. Subscription Calculator uses a two-column input+result layout
on desktop vs. stacked on mobile, per the original Phase 4 wireframe spec), then re-wired 31
connections so the desktop flow is fully self-contained — same breakpoint in, same breakpoint
out, always. Two self-caught bugs during this build are logged in
`docs/_figma-build-lessons.md` (rules #10-11): a nested-wrapper height-clipping bug (same root
cause as rule #7, one level deeper in the hierarchy) and a paragraph text overflow from a
missing `textAutoResize` setting.

## Known gaps (honest, not silently hidden)
- **Savings Planner and Raise Builder tool cards are NOT clickable** — those two screens were
  never built as high-fidelity mockups (only wireframed in Phase 4), so there's no real
  destination to link to yet. Left unlinked rather than faked with a dead/wrong link.
- **The "Templates" nav item and Message Templates page** don't have a built mockup yet either
  — same reasoning, left unlinked.
- **External links (Instagram, email submit) are not part of the prototype** — those leave the
  site/trigger a real action, out of scope for an in-Figma click-through.
- These gaps map directly to the Phase 6 "Round 2" scope note and are natural candidates if the
  mockup set is ever extended past the current 8 screens.

## Technical note (for the case study)
Built via the Figma Plugin API's `Reaction` model — each interactive node gets
`setReactionsAsync([{ trigger: { type: "ON_CLICK" }, actions: [{ type: "NODE", destinationId,
navigation: "NAVIGATE" }] }])`. Two **flow starting points** were set (one for the mobile entry,
one for desktop) so Presenter mode has defined "▶ Play" entry chips for both breakpoints.
