import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Code2, Sparkles, Cpu } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Blimp Tech Cyber Nairobi" },
      {
        name: "description",
        content:
          "Blimp Tech Cyber is a Nairobi tech hub run by a cyber security expert and web developer offering brand creation, websites and everyday cyber services.",
      },
      { property: "og:title", content: "About — Blimp Tech Cyber" },
      {
        property: "og:description",
        content: "Cyber security, web development, brand creation and practical tech solutions in Nairobi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const skills = [
  {
    icon: ShieldCheck,
    title: "Cyber Security Expert",
    text: "Account protection, device hardening, phishing and fraud defence, and practical security audits for small businesses.",
  },
  {
    icon: Code2,
    title: "Website Development",
    text: "Fast, mobile-ready business websites with domains, hosting, email setup and ongoing maintenance.",
  },
  {
    icon: Sparkles,
    title: "Brand Creation & Expansion",
    text: "Naming, logo and identity, social presence and a growth plan that fits a Kenyan market budget.",
  },
  {
    icon: Cpu,
    title: "Other Technological Solutions",
    text: "Device advisory, software setup, digital marketing starter packs and training for teams and individuals.",
  },
];

function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow="About us"
        title="A neighbourhood cyber with real tech depth"
        subtitle={`${site.name} started with a simple idea: people in ${site.city} deserve more than a printer and a queue. They deserve advice they can trust.`}
      />

      <div className="mx-auto max-w-4xl px-4 py-14">
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>
            We serve students, job seekers, small business owners and walk-in clients. On any given
            day that means a CV rewrite, a KRA return, a HELB compliance certificate, a laptop
            recommendation and a business website — all under one roof.
          </p>
          <p>
            What makes us different is the expertise behind the counter. Beyond everyday cyber work,
            we bring years of hands-on skill in cyber security, web development and brand building,
            so the advice you get here holds up long after you leave.
          </p>
        </div>

        <h2 className="mt-12 font-display text-2xl font-bold">Skills we bring to the table</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {skills.map((s) => (
            <div key={s.title} className="card-hover rounded-2xl border border-border bg-card p-6">
              <s.icon className="size-6 text-accent" />
              <h3 className="mt-4 font-display text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-secondary p-6 text-center">
          <p className="font-display text-lg font-semibold">Need any of this for your business?</p>
          <Link
            to="/booking"
            className="mt-4 inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Book a consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
