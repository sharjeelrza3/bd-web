"use client";

import { Search, FileText, LayoutTemplate, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const ease=[0.16,1,0.3,1] as const;
const docs=[
  [FileText,"Audit checklist","SEO"],
  [LayoutTemplate,"Planning sheet","Website"],
  [BarChart3,"Content planner","Growth"],
] as const;

export default function Hero({ search, onSearch }: { search: string; onSearch: (value: string) => void }) {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-black px-5 pb-20 pt-24 text-white md:px-8 md:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(35,91,255,.32),transparent_25%),linear-gradient(#050507,#000)]"/>
      <div className="bd-noise absolute inset-0 opacity-25"/>
      <div className="relative mx-auto grid max-w-[1180px] items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
        <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.8,ease}}>
          <p className="text-[16px] font-semibold text-white/45 md:text-[17px]">Free resources</p>
          <h1 className="mt-3 text-[clamp(4rem,8.5vw,8.8rem)] font-semibold leading-[.88] tracking-[-.074em]">Useful tools. Ready when you are.</h1>
          <p className="mt-6 max-w-xl text-[17px] font-medium leading-[1.55] text-white/48 md:text-[19px]">Practical checklists and planning documents for websites, SEO, brand and growth.</p>
          <label className="mt-8 flex max-w-xl items-center gap-3 rounded-full border border-white/12 bg-white/[.08] px-5 py-4 backdrop-blur-xl">
            <Search size={18} className="text-white/38"/>
            <input value={search} onChange={(e)=>onSearch(e.target.value)} placeholder="Search resources" className="w-full bg-transparent text-[15px] font-medium outline-none placeholder:text-white/30"/>
          </label>
        </motion.div>

        <div className="relative min-h-[520px] [perspective:1500px]">
          {docs.map(([Icon,title,tag],i)=>(
            <div key={title} className="absolute w-[78%] max-w-[460px] -translate-x-1/2" style={{left: `${i === 0 ? 42 : i === 2 ? 58 : 50}%`, top: `${i * 8}%`, zIndex: i + 1}}>
              <motion.div initial={{opacity:0,y:70,rotate:i===0?-8:i===2?8:0}} animate={{opacity:1,y:i*24,rotate:i===0?-7:i===2?7:0}} transition={{duration:1,delay:.12+i*.08,ease}} className="rounded-[30px] border border-white/12 bg-white/[.09] p-7 shadow-[0_35px_120px_rgba(0,0,0,.45)] backdrop-blur-2xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-white text-black"><Icon size={22}/></div>
                <p className="mt-24 text-[12px] font-semibold text-[#8fc7ff]">{tag}</p>
                <h2 className="mt-2 text-[clamp(2.2rem,4vw,4.2rem)] font-semibold leading-[.95] tracking-[-.055em]">{title}</h2>
                <div className="mt-7 h-px bg-white/12"/><p className="mt-4 text-[13px] font-medium text-white/40">Being Digitals Resource</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
