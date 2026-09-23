"use client";

import { websiteDevelopment } from "@/data/website-development";

export default function SolutionSection() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              WHAT MAKES US DIFFERENT
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-none tracking-[-0.05em] md:text-6xl">
              Website needs to look{" "}
              <span className="text-[#0066cc]">premium</span> and perform.
            </h2>
          </div>

          <p className="max-w-xl text-lg font-semibold leading-8 text-black/50">
            From strategy and design to development,
SEO and performance, every element is
built to help your business grow online.
          </p>
        </div>

        <div className="rounded-[2.5rem] border border-black/10 bg-white p-6 shadow-[0_30px_110px_rgba(0,0,0,.06)]">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {websiteDevelopment.features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[1.7rem] p-5 transition hover:bg-[#e7fbff]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7fbff] text-[#0066cc]">
                    <Icon size={21} />
                  </span>

                  <h3 className="mt-5 text-lg font-semibold tracking-[-0.03em]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold leading-6 text-black/48">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}