import {
  BarChart3,
  Braces,
  FileSearch,
  Link2,
  Search,
  Sparkles,
} from "lucide-react";

const steps = [
  { number: "01", title: "SEO Basics", icon: Sparkles },
  { number: "02", title: "Keyword Research", icon: Search },
  { number: "03", title: "On-Page SEO", icon: FileSearch },
  { number: "04", title: "Technical SEO", icon: Braces },
  { number: "05", title: "Authority", icon: Link2 },
  { number: "06", title: "Measurement", icon: BarChart3 },
];

export default function LearningRoadmap() {
  return (
    <section className="bg-[#1d1d1f] px-5 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
            Learning Roadmap
          </p>
          <h2 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">
            Learn SEO in the right order.
          </h2>
        </div>

        <div className="relative mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          <div className="absolute left-[8%] right-[8%] top-8 hidden h-px bg-white/10 lg:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article key={step.number} className="relative text-center">
                <span className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0066cc] text-[#000000]">
                  <Icon size={22} />
                </span>

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#0066cc]">
                  {step.number}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
