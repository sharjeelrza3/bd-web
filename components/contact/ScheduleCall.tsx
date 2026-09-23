import { CalendarDays, CheckCircle2, Clock3 } from "lucide-react";

export default function ScheduleCall() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-[2.8rem] border border-black/10 bg-white lg:grid-cols-[0.8fr_1.2fr]">
          <div className="bg-[#0066cc] p-8 text-[#000000] md:p-12">
            <CalendarDays size={34} />
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.22em]">
              Strategy Call
            </p>
            <h2 className="mt-5 text-5xl font-semibold leading-[0.92] tracking-[-0.06em]">
              Prefer to talk through the project?
            </h2>
            <p className="mt-6 text-base font-semibold leading-7 text-black/55">
              Book a focused call to discuss goals, scope, timeline and the best
              technical direction.
            </p>

            <div className="mt-8 space-y-3">
              {["30-minute discussion", "No-obligation advice", "Clear next steps"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} />
                    <span className="font-semibold text-black/65">{item}</span>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="flex items-center justify-center p-8 md:p-12">
            <div className="w-full rounded-[2rem] border border-black/10 bg-[#f5f5f7] p-8">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1d1d1f] text-[#0066cc]">
                <Clock3 size={23} />
              </span>
              <h3 className="mt-8 text-3xl font-semibold tracking-[-0.04em]">
                Book a strategy call
              </h3>
              <p className="mt-4 text-sm font-semibold leading-6 text-black/45">
                Replace the link below with your Calendly, Google Calendar booking
                page or preferred scheduling tool.
              </p>
              <a
                href="https://calendly.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-8 flex items-center justify-center rounded-full bg-[#1d1d1f] px-6 py-4 font-semibold text-white"
              >
                View Available Times
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
