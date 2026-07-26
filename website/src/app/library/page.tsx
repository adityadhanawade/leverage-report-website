import type { Metadata } from "next";
import { ToolHeader } from "@/components/ToolHeader";
import { SearchableLibrary } from "@/components/SearchableLibrary";
import { CATEGORIES, prompts } from "@/lib/promptLibrary";

export const metadata: Metadata = {
  title: "Prompt Library",
  description:
    "A searchable set of tested AI prompts for career, money, and freelance work. Free, copy-paste ready.",
};

/**
 * Prompt Library (Phase 4 SCREEN 5). Static curated content — the AI Prompt
 * Tool covers the "generate one for me" case. Layout lives in
 * `SearchableLibrary`, shared with the Message Templates page per Phase 4's
 * own note that the two screens are "this exact layout, just different
 * content."
 */
export default function LibraryPage() {
  return (
    <>
      <ToolHeader
        icon="library"
        title="Prompt Library"
        intro="Tested prompts for career, money, and freelance work — ready to copy."
      />

      <SearchableLibrary
        items={prompts.map((p) => ({
          id: p.id,
          title: p.title,
          category: p.category,
          description: p.description,
          copyText: p.prompt,
        }))}
        categories={CATEGORIES}
        searchPlaceholder="Search prompts…"
        emptyLabel="prompts"
        searchId="library-search"
      />
    </>
  );
}
