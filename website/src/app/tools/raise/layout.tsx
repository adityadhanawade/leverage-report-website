import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raise & Negotiation Builder",
  description:
    "Build a ready-to-send script for asking for a raise, promotion, or flexibility. Free, in-browser, no signup.",
};

export default function RaiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
