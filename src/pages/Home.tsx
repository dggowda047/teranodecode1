import {
  ArrowRight,
  ArrowDown,
  Network,
  Cloud,
  MonitorPlay,
  BarChart3,
  Brain,
  Sparkles,
  Building2,
  GraduationCap,
  HeartPulse,
  Factory,
  Landmark,
  Building,
  Target,
  Layers,
  Rocket,
  Workflow,
  ChevronRight,
  Server,
  Lightbulb,
  TrendingUp,
} from 'lucide-react';
import type { Route } from '../lib/router';
import { Reveal } from '../components/Reveal';

type HomeProps = {
  navigate: (to: Route) => void;
};

const transformationStack = [
  { icon: Server, title: 'Infrastructure', desc: 'Networks, cloud, security, compute, devices, AV systems.' },
  { icon: Network, title: 'Connectivity', desc: 'People, spaces, applications, and systems working together.' },
  { icon: BarChart3, title: 'Data', desc: 'Capturing operational and business information.' },
  { icon: Lightbulb, title: 'Insights', desc: 'Analytics, dashboards, visibility.' },
  { icon: Brain, title: 'Intelligence', desc: 'AI, ML, automation, predictions, decision support.' },
  { icon: TrendingUp, title: 'Transformation', desc: 'Better business outcomes.' },
];

const whatWeDo = [
  { icon: Workflow, title: 'Business Process Transformation', desc: 'Analyze, optimize, and modernize business workflows to improve efficiency, visibility, and performance.' },
  { icon: Cloud, title: 'Cloud & Digital Infrastructure', desc: 'Design and manage secure, scalable technology foundations that support modern business operations.' },
  { icon: MonitorPlay, title: 'Intelligent AV Environments', desc: 'Create collaboration spaces, meeting rooms, command centers, and communication environments that enhance engagement and productivity.' },
  { icon: BarChart3, title: 'Data & Analytics', desc: 'Convert business data into actionable intelligence through dashboards, reporting, forecasting, and analytics.' },
  { icon: Brain, title: 'Machine Learning', desc: 'Develop predictive models and intelligent systems that improve operational performance and decision-making.' },
  { icon: Sparkles, title: 'Artificial Intelligence', desc: 'Implement AI-powered automation, intelligent assistants, and advanced solutions that transform how organizations operate.' },
];

const industries = [
  { icon: Building2, title: 'Enterprise & Corporate', desc: 'Digital transformation initiatives that improve efficiency and collaboration.' },
  { icon: GraduationCap, title: 'Education', desc: 'Smart campuses, intelligent classrooms, and data-driven learning environments.' },
  { icon: HeartPulse, title: 'Healthcare', desc: 'Connected systems that improve communication, workflows, and operational effectiveness.' },
  { icon: Factory, title: 'Manufacturing', desc: 'Smart operations, predictive maintenance, automation, and industrial intelligence.' },
  { icon: Landmark, title: 'Government & Public Sector', desc: 'Secure and scalable technology environments that support mission-critical operations.' },
  { icon: Building, title: 'Smart Buildings', desc: 'Integrated technology ecosystems that enhance building performance and user experiences.' },
];

const whyUs = [
  { icon: Target, title: 'Business First', desc: 'Technology decisions aligned with strategic business goals.' },
  { icon: Layers, title: 'Integrated Expertise', desc: 'IT, AV, Cloud, Data, ML, and AI under one transformation framework.' },
  { icon: Rocket, title: 'Future Ready', desc: 'Solutions designed for growth, innovation, and adaptability.' },
  { icon: Network, title: 'End-to-End Delivery', desc: 'From strategy and design through implementation and optimization.' },
];

