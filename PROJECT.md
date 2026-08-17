# The Leverage Report — Website Project

**Single source of truth for this project. Read this first when resuming in any new session.**

To resume in a new session, just say: **"Continue the Leverage Report website project — read PROJECT.md."**

---

## 1. What this is
A free, genuinely-useful website (a "Free AI-Money Toolkit") built under the brand
name **The Leverage Report** — the same name as the owner's Instagram page
**@the.leverage.report** (niche: AI-powered ways to make / save / grow money).

## 2. Goals
- **For the audience:** genuinely useful free tools (not a vanity page).
- **For the owner (3rd-year BTech CSE student):** a real portfolio piece to show recruiters —
  produces BOTH a **UI/UX design portfolio** (Figma work + case study) AND a
  **full-stack engineering portfolio** (real coded, deployed website).

## 3. Hard constraints (do not break these)
- **100% free.** Zero investment. Free hosting (Vercel/Netlify/GitHub Pages free tier),
  free/open-source stack, free-tier services only. No paid domain required (a free
  `*.vercel.app` subdomain is fine).
- **Legit tools only.** May reference mainstream legal tools (e.g. "paste into your AI
  assistant"); never anything illegal, pirated, or sketchy. Fits the brand's "no fluff,
  honest, only what actually works" positioning.
- **Ownership stays private.** The public site is anonymous under the brand name — no
  personal name/info on it. Authorship is stated privately to recruiters only.
- **AI Prompt Tool built the FREE-forever way** (in-browser smart templates, no paid API).
  Optional free-tier real-AI (Gemini/Groq) can be added later, not required.

## 4. Locked deliverables (the 8 things the site provides)
**Homepage** — brand + one honest line + buttons to everything below.

Tools (input -> answer):
1. ⭐ **AI Prompt Tool** — messy request -> perfectly-worded prompt to copy. (STAR FEATURE)
2. **Subscription-Leak Calculator** — subscriptions -> yearly waste + chart.
3. **Savings Goal Planner** — goal + monthly saving -> timeline + chart.
4. **Raise/Negotiation Script Builder** — role + ask -> ready-to-send script.

Copy-and-use:
5. **Prompt Library** — searchable set of tested prompts.
6. **Message Templates** — raise, bill negotiation, cold outreach scripts.

Learn:
7. **AI Terms Glossary** — plain-English AI dictionary (Agents, tokens, MCP...). Also SEO.

Stay connected:
8. **Weekly Email signup** + Instagram link.

## 5. Tech stack (CONFIRMED 2026-07-25)
- **Frontend:** Next.js + React + TypeScript. ✅ CONFIRMED by user.
- **Motion/animation:** Framer Motion (free). ✅ Added 2026-07-25 (user wants an interactive,
  animated site). Charts: a free React chart lib (e.g. Recharts) for the calculators.
- **Design:** Figma (free) for all UI/UX phases. ✅ CONFIRMED — user will create a free account.
- **Hosting:** Vercel free tier.

## 6. The professional process (10 phases)
UI/UX portfolio = Phases 1-8 (Figma). Engineering portfolio = Phases 9-10 (code).
For each phase: what to produce + the tool + the recruiter talking point.

- [x] **Phase 1 — Discovery:** Project Brief. ✅ DONE 2026-07-25.
      FINAL at `docs/01-project-brief.md`. Audience=Western/USD, metrics + problem
      statement approved.
- [x] **Phase 2 — Research:** Proto-Personas + Competitor Analysis. ✅ DONE 2026-07-25.
      FINAL at `docs/02-research.md`. 2 proto-personas (Emma/Ryan), competitor gap, 5 takeaways.
      User raised an honesty concern (India-based, Western personas) — resolved by labeling them
      proto-personas grounded in real audience data + a recruiter script (in the doc).
- [x] **Phase 3 — Information Architecture:** Sitemap + User Flows. ✅ DONE 2026-07-25.
      FINAL at `docs/03-information-architecture.md`. Multi-page approved; About page kept
      (anonymous brand story); 3 user flows approved. Motion requirement added (section 10).
- [x] **Phase 4 — UX / Wireframes:** low-fidelity grey-box layouts of every screen.
      ✅ DONE 2026-07-25, EXTENDED to full responsive coverage later same day (backfilled after
      Phase 6/7 revealed the gap — see note in `docs/04-wireframes.md`). 14 wireframe screens
      total: all 8 at mobile width + desktop wireframes for the 6 that were mobile-only.
      Spec doc: `docs/04-wireframes.md`. Live file linked in section 9.
- [x] **Phase 5 — UI / Design System:** color palette, typography, components/style guide.
      ✅ DONE 2026-07-25. Spec: `docs/05-design-system.md`. BUILT for real in the same Figma
      file, new "Design System" page: 7 color variables (accent #E0531E, background, surface,
      ink, muted, border, success) + 6-step text style scale (Sora Bold/SemiBold headings,
      Inter body). Motion spec (Framer Motion) written but not build-relevant until Phase 9.
- [x] **Phase 6 — UI / High-Fidelity Mockups:** full visual design of every screen.
      ✅ DONE 2026-07-25, EXTENDED to full responsive coverage same day. All 8 screens built at
      mobile width + desktop (1440px) versions of all 6 that were mobile-only — 14 screen
      variants total, page "Mockups", applying Phase 5 tokens. Spec + full bug log:
      `docs/06-high-fidelity-mockups.md`. Reusable Figma-build lessons:
      `docs/_figma-build-lessons.md` (11 rules).
- [x] **Phase 7 — Prototype:** clickable Figma prototype.
      ✅ DONE 2026-07-25, fully responsive. 53 click connections total: 22 across the 8 mobile
      screens + 31 across the 7 desktop screens, two independent self-contained flows (mobile
      and desktop), 2 flow starting points. Try it: open "Mockups" page, select Home Mobile OR
      Home Desktop, hit Present. Spec + connection map + known gaps: `docs/07-prototype.md`.
- [~] **Phase 8 — Test & Refine:** informal usability testing + iterate.
      🚧 IN PROGRESS since 2026-08-02. Round 1 done: 2 unguided screen recordings (India-based
      tester) analysed via the `teardown` tool, frame-by-frame. 3 of 5 planned tasks covered
      (Subscription-Leak Calculator, AI Prompt Tool, Raise & Negotiation Builder + partial
      Prompt Library browse). Both fully-tested tools succeeded end-to-end — no dead links, no
      rage-clicking, no wrong navigation. 2 real findings logged (not yet fixed): F1 — repeated
      retype/backspace on text inputs in both recordings (unconfirmed cause, no audio captured
      to explain it); F2 — Subscription-Leak Calculator first input lands in the price field
      before the Name field (concrete, checkable). Full write-up:
      `docs/08-usability-testing.md`. **Round 2 still needed:** Glossary + Email signup tasks
      (not attempted), narrated audio to confirm/rule out F1, and a separate Western-tester
      round for language/currency/cultural friction (this round was structural/flow-only by
      design — see doc). No code changes made yet; fixes deferred until the picture is
      complete.
      **Update 2026-08-02:** Ran a heuristic walkthrough (Nielsen heuristics, not user testing
      — clearly labelled as a different method) on the 2 untested pages (Glossary, Email
      signup) via live browser interaction. Zero issues found: Glossary search/filter/empty-state
      all correct; email form has proper label + native validation that blocks bad input
      client-side before it ever reaches the server. Successful-submission path was already
      verified in the 2026-07-26 deploy session (real `200 {"ok":true}` from `/api/subscribe`),
      not repeated to avoid a junk test subscriber. All 5 original tasks now have SOME coverage
      (3 real user-tested, 2 heuristically reviewed). Still open (at that point): F1/F2 fixes
      not yet applied, no narrated user session exists for the 2 heuristic-only pages, and no
      Western tester has touched the site. Full write-up: `docs/08-usability-testing.md`.
      **Update 2026-08-02 (cont.):** F2 fixed. Root cause confirmed by direct measurement (not
      guessed): Name input on the Subscription-Leak Calculator rendered at 55px wide on a real
      375px mobile viewport — squeezed by 4 fixed-width siblings sharing one flex row — which
      is exactly why the Round-1 tester's first input landed in the Price field instead. Fix:
      `w-full` below `md` forces Name onto its own line on mobile; desktop (`md`+) unchanged.
      Verified by DOM measurement before/after at both breakpoints, not just visually assumed:
      mobile Name width 55px → 301.6px; desktop unchanged at 309.6px. Still open: F1 (needs a
      narrated re-test to confirm/rule out), no Western tester yet.
- [~] **Phase 9 — Development:** build the real site (Next.js/React/TS).
      🚧 IN PROGRESS since 2026-07-25. Log: `docs/09-development.md`. Step 1 (foundation:
      scaffold + design tokens + fonts + verified build) ✅ done. Step 2 (real Homepage,
      responsive) ✅ done. Step 3 (⭐ AI Prompt Tool, free-forever in-browser engine) ✅ done.
      Step 4 (Subscription-Leak Calculator) ✅ done — **Round 1 "launchable core" complete.**
      Step 5 (Savings Goal Planner, designed without a Figma spec — see progress log) ✅ done.
      Step 6 (Raise & Negotiation Builder) ✅ done — **all 4 locked tools now built.**
      Step 7 (Prompt Library, 13 real curated prompts) ✅ done. Step 8 (Message Templates,
      shares a new `SearchableLibrary` component with the Prompt Library) ✅ done.
      Step 9 (AI Terms Glossary, 16 real definitions) ✅ done — **all 8 original locked
      deliverables now built.** Step 10 (Tools Index + About — the 2 sitemap pages that were
      linked but never built) ✅ done — **every page in the Phase 3 sitemap now exists; zero
      dangling links anywhere on the site.** Step 11 (code-quality/polish audit — lint fixes,
      dead-file cleanup, SEO infra, stale docs) ✅ done. Step 12 (user-reported Prompt Tool bug,
      root-caused + fixed, plus a real bug-hunt pass that found 2 more genuine bugs — see progress
      log) ✅ done. Step 13 (accessibility audit — broken skip link, accent color failing WCAG AA
      at small sizes, invisible keyboard focus ring, all fixed — see progress log) ✅ done.
      App lives in `website/`.
- [x] **Phase 10 — Test & Deploy:** responsive/QA check, deploy live to Vercel (free). ✅ DONE
      2026-07-26. Live at https://leverage-report-website.vercel.app.

Final portfolio artifact: a **Case Study** (Problem -> Research -> Design decisions & why -> Result).

## 7. Suggested build order for Phase 9 (so there's always a launchable site)
- Round 1: Homepage + AI Prompt Tool + Subscription Calculator (launchable core).
- Round 2: Savings Planner + Raise Builder + Prompt Library.
- Round 3: Glossary + Message Templates + Email signup.

## 8. Owner's learning goal + WORKING STYLE (IMPORTANT — how to work with this user)
The user is a BEGINNER and explicitly wants to UNDERSTAND each step (so they can answer
recruiter questions and add real UI/UX artifacts to their portfolio). Do NOT rush ahead
and just build. Explain the procedure step by step in plain, beginner-friendly language,
help them produce the artifact for each phase, get their understanding/agreement, then move on.

**Rules of engagement (set 2026-07-25, non-negotiable):**
1. Go step by step, even for the smallest task. One task at a time, never jump ahead.
2. After each task: STOP -> tell the user to look at what was prepared -> EXPLAIN it in
   plain language -> only THEN move to the next task.
3. Record & save everything necessary for the case study / portfolio / report (this file's
   progress log + a per-phase artifact file for each phase). Build the paper trail.
4. Proactively tell the user which tools / connectors / accounts they need (don't wait to be asked).
5. Ask the user whenever an input/decision/account is needed.
6. Be an ADVISOR, not a yes-man. Push back, suggest better options, flag problems.
   Do not just approve whatever the user asks. Best results > agreeing.

## 8d. Standing quality rule — never repeat a caught mistake (set 2026-07-25)
The user explicitly does not want the same mistake made twice. **Before every `use_figma`
build call, check `docs/_figma-build-lessons.md`** — a running checklist of every bug found
so far (currently: default-white auto-layout fills, padding-exceeds-frame-size, unverified
font style names, etc). **After any bug is found (by the user or self-caught), add a new
terse rule to that file immediately** — don't just fix and move on. If a future mistake
repeats an existing rule in that file, that itself is a signal the checklist isn't being
applied — stop and re-read it before continuing.

## 8c. Standing tooling rule (set 2026-07-25 — do not ask again)
When a deliverable is natively a Figma artifact (wireframes, mockups, prototypes, design
system), BUILD IT DIRECTLY IN FIGMA via the Figma MCP connector (`use_figma` / `create_new_file`
/ `get_screenshot` etc.) — do not ask permission to use Figma, do not build a substitute
preview elsewhere first. Figma account is already connected (Aditya Dhanawade, Student plan,
planKey `team::1426161126578368117`). Always record the resulting Figma file name + URL in
BOTH this file (section 9 links table) and README.md so it's part of the visible project record.

## 8b. Tooling plan (per phase)
- **Phases 1-3 (Brief, Research, IA):** written docs (drafted WITH the user) +
  optionally FigJam (free) for the sitemap/flow diagrams. Saved as artifact files in this repo.
- **Phases 4-8 (Wireframes, Design System, Mockups, Prototype, Testing):** **Figma (free)** —
  the industry-standard UI/UX tool; produces the artifacts recruiters expect. USER NEEDS A
  FREE FIGMA ACCOUNT. The AI tool cannot click inside Figma, but generates all content/specs
  (layout box-by-box, exact colors/fonts/spacing, component list, copy) for the user to place.
- **Phases 9-10 (Development, Deploy):** built in code (Next.js/React/TS proposed);
  deploy to Vercel (free). Can also produce a live coded preview/mockup here.
- Case study writeup: drafted from the recorded artifacts at the end.

---

## 10. Global requirement — Motion & Interactivity (added 2026-07-25)
User wants the site to feel interactive and animated. Standing requirement for the build:
- Tool: **Framer Motion**. Purposeful, tasteful motion ONLY — not decoration everywhere.
- Good uses here: hover micro-interactions on buttons/cards, count-up numbers in calculators,
  charts animating in, results fading/sliding in, scroll-reveal of sections, copy-confirmation.
- Must stay fast (no jank); MUST honor `prefers-reduced-motion` (accessibility).
- Full motion spec to be written in Phase 5 (Design System); implemented in Phase 9.

## 9. Repository structure (GitHub/portfolio-ready, set 2026-07-25)
```
leverage-report-website/
├── README.md      ← PUBLIC project overview (front page recruiters see on GitHub)
├── PROJECT.md     ← INTERNAL working log & source of truth (this file)
├── docs/          ← design & process documentation, numbered per phase
│   ├── 01-project-brief.md
│   ├── 02-research.md
│   └── (future: 03-information-architecture.md ... case-study.md)
├── design/        ← Figma exports: wireframes/, mockups/, design-system/
├── website/       ← the Next.js application code (built in Phase 9)
└── assets/        ← screenshots/ & images for README/case study
```
README.md = polished public showcase. PROJECT.md = internal log. Keep both in sync.
Not yet a git repo — run `git init` + push to GitHub when the user is ready (offer, don't auto-do).

**Live Figma files (source of truth for design — link these, not just static exports):**
| File | URL | Contains |
|---|---|---|
| The Leverage Report — Wireframes | https://www.figma.com/design/nLgaNdrpRv8b15FU8PwEzc | Page "Wireframes — v1" (Phase 4, 14 screens: 8 mobile + 6 desktop) + "Design System" (Phase 5) + "Mockups" (Phase 6/7, 14 screen variants + full 53-connection prototype) |

## PROGRESS LOG
_Append newest at the bottom. Date + what was decided/done + what's next._

- **2026-07-25 (session 1):** Discussed and locked scope. Decided the site = "Free
  AI-Money Toolkit." Locked all 8 deliverables (section 4). Confirmed constraints
  (free / legit-tools-only / private ownership). Taught the 10-phase UI/UX+dev process.
  Set up this PROJECT.md + a memory entry for cross-session continuity.
  **NEXT STEP:** Start **Phase 1 — Discovery** (write the Project Brief together).
  Also still to confirm: final tech stack (Next.js proposed).
- **2026-07-25 (session 1, cont.):** User set the working style / rules of engagement
  (section 8) — step-by-step, record everything, explain each artifact, advisor-not-yes-man.
  Added the tooling plan (section 8b). Confirmed stack (Next.js) + Figma.
- **2026-07-25 (session 1, cont.):** ✅ Phase 1 (Project Brief) FINAL. ✅ Phase 2 (Research)
  FINAL — incl. resolving the proto-persona honesty concern. Reorganized the whole folder into
  a GitHub/portfolio-ready structure (section 9): added README.md, `docs/`, `design/`,
  `website/`, `assets/`; moved briefs into `docs/`.
- **2026-07-25 (session 1, cont.):** ✅ Phase 3 (IA) FINAL — multi-page sitemap + 3 user flows
  approved, About page kept (anonymous). User added a global **Motion & Interactivity**
  requirement (Framer Motion) — recorded in section 10 + tech stack.
- **2026-07-25 (session 1, cont.):** ✅ Phase 4 (Wireframes) BUILT — for real, in Figma, via the
  Figma MCP connector (account already connected: Aditya Dhanawade, Student plan). Created file
  "The Leverage Report — Wireframes" (https://www.figma.com/design/nLgaNdrpRv8b15FU8PwEzc) and
  built all 8 screens node-by-node. User set a **standing rule (section 8c): always build
  Figma-native deliverables directly in Figma via the connector, no need to ask each time; always
  record the live Figma file link in PROJECT.md + README.** **NEXT STEP:** user reviews the
  wireframes in Figma; then Phase 5 — Design System (colors, fonts, motion spec).
- **2026-07-25 (session 1, cont.):** User approved wireframes as-is ("looks good"). ✅ Phase 5
  (Design System) FINAL — reused Instagram accent #E0531E, light/clean theme, Sora+Inter fonts,
  motion spec all approved. Built for real in Figma: 7 color variables + 6 text styles on a new
  "Design System" page in the same file (one correction: Sora "Medium" doesn't exist as a font
  weight, used SemiBold instead).
- **2026-07-25 (session 1, cont.):** User caught a real layout bug — the Color Palette and
  Typography Scale sections visually overlapped (Color Swatches frame was 130px tall, ending at
  y=170, but the Typography heading was placed at y=160, 10px inside it). Confirmed via
  `get_metadata` (not just re-eyeballing), fixed by moving the Typography heading to y=210 and
  its specimens to y=250 (40px clear gap). Re-screenshotted and confirmed fixed.
  **Process note:** always check `get_metadata` bounding boxes when the user reports a visual
  overlap, don't just guess-and-nudge.
- **2026-07-25 (session 1, cont.):** Phase 6 (Mockups) Round 1 built in Figma — Home (Mobile),
  AI Prompt Tool, Subscription Calculator, full color+type applied from the Phase 5 system.
  Caught and fixed one real bug independently this time (before user had to point it out): the
  secondary-links row had an erroneous 32px bottom padding on a 30-36px-tall frame, pushing text
  above its container — found via `get_metadata`, fixed. Also flagged a known Figma-render
  limitation (emoji glyphs render inconsistently) with a forward recommendation to use real icon
  vectors in the coded build (Phase 9) instead.
- **2026-07-25 (session 1, cont.):** User caught a real bug — a white sliver visible in the
  footer's email-signup row (between the input and Join button), since `createAutoLayout()`
  defaults to white fill and that wrapper's fill was never overridden. Rather than patch only
  that one spot, audited all 3 built mockup screens for the same root cause (`findAll` for
  white-filled FRAME nodes, checked each against intent) and found **12 total** affected
  wrapper frames across Home/Prompt Tool/Calculator. Fixed all 12 in one pass, re-screenshotted,
  confirmed clean. **Process lesson logged: one reported instance of a silent-default bug means
  audit the whole build for the same pattern, not just the reported spot.**
- **2026-07-25 (session 1, cont.):** Round 2 mockups built (Tools Index, Prompt Library,
  Glossary, About — all clean first try, checklist paid off). Home Desktop had 2 self-caught
  bugs: (1) hero section clipped to a fixed 100px height post-`resize()`, hiding the 2nd
  headline line + subheadline + buttons — fixed via `primaryAxisSizingMode="AUTO"`; (2) that
  same fix wrongly applied to the (horizontal) trust-strip/footer frames broke their full-width
  fill, since `primaryAxisSizingMode` governs WIDTH not height on a horizontal frame — reverted
  and left alone (they were never actually broken). Both added as rules #7-8 in
  `docs/_figma-build-lessons.md`. All 8 Phase 6 screens now complete.
- **2026-07-25 (session 1, cont.):** Phase 7 (Prototype) built — gathered exact node IDs for
  every button/link across all 8 mockup screens via `get_metadata`, wired 22 `ON_CLICK → NODE
  NAVIGATE` reactions matching the Phase 3 user flows (tool cards → their tool, nav logos → Home,
  desktop nav/hero → same destinations), set 2 flow starting points (mobile + desktop). Verified
  reactions persisted via read-back, not just assumed from no-error. Honestly documented 2 known
  gaps: Savings Planner/Raise Builder cards and the Templates nav item have no built screen yet,
  so intentionally left unlinked rather than faked. Zero bugs this round — clean build.
  **NEXT STEP:** user tries the prototype (Present mode) in Figma; then Phase 8 (usability
  testing) or straight to Phase 9 (real Next.js code).
- **2026-07-25 (session 1, cont.):** User caught a real UX bug testing the prototype — clicking
  any Home Desktop nav/button snapped Presenter mode down to a 375px mobile frame (jarring
  breakpoint jump), because Home Desktop was the only screen built at desktop size and all its
  wired destinations were mobile-only screens. **Fixed by removing all 7 outgoing reactions from
  Home Desktop**, making it a clean unlinked reference screen; the mobile Home remains the
  intended full click-through entry point. Logged as rule #9 in `docs/_figma-build-lessons.md`:
  never wire a prototype connection across mismatched frame widths without a matching-size
  destination.
- **2026-07-25 (session 1, cont.):** User clarified they want the real coded site to work on
  BOTH phone and desktop, AND explicitly chose (via clarifying question) to also build full
  desktop Figma mockups for the 6 remaining screens now, not defer responsive proof to the code
  phase. Built all 6: Tools Index, AI Prompt Tool, Subscription Calculator (two-column per the
  original Phase 4 spec), Prompt Library, Glossary, About — all at 1440px, applying every rule
  in the lessons file proactively. **Two new self-caught bugs, logged as rules #10-11:** (1) a
  nested-wrapper `resize()`-clips-height bug one level deeper than rule #7 anticipated (fixed
  the inner grid first, frame height was still wrong, root cause was the outer `body` wrapper);
  (2) a paragraph text node on About Desktop rendered unwrapped at 943px inside a 680px column
  (missing `textAutoResize="HEIGHT"`), symmetrically clipped on both edges. Both self-caught via
  screenshot + metadata inspection, not user-reported. Then re-wired the prototype: removed the
  temporary Home-Desktop unlink from rule #9, wired 31 new connections so mobile and desktop are
  now two fully independent, self-contained click-through flows (53 total connections). All 14
  screen variants + the full prototype are done.
- **2026-07-25 (session 1, cont.):** User caught another real bug — the honesty-note box on AI
  Prompt Tool Desktop rendered left-aligned/narrow (376px) instead of spanning its 600px column.
  Root cause: setting `primaryAxisSizingMode="AUTO"` AFTER `layoutSizingHorizontal="FILL"` on a
  HORIZONTAL frame silently reverts FILL back to HUG — a self-inflicted regression from
  over-applying the rule #7/#10 height-fix habit to a horizontal frame, directly violating the
  already-documented rule #8. Per the user's explicit request, **audited all 14 screens**
  programmatically (every HORIZONTAL frame with a solid fill where sizing wasn't FILL) rather
  than fixing only the reported spot — found exactly one more silent instance (Subscription
  Calculator Desktop's suggestion box, 357px inside 400px) not yet visually reported, and
  confirmed the other 25 flagged candidates were legitimately-hugging buttons/chips/tags, not
  bugs. Fixed both real instances, verified via screenshot. Logged as rule #12 with an explicit
  meta-lesson: documenting a rule doesn't prevent violating it under a different name later —
  re-read existing rules before adding new blanket practices.
- **2026-07-25 (session 1, cont.):** User asked whether the Phase 4 wireframes also had desktop
  coverage — they didn't (only Home had both, matching the earlier Phase 6 gap before it was
  fixed). Presented the honest-documentation-only option as the recommendation; user chose to
  build the missing desktop wireframes instead, for full completeness. Built all 6 (Tools Index,
  AI Prompt Tool, Subscription Calculator, Prompt Library, Glossary, About) on the Wireframes
  page, grey-box style, applying the full lessons-file checklist proactively — zero bugs,
  verified via `get_metadata` + screenshots. Added an honest process note to
  `docs/04-wireframes.md` explaining why the desktop wireframes were built AFTER the desktop
  mockups (fast iteration on Home first, backfilled for documentation completeness once the
  user asked) — framed as a legitimate real-project workflow, not a hidden mistake.
  **All 14 wireframe screens + all 14 mockup screens + the full 53-connection prototype are now
  complete and consistent. Phases 1-7 fully done.**
  **NEXT STEP:** Phase 8 (usability pass) or Phase 9 (real Next.js code) — user's choice.
- **2026-07-25 (session 2):** User chose to go straight to **Phase 9 (Development)**. ⚠️ Recorded
  as a conscious decision, not an oversight: **Phase 8 (formal usability testing) is deliberately
  deferred** — a lot of UX issues were already caught and fixed live while building/testing the
  prototype, so the plan is a lightweight usability pass on the *coded* site during Phase 10
  instead. Phase 9 **Step 1 (Foundation)** ✅ done: scaffolded Next.js 16 + React 19 + TypeScript +
  Tailwind v4 in `website/`, installed Framer Motion + Recharts, translated the entire Phase 5
  design system into real Tailwind `@theme` tokens (7 colors + 2 radii → utility classes like
  `bg-accent`/`rounded-card`, so no hex codes ever get typed into components), loaded Sora + Inter
  via `next/font` (self-hosted, no layout shift), and added the global `prefers-reduced-motion`
  block up front rather than retrofitting accessibility later. **Verified by measurement, not
  eyeballing** — read the live computed CSS out of the running browser and confirmed all 7 values
  match the Phase 5 spec exactly; plus zero console errors, clean `tsc --noEmit`, and a successful
  production `next build`. One real issue self-caught and fixed: Next.js had inferred the wrong
  workspace root (unrelated parent-folder lockfiles on this machine), which can make prod builds
  resolve differently from dev — pinned `turbopack.root`, confirmed the warning cleared. One issue
  honestly documented rather than force-fixed: `npm audit` high-severity advisories are all in
  build-time tooling (eslint/postcss), not shipped code, and the fix is a breaking ESLint major —
  decision recorded in `docs/09-development.md`. Full write-up: `docs/09-development.md`.
  **NEXT STEP:** Step 2 — build the real Homepage from the Phase 6 mockups (mobile + desktop),
  replacing the temporary token-proof page.
- **2026-07-25 (session 2, cont.):** Phase 9 **Step 2 (Homepage)** ✅ done — hero, tool cards,
  trust strip, secondary links, sticky header (desktop nav / mobile hamburger), and footer with
  email signup, all built responsive and matching the Phase 4 section order exactly. Added
  `src/lib/site.ts` as a single content source so nav/footer/homepage can't drift apart, and
  replaced the mockups' emoji icons with hand-rolled SVGs per the Phase 6 recommendation
  (emoji render inconsistently across platforms). Two honest product decisions, not shortcuts:
  the email signup admits no provider is wired up yet instead of faking a confirmation, and
  unbuilt tool cards show a visible "Coming soon" tag instead of linking to a 404. **Two real
  bugs caught and fixed:** (1) the mobile tool-card grid was 1 column instead of the wireframe's
  2×2 — caught by measuring actual card positions rather than trusting the Tailwind breakpoint
  class; (2) a genuine hydration mismatch in the scroll-reveal animation component, ironically
  only on devices with "reduce motion" turned on (the exact visitors the fix was meant to serve) —
  root cause and fix explained in `docs/09-development.md`. Verified desktop (1280px) and mobile
  (375px) layouts by reading live computed styles/bounding boxes, confirmed zero console errors
  and a clean production build. **One honest gap:** the automated browser tool couldn't simulate
  a real pointer click reaching the page this session (confirmed environment-wide, not a code
  issue), so the mobile hamburger menu's *toggle logic* was verified by calling its handler
  directly, but a real tap hasn't been end-to-end confirmed — flagged for the user to check.
  Full write-up: `docs/09-development.md`.
  **NEXT STEP:** user confirms the mobile menu works with a real tap; then Step 3 — build the
  AI Prompt Tool (the star feature) or continue the Round 1 core (Subscription Calculator).
- **2026-07-25 (session 2, cont.):** Phase 9 **Step 3 (⭐ AI Prompt Tool)** ✅ done at
  `/tools/prompt` — the star feature, and the screen Phase 4 explicitly names as "the template for
  all tool pages." Built the free-forever engine required by the hard constraint in section 3:
  `src/lib/promptEngine.ts` does keyword-based intent detection (7 categories — raise, resume,
  outreach, explain, content, code, money — plus a general fallback) and fills hand-written
  prompt-engineering templates (role → context → structured task → tone), entirely in the browser,
  no API call, no ongoing cost. Extracted two components other tool pages will reuse immediately:
  `ToolHeader` (icon+title+intro) and `CopyButton` (icon-morphs-to-checkmark per the Phase 5 motion
  spec, needed again by the Prompt Library and Message Templates pages). Kept the Phase 4 "ⓘ The
  catch" honesty note and made the build button visibly disabled on empty input rather than a
  silent no-op. **Verified the actual logic, not just the UI:** drove the textarea via a real React
  state update and submitted the form programmatically — confirmed a "raise" input produces the
  compensation-coach template with the visitor's exact words inserted, and an unmatched input
  ("plan a birthday party for my sister") correctly falls through to the general template rather
  than breaking. Confirmed desktop (1280px, 600px centered column) and mobile (375px, no overflow,
  text wraps cleanly) layouts by measurement, zero console errors, and a clean production build
  with the new route listed. The Homepage's AI Prompt Tool card now shows "Open" and links through;
  the other 3 unbuilt tools still honestly show "Coming soon." One environment note: testing the
  Copy button surfaced a genuine browser rule (`NotAllowedError: Document is not focused` —
  clipboard access requires a real user gesture) rather than a bug; confirmed the button's error
  handling already does the right thing (stays in its normal state instead of lying about success).
  Full write-up: `docs/09-development.md`.
  **NEXT STEP:** user tries the tool for real (type something, hit Build, hit Copy) and confirms
  the mobile menu tap from Step 2; then Step 4 — Subscription-Leak Calculator (next in the Round 1
  "launchable core" order from section 7).
- **2026-07-25 (session 2, cont.):** Phase 9 **Step 4 (Subscription-Leak Calculator)** ✅ done at
  `/tools/subscriptions` — **Round 1 "launchable core" (Homepage + AI Prompt Tool + Subscription
  Calculator) is now fully complete.** Dynamic subscription rows (name/price/monthly-or-yearly/
  delete), a live $/month and $/year result with the Phase 5 count-up animation, and a Recharts
  bar chart. **One deliberate departure from the Phase 4 mockup copy, flagged as advisor:** the
  mockup text says "these look unused — consider cutting," which implies real usage detection this
  tool doesn't have (no bank connection, just what's typed in). Shipping that literal copy would
  have been a small dishonesty against the brand's own "no fluff, honest" promise (section 3), so
  the suggestion instead honestly surfaces the **priciest** subscription with a "do you still use
  it?" nudge — same usefulness, no false claim. Math logic (mixed monthly/yearly normalization,
  currency formatting) kept in a separate `subscriptions.ts` lib file, same pattern as the prompt
  engine. **Verified with real state changes, not just eyeballing:** set two subscriptions
  ($15.49/mo + $599/yr) via actual React updates and hand-checked the math ($65.41/mo, $784.88/yr
  — exact); removed a row via the real delete handler and confirmed the total recalculated
  correctly; added a row and confirmed a fresh non-colliding id; set a negative price directly and
  confirmed it's treated as $0 with no `NaN` anywhere. Desktop (1280px) confirmed as true
  side-by-side columns (~581/387px, matching the ~560/400 spec) with no horizontal overflow;
  mobile (375px) confirmed stacked and full-width. Clean production build with the new route
  listed. Homepage now shows both built tools as "Open"; Savings Planner and Raise Builder still
  honestly show "Coming soon." Full write-up: `docs/09-development.md`.
  **NEXT STEP:** user tries the calculator for real; Round 1 launchable core is done, so this is a
  natural pause point to review everything built so far before starting Round 2 (Savings Planner,
  Raise Builder, Prompt Library — section 7).
- **2026-07-25 (session 2, cont.):** Phase 9 **Step 5 (Savings Goal Planner)** ✅ done at
  `/tools/savings` — first tool of Round 2. **Advisor flag before building:** this screen was
  never wireframed or mocked up in Figma (only ever a Tools Index card label — confirmed against
  Phases 4-7), so there was no design spec to build against. Told the user this up front, then
  designed it directly in code, following the Subscription Calculator's proven conventions (live
  recalculation, two-column layout, chart) and the locked spec from the Project Brief: "goal +
  monthly saving -> timeline + chart." Built a real month-by-month balance simulation (not a
  closed-form formula) in `savings.ts`, capped at 50 years so a genuinely unreachable goal reports
  "not reached" honestly instead of looping forever or lying. Three states handled explicitly:
  goal already met, genuinely unreachable ($0/month + 0% return), and reached-within-cap (shows
  months, years, and a projected calendar date). Added an optional "expected annual return %"
  field (compound monthly) beyond the brief's literal wording — a natural, still-free extension
  since some visitors save into an investment account, not just cash; defaults to 0% so a plain
  saver isn't asked to understand investing to use the tool. **Verified with real state changes
  and hand-checked math:** $5,000 goal / $1,000 start / $200 per month at 0% → exactly 20 months
  (hand-checked: 1,000 + 200×20 = 5,000); adding a 6% return correctly dropped it to 19 months;
  the unreachable case produced the honest message with the chart correctly suppressed; the
  already-met case showed the celebration state with no fake countdown. Desktop/mobile layout
  matches the Subscription Calculator's already-proven breakpoints, clean production build.
  Homepage now shows 3 of 4 tools as "Open" — only Raise Builder remains "Coming soon."
  **Operational note logged:** the dev server needs a full restart (not just hot-reload) after
  adding a new route folder — a reused server showed a stale page title until restarted; will
  matter for the remaining tool pages. Full write-up: `docs/09-development.md`.
  **NEXT STEP:** user tries the planner for real; then Step 6 — Raise & Negotiation Builder (last
  tool page, completing all 4 Round 2 tools) or Prompt Library.
