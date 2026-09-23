"use client";
import { ArrowUpRight, Bot, Braces, Code2, MapPin, Megaphone, Palette, Search, Timer } from "lucide-react";
const roles=[
  ["Frontend Developer","Full Time","Karachi / Hybrid",["React","Next.js","Tailwind"],Code2],
  ["Backend Developer","Full Time","Karachi / Remote",["Node.js","Laravel","MySQL"],Braces],
  ["UI/UX Designer","Full Time","Remote",["Figma","Wireframes","Design Systems"],Palette],
  ["AI Automation Engineer","Project Based","Remote",["OpenAI","n8n","Python"],Bot],
  ["WordPress Developer","Full Time","Karachi",["WordPress","Elementor","WooCommerce"],Code2],
  ["SEO Specialist","Full Time","Karachi / Remote",["Technical SEO","Content","Analytics"],Search],
  ["Digital Marketer","Full Time","Karachi",["Meta Ads","Google Ads","Reporting"],Megaphone],
];
export default function OpenRoles(){
  return <section id="open-roles" className="bg-white px-5 py-28"><div className="mx-auto max-w-7xl">
    <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="text-sm font-semibold uppercase tracking-[.28em] text-[#0066cc]">Open Roles</p><h2 className="mt-4 text-5xl font-semibold leading-[.9] tracking-[-.06em] md:text-7xl">Find the role where you can do your best work.</h2></div><p className="max-w-xl text-lg font-semibold leading-8 text-black/50">We look for practical, curious people ready to take ownership.</p></div>
    <div className="mt-14 space-y-4">{roles.map(([title,type,location,skills,Icon])=>{const SafeIcon=Icon as typeof Code2; return <article key={title as string} className="grid gap-6 rounded-[2rem] border border-black/10 bg-[#f5f5f7] p-6 lg:grid-cols-[auto_1fr_auto] lg:items-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1d1d1f] text-[#0066cc]"><SafeIcon size={23}/></span>
      <div><h3 className="text-2xl font-semibold">{title as string}</h3><div className="mt-3 flex flex-wrap gap-3 text-xs font-semibold text-black/45"><span className="inline-flex items-center gap-2"><Timer size={14}/>{type as string}</span><span className="inline-flex items-center gap-2"><MapPin size={14}/>{location as string}</span></div><div className="mt-4 flex flex-wrap gap-2">{(skills as string[]).map(s=><span key={s} className="rounded-full border border-black/10 bg-white px-3 py-2 text-[10px] font-semibold uppercase tracking-[.12em] text-black/45">{s}</span>)}</div></div>
      <a href={`mailto:careers@beingdigitals.com?subject=Application for ${encodeURIComponent(title as string)}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1d1d1f] px-6 py-3 font-semibold text-white">Apply Now<ArrowUpRight size={17}/></a>
    </article>})}</div>
  </div></section>
}
