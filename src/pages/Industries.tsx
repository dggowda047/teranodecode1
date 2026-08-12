import { Building2, GraduationCap, HeartPulse, Factory, Landmark, Building, ArrowRight } from 'lucide-react';
import type { Route } from '../lib/router';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';

type IndustriesProps = {
  navigate: (to: Route) => void;
};

const industries = [
  { icon: Building2, title: 'Enterprise & Corporate', desc: 'Enhance collaboration, streamline operations, and accelerate innovation.' },
  { icon: GraduationCap, title: 'Education', desc: 'Build intelligent learning environments and connected campuses.' },
  { icon: HeartPulse, title: 'Healthcare', desc: 'Improve communication, patient experiences, and operational workflows.' },
  { icon: Factory, title: 'Manufacturing', desc: 'Leverage automation, analytics, and predictive intelligence.' },
  { icon: Landmark, title: 'Government', desc: 'Enable secure and efficient public-sector operations.' },
  { icon: Building, title: 'Smart Buildings', desc: 'Integrate systems, data, and automation to create intelligent environments.' },
];

export function Industries({ navigate }: IndustriesProps) {
  return (
    <div>
      <PageHero
        label="Industries"
        title={<>Industry-Focused <span className="text-gradient">Transformation</span></>}
        subtitle="Every industry faces unique challenges. Teranode1 designs solutions that align with operational requirements, regulatory considerations, and business objectives."
      />

      <section className="py-16 lg:py-24">
        <div className="container-page">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="card card-hover p-8 h-full group relative overflow-hidden">
                  {/* Glow on hover */}
                  <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-brand-600/0 blur-[50px] transition-all duration-500 group-hover:bg-brand-600/20" />

                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600/20 to-brand-800/10 border border-brand-600/30 text-brand-400 transition-all duration-500 group-hover:scale-110">
                      <item.icon className="h-7 w-7" />
                    </div>
                    <h2 className="font-display text-xl font-bold text-white mt-6">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm text-ink-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
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
                  Don't see your industry? We design for unique operational realities.
                </h2>
                <div className="mt-8">
                  <button onClick={() => navigate('/contact')} className="btn-primary">
                    Talk to Our Team
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
