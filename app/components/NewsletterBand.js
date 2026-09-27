"use client";

import { useEffect, useRef, useState } from "react";

export default function NewsletterBand() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | done | error
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    inputRef.current?.focus();

    function onKeyDown(event) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function close() {
    setOpen(false);
    setStatus("idle");
    setMessage("");
    setEmail("");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong.");
        return;
      }

      setStatus("done");
      setMessage(
        data.alreadySubscribed
          ? "You're already on the list — thank you!"
          : "Thank you — you're on the list.",
      );
    } catch {
      setStatus("error");
      setMessage("Could not reach the server. Please try again.");
    }
  }

  return (
    <>
      <section id="newsletter" className="border-y border-peach-deep/40 bg-peach/30">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 px-5 py-7 text-center sm:gap-6 sm:py-8 md:flex-row md:justify-between md:gap-10 md:text-left">
          <p className="font-hand text-lg leading-snug tracking-wide text-navy-soft sm:text-xl md:text-2xl">
            Want to hear about Book Three first? Join the newsletter for cover
            reveals, release dates and stories from behind the pages.
          </p>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="w-full shrink-0 rounded-sm bg-coral px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-cream shadow-sm transition-transform hover:-translate-y-0.5 sm:w-auto sm:px-8 sm:text-sm"
          >
            Subscribe to Newsletter
          </button>
        </div>
      </section>

      {open && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-navy/50 p-5 backdrop-blur-sm"
          onClick={close}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="newsletter-title"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-3xl bg-cream p-6 text-center shadow-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="float-right -mt-3 -mr-3 grid h-9 w-9 place-items-center rounded-full text-navy transition-colors hover:bg-peach"
            >
              <svg width="16" height="16" viewBox="0 0 20 20" aria-hidden="true">
                <path
                  d="M4 4l12 12M16 4L4 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </button>

            {status === "done" ? (
              <div className="py-6">
                <p
                  id="newsletter-title"
                  className="font-display text-2xl font-semibold text-navy"
                >
                  {message}
                </p>
                <button
                  type="button"
                  onClick={close}
                  className="mt-6 rounded-full bg-coral px-7 py-2.5 font-bold text-cream"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h2
                  id="newsletter-title"
                  className="mt-2 font-display text-2xl font-semibold text-navy"
                >
                  Join the newsletter
                </h2>
                <p className="mt-2 text-sm text-muted">
                  Cover reveals and release news. No noise — just good news.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    ref={inputRef}
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full rounded-full border border-peach-deep bg-white px-5 py-3 text-base text-navy placeholder:text-muted/70 focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/40"
                  />
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full rounded-full bg-coral px-6 py-3 font-bold text-cream transition-transform hover:-translate-y-0.5 disabled:opacity-60"
                  >
                    {status === "sending" ? "Subscribing…" : "Subscribe"}
                  </button>
                </form>

                {status === "error" && (
                  <p role="alert" className="mt-3 text-sm text-coral">
                    {message}
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
