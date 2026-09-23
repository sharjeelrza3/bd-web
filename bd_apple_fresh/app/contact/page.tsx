import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AppleContact } from "@/components/apple2026/ApplePages";
export const metadata: Metadata = { title:"Start a Project — Contact Us", description:"Tell Being Digitals about your website, software, SEO, branding, marketing or AI automation project.", alternates:{canonical:"/contact"} };
export default function Page(){ return <><Header/><AppleContact/><Footer/></>; }
