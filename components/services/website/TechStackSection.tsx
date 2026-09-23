"use client";

import {
  Code2,
  Database,
  Globe2,
  Layers3,
  Server,
  ShieldCheck,
} from "lucide-react";

const technologies = [
  { name: "Next.js", type: "Frontend", icon: Layers3 },
  { name: "React", type: "UI Library", icon: Code2 },
  { name: "TypeScript", type: "Clean Code", icon: Code2 },
  { name: "Tailwind CSS", type: "Styling", icon: Layers3 },
  { name: "PHP", type: "Backend", icon: Server },
  { name: "Laravel", type: "Framework", icon: Server },
  { name: "WordPress", type: "CMS", icon: Globe2 },
  { name: "MySQL", type: "Database", icon: Database },
  { name: "Hosting", type: "Deployment", icon: ShieldCheck },
];

export default function TechStackSection() {
  return (
    <section className="bg-white px-5 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
            Technologies We Use
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-none tracking-[-0.05em] md:text-6xl">
            Built with modern tools for the best performance.
          </h2>

          <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-black/50">
            We choose the right stack based on your website goals, budget,
            scalability and future maintenance needs.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {technologies.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.name}
                className="group rounded-[1.6rem] border border-black/10 bg-[#f5f5f7] p-5 transition hover:-translate-y-1 hover:border-[#0066cc]/40 hover:bg-white hover:shadow-[0_18px_70px_rgba(0,0,0,.07)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7fbff] text-[#0066cc] transition group-hover:bg-[#0066cc] group-hover:text-[#000000]">
                  <Icon size={21} />
                </span>

                <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em]">
                  {item.name}
                </h3>

                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-black/35">
                  {item.type}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}