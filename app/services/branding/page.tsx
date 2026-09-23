import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PerformanceServicePage from "@/components/performance/ServicePage";
import { serviceData } from "@/components/apple/services/serviceData";

export const metadata: Metadata = {
  title: "Branding & Design Services",
  description: "Brand identity, visual systems, campaign design and social creative built to make your business recognizable and consistent.",
  alternates: { canonical: "/services/branding" },
};

export default function Page() {
  return <><Header /><PerformanceServicePage data={serviceData.branding} /><Footer /></>;
}
