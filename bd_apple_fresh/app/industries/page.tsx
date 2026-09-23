import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AppleIndustries } from "@/components/apple2026/ApplePages";
export const metadata: Metadata = { title:"Industries We Serve", description:"Explore industry-focused websites, software, automation and digital marketing solutions by Being Digitals.", alternates:{canonical:"/industries"} };
export default function Page(){ return <><Header/><AppleIndustries/><Footer/></>; }
