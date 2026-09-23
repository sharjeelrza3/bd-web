import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PerformanceServicePage from "@/components/performance/ServicePage";
import { serviceData } from "@/components/apple/services/serviceData";

export const metadata: Metadata = {
  title: "AI Automation Services",
  description: "AI assistants, workflow automation, lead qualification and practical integrations designed around real business processes.",
  alternates: { canonical: "/services/ai-automation" },
};

export default function Page() {
  return <><Header /><PerformanceServicePage data={serviceData.ai} /><Footer /></>;
}
