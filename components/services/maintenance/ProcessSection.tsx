"use client";

const steps = [
  [
    "01",
    "Audit",
    "We review performance, updates, security and technical health.",
  ],
  [
    "02",
    "Protect",
    "We secure backups, access and essential website protections.",
  ],
  [
    "03",
    "Monitor",
    "We track uptime, speed and important website signals.",
  ],
  [
    "04",
    "Optimize",
    "We improve performance and resolve technical issues.",
  ],
  [
    "05",
    "Report",
    "You receive a clear summary of maintenance activity.",
  ],
];

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-6 md:py-24 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#0066cc]/8 blur-[130px]" />
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#1d1d1f]/5 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0066cc] sm:text-sm">
            Maintenance Process
          </p>

          <h2 className="mt-4 text-[40px] font-semibold leading-[0.92] tracking-[-0.055em] text-[#101010] sm:text-5xl md:text-6xl lg:text-7xl">
            Proactive support,
            <span className="block text-[#0066cc]">
              not random fixes.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-6 text-black/45 sm:text-base sm:leading-7">
            A structured maintenance system that keeps your website secure,
            fast, updated and reliable throughout the year.
          </p>
        </div>

        <div className="relative mt-12 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 md:grid-cols-5 md:gap-5 lg:mt-16">
          <div className="absolute left-[7%] right-[7%] top-8 hidden h-px bg-black/10 md:block" />

          {steps.map(([num, title, desc], index) => {
            const isLast = index === steps.length - 1;

            return (
              <article
                key={title}
                className={`group relative flex min-h-[220px] flex-col rounded-[1.5rem] border border-black/[0.07] bg-[#f5f5f7] p-4 text-left transition duration-300 hover:-translate-y-1 hover:border-[#0066cc]/35 hover:shadow-[0_18px_55px_rgba(0,0,0,.07)] sm:min-h-[230px] sm:p-5 md:min-h-0 md:border-0 md:bg-transparent md:p-0 md:text-center md:hover:translate-y-0 md:hover:shadow-none ${
                  isLast ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <div className="flex items-start justify-between md:block">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1d1d1f] text-[#0066cc] shadow-[0_12px_35px_rgba(0,0,0,.12)] sm:h-14 sm:w-14 md:mx-auto md:h-16 md:w-16 md:rounded-full">
                    <span className="text-sm font-semibold sm:text-base">
                      {num}
                    </span>
                  </div>

                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black/20 md:hidden">
                    Step
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold leading-tight tracking-[-0.035em] text-[#101010] sm:text-xl md:text-lg">
                  {title}
                </h3>

                <p className="mt-3 text-xs font-semibold leading-5 text-black/45 sm:text-sm sm:leading-6 md:mt-2">
                  {desc}
                </p>

                <div className="mt-auto pt-5 md:hidden">
                  <div className="h-1 w-full overflow-hidden rounded-full bg-black/[0.06]">
                    <div
                      className="h-full rounded-full bg-[#0066cc]"
                      style={{
                        width: `${((index + 1) / steps.length) * 100}%`,
                      }}
                    />
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