export function Home({ navigate }: HomeProps) {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-aurora" />
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-brand-700/20 blur-[140px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-brand-700/10 blur-[140px] animate-pulse-slow" />

        {/* Floating orbs */}
        <div className="absolute top-32 right-[15%] h-2 w-2 rounded-full bg-brand-400 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/2 right-[25%] h-1.5 w-1.5 rounded-full bg-brand-400 animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-40 left-[20%] h-2 w-2 rounded-full bg-brand-300 animate-float" style={{ animationDelay: '3s' }} />

        <div className="container-page relative z-10">
          <div className="max-w-4xl">
            <Reveal>
              <span className="section-label">
                <span className="h-px w-8 bg-brand-400" />
                A Business Transformation & Intelligent Environments Company
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="heading-1 mt-6 text-white">
                From Infrastructure{' '}
                <span className="text-gradient-animated">to Intelligence</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="body-lg mt-7 max-w-2xl">
                Teranode1 transforms business processes by connecting technology, environments, data, and artificial intelligence into intelligent systems that empower people and accelerate performance.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-4 text-base sm:text-lg font-medium text-ink-200 max-w-2xl leading-relaxed font-display">
                Building the next generation of intelligent connected enterprises.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button onClick={() => navigate('/contact')} className="btn-primary">
                  Talk to an Expert
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => navigate('/solutions')} className="btn-secondary">
                  Explore Solutions
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-ink-500">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <span className="h-10 w-px bg-gradient-to-b from-ink-600 to-transparent" />
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="relative py-24 lg:py-36 overflow-hidden border-t border-ink-800/50">
        <div className="absolute inset-0 bg-grid-fine opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-64 w-[800px] rounded-full bg-brand-700/10 blur-[120px]" />

        <div className="container-page relative">
          <Reveal>
            <span className="section-label">
              <span className="h-px w-8 bg-brand-400" />
              The Intelligence Era
            </span>
          </Reveal>

          <div className="mt-8 max-w-4xl">
            <Reveal delay={60}>
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-[1.25] tracking-tight">
                The next generation of organizations will not be defined by the technology they own.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-ink-400 leading-[1.25] tracking-tight mt-3">
                They will be defined by the <span className="text-gradient">intelligence</span> they create.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-10 lg:gap-16">
            <Reveal delay={200}>
              <div className="space-y-4">
                {[
                  'Intelligence from data.',
                  'Intelligence from collaboration.',
                  'Intelligence from automation.',
                  'Intelligence from connected environments.',
                ].map((line) => (
                  <div key={line} className="flex items-center gap-3 text-lg text-ink-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-400 shrink-0" />
                    {line}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="space-y-5">
                <p className="body-lg">
                  Infrastructure is only the beginning.
                </p>
                <p className="body-lg">
                  The future belongs to organizations that can transform information into insight, insight into action, and action into progress.
                </p>
                <p className="text-lg font-medium text-white font-display">
                  At Teranode1, we exist to help build that future.
                </p>
                <p className="font-display text-xl font-bold text-gradient">
                  From Infrastructure to Intelligence.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRANSFORMATION STACK */}
      <section className="relative py-24 lg:py-32 border-t border-ink-800/50">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-page relative">
          <Reveal>
            <div className="max-w-2xl">
              <span className="section-label">
                <span className="h-px w-8 bg-brand-400" />
                The Journey
              </span>
              <h2 className="heading-2 mt-5 text-white">
                Most companies stop at infrastructure.
              </h2>
              <p className="body-lg mt-5">
                Teranode1 helps clients move through the entire stack — from foundational infrastructure to transformative intelligence and measurable business outcomes.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-4 lg:gap-3">
            {transformationStack.map((step, i) => (
              <Reveal key={step.title} delay={i * 80}>
                <div className="group relative flex items-center gap-5 lg:gap-8">
                  {/* Step number */}
                  <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink-700 bg-ink-900 font-display text-sm font-bold text-ink-400 transition-all duration-500 group-hover:border-brand-500 group-hover:text-brand-400 group-hover:bg-brand-600/10">
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  {/* Card */}
                  <div className="card card-hover flex-1 p-6 lg:p-7 flex items-center gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600/15 border border-brand-600/30 text-brand-400 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-600/25">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white">{step.title}</h3>
                      <p className="mt-1 text-sm text-ink-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Arrow connector */}
                  {i < transformationStack.length - 1 && (
                    <div className="hidden lg:flex absolute left-6 -bottom-4 h-4 items-center">
                      <ArrowDown className="h-4 w-4 text-ink-700" />
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="relative py-24 lg:py-32 border-t border-ink-800/50">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <span className="section-label">
                <span className="h-px w-8 bg-brand-400" />
                Who We Are
              </span>
              <h2 className="heading-2 mt-5 text-white">
                Technology That Serves Business
              </h2>
              <p className="body-lg mt-6">
                Organizations today face increasing complexity—disconnected systems, growing volumes of data, evolving customer expectations, and the need to make faster decisions.
              </p>
              <p className="body-lg mt-4">
                Teranode1 bridges the gap between technology and business performance by designing intelligent environments where infrastructure, collaboration, analytics, automation, and AI work together seamlessly.
              </p>
              <p className="mt-6 text-lg font-medium text-white font-display">
                We focus on outcomes, not technologies.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '6', label: 'Integrated Disciplines' },
                    { value: '1', label: 'Transformation Framework' },
                    { value: '∞', label: 'Connected Possibilities' },
                    { value: '24/7', label: 'Intelligent Operations' },
                  ].map((stat, i) => (
                    <div
                      key={stat.label}
                      className={`card card-hover p-6 ${i % 2 === 1 ? 'mt-8' : ''}`}
                    >
                      <div className="font-display text-3xl sm:text-4xl font-bold text-gradient">
                        {stat.value}
                      </div>
                      <div className="mt-2 text-sm text-ink-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-brand-600/20 blur-[60px]" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="relative py-24 lg:py-32 border-t border-ink-800/50">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-page relative">
          <Reveal>
            <div className="max-w-2xl">
              <span className="section-label">
                <span className="h-px w-8 bg-brand-400" />
                What We Do
              </span>
              <h2 className="heading-2 mt-5 text-white">
                Six disciplines. One transformation framework.
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeDo.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="card card-hover p-7 h-full group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/15 border border-brand-600/30 text-brand-400 transition-all duration-500 group-hover:bg-brand-600/25 group-hover:scale-110">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="heading-3 mt-5 text-white">{item.title}</h3>
                  <p className="mt-3 text-sm text-ink-400 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="relative py-24 lg:py-32">
        <div className="container-page">
          <Reveal>
            <div className="max-w-2xl">
              <span className="section-label">
                <span className="h-px w-8 bg-brand-400" />
                Industries We Serve
              </span>
              <h2 className="heading-2 mt-5 text-white">
                Tailored to the way you operate
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <button
                  onClick={() => navigate('/industries')}
                  className="card card-hover p-6 h-full w-full text-left group flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-ink-800 border border-ink-700 text-ink-300 transition-all duration-500 group-hover:bg-brand-600/20 group-hover:border-brand-600/40 group-hover:text-brand-400">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-white group-hover:text-brand-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-ink-400 leading-relaxed">{item.desc}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TERANODE1 */}
      <section className="relative py-24 lg:py-32 border-t border-ink-800/50">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-[700px] rounded-full bg-brand-700/10 blur-[140px]" />
        <div className="container-page relative">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <span className="section-label justify-center">
                <span className="h-px w-8 bg-brand-400" />
                Why Teranode1
                <span className="h-px w-8 bg-brand-400" />
              </span>
              <h2 className="heading-2 mt-5 text-white">
                Built for outcomes, designed for the future
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="card card-hover p-7 h-full text-center group">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600/20 to-brand-800/10 border border-brand-600/30 text-brand-400 transition-all duration-500 group-hover:scale-110">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white mt-5">{item.title}</h3>
                  <p className="mt-2.5 text-sm text-ink-400 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-ink-800 bg-gradient-to-br from-ink-900 via-ink-900 to-brand-950/40 p-10 sm:p-16 lg:p-20">
              <div className="absolute inset-0 bg-grid opacity-20" />
              <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-brand-600/20 blur-[100px]" />
              <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-brand-700/10 blur-[100px]" />

              <div className="relative max-w-2xl">
                <h2 className="heading-2 text-white">
                  Ready to Transform Your Business?
                </h2>
                <p className="body-lg mt-6">
                  Let's explore how intelligent technology can improve operations, collaboration, and decision-making across your organization.
                </p>
                <div className="mt-10">
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
