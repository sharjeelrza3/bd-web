"use client";

const steps = [
  ["01", "Research", "Audience, competitors, trends and business goals."],
  ["02", "Strategy", "Content pillars, platform role and campaign direction."],
  ["03", "Script", "Hooks, storytelling, captions and CTA planning."],
  ["04", "Create", "Design, shooting, editing and production."],
  ["05", "Publish", "Scheduling, formatting and platform optimization."],
  ["06", "Engage", "Community replies, comments and conversations."],
  ["07", "Optimize", "Review performance and improve what works."],
];

export default function ContentEngineSection() {
  return (
    <section className="bg-white px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Content Engine
            </p>
            <h2 className="mt-4 text-5xl font-semibold leading-[0.88] tracking-[-0.065em] md:text-7xl">
              A complete system from idea to performance.
            </h2>
          </div>

          <div className="relative pl-8">
            <div className="absolute bottom-0 left-[11px] top-0 w-px bg-black/10" />
            <div className="space-y-5">
              {steps.map(([num, title, desc]) => (
                <div
                  key={title}
                  className="relative rounded-[2rem] border border-black/10 bg-[#f5f5f7] p-7 transition hover:border-[#0066cc]/35 hover:bg-white"
                >
                  <span className="absolute -left-[35px] top-8 h-6 w-6 rounded-full border-4 border-white bg-[#0066cc]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0066cc]">
                    {num}
                  </p>
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
