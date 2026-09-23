"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollLift from "@/components/apple/ScrollLift";

const ease = [0.16, 1, 0.3, 1] as const;
const clientLogos = [
  "/images/clients/taste-of-karachi.png",
  "/images/clients/the-pest-zones.png",
  "/images/clients/mehran-royalee.png",
  "/images/clients/naturesynch.png",
  "/images/clients/brandealss.png",
  "/images/clients/m-one-target.png",
];

export default function AboutPage() {
  return (
    <main className="overflow-clip bg-white pt-[64px] text-[#1d1d1f]">
      <section className="px-5 pb-16 pt-20 md:px-8 md:pb-24 md:pt-28">
        <div className="mx-auto max-w-[1180px] text-center">
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, ease }} className="text-[17px] font-semibold text-[#6e6e73]">About Being Digitals</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .95, delay: .04, ease }} className="mx-auto mt-3 max-w-5xl text-[clamp(4rem,9vw,9rem)] font-semibold leading-[.9] tracking-[-.075em]">Small enough to care. Built to do the whole thing.</motion.h1>
        </div>
        <motion.div initial={{ opacity: 0, y: 60, scale: .95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1.05, delay: .15, ease }} className="mx-auto mt-14 max-w-[1440px] overflow-hidden rounded-[42px] bg-black">
          <div className="relative min-h-[700px] md:min-h-[860px]">
            <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover opacity-65"><source src="/videos/hero.mp4" type="video/mp4" /></video>
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_35%,rgba(0,0,0,.78))]" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-12">
              <p className="max-w-3xl text-[clamp(1.8rem,4vw,4.2rem)] font-semibold leading-[1.02] tracking-[-.05em]">Strategy, design, development and growth—without losing the thread between them.</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-[#f5f5f7] px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1440px]">
          <ScrollLift className="mx-auto mb-14 max-w-[1180px]">
            <p className="text-[17px] font-semibold text-[#6e6e73]">How we think.</p>
            <h2 className="mt-3 max-w-5xl text-[clamp(3.4rem,7vw,7rem)] font-semibold leading-[.92] tracking-[-.067em]">The work gets better when the disciplines talk to each other.</h2>
          </ScrollLift>
          <div className="grid gap-5 lg:grid-cols-2">
            {[{
              title: "Experience",
              copy: "Interface, motion, hierarchy and content designed as one customer journey.",
              image: "/images/services/projects/restaurant-website.webp",
            }, {
              title: "Technology",
              copy: "Engineering decisions made for speed, reliability and the realities of the business.",
              image: "/images/services/softwares/restaurant-pos.png",
            }, {
              title: "Growth",
              copy: "Search and paid media connected back to the pages, offers and systems they depend on.",
              image: "/images/services/seo/search.png",
            }, {
              title: "Brand",
              copy: "A recognizable visual language that can survive more than one campaign or platform.",
              image: "/images/services/branding/project-sarss.webp",
            }].map((item) => (
              <ScrollLift key={item.title} distance={42} className="h-full">
                <article className="h-full overflow-hidden rounded-[36px] bg-white">
                <div className="p-8 md:p-10">
                  <h3 className="text-[clamp(2.7rem,5vw,5rem)] font-semibold leading-[.95] tracking-[-.06em]">{item.title}</h3>
                  <p className="mt-4 max-w-xl text-[17px] font-medium leading-[1.5] text-black/50">{item.copy}</p>
                </div>
                <div className="relative mx-3 mb-3 aspect-[16/10] overflow-hidden rounded-[28px] bg-black">
                  <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
                </div>
                </article>
              </ScrollLift>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-24 text-white md:px-8 md:py-36">
        <div className="mx-auto max-w-[1180px]">
          <ScrollLift className="text-center">
            <p className="text-[17px] font-semibold text-white/45">Built around real businesses.</p>
            <h2 className="mx-auto mt-3 max-w-5xl text-[clamp(3.3rem,7vw,7rem)] font-semibold leading-[.92] tracking-[-.067em]">Different industries. Same obsession with clarity.</h2>
          </ScrollLift>
          <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {clientLogos.map((src) => (
              <ScrollLift key={src} distance={22} className="h-full">
                <div className="flex min-h-[150px] h-full items-center justify-center rounded-[26px] border border-white/10 bg-white/[.055] p-7">
                  <Image src={src} alt="Being Digitals client" width={180} height={90} className="max-h-16 w-auto object-contain brightness-0 invert opacity-80" />
                </div>
              </ScrollLift>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-28 text-center md:px-8 md:py-40">
        <ScrollLift className="mx-auto max-w-[1080px]">
          <p className="text-[17px] font-semibold text-[#6e6e73]">The next project.</p>
          <h2 className="mt-3 text-[clamp(3.6rem,8vw,8rem)] font-semibold leading-[.89] tracking-[-.07em]">Make it worth remembering.</h2>
          <div className="mt-9 flex flex-wrap justify-center gap-5">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#0071e3] px-6 py-3 text-[15px] font-semibold text-white">Start a project <ArrowRight size={16}/></Link>
            <Link href="/portfolio" className="inline-flex items-center gap-1 text-[17px] font-medium text-[#06c] hover:underline">See our work <ChevronRight size={18}/></Link>
          </div>
        </ScrollLift>
      </section>
    </main>
  );
}
