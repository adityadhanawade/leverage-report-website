import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Savings Goal Planner",
  description:
    "Set a goal and a monthly saving amount, see exactly when you'll get there. Free, in-browser, no signup.",
};

export default function SavingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