- **2026-07-25 (session 2, cont.):** Phase 9 **Step 6 (Raise & Negotiation Builder)** ✅ done at
  `/tools/raise` — **all 4 locked tools are now built.** Same situation as the Savings Planner: no
  Figma screen ever existed for this one (only a Tools Index card label), so it was built directly
  against the Project Brief's locked spec: "role + ask -> ready-to-send script." Key distinction
  from the AI Prompt Tool: that tool generates a *prompt for an AI*; this one generates the actual
  message a visitor reads out loud or sends — so `raiseBuilder.ts` builds real sentences directly
  (opening line keyed to the ask type — raise/promotion/flexible work/more PTO/custom — a bulleted
  reasons list, the specific ask restated, a tone-matched closing, and a calm "if they say not now"
  line) rather than wrapping the input in a meta-instruction. Reused `TONES`/`ToneValue` from
  `promptEngine.ts` instead of a second identical tone list, and reused `ToolHeader`/`CopyButton`/
  `AppearIn` again — all three now used by 2+ tool pages, confirming they were worth extracting in
  Step 3. **Verified both branches of the conditional logic, not just one happy path:** a "raise"
  script with full inputs produced the correct opening/reasons/ask/closing; switching to "flexible
  work" produced a different opening line and **correctly omitted** the raise/promotion-only
  "Specifically, I'm asking for" line — confirming the branching logic actually branches, not just
  restyles the same output. Confirmed the Build button is disabled with all fields empty. Desktop
  (600px centered column, matching the Prompt Tool) and mobile layouts both clean, no overflow, no
  console errors, clean production build. **Homepage now shows all 4 tool cards as "Open" — zero
  "Coming soon" tags left.** Full write-up: `docs/09-development.md`.
  **NEXT STEP:** user tries the builder for real. All 4 tools done — natural point to either do a
  full user test pass across everything built so far, or move to Prompt Library / Message
  Templates / Glossary (the remaining Round 2/3 content pages) or the real email-signup backend.
