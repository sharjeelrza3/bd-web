"use client";

import { Search } from "lucide-react";
import { motion } from "framer-motion";

const ease=[0.16,1,0.3,1] as const;

export default function Hero({ search, setSearch }: { search: string; setSearch: (value: string) => void }) {
  return (
    <section className="bg-white px-5 pb-20 pt-28 text-[#1d1d1f] md:px-8 md:pb-28 md:pt-36">
      <div className="mx-auto max-w-[1180px] text-center">
        <motion.p initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.6,ease}} className="text-[17px] font-semibold text-[#6e6e73]">Insights</motion.p>
        <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.95,delay:.04,ease}} className="mx-auto mt-3 max-w-5xl text-[clamp(4rem,9vw,8.8rem)] font-semibold leading-[.89] tracking-[-.075em]">Ideas for building better digital businesses.</motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.7,delay:.15}} className="mx-auto mt-7 max-w-2xl text-[18px] font-medium leading-[1.5] text-black/48">Websites, software, search, paid media and automation—explained with the business outcome in focus.</motion.p>
        <motion.label initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.22,ease}} className="mx-auto mt-9 flex max-w-xl items-center gap-3 rounded-full border border-black/10 bg-[#f5f5f7] px-5 py-4 text-left shadow-[0_1px_0_rgba(0,0,0,.03)]">
          <Search size={18} className="text-black/35"/>
          <input value={search} onChange={(event)=>setSearch(event.target.value)} placeholder="Search insights" className="w-full bg-transparent text-[15px] font-medium outline-none placeholder:text-black/30"/>
        </motion.label>
      </div>
    </section>
  );
}
