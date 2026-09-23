"use client";

import Link from "next/link";
import { ArrowRight, Building2, GraduationCap, HeartPulse, Home, Hotel, ShoppingBag, Store, UtensilsCrossed, BriefcaseBusiness } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import ScrollLift from "@/components/apple/ScrollLift";

const ease = [0.16, 1, 0.3, 1] as const;
const industries = [
  { name: "Restaurants", icon: UtensilsCrossed, problem: "Ordering, stock, customer experience and local discovery should work as one system.", build: ["Conversion website", "POS & operations", "Local growth"] },
  { name: "Healthcare", icon: HeartPulse, problem: "Patient journeys and daily operations need clarity, reliability and less repeated work.", build: ["Clinic experience", "OPD/HMS software", "Automation"] },
  { name: "Real Estate", icon: Home, problem: "Property discovery and lead follow-up need a faster path from interest to conversation.", build: ["Property platform", "Lead journeys", "Campaign systems"] },
  { name: "Education", icon: GraduationCap, problem: "Admissions, communication and digital learning need one connected experience.", build: ["Institute website", "Student workflows", "Growth"] },
  { name: "Ecommerce", icon: ShoppingBag, problem: "Discovery, checkout, retention and acquisition must reinforce each other.", build: ["Commerce UX", "Conversion systems", "Paid growth"] },
  { name: "Retail", icon: Store, problem: "Sales, stock, customers and branches need a simple operational view.", build: ["Retail POS", "Inventory", "Dashboards"] },
  { name: "Hospitality", icon: Hotel, problem: "Bookings, guest communication and local visibility directly affect revenue.", build: ["Booking experience", "Reservations", "Local growth"] },
  { name: "Corporate", icon: Building2, problem: "Credibility, reporting and internal workflows need a strong digital foundation.", build: ["Corporate web", "Custom systems", "Automation"] },
  { name: "Professional", icon: BriefcaseBusiness, problem: "Trust, lead generation and onboarding depend on a clear digital journey.", build: ["Authority website", "Lead capture", "CRM flows"] },
] as const;

