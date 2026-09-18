export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="hero-gradient text-navy-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
        )}
        <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-sm text-navy-foreground/75 sm:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
