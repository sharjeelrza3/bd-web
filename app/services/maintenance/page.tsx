import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PerformanceServicePage from "@/components/performance/ServicePage";
import { serviceData } from "@/components/apple/services/serviceData";

export const metadata: Metadata = {
  title: "Website Maintenance & Support",
  description: "Ongoing website maintenance, monitoring, support and performance care to keep your digital presence healthy and reliable.",
  alternates: { canonical: "/services/maintenance" },
};

export default function Page() {
  return <><Header /><PerformanceServicePage data={serviceData.maintenance} /><Footer /></>;
}
