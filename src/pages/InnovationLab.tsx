import { Briefcase, Box, Cpu, Building, Radio, ArrowRight } from 'lucide-react';
import type { Route } from '../lib/router';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';

type InnovationLabProps = {
  navigate: (to: Route) => void;
};

const focusAreas = [
  { icon: Briefcase, title: 'Intelligent Workplaces', desc: 'AI-enabled collaboration environments.' },
  { icon: Box, title: 'Digital Twins', desc: 'Virtual representations of physical systems and operations.' },
  { icon: Cpu, title: 'Autonomous Operations', desc: 'Data-driven automation and decision intelligence.' },
  { icon: Building, title: 'Smart Building Technologies', desc: 'Connected environments that adapt and optimize in real time.' },
  { icon: Radio, title: 'Edge Intelligence', desc: 'Bringing AI closer to operational environments for faster decision-making.' },
];

export function InnovationLab({ navigate }: InnovationLabProps) {
  return (
    <div>
      <PageHero
        label="Teranode1 Innovation Lab"
        title={<>Shaping the Future of <span className="text-gradient">Intelligent Environments</span></>}
        subtitle="The Innovation Lab explores emerging technologies and develops next-generation solutions that combine IT, AV, Data Analytics, Machine Learning, and Artificial Intelligence."
      />

      {/* Focus areas */}
      <section className="py-16 lg:py-24">
        <div className="container-page">
          <Reveal>
            <div className="max-w-2xl">
              <span className="section-label">
                <span className="h-px w-8 bg-brand-400" />
                Focus Areas
              </span>
              <h2 className="heading-2 mt-5 text-white">
                Where we're pushing boundaries
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {focusAreas.map((area, i) => (
              <Reveal key={area.title} delay={i * 80}>
                <div className="card card-hover p-8 h-full group flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-600/15 border border-brand-600/30 text-brand-400 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-600/25">
                    <area.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">{area.title}</h3>
                    <p className="mt-2.5 text-sm text-ink-400 leading-relaxed">{area.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}

            {/* CTA card as 6th tile */}
            <Reveal delay={focusAreas.length * 80}>
              <div className="relative overflow-hidden rounded-2xl border border-brand-600/30 bg-gradient-to-br from-brand-950/60 to-ink-900 p-8 h-full flex flex-col justify-center group">
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-brand-600/20 blur-[60px]" />
                <div className="relative">
                  <h3 className="font-display text-xl font-bold text-white">
                    Explore the lab with us
                  </h3>
                  <p className="mt-2.5 text-sm text-ink-300 leading-relaxed">
                    Partner with our innovation team to prototype what's next for your organization.
                  </p>
                  <button onClick={() => navigate('/contact')} className="btn-primary mt-6">
                    Start a Conversation
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
