import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AppleResources } from "@/components/apple2026/ApplePages";
export const metadata: Metadata = { title:"Free Resources", description:"Download free checklists, templates and planning resources from Being Digitals.", alternates:{canonical:"/free-resources"} };
export default function Page(){ return <><Header/><AppleResources/><Footer/></>; }