- **2026-07-25 (session 2, cont.):** Phase 9 **Step 7 (Prompt Library)** ✅ done at `/library` —
  this screen unlike the last two *does* have a real Phase 4 wireframe spec (search + filter chips
  + card grid). The real work here was content, not logic: locked deliverable #5 calls for a
  "searchable set of **tested** prompts," so wrote 13 genuinely useful, hand-crafted prompts (5
  Career, 4 Money, 4 Freelance) targeted at what the Phase 2 personas actually need — resume/
  interview help, bank-statement audits, invoice follow-ups, client proposals, etc. — each using
  `[bracket placeholders]` for personal details, matching the honesty pattern already established
  on the Prompt Tool and Raise Builder ("swap in your real details"). Search and category-filter
  combine as a proper AND, not two exclusive modes. **Verified with real interaction:** typing
  "invoice" correctly narrowed to exactly 1 card; clicking the "Career" filter chip's real handler
  correctly narrowed to exactly the 5 Career cards and flipped its `aria-pressed` state; combining
  an active category filter with a nonsense search term correctly produced zero results and the
  honest empty-state message (not a silent OR fallback). Confirmed the true 3-column desktop grid
  (matching the Phase 4 spec) and no-overflow mobile layout, zero console errors, clean production
  build, and that the Prompt Tool's "Browse the Prompt Library" link (previously hitting the
  branded 404) now resolves for real. Full write-up: `docs/09-development.md`.
  **NEXT STEP:** user browses the library for real; then Message Templates (reuses this exact
  layout per the Phase 4 spec note) or the Glossary to close out Round 2/3 content pages.
