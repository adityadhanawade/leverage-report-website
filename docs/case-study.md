# Case Study — The Leverage Report

**A free AI-money toolkit, designed and built solo from brief to production.**

Live site: https://theleveragereport.me
Source code: https://github.com/adityadhanawade/leverage-report-website
Design file (Figma): https://www.figma.com/design/nLgaNdrpRv8b15FU8PwEzc

This case study covers the full process — UX research and design (Figma) through to a
deployed, production-grade Next.js application — for **The Leverage Report**, the website
companion to an existing Instagram page (@the.leverage.report) about using AI to make, save,
and grow money.

---

## 1. Problem

The brand already had an audience: an Instagram page posting short-form videos about AI and
money to a Western (US/UK/CA/AU) audience. But Instagram has a structural weakness for this
kind of content — a tip is genuinely useful for the ~15 seconds it's on screen, then it
disappears into an unsearchable feed. A follower who wants to actually *use* a tip they saw
last week has no way to find it again.

At the same time, the existing "AI + money" content online skews in one of two unhelpful
directions: generic prompt-list sites with no niche or quality bar, or personal-finance blogs
cluttered with ads and upsells. Neither is built to be *used* — both are built to be scrolled
past or monetized against the visitor.

**The gap:** there was no simple, honest, free place that turned "AI can help your money" into
a tool a visitor could actually use in under two minutes, with no signup wall and no catch
hidden in the fine print.

## 2. Research

Two proto-personas were built from the brand's real Instagram audience data (Western,
everyday people interested in improving their money situation), not from primary user
interviews — a standard, disclosed limitation for a solo v1 project:

- **Emma (28, UK)** — money "leaks away" each month, has tried ChatGPT but doesn't know how to
  prompt it well, wants something usable in under two minutes with no signup.
- **Ryan (22, US)** — student freelancer, needs to sound professional in client outreach and
  understand AI terminology without feeling behind.

A competitor scan of generic prompt-list sites, personal-finance blogs, and AI-influencer link
pages surfaced the same pattern in every category: something was traded away — quality,
cleanliness, or honesty — in exchange for reach or monetization. That became the design
mandate: **a clean, honest, free site with real working tools, stated limitations, and no ads
or upsells.** Every later decision (four working calculators over a content-only blog, an
explicit "the catch" note on every tool, zero paywalls) traces back to that gap.

## 3. Design decisions & why

**Scope — four tools, not a content blog.** The brief locked eight deliverables: four
interactive tools (AI Prompt Tool, Subscription-Leak Calculator, Savings Goal Planner,
Raise & Negotiation Builder), two copy-and-use libraries (Prompt Library, Message Templates),
an AI Terms Glossary, and an email signup. Every deliverable had to produce a concrete result a
visitor could walk away with, not just read.

**Visual identity — same brand, different medium.** The site reuses the Instagram brand's
locked accent color (`#E0531E`, hot red-orange) so a follower instantly recognizes the site as
the same brand — but deliberately drops the Reels' dark, textured, scroll-stopping look for a
light, clean, spacious theme. A 30-second video needs to interrupt a scroll; a website visitor
has already arrived and wants to get something done fast. Typography follows the same logic:
Sora (headings) and Inter (body) replace the Reels' Archivo Black + Caveat, because long-form UI
text needs a font built for screen legibility, not video impact.

**Honesty as a design constraint, not just a value.** This shows up concretely, not just as
brand copy: the AI Prompt Tool runs entirely in-browser on hand-written templates (zero paid
API, zero cost, zero "we sold your prompt" risk) and every tool carries a visible "the catch"
note stating what it can't do. The Subscription Calculator's original mockup copy implied real
bank-usage detection the tool doesn't have — caught during development and rewritten to make an
honest claim instead (see §4).

**Process artifacts (fully built in Figma, not just specced):** 14 wireframe screens
(8 mobile + 6 desktop), a 7-color / 6-text-style design system with a written motion spec, 14
high-fidelity mockup screens, and a 53-connection clickable prototype covering two independent
mobile and desktop click-through flows.

## 4. Building it — process highlights

The coded build (Next.js 16 / React 19 / TypeScript / Tailwind v4 / Framer Motion / Recharts)
followed the Figma spec where one existed, and was designed directly against the Project
Brief's locked spec where it didn't (the Savings Planner and Raise Builder were never
wireframed — flagged honestly to the stakeholder before building, rather than silently
inventing a design history).

A few decisions worth calling out specifically:

- **The Prompt Tool's honesty vs. the AI Prompt Tool's actual job.** The AI Prompt Tool
  generates a *prompt for an AI*; the Raise Builder generates the actual message a person sends.
  Conflating those would have made the Raise Builder's output read like a meta-instruction
  instead of a usable script — so `raiseBuilder.ts` builds real sentences directly, with
  branching copy per ask-type (a "flexible work" request correctly omits the raise-specific
  "asking for $X" line that a raise/promotion request includes).
