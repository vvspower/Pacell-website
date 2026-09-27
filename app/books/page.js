import Image from "next/image";
import Link from "next/link";
import { books } from "../data/books";
import BookCard from "../components/BookCard";
import SectionHeading from "../components/SectionHeading";
import NewsletterForm from "../components/NewsletterForm";

export const metadata = {
  title: "Books",
  description:
    "The Meeting the Allens series — Christian fiction for young readers by Pacell McCobb.",
};

const details = [
  {
    title: "Do they need to be read in order?",
    body: "Each book stands on its own, but Jordan's story builds across the series — starting with Meeting the Allens on Hart Street gives the friendships their full weight.",
  },
  {
    title: "Who are they for?",
    body: "Written for readers aged 8 to 13, at a reading level that suits confident solo readers and works just as well read aloud a chapter at a time.",
  },
  {
    title: "What are they about?",
    body: "Courage, forgiveness and friendship, set in ordinary places — a new street, a school hallway, a kitchen table. Faith is lived rather than preached.",
  },
  {
    title: "Is it suitable for the classroom?",
    body: "Yes — the stories deal with being the new kid, unkindness between classmates and making things right, which tend to spark good discussion in a group.",
  },
];

export default function BooksPage() {
  return (
    <>
      <section className="relative isolate flex min-h-[18rem] items-center overflow-hidden bg-cream py-14 text-center sm:min-h-[24rem] sm:py-20">
        <Image
          src="/books-hero.png"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div className="mx-auto max-w-3xl px-5">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-coral">
            The books
          </p>
          <h1 className="mt-4 font-display text-3xl font-semibold text-navy sm:text-5xl">
            Meeting the Allens
          </h1>
          <p className="mt-4 text-base text-navy-soft sm:text-lg">
            A three-book series about courage, friendship and quiet faith —
            written for readers aged 8 to 13.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
        <SectionHeading
          eyebrow="The collection"
          title="All three books"
          subtitle="Two out now and one on the way — follow Jordan from the day he arrives on Hart Street."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      </section>

      <section className="bg-cream py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-5">
          <SectionHeading
            eyebrow="Before you buy"
            title="Good to know"
            subtitle="The practical details parents, teachers and librarians ask about most."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {details.map((d) => (
              <div
                key={d.title}
                className="rounded-3xl border border-peach-deep/30 bg-white p-6 shadow-[0_18px_40px_-30px_rgba(22,48,91,0.5)]"
              >
                <h3 className="font-display text-lg font-semibold text-navy">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {d.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 rounded-3xl bg-peach/30 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-sm leading-relaxed text-navy-soft">
              Planning a class set, a school visit or a book club? I&apos;m
              happy to help with discussion questions and signed bookplates.
            </p>
            <Link
              href="/contact"
              className="shrink-0 rounded-full bg-navy px-7 py-3 text-sm font-bold text-cream transition-transform hover:-translate-y-0.5"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <section className="sunrise-wash py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="font-display text-3xl font-semibold text-navy">
            Hear about the next one first
          </h2>
          <div className="mt-7">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
