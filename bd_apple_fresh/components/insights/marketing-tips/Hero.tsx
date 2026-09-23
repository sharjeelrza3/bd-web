"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

const ease=[0.16,1,0.3,1] as const;

export default function Hero({ search, onSearch }: { search: string; onSearch: (value: string) => void }) {
  return (
    <section className="relative overflow-hidden bg-white px-5 pb-16 pt-24 text-[#1d1d1f] md:px-8 md:pb-24 md:pt-32">
      <div className="mx-auto grid max-w-[1180px] items-end gap-12 lg:grid-cols-[.86fr_1.14fr] lg:gap-16">
        <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.8,ease}}>
          <p className="text-[16px] font-semibold text-[#6e6e73] md:text-[17px]">Marketing tips</p>
          <h1 className="mt-3 text-[clamp(4rem,8.5vw,8.8rem)] font-semibold leading-[.88] tracking-[-.074em]">Make every impression work harder.</h1>
          <p className="mt-6 max-w-xl text-[17px] font-medium leading-[1.55] text-black/46 md:text-[19px]">Practical thinking for paid media, social, content and brand—without the marketing theatre.</p>
          <label className="mt-8 flex max-w-xl items-center gap-3 rounded-full border border-black/[.08] bg-[#f5f5f7] px-5 py-4">
            <Search size={18} className="text-black/30"/>
            <input value={search} onChange={(e)=>onSearch(e.target.value)} placeholder="Search marketing tips" className="w-full bg-transparent text-[15px] font-medium outline-none placeholder:text-black/28"/>
          </label>
        </motion.div>

        <motion.div initial={{opacity:0,y:55,scale:.96}} animate={{opacity:1,y:0,scale:1}} transition={{duration:1,delay:.08,ease}} className="relative h-[520px] overflow-hidden rounded-[34px] bg-black md:h-[620px] md:rounded-[42px]">
          <Image src="/images/services/social-media/after.png" alt="Marketing creative by Being Digitals" fill priority sizes="(max-width:1024px) 100vw, 55vw" className="object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/5"/>
          <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-10">
            <p className="text-[13px] font-semibold text-white/45">Creative + media + iteration</p>
            <h2 className="mt-2 max-w-xl text-[clamp(2.7rem,5vw,5.2rem)] font-semibold leading-[.94] tracking-[-.06em]">Stop guessing what the audience will notice.</h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
