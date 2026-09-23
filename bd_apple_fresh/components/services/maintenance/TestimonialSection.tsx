"use client";

const testimonials = [
  {
    quote:
      "Being Digitals keeps our website updated, stable and fast. We no longer worry about technical issues affecting customers.",
    name: "Business Client",
    role: "Website Maintenance",
  },
  {
    quote:
      "Their support is responsive and clear. Problems are handled quickly and we always know what was updated.",
    name: "Ecommerce Client",
    role: "Ongoing Support",
  },
  {
    quote:
      "The regular backups, speed checks and maintenance reports give us confidence that our site is protected.",
    name: "Service Business",
    role: "Professional Plan",
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
          Client Confidence
        </p>
        <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">
          Reliable support creates peace of mind.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.quote} className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_20px_80px_rgba(0,0,0,.05)]">
              <p className="text-lg font-semibold leading-8 text-black/58">
                “{item.quote}”
              </p>
              <div className="mt-8">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm font-semibold text-black/40">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
