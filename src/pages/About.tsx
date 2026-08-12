import { Target, Eye, Compass, UserPlus, Link2, CalendarClock, ScanLine, ShieldCheck, ArrowRight } from 'lucide-react';
import type { Route } from '../lib/router';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';

type AboutProps = {
  navigate: (to: Route) => void;
};

const values = [
  { icon: UserPlus, title: 'Human Amplification', desc: 'Technology should elevate human capability, not replace it.' },
  { icon: Link2, title: 'Connected Thinking', desc: 'The greatest value emerges when people, systems, and intelligence work together.' },
  { icon: CalendarClock, title: 'Future Built Daily', desc: 'Innovation is not a destination. It is a continuous discipline.' },
  { icon: ScanLine, title: 'Clarity Over Complexity', desc: 'We simplify technology to accelerate decisions and outcomes.' },
  { icon: ShieldCheck, title: 'Earned Trust', desc: 'Partnerships are built through integrity, transparency, and delivery.' },
  { icon: Compass, title: 'Relentless Progress', desc: 'We challenge assumptions, embrace change, and continuously improve.' },
];

const disciplines = [
  'Information Technology',
  'Cloud Solutions',
  'Intelligent AV Environments',
  'Data Analytics',
  'Machine Learning',
  'Artificial Intelligence',
];

export function About({ navigate }: AboutProps) {
  return (
    <div>
      <PageHero
        label="About Teranode1"
        title={<>Engineering the Future of <span className="text-gradient">Intelligent Business</span></>}
        subtitle="Teranode1 was founded with a vision to help organizations navigate digital transformation through the intelligent integration of technology, data, and human collaboration."
      />

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <Reveal className="lg:col-span-3">
              <span className="section-label">
                <span className="h-px w-8 bg-brand-400" />
                Our Story
              </span>
              <div className="mt-6 space-y-5">
                <p className="body-lg">
                  We believe the future belongs to organizations that can connect infrastructure, information, automation, and intelligence into a unified business ecosystem.
                </p>
                <p className="body-lg">
                  Our expertise spans Information Technology, Cloud Solutions, Intelligent AV Environments, Data Analytics, Machine Learning, and Artificial Intelligence.
                </p>
                <p className="body-lg">
                  By combining these disciplines, we help clients create intelligent connected environments that drive measurable business outcomes.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-2">
              <div className="card p-7">
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-ink-400 mb-5">
                  Our Expertise
                </h3>
                <ul className="space-y-3">
                  {disciplines.map((d) => (
                    <li key={d} className="flex items-center gap-3 text-sm text-ink-200">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-600/15 border border-brand-600/30 text-brand-400 shrink-0">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section className="relative py-16 lg:py-20 border-t border-ink-800/50">
        <div className="absolute inset-0 bg-grid-fine opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-[600px] rounded-full bg-brand-700/10 blur-[120px]" />
        <div className="container-page relative">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="section-label justify-center">
                <span className="h-px w-8 bg-brand-400" />
                Our Purpose
                <span className="h-px w-8 bg-brand-400" />
              </span>
              <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-6 text-gradient-animated leading-tight">
                To transform complexity into intelligence.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-16 lg:py-24 border-t border-ink-800/50">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="card card-hover p-8 lg:p-10 h-full group">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600/15 border border-brand-600/30 text-brand-400 transition-transform duration-500 group-hover:scale-110">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mt-6">Our Mission</h3>
                <p className="body-lg mt-4">
                  To help organizations unlock intelligence from every connection, every process, and every decision.
                </p>
                <p className="mt-3 text-sm text-ink-400 leading-relaxed">
                  We design and integrate the technologies that enable people, systems, and data to work together more effectively—creating environments that are smarter, faster, and more adaptive.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="card card-hover p-8 lg:p-10 h-full group">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-600/15 border border-accent-600/30 text-accent-400 transition-transform duration-500 group-hover:scale-110">
                  <Eye className="h-7 w-7" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mt-6">Our Vision</h3>
                <p className="body-lg mt-4">
                  To become a catalyst for the intelligent enterprise.
                </p>
                <p className="mt-3 text-sm text-ink-400 leading-relaxed">
                  We envision a future where every organization can seamlessly connect infrastructure, people, data, and artificial intelligence to unlock human potential, accelerate innovation, and create lasting impact.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 border-t border-ink-800/50">
        <div className="container-page">
          <Reveal>
            <div className="max-w-2xl">
              <span className="section-label">
                <span className="h-px w-8 bg-brand-400" />
                Our Values
              </span>
              <h2 className="heading-2 mt-5 text-white">The principles that guide us</h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <div className="card card-hover p-7 h-full group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/15 border border-brand-600/30 text-brand-400 transition-all duration-500 group-hover:scale-110">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white mt-5">{v.title}</h3>
                  <p className="mt-2.5 text-sm text-ink-400 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-ink-800 bg-gradient-to-br from-ink-900 to-brand-950/40 p-10 sm:p-14 text-center">
              <div className="absolute inset-0 bg-grid opacity-20" />
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-brand-600/20 blur-[100px]" />
              <div className="relative">
                <h2 className="heading-3 text-white max-w-xl mx-auto">
                  Let's build your intelligent connected environment together.
                </h2>
                <div className="mt-8">
                  <button onClick={() => navigate('/contact')} className="btn-primary">
                    Talk to an Expert
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
