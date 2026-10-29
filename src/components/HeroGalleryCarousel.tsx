"use client";

import Image from "next/image";
import React, { useState } from "react";

const pastHighlights = [
  {
    id: 1,
    image: "/images/bareilly-award-ceremony.jpg",
    alt: "Winner receiving Gift Voucher at Bareilly Edition Grand Finale",
    tag: "GRAND FINALE FELICITATION",
    venue: "Phoenix United, Bareilly",
    title: "Real Stage Honors & Gift Vouchers",
    desc: "Proud winners being felicitated with prestigious brand gift vouchers and trophies on the main stage.",
  },
  {
    id: 2,
    image: "/images/bareilly-rampwalk-mom-son.jpg",
    alt: "Mother and son playful ramp walk at Phoenix United Bareilly",
    tag: "MOTHER & CHILD RAMP WALK",
    venue: "Phoenix United, Bareilly",
    title: "Unforgettable Mother & Child Moments",
    desc: "Creating pure bonding memories as mothers and young kids walked the ramp with confidence and joyful energy.",
  },
  {
    id: 3,
    image: "/images/bareilly-traditional-walk.jpg",
    alt: "Royal ethnic designer ramp walk at Phoenix United Bareilly",
    tag: "ROYAL ETHNIC & DESIGNER ROUND",
    venue: "Phoenix United, Bareilly",
    title: "Confidence, Poise & Runway Swagger",
    desc: "Little fashion icons taking center stage in royal designer outfits with sunglasses and true runway attitude.",
  },
];

const slides = [
  {
    id: 1,
    image: "/images/bareilly-award-ceremony.jpg",
    alt: "Stage Felicitation & Gift Vouchers at Bareilly",
    badge: "BAREILLY EDITION",
    title: "Grand Stage Felicitation",
  },
  {
    id: 2,
    image: "/images/bareilly-rampwalk-mom-son.jpg",
    alt: "Mom & Son Ramp Walk at Phoenix United Bareilly",
    badge: "PHOENIX UNITED",
    title: "Mom & Child Ramp Walk",
  },
  {
    id: 3,
    image: "/images/bareilly-traditional-walk.jpg",
    alt: "Royal Traditional Runway at Phoenix United Bareilly",
    badge: "ROYAL RUNWAY",
    title: "Ethnic Designer Round",
  },
  {
    id: 4,
    image: "/images/bareilly-award-ceremony.jpg",
    alt: "Real Brand Sponsors and Winners at Bareilly Edition",
    badge: "PRIZES & AWARDS",
    title: "Real Winners & Rewards",
  },
  {
    id: 5,
    image: "/images/bareilly-rampwalk-mom-son.jpg",
    alt: "Playful Fun Moments on Stage at Bareilly",
    badge: "STAGE CONFIDENCE",
    title: "Fun & Positive Grooming",
  },
  {
    id: 6,
    image: "/images/bareilly-traditional-walk.jpg",
    alt: "Poise & Swag of Young Models at Bareilly",
    badge: "PROVEN SUCCESS",
    title: "Young Stars on the Ramp",
  },
];

