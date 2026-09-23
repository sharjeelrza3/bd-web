import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AppleReviews } from "@/components/apple2026/ApplePages";
export const metadata: Metadata = { title:"Client Reviews", description:"Read client reviews and testimonials for Being Digitals website, software, branding and digital marketing projects.", alternates:{canonical:"/reviews"} };
export default function Page(){ return <><Header/><AppleReviews/><Footer/></>; }
