"use client";

const days = [
  ["Mon", "Reel", "Trend Hook"],
  ["Tue", "Carousel", "Education"],
  ["Wed", "Stories", "Poll + Q&A"],
  ["Thu", "Reel", "Problem / Solution"],
  ["Fri", "Testimonial", "Social Proof"],
  ["Sat", "Trend", "Community"],
  ["Sun", "Behind Scenes", "Brand Story"],
];

export default function CalendarSection() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              30-Day Content Calendar
            </p>
            <h2 className="mt-4 text-5xl font-semibold leading-[0.88] tracking-[-0.065em] md:text-6xl">
              Consistency becomes easier when the month is planned.
            </h2>
          </div>

          <p className="max-w-xl text-lg font-semibold leading-8 text-black/50">
            Every month includes a clear content mix built around reach, trust,
            engagement and conversion.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-[2.5rem] border border-black/10 bg-white p-5 shadow-[0_30px_110px_rgba(0,0,0,.07)]">
          <div className="grid gap-3 md:grid-cols-7">
            {days.map(([day, format, theme], index) => (
              <div
                key={day}
                className={`min-h-[260px] rounded-[1.7rem] p-5 ${
                  index === 3 ? "bg-[#1d1d1f] text-white" : "bg-[#f5f5f7]"
                }`}
              >
                <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                  index === 3 ? "text-[#0066cc]" : "text-black/35"
                }`}>
                  {day}
                </p>

                <div className="mt-8 flex h-28 items-center justify-center rounded-[1.3rem] border border-black/10 bg-white text-center text-[#101010]">
                  <div>
                    <p className="text-2xl font-semibold">{format}</p>
                    <p className="mt-2 text-xs font-bold text-black/35">Content Type</p>
                  </div>
                </div>

                <p className={`mt-6 text-sm font-semibold ${
                  index === 3 ? "text-white/80" : "text-black/55"
                }`}>
                  {theme}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
