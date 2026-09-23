"use client";
import {
  ArrowUpRight, BriefcaseBusiness, Building2, Car, Factory, GraduationCap,
  HeartPulse, Home, Hotel, Landmark, Scale, ShoppingBag, Store, Truck,
  UtensilsCrossed, WandSparkles
} from "lucide-react";

const industries = [
  ["Restaurants","Websites, POS, ordering and growth systems.",UtensilsCrossed],
  ["Healthcare","Clinic systems, appointments and patient journeys.",HeartPulse],
  ["Real Estate","Property websites, lead funnels and CRM automation.",Home],
  ["Education","Institute websites, LMS and admissions systems.",GraduationCap],
  ["Ecommerce","Stores, conversion systems and retention workflows.",ShoppingBag],
  ["Retail","POS, inventory, loyalty and multi-branch reporting.",Store],
  ["Manufacturing","Operational systems, reporting and B2B websites.",Factory],
  ["Logistics","Tracking, booking and customer communication.",Truck],
  ["Automotive","Dealership websites, inventory and lead systems.",Car],
  ["Hospitality","Bookings, guest experience and local visibility.",Hotel],
  ["Legal","Authority websites, consultations and onboarding.",Scale],
  ["Finance","Professional platforms, secure forms and reporting.",Landmark],
  ["Corporate","Credibility, internal systems and digital operations.",Building2],
  ["Professional Services","Lead generation, authority and automation.",BriefcaseBusiness],
  ["Beauty & Fashion","Branding, ecommerce and social growth.",WandSparkles],
];

export default function IndustriesGrid() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">Industries We Serve</p>
            <h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Experience across different business models.
            </h2>
          </div>
          <p className="max-w-xl text-lg font-semibold leading-8 text-black/50">
            Each solution is shaped around the customer journey, operations and revenue model of the industry.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.map(([title, desc, Icon], index) => {
            const dark = index === 0 || index === 7 || index === 12;
            const SafeIcon = Icon as typeof Store;
            return (
              <article key={title as string} className={`group rounded-[2rem] p-6 transition hover:-translate-y-1 ${
                dark
                  ? "bg-[#1d1d1f] text-white shadow-[0_25px_90px_rgba(16,35,31,.16)]"
                  : "border border-black/10 bg-white hover:border-[#0066cc]/35 hover:shadow-[0_20px_80px_rgba(0,0,0,.07)]"
              }`}>
                <div className="flex items-start justify-between gap-4">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                    dark ? "bg-[#0066cc] text-[#000000]" : "bg-[#e7fbff] text-[#0066cc]"
                  }`}>
                    <SafeIcon size={23} />
                  </span>
                  <ArrowUpRight size={19} className={dark ? "text-white/30" : "text-black/20"} />
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em]">{title as string}</h3>
                <p className={`mt-3 text-sm font-semibold leading-6 ${dark ? "text-white/45" : "text-black/50"}`}>
                  {desc as string}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
