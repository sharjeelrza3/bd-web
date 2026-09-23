"use client";
import { CheckCircle2, XCircle } from "lucide-react";

const generic = ["Same design for every business","Generic messaging","No operational understanding","Disconnected services"];
const being = ["Industry-specific customer journey","Relevant digital strategy","Operations-aware solutions","Connected website, software and growth"];

export default function WhyIndustry() {
  return (
    <section className="bg-white px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">Why Industry Knowledge Matters</p>
          <h2 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">
            A generic solution cannot solve an industry-specific problem.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <article className="rounded-[2.4rem] border border-black/10 bg-[#f5f5f7] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/35">Generic Agency</p>
            <h3 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">One template for everyone.</h3>
            <div className="mt-8 space-y-4">
              {generic.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <XCircle size={19} className="text-red-500" />
                  <span className="font-semibold text-black/55">{item}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2.4rem] bg-[#1d1d1f] p-8 text-white shadow-[0_30px_110px_rgba(16,35,31,.2)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0066cc]">Being Digitals</p>
            <h3 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">Strategy built around the business.</h3>
            <div className="mt-8 space-y-4">
              {being.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={19} className="text-emerald-300" />
                  <span className="font-semibold text-white/65">{item}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
