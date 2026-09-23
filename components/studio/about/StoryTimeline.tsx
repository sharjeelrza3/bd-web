"use client";
const milestones = [
  ["2020", "Started Freelancing", "Small projects, direct client work and practical problem-solving."],
  ["2021", "First Long-Term Clients", "Built repeat relationships across websites, branding and marketing."],
  ["2022", "Expanded Capabilities", "Added custom software, paid growth and stronger creative systems."],
  ["2023", "Agency Structure", "Processes, reusable systems and a broader service ecosystem."],
  ["2024", "100+ Projects", "Delivered digital solutions across multiple industries and business models."],
  ["Today", "AI-Ready Studio", "Combining strategy, software, automation and growth into one company."],
];

export default function StoryTimeline() {
  return (
    <section id="story" className="bg-white px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">Our Story</p>
            <h2 className="mt-4 text-5xl font-semibold leading-[0.88] tracking-[-0.065em] md:text-7xl">Built step by step, project by project.</h2>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-black/50">Being Digitals grew through real client work, practical learning and a constant focus on building better systems.</p>
          </div>

          <div className="relative pl-8">
            <div className="absolute bottom-0 left-[11px] top-0 w-px bg-black/10" />
            <div className="space-y-5">
              {milestones.map(([year, title, desc]) => (
                <div key={year} className="relative rounded-[2rem] border border-black/10 bg-[#f5f5f7] p-7 transition hover:border-[#0066cc]/35 hover:bg-white hover:shadow-[0_20px_80px_rgba(0,0,0,.06)]">
                  <span className="absolute -left-[35px] top-8 h-6 w-6 rounded-full border-4 border-white bg-[#0066cc]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0066cc]">{year}</p>
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
