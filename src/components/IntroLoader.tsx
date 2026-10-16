"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const introImages = [
  {
    src: "/images/category-1.jpg",
  },
  {
    src: "/images/category-2.jpg",
  },
  {
    src: "/images/category-3.jpg",
  },
];

export default function IntroLoader() {
  // stage: "brand" -> 0 -> 1 -> 2 -> "exit" -> "done"
  const [stage, setStage] = useState<"brand" | 0 | 1 | 2 | "exit" | "done">("brand");

  useEffect(() => {
    const t1 = setTimeout(() => setStage(0), 1800);
    const t2 = setTimeout(() => setStage(1), 3400);
    const t3 = setTimeout(() => setStage(2), 5000);
    const t4 = setTimeout(() => setStage("exit"), 6600);
    const t5 = setTimeout(() => {
      setStage("done");
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("iem_intro_completed"));
        try {
          sessionStorage.setItem("iem_intro_finished", "true");
        } catch {
          // ignore
        }
      }
    }, 7300);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  if (stage === "done") return null;

  return (
    <div
      className={`fixed inset-0 h-[100dvh] z-[100] flex items-center justify-center bg-surface px-4 transition-all duration-700 ease-in-out overflow-hidden ${
        stage === "exit"
          ? "-translate-y-full opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100"
      }`}
    >
      {/* Soft Royal Navy & Gold Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[360px] sm:w-[640px] h-[360px] sm:h-[640px] rounded-full bg-gold/15 blur-3xl" />
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[320px] sm:w-[540px] h-[320px] sm:h-[540px] rounded-full bg-pink-soft/80 blur-3xl" />
      </div>

      {/* Center Content: ONLY Official Logo Rising & Filling Up, then Top-Down Dropping Images */}
      <div className="relative z-10 w-full max-w-4xl h-full flex items-center justify-center overflow-hidden">
        {stage === "brand" ? (
          <div className="intro-rise-up relative w-[280px] sm:w-[420px] lg:w-[520px] aspect-[684/466] select-none">
            {/* Base Soft Faded Ghost Logo */}
            <Image
              src="/images/runway-logo.png"
              alt="Jashn Realty Presents Runway Kids Fashion Week"
              fill
              priority
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 420px, 520px"
              className="object-contain opacity-20"
            />
            {/* Bottom-to-Top Loading/Filling Full-Color Logo */}
            <div className="intro-text-fill absolute inset-0">
              <Image
                src="/images/runway-logo.png"
                alt="Jashn Realty Presents Runway Kids Fashion Week"
                fill
                priority
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 420px, 520px"
                className="object-contain drop-shadow-[0_10px_25px_rgba(17,34,102,0.18)]"
              />
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full flex items-center justify-center">
            {introImages.map((item, idx) => {
              const isActive = stage === idx;
              if (!isActive) return null;

              return (
                <div
                  key={item.src}
                  className="intro-image-drop flex items-center justify-center w-full h-full"
                >
                  <div className="relative h-[68dvh] sm:h-[74dvh] lg:h-[78dvh] aspect-[9/16] max-w-[86vw] rounded-2xl overflow-hidden border-2 border-gold shadow-[0_25px_60px_-15px_rgba(17,34,102,0.4)] bg-pink-soft">
                    <Image
                      src={item.src}
                      alt={`Runway Kids Fashion Week Category ${idx + 1}`}
                      fill
                      priority
                      sizes="(max-width: 640px) 85vw, 420px"
                      className="object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
