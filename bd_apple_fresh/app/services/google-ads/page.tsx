import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AppleServicePage from "@/components/apple2026/AppleServicePage";
import { serviceData } from "@/components/apple/services/serviceData";

export const metadata: Metadata = {
  title: 'Google Ads Management Services',
  description: 'Google Ads campaign management including search ads, keyword strategy, conversion tracking and performance optimization.',
  alternates: { canonical: '/services/google-ads' },
};

export default function Page() {
  return (
    <>
      <Header />
      <AppleServicePage data={serviceData.google} />
      <Footer />
    </>
  );
}
