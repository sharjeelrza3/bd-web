const stats = [
  ["4", "Detailed Case Studies"],
  ["120+", "Projects Delivered"],
  ["40+", "Businesses Served"],
  ["98%", "Client Satisfaction"],
];

export default function ResultsStrip() {
  return (
    <section className="bg-[#1d1d1f] px-5 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([value, label]) => (
          <article
            key={label}
            className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7"
          >
            <p className="text-5xl font-semibold tracking-[-0.07em]">{value}</p>
            <p className="mt-2 text-sm font-bold text-white/40">{label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
