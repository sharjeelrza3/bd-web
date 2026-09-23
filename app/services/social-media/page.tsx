import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PerformanceServicePage from "@/components/performance/ServicePage";
import { serviceData } from "@/components/apple/services/serviceData";

export const metadata: Metadata = {
  title: "Social Media Marketing Services",
  description: "Social media strategy, content design, reels concepts and ongoing content systems built to keep your brand consistent and visible.",
  alternates: { canonical: "/services/social-media" },
};

export default function Page() {
  return <><Header /><PerformanceServicePage data={serviceData.social} /><Footer /></>;
}
