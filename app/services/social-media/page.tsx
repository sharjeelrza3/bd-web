import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AppleServicePage from "@/components/apple2026/AppleServicePage";
import { serviceData } from "@/components/apple/services/serviceData";

export const metadata: Metadata = {
  title: 'Social Media Marketing Services',
  description: 'Social media strategy, content creation, reels, graphic design, community management and performance reporting for business growth.',
  alternates: { canonical: '/services/social-media' },
};

export default function Page() {
  return (
    <>
      <Header />
      <AppleServicePage data={serviceData.social} />
      <Footer />
    </>
  );
}
