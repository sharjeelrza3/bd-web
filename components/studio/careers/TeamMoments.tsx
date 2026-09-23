"use client";
import Image from "next/image";
const images=[
  ["/images/services/social-media/creative-2.webp","Team at work","md:col-span-2 md:row-span-2"],
  ["/images/services/social-media/reel-cover.webp","Creative session",""],["/images/services/branding/brand-g.jpg","Developer workspace",""],
  ["/images/services/branding/project-mehran.webp","Team discussion","md:col-span-2"],["/images/services/social-media/creative-2.webp","Office moment",""],["/images/services/social-media/reel-cover.webp","Design review",""],
];
export default function TeamMoments(){
  return <section className="bg-white px-5 py-28"><div className="mx-auto max-w-7xl"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="text-sm font-semibold uppercase tracking-[.28em] text-[#0066cc]">Team Moments</p><h2 className="mt-4 text-5xl font-semibold leading-[.9] tracking-[-.06em] md:text-7xl">Good work is serious. The culture should still feel human.</h2></div><p className="max-w-xl text-lg font-semibold leading-8 text-black/50">Collaboration and learning shape how we work.</p></div>
    <div className="mt-14 grid auto-rows-[210px] gap-4 md:grid-cols-4">{images.map(([src,alt,span])=><div key={src} className={`relative overflow-hidden rounded-[2rem] border border-black/10 bg-black ${span}`}><Image src={src} alt={alt} fill className="object-cover transition duration-700 hover:scale-105"/></div>)}</div>
  </div></section>
}
