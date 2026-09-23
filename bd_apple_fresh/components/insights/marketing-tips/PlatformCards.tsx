import {
  BarChart3,
  // Instagram,
  Megaphone,
  Search,
  Video,
  // Youtube,
} from "lucide-react";

const items = [
  ["Meta Ads", Megaphone],
  // ["Instagram", Instagram],
  ["Google Ads", Search],
  // ["YouTube", Youtube],
  ["Short Video", Video],
  ["Analytics", BarChart3],
];

export default function PlatformCards() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
            Marketing Platforms
          </p>

          <h2 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">
            Understand the role of each platform.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map(([title, Icon], index) => {
            const SafeIcon = Icon as typeof Search;
            const dark = index === 0 || index === 5;

            return (
              <article
                key={title as string}
                className={`rounded-[2rem] p-6 ${
                  dark
                    ? "bg-[#1d1d1f] text-white"
                    : "border border-black/10 bg-white"
                }`}
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    dark
                      ? "bg-[#0066cc] text-[#000000]"
                      : "bg-[#e7fbff] text-[#0066cc]"
                  }`}
                >
                  <SafeIcon size={21} />
                </span>

                <h3 className="mt-8 text-2xl font-semibold">
                  {title as string}
                </h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}