- **2026-07-25 (session 2, cont.):** Phase 9 **Step 8 (Message Templates)** ✅ done at
  `/templates`. Phase 4's doc explicitly says this screen reuses the Prompt Library's exact layout
  — so before writing content, extracted the shared search/filter/grid pattern into a new
  `SearchableLibrary` component instead of duplicating the page, then rebuilt `/library` on top of
  it too and specifically re-tested it to confirm the refactor didn't regress anything (still all
  13 prompts, correct title, zero errors). Side effect: both pages are now plain server components
  (the interactive bits live inside `SearchableLibrary`), so `/library` no longer needs a separate
  `layout.tsx` just for metadata. Wrote 12 real static templates (4 Raise, 4 Bills, 4 Outreach)
  deliberately covering situations the *dynamic* Raise & Negotiation Builder tool doesn't already
  handle — a written follow-up email, cancelling a subscription, disputing a charge, cold outreach
  — rather than restating what that tool generates. Added a new `TemplatesIcon` (document with a
  folded corner), kept visually distinct from the Raise Builder's plain speech-bubble icon so the
  two "message" screens don't look identical. **Verified with real interaction:** searching
  "landlord" narrowed to exactly 1 card; the "Outreach" filter chip's real handler narrowed to
  exactly the 4 Outreach cards; desktop 3-column grid and mobile no-overflow both confirmed; clean
  production build with the new route; both nav and footer "Templates" links now resolve instead
  of hitting the branded 404. Full write-up: `docs/09-development.md`.
  **Only the AI Terms Glossary and the real email-signup backend remain** from the original 8
  locked deliverables.
  **NEXT STEP:** user browses templates for real; then the Glossary (last content page) or wiring
  up a real free-tier email provider for the footer signup.
