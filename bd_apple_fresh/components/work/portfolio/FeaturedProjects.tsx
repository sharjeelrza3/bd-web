"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "./data";

export default function FeaturedProjects() {
  return (
    <section id="featured-work" className="bg-[#f5f5f7] px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">Featured Projects</p>
            <h2 className="mt-4 text-5xl font-semibold leading-[0.88] tracking-[-0.065em] md:text-7xl">
              Selected work with real business context.
            </h2>
          </div>
          <p className="max-w-xl text-lg font-semibold leading-8 text-black/50">
            Every project begins with a different problem, audience and commercial objective.
          </p>
        </div>

        <div className="mt-16 space-y-10">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <article
                key={project.slug}
                className="sticky overflow-hidden rounded-[2.8rem] border border-black/10 bg-white shadow-[0_35px_120px_rgba(0,0,0,.08)]"
                style={{ top: `${96 + index * 14}px` }}
              >
                <div className="grid min-h-[720px] lg:grid-cols-[0.72fr_1.28fr]">
                  <div className="flex flex-col p-7 md:p-10">
                    <div className="flex items-start justify-between">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1d1d1f] text-[#0066cc]">
                        <Icon size={23} />
                      </span>
                      <span className="text-6xl font-semibold text-black/[0.06]">0{index + 1}</span>
                    </div>

                    <p className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-[#0066cc]">
                      {project.category}
                    </p>
                    <h3 className="mt-3 text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">{project.title}</h3>
                    <p className="mt-6 text-base font-semibold leading-7 text-black/50">{project.description}</p>

                    <div className="mt-8 grid grid-cols-2 gap-3">
                      <div className="rounded-[1.4rem] bg-[#f5f5f7] p-4"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/30">Location</p><p className="mt-2 font-semibold">{project.location}</p></div>
                      <div className="rounded-[1.4rem] bg-[#f5f5f7] p-4"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/30">Year</p><p className="mt-2 font-semibold">{project.year}</p></div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.services.map(service => (
                        <span key={service} className="rounded-full border border-black/10 px-4 py-2 text-xs font-semibold text-black/45">{service}</span>
                      ))}
                    </div>

                    <Link href={`/case-studies/${project.slug}`} className="mt-auto flex items-center justify-between rounded-full bg-[#1d1d1f] px-6 py-4 font-semibold text-white">
                      View Case Study <ArrowUpRight size={18} />
                    </Link>
                  </div>

                  <div className="relative min-h-[520px] overflow-hidden bg-[#1d1d1f] p-6 md:p-10">
                    <div className="absolute left-[2%] top-[7%] h-[76%] w-[79%] rotate-[-3deg] overflow-hidden rounded-[2.3rem] border border-white/10 bg-white/[0.08] p-3 shadow-[0_35px_120px_rgba(0,0,0,.35)]">
                      <div className="relative h-full overflow-hidden rounded-[1.8rem] bg-black">
                        <Image src={project.desktop} alt={`${project.title} desktop`} fill className="object-cover" />
                      </div>
                    </div>
                    <div className="absolute bottom-[4%] right-[3%] h-[62%] w-[30%] rotate-[5deg] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.09] p-3 shadow-[0_28px_100px_rgba(0,0,0,.4)]">
                      <div className="relative h-full overflow-hidden rounded-[1.5rem] bg-black">
                        <Image src={project.mobile} alt={`${project.title} mobile`} fill className="object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
