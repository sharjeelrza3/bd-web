import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PerformanceServicePage from "@/components/performance/ServicePage";
import { serviceData } from "@/components/apple/services/serviceData";

export const metadata: Metadata = {
  title: "Custom Business Software Development",
  description: "Custom business software, POS, inventory, CRM, dashboards and workflow systems built around how your business actually operates.",
  alternates: { canonical: "/services/business-software" },
};

export default function Page() {
  return <><Header /><PerformanceServicePage data={serviceData.software} /><Footer /></>;
}
