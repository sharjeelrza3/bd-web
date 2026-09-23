import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AppleCaseStudies } from "@/components/apple2026/ApplePages";
export const metadata: Metadata = { title:"Case Studies", description:"Explore detailed Being Digitals case studies covering strategy, design, development and measurable outcomes.", alternates:{canonical:"/case-studies"} };
export default function Page(){ return <><Header/><AppleCaseStudies/><Footer/></>; }
