"use client";

import { useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { Container } from "@/components/Container";
import { ToolHeader } from "@/components/ToolHeader";
import { AppearIn } from "@/components/AppearIn";
import { CountUp } from "@/components/CountUp";
import {
  computeSavingsPlan,
  formatCurrency,
  formatMonthsAsYears,
  formatTargetDate,
  sampleForChart,
} from "@/lib/savings";

/**
 * Savings Goal Planner.
 *
 * No Figma wireframe/mockup exists for this screen — it only ever appeared as
 * a Tools Index card label (confirmed against docs/04-wireframes.md and
 * docs/07-prototype.md's own "known gaps" note). Designed here from scratch,
 * following the same conventions as the built Subscription Calculator (live
 * recalculation, two-column layout, chart) and the locked spec from
 * docs/01-project-brief.md: "goal + monthly saving -> timeline + chart."
 */
export default function SavingsPlannerPage() {
  const [goalAmount, setGoalAmount] = useState("");
  const [currentSavings, setCurrentSavings] = useState("0");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [annualRate, setAnnualRate] = useState("0");
  const prefersReducedMotion = useReducedMotion();

  const plan = useMemo(
    () =>
      computeSavingsPlan({
        goalAmount: parseFloat(goalAmount) || 0,
        currentSavings: parseFloat(currentSavings) || 0,
        monthlyContribution: parseFloat(monthlyContribution) || 0,
        annualRatePercent: parseFloat(annualRate) || 0,
      }),
    [goalAmount, currentSavings, monthlyContribution, annualRate],
  );

  const chartPoints = useMemo(
    () => sampleForChart(plan.dataPoints).map((p) => ({ ...p, month: p.month })),
    [plan.dataPoints],
  );

  return (
    <>
      <ToolHeader
        icon="savings"
        title="Savings Goal Planner"
        intro="Set a goal and what you can save each month — see exactly when you'll get there."
      />

      <Container className="pb-16">
        {/* grid-cols-1 + minmax(0, Nfr) — see the identical fix + explanation
            in the Subscription Calculator page; same grid-blowout risk here
            via the savings chart's month-axis labels, confirmed at mobile
            width specifically. */}
        <div className="mx-auto grid grid-cols-1 max-w-[1000px] gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-start">
          {/* LEFT — inputs */}
          <div className="flex flex-col gap-4">
            <Field label="What are you saving for?" htmlFor="goal-amount">
              <div className="flex items-center gap-1">
                <span className="font-sans text-[15px] text-muted">$</span>
                <input
                  id="goal-amount"
                  type="number"
                  min="0"
                  step="1"
                  inputMode="decimal"
                  value={goalAmount}
                  onChange={(e) => setGoalAmount(e.target.value)}
                  placeholder="e.g. 5000"
                  className="w-full rounded-control border border-border bg-surface px-4 py-3 font-sans text-[16px] text-ink outline-none transition-colors duration-150 placeholder:text-muted focus:border-accent"
                />
              </div>
            </Field>

            <Field label="How much have you already saved?" htmlFor="current-savings">
              <div className="flex items-center gap-1">
                <span className="font-sans text-[15px] text-muted">$</span>
                <input
                  id="current-savings"
                  type="number"
                  min="0"
                  step="1"
                  inputMode="decimal"
                  value={currentSavings}
                  onChange={(e) => setCurrentSavings(e.target.value)}
                  className="w-full rounded-control border border-border bg-surface px-4 py-3 font-sans text-[16px] text-ink outline-none transition-colors duration-150 placeholder:text-muted focus:border-accent"
                />
              </div>
            </Field>

            <Field label="How much can you save each month?" htmlFor="monthly-contribution">
              <div className="flex items-center gap-1">
                <span className="font-sans text-[15px] text-muted">$</span>
                <input
                  id="monthly-contribution"
                  type="number"
                  min="0"
                  step="1"
                  inputMode="decimal"
                  value={monthlyContribution}
                  onChange={(e) => setMonthlyContribution(e.target.value)}
                  placeholder="e.g. 200"
                  className="w-full rounded-control border border-border bg-surface px-4 py-3 font-sans text-[16px] text-ink outline-none transition-colors duration-150 placeholder:text-muted focus:border-accent"
                />
              </div>
            </Field>

            <Field
              label="Expected annual return (optional)"
              htmlFor="annual-rate"
              hint="Leave at 0% for a plain savings account. Only add a rate if you're investing it."
            >
              <div className="flex items-center gap-1">
                <input
                  id="annual-rate"
                  type="number"
                  min="0"
                  step="0.1"
                  inputMode="decimal"
                  value={annualRate}
                  onChange={(e) => setAnnualRate(e.target.value)}
                  className="w-full rounded-control border border-border bg-surface px-4 py-3 font-sans text-[16px] text-ink outline-none transition-colors duration-150 placeholder:text-muted focus:border-accent"
                />
                <span className="font-sans text-[15px] text-muted">%</span>
              </div>
            </Field>
          </div>

          {/* RIGHT — live result panel */}
          <div className="rounded-card border border-border bg-surface p-5 md:sticky md:top-20">
            <p className="font-sans text-[13px] font-medium uppercase tracking-[0.1em] text-muted">
              Your timeline
            </p>

            {!plan.valid && (
              <p className="mt-4 font-sans text-[15px] leading-relaxed text-muted">
                Enter a goal amount to see your timeline.
              </p>
            )}

            {plan.valid && plan.months === 0 && plan.reached && (
              <AppearIn className="mt-4">
                <p className="font-heading text-[22px] font-bold text-success">
                  You&apos;re already there 🎉
                </p>
                <p className="mt-1 font-sans text-[15px] text-muted">
                  Your current savings already cover this goal.
                </p>
              </AppearIn>
            )}

            {plan.valid && !plan.reached && (
              <AppearIn className="mt-4">
                <p className="font-sans text-[15px] leading-relaxed text-muted">
                  {parseFloat(monthlyContribution) > 0
                    ? "At this rate, you won't hit this goal within 50 years. Try a higher monthly amount or a longer view."
                    : "With $0/month and no return, this goal is never reached on its own — add a monthly amount to see a timeline."}
                </p>
              </AppearIn>
            )}

            {plan.valid && plan.reached && plan.months > 0 && (
              <AppearIn className="mt-3">
                <p className="font-heading text-[36px] font-bold leading-none">
                  <CountUp value={plan.months} format={(n) => Math.round(n).toString()} />
                  <span className="ml-1 font-sans text-[16px] font-normal text-muted">
                    months
                  </span>
                </p>
                <p className="mt-2 font-sans text-[16px] text-muted">
                  {formatMonthsAsYears(plan.months)} — around{" "}
                  {plan.targetDate && formatTargetDate(plan.targetDate)}
                </p>
              </AppearIn>
            )}

            {chartPoints.length > 1 && (
              <div className="mt-5 h-[180px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={chartPoints}
                    margin={{ top: 4, right: 4, left: -20, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="savingsFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#E0531E" stopOpacity={0.25} />
                        <stop offset="100%" stopColor="#E0531E" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} stroke="#E5DFD1" />
                    <XAxis
                      dataKey="month"
                      tick={{ fontSize: 11, fill: "#6E6558" }}
                      axisLine={{ stroke: "#E5DFD1" }}
                      tickLine={false}
                      tickFormatter={(m) => `${m}mo`}
                    />
                    <YAxis
                      tick={{ fontSize: 11, fill: "#6E6558" }}
                      axisLine={false}
                      tickLine={false}
                      width={40}
                      tickFormatter={(v) => formatCurrency(v)}
                    />
                    {plan.valid && parseFloat(goalAmount) > 0 && (
                      <ReferenceLine
                        y={parseFloat(goalAmount)}
                        stroke="#3B7A3F"
                        strokeDasharray="4 4"
                      />
                    )}
                    <Area
                      type="monotone"
                      dataKey="balance"
                      stroke="#E0531E"
                      strokeWidth={2}
                      fill="url(#savingsFill)"
                      isAnimationActive={!prefersReducedMotion}
                      animationDuration={500}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}

function Field({
  label,
  htmlFor,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block font-sans text-[15px] font-medium">
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {hint && (
        <p className="mt-1.5 font-sans text-[13px] text-muted">{hint}</p>
      )}
    </div>
  );
}
