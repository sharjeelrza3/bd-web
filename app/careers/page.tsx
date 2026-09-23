import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AppleCareers } from "@/components/apple2026/ApplePages";
export const metadata: Metadata = { title:"Careers", description:"Explore career opportunities at Being Digitals.", alternates:{canonical:"/careers"} };
export default function Page(){ return <><Header/><AppleCareers/><Footer/></>; }
