"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;
const projects = [
  ["Taste of Karachi", "Restaurant experience", "/images/portfolio/tasteofkarachi-wm.webp"],
  ["Nature Synch", "Digital experience", "/images/portfolio/naturesynch-wm.webp"],
  ["The Pest Zone", "Website + local growth", "/images/portfolio/pestzone-wm.webp"],
  ["Brand Deals", "E-commerce", "/images/portfolio/brandeals-wm.webp"],
  ["Business Software", "Operations platform", "/images/services/softwares/restaurant-pos.png"],
  ["Brand Systems", "Identity + social", "/images/services/branding/project-sarss.webp"],
] as const;

function ProjectStage({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const [name, type, image] = project;
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.3 });
  const cardScale = useTransform(progress, [0.06, 0.48, 0.9], [0.96, 1, 0.975]);
  const cardY = useTransform(progress, [0.06, 0.9], [42, -18]);
  const imageScale = useTransform(progress, [0.12, 0.82], [1.045, 1]);
  const copyY = useTransform(progress, [0.1, 0.8], [20, -10]);
  const copyOpacity = useTransform(progress, [0.08, 0.23, 0.78, 0.94], [0.28, 1, 1, 0.42]);

  return (
    <section ref={ref} className="relative min-h-[120svh] px-4 py-7 md:px-8 md:py-10">
      <motion.article style={reduce ? undefined : { scale: cardScale, y: cardY }} className="sticky top-[78px] mx-auto flex min-h-[calc(100svh-98px)] max-w-[1440px] flex-col overflow-hidden rounded-[34px] border border-white/[.08] bg-[#111] shadow-[0_30px_100px_rgba(0,0,0,.32)] will-change-transform md:rounded-[44px]">
        <motion.div style={reduce ? undefined : { y: copyY, opacity: copyOpacity }} className="relative z-20 flex items-center justify-between gap-8 px-7 py-6 md:px-11 md:py-9">
          <div>
            <p className="text-[12px] font-semibold text-white/34">0{index + 1} · {type}</p>
            <h2 className="mt-1 text-[clamp(2.7rem,5vw,5.4rem)] font-semibold leading-none tracking-[-.058em]">{name}</h2>
          </div>
          <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-white text-black transition-transform group-hover:translate-x-1 md:flex"><ArrowRight size={18} /></div>
        </motion.div>
        <div className="relative min-h-0 flex-1 overflow-hidden bg-[#1b1b1d]">
          <motion.div style={reduce ? undefined : { scale: imageScale }} className="absolute inset-0 will-change-transform">
            <Image src={image} alt={name} fill className="object-cover object-top" sizes="100vw" />
          </motion.div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/26 to-transparent" />
        </div>
      </motion.article>
    </section>
  );
}

export default function PortfolioPage() {
  return (
    <main className="overflow-clip bg-black pt-[64px] text-white">
      <section className="px-5 pb-20 pt-20 md:px-8 md:pb-28 md:pt-28">
        <div className="mx-auto max-w-[1180px] text-center">
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} className="text-[16px] font-semibold text-white/42 md:text-[17px]">Work</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.95, delay: 0.04, ease }} className="mx-auto mt-3 max-w-5xl text-[clamp(4rem,9vw,9rem)] font-semibold leading-[.89] tracking-[-.075em]">The work should do the talking.</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.16 }} className="mx-auto mt-7 max-w-2xl text-[17px] font-medium leading-[1.55] text-white/46 md:text-[19px]">Selected websites, business systems and brand experiences designed around real commercial problems.</motion.p>
        </div>
      </section>

      {projects.map((project, index) => <ProjectStage key={project[0]} project={project} index={index} />)}

      <section className="px-5 py-28 text-center md:px-8 md:py-40">
        <div className="mx-auto max-w-[1060px]">
          <p className="text-[16px] font-semibold text-white/42 md:text-[17px]">Have a project in mind?</p>
          <h2 className="mt-3 text-[clamp(3.6rem,8vw,8rem)] font-semibold leading-[.89] tracking-[-.07em]">Make the next one yours.</h2>
          <div className="mt-9 flex flex-wrap justify-center gap-x-6 gap-y-3">
            <Link href="/contact" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 text-[15px] font-semibold text-black transition-transform hover:-translate-y-px">Start a project <ArrowRight size={16} /></Link>
            <Link href="/services" className="inline-flex items-center gap-1 text-[17px] font-medium text-[#2997ff] hover:underline">Explore services <ChevronRight size={18} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
