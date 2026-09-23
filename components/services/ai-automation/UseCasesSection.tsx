"use client";

const cases = [
  ["Restaurant", "Automate reservations, WhatsApp orders and customer follow-ups."],
  ["Real Estate", "Qualify leads, assign agents and schedule property visits."],
  ["Healthcare", "Handle appointments, reminders and patient communication."],
  ["Ecommerce", "Recover abandoned carts and automate order updates."],
  ["Service Business", "Capture inquiries, prepare quotes and schedule calls."],
  ["Internal Operations", "Sync data, generate reports and alert teams."],
];

export default function UseCasesSection() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-24 text-[#101010]">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
            Automation Use Cases
          </p>
          <h2 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">
            Built around real business workflows.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cases.map(([title, desc], index) => (
            <div
              key={title}
              className={`rounded-[2rem] p-7 ${
                index % 2 === 0 ? "bg-[#1d1d1f] text-white" : "border border-black/10 bg-white"
              }`}
            >
              <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                index % 2 === 0 ? "text-[#0066cc]" : "text-[#0066cc]"
              }`}>
                Use Case 0{index + 1}
              </p>
              <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">{title}</h3>
              <p className={`mt-4 text-sm font-semibold leading-6 ${
                index % 2 === 0 ? "text-white/45" : "text-black/50"
              }`}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
