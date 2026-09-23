import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ThankYouPage from "@/components/thank-you/ThankYouPage";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Your project brief has been received by Being Digitals. Our team will contact you shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <ThankYouPage />
      <Footer />
    </>
  );
}
