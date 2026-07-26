"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

/**
 * True once the client has taken over from server-rendered HTML — false
 * during SSR and the client's very first (hydration) render, true on every
 * render after. Used to gate anything that must render identically to the
 * server on that first paint (e.g. reduced-motion branching) and only differ
 * once it's safe to.
 *
 * Built with `useSyncExternalStore` rather than a `useState` + `useEffect`
 * pair — that's the React-recommended shape for "is this the client" and
 * avoids the extra render pass an effect-driven setState causes.
 */
export function useHasMounted(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
