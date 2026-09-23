import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AppleProcess } from "@/components/apple2026/ApplePages";
export const metadata: Metadata = { title:"Our Process", description:"Explore the Being Digitals process from discovery and strategy to design, development, testing, launch and ongoing growth.", alternates:{canonical:"/process"} };
export default function Page(){ return <><Header/><AppleProcess/><Footer/></>; }
