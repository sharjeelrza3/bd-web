"use client";
const pillars = [
  ["Design", "Make the business look clear, credible and premium."],
  ["Technology", "Build systems that are fast, stable and scalable."],
  ["Marketing", "Turn attention into traffic, leads and measurable growth."],
  ["Automation", "Remove repetitive work and connect business operations."],
];

export default function Philosophy() {
  return (
    <section className="bg-[#1d1d1f] px-5 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">Our Philosophy</p>
            <h2 className="mt-4 text-5xl font-semibold leading-[0.88] tracking-[-0.065em] md:text-7xl">Great digital work happens when disciplines work together.</h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[2.4rem] bg-white/10 sm:grid-cols-2">
            {pillars.map(([title, desc], index) => (
              <div key={title} className="min-h-[260px] bg-[#1d1d1f] p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0066cc]">0{index + 1}</p>
                <h3 className="mt-8 text-4xl font-semibold tracking-[-0.05em]">{title}</h3>
                <p className="mt-4 text-sm font-semibold leading-6 text-white/45">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
