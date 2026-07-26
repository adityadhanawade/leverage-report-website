# Phase 5 — Design System
### The Leverage Report — Web App

> A **Design System** is the reusable rulebook for how the site *looks and behaves*: exact
> colors, fonts, spacing, component styles, and — new this phase — the **motion spec**. Once
> locked, every later screen (Phase 6 mockups) just applies these rules instead of
> re-deciding them each time. This is what makes a site feel *consistent* instead of
> hand-assembled. Recruiters ask "did you build a design system?" — yes, and here it is.

**Status:** ✅ FINAL + BUILT — approved by user 2026-07-25, and built for real in Figma (color
variables + text styles), not just this spec doc.
**🔗 Live Figma file:** https://www.figma.com/design/nLgaNdrpRv8b15FU8PwEzc (see the
"Design System" page)
**Date:** 2026-07-25

> **One small correction made during the Figma build:** Sora doesn't ship a "Medium" weight
> (checked via Figma's font list — it has Regular/SemiBold/Bold/ExtraBold/Light/etc). H3/Card
> uses **Sora SemiBold** instead of the "Medium" originally written below — same visual intent
> (a step between H2 and Body), just the correct available weight name. Section 2's table
> reflects this.

---

## 1. Color Palette

**⚠️ Advisor recommendation: reuse your Instagram brand's locked accent color.**
Your Reels already use a locked hot red-orange (`#E0531E`) as the ONE signature accent
color (reserved for payoffs/CTAs). Reusing it on the website — as the site's ONE accent
color too — means someone who follows you on Instagram instantly recognizes the website as
*the same brand*. That consistency is worth more than picking a fresh color.

**⚠️ Advisor recommendation: light/clean theme, not the Reels' dark torn-craft background.**
Two different mediums, two different jobs: a 30s Reel needs a bold, textured, attention-grabbing
look to stop a scroll. A website visitor has already arrived and wants to **get something
done fast** — Phase 2's research concluded competitors look "cluttered, ad-heavy, dated" and
the gap we own is "clean, modern, uncluttered." A light, spacious UI wins here; the torn-craft
paper *texture* stays reel-only. The accent color is what ties them together, not the whole visual system.

| Role | Color | Hex | Use |
|---|---|---|---|
| **Brand accent** | Hot red-orange | `#E0531E` | Primary buttons, links, active states, highlights — used sparingly, like the reels |
| **Background** | Warm off-white | `#FBF6E9` | Page background (echoes the reels' cream, but flat/clean here, not photo-textured) |
| **Surface** | Pure white | `#FFFFFF` | Cards, input fields |
| **Ink (text)** | Near-black | `#211C16` | Body text, headings |
| **Muted text** | Warm gray | `#6E6558` | Secondary text, labels, hints |
| **Border** | Light warm gray | `#E5DFD1` | Card borders, dividers |
| **Success** | Green | `#3B7A3F` | Positive results (e.g. calculator savings) |

All accent-on-background pairs meet WCAG AA contrast (checked, per the standard your Reels
pipeline already holds itself to — check #23).

---

## 2. Typography

**⚠️ Advisor recommendation — different fonts than the Reels, on purpose.**
The Reels use Archivo Black + Caveat (handwritten) — great for bold video captions, **wrong**
for a web app: long-form UI text needs a font built for *screen reading at small sizes*, not
video impact. Recommendation:

| Role | Font | Why |
|---|---|---|
| **Headings** | **Sora** (Google Fonts, free) | Modern, geometric, confident — reads as "fintech/tech," strong at large sizes |
| **Body & UI text** | **Inter** (Google Fonts, free) | The industry-standard UI font — extremely legible at small sizes, huge language support, already used in the Figma wireframes so this is a smooth continuation |

**Type scale** (mobile-first, in px):
| Style | Size | Weight |
|---|---|---|
| H1 (hero headline) | 32 | Sora Bold |
| H2 (section title) | 24 | Sora Bold |
| H3 (card title) | 18 | Sora SemiBold |
| Body | 16 | Inter Regular |
| Small / label | 13 | Inter Regular |
| Caption / hint | 11 | Inter Regular |

---

## 3. Spacing & Layout
- **8-point grid** (confirmed from Phase 4): every margin/padding/gap is a multiple of 8px
  (8, 16, 24, 32, 48, 64…).
- **Corner radius:** 8px on buttons/inputs, 12px on cards — soft, modern, not sharp.
- **Max content width (desktop):** 1200px, centered, with side padding.

## 4. Core Components (style rules, applied everywhere)
| Component | Rule |
|---|---|
| **Primary button** | Filled `#E0531E`, white text, 8px radius, subtle scale-down on press |
| **Secondary button** | White bg, `#E0531E` border + text |
| **Card** | White bg, `#E5DFD1` border, 12px radius, no heavy shadow (flat, modern) |
| **Input field** | White bg, `#E5DFD1` border, `#E0531E` border on focus |
| **Tag/chip** | Rounded pill, light accent-tinted background |

---

## 5. Motion Spec (answers the "make it interactive" requirement from Phase 3)

> Principle from Phase 3: **purposeful motion only, stay fast, honor reduced-motion.**
> Built with **Framer Motion**. Every animation below has a *reason*, not decoration.

| Interaction | Motion | Why |
|---|---|---|
| Page/section enters view (scroll) | Fade + rise 12px, 400ms, ease-out | Guides attention without being flashy |
| Button hover | Scale 1.02, 150ms | Confirms it's clickable |
| Button press | Scale 0.97, 100ms | Tactile feedback |
| Calculator result number | **Count-up** animation, 600ms | Makes the "aha, that's how much I waste" moment land |
| Chart (bar/line) | Draws in from 0, 500ms, ease-out | Feels alive, not a static image |
| Prompt Tool result appears | Fade + rise, 350ms | Signals "your answer is ready" |
| Copy button clicked | Icon morphs to checkmark, 200ms, reverts after 1.5s | Clear, satisfying confirmation |
| Tool card hover | Border color shifts to accent, 150ms | Invites the click |

**Timing rule:** nothing longer than 600ms (Phase 2 takeaway #1 = speed to value; slow
animations fight that). **Accessibility:** every animation above is disabled/instant when the
visitor's OS has "reduce motion" turned on.

---

## 6. Accessibility notes
- All text/background pairs checked for WCAG AA contrast.
- Motion respects `prefers-reduced-motion`.
- Interactive elements have visible focus states (not just hover) — needed for keyboard users.

---
### ✅ Phase 5 sign-off (2026-07-25)
1. Reuse `#E0531E` accent — ✅ approved.
2. Light/clean theme — ✅ approved.
3. Sora (headings) + Inter (body) — ✅ approved.
