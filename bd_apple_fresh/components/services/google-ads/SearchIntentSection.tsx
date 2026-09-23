"use client";

import { BadgeDollarSign, Clock3, Search, Target, UsersRound, Zap } from "lucide-react";

const items = [
  { title: "High buying intent", desc: "Reach people actively searching for your service or product.", icon: Search },
  { title: "Immediate visibility", desc: "Appear at the top of search results without waiting months.", icon: Zap },
  { title: "Precise targeting", desc: "Control keywords, locations, devices, schedules and audiences.", icon: Target },
  { title: "Budget control", desc: "Set daily budgets and optimize spend around profitable actions.", icon: BadgeDollarSign },
  { title: "Measurable results", desc: "Track calls, forms, sales, bookings and return on ad spend.", icon: UsersRound },
  { title: "Flexible scaling", desc: "Increase budget only when campaigns prove they can perform.", icon: Clock3 },
];

export default function SearchIntentSection() {
  return (
    <section className="bg-white px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Why Google Ads
            </p>
            <h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">
              Capture demand that already exists.
            </h2>
          </div>

          <p className="max-w-xl text-lg font-semibold leading-8 text-black/50">
            Google Ads connects your business with people already searching for a
            solution, making it one of the strongest channels for high-intent leads.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-[2rem] border border-black/10 bg-[#f5f5f7] p-6 transition hover:-translate-y-1 hover:border-[#0066cc]/35 hover:bg-white hover:shadow-[0_20px_80px_rgba(0,0,0,.07)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1d1d1f] text-[#0066cc]">
                  <Icon size={22} />
                </span>
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em]">{item.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-black/50">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
