"use client";

import {
  ArrowRight,
  Bot,
  CheckCircle2,
  CircleDot,
  Database,
  FileText,
  MessageSquareText,
  Play,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

import {
  FaGoogle,
  FaShopify,
  FaSlack,
  FaWhatsapp,
  FaWordpress,
} from "react-icons/fa6";

import {
  SiGooglecalendar,
  SiGooglesheets,
  SiHubspot,
  SiNotion,
  // SiOpenai,
  SiStripe,
} from "react-icons/si";

const orbitApps = [
  { name: "WhatsApp", icon: FaWhatsapp, angle: 0 },
  { name: "Gmail", icon: FaGoogle, angle: 36 },
  { name: "Sheets", icon: SiGooglesheets, angle: 72 },
  { name: "Slack", icon: FaSlack, angle: 108 },
  { name: "HubSpot", icon: SiHubspot, angle: 144 },
  { name: "Shopify", icon: FaShopify, angle: 180 },
  { name: "Calendar", icon: SiGooglecalendar, angle: 216 },
  { name: "Notion", icon: SiNotion, angle: 252 },
  // { name: "OpenAI", icon: SiOpenai, angle: 288 },
  { name: "Stripe", icon: SiStripe, angle: 324 },
];

const flowSteps = [
  {
    title: "Lead captured",
    detail: "Website form, ad or WhatsApp",
    icon: MessageSquareText,
  },
  {
    title: "AI understands",
    detail: "Intent, budget and urgency",
    icon: Bot,
  },
  {
    title: "CRM updated",
    detail: "Contact, stage and owner assigned",
    icon: Database,
  },
  {
    title: "Follow-up sent",
    detail: "Personalized WhatsApp and email",
    icon: FileText,
  },
  {
    title: "Sales team alerted",
    detail: "Priority notification delivered",
    icon: Zap,
  },
];

const apps = [
  { name: "WhatsApp", icon: FaWhatsapp },
  { name: "Gmail", icon: FaGoogle },
  // { name: "OpenAI", icon: SiOpenai },
  { name: "Slack", icon: FaSlack },
  { name: "HubSpot", icon: SiHubspot },
  { name: "Stripe", icon: SiStripe },
  { name: "Shopify", icon: FaShopify },
  { name: "Notion", icon: SiNotion },
  { name: "Calendar", icon: SiGooglecalendar },
  { name: "Sheets", icon: SiGooglesheets },
  { name: "WordPress", icon: FaWordpress },
];

export default function IntegrationsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#000000] px-5 py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[38%] h-[780px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066cc]/12 blur-[170px]" />
        <div className="absolute -left-48 bottom-[-220px] h-[560px] w-[560px] rounded-full bg-white/[0.04] blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.45)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#0066cc]/20 bg-[#0066cc]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0066cc]">
            <Sparkles size={14} />
            Connected AI Ecosystem
          </p>

          <h2 className="mt-6 text-5xl font-semibold leading-[0.88] tracking-[-0.065em] md:text-7xl lg:text-8xl">
            Every tool connected to one{" "}
            <span className="text-[#0066cc]">intelligent core.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/50">
            Messaging, CRM, payments, scheduling, ecommerce and AI work together
            as one automated business system.
          </p>
        </div>

        {/* Orbit ecosystem */}
        <div className="relative mx-auto mt-16 h-[640px] max-w-[920px]">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 md:h-[610px] md:w-[610px]" />
          <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0066cc]/20 md:h-[430px] md:w-[430px]" />

          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 920 640"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="460" cy="320" r="210" stroke="rgba(16,191,227,.16)" />
            <circle cx="460" cy="320" r="285" stroke="rgba(255,255,255,.08)" />
            <path
              d="M460 320 C560 250 640 210 740 160"
              stroke="url(#line)"
              strokeWidth="2"
              strokeDasharray="8 12"
              className="automation-path"
            />
            <path
              d="M460 320 C350 250 270 205 175 150"
              stroke="url(#line)"
              strokeWidth="2"
              strokeDasharray="8 12"
              className="automation-path automation-path-delay"
            />
            <path
              d="M460 320 C555 400 650 445 760 500"
              stroke="url(#line)"
              strokeWidth="2"
              strokeDasharray="8 12"
              className="automation-path automation-path-delay-2"
            />
            <defs>
              <linearGradient id="line" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#0066cc" />
                <stop offset="1" stopColor="rgba(16,191,227,0)" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute left-1/2 top-1/2 z-20 flex h-48 w-48 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#0066cc]/30 bg-[#0d201b] text-center shadow-[0_0_100px_rgba(16,191,227,.24)] md:h-64 md:w-64">
            <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0066cc] text-[#000000] shadow-[0_18px_55px_rgba(16,191,227,.28)]">
              <Bot size={29} />
              <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full border-[3px] border-[#0d201b] bg-emerald-400" />
            </span>

            <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
              Being Digitals
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.05em] md:text-3xl">
              AI Agent Core
            </h3>
            <p className="mt-2 text-xs font-semibold text-white/40">
              Online · Processing
            </p>
          </div>

          <div className="absolute inset-0 hidden animate-[orbitRotate_38s_linear_infinite] md:block">
            {orbitApps.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `rotate(${item.angle}deg) translateX(305px)`,
                  }}
                >
                  <div
                    className="flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[1.7rem] border border-white/10 bg-white/[0.07] shadow-[0_22px_70px_rgba(0,0,0,.28)] backdrop-blur-xl"
                    style={{
                      transform: `rotate(-${item.angle}deg)`,
                    }}
                  >
                    <div className="animate-[orbitCounterRotate_38s_linear_infinite]">
                      <Icon className="text-2xl text-[#0066cc]" />
                    </div>
                    <p className="mt-3 text-[11px] font-semibold text-white/75">
                      {item.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 gap-3 md:hidden">
            {orbitApps.slice(0, 6).map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                >
                  <Icon className="text-xl text-[#0066cc]" />
                  <span className="text-sm font-semibold">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live flow */}
        <div className="mt-16 rounded-[2.6rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur md:p-8">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0066cc]">
                Live Automation Flow
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.045em] md:text-5xl">
                One trigger. Multiple intelligent actions.
              </h3>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-300">
              <CircleDot size={14} />
              Running now
            </div>
          </div>

          <div className="mt-8 overflow-x-auto pb-3">
            <div className="flex min-w-[1040px] items-center gap-3">
              {flowSteps.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex flex-1 items-center gap-3">
                    <div className="min-h-[180px] flex-1 rounded-[1.7rem] border border-white/10 bg-[#0d201b] p-5">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0066cc]/12 text-[#0066cc]">
                        <Icon size={21} />
                      </span>
                      <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">
                        Step 0{index + 1}
                      </p>
                      <h4 className="mt-2 text-xl font-semibold">{item.title}</h4>
                      <p className="mt-2 text-sm font-semibold leading-6 text-white/38">
                        {item.detail}
                      </p>
                    </div>

                    {index < flowSteps.length - 1 && (
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#0066cc]/20 bg-[#0066cc]/10 text-[#0066cc]">
                        <ArrowRight size={17} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Command center */}
        <div className="mt-6 grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
          <div className="rounded-[2.6rem] border border-white/10 bg-[#0d201b] p-6 md:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0066cc]">
                  AI Command Center
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.045em]">
                  System performance
                </h3>
              </div>

              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0066cc] text-[#000000]">
                <Workflow size={22} />
              </span>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["17", "Active Workflows"],
                ["1,842", "Tasks Today"],
                ["99.9%", "Success Rate"],
                ["420ms", "Response Time"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5"
                >
                  <p className="text-3xl font-semibold tracking-[-0.06em]">{value}</p>
                  <p className="mt-2 text-xs font-semibold text-white/35">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex h-44 items-end gap-3 rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-5">
              {[32, 48, 43, 62, 71, 68, 84, 78, 92, 100].map((h, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-t-full bg-[#0066cc]"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          <div className="rounded-[2.6rem] border border-white/10 bg-white/[0.045] p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0066cc]">
              Live Activity
            </p>
            <div className="mt-6 space-y-3">
              {[
                "Lead qualified and assigned",
                "Proposal summary generated",
                "WhatsApp follow-up sent",
                "CRM pipeline updated",
                "Daily report logged",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-[1.4rem] border border-white/10 bg-[#0d201b] p-4"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0066cc]/12 text-[#0066cc]">
                    <CheckCircle2 size={17} />
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{item}</p>
                    <p className="mt-1 text-xs font-semibold text-white/30">
                      {index + 1} min ago
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Apps marquee */}
        <div className="mt-6 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] py-5">
          <div className="flex min-w-max animate-[integrationMarquee_28s_linear_infinite] items-center gap-4 px-4">
            {[...apps, ...apps].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.name}-${index}`}
                  className="flex items-center gap-3 rounded-full border border-white/10 bg-[#0d201b] px-5 py-3"
                >
                  <Icon className="text-lg text-[#0066cc]" />
                  <span className="text-sm font-semibold text-white/70">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes orbitRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes orbitCounterRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes integrationMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes automationPath {
          to {
            stroke-dashoffset: -120;
          }
        }

        .automation-path {
          animation: automationPath 7s linear infinite;
        }

        .automation-path-delay {
          animation-delay: -2s;
        }

        .automation-path-delay-2 {
          animation-delay: -4s;
        }

        @media (prefers-reduced-motion: reduce) {
          .automation-path,
          .automation-path-delay,
          .automation-path-delay-2 {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}