- **2026-07-25 (session 2, cont.):** Phase 9 **Step 9 (AI Terms Glossary)** ✅ done at `/glossary`
  — **all 8 originally locked deliverables are now built.** Deliberately did NOT force this into
  the `SearchableLibrary` component from Step 8: glossary terms don't split into clean filter
  categories and there's nothing to "copy" (reference content, not a script/prompt) — some terms
  instead have an optional "related tool" link. Built as its own small `GlossaryList` component
  instead of bending the shared one with special-case props. Wrote 16 real, accurate AI term
  definitions (AI Agent through Zero-shot/Few-shot) — this is the site's designated SEO entry
  point (locked deliverable #7 explicitly says "also SEO"), so correctness came first; 3 terms
  (Chatbot, Prompt, Prompt Engineering) link to the AI Prompt Tool where it's genuinely useful, not
  as self-promotion. Gave each term a stable HTML `id` so `/glossary#token` deep-links to one
  definition — useful for sharing a specific term or for search engines to link directly in.
  **Verified with real interaction:** all 16 terms render alphabetically; searching "hallucin"
  correctly matched both "Hallucination" and "RAG" (RAG's own definition mentions hallucinations),
  confirming search checks definition text, not just titles; the empty state and the `#token`
  anchor both confirmed (one test hiccup along the way — a leftover search term from a prior test
  persisted across a same-page SPA navigation, expected behavior once understood, not a bug).
  Desktop true 2-column grid (matching the Phase 4 spec) and mobile no-overflow both confirmed,
  clean production build, and all 3 Homepage "Glossary" links (nav, secondary-link card, footer)
  now resolve instead of hitting the branded 404. Full write-up: `docs/09-development.md`.
  **Only the real email-signup backend remains** — the form currently, honestly, tells visitors
  signups aren't connected yet rather than faking a confirmation.
  **NEXT STEP:** user browses the glossary for real; then either wire up a real free-tier email
  provider (Buttondown/MailerLite) for the footer signup, or move to Phase 10 (responsive/QA pass
  + deploy to Vercel) since all content pages are now done.
- **2026-07-25 (session 2, cont.):** User asked "so all pages are designed and done?" — checking
  rather than assuming surfaced a real gap the "8 locked deliverables" framing had let slip
  through: **`/tools` (Tools Index) and `/about`**, both in the original Phase 3 sitemap and both
  linked live on every page (Homepage's main CTA, nav, footer), were never built — silently
  hitting the branded 404. Neither is one of the "8 deliverables" (that list is tools + content
  pages, not structural nav pages), which is how they got missed while working strictly through
  that list. User said to build whatever's remaining; built both. **Phase 9 Step 10** ✅ done:
  Tools Index (`/tools`, Phase 4 SCREEN 2) reuses the existing `tools` array + `ToolCard`
  component from the Homepage — no new component needed, just the full listing with its own
  header. About (`/about`, Phase 4 SCREEN 7) content pulled directly from the Phase 1 Project
  Brief's own background/problem-statement sections (the real origin story and differentiation),
  not generic filler — stays fully anonymous per the hard constraint. **Verified both pages** (all
  4 tools show "Open" on `/tools`; correct 2×2 desktop / stacked mobile layout; `/about`'s
  Instagram link has the correct URL and safe `rel` attributes; 680px desktop column matching the
  spec exactly) and then did a **full site-wide link sweep** — collected every unique internal
  link on the Homepage and confirmed all of them now resolve to a real page.
  **Every page in the original Phase 3 sitemap is now built. Zero dangling links anywhere on the
  site.** Full write-up: `docs/09-development.md`.
  **NEXT STEP:** only the real email-signup backend remains from the whole original scope. Needs
  a decision from the user (which free-tier provider — Buttondown vs. MailerLite — and creating
  that account), so it's the natural next thing to ask about, alongside Phase 10 (responsive/QA
  pass + deploy to Vercel).
- **2026-07-25 (session 2, cont.):** User asked a second time to look for anything remaining.
  This pass audited what a feature-by-feature build doesn't naturally surface: **ran `npm run
  lint` for the first time all session** and it caught 3 real errors (`react-hooks/set-state-in-effect`)
  in the `Reveal`/`AppearIn` mounted-gate pattern and `Header`'s route-change menu-close — fixed
  properly with a new `useHasMounted()` hook (`useSyncExternalStore`, the React-recommended shape)
  and a render-time state-adjustment pattern, not suppressed. Re-verified all 10 pages for console
  errors after touching those shared components — zero regressions. **Finally verified the mobile
  menu for real** (unverified since Step 2): confirmed via the actual React click handler that it
  opens/closes correctly with all 4 real links; a simulated mouse click didn't register due to a
  Browser-pane compositing limitation in this test session, not an app bug. **Removed dead
  scaffold files** (5 unused default Next.js SVGs, the default favicon — confirmed zero references
  first) and added a real branded `icon.svg`. **Added SEO infrastructure** the Glossary's "also
  SEO" mandate implies site-wide: `sitemap.ts` + `robots.ts` (all 10 real pages), `metadataBase`,
  Open Graph/Twitter metadata, and a theme-color viewport export — all reading from one new
  `site.url` placeholder constant. **Fixed stale docs**: the public-facing root `README.md` still
  said "planned features" for tools that are all built and stopped its phase checklist at Phase 7;
  updated to match reality. `website/README.md` was untouched `create-next-app` boilerplate
  pointing at the wrong port; replaced with real instructions. The branded 404 page's copy ("still
  being built") was accurate mid-build but stale now that all 10 pages exist; reworded to a
  standard not-found message. Clean lint + clean production build confirmed after all changes.
  Full write-up: `docs/09-development.md` (Step 11).
  **Note:** no git repo yet and `assets/`/`design/` still only hold placeholders — both already
  documented in section 9 as deliberately deferred until the user is ready, not overlooked gaps.
  **NEXT STEP:** still just the real email-signup backend (needs a provider decision from the
  user) and Phase 10 (deploy to Vercel + a real device/browser QA pass).
- **2026-07-25 (session 2, cont.):** User tried the AI Prompt Tool for real with "how to tell
  claude to build a website" and got the generic fallback — a real bug, not a false alarm. Then
  asked for a genuinely deep bug-hunt across everything else too, since they can't test it all
  themselves. **Phase 9 Step 12** ✅ done, three real bugs found and fixed:
  1. **Prompt Tool matching too narrow** — the `explain` category only caught "how does", not
     "how to"; there was no category at all for "help me use ChatGPT/Claude to do X." Added a new
     `ai-tool` category (matches named AI assistants specifically, not bare "ai" — which would've
     hijacked huge numbers of unrelated money/career requests from this exact audience), broadened
     `explain`'s phrasing coverage, and reordered all categories into a documented priority ladder
     so the newly-broader `explain` catch-all can't steal inputs that should hit a more specific
     category. **Verified with a real 20-input regression battery** run through the live app (real
     state updates, real submits, real rendered output) — 20/20 passed, including the exact
     originally-reported phrase.
  2. **Grid overflow from unbroken long text** (Subscription Calculator + Savings Planner) — a
     300-character subscription name broke the page layout. Root cause: `md:grid-cols-[3fr_2fr]`
     without `minmax(0, ...)` lets one unshrinkable child (the chart's SVG axis label) force the
     whole grid, and page, wider than the viewport; below `md`, there was no `grid-cols-1` base at
     all. Three earlier fix attempts genuinely did not work and were kept in the dev log honestly
     rather than scrubbed — the real fix only emerged from systematically bisecting the
     reproduction case and checking exactly which breakpoint was under test each time.
  3. **Same overflow bug, independently, in all three search pages'** "no results match" message
     (Library, Templates, Glossary) — a 2000-character search query broke the layout on all three;
     fixed with `break-words`.
  Also re-verified (no new issues): XSS/injection safety by deliberately testing `<script>`/
  `<img onerror>` payloads in every text field site-wide and checking the actual DOM (not just "no
  alert fired"); numeric edge cases (garbage→$0, huge numbers, negative clamping); the Raise
  Builder's 4-reason cap. All 10 pages re-swept for console errors after every fix — zero
  regressions. Stated honestly in the dev log: free keyword matching can never have perfect
  coverage ("should I rent or buy a house" still hits the fallback) — that's this approach's
  permanent, accepted limit per the project's own no-paid-API constraint, not a bug to chase
  forever. Full write-up: `docs/09-development.md` (Step 12).
  **NEXT STEP:** user tries the fixed Prompt Tool again for real; then the real email-signup
  backend and Phase 10 (deploy + device QA) remain the only open items.
- **2026-07-25 (session 2, cont.):** User asked, open-ended, to look for what needs improving.
  Targeted an area not yet specifically tested: keyboard navigation, screen readers, and color
  contrast. **Phase 9 Step 13** ✅ done, 3 real issues found and fixed:
  1. **The skip link didn't actually work** — `<main>` had no `tabindex`, so activating "Skip to
     content" scrolled the page but never moved keyboard focus there (confirmed: focus landed on
     `<body>`). Fixed with `tabIndex={-1}` + `focus:outline-none` on `<main>` (suppresses only the
     ring around that one page-spanning wrapper; the real next focusable element still gets its own
     ring). Re-verified focus lands on `#main` now.
  2. **The brand accent color fails WCAG AA at small text sizes** — computed real contrast ratios
     for every design-system color; `accent` (#E0531E) only reaches 3.59:1 against the background
     (fine for icons/borders at the 3:1 threshold, a real failure for normal text at 4.5:1),
     directly contradicting the Phase 5 design doc's own "all pairs meet AA" claim. This wasn't one
     spot — it's the "Open" label on every tool card, the Copy button text, "Browse X" related
     links, Glossary related-tool links, Library/Templates category tags, the About-page-adjacent
     Instagram link, and the Homepage's secondary CTA. Rather than change the actual brand color
     (used for buttons/icons/borders, which don't need the stricter ratio), computed a darker
     same-hue variant that clears AA with margin (#be471a, 4.74:1) as a second token,
     `--color-accent-text`, and swapped in exactly the real offenders.
  3. **No visible keyboard focus indicator on custom buttons** — Tailwind's preflight resets
     default outlines, and none of the site's buttons had replaced it; tabbing to a filter chip via
     a real keypress showed literally nothing. Fixed with one global `:focus-visible` CSS rule
     (on-brand accent ring) instead of patching every component — covers every interactive element,
     present and future.
  Also checked (already fine): Recharts already sets `aria-hidden="true"` on its own chart SVGs by
  default, so screen readers correctly skip them rather than reading garbled tick text; touch
  targets (40×40 hamburger, 36×36 delete button, 180×44 Add button) all clear the WCAG 24×24
  minimum. Separately added `aria-live="polite"` to the Prompt Tool's and Raise Builder's result
  boxes (a discrete "click Build, get a result" event worth announcing) — deliberately NOT to the
  two calculators' results, which update on every keystroke and would be noisy rather than helpful
  with aria-live. **Methodology note logged:** `.focus()` calls don't reliably trigger
  `:focus-visible` in this browser for testing purposes — real keypresses via the browser tool's
  `computer` action were needed to get a trustworthy result. All 10 pages re-swept for console
  errors, clean lint. Full write-up: `docs/09-development.md` (Step 13).
  **NEXT STEP:** same as before — real email-signup backend (needs a provider decision) and
  Phase 10 (deploy + device QA) are the only remaining open items.
- **2026-07-26 (session 3):** Wired up the **real email-signup backend** — the last of the 8
  original locked deliverables. User chose **MailerLite** (free up to 1,000 subscribers) over
  the initially-recommended Buttondown, after being shown the honest tradeoff (MailerLite is
  heavier to set up but has more headroom). User created the free MailerLite account and
  generated an API key; stored it as `MAILERLITE_API_KEY` in `website/.env.local` (confirmed
  `.env*` is already git-ignored, so the key never touches version control, and the key itself
  was never echoed back in chat once received). Built a server-side API route
  (`src/app/api/subscribe/route.ts`) that validates the email server-side and forwards it to
  MailerLite's `POST /api/subscribers` endpoint with the key kept server-only (never shipped to
  the browser) — the client never sees or handles the API key. Rewrote `EmailSignup.tsx` exactly
  as the original honesty-note comment predicted ("swap in a real free-tier provider and this
  becomes a one-function change — the markup stays exactly as-is"): added real
  idle/loading/success/error states, disabled the input+button during submission and after
  success, and replaced the old "signups aren't open yet" message with a true confirmation.
  Added a new `--color-error` design-system token (`#b3261e`) rather than reaching for an
  off-brand Tailwind red, since the existing 7-color system had no error color yet.
  **Verified with a real end-to-end request, not just code review:** hit a real dev-server
  compilation blocker first (Next.js refuses a second dev server on the same project directory
  even on a different port, a stricter lock than just the port) — resolved by testing directly
  against the already-running shared dev server instead of spinning up a redundant one. Typed a
  real test address into the real form field, clicked the real Join button, and confirmed via
  network inspection a genuine `200 OK` from `/api/subscribe` with MailerLite's own success
  response, the button visibly changing to "Joined," and zero console errors. Clean lint and
  clean `tsc --noEmit` after the change.
  **All 8 original locked deliverables (section 4) are now fully built and live-functional.**
  **NEXT STEP:** Phase 10 — deploy the site live to Vercel (free tier) and do a real
  responsive/device QA pass. This is the last item in the entire original project scope.
- **2026-07-26 (session 3, cont.):** User asked for a final full pre-deploy QA pass — make sure
  the site has zero errors/bugs before going live. Ran the complete gate: clean `tsc --noEmit`,
  clean `npm run lint`, clean production `next build` (all 16 routes compiled, 14 static + 1
  dynamic API route + 1 not-found). Then live-tested every one of the 10 pages against the
  running dev server: all return `200`, zero console errors on any page. **Drove real logic on
  all 4 tools, not just loaded them** — AI Prompt Tool (raise-intent detection correct), Sub­
  scription Calculator (hand-checked math: $15.49/mo + $199/yr → exactly $32.07/mo / $384.88/yr,
  correct priciest-subscription nudge), Savings Planner (re-confirmed the existing 20-month hand
  check), Raise Builder (flexible-work branch correctly produces a different script than the
  raise branch). Confirmed Library's search actually filters (typed "invoice" → exactly 1 card).
  Re-tested the two previously-fixed overflow bugs at mobile width (375px) with a 300-character
  subscription name — still no horizontal scroll, fix holds. Confirmed the 404 page returns a
  real HTTP 404. Verified `/sitemap.xml` and `/robots.txt` both serve correctly (noted, not a
  bug: they use a placeholder `theleveragereport.vercel.app` domain via
  `NEXT_PUBLIC_SITE_URL`, which is an env var to set at actual deploy time, not a code fix).
  Tested the new email-signup API route's edge cases: invalid email → clean `400`, empty/missing
  body → clean `400` in both cases, no server crash. Re-ran an XSS probe
  (`<img onerror>`) through the Prompt Tool textarea — confirmed it does not execute, React's
  escaping holds. **One environment-only hiccup, not a site bug:** the Browser pane wasn't
  visually compositing in this session (same class of issue noted in Step 11/13's dev log), so
  a simulated pixel click on the Prompt Tool's submit button silently didn't land the first two
  tries; worked around by dispatching a real `click` event directly to the button (a genuine DOM
  event, which is what React's handler actually listens for) — confirmed this was a test-tooling
  limitation, not an app defect, since the exact same button dispatch used later in the session
  worked correctly every time. **Zero real bugs found this pass** — the site was already in good
  shape from the prior audits (Steps 11-13); this was a final confirmation gate, not a new
  bug-hunt. Full write-up: `docs/09-development.md`.
  **NEXT STEP:** the site is confirmed clean and ready. Deploy to Vercel (Phase 10) — remaining
  decision: connect a GitHub repo (recommended, gives auto-deploys on push) or a one-off CLI
  deploy; also set `NEXT_PUBLIC_SITE_URL` to the real Vercel URL once assigned.
- **2026-07-26 (session 3, cont.):** **Phase 10 (Deploy) ✅ DONE — the site is live and the
  entire original project scope is complete.** `gh auth status` showed the user already had an
  authenticated GitHub CLI, so with explicit permission (public repo, confirmed via question,
  not assumed) initialized git at the repo root, verified `.env.local`/`node_modules`/build
  artifacts were correctly excluded via the existing `.gitignore` before staging (91 real files
  committed, nothing sensitive), and pushed to a new public repo:
  https://github.com/adityadhanawade/leverage-report-website. User then created a Vercel account
  (Google login, not GitHub-linked — had to separately authorize the Vercel GitHub App to import
  the repo) and worked through the New Project screen live with step-by-step screen-by-screen
  guidance. **One real deploy failure, diagnosed and fixed live:** first deploy failed with
  `Error: No Output Directory named "public" found` — root cause was the **Framework Preset**
  staying on "Other" instead of auto-switching to "Next.js" (a separate field from Root
  Directory, easy to miss since Root Directory was already correctly set to `website`). Walked
  the user to Settings → General → Framework Settings → changed preset to Next.js → redeployed →
  succeeded (the 2 lines flagged as errors in the deploy log were actually yellow warnings about
  `outputFileTracingRoot`/`turbopack.root` mismatch, non-fatal, build compiled fine).
  **Verified the live production deployment for real, not just "Ready" status:** loaded the
  actual `https://leverage-report-website.vercel.app` URL, confirmed zero console errors on both
  the homepage and a tool page, and — the real test — POSTed a genuine request to the live
  `/api/subscribe` route and got back `200 {"ok":true}`, confirming `MAILERLITE_API_KEY` made it
  into the Vercel production environment correctly, not just locally. Then added
  `NEXT_PUBLIC_SITE_URL` as a second env var (Production + Preview) pointing at the real Vercel
  URL, redeployed, and confirmed via a live fetch of `/sitemap.xml` that all 10 URLs now use the
  real domain instead of the placeholder used during local dev.
  **The site is live, functional, and verified end-to-end: https://leverage-report-website.vercel.app**
  **All 8 original locked deliverables + Phases 1-10 are now fully complete.**
  **NEXT STEP:** nothing required from the original scope remains. Natural next options: write
  the final portfolio **Case Study** (Problem → Research → Design decisions & why → Result, per
  section 6), a real device QA pass on the live URL (phone/tablet, not just this session's
  browser tool), or the user simply uses/shares the site as-is.
- **2026-07-26 (session 3, cont.):** Wrote the final portfolio **Case Study** at
  `docs/case-study.md` — Problem → Research → Design decisions & why → Result, per the format
  locked in section 6. Drew directly from the actual Phase 1/2/5 docs and the full PROGRESS LOG
  rather than re-summarizing from memory, so every specific claim (colors, persona details,
  screen/connection counts, the honest-copy-departure decision, the accessibility and bug-hunt
  findings) traces back to a real artifact instead of being invented for the writeup. Also
  brought the public-facing root `README.md` current — it still said "not yet deployed" and
  described the email signup as intentionally disconnected, both stale since this session's
  deploy and MailerLite work; updated the status banner, live-site link, tech stack table, email
  bullet, and phase 9/10 checklist entries, and linked the new Case Study from both the phase
  list and the top status line.
  **NEXT STEP:** nothing remains from the original scope or the portfolio deliverables list.
  Optional future work only: a real device QA pass on the live URL, or user-feedback-driven
  iteration once the site gets real traffic from Instagram (see Case Study §6).
