import { CheckCircle2, Star } from "lucide-react";

const ratings = [
  { platform: "Google", score: "4.9", reviews: "32 reviews", percent: "98%" },
  { platform: "Facebook", score: "5.0", reviews: "18 reviews", percent: "100%" },
  { platform: "Direct Clients", score: "4.9", reviews: "40+ businesses", percent: "98%" },
];

export default function RatingsOverview() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Rating Overview
            </p>
            <h2 className="mt-4 text-5xl font-semibold leading-[0.88] tracking-[-0.065em] md:text-7xl">
              Strong ratings built through consistent delivery.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {ratings.map((rating) => (
              <article
                key={rating.platform}
                className="rounded-[2rem] border border-black/10 bg-white p-6"
              >
                <div className="flex items-center justify-between">
                  <Star size={22} fill="currentColor" className="text-[#0066cc]" />
                  <CheckCircle2 size={19} className="text-emerald-500" />
                </div>

                <p className="mt-8 text-5xl font-semibold tracking-[-0.07em]">{rating.score}</p>
                <h3 className="mt-3 text-xl font-semibold">{rating.platform}</h3>
                <p className="mt-2 text-sm font-semibold text-black/40">{rating.reviews}</p>

                <div className="mt-6 h-2 rounded-full bg-black/5">
                  <div className="h-full rounded-full bg-[#0066cc]" style={{ width: rating.percent }} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
