import { useEffect, useState, useCallback } from 'react';

export type Route = '/' | '/about' | '/solutions' | '/industries' | '/innovation-lab' | '/contact';

function parseHash(): Route {
  const hash = window.location.hash.replace(/^#/, '') || '/';
  const valid: Route[] = ['/', '/about', '/solutions', '/industries', '/innovation-lab', '/contact'];
  return (valid.includes(hash as Route) ? hash : '/') as Route;
}

export function useRouter() {
  const [route, setRoute] = useState<Route>(parseHash());

  useEffect(() => {
    const onChange = () => {
      setRoute(parseHash());
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  const navigate = useCallback((to: Route) => {
    window.location.hash = to;
  }, []);

  return { route, navigate };
}
