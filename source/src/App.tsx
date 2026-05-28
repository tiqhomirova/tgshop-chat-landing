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

  // Re-apply layout calc when breakpoint changes (different component → different scrollHeight)
  useEffect(() => {
    requestAnimationFrame(() => {
      const vw = document.documentElement.clientWidth;
      const dw = DESIGN_WIDTH[bp];
      const scale = vw / dw;
      const root = document.getElementById('root');
      if (root) {
        document.body.style.height = `${root.scrollHeight * scale}px`;
      }
    });
  }, [bp]);

  if (bp === 'mobile') return <LandingMobile />;
  if (bp === 'tablet') return <LandingTablet />;
  return <LandingDesktop />;
}
