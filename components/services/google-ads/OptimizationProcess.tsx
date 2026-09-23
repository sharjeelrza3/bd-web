"use client";

const steps = [
  ["01", "Research", "Offer, competitors, search demand and conversion goals."],
  ["02", "Structure", "Campaigns, ad groups, keywords, negatives and tracking."],
  ["03", "Launch", "Controlled setup with clear budget and bidding logic."],
  ["04", "Measure", "Search terms, CTR, CVR, quality score and lead quality."],
  ["05", "Optimize", "Improve bids, ads, landing pages and keyword efficiency."],
  ["06", "Scale", "Increase budget around campaigns with proven profitability."],
];

export default function OptimizationProcess() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Optimization Process
            </p>
            <h2 className="mt-4 text-5xl font-semibold leading-[0.88] tracking-[-0.065em] md:text-7xl">
              Search campaigns improve through disciplined optimization.
            </h2>
          </div>

          <div className="relative pl-8">
            <div className="absolute bottom-0 left-[11px] top-0 w-px bg-black/10" />

            <div className="space-y-5">
              {steps.map(([num, title, desc]) => (
                <div key={title} className="relative rounded-[2rem] border border-black/10 bg-white p-7">
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
