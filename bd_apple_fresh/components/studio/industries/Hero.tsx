"use client";
import {
  ArrowRight, Building2, CheckCircle2, Factory, HeartPulse,
  Hotel, ShoppingBag, Sparkles, Store
} from "lucide-react";

const orbitItems = [
  { label: "Healthcare", icon: HeartPulse, pos: "left-[7%] top-[18%]" },
  { label: "Retail", icon: Store, pos: "right-[8%] top-[14%]" },
  { label: "Hospitality", icon: Hotel, pos: "left-[4%] bottom-[18%]" },
  { label: "Manufacturing", icon: Factory, pos: "right-[5%] bottom-[18%]" },
  { label: "Corporate", icon: Building2, pos: "left-[36%] top-[2%]" },
  { label: "Ecommerce", icon: ShoppingBag, pos: "right-[35%] bottom-[2%]" },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#000000] px-5 pb-28 pt-12 text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-260px] top-[-200px] h-[760px] w-[760px] rounded-full bg-[#0066cc]/18 blur-[170px]" />
        <div className="absolute left-[-260px] bottom-[-280px] h-[620px] w-[620px] rounded-full bg-white/5 blur-[160px]" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-white/55">
          <Sparkles size={14} className="text-[#0066cc]" />
          <span>/ Studio / Industries</span>
        </div>

        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#0066cc]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0066cc]">
              Industry-Focused Digital Solutions
            </p>

            <h1 className="mt-7 max-w-5xl text-[58px] font-semibold leading-[0.85] tracking-[-0.08em] md:text-[94px] lg:text-[108px]">
              Digital solutions built around how your industry
              <span className="block text-[#0066cc]">actually works.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-white/55 md:text-xl">
              We study your customers, operations, challenges and commercial goals
              before designing the right website, software or growth system.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#industry-selector" className="group inline-flex items-center gap-2 rounded-full bg-[#0066cc] px-7 py-4 font-semibold text-[#000000] transition hover:-translate-y-1">
                Explore Industries
                <ArrowRight size={18} className="-rotate-45 transition group-hover:rotate-0" />
              </a>
              <a href="/contact" className="rounded-full border border-white/15 px-7 py-4 font-semibold transition hover:bg-white hover:text-[#000000]">
                Discuss Your Industry
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold text-white/45">
              {["15+ Industries", "120+ Projects", "Custom Strategy", "Business-Focused"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-[#0066cc]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative h-[620px]">
            <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
            <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0066cc]/25" />

            <div className="absolute left-1/2 top-1/2 flex h-56 w-56 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#0066cc]/25 bg-[#0d201b] text-center shadow-[0_0_100px_rgba(16,191,227,.2)]">
              <Building2 size={28} className="text-[#0066cc]" />
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">Core</p>
              <h3 className="mt-2 text-3xl font-semibold tracking-[-0.05em]">Your Industry</h3>
            </div>

            {orbitItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className={`absolute ${item.pos} flex h-28 w-28 flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.07] backdrop-blur-xl`}>
                  <Icon size={24} className="text-[#0066cc]" />
                  <p className="mt-3 text-xs font-semibold text-white/75">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
