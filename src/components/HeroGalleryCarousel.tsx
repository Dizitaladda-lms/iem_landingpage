"use client";

import Image from "next/image";
import React, { useState } from "react";

const slides = [
  {
    id: 1,
    image: "/images/category-1.jpg",
    alt: "Category 1 Newborn Walk with Mom at Runway Kids Fashion Week",
    label: "CATEGORY 01 • UNDER 1 YEAR",
    title: "Newborn — Walk with Mom",
    badge: "CATEGORY 01",
  },
  {
    id: 2,
    image: "/images/category-2.jpg",
    alt: "Category 2 Class 1 to Class 3 Independent Ramp Walk",
    label: "CATEGORY 02 • CLASS 1 – CLASS 3",
    title: "Independent Ramp Walk",
    badge: "CATEGORY 02",
  },
  {
    id: 3,
    image: "/images/category-3.jpg",
    alt: "Category 3 Class 4 to Class 5 Groomed Fashion Walk",
    label: "CATEGORY 03 • CLASS 4 – CLASS 5",
    title: "Groomed Fashion Walk",
    badge: "CATEGORY 03",
  },
  {
    id: 4,
    image: "/images/category-1.jpg",
    alt: "Category 1 Newborn Walk with Mom showcase",
    label: "MOTHER & BABY DUO",
    title: "Charming Stroller Walk",
    badge: "CATEGORY 01",
  },
  {
    id: 5,
    image: "/images/category-2.jpg",
    alt: "Category 2 Class 1 to Class 3 Themed Round",
    label: "SOLO RAMP + THEMED ROUND",
    title: "Little Steps, Big Dreams",
    badge: "CATEGORY 02",
  },
  {
    id: 6,
    image: "/images/category-3.jpg",
    alt: "Category 3 Designer Showcase at Runway Kids Fashion Week 2026",
    label: "DESIGNER SHOWCASE",
    title: "Every Child Can Shine",
    badge: "CATEGORY 03",
  },
];

export default function HeroGalleryCarousel() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      className="relative bg-white py-12 sm:py-16 lg:py-24 border-b border-border-pink overflow-hidden"
      aria-label="Runway Kids rotating photo showcase"
    >
      {/* Decorative subtle background glow & rotating circular orbit rings */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="w-[260px] h-[260px] sm:w-[420px] sm:h-[420px] lg:w-[560px] lg:h-[560px] rounded-full border border-dashed border-gold/50 orbit-ring-spin flex items-center justify-between">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 -ml-1.5 rounded-full bg-gold shadow-[0_0_12px_#D4AF37]" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 -mr-1.5 rounded-full bg-pink-primary shadow-[0_0_12px_#112266]" />
        </div>
        <div className="absolute w-[200px] h-[200px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px] rounded-full bg-pink-soft/70 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-surface text-pink-primary border border-gold/60 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-full mb-3">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span>JASHN REALTY PRESENTS &bull; 360° RUNWAY GALLERY</span>
          </div>
          <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl font-extrabold text-pink-primary uppercase tracking-tight">
            Jashn Realty Presents Runway Kids Fashion Week
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-charcoal-muted leading-relaxed px-2">
            Glimpses of our official categories from <strong className="text-pink-primary">Jashn Realty Presents Runway Kids Fashion Week 2026</strong>. Tap or hover over the rotating circle to pause and inspect.
          </p>
        </div>

        {/* 3D Circular Rotating Ring Container */}
        <div
          className="carousel-3d-scene relative mx-auto flex h-[240px] sm:h-[330px] md:h-[390px] lg:h-[430px] w-full items-center justify-center select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div
            className={`carousel-3d-ring relative h-[195px] w-[125px] sm:h-[260px] sm:w-[170px] md:h-[310px] md:w-[205px] lg:h-[340px] lg:w-[230px] ${
              isPaused ? "paused" : ""
            }`}
          >
            {slides.map((slide, index) => {
              const angle = index * (360 / slides.length);
              return (
                <div
                  key={slide.id}
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(var(--ring-radius))`,
                  }}
                  className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-gold bg-pink-soft shadow-[0_20px_50px_-15px_rgba(17,34,102,0.45)] transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    priority={index < 3}
                    sizes="(max-width: 640px) 130px, (max-width: 1024px) 205px, 240px"
                    className="object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Control Bar (Strict Typography, No Icons) */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            className="w-full sm:w-auto px-5 py-3 sm:py-2.5 text-xs font-extrabold uppercase tracking-wider text-pink-dark bg-surface border border-border-pink hover:bg-pink-soft rounded-full transition-colors"
          >
            {isPaused ? "Resume 360° Rotation" : "Pause Rotation"}
          </button>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScLhiYtE6aWKlI-T3tou7OzfVQVucW4uxHgf8Q7P5bLI4JKLw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center px-6 py-3 sm:py-2.5 text-xs font-extrabold uppercase tracking-wider text-white bg-pink-primary hover:bg-pink-dark rounded-full shadow-sm transition-colors"
          >
            Nominate Your Child [Free Entry]
          </a>
        </div>
      </div>
    </section>
  );
}
