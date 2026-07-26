"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Animates a number counting up/down to `value` — Phase 5 motion spec:
 * "Calculator result number: count-up animation, 600ms."
 *
 * Only animates on *change*, not on first mount: `display` starts equal to
 * `value` so server and client render the same number on first paint (no
 * hydration mismatch), and the effect below only kicks off a tween once the
 * value has actually moved away from that starting point.
 */
export function CountUp({
  value,
  format,
}: {
  value: number;
  format: (n: number) => string;
}) {
  const [display, setDisplay] = useState(value);
  const prevValue = useRef(value);
  const rafRef = useRef<number | undefined>(undefined);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const from = prevValue.current;
    const to = value;
    prevValue.current = value;

    if (prefersReducedMotion || from === to) {
      setDisplay(to);
      return;
    }

    const duration = 600;
    const start = performance.now();
    cancelAnimationFrame(rafRef.current!);

    function tick(now: number) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      setDisplay(from + (to - from) * eased);
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current!);
  }, [value, prefersReducedMotion]);

  return <>{format(display)}</>;
}
