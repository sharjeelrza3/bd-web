"use client";

import Link from "next/link";
import { ArrowUpRight, Code2, Palette, Search, Megaphone, Bot, Braces, MapPin, Timer } from "lucide-react";
import { motion } from "framer-motion";
import ScrollLift from "@/components/apple/ScrollLift";

const ease = [0.16, 1, 0.3, 1] as const;
const roles = [
  ["Frontend Developer", "Full Time", "Karachi / Hybrid", Code2],
  ["Backend Developer", "Full Time", "Karachi / Remote", Braces],
  ["UI/UX Designer", "Full Time", "Remote", Palette],
  ["AI Automation Engineer", "Project Based", "Remote", Bot],
  ["SEO Specialist", "Full Time", "Karachi / Remote", Search],
  ["Digital Marketer", "Full Time", "Karachi", Megaphone],
] as const;

export default function CareersPage() {
  return (
    <main className="overflow-clip bg-white pt-[64px] text-[#1d1d1f]">
      <section className="px-5 pb-16 pt-20 text-center md:px-8 md:pb-24 md:pt-28">
        <div className="mx-auto max-w-[1160px]">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} className="text-[17px] font-semibold text-[#6e6e73]">Careers</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.95, delay: 0.04, ease }} className="mt-3 text-[clamp(4rem,9vw,9rem)] font-semibold leading-[.89] tracking-[-.075em]">Do work you&apos;ll want to show.</motion.h1>
        </div>
        <motion.div initial={{ opacity: 0, y: 50, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1, delay: 0.14, ease }} className="relative mx-auto mt-14 max-w-[1440px] overflow-hidden rounded-[42px] bg-black">
          <div className="relative min-h-[650px] md:min-h-[820px]">
            <video autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 h-full w-full object-cover opacity-62"><source src="/videos/hero.mp4" type="video/mp4" /></video>
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,.08),rgba(0,0,0,.82))]" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-left text-white md:p-12"><p className="max-w-4xl text-[clamp(2.4rem,5.5vw,6rem)] font-semibold leading-[.94] tracking-[-.062em]">Curiosity. Ownership. Craft. No unnecessary layers between an idea and the work.</p></div>
          </div>
        </motion.div>
      </section>

      <section className="bg-[#f5f5f7] px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1180px]">
          <ScrollLift><p className="text-[17px] font-semibold text-[#6e6e73]">How we like to work.</p><h2 className="mt-3 max-w-5xl text-[clamp(3.4rem,7vw,7rem)] font-semibold leading-[.92] tracking-[-.067em]">Small team energy. Serious standards.</h2></ScrollLift>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {[['Own the outcome','You are trusted with the problem, not just a checklist.'],['Make it clearer','Good work removes friction—for users, clients and teammates.'],['Learn in public','Share the reasoning, ask better questions and improve the system.'],['Care about the last 5%','Spacing, speed, edge cases and handoff quality all count.']].map(([title,copy]) => (
              <ScrollLift key={title} className="h-full"><article className="h-full rounded-[34px] bg-white p-8 md:p-10"><h3 className="text-[clamp(2.7rem,5vw,5rem)] font-semibold leading-[.95] tracking-[-.06em]">{title}</h3><p className="mt-5 max-w-xl text-[17px] font-medium leading-[1.55] text-black/48">{copy}</p></article></ScrollLift>
            ))}
          </div>
        </div>
      </section>

      <section id="open-roles" className="bg-white px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1180px]">
          <ScrollLift><p className="text-[17px] font-semibold text-[#6e6e73]">Open roles.</p><h2 className="mt-3 max-w-4xl text-[clamp(3.4rem,7vw,7rem)] font-semibold leading-[.92] tracking-[-.067em]">Find the work that fits your edge.</h2></ScrollLift>
          <div className="mt-14 overflow-hidden rounded-[34px] bg-[#f5f5f7]">
            {roles.map(([title, type, location, Icon]) => (
              <article key={title} className="group grid gap-5 border-b border-black/[.08] p-6 last:border-b-0 md:grid-cols-[52px_1fr_auto] md:items-center md:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#0071e3]"><Icon size={21} /></span>
                <div><h3 className="text-[clamp(1.7rem,3vw,2.7rem)] font-semibold tracking-[-.045em]">{title}</h3><div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-[12px] font-semibold text-black/38"><span className="inline-flex items-center gap-1.5"><Timer size={13} />{type}</span><span className="inline-flex items-center gap-1.5"><MapPin size={13} />{location}</span></div></div>
                <a href={`mailto:careers@beingdigitals.com?subject=Application for ${encodeURIComponent(title)}`} className="inline-flex w-fit items-center gap-2 rounded-full bg-[#1d1d1f] px-5 py-2.5 text-[13px] font-semibold text-white transition-transform group-hover:-translate-y-0.5">Apply <ArrowUpRight size={15} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-28 text-center text-white md:px-8 md:py-40">
        <ScrollLift className="mx-auto max-w-[1000px]"><p className="text-[17px] font-semibold text-white/45">No perfect role yet?</p><h2 className="mt-3 text-[clamp(3.6rem,8vw,8rem)] font-semibold leading-[.89] tracking-[-.07em]">Show us what you&apos;re exceptional at.</h2><a href="mailto:careers@beingdigitals.com" className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-black">Introduce yourself <ArrowUpRight size={16} /></a></ScrollLift>
      </section>
    </main>
  );
}
