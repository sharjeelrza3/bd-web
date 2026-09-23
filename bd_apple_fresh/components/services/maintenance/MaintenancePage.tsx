"use client";

import Hero from "./Hero";
import ProblemSection from "./ProblemSection";
import IncludedServices from "./IncludedServices";
import MonitoringSection from "./MonitoringSection";
import MaintenancePlans from "./MaintenancePlans";
import EmergencySupport from "./EmergencySupport";
import ProcessSection from "./ProcessSection";
import TestimonialSection from "./TestimonialSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";

export default function MaintenancePage() {
  return (
    <main className="bg-[#f5f5f7] text-[#101010]">
      <Hero />
      <ProblemSection />
      <IncludedServices />
      <MonitoringSection />
      <MaintenancePlans />
      <EmergencySupport />
      <ProcessSection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
