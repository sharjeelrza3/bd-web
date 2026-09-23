"use client";
import { useMemo,useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { categories,reels } from "./showreelData";
type Reel=(typeof reels)[number];
export default function FeaturedReels({active,onSelect}:{active:string;onSelect:(r:Reel)=>void}){
 const [cat,setCat]=useState("All");
 const shown=useMemo(()=>cat==="All"?reels:reels.filter(r=>r.category===cat),[cat]);
 return <section id="featured-reels" className="bg-[#f5f5f7] px-5 py-28 text-[#101010]"><div className="mx-auto max-w-7xl">
  <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="text-sm font-semibold uppercase tracking-[.28em] text-[#0066cc]">Featured Reels</p><h2 className="mt-4 text-5xl font-semibold leading-[.9] tracking-[-.06em] md:text-7xl">Different formats. One creative standard.</h2></div><p className="max-w-xl text-lg font-semibold leading-8 text-black/50">Explore motion work across websites, software, branding and social media.</p></div>
  <div className="mt-10 flex flex-wrap gap-3">{categories.map(c=><button key={c} onClick={()=>setCat(c)} className={`rounded-full px-5 py-3 text-sm font-semibold ${cat===c?"bg-[#1d1d1f] text-white":"border border-black/10 bg-white text-black/50"}`}>{c}</button>)}</div>
  <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{shown.map((r,i)=><button key={r.video} onClick={()=>{onSelect(r);document.getElementById("main-showreel")?.scrollIntoView({behavior:"smooth"})}} className={`group overflow-hidden rounded-[2.2rem] border bg-white text-left transition hover:-translate-y-1 ${active===r.video?"border-[#0066cc]":"border-black/10"}`}>
   <div className={`relative overflow-hidden ${i===0?"h-[420px]":"h-[300px]"}`}><Image src={r.thumbnail} alt={r.title} fill className="object-cover transition duration-700 group-hover:scale-[1.05]"/><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"/><span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#0066cc] text-[#000000]"><Play size={22} fill="currentColor"/></span><span className="absolute right-5 top-5 rounded-full bg-black/45 px-3 py-2 text-xs font-semibold text-white">{r.duration}</span></div>
   <div className="p-6"><p className="text-xs font-semibold uppercase tracking-[.16em] text-[#0066cc]">{r.category}</p><h3 className="mt-3 text-2xl font-semibold">{r.title}</h3><p className="mt-2 text-sm font-semibold text-black/40">{r.client}</p></div>
  </button>)}</div>
 </div></section>
}
