/**
 * Single source of truth for site-wide content.
 * Nav, tools and links are defined once here and consumed by every component,
 * so the header, footer, homepage and /tools page can never drift apart.
 */

export const site = {
  name: "The Leverage Report",
  tagline: "No fluff. Honest. Only what actually works.",
  instagramHandle: "@the.leverage.report",
  instagramUrl: "https://www.instagram.com/the.leverage.report/",
  /**
   * Placeholder until Phase 10 deploy — a free *.vercel.app subdomain per
   * PROJECT.md's hard constraint (no paid domain required). Update this one
   * line (or set NEXT_PUBLIC_SITE_URL) once the real deploy URL exists;
   * metadataBase, sitemap.ts, and robots.ts all read from here.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://theleveragereport.vercel.app",
} as const;

export type IconName =
  | "prompt"
  | "subscriptions"
  | "savings"
  | "raise"
  | "library"
  | "templates"
  | "glossary";

export type Tool = {
  slug: string;
  href: string;
  name: string;
  shortName: string;
  blurb: string;
  icon: IconName;
  /** Built yet? Unbuilt tools are shown but honestly marked, never faked. */
  ready: boolean;
};

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
  {
    slug: "subscriptions",
    href: "/tools/subscriptions",
    name: "Subscription-Leak Calculator",
    shortName: "Sub. Calculator",
    blurb: "Add your subscriptions and see what they really cost you a year.",
    icon: "subscriptions",
    ready: true,
  },
  {
    slug: "savings",
    href: "/tools/savings",
    name: "Savings Goal Planner",
    shortName: "Savings Planner",
    blurb: "Set a goal, set what you save, see exactly when you get there.",
    icon: "savings",
    ready: true,
  },
  {
    slug: "raise",
    href: "/tools/raise",
    name: "Raise & Negotiation Builder",
    shortName: "Raise Builder",
    blurb: "Build a ready-to-send script for asking to be paid more.",
    icon: "raise",
    ready: true,
  },
];

export const navLinks = [
  { href: "/tools", label: "Tools" },
  { href: "/library", label: "Library" },
  { href: "/templates", label: "Templates" },
  { href: "/glossary", label: "Glossary" },
] as const;

export const secondaryLinks = [
  {
    href: "/library",
    label: "Prompt Library",
    blurb: "Tested prompts, ready to copy",
    icon: "library" as IconName,
  },
  {
    href: "/glossary",
    label: "AI Terms, Decoded",
    blurb: "Plain-English AI dictionary",
    icon: "glossary" as IconName,
  },
];

export const trustPoints = [
  { label: "Free", detail: "Every tool, forever. No account needed." },
  { label: "Honest", detail: "We say what each tool can't do, too." },
  { label: "Tested", detail: "Nothing gets published until it works." },
];
