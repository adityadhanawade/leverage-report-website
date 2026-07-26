import Link from "next/link";
import { Container } from "@/components/Container";

/**
 * Branded 404. Originally worded around "still being built" while most pages
 * were genuinely missing (mid-Phase 9). Now that every real page from the
 * sitemap exists (Step 10), that framing was stale — this is a standard
 * broken-link/typo 404, not a "come back later" notice.
 */
export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="font-sans text-[13px] uppercase tracking-[0.12em] text-muted">
        404
      </p>
      <h1 className="mt-3 font-heading text-[32px] font-bold md:text-[40px]">
        Page not found
      </h1>
      <p className="mx-auto mt-4 max-w-[520px] font-sans text-[16px] leading-relaxed text-muted">
        The link that brought you here might be old or mistyped — this page
        doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-control bg-accent px-6 py-3.5 font-sans text-[16px] font-medium text-surface transition-transform duration-150 hover:scale-[1.02] active:scale-[0.97]"
      >
        Back to home
      </Link>
    </Container>
  );
}
