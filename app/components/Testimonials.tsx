"use client";

import Image from "next/image";

type T = { quote: string; name: string; role: string; img: string };

const testimonials: T[] = [
  { quote: "I've tried several page builders, but this one stands out for its ease of use and powerful features. A game-changer for our campaigns!", name: "Jake", role: "ElevateHub", img: "/images/testmonial-1.webp" },
  { quote: "What took hours now takes minutes. The A/B testing and built-in SEO tools helped us optimize faster than ever.", name: "Olivia", role: "Growthly", img: "/images/testimonial-3.webp" },
  { quote: "A total game-changer for our global campaigns. It empowers non-tech teams to execute at speed and scale.", name: "Luca Rossi", role: "Growth Lead, EMEA", img: "/images/testimonial-6-1.webp" },
  { quote: "From templates to integrations, everything works smoothly. Our conversion rate improved by 40% in the first month!", name: "Sophia", role: "LaunchPro", img: "/images/testimonial-4.webp" },
  { quote: "It combines flexibility with sheer speed. Intuitive, fast, and makes our marketing workflow smoother than ever.", name: "Emily Carter", role: "Senior Marketing Manager", img: "/images/testimonial-5.webp" },
  { quote: "Building and launching pages has never been this seamless. We reduced turnaround time by 60%.", name: "James O'Neill", role: "Director of Digital Strategy", img: "/images/testimonial-7-1.webp" },
];

const row1 = testimonials.slice(0, 3);
const row2 = testimonials.slice(3, 6);

function Card({ t }: { t: T }) {
  return (
    <div className="w-[340px] shrink-0 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 flex items-stretch gap-4">
      <div className="relative w-24 shrink-0 rounded-xl overflow-hidden bg-[var(--surface-2)]">
        <Image src={t.img} alt={t.name} fill className="object-cover" />
      </div>
      <div className="flex flex-col">
        <span className="text-[var(--accent-2)] text-3xl leading-none font-display">&ldquo;</span>
        <p className="text-sm text-[var(--text)]/90 leading-relaxed">{t.quote}</p>
        <div className="mt-auto pt-3">
          <p className="font-semibold text-sm">{t.name}</p>
          <p className="text-xs text-[var(--muted)]">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 overflow-hidden">
      <div className="px-5">
        <p className="text-center text-sm font-semibold text-[var(--accent-2)] uppercase tracking-widest">
          Testimonials
        </p>
        <h2 className="mt-3 text-center font-display text-3xl md:text-4xl font-bold">
          Success Stories from Businesses Like Yours
        </h2>
        <p className="mt-3 text-center text-[var(--muted)] max-w-2xl mx-auto">
          See how brands are scaling their marketing with our no-code landing page builder.
        </p>
      </div>

      {/* edges pe fade ke liye wrapper */}
      <div className="mt-14 space-y-5 fade-x">
        {/* Row 1 — left ki taraf */}
        <div className="marquee-row flex overflow-hidden">
          <div className="marquee-track marquee-left">
            {[...row1, ...row1, ...row1].map((t, i) => (
              <Card key={`a-${i}`} t={t} />
            ))}
          </div>
        </div>

        {/* Row 2 — right ki taraf */}
        <div className="marquee-row flex overflow-hidden">
          <div className="marquee-track marquee-right">
            {[...row2, ...row2, ...row2].map((t, i) => (
              <Card key={`b-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}