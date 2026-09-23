"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollLift from "@/components/apple/ScrollLift";
import { caseStudies } from "./data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function CaseStudiesPage() {
  return (
    <main className="overflow-clip bg-white pt-[64px] text-[#1d1d1f]">
      <section className="px-5 pb-20 pt-20 text-center md:px-8 md:pb-28 md:pt-28">
        <div className="mx-auto max-w-[1120px]">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} className="text-[17px] font-semibold text-[#6e6e73]">Case Studies</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.95, delay: 0.04, ease }} className="mt-3 text-[clamp(4rem,9vw,9rem)] font-semibold leading-[.89] tracking-[-.075em]">The story behind the screen.</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="mx-auto mt-7 max-w-2xl text-[18px] font-medium leading-[1.5] text-black/48">The business problem, the decisions and the system behind selected work.</motion.p>
        </div>
      </section>

      <section className="bg-[#f5f5f7] px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1440px] space-y-6">
          {caseStudies.map((study, index) => (
            <ScrollLift key={study.slug} distance={54} scaleFrom={0.975}>
              <article className="group overflow-hidden rounded-[42px] bg-white lg:grid lg:min-h-[720px] lg:grid-cols-[.78fr_1.22fr]">
                <div className="flex flex-col justify-between p-8 md:p-11 lg:p-14">
                  <div>
                    <p className="text-[13px] font-semibold text-[#0071e3]">{String(index + 1).padStart(2, "0")} · {study.category}</p>
                    <h2 className="mt-4 text-[clamp(3.2rem,6vw,6.5rem)] font-semibold leading-[.91] tracking-[-.068em]">{study.client}</h2>
                    <p className="mt-6 max-w-xl text-[18px] font-medium leading-[1.5] text-black/50">{study.heroDescription}</p>
                  </div>
                  <div className="mt-12">
                    <div className="flex flex-wrap gap-2">{study.services.slice(0, 4).map((service) => <span key={service} className="rounded-full bg-[#f5f5f7] px-3.5 py-2 text-[12px] font-semibold text-black/45">{service}</span>)}</div>
                    <Link href={`/case-studies/${study.slug}`} className="mt-7 inline-flex items-center gap-1 text-[17px] font-medium text-[#06c] outline-none hover:underline focus-visible:underline">View story <ChevronRight size={18} /></Link>
                  </div>
                </div>
                <div className="relative min-h-[430px] overflow-hidden bg-black lg:min-h-full">
                  <Image src={study.cover} alt={study.client} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]" sizes="(max-width:1024px) 100vw, 62vw" />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,.08),transparent_45%)]" />
                </div>
              </article>
            </ScrollLift>
          ))}
        </div>
      </section>

      <section className="bg-black px-5 py-28 text-center text-white md:px-8 md:py-40">
        <ScrollLift className="mx-auto max-w-[1050px]">
          <p className="text-[17px] font-semibold text-white/45">Your challenge could be next.</p>
          <h2 className="mt-3 text-[clamp(3.6rem,8vw,8rem)] font-semibold leading-[.89] tracking-[-.07em]">Give the next story a strong beginning.</h2>
          <Link href="/contact" className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-black transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black">Start a project <ArrowRight size={16} /></Link>
        </ScrollLift>
      </section>
    </main>
  );
}
