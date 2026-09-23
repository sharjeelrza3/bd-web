"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";

const platforms = [
  {
    title: "Instagram",
    description:
      "Reels, carousels, stories and visual content designed for discovery, engagement and brand recall.",
    metric: "Reach + Engagement",
    icon: FaInstagram,
  },
  {
    title: "Facebook",
    description:
      "Community building, local visibility, lead generation and campaign support for broader audiences.",
    metric: "Leads + Community",
    icon: FaFacebookF,
  },
  {
    title: "LinkedIn",
    description:
      "Professional positioning, B2B authority, thought leadership and high-value business connections.",
    metric: "Authority + B2B Leads",
    icon: FaLinkedinIn,
  },
  {
    title: "TikTok",
    description:
      "Trend-driven short-form content designed for organic discovery, entertainment and rapid reach.",
    metric: "Discovery + Trends",
    icon: FaTiktok,
  },
  {
    title: "YouTube",
    description:
      "Shorts, long-form videos and searchable content that build trust, visibility and long-term value.",
    metric: "Watch Time + Trust",
    icon: FaYoutube,
  },
];

export default function PlatformSection() {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f7] px-5 py-24 md:py-28">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-220px] top-[-160px] h-[560px] w-[560px] rounded-full bg-[#0066cc]/10 blur-[140px]" />

        <div className="absolute bottom-[-220px] left-[-220px] h-[520px] w-[520px] rounded-full bg-[#1d1d1f]/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
            Platform Strategy
          </p>

          <h2 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.06em] text-[#101010] md:text-7xl">
            Different platforms need different roles.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold leading-8 text-black/50">
            We do not repeat the same content everywhere. Each platform receives
            its own content format, message and growth objective while staying
            connected to one consistent brand strategy.
          </p>
        </div>

        {/* Platform cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;

            return (
              <article
                key={platform.title}
                className={`group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_18px_70px_rgba(0,0,0,.045)] transition duration-300 hover:-translate-y-2 hover:border-[#0066cc]/40 hover:shadow-[0_30px_100px_rgba(0,0,0,.09)] ${
                  index === 1 || index === 3 ? "lg:mt-10" : ""
                }`}
              >
                {/* Hover shape */}
                <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-[#0066cc]/0 transition duration-300 group-hover:bg-[#0066cc]/10" />

                <div className="relative flex h-full min-h-[330px] flex-col">
                  {/* Icon */}
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1d1d1f] text-[#0066cc] transition duration-300 group-hover:bg-[#0066cc] group-hover:text-[#000000]">
                    <Icon className="text-2xl" />
                  </span>

                  {/* Content */}
                  <div className="mt-8">
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#101010]">
                      {platform.title}
                    </h3>

                    <p className="mt-4 text-sm font-semibold leading-6 text-black/50">
                      {platform.description}
                    </p>
                  </div>

                  {/* Metric */}
                  <div className="mt-auto border-t border-black/10 pt-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0066cc]">
                      Platform Role
                    </p>

                    <p className="mt-2 text-sm font-semibold text-black/65">
                      {platform.metric}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-8 grid gap-4 rounded-[2rem] border border-black/10 bg-white p-5 shadow-[0_18px_70px_rgba(0,0,0,.045)] md:grid-cols-3">
          {[
            {
              title: "Platform-specific content",
              description:
                "Every platform gets content designed around its audience behavior.",
            },
            {
              title: "Consistent brand identity",
              description:
                "Visuals and messaging remain connected across the full ecosystem.",
            },
            {
              title: "Performance-led decisions",
              description:
                "Content direction changes according to reach, engagement and leads.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[1.5rem] bg-[#f5f5f7] p-5"
            >
              <h3 className="text-lg font-semibold tracking-[-0.03em]">
                {item.title}
              </h3>

              <p className="mt-2 text-sm font-semibold leading-6 text-black/45">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}