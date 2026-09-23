"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import VisualScene from "./VisualScene";
import { serviceData, type ServiceKey } from "./serviceData";

const ease = [0.16, 1, 0.3, 1] as const;

const services: { key: ServiceKey; href: string; label: string }[] = [
  { key: "website", href: "/services/website-development", label: "Build" },
  { key: "software", href: "/services/business-software", label: "Operate" },
  { key: "seo", href: "/services/seo", label: "Get found" },
  { key: "social", href: "/services/social-media", label: "Get noticed" },
  { key: "google", href: "/services/google-ads", label: "Capture intent" },
  { key: "meta", href: "/services/meta-ads", label: "Create demand" },
  { key: "branding", href: "/services/branding", label: "Look distinct" },
  { key: "ai", href: "/services/ai-automation", label: "Automate" },
  { key: "maintenance", href: "/services/maintenance", label: "Stay sharp" },
];

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.3 });
  const textY = useTransform(progress, [0, 0.64], [0, -72]);
  const textOpacity = useTransform(progress, [0, 0.46, 0.7], [1, 1, 0]);
  const visualScale = useTransform(progress, [0, 0.7], [0.82, 1]);
  const visualY = useTransform(progress, [0, 0.7], [120, -16]);

  return (
    <section ref={ref} className="relative h-[155svh] bg-white pt-[64px]">
      <div className="sticky top-[64px] h-[calc(100svh-64px)] overflow-hidden">
        <motion.div style={reduce ? undefined : { y: textY, opacity: textOpacity }} className="relative z-30 mx-auto max-w-[1180px] px-5 pt-[8vh] text-center md:px-8 md:pt-[10vh]">
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} className="text-[16px] font-semibold text-[#6e6e73] md:text-[17px]">Services</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.92, delay: 0.04, ease }} className="mx-auto mt-3 max-w-[1120px] text-balance text-[clamp(4rem,9.2vw,9.5rem)] font-semibold leading-[.87] tracking-[-.076em]">Everything digital. One standard.</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.18 }} className="mx-auto mt-7 max-w-3xl text-[17px] font-semibold leading-[1.5] text-[#6e6e73] md:text-[21px]">Build the experience, run the operation, create demand and keep improving it — without the handoff gaps.</motion.p>
        </motion.div>

        <motion.div style={reduce ? undefined : { scale: visualScale, y: visualY }} className="absolute inset-x-0 bottom-[-5vh] z-10 mx-auto h-[51vh] max-w-[1500px] px-4 [perspective:1800px] md:bottom-[-9vh] md:h-[58vh] md:px-8">
          <div className="absolute left-[1%] top-[22%] w-[48%] -rotate-6 overflow-hidden rounded-[20px] border border-black/[.08] bg-white p-1.5 shadow-[0_45px_130px_rgba(0,0,0,.19)] md:left-[6%] md:w-[38%] md:rounded-[28px] md:p-2">
            <Image src={serviceData.website.visual} alt="Website experience" width={1500} height={900} priority sizes="45vw" className="aspect-[16/9] w-full rounded-[15px] object-cover object-top md:rounded-[21px]" />
          </div>
          <div className="absolute left-1/2 top-0 z-20 w-[64%] -translate-x-1/2 overflow-hidden rounded-[22px] border border-black/[.08] bg-white p-1.5 shadow-[0_55px_150px_rgba(0,0,0,.25)] md:w-[47%] md:rounded-[31px] md:p-2">
            <Image src={serviceData.software.visual} alt="Business software" width={1600} height={900} priority sizes="55vw" className="aspect-[16/9] w-full rounded-[17px] object-cover object-top md:rounded-[24px]" />
          </div>
          <div className="absolute right-[0%] top-[23%] w-[45%] rotate-6 overflow-hidden rounded-[20px] border border-black/[.08] bg-white p-1.5 shadow-[0_45px_130px_rgba(0,0,0,.19)] md:right-[6%] md:w-[35%] md:rounded-[28px] md:p-2">
            <Image src={serviceData.social.visual} alt="Social creative" width={1300} height={900} priority sizes="42vw" className="aspect-[16/10] w-full rounded-[15px] object-cover md:rounded-[21px]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceRail() {
  const rail = useRef<HTMLDivElement>(null);
  const move = (direction: number) => rail.current?.scrollBy({ left: direction * Math.min(window.innerWidth * 0.72, 830), behavior: "smooth" });

  return (
    <section className="bd-defer overflow-hidden bg-[#f5f5f7] py-24 md:py-36">
      <div className="mx-auto flex max-w-[1440px] items-end justify-between gap-8 px-5 md:px-8">
        <div>
          <p className="text-[16px] font-semibold text-[#6e6e73] md:text-[17px]">Explore the lineup.</p>
          <h2 className="mt-3 max-w-4xl text-[clamp(3.3rem,6.8vw,7rem)] font-semibold leading-[.92] tracking-[-.066em]">Start with what the business needs next.</h2>
        </div>
        <div className="hidden gap-2 pb-1 sm:flex">
          <button onClick={() => move(-1)} aria-label="Previous service" className="flex h-12 w-12 items-center justify-center rounded-full bg-black/[.07] transition hover:bg-black/[.12] focus-visible:ring-2 focus-visible:ring-black"><ArrowLeft size={18} /></button>
          <button onClick={() => move(1)} aria-label="Next service" className="flex h-12 w-12 items-center justify-center rounded-full bg-black/[.07] transition hover:bg-black/[.12] focus-visible:ring-2 focus-visible:ring-black"><ArrowRight size={18} /></button>
        </div>
      </div>

      <div ref={rail} className="bd-rail mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[max(20px,calc((100vw-1440px)/2+32px))] pb-5 md:mt-16 md:gap-6">
        {services.map((item, index) => {
          const data = serviceData[item.key];
          return (
            <Link key={item.key} href={item.href} className="group relative min-h-[650px] w-[86vw] max-w-[760px] shrink-0 snap-center overflow-hidden rounded-[34px] bg-white md:min-h-[720px] md:w-[57vw] md:rounded-[42px]">
              <div className="relative z-20 p-7 pb-5 md:p-10 md:pb-7">
                <p className="text-[13px] font-semibold text-[#0071e3]">{String(index + 1).padStart(2, "0")} · {item.label}</p>
                <h3 className="mt-2 text-[clamp(2.8rem,5vw,5.6rem)] font-semibold leading-[.93] tracking-[-.061em]">{data.title}</h3>
                <p className="mt-4 max-w-xl text-[16px] font-medium leading-[1.5] text-black/46 md:text-[17px]">{data.intro}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-[16px] font-medium text-[#0066cc] md:text-[17px]">Learn more <ChevronRight size={17} className="transition-transform group-hover:translate-x-1" /></span>
              </div>
              <div className="absolute inset-x-3 bottom-3 md:inset-x-4 md:bottom-4"><VisualScene kind={data.key} image={data.visual} title={data.title} mode="card" /></div>
            </Link>
          );
        })}
        <div className="w-[4vw] shrink-0" aria-hidden="true" />
      </div>
    </section>
  );
}

