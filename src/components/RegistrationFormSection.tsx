"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";

// -------------------------------------------------------------
// SPONSORS DATA (Add or remove sponsors here dynamically)
// -------------------------------------------------------------
export interface Sponsor {
  name: string;
  url: string;
  logo?: string;
}

export const sponsorsList: Sponsor[] = [
  {
    name: "Jashn Realty",
    url: "https://www.jashnrealty.com/",
    logo: "https://cdn.jashnrealty.com/assets/v2/images/logo-blue.png?ver=9",
  },
];

// Single constant for iframe load count detection:
// 1st load = form opened initially, 2nd load = form submitted.
export const SUBMIT_LOAD_COUNT = 2;

export default function RegistrationFormSection() {
  const [iframeLoadCount, setIframeLoadCount] = useState(0);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Official Google Form embed URL
  const GOOGLE_FORM_EMBED_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLScLhiYtE6aWKlI-T3tou7OzfVQVucW4uxHgf8Q7P5bLI4JKLw/viewform?embedded=true";

  // Handle iframe load counter
  const handleIframeLoad = () => {
    setIframeLoadCount((prev) => {
      const nextCount = prev + 1;
      if (nextCount >= SUBMIT_LOAD_COUNT) {
        setIsFormSubmitted(true);
        triggerCelebration();
      }
      return nextCount;
    });
  };

  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#2e2c75", "#D4AF37", "#F6E29C", "#112266", "#FFFFFF"],
      });
    } catch {
      // ignore
    }
  };

  return (
    <section id="register" className="py-20 bg-white border-b border-border-pink relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Clean & Direct, No Confusing Option Buttons */}
        <div className="max-w-3xl mb-10">
          <div className="inline-block px-3 py-1 bg-surface text-pink-dark border border-border-pink text-xs font-bold uppercase tracking-wider rounded mb-3">
            JASHN REALTY PRESENTS &bull; CONTESTANT NOMINATION
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal uppercase tracking-tight">
            Register Child &amp; Official Nomination
          </h2>
          <p className="mt-2 text-sm sm:text-base text-charcoal-muted leading-relaxed">
            Complete your official entry for <strong className="text-pink-primary font-semibold">Jashn Realty Presents Runway Kids Fashion Week 2026</strong> directly below. Free entry for all age categories!
          </p>
        </div>

        {/* EMBEDDED GOOGLE FORM OR POST-SUBMISSION JASHN REALTY THANK YOU CARD */}
        <div className="w-full">
          {!isFormSubmitted ? (
            /* Google Form iFrame Container */
            <div className="bg-surface border-2 border-border-pink rounded-2xl p-3 sm:p-6 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-border-pink text-xs text-charcoal-muted">
                <span className="font-bold text-pink-primary uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-pink-primary animate-pulse" />
                  LIVE REGISTRATION FORM &bull; FREE ENTRY
                </span>
                <span className="text-[11px] hidden sm:inline">
                  1st Mega Audition: 01 Nov 2026 @ Jashn Realty
                </span>
              </div>

              {/* Google Form iFrame with Load Event Listener */}
              <div className="relative w-full rounded-xl overflow-hidden bg-white min-h-[750px] sm:min-h-[850px]">
                <iframe
                  id="google-form-iframe"
                  src={GOOGLE_FORM_EMBED_URL}
                  width="100%"
                  height="850"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  onLoad={handleIframeLoad}
                  title="Official Google Registration Form"
                  className="w-full min-h-[750px] sm:min-h-[850px] border-0"
                >
                  Loading registration form…
                </iframe>
              </div>

              {/* Instant Submission Confirmation Action Bar */}
              <div className="mt-4 pt-4 border-t border-border-pink flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-4 rounded-xl border">
                <div className="text-xs text-charcoal">
                  <strong className="text-pink-primary font-bold">Done filling the form?</strong> Click here if you have submitted the response to view your official Jashn Realty confirmation card.
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setIsFormSubmitted(true);
                    triggerCelebration();
                  }}
                  className="shrink-0 px-6 py-3 text-xs font-extrabold uppercase tracking-widest text-white bg-[#2e2c75] hover:bg-[#1f1d53] rounded-lg shadow-md transition-all active:scale-95 flex items-center gap-2"
                >
                  <span>I Have Submitted Form &rarr;</span>
                </button>
              </div>
            </div>
          ) : (
            /* POST-SUBMISSION CUSTOM THANK YOU & JASHN REALTY SPONSOR CARD */
            <div
              id="thank-you-section"
              className="bg-white border-2 border-border-pink rounded-2xl p-6 sm:p-12 shadow-xl text-center animate-in fade-in zoom-in-95 duration-500 max-w-4xl mx-auto"
            >
              {/* Festive Confetti Icon */}
              <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-pink-soft border-2 border-gold flex items-center justify-center text-3xl shadow-inner">
                🎉
              </div>

              {/* Heading */}
              <h3 className="font-serif text-2xl sm:text-4xl font-black text-charcoal tracking-tight">
                Thank you for filling this form! 🎉
              </h3>

              {/* Short message */}
              <p className="mt-3 text-sm sm:text-base text-charcoal-muted font-medium max-w-xl mx-auto">
                Your response has been recorded. Our team will verify your nomination details and share your audition slot &amp; official voting card via WhatsApp.
              </p>

              {/* SPONSORS SECTION */}
              <div className="mt-12 pt-10 border-t border-border-pink">
                <div className="inline-block px-3.5 py-1 bg-surface border border-gold/70 text-[10px] font-extrabold uppercase tracking-widest text-[#2e2c75] rounded-full mb-3 shadow-sm">
                  POWERED BY JASHN REALTY &bull; OFFICIAL SPONSORS
                </div>

                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal tracking-tight">
                  Our Sponsors
                </h4>
                <p className="text-xs sm:text-sm text-charcoal-muted mt-1 max-w-md mx-auto">
                  Heartfelt gratitude to our esteemed title and partner sponsors for supporting youth talent.
                </p>

                {/* Dynamic Sponsor Cards Grid */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {sponsorsList.map((sponsor, idx) => (
                    <div
                      key={idx}
                      className="group bg-surface border-2 border-border-pink hover:border-[#2e2c75] rounded-2xl p-6 flex flex-col items-center justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl relative overflow-hidden text-center sm:col-span-2 lg:col-span-3 max-w-lg mx-auto w-full"
                    >
                      {/* Top Accent Strip with Jashn Realty brand color #2e2c75 */}
                      <div className="absolute top-0 inset-x-0 h-2 bg-[#2e2c75]" />

                      {/* Title Partner Badge */}
                      <div className="inline-block px-3 py-1 bg-white border border-gold/70 text-[10px] font-extrabold uppercase tracking-widest text-[#2e2c75] rounded-full mb-3 mt-1 shadow-sm">
                        OFFICIAL TITLE PARTNER &bull; MEGA AUDITION VENUE
                      </div>

                      {/* Sponsor Logo / Fallback to Name */}
                      <div className="w-full h-28 flex items-center justify-center mb-4 p-4 bg-white rounded-xl border border-border-pink shadow-sm">
                        {sponsor.logo ? (
                          <img
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className="max-h-20 max-w-[220px] object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <span className="font-serif font-black text-2xl text-[#2e2c75]">
                            {sponsor.name}
                          </span>
                        )}
                      </div>

                      {/* Sponsor Name & Tagline */}
                      <h5 className="font-serif font-black text-xl text-charcoal mb-1">
                        {sponsor.name}
                      </h5>
                      <p className="text-xs text-charcoal-muted leading-relaxed mb-4 max-w-sm">
                        Hosting the <strong>1st Mega Audition &amp; Screening</strong> on <strong>01st Nov 2026</strong> at Jashn Realty, Lucknow. Discovering and empowering young stars!
                      </p>

                      {/* Action Buttons */}
                      <div className="w-full space-y-2.5">
                        <a
                          href={sponsor.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-3 px-5 text-center text-xs font-extrabold uppercase tracking-widest text-white bg-[#2e2c75] hover:bg-[#1f1d53] rounded-lg shadow-md transition-all duration-200 flex items-center justify-center gap-2"
                        >
                          <span>Visit Jashn Realty Official Website</span>
                          <span className="transition-transform duration-200 group-hover:translate-x-1">
                            &rarr;
                          </span>
                        </a>
                        <a
                          href={`https://wa.me/?text=${encodeURIComponent(
                            "I just registered for Jashn Realty Presents Runway Kids Fashion Week 2026 (IEM × AdOnMo)! 1st Mega Audition on 01 Nov @ Jashn Realty, Lucknow. Check details here: " +
                              (typeof window !== "undefined" ? window.location.href : "")
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 px-4 text-center text-xs font-bold uppercase tracking-wider text-pink-dark bg-white border border-border-pink hover:bg-pink-soft rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                          <span>Share Nomination on WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Reset/Submit Another Response Link */}
                <div className="mt-10 pt-6 border-t border-dashed border-border-pink flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={() => {
                      setIframeLoadCount(0);
                      setIsFormSubmitted(false);
                    }}
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-charcoal bg-surface border border-border-pink hover:bg-white rounded-lg transition-colors"
                  >
                    &larr; Submit Another Response or Reopen Form
                  </button>
                  <a
                    href="#schedule"
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-pink-primary hover:bg-pink-dark rounded-lg transition-colors"
                  >
                    View Audition Schedule &rarr;
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
