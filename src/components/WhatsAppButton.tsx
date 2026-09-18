import { MessageCircle } from "lucide-react";
import { site, waLink } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={waLink(`Hello ${site.name}, I need help with a service.`)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
