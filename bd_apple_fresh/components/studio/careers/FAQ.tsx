"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
const faqs=[
  ["Do you offer remote positions?","Some roles are remote or hybrid depending on responsibilities."],
  ["Do you offer internships?","Internships may be available for candidates with strong fundamentals."],
  ["What should I include?","Send your CV, portfolio or GitHub, location and target role."],
  ["What are the working hours?","Hours depend on the role; reliability and communication matter."],
  ["Do you support learning?","Yes, through real projects, reviews and new tools."],
  ["How quickly will I hear back?","Shortlisted candidates are usually contacted within a few business days."],
];
export default function FAQ(){
  const [open,setOpen]=useState(0);
  return <section className="bg-[#f5f5f7] px-5 py-28"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.72fr_1.28fr]"><div><p className="text-sm font-semibold uppercase tracking-[.28em] text-[#0066cc]">Careers FAQs</p><h2 className="mt-4 text-5xl font-semibold leading-[.88] tracking-[-.065em] md:text-7xl">Everything you need before applying.</h2></div><div className="space-y-3">{faqs.map(([q,a],i)=>{const active=open===i;return <button key={q} onClick={()=>setOpen(active?-1:i)} className="w-full rounded-[1.5rem] border border-black/10 bg-white p-5 text-left"><div className="flex items-center justify-between gap-4"><h3 className="font-semibold">{q}</h3><Plus size={18} className={active?"rotate-45 text-[#0066cc]":""}/></div>{active&&<p className="mt-4 text-sm font-semibold leading-6 text-black/55">{a}</p>}</button>})}</div></div></section>
}
