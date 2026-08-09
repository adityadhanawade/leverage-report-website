# The Leverage Report — AI-Money Toolkit

> A free, honest web app that turns "AI can help your money" into simple tools you can use in
> two minutes. Designed and built end-to-end as a solo project — from UX research to a
> deployed, responsive Next.js application.

**✅ Status: Live and fully deployed.** Follow the full design & build process in [`/docs`](docs),
or read the [**Case Study**](docs/case-study.md) for the short version.

**🔗 Live site:** https://theleveragereport.me

---

## What this project is
The Leverage Report is a brand offering practical, no-fluff ways to make, save, and grow money
with AI. This repository is its website — **and a deliberate, documented portfolio project**
that demonstrates both **UI/UX design** and **full-stack development**, taken through the real
professional product process rather than jumping straight to code.

## The problem it solves
People hear "AI can help you with money," but they don't know the exact steps, useful tips vanish
in the social-media feed, and most money sites are fluff, ads, or scams. **There's no simple,
honest, free place that turns the idea into tools you can actually use.** This site is that place.

## What a visitor can do
- 🤖 **AI Prompt Tool** — turn a rough request into a perfectly-worded, copy-ready prompt, built
  with a free-forever in-browser template engine (no paid AI API)
- 💸 **Subscription-Leak Calculator** — see how much money silently leaks each year, with a live
  animated breakdown chart
- 🎯 **Savings Goal Planner** — set a goal and a monthly amount, see exactly when you'll get there
- 💬 **Raise / Negotiation Script Builder** — get a ready-to-send script for asking to be paid more
- 📋 **Prompt Library** + **Message Templates** — 13 + 12 tested prompts/scripts, searchable,
  copy-and-use
- 📖 **AI Terms Glossary** — 16 plain-English AI term definitions, also the site's SEO entry point
- ✉️ **Weekly email signup** — connected to a real provider (MailerLite) via a server-side API
  route; the key is never exposed to the browser (see `website/src/app/api/subscribe/route.ts`)

Every page is responsive (mobile + desktop), animated with Framer Motion (honoring
`prefers-reduced-motion`), and built from a shared Figma design system.

## Tech stack
| Area | Tools |
|---|---|
| **Design** | Figma (wireframes, design system, high-fidelity mockups, prototype) |
| **Frontend** | Next.js · React · TypeScript · Tailwind CSS |
| **Motion** | Framer Motion |
| **Charts** | Recharts |
| **Email** | MailerLite (server-side API route) |
| **Hosting** | Vercel — **[live →](https://theleveragereport.me)** |

## The process (how this was built)
This project follows a real 10-phase product workflow. Each phase is documented in [`/docs`](docs):

1. [Project Brief](docs/01-project-brief.md) — problem, users, goals, scope ✅
2. [Research](docs/02-research.md) — proto-personas + competitor analysis ✅
3. [Information Architecture](docs/03-information-architecture.md) — sitemap & user flows ✅
4. [Wireframes](docs/04-wireframes.md) — ✅ 14 screens (mobile + desktop), built in Figma: **[live file →](https://www.figma.com/design/nLgaNdrpRv8b15FU8PwEzc)**
5. [Design System](docs/05-design-system.md) — ✅ color tokens + type scale, built in Figma
6. [High-Fidelity Mockups](docs/06-high-fidelity-mockups.md) — ✅ 14 screen variants (mobile + desktop) built in Figma
7. [Prototype](docs/07-prototype.md) — ✅ 53 click connections, two independent responsive flows, try it in Figma Present mode
8. [Usability Testing](docs/08-usability-testing.md) — 🚧 in progress: Round 1 done (3 of 5 tasks), Round 2 planned
9. [Development](docs/09-development.md) — ✅ **all 10 pages built**: Homepage, all 4 tools, Prompt Library, Message Templates, Glossary, Tools Index, About
10. Testing & deployment — ✅ full pre-deploy QA pass, deployed live to Vercel
+ [**Case Study**](docs/case-study.md) — the full story, Problem → Research → Design decisions → Result

## Repository structure
```
leverage-report-website/
├── README.md      ← you are here (public project overview)
├── PROJECT.md     ← internal working log & source of truth
├── docs/          ← the design & process documentation (the "why")
├── design/        ← Figma exports: wireframes, mockups, design system
├── website/       ← the Next.js application code
└── assets/        ← screenshots & images
```

---
*Built by a 3rd-year B.Tech CSE student as a portfolio project. Designed for a Western audience;
personas are honestly documented as assumption-based proto-personas grounded in real audience data.*
