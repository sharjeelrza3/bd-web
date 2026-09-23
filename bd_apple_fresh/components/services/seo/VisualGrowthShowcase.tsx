"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  BarChart3,
  MapPin,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const visuals = [
  {
    title: "Search Visibility",
    // label: "Keyword Growth",
    image: "/images/services/seo/search.png",
    stat: "+148%",
    icon: Search,
  },
  {
    title: "Local Rankings",
    // label: "Map Pack",
    image: "/images/services/seo/map-pack.jpg",
    stat: "Top 3",
    icon: MapPin,
  },
  {
    title: "Organic Traffic",
    // label: "Monthly Growth",
    image: "/images/services/seo/organic-traffic.jpg",
    stat: "+420%",
    icon: TrendingUp,
  },
];

export default function VisualGrowthShowcase() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-220px] top-[-160px] h-[560px] w-[560px] rounded-full bg-[#0066cc]/10 blur-[140px]" />
        <div className="absolute left-[-220px] bottom-[-180px] h-[520px] w-[520px] rounded-full bg-[#1d1d1f]/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#e7fbff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0066cc]">
              <Sparkles size={14} />
              Visual Growth Story
            </p>

            <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.065em] text-[#101010] md:text-6xl">
              See how visibility turns into{" "}
              <span className="text-[#0066cc]">measurable growth.</span>
            </h2>
          </div>

          <p className="max-w-xl text-lg font-semibold leading-8 text-black/50">
            Rankings, local discovery and organic traffic work together. This visual
            section shows how search performance improves across the full customer journey.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
          <article className="group relative min-h-[620px] overflow-hidden rounded-[2.6rem] border border-black/10 bg-[#1d1d1f] p-4 shadow-[0_35px_120px_rgba(0,0,0,.12)]">
            <div className="relative h-full min-h-[590px] overflow-hidden rounded-[2.1rem]">
              <Image
                src="/images/services/seo/visual-featured.png"
                alt="SEO growth analytics dashboard"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                Organic Growth Campaign
              </div>

              <div className="absolute bottom-7 left-7 right-7">
                <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
                  <div>


                    <h3 className="mt-3 max-w-2xl text-4xl font-semibold leading-none tracking-[-0.055em] text-white md:text-5xl">
                      From low visibility to consistent organic leads.
                    </h3>
                  </div>

                  <div className="rounded-[1.6rem] border border-white/15 bg-white/10 p-5 text-white backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                      Lead Growth
                    </p>
                    <p className="mt-2 text-5xl font-semibold tracking-[-0.07em]">
                      +310%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <div className="grid gap-5">
            {visuals.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`group relative min-h-[190px] overflow-hidden rounded-[2rem] border border-black/10 bg-[#f5f5f7] p-3 shadow-[0_18px_70px_rgba(0,0,0,.06)] transition hover:-translate-y-1 hover:shadow-[0_28px_95px_rgba(0,0,0,.1)] ${index === 1 ? "lg:ml-8" : ""
                    }`}
                >
                  <div className="relative h-full min-h-[164px] overflow-hidden rounded-[1.55rem] bg-black">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover opacity-82 transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/35 to-transparent" />

                    <div className="absolute inset-0 flex items-center justify-between gap-5 p-5">
                      <div>
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-[#0066cc] backdrop-blur">
                          <Icon size={20} />
                        </span>

                        {/* <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#0066cc]">
                          {item.label}
                        </p> */}

                        <h3 className="mt-9 text-2xl font-semibold tracking-[-0.04em] text-white">
                          {item.title}
                        </h3>
                      </div>

                      <div className="text-right">
                        <p className="text-4xl font-semibold tracking-[-0.06em] text-white">
                          {item.stat}
                        </p>

                        <ArrowUpRight className="ml-auto mt-4 text-[#0066cc]" size={22} />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {[
            ["342", "Tracked Keywords"],
            ["18.4K", "Organic Visits"],
            ["128", "Monthly Leads"],
            ["97", "SEO Health"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-[1.7rem] border border-black/10 bg-[#f5f5f7] p-5"
            >
              <BarChart3 size={20} className="text-[#0066cc]" />
              <p className="mt-6 text-4xl font-semibold tracking-[-0.06em]">{value}</p>
              <p className="mt-1 text-sm font-bold text-black/40">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}