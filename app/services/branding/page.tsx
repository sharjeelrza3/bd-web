import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AppleServicePage from "@/components/apple2026/AppleServicePage";
import { serviceData } from "@/components/apple/services/serviceData";

export const metadata: Metadata = {
  title: 'Branding & Design Services',
  description: 'Professional branding, visual identity, social media design and brand guideline services by Being Digitals.',
  alternates: { canonical: '/services/branding' },
};

export default function Page() {
  return (
    <>
      <Header />
      <AppleServicePage data={serviceData.branding} />
      <Footer />
    </>
  );
}