export default function HeroGalleryCarousel() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      id="gallery"
      className="relative bg-white py-12 sm:py-16 lg:py-24 border-b border-border-pink overflow-hidden"
      aria-label="Previous edition gallery and 360 rotating showcase"
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
        {/* Section Header: Highlighting Proven Legacy */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-surface text-pink-primary border border-gold/60 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-full mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span>PROVEN TRACK RECORD &bull; PREVIOUS EDITION AT PHOENIX UNITED, BAREILLY</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-pink-primary uppercase tracking-tight">
            Proven Success on the Ramp: Glimpses from Bareilly
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-charcoal-muted leading-relaxed px-2">
            This isn&apos;t our first grand runway! After a blockbuster, house-full edition at{" "}
            <strong className="text-pink-primary">Phoenix United, Bareilly</strong>, the Institute of Event Management brings Lucknow&apos;s biggest runway experience presented by{" "}
            <strong className="text-pink-primary">Jashn Realty</strong> at{" "}
            <strong className="text-pink-primary">The Centrum</strong>. Check out real moments of our confident young stars below:
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
                  className="group absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-gold bg-pink-soft shadow-[0_20px_50px_-15px_rgba(17,34,102,0.45)] transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    priority={index < 3}
                    sizes="(max-width: 640px) 130px, (max-width: 1024px) 205px, 240px"
                    className="object-cover object-center"
                  />
                  {/* Subtle top badge */}
                  <div className="absolute top-2 left-2 right-2 flex justify-start z-10 pointer-events-none">
                    <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider bg-navy/85 text-gold border border-gold/40 backdrop-blur-xs">
                      {slide.badge}
                    </span>
                  </div>
                  {/* Bottom title gradient scrim */}
                  <div className="absolute inset-x-0 bottom-0 p-2 sm:p-2.5 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent pointer-events-none">
                    <p className="text-[10px] sm:text-xs font-bold text-white leading-tight">
                      {slide.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 360 Control Bar */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-pink-dark bg-surface border border-border-pink hover:bg-pink-soft rounded-full transition-colors cursor-pointer"
          >
            {isPaused ? "Resume 360° Rotation" : "Pause Rotation"}
          </button>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScLhiYtE6aWKlI-T3tou7OzfVQVucW4uxHgf8Q7P5bLI4JKLw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center px-6 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white bg-pink-primary hover:bg-pink-dark rounded-full shadow-sm transition-colors"
          >
            Nominate Your Child [Free Entry]
          </a>
        </div>

        {/* Real Proof: 3-Photo Spotlight Cards from Previous Bareilly Edition */}
        <div className="mt-14 sm:mt-18 pt-10 border-t border-border-pink/80">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-[10px] sm:text-xs font-extrabold tracking-widest uppercase text-gold bg-navy px-3 py-1 rounded-full">
              AUTHENTIC EVENT GLIMPSES
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy mt-2.5">
              Real Kids, Real Runway, Real Celebrations
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-muted mt-1.5">
              Direct snapshots from our previous season at Phoenix United Mall, Bareilly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pastHighlights.map((item) => (
              <div
                key={item.id}
                className="bg-surface rounded-2xl overflow-hidden border border-border-pink hover:border-gold/80 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 flex flex-col"
              >
                {/* Photo Container */}
                <div className="relative aspect-[3/4] w-full bg-navy/5 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 94vw, (max-width: 1200px) 33vw, 380px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  {/* Venue Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase bg-white/90 text-navy backdrop-blur-xs border border-border-pink shadow-xs">
                      📍 {item.venue}
                    </span>
                  </div>
                  {/* Category Pill */}
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-navy/85 text-gold border border-gold/40">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif text-base sm:text-lg font-bold text-navy mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-charcoal-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Proof Stats Banner */}
          <div className="mt-8 bg-surface rounded-2xl border border-gold/50 p-4 sm:p-6 shadow-xs">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-border-pink">
              <div className="pt-2 md:pt-0">
                <span className="block font-serif text-xl sm:text-2xl font-black text-pink-primary">100+</span>
                <span className="text-[11px] sm:text-xs font-semibold text-charcoal-muted uppercase">Past Participants</span>
              </div>
              <div className="pt-2 md:pt-0">
                <span className="block font-serif text-xl sm:text-2xl font-black text-gold">House-Full</span>
                <span className="text-[11px] sm:text-xs font-semibold text-charcoal-muted uppercase">Audience & Malls</span>
              </div>
              <div className="pt-2 md:pt-0">
                <span className="block font-serif text-xl sm:text-2xl font-black text-pink-primary">100% Real</span>
                <span className="text-[11px] sm:text-xs font-semibold text-charcoal-muted uppercase">Brand Gift Vouchers</span>
              </div>
              <div className="pt-2 md:pt-0">
                <span className="block font-serif text-xl sm:text-2xl font-black text-navy">The Centrum</span>
                <span className="text-[11px] sm:text-xs font-semibold text-charcoal-muted uppercase">Next Stop: Lucknow</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
