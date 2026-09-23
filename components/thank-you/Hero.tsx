import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#000000] px-5 pb-28 pt-14 text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-250px] top-[-220px] h-[760px] w-[760px] rounded-full bg-[#0066cc]/18 blur-[170px]" />
        <div className="absolute bottom-[-300px] left-[-250px] h-[620px] w-[620px] rounded-full bg-white/[0.04] blur-[160px]" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0066cc]">
          <Sparkles size={14} />
          Project Brief Received
        </p>

        <div className="mt-10 grid gap-14 lg:grid-cols-[1fr_.72fr] lg:items-end">
          <div>
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#0066cc] text-[#000000] shadow-[0_24px_80px_rgba(16,191,227,.2)]">
              <CheckCircle2 size={36} />
            </span>

            <h1 className="mt-8 max-w-5xl text-[58px] font-semibold leading-[0.84] tracking-[-0.085em] md:text-[96px] lg:text-[116px]">
              Thank you.
              <span className="block text-[#0066cc]">We&apos;ve got your brief.</span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-white/55 md:text-xl">
              Our team will review your project details and contact you with the
              right next step.
            </p>
          </div>

          <div className="space-y-4">
            {[
              [Clock3, "Average response", "Within 24 hours"],
              [Mail, "Confirmation", "Check your email inbox"],
              [MessageCircle, "Need faster help?", "Message us on WhatsApp"],
            ].map(([Icon, label, value]) => {
              const SafeIcon = Icon as typeof Clock3;

              return (
                <article
                  key={label as string}
                  className="rounded-[1.7rem] border border-white/10 bg-white/[0.05] p-5"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0066cc] text-[#000000]">
                      <SafeIcon size={20} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/30">
                        {label as string}
                      </p>
                      <p className="mt-1 font-semibold">{value as string}</p>
                    </div>
                  </div>
                </article>
              );
            })}

            <div className="grid gap-3 sm:grid-cols-2">
              <Link
                href="/portfolio"
                className="flex items-center justify-between rounded-full bg-[#0066cc] px-6 py-4 font-semibold text-[#000000]"
              >
                View Our Work
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/"
                className="flex items-center justify-center rounded-full border border-white/15 px-6 py-4 font-semibold"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
