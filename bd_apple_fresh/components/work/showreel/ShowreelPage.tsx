"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollLift from "@/components/apple/ScrollLift";

const ease = [0.16, 1, 0.3, 1] as const;
const frames = [
  ["Web experiences", "/images/portfolio/websites.webp"],
  ["Business software", "/images/services/softwares/restaurant-pos.png"],
  ["Brand systems", "/images/services/branding/project-sarss.webp"],
  ["Social creative", "/images/services/social-media/reel-cover.webp"],
] as const;

export default function ShowreelPage() {
  return (
    <main className="overflow-clip bg-black pt-[64px] text-white">
      <section className="px-5 pb-14 pt-20 text-center md:px-8 md:pb-20 md:pt-28">
        <div className="mx-auto max-w-[1120px]">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} className="text-[17px] font-semibold text-white/45">Showreel</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.95, delay: 0.04, ease }} className="mt-3 text-[clamp(4rem,9vw,9rem)] font-semibold leading-[.89] tracking-[-.075em]">See the work in motion.</motion.h1>
        </div>
      </section>

      <section className="px-4 pb-24 md:px-8 md:pb-36">
        <motion.div initial={{ opacity: 0, y: 55, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1, delay: 0.15, ease }} className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[42px] border border-white/10 bg-[#111] shadow-[0_50px_160px_rgba(0,0,0,.55)]">
          <video autoPlay muted loop playsInline controls preload="metadata" className="aspect-video w-full object-cover"><source src="/videos/hero.mp4" type="video/mp4" /></video>
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
        </motion.div>
      </section>

      <section className="bg-[#f5f5f7] px-4 py-24 text-[#1d1d1f] md:px-8 md:py-36">
        <div className="mx-auto max-w-[1440px]">
          <ScrollLift className="mx-auto mb-14 max-w-[1180px]">
            <p className="text-[17px] font-semibold text-[#6e6e73]">Across the studio.</p>
            <h2 className="mt-3 max-w-5xl text-[clamp(3.4rem,7vw,7rem)] font-semibold leading-[.92] tracking-[-.067em]">Different outputs. One attention to detail.</h2>
          </ScrollLift>
          <div className="grid gap-5 lg:grid-cols-2">
            {frames.map(([title, image]) => (
              <ScrollLift key={title} distance={42} className="h-full">
                <article className="group h-full overflow-hidden rounded-[36px] bg-white">
                  <div className="p-8 md:p-10"><h3 className="text-[clamp(2.5rem,4vw,4.5rem)] font-semibold leading-[.95] tracking-[-.055em]">{title}</h3></div>
                  <div className="relative mx-3 mb-3 aspect-[16/10] overflow-hidden rounded-[28px] bg-black"><Image src={image} alt={title} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]" sizes="(max-width:1024px) 100vw, 50vw" /></div>
                </article>
              </ScrollLift>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-28 text-center md:px-8 md:py-40">
        <ScrollLift className="mx-auto max-w-[1000px]">
          <p className="text-[17px] font-semibold text-white/45">Your brand can move like this too.</p>
          <h2 className="mt-3 text-[clamp(3.6rem,8vw,8rem)] font-semibold leading-[.89] tracking-[-.07em]">Make the next frame yours.</h2>
          <Link href="/contact" className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-black transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black">Start a project <ArrowRight size={16} /></Link>
        </ScrollLift>
      </section>
    </main>
  );
}
