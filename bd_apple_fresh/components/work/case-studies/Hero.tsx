import { ArrowDownRight, CheckCircle2, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#000000] px-5 pb-28 pt-14 text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-260px] top-[-220px] h-[760px] w-[760px] rounded-full bg-[#0066cc]/18 blur-[170px]" />
        <div className="absolute bottom-[-300px] left-[-260px] h-[620px] w-[620px] rounded-full bg-white/[0.04] blur-[160px]" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0066cc]">
          <Sparkles size={14} />
          Case Studies
        </p>

        <div className="mt-10 grid gap-14 lg:grid-cols-[1fr_.68fr] lg:items-end">
          <div>
            <h1 className="max-w-5xl text-[58px] font-semibold leading-[0.84] tracking-[-0.085em] md:text-[96px] lg:text-[116px]">
              Real challenges.
              <span className="block text-[#0066cc]">
                Designed into outcomes.
              </span>
            </h1>
          </div>

          <div className="pb-2">
            <p className="text-lg font-semibold leading-8 text-white/55 md:text-xl">
              Detailed stories showing how strategy, design, development and
              growth thinking come together.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              {["Challenge", "Strategy", "Solution", "Results"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-[1.2rem] border border-white/10 bg-white/[0.05] p-4"
                >
                  <CheckCircle2 size={17} className="text-[#0066cc]" />
                  <span className="text-sm font-semibold text-white/65">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#case-studies"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0066cc] px-7 py-4 font-semibold text-[#000000]"
            >
              Explore Case Studies
              <ArrowDownRight size={18} />
            </a>
          </div>
        </div>

        <div className="mt-20 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-4">
          {[
            ["04", "Detailed Stories"],
            ["120+", "Projects"],
            ["40+", "Businesses"],
            ["98%", "Satisfaction"],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="text-2xl font-semibold">{value}</p>
              <p className="mt-1 text-xs font-semibold text-white/35">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
