import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/books", label: "Books" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  {
    label: "Facebook",
    href: "#",
    path: "M12 3h2.5V6H13c-.6 0-1 .4-1 1v2h2.5l-.4 3H12v5H9v-5H7V9h2V6.8C9 4.7 10.3 3 12 3z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M5 2h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3z M10 6.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z M14.8 5.2h.01",
  },
  {
    label: "YouTube",
    href: "#",
    path: "M2 6.5C2 5 3 4 4.5 4h11C17 4 18 5 18 6.5v7c0 1.5-1 2.5-2.5 2.5h-11C3 16 2 15 2 13.5v-7z M8.5 7.5l4.5 2.5-4.5 2.5v-5z",
  },
  {
    label: "Email",
    href: "mailto:hello@pacellmccobb.com",
    path: "M2 5h16v10H2z M2 5l8 6 8-6",
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-cream">
      <div className="mx-auto max-w-5xl px-5 pt-12 pb-10 text-center sm:pt-16 sm:pb-12">
        <Link href="/" className="inline-block">
          <Image
            src="/pacell-logo-nav.png"
            alt="Books by Pacell McCobb"
            width={1891}
            height={458}
            sizes="(max-width: 640px) 240px, 320px"
            className="mx-auto h-12 w-auto sm:h-16 md:h-20"
          />
        </Link>

        {/* Rule-bound nav row, as in the reference footer. */}
        <nav className="mt-8 border-y border-navy/25 py-4 sm:mt-10">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 font-hand text-base uppercase tracking-[0.12em] text-navy sm:gap-x-7 sm:text-lg">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-block px-1 py-2 hover:text-coral"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#newsletter"
                className="inline-block bg-amber px-6 py-2.5 text-cream transition-colors hover:bg-amber-deep"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mt-6 flex justify-center gap-1 sm:mt-8">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="grid h-11 w-11 place-items-center text-navy transition-colors hover:text-coral"
            >
              <svg width="22" height="22" viewBox="0 0 20 20" aria-hidden="true">
                <path
                  d={s.path}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Legal band */}
      <div className="border-t border-amber/50">
        <p className="mx-auto max-w-4xl px-5 py-5 text-center text-sm text-muted">
          © {new Date().getFullYear()} Pacell McCobb. All rights reserved.{" "}
          <Link href="/privacy" className="inline-block py-1 underline hover:text-coral">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link href="/contact" className="inline-block py-1 underline hover:text-coral">
            Contact
          </Link>
        </p>
      </div>
    </footer>
  );
}
