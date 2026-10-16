"use client";

import React, { useState, useEffect } from "react";

export default function HeroSection() {
  // Live Countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 38,
    hours: 14,
    minutes: 42,
    seconds: 18,
  });

  useEffect(() => {
    // Target: 1st Mega Audition Nov 01, 2026 @ Jashn Realty
    const targetDate = new Date("2026-11-01T10:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-surface pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20 border-b border-border-pink overflow-hidden">
      {/* Background architectural grid lines - Clean & elegant, no gradients */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="h-full w-full border-x border-border-pink max-w-7xl mx-auto flex justify-between">
          <div className="w-px h-full bg-border-pink"></div>
          <div className="w-px h-full bg-border-pink"></div>
          <div className="w-px h-full bg-border-pink"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            {/* Super Header Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-gold/70 rounded-full text-[9px] sm:text-xs font-bold uppercase tracking-wider text-pink-primary max-w-full shadow-sm">
              <span className="w-2 h-2 shrink-0 rounded-full bg-gold animate-ping"></span>
              <span className="leading-relaxed truncate sm:whitespace-normal">OFFICIAL NOMINATIONS OPEN — LUCKNOW EDITION</span>
            </div>

            {/* Main Headline (Catalog Style: Jashn Realty Presents Runway Kids Fashion Week) */}
            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-[0.18em] text-pink-primary">
                <span>JASHN <span className="text-gold-dark">|</span> REALTY PRESENTS</span>
                <span className="text-charcoal-muted text-[10px] sm:text-xs font-bold tracking-[0.14em]">
                  &bull; IEM &times; ADONMO
                </span>
              </div>

              <div className="relative inline-block">
                <div className="text-[3.2rem] sm:text-[5rem] lg:text-[5.8rem] xl:text-[6.8rem] font-serif font-bold leading-none tracking-tight text-transparent">
                  <span className="poster-title inline-block">
                    Runway
                  </span>
                </div>
              </div>

              <div className="pt-0.5">
                <span className="poster-subtitle inline-block rounded-full px-4 sm:px-6 py-1.5 font-serif text-xs sm:text-lg lg:text-xl font-extrabold uppercase tracking-[0.18em] text-white shadow-md">
                  Kids Fashion Week 2026
                </span>
              </div>

              <div className="pt-1 space-y-0.5">
                <div className="font-serif text-sm sm:text-lg font-extrabold uppercase tracking-[0.2em] text-pink-primary">
                  Big Dreams &bull; Little Steps
                </div>
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] text-gold-dark">
                  A Premium Kids Fashion &amp; Lifestyle Event
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-charcoal-muted max-w-xl font-normal leading-relaxed">
              A premier celebration of confidence, style, and stage presence for children 
              from newborn to Class 5. Complete with portfolio shoots, city tours, 
              social voting, and a prestigious Mega Finale on Children&apos;s Day.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScLhiYtE6aWKlI-T3tou7OzfVQVucW4uxHgf8Q7P5bLI4JKLw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 sm:px-6 py-3 text-center text-xs font-extrabold uppercase tracking-wider text-white bg-pink-primary hover:bg-pink-dark transition-all rounded shadow-sm hover:shadow active:scale-95"
              >
                Nominate Your Child [Free Entry]
              </a>
              <a
                href="#voting"
                className="w-full sm:w-auto px-5 sm:px-6 py-3 text-center text-xs font-extrabold uppercase tracking-wider text-charcoal bg-white border border-border-pink hover:bg-pink-soft transition-all rounded shadow-sm hover:shadow"
              >
                Participate in Social Voting
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-5 border-t border-border-pink">
              <div className="bg-white p-2.5 sm:p-3 rounded border border-border-pink">
                <div className="text-xl font-serif font-black text-charcoal">4</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-charcoal-muted">
                  Age Categories
                </div>
              </div>
              <div className="bg-white p-2.5 sm:p-3 rounded border border-border-pink">
                <div className="text-xl font-serif font-black text-pink-primary">₹11,000</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-charcoal-muted">
                  Cash Prize + Gift Hamper
                </div>
              </div>
              <div className="bg-white p-2.5 sm:p-3 rounded border border-border-pink">
                <div className="text-xl font-serif font-black text-charcoal">01 NOV</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-charcoal-muted">
                  1st Audition @ Jashn
                </div>
              </div>
              <div className="bg-white p-2.5 sm:p-3 rounded border border-border-pink">
                <div className="text-base sm:text-lg font-serif font-black text-pink-primary whitespace-nowrap">COMING SOON</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-charcoal-muted">
                  Grand Finale
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Live Countdown & Event Brief */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white border border-border-pink rounded-xl p-5 sm:p-6 shadow-lg relative">
              
              {/* Event Badge Header */}
              <div className="flex flex-wrap justify-between items-start gap-3 pb-5 border-b border-border-pink">
                <div>
                  <span className="text-[10px] font-extrabold tracking-widest uppercase bg-pink-soft text-pink-dark px-2.5 py-1 rounded">
                    OFFICIAL EVENT BRIEF
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-charcoal mt-2">
                    1st Mega Audition &amp; Screening
                  </h3>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-xs font-bold text-charcoal block">01 Nov 2026</span>
                  <span className="text-[11px] font-medium text-charcoal-muted">Jashn Realty, Lucknow</span>
                </div>
              </div>

              {/* Countdown Clock Display - Solid blocks, no gradients */}
              <div className="py-5">
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-3 text-center">
                  COUNTDOWN TO 1ST MEGA AUDITION @ JASHN REALTY
                </div>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="bg-surface border border-border-pink p-2 sm:p-2.5 rounded">
                    <span className="text-lg sm:text-xl font-bold font-serif text-charcoal block">
                      {timeLeft.days}
                    </span>
                    <span className="text-[10px] font-bold uppercase text-charcoal-muted">Days</span>
                  </div>
                  <div className="bg-surface border border-border-pink p-2 sm:p-2.5 rounded">
                    <span className="text-lg sm:text-xl font-bold font-serif text-charcoal block">
                      {timeLeft.hours}
                    </span>
                    <span className="text-[10px] font-bold uppercase text-charcoal-muted">Hours</span>
                  </div>
                  <div className="bg-surface border border-border-pink p-2 sm:p-2.5 rounded">
                    <span className="text-lg sm:text-xl font-bold font-serif text-charcoal block">
                      {timeLeft.minutes}
                    </span>
                    <span className="text-[10px] font-bold uppercase text-charcoal-muted">Mins</span>
                  </div>
                  <div className="bg-surface border border-border-pink p-2 sm:p-2.5 rounded">
                    <span className="text-lg sm:text-xl font-bold font-serif text-pink-primary block">
                      {timeLeft.seconds}
                    </span>
                    <span className="text-[10px] font-bold uppercase text-pink-dark">Secs</span>
                  </div>
                </div>
              </div>

              {/* Highlights Feature List */}
              <div className="space-y-3 pt-2 border-t border-border-pink">
                <div className="flex items-start gap-3">
                  <span className="text-xs font-black text-pink-primary bg-pink-soft px-2 py-0.5 rounded">
                    01
                  </span>
                  <div className="text-xs text-charcoal leading-tight">
                    <strong className="font-bold">Fashion on Wheels:</strong> City-wide branded open bus roadshow with participants and mentors.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-black text-pink-primary bg-pink-soft px-2 py-0.5 rounded">
                    02
                  </span>
                  <div className="text-xs text-charcoal leading-tight">
                    <strong className="font-bold">Professional Photoshoot:</strong> Portfolio album &amp; opportunity to become the face of partner brands.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-black text-pink-primary bg-pink-soft px-2 py-0.5 rounded">
                    03
                  </span>
                  <div className="text-xs text-charcoal leading-tight">
                    <strong className="font-bold">Social Media Voting:</strong> High-engagement creatives qualify directly for Wild Card entry.
                  </div>
                </div>
              </div>

              {/* Instant Registration Jump CTA */}
              <div className="mt-6 pt-4 border-t border-border-pink">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScLhiYtE6aWKlI-T3tou7OzfVQVucW4uxHgf8Q7P5bLI4JKLw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block py-3 text-center text-xs font-extrabold uppercase tracking-widest text-white bg-pink-primary hover:bg-pink-dark rounded transition-colors"
                >
                  Start Registration &amp; Generate Card
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
