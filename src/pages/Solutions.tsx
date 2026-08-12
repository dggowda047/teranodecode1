import {
  Workflow,
  Cloud,
  MonitorPlay,
  BarChart3,
  Brain,
  Sparkles,
  ArrowRight,
  Check,
} from 'lucide-react';
import type { Route } from '../lib/router';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';

type SolutionsProps = {
  navigate: (to: Route) => void;
};

const solutions = [
  {
    icon: Workflow,
    title: 'Business Process Transformation',
    desc: 'We evaluate current workflows, identify inefficiencies, and implement technology solutions that improve performance and agility.',
    services: ['Process Analysis', 'Workflow Optimization', 'Automation Strategy', 'Digital Transformation Roadmaps', 'Change Management Support'],
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    desc: 'Modern, secure, and scalable digital foundations.',
    services: ['Cloud Strategy', 'Cloud Migration', 'Infrastructure Modernization', 'Hybrid Cloud Solutions', 'Managed Services'],
  },
  {
    icon: MonitorPlay,
    title: 'Intelligent AV Environments',
    desc: 'Technology-enabled spaces that improve communication and collaboration.',
    services: ['Smart Meeting Rooms', 'Boardrooms', 'Digital Signage', 'Collaboration Environments', 'Command & Control Centers', 'Hybrid Event Solutions'],
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    desc: 'Turning information into actionable business intelligence.',
    services: ['Data Strategy', 'Business Intelligence', 'Dashboard Development', 'Reporting Solutions', 'Data Warehousing', 'Predictive Analytics'],
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    desc: 'Advanced analytics and predictive intelligence.',
    services: ['Predictive Modeling', 'Forecasting', 'Pattern Recognition', 'Intelligent Recommendations', 'Operational Optimization'],
  },
  {
    icon: Sparkles,
    title: 'Artificial Intelligence',
    desc: 'Creating intelligent systems that support business growth.',
    services: ['AI Readiness Assessments', 'AI Strategy', 'Generative AI Solutions', 'AI Assistants', 'Workflow Automation', 'Decision Support Systems'],
  },
];

export function Solutions({ navigate }: SolutionsProps) {
  return (
    <div>
      <PageHero
        label="Solutions"
        title={<>Transforming Technology into <span className="text-gradient">Business Value</span></>}
        subtitle="Teranode1 delivers integrated solutions that align technology investments with organizational goals."
      />

      <section className="py-16 lg:py-24">
        <div className="container-page">
          <div className="space-y-6">
            {solutions.map((sol, i) => (
              <Reveal key={sol.title} delay={i * 60}>
                <div className="card card-hover p-7 lg:p-10 group">
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
                    {/* Left: icon + title + desc */}
                    <div className="lg:col-span-5">
                      <div className="flex items-start gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-600/15 border border-brand-600/30 text-brand-400 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-600/25">
                          <sol.icon className="h-7 w-7" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-ink-500 mb-1">
                            0{i + 1}
                          </div>
                          <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                            {sol.title}
                          </h2>
                        </div>
                      </div>
                      <p className="mt-5 text-sm text-ink-400 leading-relaxed max-w-md">
                        {sol.desc}
                      </p>
                    </div>

                    {/* Right: services */}
                    <div className="lg:col-span-7 lg:border-l lg:border-ink-800 lg:pl-10">
                      <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-500 mb-4">
                        Services Include
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                        {sol.services.map((service) => (
                          <div key={service} className="flex items-center gap-2.5 text-sm text-ink-200">
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-600/15 text-accent-400">
                              <Check className="h-3 w-3" />
                            </span>
                            {service}
                          </div>
                        ))}
                      </div>
                    </div>
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
                  Not sure which solution fits your needs? Let's map it out together.
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
