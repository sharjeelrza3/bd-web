"use client";
import { PlayCircle } from "lucide-react";
type Reel={title:string;video:string;thumbnail:string;client:string;category:string;duration:string};
export default function MainPlayer({reel}:{reel:Reel}){
 return <section id="main-showreel" className="px-5 py-16"><div className="mx-auto max-w-7xl">
  <div className="overflow-hidden rounded-[2.8rem] border border-white/10 bg-white/[0.05] p-4 shadow-[0_45px_160px_rgba(0,0,0,.45)]">
   <div className="aspect-video overflow-hidden rounded-[2.2rem] bg-black">
    <video key={reel.video} controls playsInline preload="metadata" poster={reel.thumbnail} className="h-full w-full object-cover"><source src={reel.video} type="video/mp4"/></video>
   </div>
   <div className="flex flex-wrap items-center justify-between gap-5 p-5">
    <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0066cc]">Now Playing</p><h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">{reel.title}</h2></div>
    <span className="inline-flex items-center gap-2 rounded-full bg-[#0066cc] px-5 py-3 text-sm font-semibold text-[#000000]"><PlayCircle size={18}/>{reel.duration}</span>
   </div>
  </div>
 </div></section>
}
