export default function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-lg leading-8 text-slate-400">{text}</p> : null}
    </div>
  );
}
