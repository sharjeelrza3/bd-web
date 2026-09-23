"use client";

const results = [
  ["Restaurant", "+310%", "Reach Growth"],
  ["Jewelry Brand", "+410%", "Engagement Growth"],
  ["Farmhouse", "+220%", "Qualified Inquiries"],
  ["Software Brand", "+650%", "Profile Visits"],
];

export default function ResultsSection() {
  return (
    <section className="bg-white px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Client Results
            </p>
            <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Growth looks different for every brand.
            </h2>
          </div>

          <p className="max-w-xl text-lg font-semibold leading-8 text-black/50">
            We define success around the right metric for each business — reach,
            trust, inquiries, leads or sales.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {results.map(([brand, value, metric], index) => (
            <div
              key={brand}
              className={`rounded-[2.2rem] p-8 ${
                index % 2 === 0 ? "bg-[#1d1d1f] text-white" : "bg-[#e7fbff] text-[#000000]"
              }`}
            >
              <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                index % 2 === 0 ? "text-[#0066cc]" : "text-black/40"
              }`}>
                {brand}
              </p>
              <p className="mt-6 text-7xl font-semibold tracking-[-0.08em]">{value}</p>
              <p className="mt-3 text-lg font-semibold">{metric}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
