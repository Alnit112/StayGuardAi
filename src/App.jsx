import React from "react";

const CALENDLY_URL = "https://calendly.com/ratkocerialnit/demo-meeting";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Container({ children, className }) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6", className)}>
      {children}
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-200">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
      {children}
    </span>
  );
}

function Button({ href, children, variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:ring-offset-2 focus:ring-offset-slate-950";
  const styles =
    variant === "primary"
      ? "bg-indigo-500 text-white hover:bg-indigo-400 hover:shadow-lg hover:shadow-indigo-500/20"
      : "border border-slate-800 bg-slate-900/60 text-slate-100 hover:bg-slate-900";
  return (
    <a className={cn(base, styles)} href={href} target="_blank" rel="noreferrer">
      {children}
      <span className="ml-2 text-slate-200/80">→</span>
    </a>
  );
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-indigo-300/90">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-sm leading-6 text-slate-300">{subtitle}</p>
      ) : null}
    </div>
  );
}

function Card({ children, className }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-800 bg-slate-900/40 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/60",
        className
      )}
    >
      {children}
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <Card>
      <div className="text-base font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm leading-6 text-slate-300">{desc}</div>
    </Card>
  );
}

function Step({ num, title, desc }) {
  return (
    <Card className="relative overflow-hidden">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-2xl" />
      <div className="flex items-start gap-4">
        <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-sm font-bold text-indigo-300">
          {num}
        </div>
        <div>
          <div className="text-base font-semibold text-white">{title}</div>
          <div className="mt-1 text-sm leading-6 text-slate-300">{desc}</div>
        </div>
      </div>
    </Card>
  );
}

