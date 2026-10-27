import { useCallback, useEffect, useState } from 'react';
import { pathToRoute, routeToPath, type RouteId } from '@/lib/routes';

// Routes live in the pathname: a "#/route" hash gets passed to querySelector by
// anchor-scroll handlers (including the v0 preview runtime) and throws.
function migrateLegacyHashRoute() {
  const legacy = window.location.hash.match(/^#(\/.*)$/);
  if (legacy) window.history.replaceState(null, '', legacy[1]);
}

function currentPath(): string {
  return window.location.pathname.replace(/\/+$/, '') || '/';
}

export function useRouter() {
  const [route, setRoute] = useState<RouteId>(() => {
    migrateLegacyHashRoute();
    return pathToRoute(currentPath());
  });

  useEffect(() => {
    const onChange = () => setRoute(pathToRoute(currentPath()));
    window.addEventListener('popstate', onChange);
    return () => window.removeEventListener('popstate', onChange);
  }, []);

  const navigate = useCallback((id: RouteId) => {
    const path = routeToPath(id);
    if (currentPath() !== path) {
      window.history.pushState(null, '', path);
      setRoute(pathToRoute(path));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return { route, navigate };
}

export type NavigateFn = (id: RouteId) => void;
