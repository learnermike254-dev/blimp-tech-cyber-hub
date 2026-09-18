import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { getService } from "@/data/services";
import { site, waLink } from "@/data/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found — Blimp Tech Cyber" }, { name: "robots", content: "noindex" }] };
    }
    const { service } = loaderData;
    return {
      meta: [
        { title: `${service.title} — Blimp Tech Cyber Nairobi` },
        { name: "description", content: service.summary },
        { property: "og:title", content: `${service.title} — Blimp Tech Cyber` },
        { property: "og:description", content: service.summary },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();

  return (
    <div>
      <PageHeader eyebrow="Service" title={service.title} subtitle={service.description} />

      <div className="mx-auto max-w-4xl px-4 py-14">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> All services
        </Link>

        <div className="mt-6 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary">
              <tr>
                <th className="px-5 py-3 font-display font-semibold">Sub-service</th>
                <th className="px-5 py-3 text-right font-display font-semibold">Price</th>
              </tr>
            </thead>
            <tbody>
              {service.items.map((item) => (
                <tr key={item.name} className="border-t border-border">
                  <td className="px-5 py-3">
                    <span className="flex items-start gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                      {item.name}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-5 py-3 text-right font-semibold">
                    {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          Prices are indicative and may vary with volume or complexity. Government fees are charged
          separately at the official rate.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/booking"
            search={{ service: service.slug }}
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Book this service
          </Link>
          <a
            href={waLink(`Hello ${site.name}, I'd like help with ${service.title}.`)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
          >
            <MessageCircle className="size-4" /> Ask on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
