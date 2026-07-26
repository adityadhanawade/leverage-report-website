/**
 * Raise & Negotiation Builder — free forever, in-browser, no API.
 *
 * Locked deliverable (PROJECT.md section 4): "role + ask -> ready-to-send
 * script." Unlike the AI Prompt Tool (which writes a *prompt for an AI*),
 * this writes the actual message a visitor can read out loud or paste
 * straight into a chat with their manager — the output is the deliverable
 * itself, not an instruction for something else to generate it.
 *
 * Reuses `ToneValue`/`TONES` from promptEngine.ts rather than redefining an
 * identical tone list — same concept, same options, one source of truth.
 */

import { TONES, type ToneValue } from "./promptEngine";

export { TONES };
export type { ToneValue };

export type AskType = "raise" | "promotion" | "flexible" | "pto" | "custom";

export const ASK_TYPES: { value: AskType; label: string }[] = [
  { value: "raise", label: "A raise" },
  { value: "promotion", label: "A promotion" },
  { value: "flexible", label: "Flexible / remote work" },
  { value: "pto", label: "More time off" },
  { value: "custom", label: "Something else" },
];

const openingLine: Record<AskType, (role: string, detail: string) => string> = {
  raise: (role) =>
    `I'd like to talk about my compensation — specifically, a raise to reflect the impact I've been having${role ? ` as ${role}` : ""}.`,
  promotion: (role) =>
    `I'd like to talk about my growth here — specifically, being considered for a promotion${role ? ` from ${role}` : ""}.`,
  flexible: (_role, detail) =>
    `I'd like to talk about adjusting how I work — specifically, ${detail || "more flexibility in where and when I work"}.`,
  pto: (_role, detail) =>
    `I'd like to talk about my time off — specifically, ${detail || "an increase in my PTO allowance"}.`,
  custom: (_role, detail) =>
    `I'd like to talk about ${detail || "something that matters to me"}.`,
};

const toneClosing: Record<ToneValue, string> = {
  confident: "I'm bringing this up because I believe it's fair, and I'd like to find a way to make it work.",
  friendly: "I really enjoy working here, and I wanted to raise this openly rather than let it sit unsaid.",
  formal: "I would appreciate the opportunity to discuss this further at your convenience.",
  persuasive: "I think this is a change that benefits both of us, and I'd like to walk through why.",
  concise: "Let me know your thoughts.",
};

export type RaiseBuilderInputs = {
  askType: AskType;
  role: string;
  detail: string;
  reasons: string;
  tone: ToneValue;
};

function parseReasons(raw: string): string[] {
  return raw
    .split(/\n|,/)
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(0, 4);
}

/** Returns "" when there isn't enough to build a script from yet. */
export function buildScript(inputs: RaiseBuilderInputs): string {
  const role = inputs.role.trim();
  const detail = inputs.detail.trim();
  const reasons = parseReasons(inputs.reasons);

  if (!role && !detail && reasons.length === 0) return "";

  const lines: string[] = [];
  lines.push(openingLine[inputs.askType](role, detail));

  if (reasons.length > 0) {
    lines.push("");
    lines.push("A few reasons this feels like the right time:");
    for (const reason of reasons) {
      lines.push(`- ${reason}`);
    }
  }

  if (inputs.askType === "raise" || inputs.askType === "promotion") {
    lines.push("");
    lines.push(
      detail
        ? `Specifically, I'm asking for ${detail}.`
        : "I don't have an exact number in mind yet — I'd like to hear what's possible, but I wanted to start the conversation now.",
    );
  }

  lines.push("");
  lines.push(toneClosing[inputs.tone]);

  lines.push("");
  lines.push(
    "If the answer is \"not right now\": that's okay — I'd like to understand what would need to be true to revisit this, and when.",
  );

  return lines.join("\n");
}
