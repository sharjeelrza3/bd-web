"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

const ease=[0.16,1,0.3,1] as const;

type Props={search:string; onSearch:(value:string)=>void};
export default function Hero({search,onSearch}:Props){
  return (
    <section className="relative overflow-hidden bg-[#f5f5f7] px-5 pb-20 pt-24 text-[#1d1d1f] md:px-8 md:pb-28 md:pt-32">
      <div className="mx-auto max-w-[1180px] text-center">
        <motion.p initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.6,ease}} className="text-[16px] font-semibold text-[#6e6e73] md:text-[17px]">SEO guides</motion.p>
        <motion.h1 initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.9,delay:.04,ease}} className="mx-auto mt-3 max-w-[1080px] text-[clamp(4rem,9vw,9rem)] font-semibold leading-[.88] tracking-[-.075em]">Learn what makes search compound.</motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.7,delay:.16}} className="mx-auto mt-7 max-w-2xl text-[17px] font-medium leading-[1.55] text-black/46 md:text-[19px]">Technical foundations, local visibility, content and authority—explained around decisions you can actually make.</motion.p>
        <motion.label initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.22,ease}} className="mx-auto mt-8 flex max-w-xl items-center gap-3 rounded-full border border-black/[.08] bg-white px-5 py-4 shadow-[0_8px_30px_rgba(0,0,0,.04)]">
          <Search size={18} className="text-black/30"/><input value={search} onChange={(e)=>onSearch(e.target.value)} placeholder="Search SEO guides" className="w-full bg-transparent text-[15px] font-medium outline-none placeholder:text-black/28"/>
        </motion.label>
      </div>
      <motion.div initial={{opacity:0,y:60,scale:.96}} animate={{opacity:1,y:0,scale:1}} transition={{duration:1,delay:.12,ease}} className="relative mx-auto mt-14 h-[48vw] min-h-[430px] max-h-[680px] max-w-[1380px] overflow-hidden rounded-[34px] bg-black md:mt-18 md:rounded-[42px]">
        <Image src="/images/services/seo/visual-featured.png" alt="SEO performance experience" fill priority sizes="(max-width:768px) 100vw, 1380px" className="object-cover object-top"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/56 via-transparent to-transparent"/>
        <div className="absolute inset-x-0 bottom-0 p-7 text-left text-white md:p-10"><p className="text-[13px] font-semibold text-white/50">Visibility you can build on.</p><h2 className="mt-2 max-w-3xl text-[clamp(2.8rem,5vw,5.6rem)] font-semibold leading-[.94] tracking-[-.06em]">Search is a system, not a trick.</h2></div>
      </motion.div>
    </section>
  );
}
