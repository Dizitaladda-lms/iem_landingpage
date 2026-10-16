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
  // You can easily add more sponsors here, e.g.:
  // {
  //   name: "Partner Brand",
  //   url: "https://example.com/",
  //   logo: "https://example.com/logo.png"
  // },
];

// Single constant for iframe load count detection:
// 1st load = form opened initially, 2nd load = form submitted.
// (Change to 3 if your form has 2 pages before submission)
export const SUBMIT_LOAD_COUNT = 2;

export default function RegistrationFormSection() {
  // Embedded Google Form state & counter
  const [iframeLoadCount, setIframeLoadCount] = useState(0);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<"google_form" | "card_preview">("google_form");

  // Google Form Embed URL (Official IEM Registration Form)
  const GOOGLE_FORM_EMBED_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLScLhiYtE6aWKlI-T3tou7OzfVQVucW4uxHgf8Q7P5bLI4JKLw/viewform?embedded=true";

  // Handle iframe load counter
  const handleIframeLoad = () => {
    setIframeLoadCount((prev) => {
      const nextCount = prev + 1;
      if (nextCount >= SUBMIT_LOAD_COUNT) {
        setIsFormSubmitted(true);
        try {
          confetti({
            particleCount: 110,
            spread: 80,
            origin: { y: 0.6 },
            colors: ["#2e2c75", "#D4AF37", "#F6E29C", "#112266", "#FFFFFF"],
          });
        } catch {
          // ignore if canvas-confetti is unavailable
        }
      }
      return nextCount;
    });
  };

  // State for optional child voting card generator
  const [formData, setFormData] = useState({
    childName: "Kiara Advani",
    age: "7 Years",
    selectedClass: "Class 2",
    category: "Class 2 – Class 3 (Independent Ramp Walk)",
    parentName: "Sunita Advani",
    relation: "Mother",
    whatsapp: "+91 98765 43210",
    email: "sunita@example.com",
    city: "Gomti Nagar, Lucknow",
    instagramHandle: "@kiara_little_star",
    hobbies: "Dancing & Stage Posing",
    photoUrl: "",
    agreedToTerms: true,
  });

  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    id: string;
    childName: string;
    category: string;
    whatsapp: string;
  } | null>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setPhotoPreview(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleManualCardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.childName || !formData.whatsapp) {
      alert("Please provide the child's name and contact WhatsApp number.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `KFW-LKO-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedData({
        id: generatedId,
        childName: formData.childName,
        category: formData.category,
        whatsapp: formData.whatsapp,
      });
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#112266", "#D4AF37", "#F6E29C", "#FFFFFF"],
        });
      } catch {
        // ignore
      }
    }, 600);
  };

  const handleShareWhatsApp = () => {
    if (!submittedData) return;
    const shareText = `Vote for ${submittedData.childName} in Jashn Realty Presents Runway Kids Fashion Week 2026 (IEM × AdOnMo)! Contestant ID: ${submittedData.id}. Support with your Likes and Shares for the Wild Card Finale Entry!`;
    const url = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="register" className="py-20 bg-white border-b border-border-pink relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
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

          {/* View Mode Toggle Buttons */}
          <div className="flex bg-surface p-1 rounded-lg border border-border-pink shrink-0">
            <button
              onClick={() => setActiveTab("google_form")}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all ${
                activeTab === "google_form"
                  ? "bg-pink-primary text-white shadow-sm"
                  : "text-charcoal hover:text-pink-primary"
              }`}
            >
              Official Google Form
            </button>
            <button
              onClick={() => setActiveTab("card_preview")}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all ${
                activeTab === "card_preview"
                  ? "bg-pink-primary text-white shadow-sm"
                  : "text-charcoal hover:text-pink-primary"
              }`}
            >
              Social Voting Card Preview
            </button>
          </div>
        </div>

        {/* TAB 1: EMBEDDED GOOGLE FORM WITH CUSTOM THANK YOU + SPONSORS */}
        {activeTab === "google_form" && (
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
              </div>
            ) : (
              /* POST-SUBMISSION CUSTOM THANK YOU & SPONSOR SHOWCASE */
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
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                    {sponsorsList.map((sponsor, idx) => (
                      <div
                        key={idx}
                        className="group bg-surface border border-border-pink hover:border-[#2e2c75] rounded-xl p-6 flex flex-col items-center justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden text-center"
                      >
                        {/* Top Accent Strip with Jashn Realty brand color #2e2c75 */}
                        <div className="absolute top-0 inset-x-0 h-1.5 bg-[#2e2c75]" />

                        {/* Sponsor Logo / Fallback to Name */}
                        <div className="w-full h-24 flex items-center justify-center mb-4 p-3 bg-white rounded-lg border border-border-pink">
                          {sponsor.logo ? (
                            <img
                              src={sponsor.logo}
                              alt={sponsor.name}
                              className="max-h-16 max-w-[170px] object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                          ) : (
                            <span className="font-serif font-black text-lg text-[#2e2c75]">
                              {sponsor.name}
                            </span>
                          )}
                        </div>

                        {/* Sponsor Name */}
                        <h5 className="font-serif font-bold text-base text-charcoal mb-4">
                          {sponsor.name}
                        </h5>

                        {/* Visit Website Button */}
                        <a
                          href={sponsor.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 px-4 text-center text-xs font-extrabold uppercase tracking-wider text-white bg-[#2e2c75] hover:bg-[#1f1d53] rounded-lg shadow-sm transition-all duration-200 flex items-center justify-center gap-1.5"
                        >
                          <span>Visit Website</span>
                          <span className="transition-transform duration-200 group-hover:translate-x-1">
                            &rarr;
                          </span>
                        </a>
                      </div>
                    ))}
                  </div>

                  {/* Reset/Submit Another Response Link */}
                  <div className="mt-10 pt-6 border-t border-dashed border-border-pink">
                    <button
                      onClick={() => {
                        setIframeLoadCount(0);
                        setIsFormSubmitted(false);
                      }}
                      className="text-xs font-bold uppercase tracking-wider text-pink-primary hover:text-pink-dark transition-colors"
                    >
                      &larr; Submit Another Response or Reopen Form
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: SOCIAL VOTING CARD GENERATOR & PREVIEW */}
        {activeTab === "card_preview" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-7 bg-surface border border-border-pink rounded-xl p-6 sm:p-8">
              <form onSubmit={handleManualCardSubmit} className="space-y-6">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-border-pink">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-pink-primary">
                      SECTION 01 &bull; PARTICIPANT DETAILS
                    </span>
                    <span className="text-[10px] font-bold uppercase bg-white border border-border-pink px-2 py-0.5 rounded text-charcoal">
                      FREE ENTRY
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                        Child&apos;s Full Name *
                      </label>
                      <input
                        type="text"
                        name="childName"
                        required
                        value={formData.childName}
                        onChange={handleInputChange}
                        placeholder="e.g. Kiara Advani"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-border-pink rounded focus:outline-none focus:border-pink-primary text-charcoal font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                        Age / Date of Birth *
                      </label>
                      <input
                        type="text"
                        name="age"
                        required
                        value={formData.age}
                        onChange={handleInputChange}
                        placeholder="e.g. 7 Years (15 May 2019)"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-border-pink rounded focus:outline-none focus:border-pink-primary text-charcoal font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                        School / Current Class
                      </label>
                      <input
                        type="text"
                        name="selectedClass"
                        value={formData.selectedClass}
                        onChange={handleInputChange}
                        placeholder="e.g. Class 2 / Toddler"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-border-pink rounded focus:outline-none focus:border-pink-primary text-charcoal font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                        Contest Category *
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-border-pink rounded focus:outline-none focus:border-pink-primary text-charcoal font-medium"
                      >
                        <option value="Newborn – UKG (Ramp Walk with Mom/Dad)">
                          Category 1: Newborn – UKG (Walk with Mom/Dad)
                        </option>
                        <option value="Class 1 (Independent Fun & Cutest Smile Walk)">
                          Category 2: Class 1 (Independent Walk)
                        </option>
                        <option value="Class 2 – Class 3 (Independent Ramp Walk)">
                          Category 3: Class 2 – Class 3 (Ramp Walk)
                        </option>
                        <option value="Class 4 – Class 8 (Groomed Fashion Walk)">
                          Category 4: Class 4 – Class 8 (Fashion Walk)
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-border-pink">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-pink-primary">
                      SECTION 02 &bull; PARENT / GUARDIAN DETAILS
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                        Parent / Guardian Name *
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        required
                        value={formData.parentName}
                        onChange={handleInputChange}
                        placeholder="e.g. Sunita Advani"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-border-pink rounded focus:outline-none focus:border-pink-primary text-charcoal font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                        Relation with Child
                      </label>
                      <select
                        name="relation"
                        value={formData.relation}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-border-pink rounded focus:outline-none focus:border-pink-primary text-charcoal font-medium"
                      >
                        <option value="Mother">Mother</option>
                        <option value="Father">Father</option>
                        <option value="Guardian">Guardian</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                        WhatsApp Contact Number *
                      </label>
                      <input
                        type="tel"
                        name="whatsapp"
                        required
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-border-pink rounded focus:outline-none focus:border-pink-primary text-charcoal font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. parent@example.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-border-pink rounded focus:outline-none focus:border-pink-primary text-charcoal font-medium"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                      Residential City / Area (Lucknow)
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="e.g. Gomti Nagar, Lucknow"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-border-pink rounded focus:outline-none focus:border-pink-primary text-charcoal font-medium"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-border-pink">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-pink-primary">
                      SECTION 03 &bull; PORTFOLIO PHOTO UPLOAD
                    </span>
                  </div>

                  <div className="border-2 border-dashed border-border-pink rounded-xl p-5 text-center bg-white">
                    <input
                      type="file"
                      id="child-photo-input"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                    <label
                      htmlFor="child-photo-input"
                      className="cursor-pointer flex flex-col items-center justify-center space-y-2"
                    >
                      <span className="w-10 h-10 rounded-full bg-pink-soft flex items-center justify-center text-pink-primary font-bold text-lg">
                        +
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-pink-primary">
                        {photoPreview ? "Change Uploaded Photo" : "Upload Child's Best Picture"}
                      </span>
                      <span className="text-[10px] text-charcoal-muted">
                        JPG, PNG up to 10MB. Used on the official Voting Creative.
                      </span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 text-center text-xs font-extrabold uppercase tracking-widest text-white bg-pink-primary hover:bg-pink-dark rounded transition-colors"
                >
                  {isSubmitting ? "Generating Card..." : "Preview & Generate Voting Card"}
                </button>
              </form>
            </div>

            {/* Right Column: Live Voting Creative Preview */}
            <div className="lg:col-span-5 sticky top-28 space-y-4">
              <div className="bg-surface border border-border-pink rounded-xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-pink-primary block">
                    LIVE CANVAS PREVIEW
                  </span>
                  <span className="text-xs font-bold text-charcoal">
                    Official Participant Voting Card
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase bg-white border border-border-pink px-2.5 py-1 rounded text-charcoal">
                  1080 &times; 1350 (IG Ratio)
                </span>
              </div>

              {/* High-Fashion Voting Creative Banner */}
              <div className="bg-[#112266] rounded-2xl p-6 text-white shadow-2xl border-4 border-[#D4AF37] relative overflow-hidden">
                <div className="flex justify-between items-start border-b border-[#D4AF37]/40 pb-4 mb-4">
                  <div>
                    <span className="text-[9px] font-extrabold tracking-widest uppercase text-[#F6E29C] block">
                      JASHN REALTY PRESENTS
                    </span>
                    <span className="font-serif font-black text-xl text-white tracking-wider block">
                      RUNWAY KIDS
                    </span>
                    <span className="text-[9px] font-bold tracking-widest uppercase text-[#D4AF37] block">
                      FASHION WEEK 2026 &bull; LUCKNOW
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[8px] font-bold uppercase tracking-widest bg-[#D4AF37] text-[#112266] px-2 py-0.5 rounded font-mono">
                      OFFICIAL CONTESTANT
                    </span>
                  </div>
                </div>

                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-gradient-to-b from-[#1a2d7c] to-[#0a1440] border-2 border-[#D4AF37]/50 flex items-center justify-center mb-4">
                  {photoPreview ? (
                    <img
                      src={photoPreview}
                      alt={formData.childName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center p-6 space-y-2">
                      <div className="w-16 h-16 rounded-full bg-white/10 mx-auto flex items-center justify-center font-serif text-2xl font-bold text-[#F6E29C]">
                        {formData.childName.charAt(0)}
                      </div>
                      <div className="text-sm font-bold tracking-wider uppercase text-white">
                        {formData.childName}
                      </div>
                      <div className="text-[11px] text-[#F6E29C]/80">
                        {formData.category}
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-1.5 border-t border-[#D4AF37]/40 pt-4 text-center">
                  <span className="text-xs font-black tracking-widest uppercase text-[#F6E29C] block">
                    VOTE &amp; SUPPORT FOR WILD CARD ENTRY
                  </span>
                  <div className="text-[10px] text-white/80">
                    Contestant ID: <strong>KFW-LKO-PREVIEW</strong> &bull; Organised by IEM &times; AdOnMo
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
