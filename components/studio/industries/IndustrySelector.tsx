"use client";
import { useState } from "react";
import {
  ArrowUpRight, BriefcaseBusiness, Building2, CheckCircle2,
  GraduationCap, HeartPulse, Home, Hotel, ShoppingBag, Store, UtensilsCrossed
} from "lucide-react";

const industries = [
  { id:"restaurant", label:"Restaurant", icon:UtensilsCrossed,
    problem:"Orders, stock, kitchen flow and customer experience often operate separately.",
    solutions:["Restaurant website","POS & kitchen system","Online ordering","Meta & Google Ads"],
    tech:["Next.js","PHP","MySQL","Stripe"] },
  { id:"healthcare", label:"Healthcare", icon:HeartPulse,
    problem:"Patient records, appointments, billing and pharmacy operations need clarity and reliability.",
    solutions:["Clinic website","HMS/OPD software","Appointment automation","Patient communication"],
    tech:["React","Node.js","MySQL","Cloud"] },
  { id:"real-estate", label:"Real Estate", icon:Home,
    problem:"Leads are expensive and often lost because follow-up systems are weak.",
    solutions:["Property website","Lead funnel","CRM automation","Paid campaigns"],
    tech:["Next.js","CRM","WhatsApp API","Analytics"] },
  { id:"education", label:"Education", icon:GraduationCap,
    problem:"Student communication, admissions and digital learning need one connected journey.",
    solutions:["Institute website","LMS","Admissions funnel","Student portal"],
    tech:["Next.js","Laravel","MySQL","Cloud"] },
  { id:"ecommerce", label:"Ecommerce", icon:ShoppingBag,
    problem:"Product discovery, checkout, retention and marketing must work together.",
    solutions:["Online store","Conversion optimization","Paid ads","Email automation"],
    tech:["Shopify","WooCommerce","Stripe","Meta"] },
  { id:"corporate", label:"Corporate", icon:Building2,
    problem:"Credibility, internal systems and reporting need a professional digital foundation.",
    solutions:["Corporate website","Custom software","Automation","SEO"],
    tech:["Next.js","Laravel","PostgreSQL","Cloud"] },
  { id:"retail", label:"Retail", icon:Store,
    problem:"Sales, stock, customers and multiple branches need connected management.",
    solutions:["Retail POS","Inventory system","Loyalty workflows","Performance dashboard"],
    tech:["React","PHP","MySQL","APIs"] },
  { id:"hospitality", label:"Hospitality", icon:Hotel,
    problem:"Bookings, guest communication and local visibility directly affect revenue.",
    solutions:["Booking website","Reservation system","Local SEO","Social media"],
    tech:["Next.js","Booking API","Analytics","CRM"] },
  { id:"professional", label:"Professional Services", icon:BriefcaseBusiness,
    problem:"Trust, lead generation and client onboarding depend on a clear digital journey.",
    solutions:["Authority website","Lead capture","CRM setup","Automation"],
    tech:["Next.js","HubSpot","Calendly","Analytics"] },
];

export default function IndustrySelector() {
  const [activeId, setActiveId] = useState("restaurant");
  const active = industries.find((item) => item.id === activeId) ?? industries[0];
  const ActiveIcon = active.icon;

  return (
    <section id="industry-selector" className="bg-white px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">Interactive Industry Selector</p>
            <h2 className="mt-4 text-5xl font-semibold leading-[0.88] tracking-[-0.065em] md:text-7xl">
              Select your industry. See the right digital direction.
            </h2>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-black/50">
              Different industries need different user journeys, systems and growth strategies.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {industries.map((industry) => {
                const Icon = industry.icon;
                const selected = industry.id === activeId;

                return (
                  <button
                    key={industry.id}
                    onClick={() => setActiveId(industry.id)}
                    className={`flex items-center gap-3 rounded-[1.4rem] border p-4 text-left transition ${
                      selected
                        ? "border-[#0066cc] bg-[#1d1d1f] text-white shadow-[0_18px_60px_rgba(16,35,31,.16)]"
                        : "border-black/10 bg-[#f5f5f7] hover:border-[#0066cc]/40"
                    }`}
                  >
                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                      selected ? "bg-[#0066cc] text-[#000000]" : "bg-white text-[#0066cc]"
                    }`}>
                      <Icon size={18} />
                    </span>
                    <span className="text-sm font-semibold">{industry.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-[2.6rem] border border-black/10 bg-[#f5f5f7] p-5 shadow-[0_30px_110px_rgba(0,0,0,.07)] md:p-8">
            <div className="rounded-[2rem] bg-[#1d1d1f] p-6 text-white">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0066cc]">Selected Industry</p>
                  <h3 className="mt-3 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">{active.label}</h3>
                </div>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0066cc] text-[#000000]">
                  <ActiveIcon size={24} />
                </span>
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">Common Challenge</p>
                <p className="mt-3 text-lg font-semibold leading-7 text-white/85">{active.problem}</p>
              </div>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div className="rounded-[1.8rem] border border-black/10 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0066cc]">Recommended Solutions</p>
                <div className="mt-5 space-y-3">
                  {active.solutions.map((solution) => (
                    <div key={solution} className="flex items-center gap-3">
                      <CheckCircle2 size={17} className="text-[#0066cc]" />
                      <span className="text-sm font-semibold text-black/60">{solution}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.8rem] border border-black/10 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0066cc]">Typical Stack</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {active.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-black/10 bg-[#f5f5f7] px-4 py-2 text-xs font-semibold text-black/55">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <a href="/contact" className="group mt-5 flex items-center justify-between rounded-full bg-[#0066cc] px-7 py-4 font-semibold text-[#000000]">
              Discuss a {active.label} Project
              <ArrowUpRight size={18} className="transition group-hover:rotate-45" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
