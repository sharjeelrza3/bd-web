"use client";
import { Award, Clock3, GraduationCap, HeartHandshake, Laptop2, Plane, TrendingUp, WalletCards } from "lucide-react";
const items=[["Competitive Salary",WalletCards],["Remote Friendly",Laptop2],["Flexible Hours",Clock3],["Paid Leaves",Plane],["Learning Support",GraduationCap],["Performance Bonuses",Award],["Career Growth",TrendingUp],["Supportive Culture",HeartHandshake]];
export default function Benefits(){
  return <section className="bg-[#1d1d1f] px-5 py-28 text-white"><div className="mx-auto max-w-7xl">
    <div className="mx-auto max-w-4xl text-center"><p className="text-sm font-semibold uppercase tracking-[.28em] text-[#0066cc]">Benefits & Growth</p><h2 className="mt-4 text-5xl font-semibold leading-none tracking-[-.06em] md:text-7xl">Work that supports your growth.</h2></div>
    <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{items.map(([title,Icon])=>{const SafeIcon=Icon as typeof Award; return <article key={title as string} className="rounded-[2rem] border border-white/10 bg-white/[.06] p-6"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0066cc] text-[#000000]"><SafeIcon size={21}/></span><h3 className="mt-7 text-xl font-semibold">{title as string}</h3></article>})}</div>
  </div></section>
}
