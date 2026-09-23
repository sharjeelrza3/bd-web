import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AppleInsights } from "@/components/apple2026/ApplePages";
export const metadata: Metadata = { title:"Marketing Tips", description:"Explore practical marketing tips for Meta Ads, Google Ads, branding, content and social media.", alternates:{canonical:"/marketing-tips"} };
export default function Page(){ return <><Header/><AppleInsights mode="marketing"/><Footer/></>; }
