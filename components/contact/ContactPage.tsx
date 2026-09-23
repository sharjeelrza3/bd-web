"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import ProjectForm from "./ProjectForm";

const ease=[0.16,1,0.3,1] as const;

export default function ContactPage(){
  return <main className="overflow-clip bg-white pt-[64px] text-[#1d1d1f]">
    <section className="px-5 pb-20 pt-20 md:px-8 md:pb-28 md:pt-28">
      <div className="mx-auto max-w-[1180px] text-center">
        <motion.p initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:.6,ease}} className="text-[17px] font-semibold text-[#6e6e73]">Start a project</motion.p>
        <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.95,delay:.04,ease}} className="mx-auto mt-3 max-w-5xl text-[clamp(4rem,9vw,9rem)] font-semibold leading-[.89] tracking-[-.075em]">Tell us what should exist next.</motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.7,delay:.15}} className="mx-auto mt-7 max-w-2xl text-[18px] font-medium leading-[1.5] text-black/48">A website, software system, growth engine, brand or automation. Start with the problem—we’ll help shape the right solution.</motion.p>
      </div>
      <motion.div initial={{opacity:0,y:55,scale:.96}} animate={{opacity:1,y:0,scale:1}} transition={{duration:1,delay:.15,ease}} className="relative mx-auto mt-14 min-h-[600px] max-w-[1440px] overflow-hidden rounded-[42px] bg-black md:min-h-[760px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(32,108,255,.4),transparent_28%),radial-gradient(circle_at_22%_78%,rgba(133,43,255,.25),transparent_25%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle,rgba(255,255,255,.65)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute left-[7%] top-[11%] w-[54%] rotate-[-5deg] overflow-hidden rounded-[28px] border border-white/12 bg-white/[.07] p-2 shadow-[0_45px_140px_rgba(0,0,0,.55)] backdrop-blur-xl"><Image src="/images/services/projects/business-website.webp" alt="Website project" width={1600} height={900} className="aspect-[16/9] w-full rounded-[21px] object-cover"/></div>
        <div className="absolute right-[6%] top-[24%] w-[45%] rotate-[6deg] overflow-hidden rounded-[28px] border border-white/12 bg-white/[.07] p-2 shadow-[0_45px_140px_rgba(0,0,0,.55)] backdrop-blur-xl"><Image src="/images/services/softwares/restaurant-pos.png" alt="Software project" width={1600} height={900} className="aspect-[16/9] w-full rounded-[21px] object-cover"/></div>
        <div className="absolute bottom-[8%] left-[22%] rounded-full border border-white/16 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-2xl">One brief. One connected team.</div>
      </motion.div>
    </section>

    <ProjectForm initialService="" />

    <section className="bg-black px-5 py-24 text-white md:px-8 md:py-36">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-5 md:grid-cols-2">
          <a href="mailto:support@beingdigitals.com" className="group rounded-[34px] border border-white/10 bg-white/[.055] p-8 md:p-10"><Mail className="text-[#2997ff]"/><p className="mt-20 text-[13px] font-semibold text-white/35">Email</p><h2 className="mt-2 text-[clamp(2.2rem,4vw,4rem)] font-semibold tracking-[-.05em]">support@beingdigitals.com</h2><span className="mt-5 inline-flex items-center gap-2 text-[#2997ff]">Write to us <ArrowRight size={16}/></span></a>
          <Link href="/contact#project-form" className="group rounded-[34px] border border-white/10 bg-white/[.055] p-8 md:p-10"><MessageCircle className="text-[#2997ff]"/><p className="mt-20 text-[13px] font-semibold text-white/35">Project brief</p><h2 className="mt-2 text-[clamp(2.2rem,4vw,4rem)] font-semibold tracking-[-.05em]">Give us the context. We’ll take it from there.</h2><span className="mt-5 inline-flex items-center gap-2 text-[#2997ff]">Start brief <ArrowRight size={16}/></span></Link>
        </div>
      </div>
    </section>
  </main>
}
