import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { getPost } from "@/data/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article unavailable — Blimp Tech Cyber" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — Blimp Tech Cyber` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            datePublished: post.date,
            author: { "@type": "Organization", name: "Blimp Tech Cyber" },
          }),
        },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();

  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> All guides
      </Link>
      <p className="mt-8 text-xs uppercase tracking-wide text-muted-foreground">
        {new Date(post.date).toLocaleDateString("en-KE", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}{" "}
        · {post.readTime}
      </p>
      <h1 className="mt-2 font-display text-3xl font-bold">{post.title}</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
        {post.body.map((para) => (
          <p key={para}>{para}</p>
        ))}
      </div>
      <div className="mt-10 rounded-2xl bg-secondary p-6 text-center">
        <p className="font-display text-base font-semibold">Need help with this in person?</p>
        <Link
          to="/booking"
          className="mt-4 inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
        >
          Book a service
        </Link>
      </div>
    </article>
  );
}
