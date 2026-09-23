import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AppleHome from "@/components/apple2026/AppleHome";

export const metadata: Metadata = {
  title: { absolute: "Being Digitals — Websites, Software & Growth" },
  description:
    "Being Digitals creates premium websites, custom business software, SEO, branding, paid growth and AI automation for ambitious businesses.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <AppleHome />
      <Footer />
    </>
  );
}
