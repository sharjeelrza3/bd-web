const steps = [
  ["01", "Challenge", "Understand the business problem."],
  ["02", "Research", "Study users, market and context."],
  ["03", "Strategy", "Define the direction and priorities."],
  ["04", "Design", "Create the experience and visual system."],
  ["05", "Build", "Develop, integrate and test."],
  ["06", "Results", "Launch, measure and improve."],
];

export default function ProcessPreview() {
  return (
    <section className="bg-white px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
            Inside Every Case Study
          </p>
          <h2 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">
            More than screenshots. The full story.
          </h2>
        </div>

        <div className="relative mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map(([number, title, description]) => (
            <article
              key={number}
              className="rounded-[2rem] border border-black/10 bg-[#f5f5f7] p-6"
            >
              <p className="text-4xl font-semibold tracking-[-0.08em] text-[#0066cc]">
                {number}
              </p>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em]">
                {title}
              </h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-black/45">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
