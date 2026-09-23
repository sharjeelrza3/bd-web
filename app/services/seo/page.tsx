import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PerformanceServicePage from "@/components/performance/ServicePage";
import { serviceData } from "@/components/apple/services/serviceData";

export const metadata: Metadata = {
  title: "SEO Services",
  description: "Technical SEO, local SEO, on-page optimization and search-led content designed to build qualified organic visibility over time.",
  alternates: { canonical: "/services/seo" },
};

export default function Page() {
  return <><Header /><PerformanceServicePage data={serviceData.seo} /><Footer /></>;
}
