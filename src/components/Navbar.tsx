import { useEffect, useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import type { Route } from '../lib/router';

const links: { label: string; route: Route }[] = [
  { label: 'Home', route: '/' },
  { label: 'About', route: '/about' },
  { label: 'Solutions', route: '/solutions' },
  { label: 'Industries', route: '/industries' },
  { label: 'Innovation Lab', route: '/innovation-lab' },
  { label: 'Contact', route: '/contact' },
];

type NavbarProps = {
  route: Route;
  navigate: (to: Route) => void;
};

export function Navbar({ route, navigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [route]);

  const go = (to: Route) => {
    navigate(to);
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/85 backdrop-blur-xl border-b border-ink-800/80'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-page flex items-center justify-between h-16 lg:h-20">
        <button onClick={() => go('/')} className="flex items-center gap-2.5 group" aria-label="Teranode1 home">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 font-display font-bold text-white text-lg shadow-lg shadow-brand-600/30 transition-transform group-hover:scale-105">
            T
            <span className="absolute inset-0 rounded-lg ring-1 ring-white/20" />
          </span>
          <span className="font-display font-bold text-lg tracking-tight text-white">
            Teranode<span className="text-brand-400">1</span>
          </span>
        </button>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.route}>
              <button
                onClick={() => go(link.route)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  route === link.route
                    ? 'text-white'
                    : 'text-ink-300 hover:text-white'
                }`}
              >
                {link.label}
                {route === link.route && (
                  <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-brand-400 to-transparent" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <button onClick={() => go('/contact')} className="btn-primary !py-2.5 !text-sm">
            Talk to an Expert
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg text-ink-100 hover:bg-ink-800 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-out ${
          open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-page pb-6 pt-2">
          <ul className="flex flex-col gap-1 rounded-2xl border border-ink-800 bg-ink-900/95 backdrop-blur-xl p-3">
            {links.map((link) => (
              <li key={link.route}>
                <button
                  onClick={() => go(link.route)}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    route === link.route
                      ? 'bg-brand-600/15 text-white'
                      : 'text-ink-300 hover:bg-ink-800 hover:text-white'
                  }`}
                >
                  {link.label}
                  <ChevronRight className={`h-4 w-4 transition-opacity ${route === link.route ? 'opacity-100' : 'opacity-30'}`} />
                </button>
              </li>
            ))}
            <li className="mt-2">
              <button onClick={() => go('/contact')} className="btn-primary w-full">
                Talk to an Expert
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
