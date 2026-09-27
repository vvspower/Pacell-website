"use client";

import Image from "next/image";
import { Fragment, useEffect, useState } from "react";

// Each slide carries a portrait `phone` crop: the landscape versions are
// built around a light area on the right for the copy, which crops to a
// sliver in the phone-sized band.
const slides = [
  {
    src: "/pacel=hero-section.png",
    alt: "Children from the Meeting the Allens series sitting together on the grass under a tree at sunrise",
    position: "object-[22%_bottom] lg:object-[35%_bottom]",
    phone: {
      src: "/pacel=hero-section1-phone.png",
      position: "object-[center_top]",
    },
  },
  {
    src: "/pacel=hero-section2.png",
    alt: "A group of friends walking to school together on a sunny morning",
    position: "object-[20%_center] lg:object-[32%_center]",
    phone: {
      src: "/pacel=hero-section2-phone.png",
      position: "object-[center_top]",
    },
  },
  {
    src: "/pacel=hero-section3.png",
    alt: "Jordan standing in church holding a Bible, his family in the pew behind him",
    position: "object-[25%_center] lg:object-[35%_center]",
    phone: {
      src: "/pacel=hero-section3-phone.png",
      position: "object-[center_top]",
    },
  },
];

const INTERVAL = 6000;

export default function HeroBackground() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    // Honour reduced-motion: hold on the first illustration instead of
    // cycling.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches || paused) return;

    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      INTERVAL,
    );
    return () => clearInterval(id);
  }, [paused]);

  return (
    // On phones the illustration gets its own band above the copy; from lg
    // it becomes the section's background and the copy sits over it.
    <div className="relative h-72 w-full overflow-hidden sm:h-80 lg:absolute lg:inset-0 lg:h-auto">
      {slides.map((slide, i) => {
        const active = i === index;
        const fade = `-z-10 object-cover transition-opacity duration-[1400ms] ease-in-out ${
          active ? "opacity-100" : "opacity-0"
        }`;

        return (
          <Fragment key={slide.src}>
            {slide.phone && (
              <Image
                src={slide.phone.src}
                alt=""
                aria-hidden="true"
                fill
                priority={i === 0}
                sizes="100vw"
                className={`${fade} ${slide.phone.position} lg:hidden`}
              />
            )}
            <Image
              src={slide.src}
              alt={active ? slide.alt : ""}
              aria-hidden={!active}
              fill
              priority={i === 0}
              sizes="100vw"
              className={`${fade} ${slide.position} ${
                slide.phone ? "hidden lg:block" : ""
              }`}
            />
          </Fragment>
        );
      })}

      {/* Legibility wash. On phones it only softens the foot of the band;
          on desktop it covers the right half, where the copy sits. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-cream to-transparent lg:hidden"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 -z-10 hidden w-[58%] bg-gradient-to-l from-cream via-cream/85 to-transparent lg:block xl:w-[62%]"
      />

      {/* Dots — also let a visitor stop the rotation and pick a scene. */}
      <div
        className="absolute bottom-0 left-1/2 z-10 flex -translate-x-1/2 gap-1 lg:bottom-3 lg:left-10 lg:translate-x-0 xl:left-[4.5rem]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show illustration ${i + 1} of ${slides.length}`}
            aria-current={i === index}
            className="grid h-11 w-8 place-items-center"
          >
            <span
              className={`block h-2.5 rounded-full shadow-sm transition-all duration-300 ${
                i === index ? "w-8 bg-coral" : "w-2.5 bg-white/80"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
