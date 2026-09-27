import Image from "next/image";

export default function BookCard({ book }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-peach-deep/50 bg-white shadow-[0_18px_40px_-28px_rgba(22,48,91,0.6)] transition-transform hover:-translate-y-1">
      {/* Fixed-height stage: the whole cover stays visible (object-contain)
          without the 2:3 art stretching the card into a column. */}
      <div className="relative h-64 w-full bg-gradient-to-b from-peach to-peach-deep p-4 sm:h-72">
        {book.cover ? (
          <Image
            src={book.cover}
            alt={`Cover of ${book.title}`}
            fill
            sizes="(max-width: 768px) 60vw, 240px"
            className="object-contain p-2 drop-shadow-[0_12px_20px_rgba(22,48,91,0.35)]"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 px-4 text-center">
            <span className="font-display text-xl font-semibold text-navy">
              {book.title}
            </span>
            <span className="text-sm text-navy-soft">Cover reveal soon</span>
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-full bg-navy/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-cream">
          Book {book.number}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-semibold text-navy">
          {book.title}
        </h3>
        <p className="mt-1 text-sm font-semibold text-amber-deep">
          {book.tagline}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {book.blurb}
        </p>

        <div className="mt-5">
          {book.comingSoon ? (
            <span className="inline-block rounded-full bg-peach px-5 py-2 text-sm font-bold text-navy">
              Coming soon
            </span>
          ) : (
            <a
              href={book.buyUrl}
              className="inline-block rounded-full bg-coral px-6 py-2.5 text-sm font-bold text-cream transition-transform hover:-translate-y-0.5"
            >
              Order today
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
