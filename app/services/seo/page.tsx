import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AppleServicePage from "@/components/apple2026/AppleServicePage";
import { serviceData } from "@/components/apple/services/serviceData";

export const metadata: Metadata = {
  title: 'SEO Services',
  description: 'Professional SEO services including technical SEO, local SEO, keyword research, content strategy, on-page optimization and monthly reporting.',
  alternates: { canonical: '/services/seo' },
};

export default function Page() {
  return (
    <>
      <Header />
      <AppleServicePage data={serviceData.seo} />
      <Footer />
    </>
  );
}
