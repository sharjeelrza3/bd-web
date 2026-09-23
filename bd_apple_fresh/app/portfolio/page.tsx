import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ApplePortfolio } from "@/components/apple2026/ApplePages";
export const metadata: Metadata = { title:"Portfolio", description:"Explore selected websites, software products and digital systems by Being Digitals.", alternates:{canonical:"/portfolio"} };
export default function Page(){ return <><Header/><ApplePortfolio/><Footer/></>; }
