import {
  ArrowDownRight,
  CheckCircle2,
  Clock3,
  Mail,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const quickServices = [
  "Website",
  "Business Software",
  "AI Automation",
  "SEO",
  "Branding",
  "Marketing",
];

export default function Hero({
  onSelectService,
}: {
  onSelectService: (service: string) => void;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#000000] px-5 pb-28 pt-14 text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-250px] top-[-220px] h-[760px] w-[760px] rounded-full bg-[#0066cc]/18 blur-[170px]" />
        <div className="absolute bottom-[-280px] left-[-240px] h-[620px] w-[620px] rounded-full bg-white/[0.04] blur-[160px]" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0066cc]">
          <Sparkles size={14} />
          Start a Project
        </p>

        <div className="mt-10 grid gap-14 lg:grid-cols-[1fr_.7fr] lg:items-end">
          <div>
            <h1 className="max-w-5xl text-[58px] font-semibold leading-[0.84] tracking-[-0.085em] md:text-[96px] lg:text-[116px]">
              Let&apos;s build something
              <span className="block text-[#0066cc]">your business can grow with.</span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-white/55 md:text-xl">
              Tell us what you need, what stage you&apos;re at and where you want to go.
              We&apos;ll map the right digital solution.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {quickServices.map((service) => (
                <button
                  key={service}
                  onClick={() => {
                    onSelectService(service);
                    document
                      .getElementById("project-form")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white/60 transition hover:border-[#0066cc]/40 hover:text-white"
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {[
              [Clock3, "Average response", "Within 24 hours"],
              [MessageCircle, "WhatsApp", "Fast project discussion"],
              [Mail, "Email", "hello@beingdigitals.com"],
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

            <div className="rounded-[1.7rem] bg-[#0066cc] p-5 text-[#000000]">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} />
                <p className="font-semibold">Currently accepting new projects</p>
              </div>
            </div>

            <a
              href="#project-form"
              className="flex items-center justify-between rounded-full bg-white px-6 py-4 font-semibold text-[#000000]"
            >
              Start Project Brief
              <ArrowDownRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
