import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { posts } from "@/data/posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog & Guides — Blimp Tech Cyber Nairobi" },
      {
        name: "description",
        content:
          "Practical Kenyan guides on KRA PIN registration, HELB deadlines, cyber security for small businesses and more from Blimp Tech Cyber.",
      },
      { property: "og:title", content: "Blog & Guides — Blimp Tech Cyber" },
      { property: "og:description", content: "Step-by-step guides for eCitizen, HELB, KRA and business tech." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div>
      <PageHeader
        eyebrow="Blog"
        title="Guides & news"
        subtitle="Straightforward walkthroughs of the services Kenyans ask us about most."
      />
      <div className="mx-auto max-w-4xl px-4 py-14">
        <div className="grid gap-6">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="card-hover group rounded-2xl border border-border bg-card p-6"
            >
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                {new Date(p.date).toLocaleDateString("en-KE", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}{" "}
                · {p.readTime}
              </p>
              <h2 className="mt-2 font-display text-xl font-bold">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold group-hover:gap-2">
                Read guide <ArrowRight className="size-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
