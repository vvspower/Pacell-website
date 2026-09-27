import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Pacell McCobb — school visits, book clubs, and reader mail.",
};

const reasons = [
  {
    title: "School & library visits",
    body: "Readings, Q&As and writing workshops for classes and reading groups.",
  },
  {
    title: "Book clubs",
    body: "Discussion questions, video call drop-ins, and signed bookplates.",
  },
  {
    title: "Reader mail",
    body: "Young readers' letters are the best part of the week. I read every one.",
  },
];

const stickers = [
  "School visits",
  "Book clubs",
  "Reader mail",
  "Signed bookplates",
];

// Sparkles, a paper plane and an envelope, drawn as simple strokes.
const doodles = [
  {
    key: "sparkle-left",
    path: "M20 6 L23 17 L34 20 L23 23 L20 34 L17 23 L6 20 L17 17 Z",
    className: "left-[6%] top-10 h-8 w-8 text-amber sm:h-10 sm:w-10",
    delay: "0s",
  },
  {
    key: "plane",
    path: "M4 20 L36 6 L26 34 L21 23 Z M21 23 L36 6",
    className: "right-[8%] top-12 hidden h-11 w-11 text-coral/70 sm:block",
    delay: "1.2s",
  },
  {
    key: "envelope",
    path: "M5 12 h30 v18 h-30 Z M5 12 l15 11 l15 -11",
    className: "bottom-10 left-[14%] hidden h-10 w-10 text-navy/30 sm:block",
    delay: "2.1s",
  },
  {
    key: "sparkle-right",
    path: "M20 8 L22 18 L32 20 L22 22 L20 32 L18 22 L8 20 L18 18 Z",
    className: "bottom-12 right-[12%] h-7 w-7 text-amber-deep sm:h-9 sm:w-9",
    delay: "0.6s",
  },
  {
    key: "squiggle",
    path: "M4 24 C 12 12, 20 34, 28 20 S 38 14, 38 20",
    className: "left-[38%] top-4 hidden h-8 w-8 text-leaf/60 lg:block",
    delay: "1.7s",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="doodle-field relative isolate overflow-hidden py-16 text-center sm:py-24">
        {/* Soft glow behind the heading so the pattern doesn't fight the type. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[44rem] max-w-[92vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream/80 blur-3xl"
        />

        {/* Hand-drawn doodles, scattered. Hidden on the narrowest screens so
            they never crowd the type. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {doodles.map((d) => (
            <svg
              key={d.key}
              viewBox="0 0 40 40"
              className={`float-soft absolute ${d.className}`}
              style={{ animationDelay: d.delay }}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={d.path} />
            </svg>
          ))}
        </div>

        <div className="relative mx-auto max-w-3xl px-5">
          <p className="font-hand text-lg tracking-wide text-coral sm:text-xl">
            ✦ Say hello ✦
          </p>

          <h1 className="mt-2 font-display text-4xl font-semibold text-navy sm:text-6xl">
            Get in{" "}
            <span className="relative inline-block">
              touch
              {/* Hand-drawn underline, same brush as the section headings. */}
              <svg
                aria-hidden="true"
                viewBox="0 0 200 14"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 h-3 w-full text-coral"
              >
                <path
                  d="M4 9 C 55 2, 145 2, 196 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base text-navy-soft sm:text-lg">
            Whether it&apos;s a school visit, a book club, or a note from a
            reader — I&apos;d love to hear from you.
          </p>

          {/* Little sticker row: sets expectations and adds some bounce. */}
          <ul className="mt-7 flex flex-wrap items-center justify-center gap-3">
            {stickers.map((sticker, i) => (
              <li
                key={sticker}
                className={`rounded-full border-2 border-dashed border-amber-deep/50 bg-white/70 px-4 py-2 font-hand text-base text-navy ${
                  i % 2 === 0 ? "-rotate-2" : "rotate-2"
                }`}
              >
                {sticker}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-5">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="rounded-3xl border border-peach-deep/50 bg-cream p-6"
              >
                <h2 className="font-display text-xl font-semibold text-navy">
                  {r.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {r.body}
                </p>
              </div>
            ))}
            <p className="text-sm text-muted">
              Prefer email?{" "}
              <a
                href="mailto:hello@pacellmccobb.com"
                className="font-semibold text-coral hover:underline"
              >
                hello@pacellmccobb.com
              </a>
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
