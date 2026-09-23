"use client";

const items = [
  "Invisible for buying keywords",
  "Traffic with no conversion path",
  "Local profile not optimized",
  "Content without search intent",
  "Technical issues blocking growth",
];

export default function SearchProblemStrip() {
  return (
    <section className="overflow-hidden border-y border-black/10 bg-white py-5">
      <div className="group overflow-hidden">
        <div className="flex w-max min-w-max gap-3 px-3 whitespace-nowrap animate-[bdMarquee_24s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[...items, ...items].map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="shrink-0 rounded-full border border-black/10 bg-[#f5f5f7] px-5 py-3 text-sm font-semibold text-black/50"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}