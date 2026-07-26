import Link from "next/link";

/**
 * Wordmark. Text-based on purpose: no image request, scales perfectly,
 * stays readable for screen readers, and costs zero KB.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2 ${className}`}
      aria-label="The Leverage Report — home"
    >
      <span
        aria-hidden
        className="h-5 w-1.5 rounded-full bg-accent transition-transform duration-150 group-hover:scale-y-125"
      />
      <span className="font-heading text-[16px] font-bold leading-none tracking-tight">
        The Leverage Report
      </span>
    </Link>
  );
}
