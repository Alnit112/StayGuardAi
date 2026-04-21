import React, { useState } from "react";

const CALENDLY_URL = "https://calendly.com/ratkocerialnit/demo-meeting";
const CONTACT_EMAIL = "ratkocerialnit@gmail.com";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Container({ children, className }) {
  return (
    <div className={cn("mx-auto w-full max-w-5xl px-4 sm:px-6", className)}>
      {children}
    </div>
  );
}

function Button({ href, children, variant = "primary", className }) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:ring-offset-2 focus:ring-offset-slate-950";
  const styles =
    variant === "primary"
      ? "bg-indigo-500 text-white hover:bg-indigo-400 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30"
      : "border border-slate-700 bg-slate-900/60 text-slate-100 hover:bg-slate-800 hover:border-slate-600";
  return (
    <a
      className={cn(base, styles, className)}
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

/* ─── Nav ─────────────────────────────────────────────── */

function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-indigo-500/20 border border-indigo-500/30">
            <span className="text-xs font-black text-indigo-300">SG</span>
          </div>
          <span className="text-sm font-extrabold text-white">StayGuard AI</span>
        </a>

        <div className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
          <a className="transition hover:text-white" href="#how">How it works</a>
          <a className="transition hover:text-white" href="#who">Who it's for</a>
          <a className="transition hover:text-white" href="#pricing">Pricing</a>
          <a className="transition hover:text-white" href="#contact">Contact</a>
        </div>

        <Button href={CALENDLY_URL} variant="primary" className="py-2 px-4 text-xs">
          Book a Demo
        </Button>
      </Container>
    </nav>
  );
}

/* ─── Hero ────────────────────────────────────────────── */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden py-20 sm:py-28">
      {/* background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute top-20 right-0 h-72 w-72 rounded-full bg-purple-600/15 blur-3xl" />
      </div>

      <Container className="relative text-center">
        {/* pill badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          AI-powered guest risk protection
        </span>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Prevent Bad Reviews<br />
          <span className="text-indigo-400">Before They Happen</span>
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
          AI that flags risky Airbnb guest messages before they escalate.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={CALENDLY_URL} variant="primary">
            Book a Free Demo
          </Button>
          <a
            href="#how"
            className="text-sm font-semibold text-slate-400 transition hover:text-white"
          >
            See how it works →
          </a>
        </div>

        {/* social proof strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-400">✓</span> No bad-review surprises
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-400">✓</span> Works with Airbnb messages
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-400">✓</span> 5-minute setup
          </span>
        </div>
      </Container>
    </section>
  );
}

/* ─── How It Works ────────────────────────────────────── */

function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: "💬",
      title: "Guest sends a message",
      desc: "A guest reaches out on Airbnb. StayGuard AI reads the message the moment it arrives.",
    },
    {
      num: "02",
      icon: "🧠",
      title: "StayGuard AI classifies the risk level",
      desc: "Our model scores every message as Low, Medium, or High risk — instantly, with no manual effort from you.",
    },
    {
      num: "03",
      icon: "🚨",
      title: "You get an alert if it's high risk",
      desc: "High-risk messages trigger an immediate alert so you can step in before the situation becomes a bad review.",
    },
  ];

  return (
    <section id="how" className="py-16 sm:py-24">
      <Container>
        <div className="text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-400">
            How it works
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Three steps. Zero guesswork.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-400">
            StayGuard AI runs quietly in the background, protecting your ratings around the clock.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-500/40"
            >
              {/* connector line on desktop */}
              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 md:block">
                  <div className="h-px w-6 bg-slate-700" />
                </div>
              )}
              <div className="mb-4 flex items-center gap-3">
                <span className="text-2xl">{step.icon}</span>
                <span className="text-xs font-bold text-indigo-400/70">{step.num}</span>
              </div>
              <h3 className="text-base font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ─── Who It's For ────────────────────────────────────── */

