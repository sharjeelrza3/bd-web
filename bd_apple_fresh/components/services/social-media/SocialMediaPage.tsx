"use client";

import Hero from "./Hero";
import TransformationSection from "./TransformationSection";
import EcosystemSection from "./EcosystemSection";
import ContentEngineSection from "./ContentEngineSection";
import CalendarSection from "./CalendarSection";
import CreativeShowcase from "./CreativeShowcase";
import ReelsStrategySection from "./ReelsStrategySection";
import PlatformSection from "./PlatformSection";
import GrowthDashboard from "./GrowthDashboard";
import ResultsSection from "./ResultsSection";
import PackagesSection from "./PackagesSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";

export default function SocialMediaPage() {
  return (
    <main className="bg-[#f5f5f7] text-[#101010]">
      <Hero />
      <TransformationSection />
      <EcosystemSection />
      <ContentEngineSection />
      <CalendarSection />
      <CreativeShowcase />
      <ReelsStrategySection />
      <PlatformSection />
      <GrowthDashboard />
      <ResultsSection />
      <PackagesSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
