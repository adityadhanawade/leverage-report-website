import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subscription-Leak Calculator",
  description:
    "Add your subscriptions and see what they really cost you a year. Free, in-browser, no signup.",
};

export default function SubscriptionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
