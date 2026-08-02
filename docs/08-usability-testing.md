# Phase 8 — Usability Testing
### The Leverage Report — Web App

> **Usability testing** means watching a real person try to complete real tasks on the live
> site, unguided, and recording exactly where they hesitate, misclick, retype, or succeed —
> instead of guessing. It is the only phase of this project that tests the site against someone
> other than the person who built it.

**Status:** 🚧 IN PROGRESS — Round 1 done. 3 of 5 planned tasks covered. Round 2 needed for the
remaining 2 tasks, and ideally with narrated audio.
**Date:** 2026-08-02

## Method

- **Live site tested:** https://leverage-report-website.vercel.app
- **Format:** unguided screen recordings, no interviewer present, no help given mid-task.
- **Tester location:** India (the site's real target audience is Western/USD-based — see
  `02-research.md`). This round intentionally covers structural/flow usability, which is
  audience-independent. A later round with Western testers is planned separately to catch
  language/currency/cultural friction, which India-based testers cannot surface.
- **Analysis tool:** `teardown` (local frame-extraction + transcription tool) run against both
  recordings, then every contact-sheet frame reviewed manually against the 5-task script below.

## The 5-task script (planned)

1. Find and use a tool to check money wasted on subscriptions.
2. Find a ready-to-use prompt for a LinkedIn post.
3. Use the tool to draft an ask-for-a-raise message.
4. Look up an unfamiliar AI term in the Glossary.
5. Sign up for the weekly email.

**Coverage this round:** Tasks 1 and 3 fully attempted. Task 2 partially attempted (browsed
the Prompt Library, did not land on a LinkedIn-specific prompt). Tasks 4 and 5 not attempted —
see Gaps below.

## Findings

### Recording 1 — `Screen_Recording_20260802_193707_Chrome.mp4` (88s)

| Time | Observed | Verdict |
|---|---|---|
| 0:00–0:21 | Homepage → AI Prompt Tool, found via "Try the prompt tool" | ✅ Discoverable |
| 0:21–0:39 | Typing the task prompt: `H` → `Hello ke bui` → `Hello ke keep` → `Hello me build a pro` → final text, ~18s of repeated retyping | ⚠️ Friction (F1) |
| 0:39–0:45 | Tone dropdown opened and selected without hesitation | ✅ Clear |
| 0:45–0:50 | "Build my prompt" → real output generated → Copy → "Copied!" confirmed | ✅ Task complete |
| 0:51–1:07 | Subscription-Leak Calculator: types into the **$ price field before the Name field** on the first row, then goes back to fill Name | ⚠️ Friction (F2) |
| 1:07–1:19 | Second row added (Hotstar, $2); running total ($27/mo) and "priciest one" insight updated correctly | ✅ Logic correct |
| 1:19–1:28 | Multiple browser tabs open concurrently, each showing the tool at a different fill-state (no data synced between tabs) | ℹ️ Observation (O1) |

### Recording 2 — `Screen_Recording_20260802_194417_Chrome.mp4` (104s)

| Time | Observed | Verdict |
|---|---|---|
| 0:00–0:07 | Homepage → All Tools → Raise & Negotiation Builder | ✅ Discoverable |
| 0:07–0:37 | Filling the form: role, "what are you asking for," detail field — same retype/backspace pattern as Recording 1 (`200` → `2008` → `200$`) | ⚠️ Friction (F1, repeat) |
| 0:37–1:29 | Tone selected, "Build my script" → full script generated, **the "read this out loud before sending" disclaimer is visible on screen**, Copy → "Copied!" confirmed | ✅ Task complete; disclaimer is a strong trust-building detail worth keeping |
| 1:29–1:44 | Prompt Library: All/Career/Money/Freelance filter chips used correctly, cards scanned and scrolled | ✅ Filtering works — but no LinkedIn-specific prompt was found/used |

## Findings summary (carried forward to fix later — not fixed yet)

- **F1 — Repeated retype/backspace cycles on nearly every text input, in both recordings
  independently.** Could be phone keyboard autocorrect, small touch targets, or a
  placeholder-vs-real-text clarity issue. **Unconfirmed** — no audio was captured in either
  recording (Whisper found no speech), so there is no narration to tell "confused" apart from
  "just a slow typer." Needs a narrated re-test before this is actionable as a real bug.
