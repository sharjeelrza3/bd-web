"use client";

import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Boxes,
  Building2,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  Database,
  FileBarChart,
  Layers3,
  LockKeyhole,
  MessageCircle,
  MonitorCog,
  PackageCheck,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Workflow,
  Zap,
} from "lucide-react";

const heroCards = [
  {
    title: "POS Billing",
    label: "",
    image: "/images/services/softwares/restaurant-pos.png",
  },
  {
    title: "Inventory",
    label: "",
    image: "/images/services/softwares/stock.png",
  },
  {
    title: "Reports",
    label: "",
    image: "/images/services/softwares/reports.png",
  },
];

const problems = [
  {
    title: "Manual records",
    desc: "Sales, stock and expenses are scattered across notebooks or Excel sheets.",
    icon: ClipboardList,
  },
  {
    title: "No real-time stock",
    desc: "Owners do not know what is available, low, expired or overstocked.",
    icon: Boxes,
  },
  {
    title: "Weak reporting",
    desc: "Daily, weekly and monthly performance becomes hard to track clearly.",
    icon: FileBarChart,
  },
  {
    title: "Staff mistakes",
    desc: "Manual billing and operations increase errors, delays and confusion.",
    icon: UsersRound,
  },
];

const modules = [
  {
    title: "Fast POS Screen",
    desc: "Quick billing, discounts, taxes, receipts, returns and payment tracking.",
    icon: CreditCard,
  },
  {
    title: "Inventory Management",
    desc: "Stock in/out, low stock alerts, purchase records and product history.",
    icon: PackageCheck,
  },
  {
    title: "Admin Dashboard",
    desc: "Sales, profit, expenses, orders, staff activity and business overview.",
    icon: MonitorCog,
  },
  {
    title: "Reports & Analytics",
    desc: "Daily, weekly, monthly and custom date range reports with clear insights.",
    icon: BarChart3,
  },
  {
    title: "Customer / CRM",
    desc: "Manage customers, leads, order history, follow-ups and business relations.",
    icon: UsersRound,
  },
  {
    title: "Invoices & Receipts",
    desc: "Professional invoices, thermal receipts, printable records and billing logs.",
    icon: ReceiptText,
  },
  {
    title: "Role-Based Access",
    desc: "Admin, manager, cashier and staff portals with controlled permissions.",
    icon: LockKeyhole,
  },
  {
    title: "Secure Database",
    desc: "Clean, organized and scalable data structure for long-term operations.",
    icon: Database,
  },
];

const industries = [
  "Restaurants & Cafes",
  "Retail Shops",
  "Electronics Stores",
  "Clinics & Pharmacies",
  "Farmhouses",
  "Warehouses",
  "Service Businesses",
  "Custom Operations",
];

const workflow = [
  [
    "01",
    "Understand Operations",
    "We study your current workflow, users, records and pain points.",
  ],
  [
    "02",
    "Plan Modules",
    "We define screens, roles, reports, permissions and database structure.",
  ],
  [
    "03",
    "Design Dashboard",
    "We create a clean UI that your staff can use without confusion.",
  ],
  [
    "04",
    "Build System",
    "We develop the software with secure logic and scalable architecture.",
  ],
  [
    "05",
    "Testing & Training",
    "We test real scenarios and guide your team before launch.",
  ],
  [
    "06",
    "Support & Growth",
    "We keep improving the system as your business grows.",
  ],
];

const outcomes = [
  "Faster billing",
  "Less manual work",
  "Accurate stock",
  "Clear reporting",
  "Controlled access",
  "Better decisions",
];

const securityItems = [
  {
    label: "Role-based permissions",
    icon: ShieldCheck,
  },
  {
    label: "Clean database structure",
    icon: Database,
  },
  {
    label: "Custom workflow logic",
    icon: Workflow,
  },
  {
    label: "Scalable modules",
    icon: Layers3,
  },
];

const faqs = [
  [
    "Can you build software according to my exact workflow?",
    "Yes. We first understand your daily operations, roles, reports and business rules, then build the software around your workflow.",
  ],
  [
    "Can you build POS and inventory software?",
    "Yes. We can build POS billing, stock management, purchase records, expense tracking, reports and admin dashboards.",
  ],
  [
    "Will my staff be able to use it easily?",
    "Yes. We design simple screens, clear flows and role-based access so staff can use the system without confusion.",
  ],
  [
    "Can you add reports for sales, profit and stock?",
    "Yes. We can add daily, weekly, monthly and custom date range reports based on your business needs.",
  ],
];