function ConnectedStudio() {
  return (
    <section className="bd-defer relative overflow-hidden bg-black px-5 py-28 text-white md:px-8 md:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_52%,rgba(35,91,255,.28),transparent_28%)]" />
      <div className="bd-noise absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-[1180px]">
        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_.65fr] lg:gap-20">
          <div>
            <p className="text-[16px] font-semibold text-white/42 md:text-[17px]">The advantage of one connected studio.</p>
            <h2 className="mt-4 text-[clamp(3.5rem,7.2vw,7.4rem)] font-semibold leading-[.91] tracking-[-.068em]">No gap between design, code and growth.</h2>
          </div>
          <p className="pb-2 text-[17px] font-medium leading-[1.58] text-white/48 md:text-[19px]">A better website can feed search. Better creative can improve ads. Better software can make leads easier to manage. The pieces get stronger when they are designed together.</p>
        </div>

        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 md:mt-20">
          {["Experience", "Technology", "Growth", "Operations"].map((item, i) => (
            <div key={item} className="group min-h-[210px] rounded-[30px] border border-white/[.09] bg-white/[.045] p-7 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1">
              <p className="text-[12px] font-semibold text-white/28">0{i + 1}</p>
              <div className="mt-16 h-px w-full bg-white/[.09]"><div className="h-px w-7 bg-[#2997ff] transition-all duration-300 group-hover:w-16" /></div>
              <p className="mt-5 text-[24px] font-semibold tracking-[-.04em]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServicesExperience() {
  return (
    <main className="overflow-clip bg-white text-[#1d1d1f]">
      <Hero />
      <ServiceRail />
      <ConnectedStudio />
      <section className="bg-white px-5 py-28 md:px-8 md:py-44">
        <div className="mx-auto max-w-[1120px] text-center">
          <p className="text-[16px] font-semibold text-[#6e6e73] md:text-[17px]">Not sure where to start?</p>
          <h2 className="mx-auto mt-4 max-w-5xl text-[clamp(3.6rem,8vw,8.1rem)] font-semibold leading-[.89] tracking-[-.071em]">Start with the business problem.</h2>
          <p className="mx-auto mt-7 max-w-2xl text-[17px] font-medium leading-[1.55] text-black/46 md:text-[18px]">Tell us what is slowing growth, operations or customer experience down. We&apos;ll map the right digital solution.</p>
          <Link href="/contact" className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#0071e3] px-6 text-[15px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-px hover:bg-[#0077ed]">Talk to us <ArrowRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
