"use client";

const steps = [
  ["01", "Discover", "Understand tools, tasks, delays and decision points."],
  ["02", "Map", "Design the full workflow and define system logic."],
  ["03", "Build", "Connect tools, configure AI and automate actions."],
  ["04", "Test", "Run real scenarios and validate every branch."],
  ["05", "Deploy", "Launch safely with monitoring and fallbacks."],
  ["06", "Improve", "Optimize rules and expand automation over time."],
];

export default function ProcessSection() {
  return (
    <section className="bg-white px-5 py-24 text-[#101010]">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
            Automation Process
          </p>
          <h2 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">
            From business process to intelligent system.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map(([num, title, desc]) => (
            <div key={title} className="rounded-[2rem] border border-black/10 bg-[#f5f5f7] p-7">
              <p className="text-5xl font-semibold tracking-[-0.08em] text-[#0066cc]/55">{num}</p>
              <h3 className="mt-10 text-2xl font-semibold tracking-[-0.04em]">{title}</h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-black/50">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
