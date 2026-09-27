import Image from "next/image";
import Link from "next/link";
import { books } from "./data/books";
import BookShowcase from "./components/BookShowcase";
import SectionHeading from "./components/SectionHeading";
import NewsletterBand from "./components/NewsletterBand";
import HeroBackground from "./components/HeroBackground";

const values = [
  {
    title: "Courage",
    body: "Ordinary kids choosing the brave, kind thing — even when the hallway goes quiet.",
    icon: "/icon-courage.png",
    width: 117,
    height: 158,
  },
  {
    title: "Friendship",
    body: "Tables with room for one more, and friends who show up before they're asked.",
    icon: "/icon-friendship.png",
    width: 128,
    height: 99,
  },
  {
    title: "Faith",
    body: "Quiet, lived-in faith that shows up in choices rather than in lectures.",
    icon: "/icon-faith.png",
    width: 169,
    height: 100,
  },
];

export default function Home() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative isolate overflow-hidden bg-cream">
        <HeroBackground />

        {/* Full-bleed with padding rather than a centred max-width box, so the
            copy keeps hugging the right edge on wide screens. */}
        <div className="flex w-full flex-col items-center px-5 pb-12 pt-8 sm:pt-10 lg:min-h-[42rem] lg:items-end lg:justify-center lg:py-24 lg:pl-12 lg:pr-6 xl:pl-20 xl:pr-10 2xl:pr-16">
          <div className="w-full max-w-xl text-center lg:max-w-lg lg:text-left xl:max-w-2xl 2xl:max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-coral">
              Christian Fiction for Young Readers
            </p>
            <h1 className="mt-3 font-display text-[1.9rem] font-semibold leading-tight text-navy sm:text-5xl xl:text-6xl">
              Stories with room at the table
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-navy-soft sm:mt-5 sm:text-base xl:text-lg">
              The Meeting the Allens series follows Jordan and the friends next
              door as they learn what it means to be brave, to forgive, and to
              make space for the new kid.
            </p>
            <p className="mt-3 font-display text-base italic text-amber-deep sm:mt-4 sm:text-lg xl:text-xl">
              “Let us not become weary in doing good.”
            </p>

            <div className="mt-6 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <Link
                href="/books"
                className="rounded-full bg-coral px-8 py-3.5 text-center font-bold text-cream shadow-md transition-transform hover:-translate-y-0.5"
              >
                Explore the books
              </Link>
              <Link
                href="/about"
                className="rounded-full border-2 border-navy px-8 py-3 text-center font-bold text-navy transition-colors hover:bg-navy hover:text-cream"
              >
                Meet the author
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- What you'll find ---------------- */}
      <section className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
        <SectionHeading
          eyebrow="Christian Fiction · Christian Contemporary"
          title="What you'll find in these books"
          subtitle="Books for young readers about growing up, showing up, and holding on to hope — written by Pacell McCobb."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-3xl border border-peach-deep/25 bg-white p-7 text-center shadow-[0_20px_45px_-26px_rgba(22,48,91,0.45)] transition-shadow duration-300 hover:shadow-[0_26px_55px_-24px_rgba(22,48,91,0.5)]"
            >
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-peach/40 ring-1 ring-inset ring-peach-deep/40">
                <Image
                  src={v.icon}
                  alt=""
                  aria-hidden="true"
                  width={v.width}
                  height={v.height}
                  sizes="40px"
                  className="h-9 w-9 object-contain"
                />
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-navy">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Books ---------------- */}
      <section id="books" className="overflow-hidden bg-cream py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
              Meeting the Allens
            </h2>
            <svg
              aria-hidden="true"
              viewBox="0 0 200 12"
              className="mx-auto mt-3 h-3 w-44 text-coral"
            >
              <path
                d="M4 8 C 50 1, 150 1, 196 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
            <p className="mt-3 font-hand text-xl text-muted">
              by Pacell McCobb
            </p>
          </div>

          <div className="mt-10 space-y-14 sm:mt-16 sm:space-y-20 lg:space-y-24">
            {books.map((book, i) => (
              <BookShowcase
                key={book.slug}
                book={book}
                flipped={i % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Series promise ---------------- */}
      {/* Wide 3:1 artwork, so it can run edge to edge without towering. */}
      <section className="w-full">
        <Image
          src="/jesus_quote.png"
          alt="With Jesus as his guide, Jordan learns to welcome others, stand up for what is right, and grow strong in faith."
          width={2172}
          height={724}
          sizes="100vw"
          className="w-full"
        />
      </section>

      {/* ---------------- Newsletter ---------------- */}
      <NewsletterBand />
    </>
  );
}
