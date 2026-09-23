import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ApplePricing } from "@/components/apple2026/ApplePages";
export const metadata: Metadata = { title:"Pricing", description:"Flexible project pricing for websites, software, growth, branding and automation work by Being Digitals.", alternates:{canonical:"/pricing"} };
export default function Page(){ return <><Header/><ApplePricing/><Footer/></>; }