- **F2 — Subscription-Leak Calculator: tester's first input landed in the price ($) field
  before the Name field.** This is a concrete, checkable UI issue — worth checking whether the
  row's tap/click target autofocuses the wrong input on mobile. Real, not just a typing quirk,
  because it showed a consistent order (price first, then back to name), not random fumbling.
- **O1 — Multiple tabs, independent state, nothing persisted or synced between them.** Not a
  bug — this matches the site's own "Free, no login" design pillar (`05-design-system.md` /
  homepage trust row). Worth stating explicitly in the case study as an intentional tradeoff,
  since a recruiter could reasonably ask "what if a user opens two tabs?"

## What worked (don't lose this under the friction notes)

Both tools tested went **fully green end-to-end**: found from the homepage without hesitation,
form filled, correct output generated, Copy button used and confirmed. Zero dead links, zero
back-button loops, zero rage-clicking, zero wrong-page navigation in either recording. The
Information Architecture (Phase 3) and the tool logic itself are validated by this round.

## Gaps — what Round 2 needs to cover

1. **AI Terms Glossary** — task 4, not attempted.
2. **Email signup** — task 5, not attempted.
3. **Narrated audio** ("think-aloud") on all tasks, to turn F1 from a suspicion into a
   confirmed finding or rule it out.
4. **A Western-tester round**, separate from this one, to catch language/currency/cultural
   friction that India-based testers structurally cannot surface (see Method above).

No code changes have been made as a result of this round — fixes are intentionally deferred
until the picture is complete (Round 2) so nothing gets fixed twice or fixed on a wrong guess.

## Round 2 — Heuristic walkthrough (Glossary + Email signup)

**Date:** 2026-08-02
**Method:** Not real-user testing — recruiting more testers wasn't practical right now. This
is a **heuristic evaluation**: a named, legitimate UX method distinct from user testing, where
someone with UX knowledge walks through the interface themselves against a known checklist
(Nielsen's usability heuristics — visibility of system state, error prevention, match with
real-world expectations, etc.), rather than watching a real user. It's a different method and
is labelled as such everywhere it's referenced — it does not stand in for the two Round-2 tasks
still owed to real-user testing.
**How it was done:** live site interaction via browser automation (real clicks/typing against
`https://leverage-report-website.vercel.app`, not a code read-through), covering search,
filtering, empty states, and form validation on both pages.

### AI Terms Glossary (`/glossary`)

| Check | Result |
|---|---|
| Content loads correctly, 16 terms, alphabetically ordered | ✅ Pass |
| Search filters live as you type (tested "token" → correctly narrows to 1 term) | ✅ Pass |
| No-match state (tested "tokenxyzabc") | ✅ Pass — clear message, quotes the actual search term back, suggests trying a different search. This is a well-designed empty state, not a blank page or silent failure. |
| Cross-links from term definitions to relevant tools (e.g. "Prompt" → Try the AI Prompt Tool) | ✅ Pass — good internal linking, keeps a reader moving instead of dead-ending |

**No issues found.** This page is simple by design (search + list) and it holds up.

### Email signup (footer, present on every page)

| Check | Result |
|---|---|
| Real `<label>` associated with the input (not just a placeholder pretending to be one) | ✅ Pass — accessibility-correct |
| Invalid email (typed "notanemail", clicked Join) | ✅ Pass — browser-native `type="email"` validation blocked submission client-side; confirmed via network log that **no request was even sent to the server**, so the API never saw the bad input. Correct, efficient error prevention (Nielsen heuristic #5). |
| Empty field submission | Not fully isolated in this pass — same native validation applies given the field is a required `type="email"` input; treated as covered by the above, not separately re-verified. |
| Real successful submission → server response | Not re-tested here. **Already verified in an earlier session** (see PROGRESS LOG, 2026-07-26): a direct POST to `/api/subscribe` on production returned a clean `200 {"ok":true}`, confirming the MailerLite integration works end-to-end. Not repeated now to avoid creating a duplicate/junk test subscriber on a live mailing list for no new information. |

**No issues found.**

### What this round does and doesn't cover

This closes the two pages that had zero coverage before. It does **not** replace the two real
gaps from Round 1: no narrated real-user session exists for these pages (so subtler confusion —
e.g. "did the user understand what they were subscribing to" — can't be ruled out the way a
mechanical pass can), and no Western tester has used any part of the site yet. Both remain
honestly open if asked in an interview: *"the interactive tools got real unguided user testing;
the simpler content pages got an expert heuristic review instead, because a second full user
round wasn't feasible in this timeframe."*
