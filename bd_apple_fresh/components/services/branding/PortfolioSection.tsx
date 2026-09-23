"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Nehal Jewels",
    category: "Jewelry Branding",
    image: "/images/services/branding/project-nehal.webp",
  },
  {
    title: "SARSS Fragrance",
    category: "Luxury Product Identity",
    image: "/images/services/branding/project-sarss.webp",
  },
  {
    title: "Mehran Royale Farmhouse",
    category: "Social Media Identity",
    image: "/images/services/branding/project-mehran.webp",
  },
  {
    title: "Brandeals.pk",
    category: "Clothing Brand",
    image: "/images/services/branding/project-brandeals.webp",
  },
];

export default function PortfolioSection() {
  return (
    <section id="branding-work" className="bg-white px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Selected Branding Work
            </p>
            <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Visual identities built to be remembered.
            </h2>
          </div>

          <a
            href="/portfolio"
            className="w-fit rounded-full bg-[#1d1d1f] px-6 py-4 font-semibold text-white transition hover:bg-[#0066cc] hover:text-[#000000]"
          >
            View Full Portfolio
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href="/portfolio"
              className="group overflow-hidden rounded-[2.2rem] border border-black/10 bg-[#f5f5f7] p-3 shadow-[0_20px_80px_rgba(0,0,0,.06)] transition hover:-translate-y-1 hover:shadow-[0_30px_110px_rgba(0,0,0,.11)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.7rem] bg-black">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex items-end justify-between gap-4 p-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0066cc]">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">
                    {project.title}
                  </h3>
                </div>

                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1d1d1f] text-white transition group-hover:bg-[#0066cc] group-hover:text-[#000000]">
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
