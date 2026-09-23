import { Wrench } from "lucide-react";
import { tools } from "./data";

export default function ToolsSection() {
  return (
    <section className="bg-white px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
            SEO Tools
          </p>
          <h2 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">
            Useful tools for research, auditing and measurement.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {tools.map((tool, index) => (
            <article
              key={tool}
              className={`rounded-[2rem] p-6 ${
                index === 0 || index === 7
                  ? "bg-[#1d1d1f] text-white"
                  : "border border-black/10 bg-[#f5f5f7]"
              }`}
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                  index === 0 || index === 7
                    ? "bg-[#0066cc] text-[#000000]"
                    : "bg-white text-[#0066cc]"
                }`}
              >
                <Wrench size={20} />
              </span>
              <h3 className="mt-8 text-xl font-semibold">{tool}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
