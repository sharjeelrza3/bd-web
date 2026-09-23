import { ArrowRight } from "lucide-react";
import { goals } from "@/data/home";

export default function Outcomes() {
  return (
    <section id="outcomes" className="mx-auto max-w-7xl px-5 py-24">
      <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0066cc]">Get outcomes</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-none tracking-[-0.045em] md:text-6xl">
            Tell us what you need. We’ll build the system around it.
          </h2>
        </div>
        <p className="max-w-sm text-lg leading-8 text-black/55">
          Whether you need more leads, a stronger brand, better operations or a
    complete digital presence, start with the outcome you want to achieve.
        </p>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {goals.map(([title, desc, Icon]) => (
          <a
            key={title}
            href="#contact"
            className="group rounded-[2rem] border border-black/10 bg-white p-7 transition hover:-translate-y-2 hover:bg-[#1d1d1f] hover:text-white"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7fbff] text-[#0066cc]">
                <Icon size={23} />
              </div>
              <ArrowRight className="-rotate-45 text-black/25 transition group-hover:rotate-0 group-hover:text-[#0066cc]" />
            </div>

            <h3 className="mt-14 text-2xl font-semibold">{title}</h3>
            <p className="mt-3 leading-7 text-black/55 group-hover:text-white/65">{desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
