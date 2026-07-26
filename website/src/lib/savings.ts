/**
 * Savings Goal Planner — pure math, kept separate from the UI (same pattern as
 * promptEngine.ts and subscriptions.ts).
 *
 * Simulates month-by-month balance growth (compound monthly, if a return rate
 * is given) until the goal is hit or a 50-year cap is reached. The cap exists
 * so an impossible goal (e.g. $0/month, 0% return, goal never met) doesn't
 * loop forever — it's reported honestly as "not reached" rather than hidden.
 */

export type SavingsInputs = {
  goalAmount: number;
  currentSavings: number;
  monthlyContribution: number;
  /** Annual return, as a percent (e.g. 5 for 5%). 0 = plain savings, no growth. */
  annualRatePercent: number;
};

export type SavingsPoint = { month: number; balance: number };

export type SavingsResult = {
  /** Was there enough to even compute a plan (goal > 0)? */
  valid: boolean;
  /** Did the simulation reach the goal within the 50-year cap? */
  reached: boolean;
  months: number;
  targetDate: Date | null;
  dataPoints: SavingsPoint[];
};

const MAX_MONTHS = 600; // 50-year cap

export function computeSavingsPlan(inputs: SavingsInputs): SavingsResult {
  const { goalAmount, currentSavings, monthlyContribution, annualRatePercent } =
    inputs;

  if (!Number.isFinite(goalAmount) || goalAmount <= 0) {
    return { valid: false, reached: false, months: 0, targetDate: null, dataPoints: [] };
  }

  const start = Math.max(0, currentSavings);
  const contribution = Math.max(0, monthlyContribution);
  const monthlyRate =
    annualRatePercent > 0 ? annualRatePercent / 100 / 12 : 0;

  const points: SavingsPoint[] = [{ month: 0, balance: start }];

  if (start >= goalAmount) {
    return { valid: true, reached: true, months: 0, targetDate: new Date(), dataPoints: points };
  }

  // Nothing to grow the balance — it will never reach the goal.
  if (contribution <= 0 && monthlyRate <= 0) {
    return { valid: true, reached: false, months: 0, targetDate: null, dataPoints: points };
  }

  let balance = start;
  for (let month = 1; month <= MAX_MONTHS; month++) {
    balance = balance * (1 + monthlyRate) + contribution;
    points.push({ month, balance });
    if (balance >= goalAmount) {
      const targetDate = new Date();
      targetDate.setMonth(targetDate.getMonth() + month);
      return { valid: true, reached: true, months: month, targetDate, dataPoints: points };
    }
  }

  return { valid: true, reached: false, months: MAX_MONTHS, targetDate: null, dataPoints: points };
}

export function formatCurrency(value: number): string {
  const rounded = Math.round(value * 100) / 100;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: Number.isInteger(rounded) ? 0 : 2,
  }).format(rounded);
}

export function formatMonthsAsYears(months: number): string {
  const years = months / 12;
  if (years < 1) return `${months} month${months === 1 ? "" : "s"}`;
  return `${months} month${months === 1 ? "" : "s"} (~${years.toFixed(1)} years)`;
}

export function formatTargetDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(date);
}

/** Keeps the chart readable/performant when the simulation runs long (up to 600 points). */
export function sampleForChart(points: SavingsPoint[], maxPoints = 60): SavingsPoint[] {
  if (points.length <= maxPoints) return points;

  const step = (points.length - 1) / (maxPoints - 1);
  const sampled: SavingsPoint[] = [];
  for (let i = 0; i < maxPoints; i++) {
    sampled.push(points[Math.round(i * step)]);
  }
  return sampled;
}
