import type { Metadata } from "next";
import { ToolHeader } from "@/components/ToolHeader";
import { SearchableLibrary } from "@/components/SearchableLibrary";
import { CATEGORIES, templates } from "@/lib/messageTemplates";

export const metadata: Metadata = {
  title: "Message Templates",
  description:
    "Ready-made scripts for raises, bills, and outreach — free, copy-paste ready.",
};

/**
 * Message Templates. Phase 4's own wireframe doc says this page "reuses this
 * exact layout, just different content" as the Prompt Library — so it does,
 * via the shared `SearchableLibrary` component.
 */
export default function TemplatesPage() {
  return (
    <>
      <ToolHeader
        icon="templates"
        title="Message Templates"
        intro="Ready-made scripts for raises, bills, and outreach — copy and send."
      />

      <SearchableLibrary
        items={templates.map((t) => ({
          id: t.id,
          title: t.title,
          category: t.category,
          description: t.description,
          copyText: t.message,
        }))}
        categories={CATEGORIES}
        searchPlaceholder="Search templates…"
        emptyLabel="templates"
        searchId="templates-search"
      />
    </>
  );
}
