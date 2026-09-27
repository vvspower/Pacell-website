"use client";

import { useState } from "react";

export default function NewsletterForm({ compact = false }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    if (!email) return;
    setError("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Something went wrong.");
        return;
      }

      setDone(true);
      setEmail("");
    } catch {
      setError("Could not reach the server. Please try again.");
    }
  }

  if (done) {
    return (
      <p className="font-display text-lg text-navy">
        Thank you — you&apos;re on the list. 🌅
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`mx-auto flex w-full flex-col gap-3 sm:flex-row ${
        compact ? "max-w-md" : "max-w-lg"
      }`}
    >
      <label htmlFor={compact ? "email-footer" : "email-main"} className="sr-only">
        Email address
      </label>
      <input
        id={compact ? "email-footer" : "email-main"}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 rounded-full border border-peach-deep bg-white px-5 py-3 text-base text-navy placeholder:text-muted/70 focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/40"
      />
      <button
        type="submit"
        className="rounded-full bg-coral px-6 py-3 font-bold text-cream shadow-sm transition-transform hover:-translate-y-0.5"
      >
        Subscribe
      </button>
      {error && (
        <p role="alert" className="text-sm text-coral sm:basis-full">
          {error}
        </p>
      )}
    </form>
  );
}
