"use client";
import { ClipboardCheck, FileText, Handshake, MessageSquareText, PartyPopper, Search } from "lucide-react";
const items=[["01","Apply","Send CV and portfolio.",FileText],["02","Shortlisting","We review role fit.",Search],["03","Interview","Practical conversation.",MessageSquareText],["04","Technical Task","Focused role-based task.",ClipboardCheck],["05","Final Discussion","Align offer and expectations.",Handshake],["06","Welcome","Begin onboarding.",PartyPopper]];
export default function HiringProcess(){
  return <section className="bg-[#f5f5f7] px-5 py-28"><div className="mx-auto max-w-7xl"><div className="mx-auto max-w-4xl text-center"><p className="text-sm font-semibold uppercase tracking-[.28em] text-[#0066cc]">Hiring Process</p><h2 className="mt-4 text-5xl font-semibold leading-none tracking-[-.06em] md:text-7xl">Clear, practical and respectful.</h2></div>
    <div className="relative mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-6"><div className="absolute left-[8%] right-[8%] top-8 hidden h-px bg-black/10 lg:block"/>{items.map(([num,title,desc,Icon])=>{const SafeIcon=Icon as typeof Search; return <div key={num as string} className="relative text-center"><span className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0066cc] text-[#000000]"><SafeIcon size={22}/></span><p className="mt-5 text-xs font-semibold text-[#0066cc]">{num as string}</p><h3 className="mt-2 text-xl font-semibold">{title as string}</h3><p className="mt-3 text-sm font-semibold text-black/45">{desc as string}</p></div>})}</div>
  </div></section>
}