export default function IndustriesPage() {
  const [active, setActive] = useState(0);
  const selected = industries[active];
  const SelectedIcon = selected.icon;

  return (
    <main className="overflow-clip bg-white pt-[64px] text-[#1d1d1f]">
      <section className="px-5 pb-20 pt-20 text-center md:px-8 md:pb-28 md:pt-28">
        <div className="mx-auto max-w-[1160px]">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} className="text-[17px] font-semibold text-[#6e6e73]">Industries</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.95, delay: 0.04, ease }} className="mt-3 text-[clamp(4rem,9vw,9rem)] font-semibold leading-[.89] tracking-[-.075em]">Different businesses. Different systems.</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="mx-auto mt-7 max-w-2xl text-[18px] font-medium leading-[1.5] text-black/48">We start with how the business actually works, then shape the website, software and growth around it.</motion.p>
        </div>
      </section>

      <section className="bg-[#f5f5f7] py-24 md:py-36">
        <div className="mx-auto max-w-[1180px] px-5 md:px-8">
          <ScrollLift>
            <p className="text-[17px] font-semibold text-[#6e6e73]">Choose an industry.</p>
            <h2 className="mt-3 max-w-5xl text-[clamp(3.4rem,7vw,7rem)] font-semibold leading-[.92] tracking-[-.067em]">The right digital direction changes with the reality behind the screen.</h2>
          </ScrollLift>
          <div className="bd-rail mt-12 flex gap-2 overflow-x-auto pb-3">
            {industries.map((industry, index) => (
              <button key={industry.name} onClick={() => setActive(index)} aria-pressed={active === index} className={`shrink-0 rounded-full px-5 py-3 text-[13px] font-semibold transition ${active === index ? "bg-[#1d1d1f] text-white" : "bg-white text-black/48 hover:text-black"}`}>{industry.name}</button>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-[42px] bg-black text-white lg:grid lg:min-h-[720px] lg:grid-cols-[.78fr_1.22fr]">
            <div className="flex flex-col justify-between p-8 md:p-12 lg:p-14">
              <motion.div key={`${selected.name}-copy`} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease }}>
                <p className="text-[14px] font-semibold text-[#2997ff]">{selected.name}</p>
                <h3 className="mt-4 text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[.91] tracking-[-.068em]">Built around the business, not a template.</h3>
                <p className="mt-6 max-w-xl text-[18px] font-medium leading-[1.55] text-white/48">{selected.problem}</p>
              </motion.div>
              <motion.div key={`${selected.name}-build`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mt-12 flex flex-wrap gap-2">
                {selected.build.map((item) => <span key={item} className="rounded-full border border-white/12 bg-white/[.07] px-4 py-2.5 text-[12px] font-semibold text-white/55">{item}</span>)}
              </motion.div>
            </div>

            <div className="relative min-h-[520px] overflow-hidden border-t border-white/10 lg:min-h-full lg:border-l lg:border-t-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,113,227,.34),transparent_24%),radial-gradient(circle_at_70%_25%,rgba(125,74,255,.18),transparent_22%)]" />
              <div className="bd-noise absolute inset-0 opacity-30" />
              <div className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 md:h-[560px] md:w-[560px]" />
              <div className="absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2997ff]/30 md:h-[370px] md:w-[370px]" />
              <motion.div key={selected.name} initial={{ opacity: 0, scale: 0.84, rotate: -5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.65, ease }} className="absolute left-1/2 top-1/2 flex h-52 w-52 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[48px] border border-white/14 bg-white/[.09] shadow-[0_30px_120px_rgba(0,0,0,.45)] backdrop-blur-2xl md:h-64 md:w-64">
                <SelectedIcon size={42} strokeWidth={1.5} className="text-[#2997ff]" />
                <p className="mt-5 text-[22px] font-semibold tracking-[-.04em]">{selected.name}</p>
              </motion.div>
              {selected.build.map((item, index) => {
                const positions = ["left-[6%] top-[14%]", "right-[5%] top-[22%]", "bottom-[10%] left-[18%]"];
                return <motion.div key={`${selected.name}-${item}`} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.12 + index * 0.06, duration: 0.45, ease }} className={`absolute ${positions[index]} rounded-full border border-white/12 bg-black/35 px-4 py-3 text-[12px] font-semibold text-white/62 backdrop-blur-xl`}>{item}</motion.div>;
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1180px]">
          <ScrollLift className="text-center">
            <p className="text-[17px] font-semibold text-[#6e6e73]">The principle stays the same.</p>
            <h2 className="mx-auto mt-3 max-w-5xl text-[clamp(3.4rem,7vw,7rem)] font-semibold leading-[.92] tracking-[-.067em]">Understand first. Design second. Build what fits.</h2>
          </ScrollLift>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[['01','Understand','Customers, operations, constraints and the commercial goal.'],['02','Shape','The right mix of experience, system and growth—not every service.'],['03','Connect','Every touchpoint designed to work as one business system.']].map(([n,title,copy]) => (
              <ScrollLift key={n} distance={28} className="h-full"><article className="h-full rounded-[32px] bg-[#f5f5f7] p-8 md:p-9"><p className="text-[12px] font-semibold text-black/28">{n}</p><h3 className="mt-16 text-[clamp(2.3rem,4vw,4rem)] font-semibold leading-[.95] tracking-[-.055em]">{title}</h3><p className="mt-5 text-[16px] font-medium leading-[1.55] text-black/46">{copy}</p></article></ScrollLift>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-28 text-center text-white md:px-8 md:py-40">
        <ScrollLift className="mx-auto max-w-[1000px]">
          <p className="text-[17px] font-semibold text-white/45">Don&apos;t see your industry?</p>
          <h2 className="mt-3 text-[clamp(3.6rem,8vw,8rem)] font-semibold leading-[.89] tracking-[-.07em]">We&apos;ll learn it before we build it.</h2>
          <Link href="/contact" className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-black transition-transform hover:-translate-y-0.5">Discuss your business <ArrowRight size={16} /></Link>
        </ScrollLift>
      </section>
    </main>
  );
}
