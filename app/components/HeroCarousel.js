"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function HeroCarousel({ books }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (next) => setIndex(((next % books.length) + books.length) % books.length),
    [books.length],
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % books.length), 5000);
    return () => clearInterval(id);
  }, [paused, books.length]);

  const active = books[index];

  return (
    <div
      className="w-full max-w-sm"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute -inset-6 rounded-[2.5rem] bg-white/45 blur-2xl"
        />

        {/* Stage — every cover is layered and cross-faded so the height
            never jumps between slides. */}
        <div
          className="relative mx-auto aspect-[2/3] w-44 sm:w-52"
          aria-live="polite"
        >
          {books.map((book, i) => (
            <div
              key={book.slug}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                i === index
                  ? "scale-100 opacity-100"
                  : "pointer-events-none scale-95 opacity-0"
              }`}
              aria-hidden={i !== index}
            >
              {book.cover ? (
                <Image
                  src={book.cover}
                  alt={`Cover of ${book.title} by Pacell McCobb`}
                  fill
                  priority={i === 0}
                  sizes="208px"
                  className="rounded-2xl object-cover shadow-[0_35px_60px_-25px_rgba(22,48,91,0.7)]"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-2 rounded-2xl bg-gradient-to-b from-peach via-peach-deep to-amber px-6 text-center shadow-[0_35px_60px_-25px_rgba(22,48,91,0.7)]">
                  <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-navy-soft">
                    Meeting the Allens
                  </span>
                  <span className="font-display text-2xl font-semibold leading-tight text-navy">
                    {book.title}
                  </span>
                  <span className="text-xs text-navy-soft">
                    Cover reveal soon
                  </span>
                </div>
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous book"
            className="absolute -left-11 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-navy shadow-md transition-colors hover:bg-coral hover:text-cream"
          >
            <svg width="16" height="16" viewBox="0 0 20 20" aria-hidden="true">
              <path
                d="M12.5 4 6.5 10l6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next book"
            className="absolute -right-11 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-navy shadow-md transition-colors hover:bg-coral hover:text-cream"
          >
            <svg width="16" height="16" viewBox="0 0 20 20" aria-hidden="true">
              <path
                d="M7.5 4l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative mt-6 text-center">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-coral">
          Book {active.number}
          {active.comingSoon ? " · Coming soon" : ""}
        </p>
        <p className="mt-1 font-display text-xl font-semibold text-navy">
          {active.title}
        </p>
        <p className="mt-1 text-sm text-muted">{active.tagline}</p>

        <div className="mt-4 flex justify-center gap-2">
          {books.map((book, i) => (
            <button
              key={book.slug}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show ${book.title}`}
              aria-current={i === index}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-7 bg-coral" : "w-2.5 bg-navy/25 hover:bg-navy/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
