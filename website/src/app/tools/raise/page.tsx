"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ToolHeader } from "@/components/ToolHeader";
import { AppearIn } from "@/components/AppearIn";
import { CopyButton } from "@/components/CopyButton";
import { ArrowRightIcon } from "@/components/Icons";
import {
  ASK_TYPES,
  TONES,
  buildScript,
  type AskType,
  type ToneValue,
} from "@/lib/raiseBuilder";

/**
 * Raise & Negotiation Builder.
 *
 * No Figma wireframe/mockup exists for this screen (same situation as the
 * Savings Goal Planner — only ever a Tools Index card label). Built here
 * following the locked spec from docs/01-project-brief.md: "role + ask ->
 * ready-to-send script." Uses the explicit "Build" pattern from the AI Prompt
 * Tool (a generated artifact to review and copy), not the Subscription
 * Calculator's live-recalculation pattern — this produces text to send, not a
 * number that should update on every keystroke.
 */
export default function RaiseBuilderPage() {
  const [askType, setAskType] = useState<AskType>("raise");
  const [role, setRole] = useState("");
  const [detail, setDetail] = useState("");
  const [reasons, setReasons] = useState("");
  const [tone, setTone] = useState<ToneValue>("confident");
  const [script, setScript] = useState("");

  const canBuild = role.trim() || detail.trim() || reasons.trim();

  function handleBuild(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canBuild) return;
    setScript(buildScript({ askType, role, detail, reasons, tone }));
  }

  return (
    <>
      <ToolHeader
        icon="raise"
        title="Raise & Negotiation Builder"
        intro="Fill in your ask and your reasons → get a script ready to say out loud."
      />

      <Container className="pb-16">
        <form onSubmit={handleBuild} className="mx-auto flex max-w-[600px] flex-col gap-5">
          <div>
            <label htmlFor="ask-type" className="block font-sans text-[15px] font-medium">
              What are you asking for?
            </label>
            <select
              id="ask-type"
              value={askType}
              onChange={(e) => setAskType(e.target.value as AskType)}
              className="mt-2 w-full rounded-control border border-border bg-surface px-4 py-3 font-sans text-[16px] text-ink outline-none transition-colors duration-150 focus:border-accent"
            >
              {ASK_TYPES.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="role" className="block font-sans text-[15px] font-medium">
              Your role or job title
            </label>
            <input
              id="role"
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="e.g. Marketing Coordinator"
              className="mt-2 w-full rounded-control border border-border bg-surface px-4 py-3 font-sans text-[16px] text-ink outline-none transition-colors duration-150 placeholder:text-muted focus:border-accent"
            />
          </div>

          <div>
            <label htmlFor="detail" className="block font-sans text-[15px] font-medium">
              Any specific number or detail? (optional)
            </label>
            <input
              id="detail"
              type="text"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              placeholder='e.g. "$8,000" or "two remote days a week"'
              className="mt-2 w-full rounded-control border border-border bg-surface px-4 py-3 font-sans text-[16px] text-ink outline-none transition-colors duration-150 placeholder:text-muted focus:border-accent"
            />
          </div>

          <div>
            <label htmlFor="reasons" className="block font-sans text-[15px] font-medium">
              Your top reasons — one per line
            </label>
            <textarea
              id="reasons"
              value={reasons}
              onChange={(e) => setReasons(e.target.value)}
              rows={4}
              placeholder={"e.g.\nLed the Q2 launch that grew signups 20%\nTook on 2 extra clients this year\nHaven't had a raise in 18 months"}
              className="mt-2 w-full rounded-control border border-border bg-surface px-4 py-3 font-sans text-[16px] text-ink outline-none transition-colors duration-150 placeholder:text-muted focus:border-accent"
            />
          </div>

          <div>
            <label htmlFor="tone" className="block font-sans text-[15px] font-medium">
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
          </div>

          <button
            type="submit"
            disabled={!canBuild}
            className="rounded-control bg-accent px-6 py-3.5 font-sans text-[16px] font-medium text-surface transition-transform duration-150 hover:scale-[1.02] active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100 disabled:active:scale-100 md:w-auto md:self-start"
          >
            Build my script
          </button>
        </form>

        {script && (
          <AppearIn className="mx-auto mt-8 max-w-[600px]">
            {/* aria-live: see the identical note in the Prompt Tool page —
                discrete one-time result, not a live-recalculating value. */}
            <div
              role="status"
              aria-live="polite"
              className="rounded-card border border-border bg-surface p-5"
            >
              <p className="font-sans text-[13px] font-medium uppercase tracking-[0.1em] text-muted">
                Your script
              </p>
              <pre className="mt-3 whitespace-pre-wrap break-words font-sans text-[15px] leading-relaxed text-ink">
                {script}
              </pre>
              <div className="mt-4">
                <CopyButton text={script} />
              </div>
            </div>

            <p className="mt-4 flex gap-2 font-sans text-[13px] leading-relaxed text-muted">
              <span aria-hidden>ⓘ</span>
              <span>
                The catch: read this out loud once before you send it — swap
                in real details and cut anything that doesn&apos;t sound like
                you.
              </span>
            </p>
          </AppearIn>
        )}

        <div className="mx-auto mt-10 max-w-[600px] border-t border-border pt-6">
          <Link
            href="/templates"
            className="inline-flex items-center gap-1.5 font-sans text-[15px] font-medium text-accent-text"
          >
            Browse Message Templates
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </>
  );
}
