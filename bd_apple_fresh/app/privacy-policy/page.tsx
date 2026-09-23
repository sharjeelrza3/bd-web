import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LegalPage from "@/components/legal/LegalPage";
import { privacySections } from "@/components/legal/legalData";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Being Digitals Privacy Policy.",
  alternates: { canonical: "/privacy-policy" },
};

export default function Page() {
  return (
    <>
      <Header />
      <LegalPage
        eyebrow="Privacy"
        title="Privacy Policy"
        description="This policy explains what information Being Digitals may collect, how it is used and the choices available to you."
        updated="July 2026"
        sections={privacySections}
      />
      <Footer />
    </>
  );
}
