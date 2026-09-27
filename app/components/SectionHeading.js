export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  const centered = align === "center";
  return (
    <div className={centered ? "text-center" : "text-left"}>
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-deep">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-display text-2xl font-semibold text-navy sm:text-4xl">
        {title}
      </h2>
      <svg
        aria-hidden="true"
        viewBox="0 0 200 12"
        className={`mt-3 h-3 w-40 text-coral ${centered ? "mx-auto" : ""}`}
      >
        <path
          d="M4 8 C 50 1, 150 1, 196 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed text-muted ${
            centered ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