function PriceCard({ name, price, desc, items, highlight }) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-6 transition duration-300 hover:-translate-y-1",
        highlight
          ? "border-indigo-500/60 bg-indigo-500/10 shadow-lg shadow-indigo-500/10"
          : "border-slate-800 bg-slate-900/40"
      )}
    >
      <div className="flex items-center justify-between">
        <div className="text-base font-semibold text-white">{name}</div>
        {highlight ? (
          <span className="rounded-full border border-indigo-400/40 bg-indigo-400/10 px-3 py-1 text-xs font-semibold text-indigo-200">
            Recommended
          </span>
        ) : null}
      </div>
      <div className="mt-3 text-3xl font-bold tracking-tight text-white">
        {price}
        <span className="ml-2 text-sm font-semibold text-slate-300">/ month</span>
      </div>
      <p className="mt-2 text-sm leading-6 text-slate-300">{desc}</p>
      <ul className="mt-5 space-y-2 text-sm text-slate-200">
        {items.map((x) => (
          <li key={x} className="flex gap-2">
            <span className="mt-1 h-2 w-2 flex-none rounded-full bg-emerald-400" />
            <span className="leading-6 text-slate-300">{x}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Button href={CALENDLY_URL} variant={highlight ? "primary" : "secondary"}>
          Book a demo
        </Button>
      </div>
    </div>
  );
}

function FAQItem({ q, a }) {
  return (
    <details className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition duration-300 open:border-slate-700">
      <summary className="cursor-pointer list-none text-sm font-semibold text-white">
        <div className="flex items-center justify-between gap-4">
          <span>{q}</span>
          <span className="text-slate-400 transition duration-300 group-open:rotate-45">
            +
          </span>
        </div>
      </summary>
      <p className="mt-3 text-sm leading-6 text-slate-300">{a}</p>
    </details>
  );
}

function Nav() {
  return (
    <div className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/70 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl border border-slate-800 bg-slate-900/40">
            <span className="font-black text-indigo-300">SG</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-extrabold text-white">StayGuard AI</div>
            <div className="text-[11px] text-slate-400">Guest risk protection</div>
          </div>
        </a>

        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a className="transition hover:text-white" href="#how">
            How it works
          </a>
          <a className="transition hover:text-white" href="#features">
            Features
          </a>
          <a className="transition hover:text-white" href="#pricing">
            Pricing
          </a>
          <a className="transition hover:text-white" href="#faq">
            FAQ
          </a>
        </div>

        <div className="flex items-center gap-2">
          <Button href={CALENDLY_URL} variant="secondary">
            Book demo
          </Button>
          <Button href={CALENDLY_URL} variant="primary">
            Get access
          </Button>
        </div>
      </Container>
    </div>
  );
}

function Hero() {
  return (
    <div id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950/95" />
      </div>

      <Container className="relative py-14 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <Badge>Built for Airbnb hosts & short-let operators</Badge>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Prevent bad reviews <span className="text-indigo-300">before</span>{" "}
            they happen.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
            StayGuard AI monitors guest messages, replies instantly, and escalates
            high-risk situations automatically — so you stay in control even when
            you’re busy.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={CALENDLY_URL} variant="primary">
              Book a 15-min demo
            </Button>
            <a
              className="text-sm font-semibold text-slate-300 transition hover:text-white"
              href="#how"
            >
              See how it works →
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Card>
              <div className="text-sm font-semibold text-white">Instant replies</div>
              <div className="mt-1 text-xs text-slate-300">
                Low/Medium messages handled automatically
              </div>
            </Card>
            <Card>
              <div className="text-sm font-semibold text-white">Incident tracking</div>
              <div className="mt-1 text-xs text-slate-300">
                Repeated issues trigger escalation
              </div>
            </Card>
            <Card>
              <div className="text-sm font-semibold text-white">High-risk alerts</div>
              <div className="mt-1 text-xs text-slate-300">
                Email escalation when it matters
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}

function HowItWorks() {
  return (
    <div id="how" className="py-14 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow="How it works"
          title="Simple workflow. Real protection."
          subtitle="StayGuard AI runs in the background: classify, reply, and escalate when needed."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Step
            num="1"
            title="Detect & classify"
            desc="Every incoming guest message is classified into Low / Medium / High with a risk score."
          />
          <Step
            num="2"
            title="Reply instantly"
            desc="Low and Medium messages get immediate, on-brand responses — no waiting, no missed messages."
          />
          <Step
            num="3"
            title="Escalate automatically"
            desc="High risk or repeated incidents trigger escalation so you can intervene before reviews suffer."
          />
        </div>
      </Container>
    </div>
  );
}

function Features() {
  return (
    <div id="features" className="py-14 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow="What you get"
          title="Built for operators who care about ratings"
          subtitle="Everything is designed around response-time, complaint control, and preventing review damage."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Feature
            title="Risk-aware guest replies"
            desc="Fast responses that stay calm, professional, and de-escalating — especially in High-risk scenarios."
          />
          <Feature
            title="Incident tracking per booking"
            desc="Every Medium/High issue is tracked so repeated problems escalate automatically."
          />
          <Feature
            title="High-risk escalation alerts"
            desc="Get notified immediately when a message signals refunds, threats, safety issues, or Airbnb involvement."
          />
          <Feature
            title="Consistency across properties"
            desc="Standardize your messaging and escalation logic so quality stays high even as you scale."
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card>
            <div className="text-sm font-semibold text-white">Outcome</div>
            <div className="mt-2 text-sm text-slate-300">
              Faster response time and fewer missed messages.
            </div>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-white">Outcome</div>
            <div className="mt-2 text-sm text-slate-300">
              Better control of complaints before they become reviews.
            </div>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-white">Outcome</div>
            <div className="mt-2 text-sm text-slate-300">
              Less stress — escalation only when it matters.
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}

function Pricing() {
  return (
    <div id="pricing" className="py-14 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow="Pricing"
          title="Simple pricing for serious hosts"
          subtitle="Choose the plan that fits your portfolio. Early access pricing is available for a limited number of hosts."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4">
          <PriceCard
            name="Starter"
            price="£79"
            desc="Perfect for single-property hosts."
            items={[
              "1 property",
              "AI replies (Low / Medium / High)",
              "Incident tracking",
              "High-risk alerts",
            ]}
          />

          <PriceCard
            name="Professional"
            price="£149"
            desc="Best for hosts with multiple listings."
            items={[
              "Up to 5 properties",
              "Everything in Starter",
              "Priority escalation alerts",
              "Monthly optimisation",
            ]}
            highlight
          />

          <PriceCard
            name="Portfolio"
            price="£299"
            desc="For larger operators managing multiple listings."
            items={[
              "Up to 15 properties",
              "Everything in Professional",
              "Advanced escalation rules",
              "Priority support",
            ]}
          />

          <PriceCard
            name="Enterprise"
            price="Custom"
            desc="For professional operators with larger portfolios."
            items={[
              "15+ properties",
              "Custom workflows",
              "Custom integrations",
              "Dedicated support",
            ]}
          />
        </div>

        <div className="mt-8 text-center text-sm text-slate-400">
          Early access pricing — limited beta spots available.
        </div>
      </Container>
    </div>
  );
}

function FAQ() {
  return (
    <div id="faq" className="py-14 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow="FAQ"
          title="Quick answers"
          subtitle="Clear answers for hosts reviewing the product for the first time."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          <FAQItem
            q="Does it reply to guests automatically?"
            a="Yes — Low and Medium messages get instant replies. High risk also triggers escalation so you can intervene immediately."
          />
          <FAQItem
            q="What triggers High risk?"
            a="High risk triggers on severe dissatisfaction, threats, safety concerns, refund demands, Airbnb escalation language, or repeated incidents."
          />
          <FAQItem
            q="Can I control the tone and rules?"
            a="Yes. We tune templates and classification rules to match your brand and operational style."
          />
          <FAQItem
            q="Is it hard to set up?"
            a="No. We handle setup and connect it to your workflow so you can get running quickly."
          />
        </div>

        <div className="mt-10 flex justify-center">
          <Button href={CALENDLY_URL} variant="primary">
            Book a demo
          </Button>
        </div>
      </Container>
    </div>
  );
}

function Footer() {
  return (
    <div className="border-t border-slate-800/70 py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl border border-slate-800 bg-slate-900/40">
              <span className="font-black text-indigo-300">SG</span>
            </div>
            <div>
              <div className="text-sm font-extrabold text-white">StayGuard AI</div>
              <div className="text-xs text-slate-400">
                Prevent bad reviews before they happen
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-slate-300">
            <a className="transition hover:text-white" href="#how">
              How it works
            </a>
            <a className="transition hover:text-white" href="#features">
              Features
            </a>
            <a className="transition hover:text-white" href="#pricing">
              Pricing
            </a>
            <a className="transition hover:text-white" href="#faq">
              FAQ
            </a>
          </div>

          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} StayGuard AI. All rights reserved.
          </div>
        </div>
      </Container>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Nav />
      <Hero />
      <HowItWorks />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}