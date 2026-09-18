import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Smartphone } from "lucide-react";
import { site } from "@/data/site";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="mt-20 bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-display text-lg font-bold">
            Blimp Tech <span className="text-accent">Cyber</span>
          </h3>
          <p className="mt-3 text-sm text-navy-foreground/70">{site.tagline}</p>
          <p className="mt-4 flex items-center gap-2 text-sm text-navy-foreground/70">
            <MapPin className="size-4 text-accent" /> {site.city}
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-accent">
            Quick links
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/70">
            {[
              { to: "/services", label: "Services" },
              { to: "/pricing", label: "Pricing" },
              { to: "/booking", label: "Book a service" },
              { to: "/blog", label: "Blog" },
              { to: "/faq", label: "FAQ" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-accent">
            Services
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/70">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="transition-colors hover:text-accent"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-accent">
            Get in touch
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/70">
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-accent" />
              <a href={`tel:${site.phoneIntl}`} className="hover:text-accent">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-accent" />
              <a href={`mailto:${site.email}`} className="hover:text-accent">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Smartphone className="mt-0.5 size-4 text-accent" />
              <span>
                Pay via M-Pesa
                <br />
                {site.mpesa}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10 px-4 py-5 text-center text-xs text-navy-foreground/60">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
