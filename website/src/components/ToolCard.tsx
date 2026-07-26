import Link from "next/link";
import type { Tool } from "@/lib/site";
import { Icon, ArrowRightIcon } from "./Icons";

/**
 * Tool card. Phase 5 motion spec: "Tool card hover — border shifts to accent,
 * 150ms" — done in CSS rather than JS, so it costs nothing and is automatically
 * neutralised by the global reduced-motion rule.
 *
 * Tools that aren't built yet render as a non-clickable card with a visible
 * "Coming soon" tag instead of a link to a 404 — honest over impressive.
 */
export function ToolCard({ tool }: { tool: Tool }) {
  const inner = (
    <>
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-control bg-accent/10 text-accent">
        <Icon name={tool.icon} className="h-6 w-6" />
      </span>

      <span className="mt-4 flex items-center gap-2">
        <span className="font-heading text-[18px] font-semibold">
          {tool.name}
        </span>
        {!tool.ready && (
          <span className="rounded-full border border-border px-2 py-0.5 font-sans text-[11px] text-muted">
            Coming soon
          </span>
        )}
      </span>

      <span className="mt-2 font-sans text-[15px] leading-relaxed text-muted">
        {tool.blurb}
      </span>

      {tool.ready && (
        <span className="mt-4 inline-flex items-center gap-1.5 font-sans text-[15px] font-medium text-accent-text">
          Open
          <ArrowRightIcon className="h-4 w-4" />
        </span>
      )}
    </>
  );

  const shared =
    "flex h-full flex-col rounded-card border border-border bg-surface p-5";

  if (!tool.ready) {
    return <div className={shared}>{inner}</div>;
  }

  return (
    <Link
      href={tool.href}
      className={`${shared} transition-colors duration-150 hover:border-accent`}
    >
      {inner}
    </Link>
  );
}
