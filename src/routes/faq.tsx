import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/data/site";

const faqs = [
  {
    q: "Do I need to book, or can I just walk in?",
    a: "Walk-ins are welcome during business hours. Booking simply guarantees you a slot and lets us prepare anything you need in advance.",
  },
  {
    q: "How do I pay?",
    a: `Cash or M-Pesa. Our payment number is ${site.mpesa}. Ask for a receipt on any job above KES 1,000.`,
  },
  {
    q: "Are government fees included in your prices?",
    a: "No. Our service fee covers the assistance and submission. Official eCitizen, KRA, NTSA or DCI fees are paid separately at the government rate.",
  },
  {
    q: "How long does a CV rewrite take?",
    a: "Usually the same day. Bring your current CV or your details and certificates, and we will deliver a formatted digital copy plus printed copies.",
  },
  {
    q: "Is my personal data safe with you?",
    a: "Yes. Documents are deleted from our machines after the job unless you ask us to keep them, and we never share your details with third parties.",
  },
  {
    q: "Do you build websites for small businesses?",
    a: "We do — domain, hosting, email, design and maintenance. Book a consultation and we will scope it to your budget.",
  },
  {
    q: "Can you help remotely if I am not in Nairobi?",
    a: "Many services, including CVs, online applications and consultations, can be handled over WhatsApp and email.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Blimp Tech Cyber Nairobi" },
      {
        name: "description",
        content:
          "Answers about booking, payment via M-Pesa, government fees, turnaround times and data privacy at Blimp Tech Cyber Nairobi.",
      },
      { property: "og:title", content: "FAQ — Blimp Tech Cyber" },
      { property: "og:description", content: "Common questions about our services, prices and process." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      <PageHeader
        eyebrow="FAQ"
        title="Questions we hear often"
        subtitle="If your question is not here, message us on WhatsApp and we will answer quickly."
      />

      <div className="mx-auto max-w-3xl px-4 py-14">
        <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold"
                aria-expanded={open === i}
              >
                {f.q}
                <ChevronDown
                  className={`size-4 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
