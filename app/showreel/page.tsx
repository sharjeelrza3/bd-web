import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AppleShowreel } from "@/components/apple2026/ApplePages";
export const metadata: Metadata = { title:"Showreel", description:"Watch the Being Digitals showreel featuring websites, software, branding and motion.", alternates:{canonical:"/showreel"} };
export default function Page(){ return <><Header/><AppleShowreel/><Footer/></>; }
