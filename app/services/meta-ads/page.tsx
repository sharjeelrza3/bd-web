import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PerformanceServicePage from "@/components/performance/ServicePage";
import { serviceData } from "@/components/apple/services/serviceData";

export const metadata: Metadata = {
  title: "Meta Ads Management",
  description: "Meta Ads creative testing, audience strategy, retargeting and conversion-focused campaign management for growing businesses.",
  alternates: { canonical: "/services/meta-ads" },
};

export default function Page() {
  return <><Header /><PerformanceServicePage data={serviceData.meta} /><Footer /></>;
}
