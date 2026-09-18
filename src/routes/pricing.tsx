import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { services } from "@/data/services";
import { site } from "@/data/site";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Blimp Tech Cyber Nairobi" },
      {
        name: "description",
        content:
          "Transparent KES pricing for typing, printing, CVs, KRA, HELB, NTSA, tech consultation, training and tech products at Blimp Tech Cyber Nairobi.",
      },
      { property: "og:title", content: "Pricing — Blimp Tech Cyber" },
      { property: "og:description", content: "Clear, student-friendly prices in Kenyan shillings." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Pricing"
        title="Clear prices, no surprises"
        subtitle="All prices in Kenyan shillings. Government portal fees are charged separately at official rates."
      />

      <div className="mx-auto max-w-4xl px-4 py-14">
        {services.map((s) => (
          <section key={s.slug} className="mb-10">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-display text-xl font-bold">{s.title}</h2>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="text-sm font-semibold text-muted-foreground hover:text-foreground"
              >
                Details
              </Link>
            </div>
            <div className="mt-4 overflow-hidden rounded-2xl border border-border">
              <table className="w-full text-left text-sm">
                <tbody>
                  {s.items.map((item, idx) => (
                    <tr key={item.name} className={idx ? "border-t border-border" : ""}>
                      <td className="px-5 py-3">{item.name}</td>
                      <td className="whitespace-nowrap px-5 py-3 text-right font-semibold">
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

        <div className="rounded-2xl bg-secondary p-6 text-sm">
          <p className="font-semibold">Payment</p>
          <p className="mt-1 text-muted-foreground">
            Cash or M-Pesa — {site.mpesa}. Ask for a receipt on any job above KES 1,000.
          </p>
        </div>
      </div>
    </div>
  );
}
