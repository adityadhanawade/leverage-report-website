/**
 * The AI Prompt Tool's engine — free forever, in-browser, no API calls.
 *
 * This is deliberately NOT a call to a real LLM (per PROJECT.md section 3: the
 * hard constraint is "AI Prompt Tool built the FREE-forever way — in-browser
 * smart templates, no paid API"). Instead it does simple keyword-based intent
 * detection on the visitor's raw text, then fills in a hand-written prompt
 * template built around real prompt-engineering structure (role, context, task,
 * constraints, output format). The "smart" part is picking the right template
 * and writing it well — not machine learning.
 *
 * Category order is a deliberate priority ladder, checked top to bottom
 * (`categories.find` stops at the first match):
 *   1. Strong, specific-domain signals (raise, resume, outreach, a named AI
 *      tool, content, code, money) — narrow keywords, high confidence.
 *   2. `explain` — a deliberately broad "how to / what is" catch-all, kept
 *      SECOND-TO-LAST on purpose: phrases like "how to fix this bug" contain
 *      both a broad signal ("how to") and a strong one ("bug"); putting the
 *      broad category last means the strong, specific category always wins.
 *   3. The generic fallback, for anything with no keyword match at all.
 */

export type ToneValue =
  | "confident"
  | "friendly"
  | "formal"
  | "persuasive"
  | "concise";

export const TONES: { value: ToneValue; label: string }[] = [
  { value: "confident", label: "Confident" },
  { value: "friendly", label: "Friendly" },
  { value: "formal", label: "Formal" },
  { value: "persuasive", label: "Persuasive" },
  { value: "concise", label: "Concise" },
];

const toneLine: Record<ToneValue, string> = {
  confident: "Sound confident and direct — no hedging, no apologizing.",
  friendly:
    "Sound warm and approachable, but still clear about what you want.",
  formal: "Keep the language professional and formal throughout.",
  persuasive: "Lead with the benefit to the reader, then make the ask.",
  concise:
    "Be as short as possible — cut every sentence that isn't doing work.",
};

type Category = {
  id: string;
  test: RegExp;
  build: (input: string, tone: ToneValue) => string;
};

const categories: Category[] = [
  {
    id: "raise",
    test: /\b(raise|promotion|salary|pay ?rise|negotiat\w*|compensation|ask(?:ing)? for more money)\b/i,
    build: (input, tone) => `Act as an experienced compensation coach who has helped hundreds of people negotiate raises.

Here's my situation: ${input}

Write a short script I can say out loud when I ask for this. Include:
1. A confident opening line that states what I want
2. 2-3 specific reasons this is deserved, pulled from what I told you above
3. A clear number or range to ask for (use a placeholder like "$X" if I didn't give one)
4. A calm, ready response in case they say "not right now"

${toneLine[tone]}
Keep the whole script under 150 words and easy to say naturally — not like a formal letter.`,
  },
  {
    id: "resume",
    test: /\b(resume|cv|cover letter|job application)\b/i,
    build: (input, tone) => `Act as a resume writer who has reviewed thousands of applications in this field.

Here's what I need help with: ${input}

Rewrite or draft this so it:
- Leads with the strongest, most specific result (a number if I gave one)
- Cuts vague phrases like "responsible for" and "helped with"
- Uses active verbs and fits a real resume line (under 25 words per bullet)

${toneLine[tone]}
Give me 3 versions I can choose between, not just one.`,
  },
  {
    id: "outreach",
    test: /\b(email|outreach|cold email|follow[ -]?up|reach out|\bdm\b|message|pitch|introduce myself|networking)\b/i,
    build: (input, tone) => `Act as a copywriter who specializes in short, effective outreach messages.

Here's what I'm trying to send: ${input}

Write it so that:
- The first line earns the second line (no generic opener)
- There's exactly one clear ask
- It's short enough to read on a phone in under 15 seconds

${toneLine[tone]}
Give me a subject line too if this is an email.`,
  },
  {
    id: "ai-tool",
    test: /\b(claude|chatgpt|chat gpt|gpt-?[0-9](\.[0-9])?|copilot|gemini|midjourney|perplexity|ai assistant|chatbot)\b/i,
    build: (input, tone) => `Act as a prompt-writing coach who helps people get better results from AI assistants like Claude and ChatGPT.

Here's what I'm trying to get an AI to do: ${input}

Give me:
- A clear, well-structured prompt I can paste directly into the AI, with any context it'll need to do this well
- One follow-up prompt to use if the first result isn't quite right

${toneLine[tone]}
Keep the prompt itself under 120 words so it's easy to paste and edit.`,
  },
  {
    id: "content",
    test: /\b(write|caption|post|script|blog|content|social media|instagram|tiktok|youtube|tweet)\b/i,
    build: (input, tone) => `Act as a content writer who understands what makes people stop scrolling.

Here's what I need written: ${input}

Give me:
- A hook in the first line that earns attention
- The main content, tight and specific (no filler)
- A clear closing line — a question, a call-to-action, or a punchline, whatever fits

${toneLine[tone]}
Give me 2 versions with different hooks.`,
  },
  {
    id: "code",
    // Deliberately covers both "fix this" and "build this from scratch" — the
    // template below is worded to fit either, not just a bug-report shape.
    test: /\b(bug|debug|error|exception|stack ?trace|function|\bapi\b|code|programm\w*|algorithm|website|web ?app|landing page)\b/i,
    build: (input, tone) => `Act as a senior software engineer helping a teammate with this, whether it's something broken to fix or something new to build.

Here's what I'm working on: ${input}

Give me:
- The most direct way to approach it, explained in plain language first
- Example code if relevant, kept minimal and easy to adapt
- One thing to double check or watch out for

${toneLine[tone]}
Assume I can read code — skip unnecessary background explanation.`,
  },
  {
    id: "money",
    test: /\b(budget|save money|spending|subscription|debt|invest\w*|expenses|afford|financial)\b/i,
    build: (input, tone) => `Act as a no-nonsense personal finance advisor — practical, not preachy.

Here's my situation: ${input}

Give me:
- The single biggest lever I'm missing, based on what I told you
- One concrete action I can take this week
- A rough number showing the impact if I do it

${toneLine[tone]}
Skip generic tips like "make a budget" — assume I already know the basics.`,
  },
  {
    id: "explain",
    test: /\b(explain|understand|what is|what are|how does|how do|how to|how can|why does|why is|why do|eli5|learn|teach me)\b/i,
    build: (input, tone) => `Act as a teacher who's great at making hard ideas simple without dumbing them down.

Here's what I want to understand: ${input}

Explain it:
- Starting with a real-world analogy
- Then the actual mechanism, one step at a time
- Ending with why it actually matters to me

${toneLine[tone]}
Check my understanding at the end with one question.`,
  },
];

function fallback(input: string, tone: ToneValue): string {
  return `Act as an expert in whatever this task actually requires — figure out the right expertise from the request below.

Here's what I need: ${input}

Structure your answer as:
1. A one-line summary of what you're about to give me
2. The actual answer — specific and usable, not generic advice
3. One thing I should double check or watch out for

${toneLine[tone]}
If anything in my request is ambiguous, make a reasonable assumption and say what you assumed instead of asking me to clarify.`;
}

/** Returns "" for empty/whitespace-only input — callers should treat that as "nothing to build yet". */
export function buildPrompt(rawInput: string, tone: ToneValue): string {
  const input = rawInput.trim();
  if (!input) return "";

  const category = categories.find((c) => c.test.test(input));
  return (category ?? { build: fallback }).build(input, tone);
}
