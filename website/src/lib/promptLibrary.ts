/**
 * Prompt Library — a real, hand-written set of tested prompts (locked
 * deliverable #5: "searchable set of tested prompts"). Static content, no
 * generation involved — the AI Prompt Tool covers the generated case.
 *
 * Every prompt uses [bracket placeholders] for anything personal, so
 * copying one is never pretending to already know the visitor's details.
 */

export type PromptCategory = "Career" | "Money" | "Freelance";

export type LibraryPrompt = {
  id: string;
  title: string;
  category: PromptCategory;
  description: string;
  prompt: string;
};

export const CATEGORIES: PromptCategory[] = ["Career", "Money", "Freelance"];

export const prompts: LibraryPrompt[] = [
  {
    id: "resume-bullet",
    title: "Rewrite a weak resume bullet",
    category: "Career",
    description: "Turn a vague duty into a result-first line that fits a real resume.",
    prompt:
      "Act as a resume writer. Rewrite this bullet point so it leads with a specific result, cuts filler words like \"responsible for,\" and fits on one line:\n\n[paste your current bullet point]\n\nGive me 3 versions, ranked from most to least impactful.",
  },
  {
    id: "interview-prep",
    title: "Prep for a job interview",
    category: "Career",
    description: "Get likely questions and strong answers built from your real background.",
    prompt:
      "Act as a hiring manager for a [job title] role at a [company type, e.g. mid-size SaaS company]. I'm interviewing for this role. My background: [1-2 sentences about your experience].\n\nGive me the 5 questions you're most likely to ask, and for each one, a short outline of a strong answer using my background above.",
  },
  {
    id: "linkedin-headline",
    title: "Write a LinkedIn headline + About section",
    category: "Career",
    description: "Replace a generic title-only headline with one that actually gets clicks.",
    prompt:
      "Act as a LinkedIn profile writer. Here's what I do: [role + what you actually help with, 1-2 sentences]. Here's a recent result I'm proud of: [a number or outcome, if you have one].\n\nWrite:\n1. Three headline options (under 220 characters, no clichés like \"passionate\" or \"synergy\")\n2. A 3-paragraph About section — hook, what I do, how to reach me",
  },
  {
    id: "cover-letter",
    title: "Turn messy notes into a cover letter",
    category: "Career",
    description: "Feed it bullet points, get back an actual letter — not the other way around.",
    prompt:
      "Act as a cover letter writer. I'm applying for [job title] at [company]. Here are my rough notes on why I'm a fit:\n\n[paste bullet points, doesn't need to be organized]\n\nTurn this into a 3-paragraph cover letter: an opening that isn't generic, a middle that connects my notes to what they're likely looking for, and a short closing. Keep it under 250 words.",
  },
  {
    id: "rejection-feedback",
    title: "Ask for feedback after a rejection",
    category: "Career",
    description: "A short, professional message that actually gets a reply.",
    prompt:
      "Act as a career coach. I just got rejected from a [job title] role after [how far you got, e.g. \"a final-round interview\"]. Write a short, gracious email to the recruiter or hiring manager asking for one piece of feedback on what I could improve. Keep it under 80 words — most people won't reply to anything longer.",
  },
  {
    id: "bank-statement-audit",
    title: "Audit my bank statement for waste",
    category: "Money",
    description: "Paste your transactions, get back what's actually worth cutting.",
    prompt:
      "Act as a no-nonsense personal finance advisor. Here are my transactions from the last month (paste as much detail as you have — merchant and amount is enough):\n\n[paste your transactions or a rough list of what you spent on]\n\nGive me: the 3 categories eating the most money, one clearly cuttable expense, and one thing that's probably fine to keep even though it looks big. Skip generic advice like \"make a budget.\"",
  },
  {
    id: "explain-simply",
    title: "Explain a financial concept simply",
    category: "Money",
    description: "Get a real explanation, not a Wikipedia-style wall of jargon.",
    prompt:
      "Act as a patient teacher explaining money topics to a smart beginner. Explain [concept, e.g. \"index funds\" or \"how credit scores work\"] using a real-world analogy first, then the actual mechanism in plain English, then one common mistake people make with it. Keep the whole thing under 200 words.",
  },
  {
    id: "monthly-budget",
    title: "Build a realistic monthly budget",
    category: "Money",
    description: "A budget built around your real numbers, not a generic 50/30/20 template.",
    prompt:
      "Act as a budgeting coach. My monthly take-home pay is [$amount]. My fixed costs (rent, bills, debt) are [$amount]. I want to prioritize [your goal, e.g. \"paying off a credit card\" or \"saving for a trip\"].\n\nBuild me a simple monthly budget with 4-5 categories, tell me a realistic amount for each, and flag if my goal is unrealistic given my numbers — don't just tell me what I want to hear.",
  },
  {
    id: "compare-purchase",
    title: "Compare two purchase options",
    category: "Money",
    description: "Rent vs. buy, new vs. used, now vs. later — get the actual math.",
    prompt:
      "Act as a rational, unbiased financial advisor. I'm deciding between two options:\n\nOption A: [describe it, with rough cost]\nOption B: [describe it, with rough cost]\n\nMy situation: [1-2 sentences of relevant context — timeline, how long you'll keep/use it, etc.]\n\nLay out the real cost of each option over time (not just sticker price), then give me a clear recommendation with your reasoning, not just a list of pros and cons.",
  },
  {
    id: "client-proposal",
    title: "Write a client proposal",
    category: "Freelance",
    description: "A tight, professional proposal instead of a generic template.",
    prompt:
      "Act as a freelance [your field, e.g. \"web designer\"] writing a project proposal. The client needs: [describe the project in a sentence or two]. My rate/estimate: [$amount or range].\n\nWrite a short proposal with: what I understood the project to be, what I'll deliver, the timeline, and the price — professional but not stiff. Under 200 words.",
  },
  {
    id: "invoice-followup",
    title: "Follow up on an unpaid invoice",
    category: "Freelance",
    description: "Polite but firm — gets paid without burning the relationship.",
    prompt:
      "Act as a freelancer following up on an overdue invoice. Invoice #[number] for [$amount] was due on [date] and hasn't been paid. This is my [first/second/third] follow-up.\n\nWrite a short, professional message — polite but clearly expecting payment, not apologetic. If this is the 2nd or 3rd follow-up, make the tone a bit more direct than the first.",
  },
  {
    id: "price-a-project",
    title: "Price a freelance project",
    category: "Freelance",
    description: "Get a defensible number instead of guessing.",
    prompt:
      "Act as a freelance pricing consultant. The project: [describe the scope of work]. My estimated hours: [number]. My target hourly rate: [$amount] (or say \"not sure\" if you don't have one).\n\nGive me a project price with your reasoning, plus one thing I should add to the scope in writing so this doesn't turn into unpaid extra work.",
  },
  {
    id: "scope-of-work",
    title: "Turn a client call into a scope of work",
    category: "Freelance",
    description: "Messy call notes in, a real scope-of-work document out.",
    prompt:
      "Act as a freelance project manager. Here are my rough notes from a client call:\n\n[paste your notes, however messy]\n\nTurn this into a clean scope-of-work with sections for: Project summary, Deliverables (as a list), What's NOT included, Timeline, and Price (use a placeholder if I didn't give a number).",
  },
];
