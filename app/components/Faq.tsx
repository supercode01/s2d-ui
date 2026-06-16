"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do I need coding skills to use this platform?",
    a: "Nope! Our drag-and-drop builder makes it super easy to create landing pages without writing a single line of code.",
  },
  {
    q: "Can I connect my own domain?",
    a: "Yes! Custom domains are supported on Pro and Enterprise plans, and setup takes just a few minutes.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes! Our free plan lets you build and publish without a credit card. Upgrade any time as you grow.",
  },
  {
    q: "What happens if I cancel my subscription?",
    a: "Your account stays active until the end of the billing period, and your pages remain accessible on the free tier.",
  },
  {
    q: "Do you offer integrations with third-party tools?",
    a: "Yes, we support integrations with popular tools like Zapier, WordPress, Shopify, and more to automate your workflows.",
  },
];

export default function Faq() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-5">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* LEFT — heading + contact */}
        <div className="lg:sticky lg:top-28">
          <span className="inline-block rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--accent-2)]">
            FAQs
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl font-bold leading-tight">
            Got Questions?
            <br />
            We&apos;ve Got Answers!
          </h2>
          <p className="mt-4 text-[var(--muted)]">
            Find quick answers or contact our support team.
          </p>
          <a
            href="#"
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/50 bg-[var(--surface)] px-6 py-3 font-semibold shadow-lg shadow-[var(--accent)]/20 hover:bg-[var(--accent)]/10 transition"
          >
            Contact Us
            <span className="text-[var(--accent-2)]">✉</span>
          </a>
        </div>

        {/* RIGHT — accordion (divider style) */}
        <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {faqs.map((f, i) => {
            const open = active === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setActive(open ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                >
                  <span
                    className={`font-semibold transition-colors ${
                      open ? "text-[var(--text)]" : "text-[var(--text)]/90 group-hover:text-[var(--text)]"
                    }`}
                  >
                    {f.q}
                  </span>
                  <span
                    className={`shrink-0 text-xl text-[var(--accent-2)] transition-transform duration-300 ${
                      open ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  }`}
                >
                  <p className="overflow-hidden text-sm text-[var(--muted)] leading-relaxed pr-8">
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}