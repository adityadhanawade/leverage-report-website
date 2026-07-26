/**
 * Subscription-Leak Calculator — pure math, kept separate from the UI so the
 * logic is easy to read (and test) on its own.
 */

export type Period = "month" | "year";

export type Subscription = {
  id: string;
  name: string;
  price: string; // kept as the raw input string; parsed on demand
  period: Period;
};

export function emptySubscription(id: string): Subscription {
  return { id, name: "", price: "", period: "month" };
}

/** A subscription's cost normalized to a monthly figure. Invalid/blank price → 0. */
export function monthlyCost(sub: Subscription): number {
  const price = parseFloat(sub.price);
  if (!Number.isFinite(price) || price <= 0) return 0;
  return sub.period === "year" ? price / 12 : price;
}

export function totalMonthly(subs: Subscription[]): number {
  return subs.reduce((sum, s) => sum + monthlyCost(s), 0);
}

export function totalYearly(subs: Subscription[]): number {
  return totalMonthly(subs) * 12;
}

export function formatCurrency(value: number): string {
  const rounded = Math.round(value * 100) / 100;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: Number.isInteger(rounded) ? 0 : 2,
  }).format(rounded);
}

export type ChartPoint = { name: string; monthly: number };

/** Named, positive-cost rows only — what actually belongs on the chart. */
export function chartData(subs: Subscription[]): ChartPoint[] {
  return subs
    .map((s) => ({ name: s.name.trim() || "Unnamed", monthly: monthlyCost(s) }))
    .filter((p) => p.monthly > 0);
}

/**
 * Honesty note: there's no bank data or usage history here, so this can't
 * really "detect" what's unused (unlike the Phase 4 mockup copy implied).
 * Instead it honestly surfaces the priciest subscription(s) as a prompt to
 * go check — a real, useful nudge without pretending to know more than it does.
 */
export function priciestSuggestion(subs: Subscription[]): string | null {
  const points = chartData(subs).sort((a, b) => b.monthly - a.monthly);
  if (points.length === 0) return null;

  const top = points[0];
  const yearly = top.monthly * 12;
  return `Your priciest one is ${top.name} at ${formatCurrency(
    top.monthly,
  )}/month (${formatCurrency(yearly)}/year). Worth asking: do you still use it?`;
}
