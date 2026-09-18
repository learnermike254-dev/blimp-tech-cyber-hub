import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Printer,
  Landmark,
  Globe,
  ShieldCheck,
  GraduationCap,
  ShoppingBag,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { services } from "@/data/services";

const icons = { Printer, Landmark, Globe, ShieldCheck, GraduationCap, ShoppingBag };

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Blimp Tech Cyber Nairobi" },
      {
        name: "description",
        content:
          "Secretarial services, eCitizen & government services, online applications, tech consultation, e-learning materials and tech products in Nairobi.",
      },
      { property: "og:title", content: "Services — Blimp Tech Cyber" },
      {
        property: "og:description",
        content: "Six service areas covering documents, government portals, tech and training.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Our services"
        title="Everything a modern cyber needs to offer"
        subtitle="Walk in for a quick photocopy or book us for a full business tech setup. Pick a category to see sub-services and prices."
      />
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:grid-cols-2 lg:grid-cols-3">
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
              <h2 className="mt-4 font-display text-lg font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.summary}</p>
              <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
                {s.items.slice(0, 3).map((i) => (
                  <li key={i.name}>• {i.name}</li>
                ))}
              </ul>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold group-hover:gap-2">
                View all & prices <ArrowRight className="size-4" />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
