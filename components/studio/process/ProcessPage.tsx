"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;
const steps = [
  ["01", "Discover", "Understand the business, audience, constraints and what success actually means.", "/images/services/projects/business-website.webp"],
  ["02", "Frame", "Turn the problem into a focused structure, scope and experience direction.", "/images/services/seo/search-results-features.jpg"],
  ["03", "Design", "Build the visual language, interactions and key journeys before engineering deepens.", "/images/services/branding/project-mehran.webp"],
  ["04", "Build", "Engineer the responsive product, system or campaign around the approved experience.", "/images/services/softwares/restaurant-pos.png"],
  ["05", "Validate", "Test usability, performance, responsiveness and the details that make the work feel finished.", "/images/services/softwares/reports.png"],
  ["06", "Launch & Grow", "Deploy with confidence, then use real behavior and business results to improve the next version.", "/images/services/seo/organic-traffic.jpg"],
] as const;

function ProcessStep({ step, index }: { step: (typeof steps)[number]; index: number }) {
  const [n, title, copy, image] = step;
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.3 });
  const visualScale = useTransform(progress, [0.05, 0.48, 0.9], [0.92, 1, 0.965]);
  const visualY = useTransform(progress, [0.05, 0.9], [55, -28]);
  const textY = useTransform(progress, [0.08, 0.84], [34, -28]);
  const textOpacity = useTransform(progress, [0.06, 0.2, 0.74, 0.94], [0.15, 1, 1, 0.22]);
  const lineScale = useTransform(progress, [0.18, 0.75], [0, 1]);

  return (
    <section ref={ref} className="relative border-b border-white/[.08] bg-black lg:h-[128svh]">
      <div className="mx-auto grid min-h-[100svh] max-w-[1440px] items-center gap-10 px-5 py-20 md:px-8 lg:sticky lg:top-[64px] lg:h-[calc(100svh-64px)] lg:min-h-0 lg:grid-cols-[.64fr_1.36fr] lg:gap-16 lg:overflow-hidden lg:py-10">
        <motion.div style={reduce ? undefined : { y: textY, opacity: textOpacity }} className="relative z-20 max-w-xl text-white">
          <div className="flex items-center gap-4">
            <p className="text-[12px] font-semibold text-white/34">{n}</p>
            <div className="relative h-px flex-1 overflow-hidden bg-white/10"><motion.div style={reduce ? { scaleX: 1 } : { scaleX: lineScale }} className="absolute inset-0 origin-left bg-[#2997ff]" /></div>
          </div>
          <h2 className="mt-5 text-[clamp(3.7rem,7vw,7.4rem)] font-semibold leading-[.89] tracking-[-.069em]">{title}</h2>
          <p className="mt-6 max-w-lg text-[17px] font-medium leading-[1.55] text-white/48 md:text-[19px]">{copy}</p>
          <p className="mt-8 text-[11px] font-semibold text-white/24">Step {index + 1} of {steps.length}</p>
        </motion.div>

        <motion.div style={reduce ? undefined : { scale: visualScale, y: visualY }} className="relative z-10 aspect-[16/10] overflow-hidden rounded-[34px] border border-white/[.09] bg-[#111] shadow-[0_45px_130px_rgba(0,0,0,.32)] will-change-transform md:rounded-[42px]">
          <Image src={image} alt={title} fill className="object-cover object-top" sizes="(max-width:1024px) 100vw, 62vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/24 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

export default function ProcessPage() {
  return (
    <main className="overflow-clip bg-white pt-[64px] text-[#1d1d1f]">
      <section className="px-5 pb-24 pt-20 text-center md:px-8 md:pb-32 md:pt-28">
        <div className="mx-auto max-w-[1120px]">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} className="text-[16px] font-semibold text-[#6e6e73] md:text-[17px]">Process</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.95, delay: 0.04, ease }} className="mt-3 text-[clamp(4rem,9vw,9rem)] font-semibold leading-[.89] tracking-[-.075em]">Clarity at every step.</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="mx-auto mt-7 max-w-2xl text-[17px] font-medium leading-[1.55] text-black/46 md:text-[19px]">A disciplined path that keeps strategy, design and execution connected from the first conversation to launch.</motion.p>
        </div>
      </section>

      <section className="bg-black">
        {steps.map((step, index) => <ProcessStep key={step[0]} step={step} index={index} />)}
      </section>

      <section className="bg-[#f5f5f7] px-5 py-28 text-center md:px-8 md:py-40">
        <div className="mx-auto max-w-[1050px]">
          <p className="text-[16px] font-semibold text-[#6e6e73] md:text-[17px]">Ready when you are.</p>
          <h2 className="mt-3 text-[clamp(3.6rem,8vw,8rem)] font-semibold leading-[.89] tracking-[-.07em]">Bring the problem. We&apos;ll shape the path.</h2>
          <Link href="/contact" className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#0071e3] px-6 text-[15px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-px hover:bg-[#0077ed]">Start a project <ArrowRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
