import { ArrowDownRight, Play, Sparkles } from "lucide-react";
export default function Hero(){
 return <section className="relative isolate overflow-hidden px-5 pb-24 pt-14">
  <div className="pointer-events-none absolute inset-0 -z-10">
   <div className="absolute right-[-250px] top-[-220px] h-[760px] w-[760px] rounded-full bg-[#0066cc]/18 blur-[170px]"/>
   <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:48px_48px]"/>
  </div>
  <div className="mx-auto max-w-7xl">
   <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0066cc]"><Sparkles size={14}/>Being Digitals Showreel</p>
   <div className="mt-10 grid gap-14 lg:grid-cols-[1fr_.65fr] lg:items-end">
    <h1 className="max-w-5xl text-[58px] font-semibold leading-[0.84] tracking-[-0.085em] md:text-[96px] lg:text-[116px]">Ideas in motion.<span className="block text-[#0066cc]">Work that moves people.</span></h1>
    <div>
     <p className="text-lg font-semibold leading-8 text-white/55 md:text-xl">A cinematic collection of websites, software, branding, campaigns and digital stories.</p>
     <div className="mt-8 flex flex-wrap gap-4">
      <a href="#main-showreel" className="inline-flex items-center gap-2 rounded-full bg-[#0066cc] px-7 py-4 font-semibold text-[#000000]"><Play size={18} fill="currentColor"/>Play Showreel</a>
      <a href="#featured-reels" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 font-semibold">Explore Work<ArrowDownRight size={18}/></a>
     </div>
    </div>
   </div>
  </div>
 </section>
}
