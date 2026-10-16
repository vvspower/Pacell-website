import Image from "next/image";
import Link from "next/link";
import { AUTHOR } from "../data/books";

export const metadata = {
  title: "About",
  description: `About ${AUTHOR.name}, author of the Meeting the Allens series.`,
};

const facts = [
  { label: "Writes", value: "Christian Fiction & Contemporary" },
  { label: "Readers", value: "Ages 7–14 and the grown-ups who read along" },
  { label: "Series", value: "Meeting the Allens, three books" },
];

export default function AboutPage() {
  return (
    <>
      {/* The banner artwork carries its own lettering, so the real heading
          is kept for screen readers and search engines. */}
      <section className="w-full">
        <h1 className="sr-only">
          About the author: {AUTHOR.name}, {AUTHOR.role}
        </h1>
        <Image
          src="/about-hero-mobile.png"
          alt=""
          aria-hidden="true"
          width={1254}
          height={1254}
          priority
          sizes="100vw"
          className="w-full sm:hidden"
        />
        <Image
          src="/about-hero.png"
          alt=""
          aria-hidden="true"
          width={2112}
          height={745}
          priority
          sizes="100vw"
          className="hidden w-full sm:block"
        />
      </section>

      <section className="mx-auto max-w-5xl overflow-hidden px-5 pb-12 pt-2 sm:pb-16 sm:pt-4">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="mx-auto w-full max-w-[14rem] sm:max-w-xs">
            <Image
              src={AUTHOR.photo}
              alt={`Portrait of ${AUTHOR.name}`}
              width={931}
              height={1279}
              priority
              className="aspect-[4/5] w-full rounded-2xl object-cover object-top shadow-[0_24px_50px_-28px_rgba(22,48,91,0.6)]"
            />
            <dl className="mt-8 space-y-4 border-t border-peach-deep/40 pt-6">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-amber-deep">
                    {f.label}
                  </dt>
                  <dd className="mt-0.5 text-sm text-navy">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-muted">
            <p>
              Pacell McCobb is a Christian children&apos;s author who writes
              fictional stories inspired by real-life experiences and everyday
              situations children may face. Through her storytelling, she
              explores themes of faith, friendship, kindness, courage,
              forgiveness, and standing up for what is right.
            </p>
            <p>
              Her Meeting the Allens on Hart Street series follows Jordan and
              his friends as they navigate new experiences, face challenges,
              build meaningful relationships, and discover the importance of
              making choices guided by faith and strong values.
            </p>
            <p>
              Pacell believes that children&apos;s stories can do more than
              entertain; they can encourage young readers to think, grow, and
              see how God&apos;s love can guide them through life&apos;s
              challenges. Her hope is that every story reminds children that
              they are loved by God, that their choices matter, and that they
              can always turn to Him for guidance, comfort, and strength.
            </p>
            <p>Part of her writing is guided by the words of Romans 12:21 (KJV):</p>

            <div className="rounded-3xl border border-peach-deep/50 bg-cream p-6 sm:p-7">
              <p className="font-display text-xl italic leading-relaxed text-navy">
                “Be not overcome of evil, but overcome evil with good.”
              </p>
              {/* <p className="mt-2 text-sm text-muted">Romans 12:21 (KJV)</p> */}
            </div>

            <div className="flex flex-wrap gap-3 pt-3">
              <Link
                href="/books"
                className="rounded-full bg-coral px-7 py-3 font-bold text-cream transition-transform hover:-translate-y-0.5"
              >
                Browse the books
              </Link>
              <Link
                href="/contact"
                className="rounded-full border-2 border-navy px-7 py-2.5 font-bold text-navy transition-colors hover:bg-navy hover:text-cream"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
