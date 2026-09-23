"use client";

import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { clientLogos } from "@/data/trust";

export default function TrustedLogos() {
  const repeatedLogos = [...clientLogos, ...clientLogos];

  const capabilities = [
    "Web Development",
    "Custom Software",
    "SEO",
    "Paid Advertising",
    "Branding",
  ];

  return (
    <section
      id="clients"
      className="overflow-hidden border-y border-black/10 bg-white px-5 py-16 sm:px-6 md:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="grid gap-7 lg:grid-cols-[1fr_.62fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0066cc] sm:text-sm">
              Trusted by growing businesses
            </p>

            <h2 className="mt-4 max-w-3xl text-[40px] font-semibold leading-[0.92] tracking-[-0.055em] text-[#101010] sm:text-5xl md:text-6xl">
              Real businesses.
              <span className="block text-[#0066cc]">
                Real digital partnerships.
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-xl text-base font-semibold leading-7 text-black/50 md:text-lg md:leading-8">
              Supporting businesses across restaurants, healthcare, ecommerce,
              property, lifestyle and professional services with digital solutions
              built around real goals.
            </p>

            <a
              href="/portfolio"
              className="group/link mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#1d1d1f]"
            >
              Explore client work

              <ArrowUpRight
                size={17}
                className="text-[#0066cc] transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
              />
            </a>
          </div>
        </div>

        {/* Logo marquee */}
        <div className="group/marquee relative mt-12 overflow-hidden rounded-[2rem] border border-black/10 bg-[#f5f5f7] py-4 shadow-[0_18px_70px_rgba(0,0,0,.04)] sm:py-5 md:rounded-[2.4rem]">
          {/* Side fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-14 bg-gradient-to-r from-[#f5f5f7] via-[#f5f5f7]/90 to-transparent sm:w-24 md:w-32" />

          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-14 bg-gradient-to-l from-[#f5f5f7] via-[#f5f5f7]/90 to-transparent sm:w-24 md:w-32" />

          <div className="flex w-max animate-[bdMarquee_32s_linear_infinite] items-center gap-3 px-3 group-hover/marquee:[animation-play-state:paused] sm:gap-4">
            {repeatedLogos.map((client, index) => (
              <a
                key={`${client.name}-${index}`}
                href="/portfolio"
                aria-label={`View ${client.name} project`}
                className="group/logo relative flex h-24 min-w-[180px] items-center justify-center overflow-hidden rounded-[1.35rem] border border-black/[0.08] bg-white px-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0066cc]/45 hover:shadow-[0_18px_55px_rgba(7,155,185,.12)] sm:h-28 sm:min-w-[220px] sm:rounded-[1.6rem] md:h-32 md:min-w-[250px]"
              >
                {/* Individual hover background */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0066cc]/0 via-transparent to-[#0066cc]/0 transition-all duration-300 group-hover/logo:from-[#0066cc]/[0.06] group-hover/logo:to-[#0066cc]/[0.08]" />

                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={420}
                  height={180}
                  sizes="(max-width: 640px) 145px, (max-width: 1024px) 180px, 210px"
                  className="relative z-10 max-h-14 w-auto max-w-[145px] object-contain grayscale opacity-55 transition-all duration-300 group-hover/logo:scale-[1.08] group-hover/logo:grayscale-0 group-hover/logo:opacity-100 sm:max-h-16 sm:max-w-[180px] md:max-h-20 md:max-w-[210px]"
                />

                <span className="pointer-events-none absolute bottom-3 right-3 flex h-7 w-7 translate-y-2 items-center justify-center rounded-full bg-[#1d1d1f] text-white opacity-0 transition-all duration-300 group-hover/logo:translate-y-0 group-hover/logo:opacity-100">
                  <ArrowUpRight size={13} />
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Capabilities */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 rounded-[1.5rem] border border-black/[0.07] bg-[#f5f5f7] px-5 py-4">
          <span className="w-full text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-black/30 sm:w-auto sm:text-left">
            Projects delivered across
          </span>

          {capabilities.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 text-xs font-semibold text-black/50 sm:text-sm"
            >
              <CheckCircle2
                size={15}
                className="shrink-0 text-[#0066cc]"
              />

              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}