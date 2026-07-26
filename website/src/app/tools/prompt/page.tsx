"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ToolHeader } from "@/components/ToolHeader";
import { AppearIn } from "@/components/AppearIn";
import { CopyButton } from "@/components/CopyButton";
import { ArrowRightIcon } from "@/components/Icons";
import { buildPrompt, TONES, type ToneValue } from "@/lib/promptEngine";

// Client components can't export `metadata` — title is set via the nearest
// server-rendered ancestor instead. See src/app/tools/prompt/layout.tsx.

/**
 * AI Prompt Tool (⭐ star feature — Phase 4 SCREEN 3).
 * Free forever: the "smart template" engine in `lib/promptEngine.ts` runs
 * entirely in the browser, no API call, no cost.
 */
export default function PromptToolPage() {
  const [input, setInput] = useState("");
  const [tone, setTone] = useState<ToneValue>("confident");
  const [result, setResult] = useState("");

  const canBuild = input.trim().length > 0;

  function handleBuild(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canBuild) return;
    setResult(buildPrompt(input, tone));
  }

  return (
    <>
      <ToolHeader
        icon="prompt"
        title="AI Prompt Tool"
        intro="Describe your task in plain words → get a prompt built to get a good answer."
      />

      <Container className="pb-16">
        <form onSubmit={handleBuild} className="mx-auto max-w-[600px]">
          <label
            htmlFor="prompt-input"
            className="block font-sans text-[15px] font-medium"
          >
            What do you need help with?
          </label>
          <textarea
            id="prompt-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={4}
            placeholder='e.g. "help me ask for a raise" or "explain how APIs work"'
            className="mt-2 w-full rounded-control border border-border bg-surface px-4 py-3 font-sans text-[16px] text-ink outline-none transition-colors duration-150 placeholder:text-muted focus:border-accent"
          />

          <label
            htmlFor="tone"
            className="mt-5 block font-sans text-[15px] font-medium"
          >
            Tone
          </label>
          <select
            id="tone"
            value={tone}
            onChange={(e) => setTone(e.target.value as ToneValue)}
            className="mt-2 w-full rounded-control border border-border bg-surface px-4 py-3 font-sans text-[16px] text-ink outline-none transition-colors duration-150 focus:border-accent md:w-auto"
          >
            {TONES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>

          <button
            type="submit"
            disabled={!canBuild}
            className="mt-6 w-full rounded-control bg-accent px-6 py-3.5 font-sans text-[16px] font-medium text-surface transition-transform duration-150 hover:scale-[1.02] active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100 disabled:active:scale-100 md:w-auto"
          >
            Build my prompt
          </button>
        </form>

        {result && (
          <AppearIn className="mx-auto mt-8 max-w-[600px]">
            {/* aria-live="polite": announces the result to screen readers once
                it appears after clicking Build — a discrete, one-time event,
                unlike the calculators' live-recalculating results (which
                intentionally do NOT use aria-live, since announcing every
                keystroke change would be noisy rather than helpful). */}
            <div
              role="status"
              aria-live="polite"
              className="rounded-card border border-border bg-surface p-5"
            >
              <p className="font-sans text-[13px] font-medium uppercase tracking-[0.1em] text-muted">
                Your prompt
              </p>
              <pre className="mt-3 whitespace-pre-wrap break-words font-sans text-[15px] leading-relaxed text-ink">
                {result}
              </pre>
              <div className="mt-4">
                <CopyButton text={result} />
              </div>
            </div>

            <p className="mt-4 flex gap-2 font-sans text-[13px] leading-relaxed text-muted">
              <span aria-hidden>ⓘ</span>
              <span>
                The catch: this works best if you swap in your real details —
                names, numbers, your exact situation — before you send it.
              </span>
            </p>
          </AppearIn>
        )}

        <div className="mx-auto mt-10 max-w-[600px] border-t border-border pt-6">
          <Link
            href="/library"
            className="inline-flex items-center gap-1.5 font-sans text-[15px] font-medium text-accent-text"
          >
            Browse the Prompt Library
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </>
  );
}
