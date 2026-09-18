import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  MessageCircle,
  Zap,
  Wallet,
  ShieldCheck,
  HeartHandshake,
  Star,
  Printer,
  Landmark,
  Globe,
  GraduationCap,
  ShoppingBag,
} from "lucide-react";
import heroImg from "@/assets/hero-cafe.jpg";
import { services } from "@/data/services";
import { site, waLink } from "@/data/site";

const icons = { Printer, Landmark, Globe, ShieldCheck, GraduationCap, ShoppingBag };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blimp Tech Cyber — Cyber Cafe & Tech Hub in Nairobi" },
      {
        name: "description",
        content:
          "Blimp Tech Cyber is a Nairobi tech hub offering secretarial work, eCitizen & KRA services, job applications, cyber security consultation, e-learning materials and tech products.",
      },
      { property: "og:title", content: "Blimp Tech Cyber — A Tech Hub Full of Modern Tech Solutions" },
      {
        property: "og:description",
        content:
          "Secretarial services, government services, tech consultation and cyber security expertise in Nairobi, Kenya.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: site.name,
          description: site.tagline,
          telephone: site.phoneIntl,
          email: site.email,
          address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
        }),
      },
    ],
  }),
  component: Home,
});

const why = [
  { icon: Zap, title: "Fast turnaround", text: "Most walk-in jobs are done while you wait." },
  { icon: Wallet, title: "Affordable", text: "Clear, student-friendly pricing with no surprises." },
  { icon: ShieldCheck, title: "Tech-savvy", text: "Led by a cyber security and web development expert." },
  { icon: HeartHandshake, title: "Trusted", text: "Your documents and data stay confidential." },
];

const testimonials = [
  {
    name: "Brian O.",
    role: "Job seeker",
    text: "They rewrote my CV and I got two interview calls the same week. Very professional.",
  },
  {
    name: "Wanjiru M.",
    role: "Small business owner",
    text: "Set up my website and secured my business accounts. Explained everything in plain language.",
  },
  {
    name: "Kevin A.",
    role: "Student",
    text: "HELB and KRA sorted in one visit. Fair prices and no long queues.",
  },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden text-navy-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
              {site.city}
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl">
              A Tech Hub Full of <span className="text-accent">Modern Tech Solutions</span>
            </h1>
            <p className="mt-5 max-w-xl text-navy-foreground/75">
              From CVs and eCitizen applications to cyber security, brand creation and website
              development — Blimp Tech Cyber is where students, job seekers and small businesses get
              things done properly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-semibold text-amber-foreground transition-transform hover:scale-[1.03]"
              >
                Book a Service <ArrowRight className="size-4" />
              </Link>
              <a
                href={waLink(`Hello ${site.name}, I would like to enquire about your services.`)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/10 px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent/20"
              >
                <MessageCircle className="size-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="Inside Blimp Tech Cyber, a modern cyber cafe in Nairobi"
              width={1600}
              height={912}
              className="rounded-3xl border border-white/10 shadow-[var(--shadow-glow)]"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">What we do</p>
          <h2 className="mt-3 font-display text-3xl font-bold">Our services</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
            Six service areas covering everything from a single photocopy to a full business tech
            setup.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = icons[s.icon as keyof typeof icons] ?? Printer;
            return (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="card-hover group rounded-2xl border border-border bg-card p-6"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-foreground/80 group-hover:gap-2">
                  View details <ArrowRight className="size-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-center font-display text-3xl font-bold">Why choose us</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w) => (
              <div key={w.title} className="rounded-2xl bg-card p-6 shadow-[var(--shadow-soft)]">
                <w.icon className="size-6 text-accent" />
                <h3 className="mt-4 font-display text-base font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center font-display text-3xl font-bold">What clients say</h2>
        <div className="mt-10 flex snap-x gap-6 overflow-x-auto pb-4">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="min-w-[280px] flex-1 snap-start rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex gap-1 text-amber">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm text-muted-foreground">“{t.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold">
                {t.name} <span className="font-normal text-muted-foreground">· {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-4">
        <div className="hero-gradient rounded-3xl px-6 py-12 text-center text-navy-foreground">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Ready when you are</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-navy-foreground/75">
            Book a slot online or simply walk in. Pay conveniently via M-Pesa — {site.mpesa}.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              to="/booking"
              className="rounded-full bg-amber px-6 py-3 text-sm font-semibold text-amber-foreground"
            >
              Book a Service
            </Link>
            <Link
              to="/pricing"
              className="rounded-full border border-accent/50 px-6 py-3 text-sm font-semibold text-accent"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
