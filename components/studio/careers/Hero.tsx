"use client";
import { ArrowRight, BriefcaseBusiness, CheckCircle2, CircleDot, Code2, Palette, Sparkles } from "lucide-react";

const roles = [
  ["Frontend Developer", Code2], ["Backend Developer", Code2],
  ["UI/UX Designer", Palette], ["AI Automation Engineer", Sparkles],
  ["WordPress Developer", Code2], ["Digital Marketer", BriefcaseBusiness],
];

export default function Hero() {
  return <section className="relative isolate overflow-hidden bg-[#000000] px-5 pb-28 pt-12 text-white">
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute right-[-260px] top-[-220px] h-[780px] w-[780px] rounded-full bg-[#0066cc]/18 blur-[170px]" />
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:48px_48px]" />
    </div>

    <div className="mx-auto max-w-7xl">
      <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-white/55">
        <Sparkles size={14} className="text-[#0066cc]" /> / Studio / Careers
      </div>

      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-[#0066cc]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0066cc]">
            Join Being Digitals
          </p>
          <h1 className="mt-7 text-[58px] font-semibold leading-[0.85] tracking-[-0.08em] md:text-[94px] lg:text-[108px]">
            Build products.<span className="block text-[#0066cc]">Grow your career.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-white/55 md:text-xl">
            Work across websites, software, branding, growth and AI automation for real businesses.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#open-roles" className="group inline-flex items-center gap-2 rounded-full bg-[#0066cc] px-7 py-4 font-semibold text-[#000000] transition hover:-translate-y-1">
              View Open Roles <ArrowRight size={18} className="-rotate-45 transition group-hover:rotate-0" />
            </a>
            <a href="mailto:careers@beingdigitals.com" className="rounded-full border border-white/15 px-7 py-4 font-semibold transition hover:bg-white hover:text-[#000000]">Send Your CV</a>
          </div>
          <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold text-white/45">
            {["Real projects","Latest tools","Career growth","Flexible culture"].map(x =>
              <span key={x} className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-[#0066cc]" />{x}</span>
            )}
          </div>
        </div>

        <div className="rounded-[2.8rem] border border-white/10 bg-white/[0.05] p-4 shadow-[0_45px_150px_rgba(0,0,0,.4)]">
          <div className="rounded-[2.2rem] bg-[#0d201b] p-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0066cc]">Careers Dashboard</p><p className="mt-1 text-xl font-semibold">Open opportunities</p></div>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-300"><CircleDot size={14}/>Hiring</span>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {roles.map(([title, Icon]) => {
                const SafeIcon = Icon as typeof Code2;
                return <div key={title as string} className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0066cc] text-[#000000]"><SafeIcon size={19}/></span>
                  <p className="mt-4 text-sm font-semibold">{title as string}</p><p className="mt-1 text-xs text-white/30">Open role</p>
                </div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
}
