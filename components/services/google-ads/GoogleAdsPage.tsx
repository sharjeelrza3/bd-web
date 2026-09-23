"use client";

import Hero from "./Hero";
import SearchIntentSection from "./SearchIntentSection";
import CampaignTypesSection from "./CampaignTypesSection";
import AdsPreviewSection from "./AdsPreviewSection";
import KeywordStrategySection from "./KeywordStrategySection";
import PerformanceSection from "./PerformanceSection";
import OptimizationProcess from "./OptimizationProcess";
import ResultsSection from "./ResultsSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";

export default function GoogleAdsPage() {
  return (
    <main className="bg-[#f5f5f7] text-[#101010]">
      <Hero />
      <SearchIntentSection />
      <CampaignTypesSection />
      <AdsPreviewSection />
      <KeywordStrategySection />
      <PerformanceSection />
      <OptimizationProcess />
      <ResultsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
