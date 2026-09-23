import { ArrowDownToLine, FileText } from "lucide-react";

const resources = [
  ["Campaign Planning Sheet", "/resources/campaign-planning-sheet.pdf"],
  ["Social Media Calendar", "/resources/social-media-calendar.pdf"],
  ["Ad Creative Checklist", "/resources/ad-creative-checklist.pdf"],
  ["Brand Messaging Worksheet", "/resources/brand-messaging.pdf"],
];

export default function Resources() {
  return (
    <section className="bg-white px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Marketing Resources
            </p>
            <h2 className="mt-4 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Tools for better planning and execution.
            </h2>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {resources.map(([title, href]) => (
            <a key={title} href={href} download className="rounded-[2rem] border border-black/10 bg-[#f5f5f7] p-6">
              <div className="flex items-start justify-between">
                <FileText size={22} className="text-[#0066cc]" />
                <ArrowDownToLine size={19} className="text-black/20" />
              </div>
              <h3 className="mt-8 text-2xl font-semibold">{title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
