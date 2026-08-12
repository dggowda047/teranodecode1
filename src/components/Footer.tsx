import { Mail, Globe, MapPin, ChevronRight } from 'lucide-react';
import type { Route } from '../lib/router';

type FooterProps = {
  navigate: (to: Route) => void;
};

const solutions = [
  'Business Process Transformation',
  'Cloud & Infrastructure',
  'Intelligent AV Environments',
  'Data & Analytics',
  'Machine Learning',
  'Artificial Intelligence',
];

const company = [
  { label: 'About Us', route: '/about' as Route },
  { label: 'Solutions', route: '/solutions' as Route },
  { label: 'Industries', route: '/industries' as Route },
  { label: 'Innovation Lab', route: '/innovation-lab' as Route },
  { label: 'Contact', route: '/contact' as Route },
];

export function Footer({ navigate }: FooterProps) {
  return (
    <footer className="relative mt-24 border-t border-ink-800 bg-ink-950">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-600/40 to-transparent" />

      {/* Tagline band */}
      <div className="border-b border-ink-800/60">
        <div className="container-page py-12 lg:py-16">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
              From Infrastructure to Intelligence
            </h2>
            <p className="mt-4 body-lg">
              Transforming complexity into intelligence. Teranode1 connects technology, environments, data, and AI into intelligent systems that empower people and accelerate performance.
            </p>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="container-page py-14">
        <div className="grid gap-10 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button onClick={() => navigate('/')} className="flex items-center gap-2.5 mb-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 font-display font-bold text-white text-lg shadow-lg shadow-brand-600/30">
                T
              </span>
              <span className="font-display font-bold text-lg tracking-tight text-white">
                Teranode<span className="text-brand-400">1</span>
              </span>
            </button>
            <p className="text-sm text-ink-400 leading-relaxed max-w-xs">
              A Business Transformation and Intelligent Environments Company.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400 mb-4">Company</h3>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item.route}>
                  <button
                    onClick={() => navigate(item.route)}
                    className="text-sm text-ink-300 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-brand-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400 mb-4">Solutions</h3>
            <ul className="space-y-2.5">
              {solutions.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => navigate('/solutions')}
                    className="text-sm text-ink-300 hover:text-white transition-colors text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400 mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-ink-300">
                <Mail className="h-4 w-4 text-brand-400 mt-0.5 shrink-0" />
                <a href="mailto:info@teranode1.com" className="hover:text-white transition-colors">info@teranode1.com</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-ink-300">
                <Globe className="h-4 w-4 text-brand-400 mt-0.5 shrink-0" />
                <span>teranode1.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-ink-300">
                <MapPin className="h-4 w-4 text-brand-400 mt-0.5 shrink-0" />
                <span>Building the intelligent enterprise worldwide</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ink-800/60">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-500">© {new Date().getFullYear()} Teranode1. All rights reserved.</p>
          <p className="text-xs text-ink-500">From Infrastructure to Intelligence</p>
        </div>
      </div>
    </footer>
  );
}
