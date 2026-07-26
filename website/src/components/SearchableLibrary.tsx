"use client";

import { useMemo, useState } from "react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { CopyButton } from "./CopyButton";
import { SearchIcon } from "./Icons";

export type LibraryItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  copyText: string;
};

/**
 * The "search + filter chips + copyable card grid" pattern (Phase 4 SCREEN
 * 5). Extracted after building the Prompt Library, because Phase 4's own doc
 * says the Message Templates page "reuses this exact layout, just different
 * content" — so the layout only exists once, and both pages become thin
 * wrappers that just supply their own content and copy.
 */
export function SearchableLibrary({
  items,
  categories,
  searchPlaceholder,
  emptyLabel,
  searchId,
}: {
  items: LibraryItem[];
  categories: string[];
  searchPlaceholder: string;
  /** e.g. "prompts" or "templates" — used in the search placeholder/empty state. */
  emptyLabel: string;
  searchId: string;
}) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<string>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      const matchesCategory = filter === "All" || item.category === filter;
      const matchesQuery =
        q.length === 0 ||
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.copyText.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [items, query, filter]);

  return (
    <Container className="pb-16">
      <div className="mx-auto max-w-[900px]">
        <div className="relative">
          <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
          <label htmlFor={searchId} className="sr-only">
            Search {emptyLabel}
          </label>
          <input
            id={searchId}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full rounded-control border border-border bg-surface py-3 pl-11 pr-4 font-sans text-[16px] text-ink outline-none transition-colors duration-150 placeholder:text-muted focus:border-accent"
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {["All", ...categories].map((cat) => {
            const active = filter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                aria-pressed={active}
                className={`rounded-full border px-4 py-1.5 font-sans text-[14px] font-medium transition-colors duration-150 ${
                  active
                    ? "border-accent bg-accent text-surface"
                    : "border-border bg-surface text-ink hover:border-accent"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mx-auto mt-10 max-w-[900px] break-words rounded-control border border-dashed border-border p-6 text-center font-sans text-[15px] text-muted">
          No {emptyLabel} match &ldquo;{query}&rdquo; — try a different search
          or category.
        </p>
      ) : (
        <div className="mx-auto mt-8 grid max-w-[1200px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <Reveal key={item.id} delay={(i % 6) * 0.05}>
              <div className="flex h-full flex-col rounded-card border border-border bg-surface p-5">
                <span className="inline-flex w-fit items-center rounded-full bg-accent/10 px-2.5 py-0.5 font-sans text-[11px] font-medium text-accent-text">
                  {item.category}
                </span>
                <h2 className="mt-3 font-heading text-[17px] font-semibold">
                  {item.title}
                </h2>
                <p className="mt-1.5 flex-1 font-sans text-[14px] leading-relaxed text-muted">
                  {item.description}
                </p>
                <div className="mt-4">
                  <CopyButton text={item.copyText} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </Container>
  );
}
