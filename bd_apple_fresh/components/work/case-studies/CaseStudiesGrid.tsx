import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "./data";
import { caseStudyIconMap } from "./iconMap";

export default function CaseStudiesGrid() {
  return (
    <section id="case-studies" className="bg-[#f5f5f7] px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Selected Case Studies
            </p>
            <h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
              The thinking behind the finished work.
            </h2>
          </div>

          <p className="max-w-xl text-lg font-semibold leading-8 text-black/50">
            Each story explains the business context, key decisions and final
            digital outcome.
          </p>
        </div>

        <div className="mt-16 space-y-7">
          {caseStudies.map((study, index) => {
            const Icon = caseStudyIconMap[study.icon];
            const reverse = index % 2 === 1;

            return (
              <article
                key={study.slug}
                className="group overflow-hidden rounded-[2.8rem] border border-black/10 bg-white shadow-[0_28px_100px_rgba(0,0,0,.07)]"
              >
                <div
                  className={`grid min-h-[610px] lg:grid-cols-[0.82fr_1.18fr] ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="flex flex-col p-7 md:p-10">
                    <div className="flex items-start justify-between">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1d1d1f] text-[#0066cc]">
                        <Icon size={23} />
                      </span>
                      <span className="text-6xl font-semibold tracking-[-0.08em] text-black/[0.06]">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-[#0066cc]">
                      {study.category}
                    </p>

                    <h3 className="mt-3 text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">
                      {study.client}
                    </h3>

                    <p className="mt-6 text-base font-semibold leading-7 text-black/50">
                      {study.heroDescription}
                    </p>

                    <div className="mt-8 grid grid-cols-2 gap-3">
                      <div className="rounded-[1.4rem] bg-[#f5f5f7] p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/30">
                          Location
                        </p>
                        <p className="mt-2 font-semibold">{study.location}</p>
                      </div>
                      <div className="rounded-[1.4rem] bg-[#f5f5f7] p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/30">
                          Year
                        </p>
                        <p className="mt-2 font-semibold">{study.year}</p>
                      </div>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {study.services.map((service) => (
                        <span
                          key={service}
                          className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-black/45"
                        >
                          {service}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="group/link mt-auto flex items-center justify-between rounded-full bg-[#1d1d1f] px-6 py-4 font-semibold text-white transition hover:bg-[#0066cc] hover:text-[#000000]"
                    >
                      View Full Case Study
                      <ArrowUpRight size={18} />
                    </Link>
                  </div>

                  <div className="relative min-h-[460px] overflow-hidden bg-[#1d1d1f] p-7 md:p-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,191,227,.18),transparent_42%)]" />

                    <div className="absolute left-[4%] top-[7%] h-[78%] w-[78%] rotate-[-3deg] overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.08] p-3 shadow-[0_35px_120px_rgba(0,0,0,.36)]">
                      <div className="relative h-full overflow-hidden rounded-[1.7rem] bg-black">
                        <Image
                          src={study.desktop}
                          alt={`${study.client} desktop preview`}
                          fill
                          className="object-cover transition duration-700 group-hover:scale-[1.025]"
                        />
                      </div>
                    </div>

                    <div className="absolute bottom-[4%] right-[4%] h-[62%] w-[29%] rotate-[5deg] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.08] p-3 shadow-[0_28px_100px_rgba(0,0,0,.4)]">
                      <div className="relative h-full overflow-hidden rounded-[1.5rem] bg-black">
                        <Image
                          src={study.mobile}
                          alt={`${study.client} mobile preview`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <div className="absolute bottom-6 left-6 rounded-full border border-white/10 bg-black/30 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/65 backdrop-blur">
                      Responsive Experience
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
