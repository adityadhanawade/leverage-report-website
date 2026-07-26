/**
 * Message Templates — real, ready-to-send scripts (locked deliverable #7 /
 * IA doc: "Ready-made scripts — raise, bill, outreach — to copy").
 *
 * Distinct from the Raise & Negotiation Builder tool: that tool *generates* a
 * script from a visitor's own inputs. These are static, pre-written for
 * common situations the dynamic tool doesn't specifically cover (a written
 * follow-up email, cancelling a subscription, cold outreach) — copy-paste,
 * no typing required. Same `[bracket placeholder]` honesty pattern as the
 * Prompt Library: a static template can't know your real numbers, so it says
 * so via the placeholder rather than pretending.
 */

export type TemplateCategory = "Raise" | "Bills" | "Outreach";

export type MessageTemplate = {
  id: string;
  title: string;
  category: TemplateCategory;
  description: string;
  message: string;
};

export const CATEGORIES: TemplateCategory[] = ["Raise", "Bills", "Outreach"];

export const templates: MessageTemplate[] = [
  {
    id: "raise-followup-no-response",
    title: "Follow up after asking for a raise",
    category: "Raise",
    description: "For when you asked and haven't heard back after a week or two.",
    message:
      "Hi [manager's name], following up on our conversation about [my compensation / a raise] from [date]. I know things get busy — just wanted to check in on where this stands, and see if there's anything else you need from me to move it forward. Happy to chat whenever works for you.",
  },
  {
    id: "raise-request-early-review",
    title: "Ask for a performance review before the usual cycle",
    category: "Raise",
    description: "Useful when your review is months away but you have a strong case now.",
    message:
      "Hi [manager's name], I'd like to request an earlier check-in on my performance and compensation, ahead of the usual [review cycle, e.g. \"annual review\"]. Since [reason, e.g. \"taking on the X project\"], I think it's worth revisiting sooner rather than waiting until [month]. Could we find 20 minutes in the next couple of weeks?",
  },
  {
    id: "raise-decline-lowball",
    title: "Decline a lowball counter-offer, respectfully",
    category: "Raise",
    description: "Keeps the door open instead of shutting the conversation down.",
    message:
      "Thank you for coming back to me on this — I appreciate you considering it. That said, [$offered amount] is below what I was hoping for given [your reasons, e.g. \"the scope I've taken on this year\"]. Is there room to get closer to [$your target], or another way to bridge the gap — a bonus, a title change, or a revisit in [3/6] months?",
  },
  {
    id: "raise-email-written",
    title: "Ask for a raise by email",
    category: "Raise",
    description: "For when a written ask makes more sense than a live conversation.",
    message:
      "Subject: Compensation conversation\n\nHi [manager's name],\n\nI'd like to set up time to talk about my compensation. Over the past [timeframe], I've [1-2 concrete results — a number if you have one]. Given that, I'd like to discuss a raise to [$target, or \"a level that reflects this\"].\n\nCould we find 20-30 minutes this week or next? Happy to send more detail beforehand if useful.\n\nThanks,\n[your name]",
  },
  {
    id: "bills-cancel-subscription",
    title: "Cancel a subscription (retention-proof)",
    category: "Bills",
    description: "Short and firm enough that a retention offer script won't derail it.",
    message:
      "I'd like to cancel my [service name] subscription, effective immediately. I understand you may have an offer to keep me — I appreciate it, but I've already decided, so please go ahead and process the cancellation. Could you confirm once it's done?",
  },
  {
    id: "bills-negotiate-internet",
    title: "Negotiate your internet or cable bill",
    category: "Bills",
    description: "Works because it's specific — a number, and a real alternative.",
    message:
      "Hi, I've been a customer for [length of time] and my bill has gone up to [$amount] — that's higher than what new customers are paying for the same plan. I'd like to see if you can match a new-customer rate or a promotion, or I'll need to look at switching providers. What can you do?",
  },
  {
    id: "bills-dispute-charge",
    title: "Dispute an incorrect or surprise charge",
    category: "Bills",
    description: "States the facts plainly and asks for a specific outcome.",
    message:
      "I'm reaching out about a charge of [$amount] on [date] that I don't recognize / wasn't expecting — [brief reason, e.g. \"I cancelled this service on X date\" or \"I was never told about this fee\"]. Could you look into this and refund the charge? I have [any evidence — confirmation email, screenshot] if that helps.",
  },
  {
    id: "bills-ask-landlord",
    title: "Ask a landlord to fix something or negotiate rent",
    category: "Bills",
    description: "Direct, on the record, and easy for them to act on.",
    message:
      "Hi [landlord's name], I wanted to flag [the issue, e.g. \"the heating hasn't been working since X\"] — could someone take a look this week? Also, with my lease renewal coming up on [date], I wanted to ask whether there's flexibility on the rent increase, given [reason, e.g. \"comparable units nearby are listed lower\"]. Let me know what's possible.",
  },
  {
    id: "outreach-cold-job",
    title: "Cold email for a job opportunity",
    category: "Outreach",
    description: "For reaching out before (or without) a posted opening.",
    message:
      "Subject: [Your field] professional interested in [Company]\n\nHi [name], I've been following [Company]'s work on [something specific — a product, a project, recent news] and wanted to reach out directly. I'm a [your role/title] with experience in [1-2 relevant skills or results]. I don't see an open role that's an exact fit right now, but I'd love to be considered if something opens up — or just to hear more about what the team's working on. Is there a good time to connect?",
  },
  {
    id: "outreach-reconnect",
    title: "Reconnect with an old contact or mentor",
    category: "Outreach",
    description: "Low-pressure, doesn't lead with an ask.",
    message:
      "Hi [name], it's been a while! I was thinking about [shared memory or context — a project you worked on together, how you met] and wanted to reach out. I'm currently [1 sentence on what you're doing now]. Would love to catch up sometime if you're open to it — no agenda, just good to reconnect.",
  },
  {
    id: "outreach-informational-interview",
    title: "Ask for an informational interview",
    category: "Outreach",
    description: "Respects their time by asking for a specific, small commitment.",
    message:
      "Hi [name], I'm exploring a move into [field/role] and came across your background in [their area] — really admire [something specific about their path]. Would you be open to a 15-minute call sometime in the next few weeks? I'd love to hear how you got started and any advice you'd give someone early in that path. Totally understand if you're too busy!",
  },
  {
    id: "outreach-networking-followup",
    title: "Follow up after a networking event",
    category: "Outreach",
    description: "Turns a quick conversation into an actual connection.",
    message:
      "Hi [name], great meeting you at [event] — really enjoyed our conversation about [specific topic you discussed]. Wanted to follow up and stay in touch. [Optional: If you mentioned something specific, e.g. \"I'd love to hear more about X sometime.\"] Let me know if you're ever up for grabbing coffee or a call.",
  },
];
