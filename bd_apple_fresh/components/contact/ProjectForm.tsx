"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Loader2, Send } from "lucide-react";

const services = [
  "Website Development",
  "Business Software",
  "AI Automation",
  "Branding & Design",
  "SEO",
  "Meta Ads",
  "Google Ads",
  "Social Media Marketing",
  "Website Maintenance",
];

const budgets = ["Under $500", "$500 - $1,500", "$1,500 - $5,000", "$5,000+", "Not sure yet"];
const timelines = ["As soon as possible", "Within 2 weeks", "Within 1 month", "1 - 3 months", "Flexible"];

type FormData = {
  service: string;
  budget: string;
  timeline: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  details: string;
};

const fieldClass = "mt-2 w-full rounded-[16px] border border-black/[.09] bg-[#f5f5f7] px-4 py-3.5 text-[15px] font-medium text-[#1d1d1f] outline-none transition-[border-color,background-color,box-shadow] placeholder:text-black/30 focus:border-[#0071e3] focus:bg-white focus:shadow-[0_0_0_3px_rgba(0,113,227,.10)]";

function Choice({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`group flex min-h-[62px] items-center justify-between gap-4 rounded-[18px] border px-5 py-4 text-left text-[15px] font-semibold transition-[transform,border-color,background-color,box-shadow] focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2 ${selected ? "border-[#0071e3] bg-[#eef6ff] shadow-[0_0_0_1px_rgba(0,113,227,.04)]" : "border-black/[.08] bg-[#f5f5f7] hover:-translate-y-px hover:border-black/[.16] hover:bg-white"}`}
    >
      <span>{label}</span>
      <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors ${selected ? "bg-[#0071e3] text-white" : "border border-black/12 bg-white text-transparent"}`}><Check size={13} strokeWidth={2.6} /></span>
    </button>
  );
}

export default function ProjectForm({ initialService }: { initialService: string }) {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<FormData>({ service: "", budget: "", timeline: "", name: "", email: "", phone: "", company: "", details: "" });

  useEffect(() => {
    if (!initialService) return;
    const match = services.find((service) => service.toLowerCase().includes(initialService.toLowerCase()));
    setForm((current) => ({ ...current, service: match ?? initialService }));
  }, [initialService]);

  const progress = useMemo(() => (step / 4) * 100, [step]);
  const canContinue = Boolean((step === 1 && form.service) || (step === 2 && form.budget) || (step === 3 && form.timeline));
  const update = (field: keyof FormData, value: string) => setForm((current) => ({ ...current, [field]: value }));

  const next = () => {
    if (!canContinue) return;
    setError("");
    setStep((current) => Math.min(4, current + 1));
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.details) return;
    setSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("Unable to submit project inquiry.");
      setSubmitted(true);
    } catch (submitError) {
      console.error(submitError);
      setError("We couldn’t send your brief right now. Please try again, or email support@beingdigitals.com.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="project-form" className="bd-defer bg-[#f5f5f7] px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
          <div className="lg:pt-4">
            <p className="text-[16px] font-semibold text-[#6e6e73] md:text-[17px]">Project brief</p>
            <h2 className="mt-3 text-[clamp(3.3rem,6vw,6.4rem)] font-semibold leading-[.92] tracking-[-.064em]">Tell us what you&apos;re planning.</h2>
            <p className="mt-6 max-w-xl text-[17px] font-medium leading-[1.55] text-black/46">Four short steps. Enough context for us to understand the project and respond properly.</p>

            <div className="mt-10 rounded-[28px] border border-black/[.075] bg-white p-6 md:p-7">
              <p className="text-[12px] font-semibold text-black/34">What happens next</p>
              <div className="mt-5 space-y-4">
                {["We review your brief", "We contact you within 24 hours", "We suggest scope, approach and next step"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-[14px] font-semibold text-black/58">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eef6ff] text-[#0071e3]"><CheckCircle2 size={15} /></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-black/[.075] bg-white shadow-[0_24px_80px_rgba(0,0,0,.055)] md:rounded-[40px]">
            <div className="border-b border-black/[.075] px-6 py-6 md:px-8 md:py-7">
              <div className="flex items-end justify-between gap-5">
                <div>
                  <p className="text-[12px] font-semibold text-[#0071e3]">Step {step} of 4</p>
                  <p className="mt-1 text-[13px] font-medium text-black/36">Complete your project brief</p>
                </div>
                <span className="text-[12px] font-semibold text-black/38">{Math.round(progress)}%</span>
              </div>
              <div className="mt-5 grid grid-cols-4 gap-2" aria-hidden="true">
                {[1, 2, 3, 4].map((item) => <span key={item} className={`h-[3px] rounded-full transition-colors duration-300 ${item <= step ? "bg-[#0071e3]" : "bg-black/[.08]"}`} />)}
              </div>
            </div>

            {submitted ? (
              <div className="p-8 md:p-12" aria-live="polite">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0071e3] text-white"><CheckCircle2 size={25} /></span>
                <h3 className="mt-7 text-[clamp(2.5rem,4vw,4rem)] font-semibold leading-[.96] tracking-[-.055em]">Project brief received.</h3>
                <p className="mt-4 max-w-xl text-[16px] font-medium leading-7 text-black/48">Thank you. Being Digitals will review your information and contact you within 24 hours.</p>
                <a href="/" className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#1d1d1f] px-5 text-[14px] font-semibold text-white transition-transform hover:-translate-y-px">Return home <ArrowRight size={16} /></a>
              </div>
            ) : (
              <form onSubmit={submit} className="p-6 md:p-8" noValidate={false}>
                {step === 1 && (
                  <div>
                    <h3 className="text-[clamp(2rem,3vw,3rem)] font-semibold tracking-[-.045em]">What do you need?</h3>
                    <p className="mt-2 text-[14px] font-medium text-black/38">Choose the closest fit. We can refine it together later.</p>
                    <div className="mt-7 grid gap-2.5 sm:grid-cols-2">
                      {services.map((service) => <Choice key={service} label={service} selected={form.service === service} onClick={() => update("service", service)} />)}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h3 className="text-[clamp(2rem,3vw,3rem)] font-semibold tracking-[-.045em]">What budget range are you considering?</h3>
                    <p className="mt-2 text-[14px] font-medium text-black/38">This helps us recommend a realistic scope.</p>
                    <div className="mt-7 grid gap-2.5">
                      {budgets.map((budget) => <Choice key={budget} label={budget} selected={form.budget === budget} onClick={() => update("budget", budget)} />)}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h3 className="text-[clamp(2rem,3vw,3rem)] font-semibold tracking-[-.045em]">When would you like to start?</h3>
                    <p className="mt-2 text-[14px] font-medium text-black/38">An estimate is enough — this doesn&apos;t lock you into a date.</p>
                    <div className="mt-7 grid gap-2.5">
                      {timelines.map((timeline) => <Choice key={timeline} label={timeline} selected={form.timeline === timeline} onClick={() => update("timeline", timeline)} />)}
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div>
                    <h3 className="text-[clamp(2rem,3vw,3rem)] font-semibold tracking-[-.045em]">Tell us about you and the project.</h3>
                    <p className="mt-2 text-[14px] font-medium text-black/38">A little context helps us make the first reply useful.</p>
                    <div className="mt-7 grid gap-4 sm:grid-cols-2">
                      <label className="text-[12px] font-semibold text-black/48">Your name *<input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" autoComplete="name" required className={fieldClass} /></label>
                      <label className="text-[12px] font-semibold text-black/48">Email address *<input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@company.com" autoComplete="email" required className={fieldClass} /></label>
                      <label className="text-[12px] font-semibold text-black/48">Phone / WhatsApp<input value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="Optional" autoComplete="tel" className={fieldClass} /></label>
                      <label className="text-[12px] font-semibold text-black/48">Company name<input value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="Optional" autoComplete="organization" className={fieldClass} /></label>
                    </div>
                    <label className="mt-4 block text-[12px] font-semibold text-black/48">Project details *<textarea value={form.details} onChange={(e) => update("details", e.target.value)} placeholder="Goals, current situation, important features or anything we should know." required rows={7} className={`${fieldClass} resize-none`} /></label>

                    <div className="mt-5 grid gap-3 rounded-[20px] border border-black/[.075] bg-[#f5f5f7] p-5 sm:grid-cols-3">
                      {[['Service', form.service], ['Budget', form.budget], ['Timeline', form.timeline]].map(([label, value]) => <div key={label}><p className="text-[10px] font-semibold text-black/28">{label}</p><p className="mt-1.5 text-[13px] font-semibold">{value}</p></div>)}
                    </div>
                  </div>
                )}

                {error && <p role="alert" className="mt-6 rounded-[16px] border border-red-200 bg-red-50 px-4 py-3 text-[13px] font-medium leading-5 text-red-700">{error}</p>}

                <div className="mt-8 flex items-center justify-between gap-3 border-t border-black/[.075] pt-6">
                  <button type="button" onClick={() => { setError(""); setStep((current) => Math.max(1, current - 1)); }} disabled={step === 1} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-black/[.1] px-5 text-[14px] font-semibold transition hover:bg-black/[.035] focus-visible:ring-2 focus-visible:ring-black disabled:cursor-not-allowed disabled:opacity-25"><ArrowLeft size={16} /> Back</button>
                  {step < 4 ? (
                    <button type="button" disabled={!canContinue} onClick={next} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#1d1d1f] px-5 text-[14px] font-semibold text-white transition-[transform,opacity] hover:-translate-y-px focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:translate-y-0">Continue <ArrowRight size={16} /></button>
                  ) : (
                    <button type="submit" disabled={submitting} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0071e3] px-5 text-[14px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-px hover:bg-[#0077ed] focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2 disabled:opacity-50">{submitting ? <><Loader2 size={16} className="animate-spin" />Sending</> : <>Submit brief <Send size={16} /></>}</button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
