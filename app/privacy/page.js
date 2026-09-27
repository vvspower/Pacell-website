export const metadata = {
  title: "Privacy Policy",
  description: "How this site handles your information.",
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-14 sm:py-20">
      <h1 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
        Privacy Policy
      </h1>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
        <p>
          This site collects only the information you choose to give — your name
          and email address when you write to me or join the newsletter.
        </p>
        <p>
          That information is used to reply to you and to send occasional
          updates about new books. It is never sold or shared, and you can
          unsubscribe at any time using the link in any email.
        </p>
        <p>
          Questions about your information? Email{" "}
          <a
            href="mailto:hello@pacellmccobb.com"
            className="font-semibold text-coral hover:underline"
          >
            hello@pacellmccobb.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
