import { ArrowRight, CalendarDays, MessageCircle } from "lucide-react";

export default function PremiumCTA() {
  return (
    <section id="contact" className="bg-[#f5f5f7] px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[3rem] bg-[#1d1d1f] px-7 py-20 text-white md:px-16 md:py-24">
          <div className="pointer-events-none absolute left-[-180px] top-[-180px] h-[460px] w-[460px] rounded-full bg-[#0066cc]/20 blur-[120px]" />
          <div className="pointer-events-none absolute bottom-[-220px] right-[-160px] h-[520px] w-[520px] rounded-full bg-white/10 blur-[140px]" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_.55fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
                Ready when you are
              </p>

              <h2 className="mt-6 max-w-5xl text-5xl font-semibold leading-none tracking-[-0.06em] md:text-8xl">
                Ready to build something exceptional?
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
                Tell us your goal. We’ll help you choose the right website, SEO, ads, branding or software plan — and turn it into a clear execution roadmap.
              </p>
            </div>

            <div className="rounded-[2.2rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur">
              <a
                href="/contact"
                className="group flex items-center justify-between rounded-[1.6rem] bg-[#0066cc] px-6 py-5 font-semibold text-[#000000] transition hover:scale-[1.02]"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle size={20} />
                  Start Project
                </span>
                <ArrowRight className="-rotate-45 transition group-hover:rotate-0" />
              </a>

              <a
                href="/contact?type=strategy-call"
                className="mt-3 flex items-center justify-between rounded-[1.6rem] border border-white/15 px-6 py-5 font-semibold text-white transition hover:bg-white hover:text-[#000000]"
              >
                <span className="flex items-center gap-3">
                  <CalendarDays size={20} />
                  Book Strategy Call
                </span>
                <ArrowRight className="-rotate-45" />
              </a>

              <p className="mt-5 text-sm font-semibold leading-6 text-white/45">
                Strategy calls can be connected later with Calendly or Google Calendar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
