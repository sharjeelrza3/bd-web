"use client";

import Hero from "./Hero";
import ProblemsSection from "./ProblemsSection";
import WorkflowMap from "./WorkflowMap";
import AutomationServices from "./AutomationServices";
import AgentShowcase from "./AgentShowcase";
import UseCasesSection from "./UseCasesSection";
import IntegrationsSection from "./IntegrationsSection";
import BuilderSection from "./BuilderSection";
import TransformationSection from "./TransformationSection";
import ProcessSection from "./ProcessSection";
import ResultsSection from "./ResultsSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";

export default function AIAutomationPage() {
  return (
    <main className="bg-[#000000] text-white">
      <Hero />
      <ProblemsSection />
      <WorkflowMap />
      <AutomationServices />
      <AgentShowcase />
      <UseCasesSection />
      <IntegrationsSection />
      <BuilderSection />
      <TransformationSection />
      <ProcessSection />
      <ResultsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
