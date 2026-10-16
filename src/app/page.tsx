import IntroLoader from "@/components/IntroLoader";
import VisitorLeadCaptureModal from "@/components/VisitorLeadCaptureModal";
import Header from "@/components/Header";
import AnnouncementTicker from "@/components/AnnouncementTicker";
import HeroSection from "@/components/HeroSection";
import HeroGalleryCarousel from "@/components/HeroGalleryCarousel";
import OverviewSection from "@/components/OverviewSection";
import CategoriesSection from "@/components/CategoriesSection";
import ScheduleFlowSection from "@/components/ScheduleFlowSection";
import WildCardVotingSection from "@/components/WildCardVotingSection";
import FashionOnWheelsSection from "@/components/FashionOnWheelsSection";
import RegistrationFormSection from "@/components/RegistrationFormSection";
import PrizesSection from "@/components/PrizesSection";
import RulesSection from "@/components/RulesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-24 text-charcoal md:pb-0">
      {/* 0. Initial Brand Loader + 3 Sequential Category Images Showcase */}
      <IntroLoader />

      {/* 0B. Site-Wide Visitor Lead Capture Modal for IEM Organizer Data */}
      <VisitorLeadCaptureModal />

      {/* 1. Sticky Navigation Header */}
      <Header />

      {/* 2. Horizontal Announcement Marquee */}
      <AnnouncementTicker />

      {/* 3. Hero Section with Live Countdown & Highlights */}
      <HeroSection />

      {/* 3B. 360° Circular Rotating Photo Showcase Section */}
      <HeroGalleryCarousel />

      {/* 4. Event Overview & 4 Core Pillars */}
      <OverviewSection />

      {/* 5. Age & Ramp Walk Categories */}
      <CategoriesSection />

      {/* 6. Chronological Schedule & Flow (Oct to Nov) */}
      <ScheduleFlowSection />

      {/* 7. Social Media Wild Card Voting & Live Nominees Board */}
      <WildCardVotingSection />

      {/* 8. Signature Attraction: Fashion on Wheels Tour */}
      <FashionOnWheelsSection />

      {/* 9. Core Feature: Registration Form & Real-Time Voting Card Generator */}
      <RegistrationFormSection />

      {/* 10. Winner Rewards & Cash Prizes */}
      <PrizesSection />

      {/* 11. Official Guidelines & Parent FAQs */}
      <RulesSection />

      {/* 12. Footer with IEM & AdOnMo Credentials */}
      <Footer />
    </main>
  );
}
