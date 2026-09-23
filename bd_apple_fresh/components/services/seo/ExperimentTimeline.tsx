"use client";

const steps = [
  ["01", "Audit", "Find technical, content and conversion gaps."],
  ["02", "Hypothesis", "Decide what change should create the biggest impact."],
  ["03", "Execute", "Implement technical, content or authority improvements."],
  ["04", "Measure", "Track rankings, clicks, leads and behavior."],
  ["05", "Scale", "Expand what works and remove what does not."],
];

export default function ExperimentTimeline() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">SEO Experiments</p>
            <h2 className="mt-4 text-5xl font-semibold leading-[0.88] tracking-[-0.065em] md:text-7xl">
              Growth comes from testing, not guessing.
            </h2>
          </div>

          <div className="relative pl-8">
            <div className="absolute bottom-0 left-[11px] top-0 w-px bg-black/10" />
            <div className="space-y-5">
              {steps.map(([num, title, desc]) => (
                <div key={title} className="relative rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_18px_70px_rgba(0,0,0,.05)]">
                  <span className="absolute -left-[35px] top-8 h-6 w-6 rounded-full border-4 border-[#f5f5f7] bg-[#0066cc]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0066cc]">{num}</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">{title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-black/50">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
