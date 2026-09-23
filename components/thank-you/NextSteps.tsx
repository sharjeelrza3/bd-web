import {
  CheckCircle2,
  FileSearch,
  MessageSquareText,
  Route,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Brief Review",
    description: "We review your goals, scope, timeline and project requirements.",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Initial Contact",
    description: "We contact you to clarify details and understand priorities.",
    icon: MessageSquareText,
  },
  {
    number: "03",
    title: "Recommended Direction",
    description: "We suggest the right scope, process and next step for the project.",
    icon: Route,
  },
  {
    number: "04",
    title: "Project Kickoff",
    description: "Once everything is aligned, we begin planning and execution.",
    icon: CheckCircle2,
  },
];

export default function NextSteps() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
            What Happens Next
          </p>

          <h2 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">
            A clear process from brief to kickoff.
          </h2>
        </div>

        <div className="relative mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-black/10 lg:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article key={step.number} className="relative text-center">
                <span className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0066cc] text-[#000000]">
                  <Icon size={22} />
                </span>

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#0066cc]">
                  {step.number}
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm font-semibold leading-6 text-black/45">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
