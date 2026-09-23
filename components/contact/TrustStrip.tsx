import { Award, BriefcaseBusiness, Clock3, UsersRound } from "lucide-react";

const stats = [
  ["120+", "Projects Delivered", BriefcaseBusiness],
  ["40+", "Businesses Served", UsersRound],
  ["98%", "Client Satisfaction", Award],
  ["24h", "Average Response", Clock3],
];

export default function TrustStrip() {
  return (
    <section className="bg-[#1d1d1f] px-5 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([value, label, Icon]) => {
          const SafeIcon = Icon as typeof Award;
          return (
            <article
              key={label as string}
              className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7"
            >
              <SafeIcon size={22} className="text-[#0066cc]" />
              <p className="mt-10 text-5xl font-semibold tracking-[-0.07em]">
                {value as string}
              </p>
              <p className="mt-2 text-sm font-bold text-white/40">
                {label as string}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
