import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AppleServicePage from "@/components/apple2026/AppleServicePage";
import { serviceData } from "@/components/apple/services/serviceData";

export const metadata: Metadata = {
  title: 'Meta Ads Management Services',
  description: 'Meta Ads strategy, creative testing, lead generation, retargeting, audience targeting and performance optimization.',
  alternates: { canonical: '/services/meta-ads' },
};

export default function Page() {
  return (
    <>
      <Header />
      <AppleServicePage data={serviceData.meta} />
      <Footer />
    </>
  );
}
