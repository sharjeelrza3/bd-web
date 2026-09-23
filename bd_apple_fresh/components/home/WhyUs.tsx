import {
  BarChart3,
  Code2,
  SearchCheck,
  Target,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Strategy before execution",
    description:
      "We first understand your business, audience and goals before recommending any design, platform or campaign.",
    icon: Target,
  },
  {
    number: "02",
    title: "Built for performance",
    description:
      "Fast loading, responsive layouts and scalable development are considered from the beginning.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Search-ready foundations",
    description:
      "Clear structure, technical SEO and useful content help your business become easier to discover online.",
    icon: SearchCheck,
  },
  {
    number: "04",
    title: "Focused on real outcomes",
    description:
      "Every decision is connected to leads, sales, stronger operations or measurable business growth.",
    icon: BarChart3,
  },
];

export default function WhyUs() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-[2.2rem] bg-[#1d1d1f] text-white shadow-[0_35px_120px_rgba(16,35,31,.15)] sm:rounded-[2.8rem] lg:grid-cols-[0.88fr_1.12fr]">
          {/* Left content */}
          <div className="relative overflow-hidden p-8 md:p-12 lg:p-14">
            <div className="pointer-events-none absolute -bottom-32 -left-28 h-80 w-80 rounded-full bg-[#0066cc]/10 blur-[90px]" />

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0066cc] sm:text-sm">
                Why Being Digitals
              </p>

              <h2 className="mt-5 max-w-2xl text-[40px] font-semibold leading-[0.92] tracking-[-0.055em] sm:text-5xl md:text-6xl">
                Digital solutions around your business.
              </h2>

              <p className="mt-7 max-w-xl text-base font-medium leading-7 text-white/55 md:text-lg md:leading-8">
                We combine strategy, design, technology and digital growth
                expertise to create solutions that solve real business problems,
                not just look impressive.
              </p>

              <div className="mt-9 rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0066cc]">
                  Our approach
                </p>

                <p className="mt-3 text-lg font-semibold leading-7 text-white/80">
                  Understand the goal. Build the right solution. Improve it with
                  real data.
                </p>
              </div>
            </div>
          </div>

          {/* Right reasons grid */}
          <div className="grid gap-px bg-white/10 sm:grid-cols-2">
            {reasons.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group relative min-h-[280px] overflow-hidden bg-[#1d1d1f] p-7 transition duration-300 hover:bg-[#0066cc] hover:text-[#000000] md:min-h-[320px] md:p-8"
                >
                  <div className="flex items-start justify-between">
                    <p className="text-sm font-semibold tracking-[0.16em] text-[#0066cc] transition group-hover:text-[#000000]/50">
                      {item.number}
                    </p>

                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-[#0066cc] transition group-hover:border-black/10 group-hover:bg-[#000000] group-hover:text-[#0066cc]">
                      <Icon size={20} />
                    </span>
                  </div>

                  <div className="mt-16 md:mt-20">
                    <h3 className="text-2xl font-semibold leading-tight tracking-[-0.035em]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm font-medium leading-6 text-white/45 transition group-hover:text-[#000000]/65">
                      {item.description}
                    </p>
                  </div>

                  <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-0 bg-[#000000] transition-all duration-300 group-hover:w-full" />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}