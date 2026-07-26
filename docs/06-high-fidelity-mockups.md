# Phase 6 — High-Fidelity Mockups
### The Leverage Report — Web App

> **High-fidelity mockups** take the Phase 4 grey-box wireframes and apply the Phase 5 design
> system — real colors, real fonts, real spacing — so they look exactly like the finished
> product, before any code is written. This is the "final look" a client/recruiter sees.

**Status:** ✅ ALL 14 SCREEN VARIANTS BUILT — all 8 screens at mobile width, PLUS desktop
versions of all 6 that were mobile-only (Tools Index, AI Prompt Tool, Subscription Calculator,
Prompt Library, Glossary, About) — Home already had both from Round 2. The site is now fully
responsive in Figma: every screen has both a phone and a desktop version.
**🔗 Live Figma file:** https://www.figma.com/design/nLgaNdrpRv8b15FU8PwEzc (page: "Mockups")
**Date:** 2026-07-25

## Bugs found + fixed during this build (part of the honest process record)
1. **Secondary-links text overlap** — the "Prompt Library / Glossary" row had `paddingBottom`
   mistakenly set to 32px on a frame only 30-36px tall, driving the padding math negative and
   pushing the text 6-9px above its own container (visually looked like a strikethrough).
   Found via `get_metadata` bounding-box inspection (not eyeballing), fixed by zeroing the
   padding and using a properly sized, centered container instead.
2. **Emoji rendering** — the 🤖 robot emoji renders as an unrelated glyph in Figma's server-side
   render. Known platform limitation, not fixable via code. **Recommendation for Phase 9:**
   use real icon vectors (e.g. an icon set) in the coded site instead of relying on emoji glyphs
   — more reliable across browsers/OSes anyway, not just a Figma quirk.
3. **Default-white wrapper frames (user-caught)** — `figma.createAutoLayout()` defaults to a
   white fill unless overridden. Colors were explicitly set on real UI elements (cards, buttons,
   inputs) but NOT on 12 purely-structural wrapper frames (Hero, button rows, the Tool Cards
   grid + its 2 row frames, the trust strip, secondary-links row, both tool-page body wrappers,
   both title rows, the copy-button wrapper). Most visible case: the email-signup row on the
   dark footer showed a white sliver in the gap between the input and the Join button — user
   spotted this first. Audited all 3 built screens programmatically (`findAll` for FRAME nodes
   with a solid white fill, cross-checked against which were *intentional* white cards vs
   accidental wrappers) rather than fixing just the one reported spot, and cleared all 12 to
   transparent in one pass. **Process lesson: when a user reports one instance of a color/fill
   bug, audit the whole build for the same root cause instead of patching only the reported
   spot** — this class of bug (unset property silently taking a non-obvious default) tends to
   repeat everywhere the same code pattern was used.

## Scope — Round 1 (this pass)
Per the build-order priority already agreed in `PROJECT.md` §7, mocking up the **launchable
core** first: **Home (Mobile) · AI Prompt Tool · Subscription Calculator**. The remaining 5
screens (Home Desktop, Tools Index, Prompt Library, Glossary, About) follow in Round 2 once
this direction is confirmed — same reasoning as building wireframes in stages, applied here.

## What "high-fidelity" adds over the wireframe
| Wireframe (Phase 4) | Mockup (Phase 6) |
|---|---|
| Grey labeled box | Real card: white bg, border, shadow-free flat style |
| "HERO — headline..." label | Actual headline text in Sora Bold, real copy |
| Plain button outline | Filled `color/accent` button with white Inter text |
| No color | Full palette from Phase 5 applied throughout |

## Design tokens used (from Phase 5, bound where practical)
`color/accent` `#E0531E` · `color/background` `#FBF6E9` · `color/surface` `#FFFFFF` ·
`color/ink` `#211C16` · `color/muted` `#6E6558` · `color/border` `#E5DFD1` ·
text styles H1/H2/H3/Body/Small/Caption (Sora + Inter, per Phase 5).
