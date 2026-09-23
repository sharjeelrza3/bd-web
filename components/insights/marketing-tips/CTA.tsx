import { ArrowRight, Megaphone } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2.9rem] bg-[#1d1d1f] p-8 text-white md:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_.72fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
                Need a marketing strategy?
              </p>
              <h2 className="mt-5 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
                Turn better marketing decisions into real business growth.
              </h2>
            </div>

            <div className="grid gap-3">
              <a href="/contact" className="flex items-center justify-between rounded-full bg-[#0066cc] px-7 py-4 font-semibold text-[#000000]">
                Start Your Project
                <ArrowRight size={18} />
              </a>
              <a href="/services/social-media" className="flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 font-semibold">
                <Megaphone size={18} />
                Explore Marketing Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
