"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useHasMounted } from "@/hooks/useHasMounted";

/**
 * Scroll-reveal wrapper — Phase 5 motion spec:
 * "Page/section enters view: fade + rise 12px, 400ms, ease-out."
 *
 * Accessibility: when the visitor's OS has "reduce motion" on, content renders
 * instantly in its final position instead of animating.
 *
 * Why the `useHasMounted` gate: `useReducedMotion()` can only read the real
 * value on the client (there's no matchMedia on the server), and it resolves
 * on the client's very first render — before hydration. Branching straight
 * off it made the server output (`motion.div` with inline animation styles)
 * disagree with the client's first render for reduced-motion visitors (`div`,
 * no styles), which React flags as a hydration mismatch. Gating on
 * `useHasMounted()` (false during SSR *and* the client's first render, true
 * only after) keeps that first render identical everywhere; the swap to a
 * reduced-motion `div` then happens as a normal client-only re-render.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
