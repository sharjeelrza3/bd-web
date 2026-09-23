"use client";
import { Bot, Code2, Megaphone, Palette, Search, Workflow } from "lucide-react";

const capabilities = [
  { title: "Strategy", desc: "Positioning, planning and digital direction.", icon: Workflow },
  { title: "Design", desc: "Brand identity, interfaces and content systems.", icon: Palette },
  { title: "Development", desc: "Websites, software and scalable platforms.", icon: Code2 },
  { title: "Marketing", desc: "SEO, paid media and social growth.", icon: Megaphone },
  { title: "Optimization", desc: "Performance, conversion and measurable improvement.", icon: Search },
  { title: "Automation", desc: "AI agents, integrations and connected workflows.", icon: Bot },
];

export default function Capabilities() {
  return (
    <section className="bg-white px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">Meet Being Digitals</p>
            <h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">A multidisciplinary studio built around business outcomes.</h2>
          </div>
          <p className="max-w-xl text-lg font-semibold leading-8 text-black/50">Our value comes from connecting creative thinking, technical execution and growth strategy inside one team.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            const dark = index === 0 || index === 4;
            return (
              <article key={item.title} className={`rounded-[2rem] p-7 ${dark ? "bg-[#1d1d1f] text-white" : "border border-black/10 bg-[#f5f5f7]"}`}>
                <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${dark ? "bg-[#0066cc] text-[#000000]" : "bg-[#e7fbff] text-[#0066cc]"}`}>
                  <Icon size={23} />
                </span>
                <h3 className="mt-8 text-3xl font-semibold tracking-[-0.04em]">{item.title}</h3>
                <p className={`mt-3 text-sm font-semibold leading-6 ${dark ? "text-white/45" : "text-black/50"}`}>{item.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
