import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LegalPage from "@/components/legal/LegalPage";
import { termsSections } from "@/components/legal/legalData";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the Being Digitals Terms and Conditions.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function Page() {
  return (
    <>
      <Header />
      <LegalPage
        eyebrow="Legal"
        title="Terms & Conditions"
        description="These terms outline the general rules that apply when using our website or engaging Being Digitals for digital services."
        updated="July 2026"
        sections={termsSections}
      />
      <Footer />
    </>
  );
}
