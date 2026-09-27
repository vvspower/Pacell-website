"use client";

import { useState } from "react";

const field =
  "w-full rounded-2xl border border-peach-deep bg-white px-4 py-3 text-base text-navy placeholder:text-muted/70 focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/40";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  // No backend wired up yet — point this at a form service or a route
  // handler when one exists.
  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="grid place-items-center rounded-3xl border border-peach-deep/50 bg-cream p-10 text-center">
        <p className="font-display text-2xl font-semibold text-navy">
          Message sent — thank you!
        </p>
        <p className="mt-2 text-sm text-muted">
          I&apos;ll get back to you as soon as I can.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-3xl border border-peach-deep/50 bg-white p-6 shadow-[0_18px_40px_-30px_rgba(22,48,91,0.6)]"
    >
      <div>
        <label htmlFor="name" className="text-sm font-semibold text-navy">
          Your name
        </label>
        <input id="name" name="name" required className={`mt-1.5 ${field}`} />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-semibold text-navy">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={`mt-1.5 ${field}`}
        />
      </div>
      <div>
        <label htmlFor="subject" className="text-sm font-semibold text-navy">
          What&apos;s this about?
        </label>
        <select id="subject" name="subject" className={`mt-1.5 ${field}`}>
          <option>School or library visit</option>
          <option>Book club</option>
          <option>Reader mail</option>
          <option>Something else</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-semibold text-navy">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`mt-1.5 ${field}`}
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-coral px-6 py-3 font-bold text-cream shadow-sm transition-transform hover:-translate-y-0.5"
      >
        Send message
      </button>
    </form>
  );
}
