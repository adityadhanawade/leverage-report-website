import type { IconName } from "@/lib/site";

/**
 * Hand-rolled inline SVG icons.
 *
 * Phase 6 recommendation #2: the mockups used emoji (🤖 💸 …), which render
 * inconsistently across Figma, browsers and operating systems. Real vector icons
 * are used in the coded build instead — they inherit `currentColor`, scale
 * cleanly, and look identical everywhere. No icon library needed (zero KB added).
 */

type Props = React.SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/** AI Prompt Tool — a spark / wand. */
export function PromptIcon(props: Props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  );
}

/** Subscription-Leak Calculator — a card with a recurring arrow. */
export function SubscriptionsIcon(props: Props) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M2.5 9.5h19" />
      <path d="M7 15.5h3.5" />
      <path d="M17.5 13.5a2.5 2.5 0 1 1-.9-1.9" />
      <path d="M17.2 11v1.9h-1.9" />
    </svg>
  );
}

/** Savings Goal Planner — a target. */
export function SavingsIcon(props: Props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

/** Raise & Negotiation Builder — a speech bubble. */
export function RaiseIcon(props: Props) {
  return (
    <svg {...base} {...props}>
      <path d="M20.5 12.5a7.5 7.5 0 0 1-7.5 7.5H5.2L3.5 21.5V12.5a7.5 7.5 0 0 1 7.5-7.5h2a7.5 7.5 0 0 1 7.5 7.5Z" />
      <path d="M8.5 11.5h7M8.5 15h4.5" />
    </svg>
  );
}

/** Prompt Library — a stack of cards. */
export function LibraryIcon(props: Props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="12" height="14" rx="2" />
      <path d="M18 6.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8.5a2 2 0 0 1-2-2" />
      <path d="M6.5 7.5h5M6.5 11h5" />
    </svg>
  );
}

/** Message Templates — a document with a folded corner and ready-made lines. */
export function TemplatesIcon(props: Props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3.5h9l4 4V19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19V5A1.5 1.5 0 0 1 6 3.5Z" />
      <path d="M15 3.5V7a1 1 0 0 0 1 1h3" />
      <path d="M8.5 12.5h7M8.5 15.5h4.5" />
    </svg>
  );
}

/** Glossary — an open book. */
export function GlossaryIcon(props: Props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 6.5C10.5 5 8.5 4.5 4 4.5v13c4.5 0 6.5.5 8 2 1.5-1.5 3.5-2 8-2v-13c-4.5 0-6.5.5-8 2Z" />
      <path d="M12 6.5v13" />
    </svg>
  );
}

export function CheckIcon(props: Props) {
  return (
    <svg {...base} strokeWidth={2.25} {...props}>
      <path d="M4.5 12.5l5 5 10-11" />
    </svg>
  );
}

export function CopyIcon(props: Props) {
  return (
    <svg {...base} {...props}>
      <rect x="8.5" y="8.5" width="12" height="12" rx="2" />
      <path d="M15.5 8.5V6a2 2 0 0 0-2-2H5.5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5" />
    </svg>
  );
}

export function SearchIcon(props: Props) {
  return (
    <svg {...base} {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M19.5 19.5l-4.35-4.35" />
    </svg>
  );
}

export function TrashIcon(props: Props) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 7h15M9.5 7V5a1.5 1.5 0 0 1 1.5-1.5h2A1.5 1.5 0 0 1 14.5 5v2" />
      <path d="M6.5 7l1 12.5a2 2 0 0 0 2 1.85h5a2 2 0 0 0 2-1.85l1-12.5" />
      <path d="M10.5 11v6M13.5 11v6" />
    </svg>
  );
}

export function PlusIcon(props: Props) {
  return (
    <svg {...base} strokeWidth={2} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function ArrowRightIcon(props: Props) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 12h15M13.5 6l6 6-6 6" />
    </svg>
  );
}

export function MailIcon(props: Props) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="M3.5 7l7.4 5.3a2 2 0 0 0 2.2 0L20.5 7" />
    </svg>
  );
}

export function InstagramIcon(props: Props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MenuIcon(props: Props) {
  return (
    <svg {...base} strokeWidth={2} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: Props) {
  return (
    <svg {...base} strokeWidth={2} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

const iconMap: Record<IconName, (props: Props) => React.ReactElement> = {
  prompt: PromptIcon,
  subscriptions: SubscriptionsIcon,
  savings: SavingsIcon,
  raise: RaiseIcon,
  library: LibraryIcon,
  templates: TemplatesIcon,
  glossary: GlossaryIcon,
};

/** Look an icon up by the name stored in `site.ts`. */
export function Icon({ name, ...props }: { name: IconName } & Props) {
  const Component = iconMap[name];
  return <Component {...props} />;
}
