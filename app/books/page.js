import Image from "next/image";
import Link from "next/link";
import { books } from "../data/books";
import BookCard from "../components/BookCard";
import SectionHeading from "../components/SectionHeading";
import NewsletterForm from "../components/NewsletterForm";

export const metadata = {
  title: "Books",
  description:
    "The Meeting the Allens series: Christian fiction for young readers by Pacell McCobb.",
};

const details = [
  {
    title: "Do they need to be read in order?",
    body: "Each book can be enjoyed on its own, but Jordan's story continues to unfold throughout the series. For the fullest experience, I recommend starting with Meeting the Allens on Hart Street to appreciate how the friendships begin and develop over time.",
  },
  {
    title: "What are the books about?",
    body: "These stories explore courage, forgiveness, friendship, and faith in everyday situations. From the Allens settling into a new neighborhood to children learning to stand up for what is right, each story reflects God's love through kindness, compassion, and the choices we make.",
  },
  {
    title: "Who are the books for?",
    body: "Written for readers ages 7–14, these books are suitable for confident independent readers and are equally enjoyable when read aloud with a parent, teacher, or caregiver.",
  },
  {
    title: "Are the books suitable for the classroom?",
    body: "Yes! The stories explore relatable childhood experiences, including bullying, unkindness between classmates, standing together, and making things right. They encourage children to think about the importance of friendship, treating others with kindness, and how standing together can make a difference. These themes also provide meaningful opportunities for classroom discussions and group activities.",
  },
];

export default function BooksPage() {
  return (
    <>
      <section className="relative isolate flex min-h-[18rem] items-center overflow-hidden bg-cream py-14 text-center sm:min-h-[24rem] sm:py-20">
        <Image
          src="/books-hero-new.png"
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
            A three-book series about courage, friendship and quiet faith,
            written for readers aged 7 to 14.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
        <SectionHeading
          eyebrow="The collection"
          title="All books"
          subtitle="Follow Jordan from the day the Allens arrive on Hart Street to the choice that is his to make alone."
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
              Ordering books for your classroom, planning a book club, or
              interested in a school visit? I&apos;d love to help with
              discussion questions and signed copies!
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

      {/* Envelope-and-sparkle pattern — it belongs on a sign-up block. */}
      <section className="doodle-field relative isolate overflow-hidden py-14 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-[40rem] max-w-[92vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream/80 blur-3xl"
        />
        <div className="relative mx-auto max-w-3xl px-5 text-center">
          <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">
            Be first to know when Book Three lands
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-navy-soft">
            Release news for Jordan Makes an Important Decision, straight to
            your inbox.
          </p>
          <div className="mt-7">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
