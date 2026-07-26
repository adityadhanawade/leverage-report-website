import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Prompt Tool",
  description:
    "Describe your task in plain words and get a prompt built to get a good answer. Free, in-browser, no signup.",
};

export default function PromptToolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
