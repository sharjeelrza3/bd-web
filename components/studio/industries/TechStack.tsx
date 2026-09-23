"use client";
const stacks = [
  { industry:"Restaurant", tools:["Next.js","PHP","MySQL","Stripe","POS"] },
  { industry:"Healthcare", tools:["React","Node.js","MySQL","Cloud","Dashboards"] },
  { industry:"Real Estate", tools:["Next.js","CRM","WhatsApp API","Analytics","Meta Ads"] },
  { industry:"Ecommerce", tools:["Shopify","WooCommerce","Stripe","Meta","Email Automation"] },
];

export default function TechStack() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">Technology by Industry</p>
          <h2 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">The stack follows the business need.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold leading-8 text-black/50">
            We choose technology based on performance, scalability, operations and future growth.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {stacks.map((stack) => (
            <article key={stack.industry} className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_16px_60px_rgba(0,0,0,.045)]">
              <h3 className="text-2xl font-semibold tracking-[-0.04em]">{stack.industry}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {stack.tools.map((tool) => (
                  <span key={tool} className="rounded-full border border-black/10 bg-[#f5f5f7] px-4 py-2 text-xs font-semibold text-black/55">
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
