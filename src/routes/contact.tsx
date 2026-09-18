import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, Clock, Smartphone } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { site, waLink } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Blimp Tech Cyber Nairobi" },
      {
        name: "description",
        content:
          "Call, WhatsApp or email Blimp Tech Cyber in Nairobi. See our business hours, location and M-Pesa payment details.",
      },
      { property: "og:title", content: "Contact — Blimp Tech Cyber" },
      { property: "og:description", content: "Phone, WhatsApp, email, location and opening hours." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const inputClass =
  "mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-accent";

function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    window.open(
      waLink(`*Message from website*\nName: ${form.name}\nPhone: ${form.phone}\n\n${form.message}`),
      "_blank",
    );
  }

  return (
    <div>
      <PageHeader
        eyebrow="Contact"
        title="Talk to us"
        subtitle="We reply fastest on WhatsApp. Walk-ins are always welcome during business hours."
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-lg font-semibold">Reach us</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="size-4 text-accent" />
                <a href={`tel:${site.phoneIntl}`}>{site.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="size-4 text-accent" />
                <a href={waLink(`Hello ${site.name}!`)} target="_blank" rel="noreferrer">
                  WhatsApp {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 text-accent" />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-4 text-accent" /> {site.city}
              </li>
              <li className="flex items-center gap-3">
                <Smartphone className="size-4 text-accent" /> M-Pesa: {site.mpesa}
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="flex items-center gap-2 font-display text-lg font-semibold">
              <Clock className="size-4 text-accent" /> Business hours
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {site.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span className="text-muted-foreground">{h.day}</span>
                  <span className="font-medium">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Blimp Tech Cyber location in Nairobi"
              src="https://www.google.com/maps?q=Nairobi,Kenya&output=embed"
              className="h-64 w-full"
              loading="lazy"
            />
          </div>
        </div>

        <form onSubmit={submit} className="h-fit rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="font-display text-lg font-semibold">Send a message</h2>
          <label className="mt-4 block text-sm font-medium">
            Name
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
            />
          </label>
          <label className="mt-4 block text-sm font-medium">
            Phone
            <input
              required
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={inputClass}
            />
          </label>
          <label className="mt-4 block text-sm font-medium">
            Message
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={inputClass}
            />
          </label>
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
          >
            Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
