"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useHasMounted } from "@/hooks/useHasMounted";

/**
 * Appear-on-mount wrapper — Phase 5 motion spec: "Prompt Tool result appears:
 * fade + rise, 350ms." Unlike `Reveal` (scroll-triggered, for content already
 * on the page), this is for content that appears after a user action — e.g.
 * clicking "Build my prompt" — so it animates immediately on mount rather than
 * waiting to scroll into view.
 *
 * Same SSR/hydration-safe `useHasMounted` gate as `Reveal` (see that file for
 * why): render identically to the very first client render, only swap to the
 * reduced-motion path after mount.
 */
export function AppearIn({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const mounted = useHasMounted();
  const prefersReducedMotion = useReducedMotion();

  if (mounted && prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
