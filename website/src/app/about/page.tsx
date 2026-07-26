import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { InstagramIcon } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Honest, tested ways to use AI for your money — no fluff, no upsells, everything free.",
};

/**
 * About (Phase 4 SCREEN 7). Stays anonymous per PROJECT.md's hard constraint
 * ("ownership stays private... no personal name/info on it") — the brand
 * story, not the person behind it. Copy draws directly from the Phase 1
 * Project Brief's own background/problem statement rather than generic
 * "About Us" filler.
 */
export default function AboutPage() {
  return (
    <Container className="py-16">
      <Reveal className="mx-auto max-w-[680px]">
        <h1 className="font-heading text-[28px] font-bold md:text-[32px]">
          About {site.name}
        </h1>

        <div className="mt-5 flex flex-col gap-4 font-sans text-[16px] leading-relaxed text-ink">
          <p>
            {site.name} started as an Instagram page sharing short videos
            about using AI to save, earn, and grow money. Instagram is fast —
            but a tip that scrolls by is gone. This site is the permanent
            home for those tips: every idea turned into a tool you can
            actually use, not just watch.
          </p>
          <p>
            Most &ldquo;AI can help your money&rdquo; content stops at the
            idea. It doesn&apos;t give you the exact wording, the exact
            steps, or an honest account of what won&apos;t work. And most
            money sites are cluttered, ad-heavy, or quietly pushing a paid
            product.
          </p>
          <p>
            This is the opposite of that: free tools, no signup wall, no
            sketchy recommendations — and when a tool has a limit, we say so
            instead of hiding it.
          </p>
        </div>

        <a
          href={site.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-control bg-accent px-6 py-3.5 font-sans text-[16px] font-medium text-surface transition-transform duration-150 hover:scale-[1.02] active:scale-[0.97]"
        >
          <InstagramIcon className="h-5 w-5" />
          Follow on Instagram
        </a>
      </Reveal>
    </Container>
  );
}
