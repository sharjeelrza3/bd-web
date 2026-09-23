import { ArrowRight, Star } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="px-5 py-24">
      <div className="mx-auto max-w-7xl rounded-[2.8rem] bg-[#0066cc] p-8 text-[#000000] md:p-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_.55fr]">
          <div>
            <Star />
            <h2 className="mt-7 max-w-5xl text-4xl font-semibold leading-none tracking-[-0.045em] md:text-7xl">
              Ready to build your next digital asset?
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/65">
              Tell us your goal. We’ll help you choose the right website, SEO, ads, branding or software plan.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-5">
            {[
              ["Start project", "/contact"],
              ["Book consultation", "/contact"],
              ["WhatsApp us", "https://wa.me/"],
            ].map(([item, href]) => (
              <a
                key={item}
                href={href}
                className="mb-3 flex items-center justify-between rounded-2xl border border-black/10 px-5 py-4 font-semibold last:mb-0 hover:bg-[#1d1d1f] hover:text-white"
              >
                {item}
                <ArrowRight size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
