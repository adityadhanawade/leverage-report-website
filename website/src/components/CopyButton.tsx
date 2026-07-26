"use client";

import { useState } from "react";
import { CopyIcon, CheckIcon } from "./Icons";

/**
 * Copy-to-clipboard button. Phase 5 motion spec: "icon morphs to checkmark,
 * reverts after 1.5s." Reusable across any tool/library page with a "Copy"
 * action (Prompt Tool, Prompt Library, Message Templates).
 */
export function CopyButton({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Clipboard API blocked (e.g. no permission) — nothing safe to fall back
      // to, so the button simply stays in its normal "Copy" state.
      return;
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-2 rounded-control border border-accent bg-surface px-5 py-2.5 font-sans text-[15px] font-medium text-accent-text transition-transform duration-150 hover:scale-[1.02] active:scale-[0.97] ${className}`}
    >
      {copied ? (
        <CheckIcon className="h-4 w-4 text-success transition-transform duration-200" />
      ) : (
        <CopyIcon className="h-4 w-4 transition-transform duration-200" />
      )}
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
