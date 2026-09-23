import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AppleServicesIndex from "@/components/apple2026/AppleServicesIndex";

export const metadata: Metadata = {
  title: "Digital Services",
  description: "Explore website development, custom software, SEO, social media, paid advertising, branding, AI automation and website maintenance services.",
  alternates: { canonical: "/services" },
};

export default function Page() {
  return <><Header /><AppleServicesIndex /><Footer /></>;
}
