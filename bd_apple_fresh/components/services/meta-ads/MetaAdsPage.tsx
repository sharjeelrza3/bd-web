"use client";

import Hero from "./Hero";
import PainPointsSection from "./PainPointsSection";
import CampaignSystem from "./CampaignSystem";
import CreativeShowcase from "./CreativeShowcase";
import FunnelSection from "./FunnelSection";
import AudienceSection from "./AudienceSection";
import PerformanceDashboard from "./PerformanceDashboard";
import ProcessSection from "./ProcessSection";
import ResultsSection from "./ResultsSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";

export default function MetaAdsPage() {
  return (
    <main className="bg-[#f5f5f7] text-[#101010]">
      <Hero />
      <PainPointsSection />
      <CampaignSystem />
      <CreativeShowcase />
      <FunnelSection />
      <AudienceSection />
      <PerformanceDashboard />
      <ProcessSection />
      <ResultsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
