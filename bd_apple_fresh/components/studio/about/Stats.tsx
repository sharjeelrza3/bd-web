"use client";
import { Award, BriefcaseBusiness, Layers3, TrendingUp, UsersRound } from "lucide-react";

const stats = [
  { value: "120+", label: "Projects Delivered", icon: BriefcaseBusiness },
  { value: "40+", label: "Businesses Served", icon: UsersRound },
  { value: "8+", label: "Core Services", icon: Layers3 },
  { value: "98%", label: "Client Satisfaction", icon: Award },
  { value: "6+", label: "Years Experience", icon: TrendingUp },
];

export default function Stats() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_16px_60px_rgba(0,0,0,.045)]">
                <Icon size={22} className="text-[#0066cc]" />
                <p className="mt-8 text-5xl font-semibold tracking-[-0.07em]">{item.value}</p>
                <p className="mt-2 text-sm font-bold text-black/40">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
