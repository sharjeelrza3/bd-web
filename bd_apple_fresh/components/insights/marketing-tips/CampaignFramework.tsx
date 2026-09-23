import { BarChart3, Crosshair, Lightbulb, Megaphone, Repeat2, UsersRound } from "lucide-react";

const steps = [
  ["01", "Audience", UsersRound],
  ["02", "Offer", Lightbulb],
  ["03", "Message", Megaphone],
  ["04", "Targeting", Crosshair],
  ["05", "Measurement", BarChart3],
  ["06", "Optimization", Repeat2],
];

export default function CampaignFramework() {
  return (
    <section className="bg-[#1d1d1f] px-5 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
            Campaign Framework
          </p>
          <h2 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">
            Strong campaigns are built in the right order.
          </h2>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {steps.map(([number, title, Icon]) => {
            const SafeIcon = Icon as typeof BarChart3;
            return (
              <article key={number as string} className="text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0066cc] text-[#000000]">
                  <SafeIcon size={22} />
                </span>
                <p className="mt-5 text-xs font-semibold text-[#0066cc]">{number as string}</p>
                <h3 className="mt-2 text-xl font-semibold">{title as string}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
