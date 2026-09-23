"use client";
import { BarChart3, Braces, Compass, Rocket, Search, UsersRound } from "lucide-react";

const steps = [
  ["01","Understand","Business model, customers and operations.",UsersRound],
  ["02","Research","Market, competitors and user expectations.",Search],
  ["03","Strategize","Choose the right solution and priorities.",Compass],
  ["04","Build","Design and develop the digital system.",Braces],
  ["05","Launch","Deploy, test and prepare the market.",Rocket],
  ["06","Scale","Optimize growth and improve performance.",BarChart3],
];

export default function Workflow() {
  return (
    <section className="bg-[#1d1d1f] px-5 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">Industry Workflow</p>
          <h2 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">
            We learn the industry before building the solution.
          </h2>
        </div>

        <div className="relative mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          <div className="absolute left-[8%] right-[8%] top-8 hidden h-px bg-white/10 lg:block" />
          {steps.map(([number,title,desc,Icon]) => {
            const SafeIcon = Icon as typeof Search;
            return (
              <div key={number as string} className="relative text-center">
                <span className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0066cc] text-[#000000] shadow-[0_12px_35px_rgba(16,191,227,.2)]">
                  <SafeIcon size={22} />
                </span>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#0066cc]">{number as string}</p>
                <h3 className="mt-2 text-xl font-semibold">{title as string}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-white/40">{desc as string}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
