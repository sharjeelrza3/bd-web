"use client";
const steps = [["01", "Idea"], ["02", "Strategy"], ["03", "Design"], ["04", "Development"], ["05", "Growth"], ["06", "Support"]];

export default function Journey() {
  return (
    <section className="bg-[#1d1d1f] px-5 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">Client Journey</p>
          <h2 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">One partner from first idea to long-term growth.</h2>
        </div>

        <div className="relative mt-16 grid gap-6 md:grid-cols-3 lg:grid-cols-6">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-white/10 lg:block" />
          {steps.map(([num, title]) => (
            <div key={title} className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0066cc] text-[#000000] shadow-[0_12px_35px_rgba(16,191,227,.2)]">
                <span className="font-semibold">{num}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
