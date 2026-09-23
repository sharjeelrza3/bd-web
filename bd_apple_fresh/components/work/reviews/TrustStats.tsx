import { Award, BriefcaseBusiness, Star, UsersRound } from "lucide-react";

const stats = [
  { value: "120+", label: "Projects Delivered", icon: BriefcaseBusiness },
  { value: "40+", label: "Businesses Served", icon: UsersRound },
  { value: "98%", label: "Client Satisfaction", icon: Award },
  { value: "4.9/5", label: "Average Rating", icon: Star },
];

export default function TrustStats() {
  return (
    <section className="bg-white px-5 py-24">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.label}
              className="rounded-[2rem] border border-black/10 bg-[#f5f5f7] p-7"
            >
              <Icon size={22} className="text-[#0066cc]" />
              <p className="mt-10 text-5xl font-semibold tracking-[-0.07em]">{item.value}</p>
              <p className="mt-2 text-sm font-bold text-black/40">{item.label}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
