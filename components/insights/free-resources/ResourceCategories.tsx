export default function ResourceCategories({
  items,
  active,
  onChange,
}: {
  items: string[];
  active: string;
  onChange: (value: string) => void;
}) {
  return (
    <section className="bg-white px-5 py-8">
      <div className="mx-auto flex max-w-7xl flex-wrap gap-3">
        {items.map((item) => (
          <button
            key={item}
            onClick={() => onChange(item)}
            className={`rounded-full px-5 py-3 text-sm font-semibold ${
              active === item
                ? "bg-[#1d1d1f] text-white"
                : "border border-black/10 bg-[#f5f5f7] text-black/50"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}
