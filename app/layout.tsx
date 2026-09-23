import type { Metadata, Viewport } from "next";
import Analytics from "@/components/analytics/Analytics";
import SiteJsonLd from "@/components/seo/SiteJsonLd";
import "./globals.css";
import "./performance.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://beingdigitals.com"),
  title: {
    default: "Being Digitals | Websites, Software & Digital Growth",
    template: "%s",
  },
  description:
    "Being Digitals builds premium websites, custom business software, SEO, paid growth, branding and AI automation for ambitious businesses.",
  keywords: [
    "Being Digitals",
    "Web Development Agency",
    "Website Design",
    "Business Software",
    "Custom Software Development",
    "SEO Agency",
    "Local SEO",
    "Google Ads",
    "Meta Ads",
    "Social Media Marketing",
    "Branding",
    "UI UX Design",
    "AI Automation",
    "Digital Marketing Agency",
    "Pakistan",
    "Karachi",
  ],
  authors: [{ name: "Being Digitals", url: "https://beingdigitals.com" }],
  creator: "Being Digitals",
  publisher: "Being Digitals",
  applicationName: "Being Digitals",
  category: "Digital Agency",
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://beingdigitals.com",
    siteName: "Being Digitals",
    title: "Being Digitals | Websites, Software & Digital Growth",
    description:
      "Websites, software and digital growth systems designed around real business outcomes.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Being Digitals — Websites, Software & Digital Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Being Digitals | Websites, Software & Digital Growth",
    description: "Websites · Software · SEO · Growth · Branding · AI Automation",
    images: ["/images/og-image.jpg"],
  },
  alternates: { canonical: "https://beingdigitals.com" },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
        <SiteJsonLd />
        <Analytics />
      </body>
    </html>
  );
}
