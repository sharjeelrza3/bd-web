"use client";

import { websiteDevelopment } from "@/data/website-development";

export default function ProcessSection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0066cc] sm:text-sm">
            Our Development Process
          </p>

          <h2 className="mt-4 text-[40px] font-semibold leading-[0.94] tracking-[-0.05em] text-[#101010] sm:text-5xl md:text-6xl">
            A proven process to deliver{" "}
            <span className="text-[#0066cc]">high-converting</span> websites.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-6 text-black/45 sm:text-base sm:leading-7">
            Every website moves through a clear process from strategy and design
            to development, testing and launch.
          </p>
        </div>

        <div className="relative mt-12 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 md:grid-cols-3 md:gap-5 lg:mt-16 lg:grid-cols-6 lg:gap-4">
          <div className="absolute left-[7%] right-[7%] top-8 hidden h-px bg-black/10 lg:block" />

          {websiteDevelopment.process.map(([title, desc], index) => (
            <article
              key={title}
              className="group relative flex min-h-[220px] flex-col rounded-[1.5rem] border border-black/[0.07] bg-[#f5f5f7] p-4 text-left transition duration-300 hover:-translate-y-1 hover:border-[#0066cc]/35 hover:shadow-[0_18px_55px_rgba(0,0,0,.07)] sm:min-h-[230px] sm:p-5 lg:min-h-0 lg:border-0 lg:bg-transparent lg:p-0 lg:text-center lg:hover:translate-y-0 lg:hover:shadow-none"
            >
              <div className="flex items-start justify-between lg:block">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1d1d1f] text-[#0066cc] shadow-[0_12px_35px_rgba(0,0,0,.12)] sm:h-14 sm:w-14 lg:mx-auto lg:h-16 lg:w-16 lg:rounded-full">
                  <span className="text-sm font-semibold sm:text-base">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black/20 lg:hidden">
                  Step
                </span>
              </div>

              <h3 className="mt-5 text-lg font-semibold leading-tight tracking-[-0.035em] text-[#101010] sm:text-xl lg:text-lg">
                {title}
              </h3>

              <p className="mt-3 text-xs font-semibold leading-5 text-black/45 sm:text-sm sm:leading-6 lg:mt-2">
                {desc}
              </p>

              <div className="mt-auto pt-5 lg:hidden">
                <div className="h-1 w-full overflow-hidden rounded-full bg-black/[0.06]">
                  <div
                    className="h-full rounded-full bg-[#0066cc]"
                    style={{
                      width: `${((index + 1) / websiteDevelopment.process.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}