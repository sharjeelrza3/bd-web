"use client";

import ServiceHero from "./Hero";
import ProblemSection from "./ProblemSection";
import SolutionSection from "./SolutionSection";
import StatsSection from "./StatsSection";
import ProcessSection from "./ProcessSection";
import PortfolioSection from "./PortfolioSection";
import TechStackSection from "./TechStackSection";
import TestimonialSection from "./TestimonialSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";

const heroData = {
  eyebrow: "Website Development",
  breadcrumb: "/ Services / Website Development",

  titleTop: "Websites that",
  titleAccent: "impress.",
  titleBottom: "Websites that convert.",

  description:
    "We build fast, modern and SEO-ready websites designed to turn visitors into real business inquiries.",

  primaryCta: "Start Website Project",
  secondaryCta: "View Our Work",

  benefits: ["Modern UI/UX", "SEO Optimized", "Mobile First", "Lightning Fast"],

  cards: [
    {
      title: "Landing Pages",
      subtitle: "High Conversions",
      image: "/images/portfolio/tasteofkarachi-wm.webp",
      tag: "Conversion",
    },
    {
      title: "Business Sites",
      subtitle: "Credibility & Trust",
      image: "/images/portfolio/nehal-wm.webp",
      tag: "Corporate",
    },
    {
      title: "Premium Websites",
      subtitle: "Modern & Professional",
      image: "/images/portfolio/naturesynch-wm.webp",
      tag: "Featured",
    },
    {
      title: "Ecommerce",
      subtitle: "Sell More Online",
      image: "/images/portfolio/brandeals-wm.webp",
      tag: "Store",
    },
    {
      title: "SEO Optimized",
      subtitle: "Rank. Traffic. Growth.",
      image: "/images/portfolio/pestzone-wm.webp",
      tag: "Growth",
    },
  ],
};

export default function WebsiteDevPage() {
  return (
    <main className="bg-[#f5f5f7] text-[#101010]">
      <ServiceHero {...heroData} />
      <ProblemSection />
      <SolutionSection />
      <StatsSection />
      <ProcessSection />
      <PortfolioSection />
      <TechStackSection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}