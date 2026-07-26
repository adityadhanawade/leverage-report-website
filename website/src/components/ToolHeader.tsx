import type { IconName } from "@/lib/site";
import { Icon } from "./Icons";
import { Container } from "./Container";

/**
 * Tool page header: icon + title + one-line intro. Phase 4 names the AI
 * Prompt Tool screen "the template for all tool pages" — this component is
 * that template, extracted so every tool page (Subscription Calculator,
 * Savings Planner, Raise Builder, …) shares the exact same header shape.
 */
export function ToolHeader({
  icon,
  title,
  intro,
}: {
  icon: IconName;
  title: string;
  intro: string;
}) {
  return (
    <Container className="pt-10 pb-8 md:pt-14 md:pb-10">
      <div className="mx-auto max-w-[600px]">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-control bg-accent/10 text-accent">
          <Icon name={icon} className="h-6 w-6" />
        </span>
        <h1 className="mt-4 font-heading text-[28px] font-bold md:text-[32px]">
          {title}
        </h1>
        <p className="mt-2 font-sans text-[16px] text-muted">{intro}</p>
      </div>
    </Container>
  );
}
