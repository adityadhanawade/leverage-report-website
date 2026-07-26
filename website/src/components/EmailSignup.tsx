"use client";

import { useState } from "react";
import { MailIcon } from "./Icons";

/** Weekly-email signup (locked deliverable #8). Posts to /api/subscribe, which forwards to MailerLite. */
export function EmailSignup() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <p className="flex items-center gap-2 font-heading text-[18px] font-semibold">
        <MailIcon className="h-5 w-5 shrink-0 text-accent" />
        Get one tested money tip a week
      </p>
      <p className="mt-1 font-sans text-[13px] text-muted">
        No spam, no selling your address. Unsubscribe in one click.
      </p>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setStatus("loading");
          try {
            const res = await fetch("/api/subscribe", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email }),
            });
            const data = await res.json();
            if (!res.ok) {
              setErrorMessage(data?.error ?? "Something went wrong.");
              setStatus("error");
              return;
            }
            setStatus("success");
          } catch {
            setErrorMessage("Something went wrong. Try again in a moment.");
            setStatus("error");
          }
        }}
        className="mt-4 flex flex-col gap-2 sm:flex-row"
      >
        <label htmlFor="email" className="sr-only">
          Your email address
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          disabled={status === "loading" || status === "success"}
          className="min-w-0 flex-1 rounded-control border border-border bg-surface px-4 py-3 font-sans text-[16px] text-ink outline-none transition-colors duration-150 placeholder:text-muted focus:border-accent disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="rounded-control bg-accent px-5 py-3 font-sans text-[16px] font-medium text-surface transition-transform duration-150 hover:scale-[1.02] active:scale-[0.97] disabled:opacity-60 disabled:hover:scale-100"
        >
          {status === "loading" ? "Joining…" : status === "success" ? "Joined" : "Join"}
        </button>
      </form>

      {status === "success" && (
        <p role="status" className="mt-3 font-sans text-[13px] text-muted">
          You&apos;re on the list — check your inbox to confirm.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="mt-3 font-sans text-[13px] text-error">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
