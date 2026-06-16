import Image from "next/image";
import Header from "./components/Header";
import Faq from "./components/Faq";
import Reveal from "./components/Reveal";
import AnimatedHeadline from "./components/AnimatedHeadline";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";

const features = [
  { n: "01", title: "Drag & Drop Editor – No Coding Required", desc: "Design high-converting pages in minutes with our intuitive drag-and-drop editor. No coding, no hassle—just pure creativity at your fingertips.", img: "/images/sidebar.jpg" },
  { n: "02", title: "100+ Pre-Made Templates", desc: "Choose from 100+ stunning, high-converting templates tailored for e-commerce, SaaS, agencies, and more. Just select, customize, and launch.", img: "/images/100-1.jpg" },
  { n: "03", title: "AI-Powered Copy & Layout Suggestions", desc: "Stuck on what to write? Our AI assistant generates compelling headlines, descriptions, and layouts in seconds—tailored to your audience.", img: "/images/gen-2.jpg" },
  { n: "04", title: "Optimized for Speed, Built for Conversions", desc: "Every millisecond counts. Our pages load in record time, ensuring better SEO, higher conversions, and a seamless user experience.", img: "/images/group-image-4.webp" },
  { n: "05", title: "Mobile-First & Responsive Design", desc: "Build pages that adapt perfectly to any screen, ensuring a smooth and engaging experience on mobile, tablet, and desktop.", img: "/images/Macbook.png" },
];


const templates = [
  { label: "Ecommerce", img: "/images/template-1.webp" },
  { label: "Landing Pages", img: "/images/template-2.webp" },
  { label: "Portfolio & Creative", img: "/images/template-3.webp" },
  { label: "Business & Corporate", img: "/images/template-4.webp" },
  { label: "Blog & Content", img: "/images/template-5.webp" },
  { label: "SaaS & Startup", img: "/images/template-6.webp" },
];

const benefits = [
  { title: "Higher Conversions & Revenue", desc: "Build and launch stunning landing pages in minutes instead of weeks—no developers needed!" },
  { title: "Save Time & Effort", desc: "Skip the long build cycles and ship campaigns the same day you plan them." },
  { title: "Focus on Marketing, Not Tech", desc: "Spend more time growing your business while we handle the technical complexities." },
  { title: "Scale Faster", desc: "Quickly test and launch campaigns without waiting for designers or developers." },
  { title: "Reach Global Audiences", desc: "Easily create and optimize pages for different markets to reach customers worldwide." },
  { title: "Competitive Edge", desc: "Outperform competitors with pages that load fast, look great, and engage users." },
];


const partners = [
  "/images/partner-1.svg", "/images/partner-2.svg", "/images/partner-3.svg",
  "/images/partner-4.svg", "/images/partner-5.svg",
];

