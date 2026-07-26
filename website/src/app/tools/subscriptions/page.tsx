"use client";

import { useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { Container } from "@/components/Container";
import { ToolHeader } from "@/components/ToolHeader";
import { AppearIn } from "@/components/AppearIn";
import { CountUp } from "@/components/CountUp";
import { PlusIcon, TrashIcon } from "@/components/Icons";
import {
  chartData,
  emptySubscription,
  formatCurrency,
  priciestSuggestion,
  totalMonthly,
  totalYearly,
  type Period,
  type Subscription,
} from "@/lib/subscriptions";

/**
 * Subscription-Leak Calculator (Phase 4 SCREEN 4).
 * Desktop: inputs on the left, live result panel on the right. Mobile: stacked.
 */
export default function SubscriptionCalculatorPage() {
  const [subs, setSubs] = useState<Subscription[]>(() => [
    emptySubscription("sub-1"),
    emptySubscription("sub-2"),
  ]);
  const nextId = useRef(3);
  const prefersReducedMotion = useReducedMotion();

  function updateSub(id: string, patch: Partial<Subscription>) {
    setSubs((prev) => prev.map((s) => (s.id === id ? { ...s, ...patch } : s)));
  }

  function addSub() {
    setSubs((prev) => [...prev, emptySubscription(`sub-${nextId.current++}`)]);
  }

  function removeSub(id: string) {
    setSubs((prev) => prev.filter((s) => s.id !== id));
  }

  const monthly = totalMonthly(subs);
  const yearly = totalYearly(subs);
  const data = chartData(subs);
  const suggestion = priciestSuggestion(subs);

  return (
    <>
      <ToolHeader
        icon="subscriptions"
        title="Subscription-Leak Calculator"
        intro="Add your subscriptions, see what they're really costing you."
      />

      <Container className="pb-16">
        {/* grid-cols-1 (mobile) and minmax(0, Nfr) tracks (desktop) — not bare
            Nfr, and not omitted below `md` — matter for the same reason: a
            grid track's default automatic minimum size is its content's
            min-content, so any single unshrinkable child (e.g. a chart tick
            rendering a long, unbroken label) can force the whole grid, and
            therefore the whole page, wider than the viewport. Confirmed this
            was a real bug at mobile width specifically — Tailwind's
            `grid-cols-1` already compiles to `minmax(0,1fr)`, unlike the bare
            single implicit column you get with no grid-cols class at all. */}
        <div className="mx-auto grid grid-cols-1 max-w-[1000px] gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-start">
          {/* LEFT — subscription rows */}
          <div>
            <p className="font-sans text-[13px] font-medium uppercase tracking-[0.1em] text-muted">
              Your subscriptions
            </p>

            <ul className="mt-3 flex flex-col gap-3">
              {subs.map((sub) => (
                <li
                  key={sub.id}
                  className="flex flex-wrap items-center gap-2 rounded-card border border-border bg-surface p-3"
                >
                  <label className="sr-only" htmlFor={`${sub.id}-name`}>
                    Subscription name
                  </label>
                  {/* Wrapper carries the flex sizing (min-w-0 lets it shrink
                      below its content's intrinsic width); the input just
                      fills it at 100%. Works together with the grid-level
                      minmax(0, Nfr)/grid-cols-1 fix above: that one stops a
                      long, unbroken name from forcing the whole PAGE wider;
                      this one stops the input from spilling past its own
                      card once the page-level width is already constrained.
                      Confirmed both matter via a 300-character name test. */}
                  <div className="min-w-0 flex-1">
                    <input
                      id={`${sub.id}-name`}
                      type="text"
                      value={sub.name}
                      onChange={(e) =>
                        updateSub(sub.id, { name: e.target.value })
                      }
                      placeholder="Name (e.g. Netflix)"
                      className="w-full rounded-control border border-border bg-background px-3 py-2 font-sans text-[15px] text-ink outline-none transition-colors duration-150 placeholder:text-muted focus:border-accent"
                    />
                  </div>

                  <label className="sr-only" htmlFor={`${sub.id}-price`}>
                    Price
                  </label>
                  <div className="flex items-center gap-1">
                    <span className="font-sans text-[15px] text-muted">
                      $
                    </span>
                    <input
                      id={`${sub.id}-price`}
                      type="number"
                      min="0"
                      step="0.01"
                      inputMode="decimal"
                      value={sub.price}
                      onChange={(e) =>
                        updateSub(sub.id, { price: e.target.value })
                      }
                      placeholder="0"
                      className="w-20 rounded-control border border-border bg-background px-2 py-2 font-sans text-[15px] text-ink outline-none transition-colors duration-150 placeholder:text-muted focus:border-accent"
                    />
                  </div>

                  <label className="sr-only" htmlFor={`${sub.id}-period`}>
                    Billing period
                  </label>
                  <select
                    id={`${sub.id}-period`}
                    value={sub.period}
                    onChange={(e) =>
                      updateSub(sub.id, { period: e.target.value as Period })
                    }
                    className="rounded-control border border-border bg-background px-2 py-2 font-sans text-[15px] text-ink outline-none transition-colors duration-150 focus:border-accent"
                  >
                    <option value="month">/ month</option>
                    <option value="year">/ year</option>
                  </select>

                  <button
                    type="button"
                    onClick={() => removeSub(sub.id)}
                    aria-label={`Remove ${sub.name || "this subscription"}`}
                    className="ml-auto rounded-control p-2 text-muted transition-colors duration-150 hover:text-accent"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={addSub}
              className="mt-4 inline-flex items-center gap-2 rounded-control border border-border bg-surface px-4 py-2.5 font-sans text-[15px] font-medium text-ink transition-colors duration-150 hover:border-accent hover:text-accent"
            >
              <PlusIcon className="h-4 w-4" />
              Add subscription
            </button>
          </div>

          {/* RIGHT — live result panel */}
          <div className="rounded-card border border-border bg-surface p-5 md:sticky md:top-20">
            <p className="font-sans text-[13px] font-medium uppercase tracking-[0.1em] text-muted">
              Result
            </p>

            <p className="mt-3 font-heading text-[36px] font-bold leading-none">
              <CountUp value={monthly} format={formatCurrency} />
              <span className="ml-1 font-sans text-[16px] font-normal text-muted">
                / month
              </span>
            </p>
            <p className="mt-2 font-sans text-[16px] text-muted">
              = <CountUp value={yearly} format={formatCurrency} /> / year
            </p>

            {data.length > 0 ? (
              <div className="mt-5 h-[180px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                    <CartesianGrid vertical={false} stroke="#E5DFD1" />
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 11, fill: "#6E6558" }}
                      axisLine={{ stroke: "#E5DFD1" }}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fontSize: 11, fill: "#6E6558" }}
                      axisLine={false}
                      tickLine={false}
                      width={40}
                    />
                    <Bar
                      dataKey="monthly"
                      fill="#E0531E"
                      radius={[4, 4, 0, 0]}
                      isAnimationActive={!prefersReducedMotion}
                      animationDuration={500}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <p className="mt-5 rounded-control border border-dashed border-border p-4 text-center font-sans text-[14px] text-muted">
                Add a subscription with a name and price to see the breakdown.
              </p>
            )}

            {suggestion && (
              <AppearIn key={suggestion} className="mt-5">
                <p className="flex gap-2 font-sans text-[13px] leading-relaxed text-muted">
                  <span aria-hidden>💡</span>
                  <span className="min-w-0 break-words">{suggestion}</span>
                </p>
              </AppearIn>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
