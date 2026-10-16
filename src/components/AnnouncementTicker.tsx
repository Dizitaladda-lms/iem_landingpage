"use client";

import React from "react";

export default function AnnouncementTicker() {
  const items = [
    "JASHN REALTY PRESENTS RUNWAY KIDS FASHION WEEK 2026",
    "NOMINATIONS START (20–31 OCT 2026)",
    "1ST MEGA AUDITION & SCREENING @ JASHN REALTY (01 NOV)",
    "MEET & GREET (16 OCT) — VENUE DISCLOSED TO INVITED GUESTS",
    "2ND AUDITION FOR 24 SHORTLISTED CANDIDATES (14 NOV @ GD GOENKA)",
    "FINALIST PORTFOLIO PHOTOSHOOT",
    "GRAND FINALE & AWARDS (DATE ANNOUNCING SOON)",
    "CASH PRIZE ₹11,000 WITH GIFT HAMPER",
    "100% EDUCATION SCHOLARSHIP",
    "1ST TIME HNI KIDS CALENDAR",
  ];

  return (
    <div className="bg-surface border-y border-border-pink py-3 overflow-hidden select-none">
      <div className="flex w-max animate-marquee">
        {/* Repeat list twice for seamless loop */}
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center mx-6">
            <span className="text-xs font-bold tracking-widest text-charcoal uppercase">
              {text}
            </span>
            <span className="ml-6 w-1.5 h-1.5 rounded-full bg-pink-primary inline-block"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
