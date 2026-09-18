import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/data/services";
import { posts } from "@/data/posts";

const staticPaths = ["/", "/services", "/pricing", "/about", "/contact", "/booking", "/blog", "/faq"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const urls = [
          ...staticPaths,
          ...services.map((s) => `/services/${s.slug}`),
          ...posts.map((p) => `/blog/${p.slug}`),
        ];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${origin}${u}</loc></url>`).join("\n")}
</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml" } });
      },
    },
  },
});
