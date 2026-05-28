import { useEffect, useState } from 'react';
import LandingDesktop from './Landing-Desktop';
import LandingTablet from './Landing-Tablet';
import LandingMobile from './Landing-Mobile';

const DESIGN_WIDTH = { mobile: 375, tablet: 1024, desktop: 1440 } as const;
type BP = keyof typeof DESIGN_WIDTH;

function pickBreakpoint(vw: number): BP {
  if (vw < 768) return 'mobile';
  if (vw < 1280) return 'tablet';
  return 'desktop';
}

// Reads UTM params from current URL and returns a query string fragment.
// Empty string if no UTM params present.
function getUtmSuffix(): string {
  if (typeof window === 'undefined') return '';
  const url = new URLSearchParams(window.location.search);
  const utm = new URLSearchParams();
  for (const [k, v] of url.entries()) {
    if (k.toLowerCase().startsWith('utm_')) utm.set(k, v);
  }
  const s = utm.toString();
  return s ? '?' + s : '';
}

// Append UTM params from page URL to every <a href="admin.tgshop.io/..."> link.
// Runs after each render; safe to call multiple times (idempotent — won't double-append).
function applyUtmPassthrough() {
  const utm = getUtmSuffix();
  if (!utm) return;
  const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href*="admin.tgshop.io"]');
  anchors.forEach((a) => {
    const orig = a.getAttribute('href') || '';
    // Only touch links that don't already carry an utm_ param
    if (/[?&]utm_/i.test(orig)) return;
    const sep = orig.includes('?') ? '&' : '?';
    // utm starts with '?', strip it when joining
    a.setAttribute('href', orig + sep + utm.slice(1));
  });
}

export default function App() {
  const [bp, setBp] = useState<BP>(() =>
    typeof window !== 'undefined' ? pickBreakpoint(window.innerWidth) : 'desktop'
  );

  useEffect(() => {
    function apply() {
      const vw = document.documentElement.clientWidth;
      const newBp = pickBreakpoint(vw);
      setBp(newBp);
      const dw = DESIGN_WIDTH[newBp];
      const scale = vw / dw;
      document.documentElement.style.setProperty('--scale', String(scale));
      const root = document.getElementById('root');
      if (root) {
        document.body.style.height = `${root.scrollHeight * scale}px`;
      }
    }
    apply();
    window.addEventListener('resize', apply);
    window.addEventListener('load', apply);
    const root = document.getElementById('root');
    const ro = root ? new ResizeObserver(apply) : null;
    if (root && ro) ro.observe(root);
    const t1 = setTimeout(apply, 100);
    const t2 = setTimeout(apply, 500);
    const t3 = setTimeout(apply, 1500);
    return () => {
      window.removeEventListener('resize', apply);
      window.removeEventListener('load', apply);
      if (ro) ro.disconnect();
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
    };
  }, []);

  // Re-apply layout calc + UTM passthrough when breakpoint changes
  // (different component mounted → different <a> tags to walk).
  useEffect(() => {
    requestAnimationFrame(() => {
      const vw = document.documentElement.clientWidth;
      const dw = DESIGN_WIDTH[bp];
      const scale = vw / dw;
      const root = document.getElementById('root');
      if (root) {
        document.body.style.height = `${root.scrollHeight * scale}px`;
      }
      applyUtmPassthrough();
    });
    // Run again after a small delay to catch async-rendered links
    const t = setTimeout(applyUtmPassthrough, 200);
    return () => clearTimeout(t);
  }, [bp]);

  if (bp === 'mobile') return <LandingMobile />;
  if (bp === 'tablet') return <LandingTablet />;
  return <LandingDesktop />;
}
