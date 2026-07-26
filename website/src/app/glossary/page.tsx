import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ToolHeader } from "@/components/ToolHeader";
import { GlossaryList } from "./GlossaryList";

export const metadata: Metadata = {
  title: "AI Terms, Decoded",
  description:
    "A plain-English glossary of AI terms — agents, tokens, prompts, MCP, and more. Free, no jargon.",
};

/**
 * AI Terms Glossary (Phase 4 SCREEN 6). Locked deliverable #7: "plain-English
 * AI dictionary... also SEO" — real definitions, alphabetical, searchable.
 * Each term has a stable `id` used as an anchor (`/glossary#token`), so a
 * search engine or a link from another page can point at one specific term.
 */
export default function GlossaryPage() {
  return (
    <>
      <ToolHeader
        icon="glossary"
        title="AI Terms, Decoded"
        intro="Plain-English definitions for the AI words you keep seeing — no jargon."
      />

      <Container className="pb-16">
        <GlossaryList />
      </Container>
    </>
  );
}
