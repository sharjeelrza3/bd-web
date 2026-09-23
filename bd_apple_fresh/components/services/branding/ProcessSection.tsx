"use client";

const steps = [
  ["01", "Discover", "We understand your audience, competitors, values and business goals."],
  ["02", "Position", "We define what the brand should communicate and how it should feel."],
  ["03", "Explore", "We develop visual directions, references, colors and logo concepts."],
  ["04", "Design", "We refine the chosen direction into a complete identity system."],
  ["05", "Apply", "We extend the identity into social, packaging and marketing assets."],
  ["06", "Deliver", "You receive organized files, guidelines and ready-to-use brand assets."],
];

export default function ProcessSection() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
            Creative Process
          </p>
          <h2 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">
            Strategy first. Design with purpose.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map(([num, title, desc]) => (
            <div
              key={title}
              className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_18px_70px_rgba(0,0,0,.05)]"
            >
              <p className="text-5xl font-semibold tracking-[-0.08em] text-[#0066cc]/55">
                {num}
              </p>
              <h3 className="mt-10 text-2xl font-semibold tracking-[-0.04em]">{title}</h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-black/50">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
