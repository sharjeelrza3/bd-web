import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PerformanceServicePage from "@/components/performance/ServicePage";
import { serviceData } from "@/components/apple/services/serviceData";

export const metadata: Metadata = {
  title: "Google Ads Management",
  description: "Google Ads campaigns built around qualified search intent, conversion tracking and disciplined ongoing optimization.",
  alternates: { canonical: "/services/google-ads" },
};

export default function Page() {
  return <><Header /><PerformanceServicePage data={serviceData.google} /><Footer /></>;
}
