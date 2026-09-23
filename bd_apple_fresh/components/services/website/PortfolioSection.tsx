"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { websiteDevelopment } from "@/data/website-development";

export default function PortfolioSection() {
  return (
    <section id="website-work" className="bg-[#f5f5f7] px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Recent Website Projects
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-none tracking-[-0.05em] md:text-6xl">
              Websites we’ve built that drive real results.
            </h2>
          </div>

          <a
            href="/portfolio"
            className="w-fit rounded-full bg-[#1d1d1f] px-6 py-4 font-semibold text-white transition hover:bg-[#0066cc] hover:text-[#000000]"
          >
            View Full Portfolio
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {websiteDevelopment.projects.map((project) => (
            <a
              key={project.title}
              href="/portfolio"
              className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white p-3 shadow-[0_20px_80px_rgba(0,0,0,.06)] transition hover:-translate-y-1 hover:shadow-[0_30px_110px_rgba(0,0,0,.12)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-[#1d1d1f]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute bottom-4 left-4 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#1d1d1f]">
                  {project.category}
                </div>
              </div>

              <div className="flex items-end justify-between gap-4 p-4">
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-black/50">
                    {project.description}
                  </p>
                </div>

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1d1d1f] text-white transition group-hover:bg-[#0066cc] group-hover:text-[#000000]">
                  <ArrowRight size={18} className="-rotate-45" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
