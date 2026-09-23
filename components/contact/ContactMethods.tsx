import {
  ArrowUpRight,
  AtSign,
  BriefcaseBusiness,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const methods = [
  {
    title: "WhatsApp",
    value: "Start a quick chat",
    href: "https://wa.me/",
    icon: MessageCircle,
  },
  {
    title: "Email",
    value: "hello@beingdigitals.com",
    href: "mailto:hello@beingdigitals.com",
    icon: Mail,
  },
  {
    title: "Call",
    value: "Discuss your project",
    href: "tel:+920000000000",
    icon: Phone,
  },
  {
    title: "Office",
    value: "Karachi, Pakistan",
    href: "#map",
    icon: MapPin,
  },
  {
    title: "Instagram",
    value: "@beingdigitals",
    href: "https://instagram.com/",
    icon: AtSign,
  },
  {
    title: "LinkedIn",
    value: "Being Digitals",
    href: "https://linkedin.com/",
    icon: BriefcaseBusiness,
  },
];

export default function ContactMethods() {
  return (
    <section className="bg-white px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Contact Options
            </p>

            <h2 className="mt-4 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Reach us in the way that suits you.
            </h2>
          </div>

          <p className="max-w-xl text-lg font-semibold leading-8 text-black/50">
            For quick questions, use WhatsApp. For detailed projects, submit the
            project brief above.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {methods.map((method, index) => {
            const Icon = method.icon;
            const dark = index === 0 || index === 5;

            return (
              <a
                key={method.title}
                href={method.href}
                target={
                  method.href.startsWith("http") ? "_blank" : undefined
                }
                rel={
                  method.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`group rounded-[2rem] p-6 transition hover:-translate-y-1 ${
                  dark
                    ? "bg-[#1d1d1f] text-white"
                    : "border border-black/10 bg-[#f5f5f7]"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      dark
                        ? "bg-[#0066cc] text-[#000000]"
                        : "bg-white text-[#0066cc]"
                    }`}
                  >
                    <Icon size={21} />
                  </span>

                  <ArrowUpRight
                    size={19}
                    className={dark ? "text-white/25" : "text-black/20"}
                  />
                </div>

                <p
                  className={`mt-8 text-xs font-semibold uppercase tracking-[0.16em] ${
                    dark ? "text-[#0066cc]" : "text-[#0066cc]"
                  }`}
                >
                  {method.title}
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                  {method.value}
                </h3>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}