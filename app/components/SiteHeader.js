"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/books", label: "Books" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-peach-deep/40 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-5 sm:py-4">
        <Link href="/" className="shrink-0">
          {/* Trimmed, background-removed copy of pacell-logo.png — the
              original has ~37% white padding, which shrinks the lettering
              to nothing at nav height. */}
          <Image
            src="/pacell-logo-nav.png"
            alt="Books by Pacell McCobb"
            width={1891}
            height={458}
            priority
            sizes="(max-width: 640px) 200px, 260px"
            className="h-11 w-auto sm:h-14 lg:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-1 font-hand md:flex">
          {links.map((link, i) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <span key={link.href} className="flex items-center">
                {i > 0 && (
                  <span aria-hidden="true" className="px-1 text-peach-deep">
                    |
                  </span>
                )}
                <Link
                  href={link.href}
                  className={`rounded-full px-3 py-1.5 text-lg tracking-wide transition-colors ${
                    active
                      ? "text-coral"
                      : "text-navy-soft hover:text-coral"
                  }`}
                >
                  {link.label}
                </Link>
              </span>
            );
          })}
          <Link
            href="/books"
            className="ml-3 rounded-full bg-coral px-5 py-1.5 text-lg text-cream shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Read the Books
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center rounded-full border border-peach-deep/60 text-navy md:hidden"
        >
          <span className="sr-only">Menu</span>
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            <path
              d={open ? "M4 4 L16 16 M16 4 L4 16" : "M3 5h14M3 10h14M3 15h14"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-peach-deep/40 bg-cream px-5 pb-5 font-hand text-lg md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-peach/60 py-3 text-navy last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
