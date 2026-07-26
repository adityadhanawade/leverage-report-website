import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { ToolCard } from "@/components/ToolCard";
import { tools } from "@/lib/site";

export const metadata: Metadata = {
  title: "All Tools",
  description:
    "Every free AI-money tool in one place — prompts, subscriptions, savings, and raises.",
};

/**
 * Tools Index (Phase 4 SCREEN 2). The Homepage's "Explore the tools" button
 * and the nav's "Tools" link both point here — it was the one page still
 * missing after all 8 locked deliverables were built. Reuses the same
 * `tools` data and `ToolCard` component as the Homepage's preview grid, just
 * as the full list with its own header instead of a "what you'll find" teaser.
 */
export default function ToolsIndexPage() {
  return (
    <Container className="pt-10 pb-16 md:pt-14">
      <Reveal className="mx-auto max-w-[600px] text-center">
        <h1 className="font-heading text-[28px] font-bold md:text-[32px]">
          All Tools
        </h1>
        <p className="mt-2 font-sans text-[16px] text-muted">
          Pick a tool. Each does one job, fast.
        </p>
      </Reveal>

      <div className="mx-auto mt-8 grid max-w-[900px] grid-cols-1 gap-4 sm:grid-cols-2">
        {tools.map((tool, i) => (
          <Reveal key={tool.slug} delay={i * 0.06}>
            <ToolCard tool={tool} />
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