- **A deliberate departure from the mockup's literal copy.** The Subscription Calculator's
  Figma mockup text said "these look unused — consider cutting," implying real bank-connected
  usage detection the tool doesn't have. Shipping that copy as-is would have quietly broken the
  brand's own honesty promise. It was rewritten to surface the *priciest* subscription with a
  neutral "do you still use it?" nudge — same usefulness, no false claim.
- **A real bug-hunt pass, not just feature checks.** Beyond building each feature, a dedicated
  QA pass ran a 20-input regression battery against the Prompt Tool's intent-matching, found and
  fixed a genuine text-overflow bug (a 300-character subscription name could break the whole
  page grid), and re-tested the same overflow pattern across three other search pages that
  turned out to share the same root cause.
- **Accessibility as its own audit, not an afterthought.** A skip-link that scrolled but never
  moved keyboard focus, a brand accent color that failed WCAG AA at small text sizes (despite
  the design-system doc's own claim that it passed), and completely invisible keyboard focus
  rings site-wide were all found by testing with a keyboard and computed contrast ratios — not
  by eye — and fixed with a second accent token (`--color-accent-text`) and one global
  `:focus-visible` rule rather than patched screen-by-screen.
- **The email signup, built server-side.** The footer form was intentionally shipped honest and
  non-functional through most of development ("signups aren't open yet," true, not faked) until
  MailerLite was wired up as the last locked deliverable: a server-only Next.js API route holds
  the API key (never shipped to the browser, never committed to git), validates input, and
  forwards to MailerLite — verified with a real end-to-end request against the live production
  deployment, not just local dev.

## 5. Result

**The site is live and fully verified in production:** https://leverage-report-website.vercel.app

- All 8 originally locked deliverables shipped and functional.
- Clean TypeScript, clean lint, clean production build across all 10 pages.
- Every tool's core logic driven and hand-verified with real inputs (not just visually
  inspected) — including exact-math checks on both calculators.
- A dedicated accessibility pass (keyboard navigation, screen-reader landmarks, WCAG AA
  contrast) and a dedicated security pass (XSS probes through every text input) both came back
  clean.
- Deployed to Vercel's free tier from a public GitHub repo, with environment variables kept out
  of version control throughout.

**What this project demonstrates:** the full UI/UX process end to end (proto-personas →
competitor analysis → IA → wireframes → design system → mockups → clickable prototype) *and*
production engineering discipline (typed, linted, tested, accessible, deployed) — on the same
project, built and shipped solo.

## 6. Usability testing

Two rounds, two different methods, chosen deliberately rather than treated as interchangeable:

- **Round 1 — real unguided user testing.** A tester was given 5 realistic tasks (e.g. "find
  out if you're wasting money on subscriptions") with no guidance and no help mid-task, screen
  recorded, then analysed frame-by-frame. Three of the five interactive tools were covered this
  way. Result: every tested tool succeeded end-to-end — found from the homepage, filled in,
  correct output produced, no dead links or wrong navigation — which validated both the
  information architecture (Phase 3) and the tool logic itself. It also surfaced two real
  findings: the Subscription-Leak Calculator's first input could land in the price field before
  the name field — **since fixed** (see below) — and a repeated retype/backspace pattern on
  text inputs that's flagged but not yet confirmed as a real issue (no audio was captured, so
  it can't yet be told apart from ordinary phone-typing friction).
- **Round 2 — heuristic evaluation.** The two pages Round 1 didn't reach (the AI Terms Glossary
  and the email signup) were walked through directly against Nielsen's usability heuristics
  instead of with a live tester, since a second real-user round wasn't feasible in the
  timeframe. This is a different, named method, not a substitute dressed up as user testing —
  the case study is explicit about which pages got which treatment. No issues found: search/
  filter/empty-states all behave correctly, and the signup form has a real label plus
  client-side validation that blocks bad input before it reaches the server.

**The subscription-field finding, fixed:** root-caused by direct measurement rather than a
guess — on a real 375px mobile viewport, the Name input rendered at just 55px wide (its own
placeholder didn't even fit), squeezed by four fixed-width siblings sharing one flex row, which
is exactly why a tester's first tap landed on the Price field instead. Fix forces the Name field
onto its own full-width line below the `md` breakpoint only; desktop, which was never broken,
is untouched. Verified by DOM measurement before and after at both breakpoints (mobile: 55px →
301.6px; desktop: unchanged at 309.6px) rather than eyeballed.

Full write-up, including a timestamped findings log: `docs/08-usability-testing.md`.

**What's honestly still open:** the retype-pattern finding from Round 1 is unconfirmed, no
narrated session exists for the two heuristically-reviewed pages, and — notably, given the
site's audience is Western/USD-based while testing was done with an India-based tester — no
Western user has tested the site yet. That gap is named explicitly rather than papered over.

## 7. What's next

The main open item is closing that last gap: real feedback from a Western tester, ideally once
the site gets organic traffic from the Instagram audience it was built for. Of the two Round-1
findings, the subscription calculator's field-order issue is fixed; the input-retyping pattern
is logged and ready to act on but intentionally not yet fixed, so nothing gets patched twice on an
incomplete picture.
