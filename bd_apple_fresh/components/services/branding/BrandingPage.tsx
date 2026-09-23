"use client";

import Hero from "./Hero";
import WhyBrandingSection from "./WhyBrandingSection";
import ServicesSection from "./ServicesSection";
import IdentityShowcase from "./IdentityShowcase";
import SocialDesignSection from "./SocialDesignSection";
import ProcessSection from "./ProcessSection";
import PortfolioSection from "./PortfolioSection";
import DeliverablesSection from "./DeliverablesSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";

export default function BrandingPage() {
  return (
    <main className="bg-[#f5f5f7] text-[#101010]">
      <Hero />
      <WhyBrandingSection />
      <ServicesSection />
      <IdentityShowcase />
      <SocialDesignSection />
      <ProcessSection />
      <PortfolioSection />
      <DeliverablesSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
