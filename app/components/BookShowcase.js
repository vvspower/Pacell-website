import Image from "next/image";

/**
 * One book per row: a large tilted cover mock-up on one side, the
 * description and buy button on the other. Rows alternate sides so the
 * section reads as a series rather than a grid.
 */
export default function BookShowcase({ book, flipped = false }) {
  return (
    <div
      className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
        flipped ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Cover mock-up */}
      <div className="relative mx-auto w-full max-w-[16rem] sm:max-w-sm lg:max-w-md">
        <div
          aria-hidden="true"
          className="absolute inset-0 rotate-3 rounded-xl bg-gradient-to-br from-peach to-amber opacity-70 shadow-lg sm:rotate-6"
        />
        <div className="relative aspect-[2/3] w-full -rotate-2 overflow-hidden rounded-xl shadow-[0_35px_70px_-30px_rgba(22,48,91,0.75)]">
          {book.cover ? (
            <Image
              src={book.cover}
              alt={`Cover of ${book.title} by Pacell McCobb`}
              fill
              sizes="(max-width: 1024px) 90vw, 440px"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-peach via-peach-deep to-amber px-8 text-center">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-navy-soft">
                Meeting the Allens {book.number}
              </span>
              <span className="font-display text-3xl font-semibold leading-tight text-navy">
                {book.title}
              </span>
              <span className="text-sm text-navy-soft">Cover reveal soon</span>
            </div>
          )}
        </div>
      </div>

      {/* Copy */}
      <div className="text-center lg:text-left">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-deep">
          Book {book.number}
        </p>
        <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">
          <em className="font-display text-xl font-semibold not-italic text-coral">
            {book.title}
          </em>{" "}
          — {book.blurb}
        </p>
        <p className="mt-3 text-sm text-muted">
          For readers ages 8–13, and the grown-ups reading along.
        </p>

        <div className="mt-7">
          {book.comingSoon ? (
            <span className="inline-block rounded-full bg-peach px-8 py-3 text-sm font-bold uppercase tracking-widest text-navy">
              Coming soon
            </span>
          ) : (
            <a
              href={book.buyUrl}
              className="inline-block rounded-full bg-coral px-8 py-3 text-sm font-bold uppercase tracking-widest text-cream shadow-md transition-transform hover:-translate-y-0.5"
            >
              Order today
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
