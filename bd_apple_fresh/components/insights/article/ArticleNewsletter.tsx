"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";

export default function ArticleNewsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="bg-[#f5f5f7] px-5 py-28">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.8rem] bg-[#1d1d1f] text-white lg:grid-cols-[1fr_.75fr]">
        <div className="p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0066cc]">
            Better insights
          </p>
          <h2 className="mt-5 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl">
            Useful ideas delivered clearly.
          </h2>
        </div>

        <div className="flex items-center bg-white/[0.05] p-8 md:p-12">
          {!done ? (
            <form
              className="w-full"
              onSubmit={(event) => {
                event.preventDefault();
                if (email.trim()) setDone(true);
              }}
            >
              <label className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-5 py-4">
                <Mail size={18} className="text-[#0066cc]" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-transparent text-sm font-semibold outline-none placeholder:text-white/30"
                />
              </label>

              <button className="mt-4 flex w-full items-center justify-between rounded-full bg-[#0066cc] px-6 py-4 font-semibold text-[#000000]">
                Subscribe
                <ArrowRight size={18} />
              </button>
            </form>
          ) : (
            <div>
              <CheckCircle2 size={34} className="text-[#0066cc]" />
              <h3 className="mt-5 text-3xl font-semibold">You&apos;re subscribed.</h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
