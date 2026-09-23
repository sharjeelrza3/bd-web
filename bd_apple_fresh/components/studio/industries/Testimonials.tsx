"use client";
import { Quote, Star } from "lucide-react";

const testimonials = [
  { industry:"Restaurant", quote:"Being Digitals understood both our customer experience and the daily operational challenges behind it.", name:"Restaurant Business Owner" },
  { industry:"Healthcare", quote:"The system was planned around how our clinic actually works, not around a generic software template.", name:"Clinic Management" },
  { industry:"Retail", quote:"We now have a clearer view of sales, stock and daily performance across the business.", name:"Retail Business Owner" },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">Industry Testimonials</p>
          <h2 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">
            Clients value solutions that fit their reality.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.industry} className="rounded-[2.2rem] border border-black/10 bg-white p-7 shadow-[0_18px_70px_rgba(0,0,0,.05)]">
              <div className="flex items-center justify-between">
                <Quote size={24} className="text-[#0066cc]" />
                <div className="flex gap-1">
                  {Array.from({length:5}).map((_,index) => (
                    <Star key={index} size={14} fill="currentColor" className="text-[#0066cc]" />
                  ))}
                </div>
              </div>
              <p className="mt-7 text-xl font-semibold leading-8 tracking-[-0.03em]">“{item.quote}”</p>
              <div className="mt-8 border-t border-black/10 pt-5">
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-[#0066cc]">{item.industry}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
