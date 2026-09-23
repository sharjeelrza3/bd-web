"use client";

import {
  Activity,
  Bug,
  DatabaseBackup,
  FileClock,
  Gauge,
  GlobeLock,
  HardDriveDownload,
  LifeBuoy,
  RefreshCcw,
  ServerCog,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const services = [
  { title: "Core Updates", desc: "Safe CMS and system updates.", icon: RefreshCcw },
  { title: "Plugin Updates", desc: "Compatibility checks and updates.", icon: Wrench },
  { title: "Daily Backups", desc: "Scheduled backup protection.", icon: DatabaseBackup },
  { title: "Security Scans", desc: "Routine malware and threat checks.", icon: ShieldCheck },
  { title: "Malware Removal", desc: "Cleanup and recovery support.", icon: GlobeLock },
  { title: "Speed Optimization", desc: "Performance and loading improvements.", icon: Gauge },
  { title: "Bug Fixes", desc: "Layout, form and functional fixes.", icon: Bug },
  { title: "Uptime Monitoring", desc: "Availability and downtime alerts.", icon: Activity },
  { title: "SSL Monitoring", desc: "Certificate and HTTPS checks.", icon: HardDriveDownload },
  { title: "Database Cleanup", desc: "Optimization and unnecessary data removal.", icon: ServerCog },
  { title: "Monthly Reports", desc: "Clear maintenance activity summary.", icon: FileClock },
  { title: "Emergency Support", desc: "Priority help when something breaks.", icon: LifeBuoy },
];

export default function IncludedServices() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Included Services
            </p>
            <h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Complete maintenance, protection and support.
            </h2>
          </div>

          <p className="max-w-xl text-lg font-semibold leading-8 text-black/50">
            Every maintenance plan is designed to keep your website secure, stable,
            updated and ready for customers.
          </p>
        </div>

        <div className="rounded-[2.5rem] border border-black/10 bg-white p-5 shadow-[0_30px_110px_rgba(0,0,0,.06)]">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[1.8rem] p-5 transition hover:bg-[#e7fbff]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7fbff] text-[#0066cc]">
                    <Icon size={21} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-[-0.03em]">{item.title}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-black/48">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
