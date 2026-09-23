import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AppleServicePage from "@/components/apple2026/AppleServicePage";
import { serviceData } from "@/components/apple/services/serviceData";

export const metadata: Metadata = {
  title: 'AI Automation Services',
  description: 'AI automation services for lead qualification, CRM workflows, WhatsApp follow-ups, reporting and connected operations.',
  alternates: { canonical: '/services/ai-automation' },
};

export default function Page() {
  return (
    <>
      <Header />
      <AppleServicePage data={serviceData.ai} />
      <Footer />
    </>
  );
}