const plans = [
  { name: "Free Plan", price: "$0", period: "Per Month", cta: "Start Free", features: ["Drag & Drop Builder", "2 Pages", "Basic Support"], highlight: false },
  { name: "Pro Plan", price: "$29", period: "Per Month", cta: "Upgrade to Pro", features: ["Drag & Drop Builder", "15 Pages", "Custom Domains", "AI Copywriting", "Advanced Analytics", "Advanced Support"], highlight: true },
  { name: "Enterprise Plan", price: "Custom", period: "", cta: "Contact Us", features: ["Unlimited Pages", "Custom Domains", "AI Copywriting", "Advanced Analytics", "API Access", "Priority Support"], highlight: false },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* HERO */}
      <section className="relative pt-36 pb-24 px-5">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[var(--accent)]/20 blur-[120px] pointer-events-none" />
        <div className="relative mx-auto max-w-4xl text-center">

          <AnimatedHeadline
            className="mt-6 text-4xl md:text-6xl font-extrabold leading-[1.1] text-white"
            text="Build High-Converting || Landing Pages in Minutes"
          />

          <p className="hl-word delay-1 mt-6 text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Effortless drag &amp; drop builder, AI-powered customization, and 100+
            templates to launch faster.
          </p>
          <div className="hl-word delay-2 mt-8 flex flex-wrap justify-center items-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-[var(--surface)] border border-[var(--border)] px-7 py-3 font-semibold shadow-[0_8px_40px_-6px_rgba(108,92,231,0.55)] hover:bg-[var(--surface-2)] hover:shadow-[0_8px_50px_-4px_rgba(108,92,231,0.7)] transition-all duration-300">Get Started <span className="text-base">↓</span></a>
            <a href="#" className="inline-flex items-center gap-2 px-5 py-3 font-semibold text-[var(--muted)] hover:text-[var(--text)] transition">▶ Watch Demo</a>
          </div>
        </div>

        <Reveal from="scale" delay={150} className="relative mt-16 mx-auto max-w-5xl">
          <div className="absolute -inset-6 bg-gradient-to-tr from-[var(--accent)]/25 via-transparent to-[var(--accent-2)]/20 blur-3xl rounded-[2.5rem] pointer-events-none" />
          <div className="relative animate-float rounded-2xl border border-[var(--border)] overflow-hidden shadow-2xl shadow-[var(--accent)]/20">
            <Image src="/images/h3-demo.webp" alt="Product preview" width={1600} height={950} className="w-full h-auto" priority />
          </div>
        </Reveal>
      </section>

      {/* PARTNERS MARQUEE */}
      <section className="py-12 border-y border-[var(--border)]">
        <p className="text-center text-sm text-[var(--muted)] mb-8">
          Trusted by 50,000+ Marketers to Build Landing Pages That Work
        </p>
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee gap-16 px-8 shrink-0 items-center">
            {[...Array(2)].map((_, dup) =>
              partners.map((p, i) => (
                <Image key={`${dup}-${i}`} src={p} alt="Partner logo" width={120} height={40} className="h-8 w-auto opacity-50" />
              ))
            )}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="relative overflow-hidden py-24 px-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[var(--accent)]/10 blur-[140px] pointer-events-none" />
        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <p className="text-center text-sm font-semibold text-[var(--accent-2)] uppercase tracking-widest">Next-Gen Landing Page Builder</p>
            <h2 className="mt-3 text-center font-display text-3xl md:text-4xl font-bold">Powerful Features to Build &amp; Scale Effortlessly</h2>
            <p className="mt-3 text-center text-[var(--muted)] max-w-2xl mx-auto">Effortlessly create, optimize, and scale high-converting landing pages—no coding required.</p>
          </Reveal>

          <div className="mt-14 flex flex-wrap justify-center gap-5">
            {features.map((f, i) => (
              <Reveal key={f.n} delay={i * 100} className="w-full md:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]">
                <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden hover:border-[var(--accent)]/50 hover:-translate-y-1 transition-all duration-300">
                  <div className="aspect-video bg-[var(--surface-2)] overflow-hidden">
                    <Image src={f.img} alt={f.title} width={600} height={340} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-7">
                    <span className="font-display text-4xl font-extrabold text-[var(--accent)]/30">{f.n}</span>
                    <h3 className="mt-3 font-display text-lg font-bold">{f.title}</h3>
                    <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <HowItWorks />


      {/* TEMPLATES */}
      <section id="templates" className="relative overflow-hidden py-24 px-5">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-[var(--accent-2)]/10 blur-[140px] pointer-events-none" />
        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <p className="text-center text-sm font-semibold text-[var(--accent-2)] uppercase tracking-widest">Next-Gen Landing Page Builder</p>
            <h2 className="mt-3 text-center font-display text-3xl md:text-4xl font-bold">Build Faster with 300+ Ready-to-Use Templates</h2>
            <p className="mt-3 text-center text-[var(--muted)] max-w-2xl mx-auto">Launch stunning pages in minutes with fully customizable, high-performance templates for any industry.</p>
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {templates.map((t, i) => (
              <Reveal key={t.label} delay={i * 90}>
                <div className="group rounded-2xl border border-[var(--border)] overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image src={t.img} alt={t.label} width={500} height={375} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500" />
                  </div>
                  <div className="p-4 bg-[var(--surface)]"><span className="font-semibold">{t.label}</span></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-5 bg-[var(--surface)]/40">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-center text-sm font-semibold text-[var(--accent-2)] uppercase tracking-widest">Why Choose Us?</p>
            <h2 className="mt-3 text-center font-display text-3xl md:text-4xl font-bold">Maximize Results, Minimize Effort</h2>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent-2)]/15 flex items-center justify-center text-[var(--accent-2)]">✓</div>
                  <h3 className="mt-4 font-display font-bold">{b.title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />


      {/* PRICING */}
      <section id="pricing" className="py-24 px-5 bg-[var(--surface)]/40">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-center text-sm font-semibold text-[var(--accent-2)] uppercase tracking-widest">Pricing Plans</p>
            <h2 className="mt-3 text-center font-display text-3xl md:text-4xl font-bold">Plans That Scale With You</h2>
            <p className="mt-3 text-center text-[var(--muted)] max-w-2xl mx-auto">Find the perfect plan for your business—flexible, transparent, and packed with powerful tools.</p>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-3 gap-6 items-start">
            {plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 120}>
                <div className={`rounded-3xl border p-8 ${p.highlight ? "border-[var(--accent)] bg-[var(--surface)] md:scale-[1.03] shadow-2xl shadow-[var(--accent)]/20" : "border-[var(--border)] bg-[var(--surface)]"}`}>
                  {p.highlight && (<span className="inline-block mb-4 rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-semibold">Most Popular</span>)}
                  <h3 className="font-display font-bold text-lg">{p.name}</h3>
                  <div className="mt-4 flex items-end gap-2">
                    <span className="font-display text-4xl font-extrabold">{p.price}</span>
                    {p.period && <span className="text-[var(--muted)] mb-1">{p.period}</span>}
                  </div>
                  <a href="#" className={`mt-6 block text-center rounded-full px-5 py-3 font-semibold transition ${p.highlight ? "bg-[var(--accent)] hover:opacity-90" : "border border-[var(--border)] hover:bg-[var(--surface-2)]"}`}>{p.cta}</a>
                  <ul className="mt-7 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-[var(--muted)]"><span className="text-[var(--accent-2)]">✓</span> {f}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Faq />

      {/* CTA */}
      <section className="py-24 px-5">
        <Reveal from="scale">
          <div className="relative mx-auto max-w-4xl rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--accent)]/20 to-[var(--surface)] p-12 text-center overflow-hidden">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[var(--accent-2)]/20 blur-[100px]" />
            <h2 className="relative font-display text-3xl md:text-4xl font-bold">Your Next High-Performing Landing Page Starts Here!</h2>
            <p className="relative mt-4 text-[var(--muted)] max-w-xl mx-auto">Try it free for 14 days – no credit card required. Get started today and see why thousands of marketers love our AI-powered builder.</p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-4">
              <a href="#" className="rounded-full bg-[var(--accent)] px-7 py-3 font-semibold hover:opacity-90 transition">Log In</a>
              <a href="#" className="rounded-full border border-[var(--border)] px-7 py-3 font-semibold hover:bg-[var(--surface)] transition">See Live Examples</a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[var(--border)] py-12 px-5">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
          <Image src="/images/logo-light-2.png" alt="BrightHub" width={140} height={32} className="h-8 w-auto" />
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-[var(--muted)]">
            <a href="#features" className="hover:text-[var(--text)]">Features</a>
            <a href="#how-it-works" className="hover:text-[var(--text)]">How It Works</a>
            <a href="#templates" className="hover:text-[var(--text)]">Templates</a>
            <a href="#pricing" className="hover:text-[var(--text)]">Pricing</a>
          </nav>
          <p className="text-sm text-[var(--muted)]">© 2026 BrightHub. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}