import { type ReactNode } from 'react';
import { Reveal } from './Reveal';

type PageHeroProps = {
  label: string;
  title: ReactNode;
  subtitle: string;
};

export function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-72 w-[600px] rounded-full bg-brand-600/20 blur-[120px]" />

      <div className="container-page relative">
        <Reveal>
          <span className="section-label">
            <span className="h-px w-8 bg-brand-400" />
            {label}
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="heading-1 mt-5 max-w-4xl text-white">{title}</h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="body-lg mt-6 max-w-2xl">{subtitle}</p>
        </Reveal>
      </div>
    </section>
  );
}
