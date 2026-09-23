import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  PlayCircle,
  Star,
} from "lucide-react";

const links = [
  {
    title: "Portfolio",
    description: "Explore selected websites, software and digital systems.",
    href: "/portfolio",
    icon: BriefcaseBusiness,
  },
  {
    title: "Case Studies",
    description: "See the thinking, process and outcomes behind our work.",
    href: "/case-studies",
    icon: BookOpen,
  },
  {
    title: "Client Reviews",
    description: "Read feedback from businesses we have worked with.",
    href: "/reviews",
    icon: Star,
  },
  {
    title: "Showreel",
    description: "Watch our websites, branding and campaigns in motion.",
    href: "/showreel",
    icon: PlayCircle,
  },
];

export default function ExploreLinks() {
  return (
    <section className="bg-white px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              While You Wait
            </p>

            <h2 className="mt-4 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Explore more of Being Digitals.
            </h2>
          </div>

          <p className="max-w-xl text-lg font-semibold leading-8 text-black/50">
            See how we approach strategy, design, technology and business growth.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {links.map((item, index) => {
            const Icon = item.icon;
            const dark = index === 0 || index === 3;

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`group rounded-[2rem] p-6 transition hover:-translate-y-1 ${
                  dark
                    ? "bg-[#1d1d1f] text-white"
                    : "border border-black/10 bg-[#f5f5f7]"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      dark
                        ? "bg-[#0066cc] text-[#000000]"
                        : "bg-white text-[#0066cc]"
                    }`}
                  >
                    <Icon size={21} />
                  </span>

                  <ArrowUpRight
                    size={19}
                    className={dark ? "text-white/25" : "text-black/20"}
                  />
                </div>

                <h3 className="mt-8 text-2xl font-semibold">{item.title}</h3>

                <p
                  className={`mt-3 text-sm font-semibold leading-6 ${
                    dark ? "text-white/40" : "text-black/45"
                  }`}
                >
                  {item.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