function WhoItsFor() {
  const personas = [
    {
      icon: "🏠",
      title: "Airbnb Property Managers",
      desc: "Managing guest communications across multiple listings? StayGuard AI handles the screening so you focus on hospitality, not firefighting.",
    },
    {
      icon: "🏢",
      title: "Short Let Companies",
      desc: "Running a short-let business at scale means one bad guest can cost you thousands. Catch red flags before check-in.",
    },
    {
      icon: "📋",
      title: "Multi-Property Hosts",
      desc: "Whether you have 2 properties or 20, StayGuard AI gives you a consistent early-warning system across your entire portfolio.",
    },
  ];

  return (
    <section id="who" className="py-16 sm:py-24 bg-slate-900/30">
      <Container>
        <div className="text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Who it's for
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Built for serious short-let operators
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-400">
            If your business depends on 5-star reviews, StayGuard AI is for you.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {personas.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-slate-700"
            >
              <span className="text-3xl">{p.icon}</span>
              <h3 className="mt-4 text-base font-bold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ─── Pricing ─────────────────────────────────────────── */

function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "£79",
      desc: "Perfect for single-property hosts.",
      features: ["1 property", "Risk classification (Low / Medium / High)", "High-risk alerts", "Incident tracking"],
      cta: "Book a Demo",
    },
    {
      name: "Professional",
      price: "£149",
      desc: "Best for hosts growing a portfolio.",
      features: ["Up to 5 properties", "Everything in Starter", "Priority escalation alerts", "Monthly optimisation"],
      cta: "Book a Demo",
      highlight: true,
    },
    {
      name: "Portfolio",
      price: "£299",
      desc: "For larger operators at scale.",
      features: ["Up to 15 properties", "Everything in Professional", "Advanced escalation rules", "Priority support"],
      cta: "Book a Demo",
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Custom workflows for large operators.",
      features: ["15+ properties", "Custom workflows & integrations", "Dedicated account manager", "SLA guarantee"],
      cta: "Get in Touch",
    },
  ];

  return (
    <section id="pricing" className="py-16 sm:py-24">
      <Container>
        <div className="text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Pricing
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Simple pricing. No surprises.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-400">
            Early access pricing — limited beta spots available. Book a demo to lock in your rate.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 flex flex-col",
                plan.highlight
                  ? "border-indigo-500/50 bg-indigo-500/10 shadow-xl shadow-indigo-500/10"
                  : "border-slate-800 bg-slate-900/50"
              )}
            >
              {plan.highlight && (
                <div className="mb-4 inline-flex self-start rounded-full border border-indigo-400/30 bg-indigo-400/10 px-2.5 py-0.5 text-xs font-semibold text-indigo-300">
                  Most popular
                </div>
              )}
              <div className="text-sm font-bold text-white">{plan.name}</div>
              <div className="mt-2 text-3xl font-extrabold text-white">
                {plan.price}
                {plan.price !== "Custom" && (
                  <span className="ml-1 text-sm font-normal text-slate-400">/mo</span>
                )}
              </div>
              <p className="mt-1 text-xs text-slate-400">{plan.desc}</p>
              <ul className="mt-5 flex-1 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="mt-0.5 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button
                  href={plan.name === "Enterprise" ? `mailto:${CONTACT_EMAIL}` : CALENDLY_URL}
                  variant={plan.highlight ? "primary" : "secondary"}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-slate-600">
          All plans billed monthly. Cancel anytime. Prices exclude VAT.
        </p>
      </Container>
    </section>
  );
}

/* ─── Contact ─────────────────────────────────────────── */

function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sent

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      "StayGuard AI Enquiry — " + (data.get("name") || "")
    )}&body=${encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
    )}`;
    window.location.href = mailto;
    setStatus("sent");
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-900/30">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Contact
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Get in touch
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Questions before booking a demo? Drop us a message or email us directly at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-indigo-400 underline underline-offset-2 hover:text-indigo-300"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 max-w-lg rounded-2xl border border-slate-800 bg-slate-900/60 p-7 space-y-4"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-slate-300">
                Name
              </label>
              <input
                name="name"
                required
                type="text"
                placeholder="Jane Smith"
                className="w-full rounded-xl border border-slate-700 bg-slate-800/60 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-slate-300">
                Email
              </label>
              <input
                name="email"
                required
                type="email"
                placeholder="jane@example.com"
                className="w-full rounded-xl border border-slate-700 bg-slate-800/60 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40"
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold text-slate-300">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Tell us about your property portfolio and what you're looking for..."
              className="w-full rounded-xl border border-slate-700 bg-slate-800/60 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition duration-200 hover:bg-indigo-400"
          >
            {status === "sent" ? "Message prepared — check your email client" : "Send Message"}
          </button>
        </form>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={CALENDLY_URL} variant="primary">
            Or book a 15-min demo call
          </Button>
        </div>
      </Container>
    </section>
  );
}

/* ─── Footer ──────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="border-t border-slate-800/60 py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-indigo-500/20 border border-indigo-500/30">
              <span className="text-xs font-black text-indigo-300">SG</span>
            </div>
            <div>
              <div className="text-sm font-extrabold text-white">StayGuard AI</div>
              <div className="text-xs text-slate-500">Prevent bad reviews before they happen</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-500">
            <a className="transition hover:text-slate-300" href="#how">How it works</a>
            <a className="transition hover:text-slate-300" href="#who">Who it's for</a>
            <a className="transition hover:text-slate-300" href="#pricing">Pricing</a>
            <a className="transition hover:text-slate-300" href="#contact">Contact</a>
          </div>

          <div className="text-xs text-slate-600">
            © {new Date().getFullYear()} StayGuard AI
          </div>
        </div>
      </Container>
    </footer>
  );
}

/* ─── App ─────────────────────────────────────────────── */

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 antialiased">
      <Nav />
      <Hero />
      <HowItWorks />
      <WhoItsFor />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
