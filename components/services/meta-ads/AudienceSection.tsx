"use client";

import { Repeat2, Target, UsersRound, Workflow } from "lucide-react";

const audiences = [
  { title: "Cold Audiences", desc: "Interest, behavior and demographic targeting.", icon: Target },
  { title: "Warm Audiences", desc: "People who watched, engaged or interacted.", icon: UsersRound },
  { title: "Retargeting", desc: "Website visitors, cart abandoners and lead form viewers.", icon: Repeat2 },
  { title: "Lookalikes", desc: "New people similar to existing customers and leads.", icon: Workflow },
];

export default function AudienceSection() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Audience Strategy
            </p>
            <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
              The right message only works when it reaches the right audience.
            </h2>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-black/50">
              We structure audience layers around intent, behavior, engagement and
              customer similarity.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {audiences.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_18px_70px_rgba(0,0,0,.05)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7fbff] text-[#0066cc]">
                    <Icon size={21} />
                  </span>
                  <h3 className="mt-7 text-2xl font-semibold tracking-[-0.04em]">{item.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-black/50">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
