import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AppleAbout } from "@/components/apple2026/ApplePages";
export const metadata: Metadata = { title:"About Our Digital Studio in Karachi", description:"Meet Being Digitals, a multidisciplinary digital studio combining strategy, design, development, marketing and AI automation.", alternates:{canonical:"/about"} };
export default function Page(){ return <><Header/><AppleAbout/><Footer/></>; }
