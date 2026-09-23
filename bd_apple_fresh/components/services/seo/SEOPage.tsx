"use client";

import Hero from "./Hero";
import SearchProblemStrip from "./SearchProblemStrip";
import GrowthSystem from "./GrowthSystem";
import SearchExperience from "./SearchExperience";
import LocalDominance from "./LocalDominance";
import ExperimentTimeline from "./ExperimentTimeline";
import ProofSection from "./ProofSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";
import VisualGrowthShowcase from "./VisualGrowthShowcase";

export default function SEOPage() {
  return (
    <main className="bg-[#f5f5f7] text-[#101010]">
      <Hero />
      <SearchProblemStrip />
      <GrowthSystem />
      <SearchExperience />
      <VisualGrowthShowcase />
      <LocalDominance />
      <ExperimentTimeline />
      <ProofSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
