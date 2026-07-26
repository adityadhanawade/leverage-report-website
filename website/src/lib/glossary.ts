/**
 * AI Terms Glossary — locked deliverable #7: "plain-English AI dictionary
 * (Agents, tokens, MCP...). Also SEO." Real, accurate definitions, not
 * marketing copy — this is the site's main SEO entry point (people search
 * "what is a token AI" and land here), so correctness matters more than
 * cleverness.
 *
 * A couple of terms link back to the AI Prompt Tool where the connection is
 * genuinely useful (someone reading "what is a prompt" is one click from
 * trying one), not just self-promotion sprinkled everywhere.
 */

export type GlossaryTerm = {
  id: string;
  term: string;
  definition: string;
  relatedTool?: { label: string; href: string };
};

// Kept in alphabetical order — the glossary is read top-to-bottom as an A-Z list.
export const glossaryTerms: GlossaryTerm[] = [
  {
    id: "ai-agent",
    term: "AI Agent",
    definition:
      "An AI system that can take multiple steps and use tools on its own toward a goal — not just answer one question, but plan, act, check its work, and adjust. A chatbot talks; an agent does.",
  },
  {
    id: "api",
    term: "API (Application Programming Interface)",
    definition:
      "A defined way for two pieces of software to talk to each other automatically. When an app \"connects to ChatGPT,\" it's usually talking to OpenAI's API behind the scenes.",
  },
  {
    id: "chatbot",
    term: "Chatbot",
    definition:
      "A conversational AI that responds to messages in a chat interface. The simplest, most common form of AI most people interact with — the AI Prompt Tool on this site helps you talk to one more effectively.",
    relatedTool: { label: "Try the AI Prompt Tool", href: "/tools/prompt" },
  },
  {
    id: "context-window",
    term: "Context Window",
    definition:
      "How much text an AI model can \"see\" and remember at once — your messages, its replies, any documents you've shared. Once a conversation gets longer than the window, the model starts forgetting the earliest parts.",
  },
  {
    id: "fine-tuning",
    term: "Fine-tuning",
    definition:
      "Taking an already-trained AI model and training it further on a smaller, specific dataset so it gets better at one particular task or sounds like a particular voice.",
  },
  {
    id: "hallucination",
    term: "Hallucination",
    definition:
      "When an AI states something false, made-up, or unsupported as if it were a confirmed fact — a fake citation, a wrong number, a person who doesn't exist. The single biggest reason to double-check anything important an AI tells you.",
  },
  {
    id: "llm",
    term: "LLM (Large Language Model)",
    definition:
      "The type of AI model behind tools like ChatGPT, Claude, and Gemini — trained on huge amounts of text to predict and generate language. \"AI\" in most everyday conversation actually means \"an LLM.\"",
  },
  {
    id: "mcp",
    term: "MCP (Model Context Protocol)",
    definition:
      "An open standard that lets AI models connect to real external tools and data — like a universal plug that lets an AI actually check your calendar, read a file, or use an app, instead of just talking about it.",
  },
  {
    id: "model",
    term: "Model",
    definition:
      "The underlying AI system itself — GPT-4, Claude, Gemini, Llama, and so on. \"Which model are you using?\" is asking which specific AI is doing the work behind an app or chat.",
  },
  {
    id: "prompt",
    term: "Prompt",
    definition:
      "The instructions or question you give an AI. A well-written prompt — specific, with context and a clear ask — reliably gets a better answer than a vague one. This is exactly what the AI Prompt Tool on this site helps you write.",
    relatedTool: { label: "Try the AI Prompt Tool", href: "/tools/prompt" },
  },
  {
    id: "prompt-engineering",
    term: "Prompt Engineering",
    definition:
      "The skill of writing prompts that reliably get good results — giving an AI the right role, context, and format instead of just typing the first thing that comes to mind.",
    relatedTool: { label: "Try the AI Prompt Tool", href: "/tools/prompt" },
  },
  {
    id: "rag",
    term: "RAG (Retrieval-Augmented Generation)",
    definition:
      "A technique where an AI looks up real, current information (a document, a database, a search result) before answering, instead of relying only on what it memorized during training. Reduces hallucinations for fact-based questions.",
  },
  {
    id: "temperature",
    term: "Temperature",
    definition:
      "A setting that controls how random or predictable an AI's output is. Low temperature gives safer, more consistent answers; high temperature gives more varied, creative (and occasionally stranger) ones.",
  },
  {
    id: "token",
    term: "Token",
    definition:
      "The small chunk of text an AI actually reads and writes in — roughly a word or part of a word. AI usage is usually priced by the token, which is why longer conversations and documents cost more.",
  },
  {
    id: "training-data",
    term: "Training Data",
    definition:
      "The massive collection of text (and sometimes images, audio, or code) an AI model learned from before it was released. What's in the training data shapes what the model knows — and what it doesn't.",
  },
  {
    id: "zero-shot-few-shot",
    term: "Zero-shot / Few-shot",
    definition:
      "Zero-shot means asking an AI to do a task with no examples given. Few-shot means giving it a couple of examples first to show the pattern you want. Few-shot prompts are usually more reliable for anything format-specific.",
  },
];
