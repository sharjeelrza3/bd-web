import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AppleInsights } from "@/components/apple2026/ApplePages";
export const metadata: Metadata = { title:"Insights & Blog", description:"Practical insights on websites, SEO, marketing, software and AI automation.", alternates:{canonical:"/blog"} };
export default function Page(){ return <><Header/><AppleInsights/><Footer/></>; }
