"use client";
import { BrainCircuit, BriefcaseBusiness, Laptop2, Rocket, Sparkles, UsersRound } from "lucide-react";
const items = [
  ["Real Client Projects","Work on products used by real businesses.",BriefcaseBusiness],
  ["Fast Career Growth","Take ownership and grow through delivery.",Rocket],
  ["Latest Technologies","Use modern stacks and AI tools.",BrainCircuit],
  ["Flexible Work Culture","A practical environment focused on outcomes.",Laptop2],
  ["Supportive Team","Collaborate and solve problems together.",UsersRound],
  ["Creative Freedom","Bring ideas and improve the work.",Sparkles],
];
export default function WhyJoin(){
  return <section className="bg-white px-5 py-28"><div className="mx-auto max-w-7xl">
    <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
      <div><p className="text-sm font-semibold uppercase tracking-[.28em] text-[#0066cc]">Why Join Us</p><h2 className="mt-4 text-5xl font-semibold leading-[.9] tracking-[-.06em] md:text-7xl">Learn faster by building work that matters.</h2></div>
      <p className="max-w-xl text-lg font-semibold leading-8 text-black/50">Get exposure to strategy, design, technology and growth inside one studio.</p>
    </div>
    <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map(([title,desc,Icon],i)=>{const SafeIcon=Icon as typeof Rocket; const dark=i===0||i===4; return <article key={title as string} className={`rounded-[2rem] p-7 ${dark?"bg-[#1d1d1f] text-white":"border border-black/10 bg-[#f5f5f7]"}`}>
        <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${dark?"bg-[#0066cc] text-[#000000]":"bg-[#e7fbff] text-[#0066cc]"}`}><SafeIcon size={23}/></span>
        <h3 className="mt-8 text-2xl font-semibold">{title as string}</h3><p className={`mt-3 text-sm font-semibold leading-6 ${dark?"text-white/45":"text-black/50"}`}>{desc as string}</p>
      </article>})}
    </div>
  </div></section>
}
