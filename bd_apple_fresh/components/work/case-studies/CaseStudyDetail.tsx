"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Quote } from "lucide-react";
import RailControls from "@/components/ui/RailControls";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import type { CaseStudy } from "./data";

export default function CaseStudyDetail({ study }: { study: CaseStudy }) {
  const heroRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 29, mass: .36 });
  const visualScale = useTransform(p, [0, .75], [.82, 1.04]);
  const visualY = useTransform(p, [0, .75], [130, -12]);
  const copyY = useTransform(p, [0, .5], [0, -80]);
  const copyOpacity = useTransform(p, [0, .35, .58], [1, 1, 0]);

  return (
    <main className="overflow-clip bg-white pt-[64px] text-[#1d1d1f]">
      <section ref={heroRef} className="relative h-[165svh] bg-black text-white md:h-[190svh]">
        <div className="sticky top-[64px] h-[calc(100svh-64px)] overflow-hidden">
          <div className="bd-noise absolute inset-0 opacity-[.15]" />
          <div className="absolute left-1/2 top-[65%] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(40,96,255,.28),transparent_68%)] blur-xl" />
          <motion.div style={reduce ? undefined : { y: copyY, opacity: copyOpacity }} className="absolute inset-x-0 top-[8vh] z-30 px-5 text-center">
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-[13px] font-semibold text-white/44 hover:text-white"><ArrowLeft size={14}/> All case studies</Link>
            <p className="mt-7 text-[14px] font-semibold text-white/42 md:text-[16px]">{study.category} · {study.location} · {study.year}</p>
            <h1 className="mx-auto mt-2 max-w-[1180px] text-[clamp(4rem,9vw,9rem)] font-semibold leading-[.84] tracking-[-.074em]">{study.client}</h1>
            <p className="mx-auto mt-5 max-w-3xl text-[clamp(1.4rem,2.7vw,2.3rem)] font-semibold leading-[1.25] tracking-[-.035em] text-white/52">{study.heroTitle}</p>
          </motion.div>
          <motion.div style={reduce ? undefined : { scale: visualScale, y: visualY }} className="absolute inset-x-0 bottom-[-2%] z-20 mx-auto h-[58%] max-w-[1180px] px-4 md:px-8">
            <div className="mx-auto w-[88%] overflow-hidden rounded-[30px] border border-white/13 bg-white/[.07] p-2 shadow-[0_65px_190px_rgba(0,0,0,.7)] backdrop-blur-xl">
              <div className="flex h-7 items-center gap-1.5 px-2"><span className="h-2 w-2 rounded-full bg-white/18"/><span className="h-2 w-2 rounded-full bg-white/18"/><span className="h-2 w-2 rounded-full bg-white/18"/></div>
              <div className="relative aspect-[16/9] overflow-hidden rounded-[23px]"><Image src={study.cover} alt={study.client} fill priority sizes="80vw" className="object-cover object-top"/></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bd-content-auto px-5 py-28 md:px-8 md:py-40"><div className="mx-auto grid max-w-[1120px] gap-10 md:grid-cols-[.58fr_1.42fr]"><p className="text-[15px] font-semibold text-[#6e6e73]">The challenge.</p><div><h2 className="text-[clamp(3.2rem,6vw,6.2rem)] font-semibold leading-[.92] tracking-[-.065em]">Start with the real business problem.</h2><p className="mt-7 text-[clamp(1.65rem,3.5vw,3.1rem)] font-semibold leading-[1.14] tracking-[-.04em] text-black/58">{study.challenge}</p></div></div></section>

      <section className="bd-content-auto bg-[#f5f5f7] px-5 py-28 md:px-8 md:py-40"><div className="mx-auto max-w-[1180px]"><div className="grid gap-4 lg:grid-cols-2">{[["Strategy","What needed to change.",study.strategy],["Solution","What we built.",study.solution]].map(([label,title,items],col)=><article key={label as string} className={`rounded-[30px] p-8 md:p-10 ${col===0?"bg-black text-white":"bg-white text-black"}`}><p className={`text-[13px] font-semibold ${col===0?"text-white/40":"text-black/38"}`}>{label as string}</p><h2 className="mt-3 text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[.94] tracking-[-.06em]">{title as string}</h2><div className={`mt-10 border-t ${col===0?"border-white/10":"border-black/[.08]"}`}>{(items as string[]).map((x,i)=><div key={x} className={`grid grid-cols-[48px_1fr] border-b py-5 ${col===0?"border-white/10":"border-black/[.08]"}`}><span className={`text-[11px] font-semibold ${col===0?"text-white/28":"text-black/28"}`}>0{i+1}</span><p className={`text-[16px] font-semibold leading-6 ${col===0?"text-white/65":"text-black/64"}`}>{x}</p></div>)}</div></article>)}</div></div></section>

      <section className="bd-content-auto bg-white py-28 md:py-40"><div className="mx-auto flex max-w-[1260px] flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-end md:px-6"><div><p className="text-[15px] font-semibold text-[#6e6e73]">The experience.</p><h2 className="mt-2 max-w-4xl text-[clamp(3.2rem,6vw,6.2rem)] font-semibold leading-[.92] tracking-[-.065em]">Details that add up.</h2></div><RailControls railRef={galleryRef} className="shrink-0" /></div><div ref={galleryRef} className="bd-rail mt-11 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[max(20px,calc((100vw-1260px)/2+24px))] pb-3">{study.gallery.map((src,i)=><div key={`${src}-${i}`} className="relative aspect-[16/10] min-w-[84vw] snap-start overflow-hidden rounded-[30px] bg-[#f5f5f7] md:min-w-[720px]"><Image src={src} alt={`${study.client} project screen ${i+1}`} fill sizes="760px" className="object-cover object-top"/></div>)}</div></section>

      <section className="bg-[#f5f5f7] px-5 py-24 md:px-8 md:py-32"><div className="mx-auto grid max-w-[1120px] grid-cols-2 gap-3 md:grid-cols-4">{study.results.map((r,i)=><div key={r.label} className={`rounded-[28px] p-6 text-center md:p-8 ${i===1?"bg-black text-white":"bg-white"}`}><p className="text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-none tracking-[-.07em]">{r.value}</p><p className={`mt-4 text-[12px] font-semibold md:text-[14px] ${i===1?"text-white/38":"text-black/38"}`}>{r.label}</p></div>)}</div></section>

      <section className="relative overflow-hidden bg-black px-5 py-28 text-center text-white md:px-8 md:py-40"><div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(39,94,255,.25),transparent_36%)]"/><div className="relative mx-auto max-w-[980px]"><Quote size={28} className="mx-auto text-[#2997ff]"/><blockquote className="mt-7 text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[1.02] tracking-[-.058em]">“{study.testimonial.quote}”</blockquote><p className="mt-7 text-[14px] font-semibold text-white/40">{study.testimonial.name} · {study.testimonial.role}</p><Link href="/contact" className="bd-cta-secondary bd-arrow-shift mt-9 border-white bg-white text-black">Start your project <ArrowRight size={16}/></Link></div></section>
    </main>
  );
}
