import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AppleServicePage from "@/components/apple2026/AppleServicePage";
import { serviceData } from "@/components/apple/services/serviceData";

export const metadata: Metadata = {
  title: 'Website Maintenance Services',
  description: 'Website maintenance, updates, backups, performance checks and ongoing technical support.',
  alternates: { canonical: '/services/maintenance' },
};

export default function Page() {
  return (
    <>
      <Header />
      <AppleServicePage data={serviceData.maintenance} />
      <Footer />
    </>
  );
}
