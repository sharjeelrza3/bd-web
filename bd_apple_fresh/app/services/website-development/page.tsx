import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AppleServicePage from "@/components/apple2026/AppleServicePage";
import { serviceData } from "@/components/apple/services/serviceData";

export const metadata: Metadata = {
  title: 'Website Development Services',
  description: 'Premium website development services for businesses that need fast, responsive, SEO-ready and conversion-focused websites.',
  alternates: { canonical: '/services/website-development' },
};

export default function Page() {
  return (
    <>
      <Header />
      <AppleServicePage data={serviceData.website} />
      <Footer />
    </>
  );
}
