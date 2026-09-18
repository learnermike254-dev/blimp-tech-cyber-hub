import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { services } from "@/data/services";
import { site, waLink } from "@/data/site";

const searchSchema = z.object({ service: z.string().optional() });

export const Route = createFileRoute("/booking")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Book a Service — Blimp Tech Cyber Nairobi" },
      {
        name: "description",
        content:
          "Reserve a slot at Blimp Tech Cyber Nairobi for documents, government applications, tech consultation or training.",
      },
      { property: "og:title", content: "Book a Service — Blimp Tech Cyber" },
      { property: "og:description", content: "Pick a service, date and time — we confirm on WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookingPage,
});

const inputClass =
  "mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-accent";

function BookingPage() {
  const { service } = Route.useSearch();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: service ?? services[0].slug,
    date: "",
    time: "",
    notes: "",
  });

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const chosen = services.find((s) => s.slug === form.service)?.title ?? form.service;
    const message = [
      `*New booking — ${site.name}*`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : "",
      `Service: ${chosen}`,
      `Preferred: ${form.date} ${form.time}`,
      form.notes ? `Notes: ${form.notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(message), "_blank");
  }

  return (
    <div>
      <PageHeader
        eyebrow="Booking"
        title="Book a service"
        subtitle="Fill in your details and we will confirm your slot on WhatsApp within business hours."
      />

      <div className="mx-auto max-w-2xl px-4 py-14">
        <form onSubmit={submit} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium sm:col-span-2">
              Full name
              <input required value={form.name} onChange={set("name")} className={inputClass} />
            </label>
            <label className="text-sm font-medium">
              Phone number
              <input
                required
                type="tel"
                value={form.phone}
                onChange={set("phone")}
                placeholder="07XX XXX XXX"
                className={inputClass}
              />
            </label>
            <label className="text-sm font-medium">
              Email (optional)
              <input type="email" value={form.email} onChange={set("email")} className={inputClass} />
            </label>
            <label className="text-sm font-medium sm:col-span-2">
              Service
              <select value={form.service} onChange={set("service")} className={inputClass}>
                {services.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm font-medium">
              Preferred date
              <input required type="date" value={form.date} onChange={set("date")} className={inputClass} />
            </label>
            <label className="text-sm font-medium">
              Preferred time
              <input required type="time" value={form.time} onChange={set("time")} className={inputClass} />
            </label>
            <label className="text-sm font-medium sm:col-span-2">
              Notes
              <textarea
                rows={4}
                value={form.notes}
                onChange={set("notes")}
                placeholder="Tell us what you need, e.g. CV rewrite plus two printed copies."
                className={inputClass}
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
          >
            <MessageCircle className="size-4" /> Send booking via WhatsApp
          </button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Prefer to call? Dial {site.phone} during business hours.
          </p>
        </form>
      </div>
    </div>
  );
}
