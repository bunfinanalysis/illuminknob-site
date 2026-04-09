import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside: ReactNode;
};

export function PageHero({ eyebrow, title, description, aside }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgba(103,214,255,0.14),transparent_58%)]" />
      <div className="container-shell">
        <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur md:grid-cols-[1.2fr_0.8fr] md:p-12">
          <div className="max-w-3xl">
            <span className="section-kicker">{eyebrow}</span>
            <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {description}
            </p>
          </div>
          <div className="surface-panel p-6">{aside}</div>
        </div>
      </div>
    </section>
  );
}

