import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LegalPage from "@/components/legal/LegalPage";
import { cookieSections } from "@/components/legal/legalData";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Read the Being Digitals Cookie Policy.",
  alternates: { canonical: "/cookie-policy" },
};

export default function Page() {
  return (
    <>
      <Header />
      <LegalPage
        eyebrow="Cookies"
        title="Cookie Policy"
        description="This policy explains how cookies and similar technologies may be used on the Being Digitals website."
        updated="July 2026"
        sections={cookieSections}
      />
      <Footer />
    </>
  );
}
