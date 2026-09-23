"use client";
import { ArrowUpRight, HeartPulse, Home, UtensilsCrossed } from "lucide-react";

const studies = [
  { industry:"Restaurant", project:"Kings Burger", result:"+310%", metric:"Digital inquiries",
    desc:"A stronger brand presence, better customer journey and connected ordering experience.", icon:UtensilsCrossed },
  { industry:"Real Estate", project:"Property Lead System", result:"-43%", metric:"Cost per qualified lead",
    desc:"A focused landing experience with stronger campaign targeting and CRM follow-up.", icon:Home },
  { industry:"Healthcare", project:"Clinic Operations", result:"2x", metric:"Faster patient flow",
    desc:"An integrated OPD, pharmacy and reporting workflow designed around daily operations.", icon:HeartPulse },
];

export default function CaseStudies() {
  return (
    <section className="bg-white px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">Industry Case Studies</p>
            <h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Solutions shaped around real business outcomes.
            </h2>
          </div>
          <p className="max-w-xl text-lg font-semibold leading-8 text-black/50">
            The right result depends on the industry: leads, operations, bookings, orders or customer experience.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {studies.map((study,index) => {
            const Icon = study.icon;
            return (
              <article key={study.project} className={`rounded-[2.3rem] p-7 ${
                index === 1 ? "bg-[#0066cc] text-[#000000]" : "bg-[#1d1d1f] text-white"
              }`}>
                <div className="flex items-start justify-between">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                    index === 1 ? "bg-[#000000] text-[#0066cc]" : "bg-[#0066cc] text-[#000000]"
                  }`}>
                    <Icon size={23} />
                  </span>
                  <ArrowUpRight size={20} className={index === 1 ? "text-black/30" : "text-white/30"} />
                </div>
                <p className={`mt-8 text-xs font-semibold uppercase tracking-[0.18em] ${
                  index === 1 ? "text-black/45" : "text-[#0066cc]"
                }`}>{study.industry}</p>
                <h3 className="mt-2 text-3xl font-semibold tracking-[-0.05em]">{study.project}</h3>
                <p className="mt-8 text-6xl font-semibold tracking-[-0.08em]">{study.result}</p>
                <p className="mt-2 text-sm font-semibold">{study.metric}</p>
                <p className={`mt-6 text-sm font-semibold leading-6 ${
                  index === 1 ? "text-black/55" : "text-white/45"
                }`}>{study.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
