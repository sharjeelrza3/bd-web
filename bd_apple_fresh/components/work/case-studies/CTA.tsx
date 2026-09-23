import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.9rem] bg-[#1d1d1f] p-8 text-white md:p-14">
          <div className="pointer-events-none absolute right-[-180px] top-[-190px] h-[540px] w-[540px] rounded-full bg-[#0066cc]/20 blur-[140px]" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_.72fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
                Your project could be next
              </p>
              <h2 className="mt-5 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
                Let&apos;s turn your challenge into a stronger digital outcome.
              </h2>
            </div>

            <div className="grid gap-3">
              <a
                href="/contact"
                className="group flex items-center justify-between rounded-full bg-[#0066cc] px-7 py-4 font-semibold text-[#000000]"
              >
                Start Your Project
                <ArrowRight
                  size={18}
                  className="-rotate-45 transition group-hover:rotate-0"
                />
              </a>

              <a
                href="https://wa.me/"
                className="flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 font-semibold"
              >
                <MessageCircle size={18} />
                Discuss Your Idea
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
