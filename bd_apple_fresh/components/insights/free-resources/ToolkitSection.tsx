import { BriefcaseBusiness, CheckCircle2, Megaphone, Palette, Search, MonitorSmartphone } from "lucide-react";

const items = [
  ["SEO Toolkit", Search],
  ["Website Toolkit", MonitorSmartphone],
  ["Brand Toolkit", Palette],
  ["Marketing Toolkit", Megaphone],
  ["Business Toolkit", BriefcaseBusiness],
  ["Launch Toolkit", CheckCircle2],
];

export default function ToolkitSection() {
  return (
    <section className="bg-[#1d1d1f] px-5 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">Business Toolkits</p>
          <h2 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">
            Resources organized around real business needs.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map(([title, Icon]) => {
            const SafeIcon = Icon as typeof Search;
            return (
              <article key={title as string} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0066cc] text-[#000000]">
                  <SafeIcon size={21} />
                </span>
                <h3 className="mt-8 text-2xl font-semibold">{title as string}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
