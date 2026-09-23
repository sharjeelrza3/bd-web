"use client";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
const images = [
  ["/images/services/branding/brand-g.jpg","Team collaboration","md:col-span-2 md:row-span-2"],
  ["/images/services/branding/project-mehran.webp","Design discussion",""],
  ["/images/services/social-media/creative-2.webp","Development session",""],
  ["/images/services/social-media/reel-cover.webp","Team meeting","md:col-span-2"],
];
export default function Culture(){
  return <section className="bg-[#f5f5f7] px-5 py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.78fr_1.22fr]">
    <div className="lg:sticky lg:top-28 lg:self-start"><p className="text-sm font-semibold uppercase tracking-[.28em] text-[#0066cc]">Our Culture</p><h2 className="mt-4 text-5xl font-semibold leading-[.88] tracking-[-.065em] md:text-7xl">Learn. Build. Ship. Improve.</h2>
      <p className="mt-6 text-lg font-semibold leading-8 text-black/50">We value curiosity, ownership and clear communication.</p>
      <div className="mt-8 space-y-3">{["Open feedback","Shared learning","Ownership mindset","Quality over shortcuts"].map(x=><div key={x} className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#0066cc]"/><span className="font-semibold text-black/60">{x}</span></div>)}</div>
    </div>
    <div className="grid auto-rows-[220px] gap-4 md:grid-cols-4">{images.map(([src,alt,span])=><div key={src} className={`relative overflow-hidden rounded-[2rem] border border-black/10 bg-black ${span}`}><Image src={src} alt={alt} fill className="object-cover transition duration-700 hover:scale-105"/></div>)}</div>
  </div></section>
}
