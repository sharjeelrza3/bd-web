import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AppleServicePage from "@/components/apple2026/AppleServicePage";
import { serviceData } from "@/components/apple/services/serviceData";

export const metadata: Metadata = {
  title: 'Business Software Development Services',
  description: 'Custom business software development for POS, CRM, inventory, reporting, staff management and admin dashboard systems.',
  alternates: { canonical: '/services/business-software' },
};

export default function Page() {
  return (
    <>
      <Header />
      <AppleServicePage data={serviceData.software} />
      <Footer />
    </>
  );
}
