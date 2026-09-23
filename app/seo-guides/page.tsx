import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AppleInsights } from "@/components/apple2026/ApplePages";
export const metadata: Metadata = { title:"SEO Guides", description:"Explore practical SEO guides, checklists and resources covering local SEO, technical SEO, on-page SEO and content strategy.", alternates:{canonical:"/seo-guides"} };
export default function Page(){ return <><Header/><AppleInsights mode="seo"/><Footer/></>; }
