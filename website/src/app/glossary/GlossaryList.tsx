"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SearchIcon, ArrowRightIcon } from "@/components/Icons";
import { glossaryTerms } from "@/lib/glossary";

/**
 * Client-side search over the glossary. Split out from page.tsx so the page
 * itself can stay a server component and export `metadata` directly — same
 * reasoning as the Library/Templates refactor in Step 8.
 */
export function GlossaryList() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return glossaryTerms;
    return glossaryTerms.filter(
      (t) =>
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div className="mx-auto max-w-[1000px]">
      <div className="relative">
        <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
        <label htmlFor="glossary-search" className="sr-only">
          Search terms
        </label>
        <input
          id="glossary-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search terms…"
          className="w-full rounded-control border border-border bg-surface py-3 pl-11 pr-4 font-sans text-[16px] text-ink outline-none transition-colors duration-150 placeholder:text-muted focus:border-accent"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 break-words rounded-control border border-dashed border-border p-6 text-center font-sans text-[15px] text-muted">
          No terms match &ldquo;{query}&rdquo; — try a different search.
        </p>
      ) : (
        <dl className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {filtered.map((t, i) => (
            <Reveal key={t.id} delay={(i % 8) * 0.04}>
              <div id={t.id} className="scroll-mt-20 rounded-card border border-border bg-surface p-5">
                <dt className="font-heading text-[18px] font-semibold">
                  {t.term}
                </dt>
                <dd className="mt-1.5 font-sans text-[15px] leading-relaxed text-muted">
                  {t.definition}
                </dd>
                {t.relatedTool && (
                  <Link
                    href={t.relatedTool.href}
                    className="mt-3 inline-flex items-center gap-1.5 font-sans text-[14px] font-medium text-accent-text"
                  >
                    {t.relatedTool.label}
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </Reveal>
          ))}
        </dl>
      )}
    </div>
  );
}
