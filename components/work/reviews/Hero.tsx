import { CheckCircle2, Quote, Sparkles, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#000000] px-5 pb-28 pt-14 text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-250px] top-[-220px] h-[760px] w-[760px] rounded-full bg-[#0066cc]/18 blur-[170px]" />
        <div className="absolute bottom-[-280px] left-[-250px] h-[620px] w-[620px] rounded-full bg-white/[0.04] blur-[160px]" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0066cc]">
          <Sparkles size={14} />
          Client Reviews
        </p>

        <div className="mt-10 grid gap-14 lg:grid-cols-[1fr_.72fr] lg:items-end">
          <div>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={20} fill="currentColor" className="text-[#0066cc]" />
              ))}
            </div>

            <h1 className="mt-6 max-w-5xl text-[58px] font-semibold leading-[0.84] tracking-[-0.085em] md:text-[96px] lg:text-[116px]">
              Trusted by businesses
              <span className="block text-[#0066cc]">that expect results.</span>
            </h1>
          </div>

          <div>
            <p className="text-lg font-semibold leading-8 text-white/55 md:text-xl">
              Real feedback from businesses that trusted Being Digitals with their
              websites, software, branding and growth.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              {["120+ Projects", "40+ Businesses", "98% Satisfaction", "6+ Years"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-[1.2rem] border border-white/10 bg-white/[0.05] p-4"
                >
                  <CheckCircle2 size={17} className="text-[#0066cc]" />
                  <span className="text-sm font-semibold text-white/65">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {[
            ["Taste of Karachi", "Premium website experience"],
            ["Nazar Medical", "Operational software"],
            ["The Pest Zone", "Website and lead growth"],
          ].map(([client, result], index) => (
            <article
              key={client}
              className={`rounded-[2rem] border border-white/10 p-6 ${
                index === 1 ? "bg-[#0066cc] text-[#000000]" : "bg-white/[0.05]"
              }`}
            >
              <Quote size={22} className={index === 1 ? "text-[#000000]" : "text-[#0066cc]"} />
              <p className="mt-6 text-xl font-semibold">{client}</p>
              <p className={`mt-2 text-sm font-semibold ${index === 1 ? "text-black/55" : "text-white/40"}`}>
                {result}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
