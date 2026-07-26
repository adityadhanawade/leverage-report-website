import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { ToolCard } from "@/components/ToolCard";
import { Icon, CheckIcon, ArrowRightIcon } from "@/components/Icons";
import { secondaryLinks, tools, trustPoints } from "@/lib/site";

/**
 * Homepage — "the launchpad" (Phase 4 SCREEN 1).
 * Section order matches the wireframe exactly:
 * hero → tool cards → trust strip → secondary links → footer.
 */
export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="pt-14 pb-16 md:pt-24 md:pb-20">
        <Container>
          <Reveal className="mx-auto max-w-[760px] text-center">
            <h1 className="font-heading text-[32px] font-bold leading-[1.15] md:text-[56px]">
              Make your money work —
              <br />
              <span className="text-accent">with AI, no fluff.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-[560px] font-sans text-[16px] leading-relaxed text-muted md:text-[18px]">
              Free tools to help you save, earn and grow. No signup, no cost,
              and we tell you what each one can&apos;t do.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link
                href="/tools"
                className="inline-flex items-center justify-center gap-2 rounded-control bg-accent px-6 py-3.5 font-sans text-[16px] font-medium text-surface transition-transform duration-150 hover:scale-[1.02] active:scale-[0.97]"
              >
                Explore the tools
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/tools/prompt"
                className="inline-flex items-center justify-center rounded-control border border-accent bg-surface px-6 py-3.5 font-sans text-[16px] font-medium text-accent-text transition-transform duration-150 hover:scale-[1.02] active:scale-[0.97]"
              >
                Try the prompt tool
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* TOOL CARDS */}
      <section className="pb-16 md:pb-20">
        <Container>
          <Reveal>
            <h2 className="font-sans text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
              What you&apos;ll find
            </h2>
          </Reveal>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {tools.map((tool, i) => (
              <Reveal key={tool.slug} delay={i * 0.06}>
                <ToolCard tool={tool} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* TRUST STRIP */}
      <section className="pb-16 md:pb-20">
        <Container>
          <Reveal>
            <div className="rounded-card border border-border bg-surface p-6 md:p-8">
              <h2 className="font-sans text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
                Why trust this
              </h2>
              <ul className="mt-5 grid gap-5 sm:grid-cols-3">
                {trustPoints.map((point) => (
                  <li key={point.label} className="flex gap-3">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                    <div>
                      <p className="font-heading text-[18px] font-semibold">
                        {point.label}
                      </p>
                      <p className="mt-1 font-sans text-[15px] leading-relaxed text-muted">
                        {point.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* SECONDARY LINKS */}
      <section>
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            {secondaryLinks.map((link, i) => (
              <Reveal key={link.href} delay={i * 0.06}>
                <Link
                  href={link.href}
                  className="group flex h-full items-center gap-4 rounded-card border border-border bg-surface p-5 transition-colors duration-150 hover:border-accent"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-control bg-accent/10 text-accent">
                    <Icon name={link.icon} className="h-6 w-6" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-heading text-[18px] font-semibold">
                      {link.label}
                    </span>
                    <span className="mt-1 block font-sans text-[15px] text-muted">
                      {link.blurb}
                    </span>
                  </span>
                  <ArrowRightIcon className="ml-auto h-5 w-5 shrink-0 text-muted transition-colors duration-150 group-hover:text-accent" />
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
