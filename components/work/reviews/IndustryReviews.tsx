import { Building2, HeartPulse, Home, Store, UtensilsCrossed } from "lucide-react";

const industries = [
  { name: "Restaurant", rating: "5.0", projects: "18+", icon: UtensilsCrossed },
  { name: "Healthcare", rating: "4.9", projects: "12+", icon: HeartPulse },
  { name: "Retail", rating: "4.9", projects: "20+", icon: Store },
  { name: "Real Estate", rating: "4.8", projects: "10+", icon: Home },
  { name: "Corporate", rating: "5.0", projects: "15+", icon: Building2 },
];

export default function IndustryReviews() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
            Reviews by Industry
          </p>
          <h2 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">
            Different industries. The same commitment to quality.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const dark = index === 0 || index === 4;

            return (
              <article
                key={industry.name}
                className={`rounded-[2rem] p-6 ${
                  dark
                    ? "bg-[#1d1d1f] text-white"
                    : "border border-black/10 bg-white"
                }`}
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    dark ? "bg-[#0066cc] text-[#000000]" : "bg-[#e7fbff] text-[#0066cc]"
                  }`}
                >
                  <Icon size={21} />
                </span>

                <p className="mt-8 text-4xl font-semibold tracking-[-0.06em]">
                  {industry.rating}
                </p>
                <p className={`mt-1 text-xs font-semibold uppercase tracking-[0.16em] ${
                  dark ? "text-[#0066cc]" : "text-[#0066cc]"
                }`}>
                  Average Rating
                </p>

                <h3 className="mt-6 text-xl font-semibold">{industry.name}</h3>
                <p className={`mt-2 text-sm font-semibold ${
                  dark ? "text-white/40" : "text-black/40"
                }`}>
                  {industry.projects} projects
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