export default function BusinessSoftwarePage() {
  return (
    <main className="bg-[#f5f5f7] text-[#101010]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-black/10 px-5 pb-20 pt-12">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-[-260px] top-[-120px] h-[760px] w-[760px] rounded-full bg-[#0066cc]/18 blur-[160px]" />
          <div className="absolute left-[-260px] bottom-[-260px] h-[620px] w-[620px] rounded-full bg-[#1d1d1f]/9 blur-[160px]" />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-black/45 shadow-sm">
            <Building2 size={14} className="text-[#0066cc]" />
            <span>/ Services / Business Software</span>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[0.88fr_1.12fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-[#e7fbff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0066cc]">
                <Sparkles size={14} />
                Custom Business Software
              </p>

              <h1 className="mt-6 max-w-5xl text-[56px] font-semibold leading-[0.88] tracking-[-0.075em] md:text-[88px] lg:text-[100px]">
                Software that runs your business{" "}
                <span className="text-[#0066cc]">smarter.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-black/58 md:text-xl md:leading-9">
                We build custom POS, CRM, inventory, reporting and admin systems
                that help businesses manage sales, staff, stock and operations
                from one clean dashboard.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#1d1d1f] px-7 py-4 font-semibold text-white shadow-[0_22px_70px_rgba(16,35,31,.18)] transition hover:-translate-y-1 hover:bg-[#0066cc] hover:text-[#000000]"
                >
                  Start Software Project
                  <ArrowRight
                    size={18}
                    className="-rotate-45 transition group-hover:rotate-0"
                  />
                </a>

                <a
                  href="#modules"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-4 font-semibold text-[#101010] shadow-sm transition hover:-translate-y-1 hover:border-[#0066cc]"
                >
                  Explore Modules
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold text-black/48">
                {[
                  "Custom Workflow",
                  "Admin Dashboard",
                  "Reports",
                  "Automation",
                ].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <CheckCircle2 size={17} className="text-[#0066cc]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative min-h-[570px]">
              <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066cc]/14 blur-[100px]" />

              <div className="relative mx-auto max-w-3xl rounded-[2.6rem] border border-black/10 bg-white p-4 shadow-[0_45px_140px_rgba(0,0,0,.16)]">
                <div className="rounded-[2rem] bg-[#1d1d1f] p-4">
                  <div className="mb-4 flex items-center justify-between rounded-[1.4rem] bg-white/8 px-4 py-3">
                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-white/25" />
                      <span className="h-3 w-3 rounded-full bg-white/25" />
                      <span className="h-3 w-3 rounded-full bg-[#0066cc]" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
                      Business OS
                    </span>
                  </div>

                  <div className="grid gap-4 md:grid-cols-[1.15fr_.85fr]">
                    <div className="rounded-[1.6rem] bg-white p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0066cc]">
                        Today Overview
                      </p>

                      <div className="mt-5 grid grid-cols-2 gap-3">
                        {[
                          ["Rs 84k", "Sales"],
                          ["128", "Orders"],
                          ["42", "Stock Alerts"],
                          ["18%", "Growth"],
                        ].map(([value, label]) => (
                          <div
                            key={label}
                            className="rounded-[1.2rem] bg-[#f5f5f7] p-4"
                          >
                            <p className="text-2xl font-semibold tracking-[-0.05em]">
                              {value}
                            </p>
                            <p className="mt-1 text-xs font-bold text-black/40">
                              {label}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 rounded-[1.4rem] bg-[#e7fbff] p-4">
                        <div className="flex items-center justify-between">
                          <p className="font-semibold">Monthly Performance</p>
                          <BarChart3 size={20} className="text-[#0066cc]" />
                        </div>

                        <div className="mt-5 flex h-24 items-end gap-2">
                          {[45, 70, 52, 88, 65, 95, 78, 100].map((h, i) => (
                            <span
                              key={i}
                              className="flex-1 rounded-t-full bg-[#0066cc]"
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4">
                      {heroCards.map((card) => (
                        <div
                          key={card.title}
                          className="relative min-h-[135px] overflow-hidden rounded-[1.6rem] bg-black"
                        >
                          <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            className="object-cover opacity-75"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0066cc]">
                              {card.label}
                            </p>
                            <h3 className="mt-1 text-xl font-semibold text-white">
                              {card.title}
                            </h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 left-5 rounded-[1.5rem] border border-black/10 bg-white px-5 py-4 shadow-[0_20px_70px_rgba(0,0,0,.12)]">
                <p className="text-2xl font-semibold text-[#1d1d1f]">Live</p>
                <p className="text-xs font-bold text-black/40">
                  Reports & Tracking
                </p>
              </div>

              <div className="absolute right-0 top-5 rounded-[1.5rem] border border-black/10 bg-white px-5 py-4 shadow-[0_20px_70px_rgba(0,0,0,.12)]">
                <p className="text-2xl">⚡</p>
                <p className="text-sm font-semibold">Fast Workflow</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="bg-white px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
                Operational Problems
              </p>

              <h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-6xl">
                Most businesses waste time.
Smart software saves it.
              </h2>
            </div>

            <p className="max-w-xl text-lg font-semibold leading-8 text-black/50">
              Custom software connects your daily operations, removes manual
              work, improves accuracy and gives owners complete visibility.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {problems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-black/10 bg-[#f5f5f7] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_80px_rgba(0,0,0,.08)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1d1d1f] text-[#0066cc]">
                    <Icon size={22} />
                  </span>

                  <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-semibold leading-6 text-black/50">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section id="modules" className="bg-[#f5f5f7] px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
                Software Modules
              </p>

              <h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">
                Everything you need to manage operations from one dashboard.
              </h2>
            </div>

            <p className="max-w-md text-lg font-semibold leading-8 text-black/50">
              Modules are customized according to your business model, staff
              roles, workflow and reporting requirements.
            </p>
          </div>

          <div className="rounded-[2.5rem] border border-black/10 bg-white p-5 shadow-[0_30px_110px_rgba(0,0,0,.06)]">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {modules.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[1.8rem] p-5 transition hover:bg-[#e7fbff]"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7fbff] text-[#0066cc]">
                      <Icon size={21} />
                    </span>

                    <h3 className="mt-5 text-lg font-semibold tracking-[-0.03em]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm font-semibold leading-6 text-black/48">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-white px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2.4rem] bg-[#1d1d1f] p-8 text-white md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Industries
            </p>

            <h2 className="mt-5 text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">
              Built around your business, not a fixed template.
            </h2>

            <p className="mt-6 text-lg font-semibold leading-8 text-white/55">
              Whether you run a shop, restaurant, clinic or service business, we
              build the exact workflow your team needs.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {industries.map((item) => (
              <div
                key={item}
                className="rounded-[1.7rem] border border-black/10 bg-[#f5f5f7] p-6 font-semibold text-black/65 transition hover:-translate-y-1 hover:border-[#0066cc]/40 hover:bg-white"
              >
                <BadgeCheck size={20} className="mb-5 text-[#0066cc]" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl rounded-[2rem] bg-[#f5f5f7] p-5">
          <div className="grid gap-3 md:grid-cols-6">
            {outcomes.map((item) => (
              <div
                key={item}
                className="rounded-[1.3rem] bg-white p-4 text-center text-sm font-semibold text-black/45"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="bg-[#f5f5f7] px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Development Workflow
            </p>

            <h2 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">
              From business logic to working software.
            </h2>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {workflow.map(([num, title, desc]) => (
              <div
                key={title}
                className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_18px_70px_rgba(0,0,0,.05)]"
              >
                <p className="text-5xl font-semibold tracking-[-0.08em] text-[#0066cc]/50">
                  {num}
                </p>

                <h3 className="mt-10 text-2xl font-semibold tracking-[-0.04em]">
                  {title}
                </h3>

                <p className="mt-3 text-sm font-semibold leading-6 text-black/50">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section className="bg-white px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Secure & Scalable
            </p>

            <h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">
              Your software should grow with your business.
            </h2>

            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-black/50">
              We focus on clean architecture, secure access, organized database,
              backups and future scalability from the beginning.
            </p>
          </div>

          <div className="rounded-[2.4rem] border border-black/10 bg-[#f5f5f7] p-6">
            {securityItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-4 border-b border-black/10 py-5 last:border-b-0"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7fbff] text-[#0066cc]">
                    <Icon size={22} />
                  </span>

                  <p className="text-lg font-semibold">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f5f5f7] px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
            FAQs
          </p>

          <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">
            Business software questions, answered.
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map(([q, a]) => (
              <div
                key={q}
                className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_18px_70px_rgba(0,0,0,.05)]"
              >
                <h3 className="text-xl font-semibold tracking-[-0.03em]">{q}</h3>
                <p className="mt-4 text-sm font-semibold leading-6 text-black/50">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-[#f5f5f7] px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#1d1d1f] p-8 text-white shadow-[0_30px_120px_rgba(16,35,31,.2)] md:p-14">
            <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#0066cc]/22 blur-[140px]" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_.75fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
                  Ready to automate?
                </p>

                <h2 className="mt-5 max-w-3xl text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">
                  Let’s build software that makes your business easier to run.
                </h2>
              </div>

              <div className="grid gap-3">
                <a
                  href="/contact"
                  className="group flex items-center justify-between rounded-full bg-[#0066cc] px-7 py-4 font-semibold text-[#000000]"
                >
                  Start Software Project
                  <ArrowRight
                    size={18}
                    className="-rotate-45 transition group-hover:rotate-0"
                  />
                </a>

                <a
                  href="https://wa.me/"
                  className="flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-[#000000]"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}