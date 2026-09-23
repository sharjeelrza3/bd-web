"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section className="bd-defer bg-[#f5f5f7] px-5 py-24 md:px-8 md:py-36">
      <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[34px] bg-black px-7 py-16 text-white md:rounded-[42px] md:px-12 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_100%,rgba(35,91,255,.35),transparent_35%)]" />
        <div className="bd-noise absolute inset-0 opacity-20" />
        <div className="relative grid gap-12 lg:grid-cols-[1fr_.72fr] lg:items-end">
          <div>
            <p className="text-[16px] font-semibold text-white/42 md:text-[17px]">Occasional insights.</p>
            <h2 className="mt-3 max-w-3xl text-[clamp(3.3rem,6.7vw,6.8rem)] font-semibold leading-[.91] tracking-[-.067em]">Useful ideas. No empty noise.</h2>
          </div>
          {!done ? (
            <form onSubmit={(event)=>{event.preventDefault(); if(email.trim()) setDone(true);}} className="w-full">
              <label htmlFor="insight-email" className="mb-2 block text-[12px] font-semibold text-white/42">Email address</label>
              <div className="flex items-center gap-2 rounded-full border border-white/14 bg-white/[.08] p-1.5 pl-5 backdrop-blur-xl">
                <input id="insight-email" type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@company.com" className="min-w-0 flex-1 bg-transparent text-[15px] font-medium outline-none placeholder:text-white/28"/>
                <button aria-label="Subscribe" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform hover:translate-x-0.5"><ArrowRight size={17}/></button>
              </div>
              <p className="mt-3 text-[11px] font-medium text-white/30">No spam. Unsubscribe whenever you want.</p>
            </form>
          ) : (
            <div className="rounded-[28px] border border-white/10 bg-white/[.07] p-7"><CheckCircle2 size={28} className="text-[#2997ff]"/><h3 className="mt-4 text-2xl font-semibold">You&apos;re subscribed.</h3><p className="mt-2 text-sm text-white/42">The next useful idea will land here.</p></div>
          )}
        </div>
      </div>
    </section>
  );
}
