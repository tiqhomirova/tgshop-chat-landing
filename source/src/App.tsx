import { useEffect, useState } from 'react';
import LandingDesktop from './Landing-Desktop';
import LandingTablet from './Landing-Tablet';
import LandingMobile from './Landing-Mobile';
import { readLangFromUrl, setLang, applyTranslations, updateLangSwitchLabels, type Lang } from './i18n';
import { REGION } from './region';

// On the RU build the source JSX is already Russian, so we skip the i18n
// DOM walker entirely and hide the lang switcher (added via a data attribute
// CSS rule injected on first render).

const DESIGN_WIDTH = { mobile: 375, tablet: 1024, desktop: 1440 } as const;
type BP = keyof typeof DESIGN_WIDTH;

function pickBreakpoint(vw: number): BP {
  if (vw < 768) return 'mobile';
  if (vw < 1280) return 'tablet';
  return 'desktop';
}

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

function applyUtmPassthrough() {
  const utm = getUtmSuffix();
  if (!utm) return;
  const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href*="admin.tgshop.io"]');
  anchors.forEach((a) => {
    const orig = a.getAttribute('href') || '';
    if (/[?&]utm_/i.test(orig)) return;
    const sep = orig.includes('?') ? '&' : '?';
    a.setAttribute('href', orig + sep + utm.slice(1));
  });
}

/** Click handler delegated to the document: clicking any lang switch element
   toggles between RU and UZ. We use delegation because the switch is rendered
   inside Landing-Desktop / Landing-Tablet / Landing-Mobile and we don't want
   to refactor each one to pass a callback. */
function bindLangSwitchClick(currentLang: Lang) {
  const handler = (e: Event) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;
    const switchEl = target.closest('[data-name="lang-btn"], [data-name="lang-switch"]') as HTMLElement | null;
    if (!switchEl) return;
    // Don't capture clicks on actual anchors inside the burger menu list.
    if (target.closest('a[href]')) return;
    e.preventDefault();
    setLang(currentLang === 'ru' ? 'uz' : 'ru');
  };
  document.addEventListener('click', handler, true);
  return () => document.removeEventListener('click', handler, true);
}

export default function App() {
  const [bp, setBp] = useState<BP>(() =>
    typeof window !== 'undefined' ? pickBreakpoint(window.innerWidth) : 'desktop'
  );
  const [lang] = useState<Lang>(() => readLangFromUrl());

  // Resize/scale handler — unchanged.
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

  // Lang switcher click delegation (disabled on RU — switcher is hidden).
  useEffect(() => {
    if (REGION === 'ru') return;
    return bindLangSwitchClick(lang);
  }, [lang]);

  // Hide lang switcher chip via CSS on RU build + patch document title/description.
  useEffect(() => {
    if (REGION !== 'ru') return;
    const style = document.createElement('style');
    style.textContent = '[data-name="lang-btn"],[data-name="lang-switch"]{display:none!important;}';
    document.head.appendChild(style);
    document.title = 'TGShop Chat — Telegram-магазин и CRM в России';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'Запустите Telegram-магазин за 5 минут без сайта и разработчиков. Каталог, СБП, эквайринг, CRM в одном кабинете.');
    return () => { style.remove(); };
  }, []);

  // Re-apply layout calc + UTM passthrough + translations on bp/lang change.
  useEffect(() => {
    const run = () => {
      const vw = document.documentElement.clientWidth;
      const dw = DESIGN_WIDTH[bp];
      const scale = vw / dw;
      const root = document.getElementById('root');
      if (root) {
        document.body.style.height = `${root.scrollHeight * scale}px`;
      }
      applyUtmPassthrough();
      // Skip DOM walker translation on RU build — JSX is already in Russian.
      if (REGION !== 'ru') {
        applyTranslations(lang);
        updateLangSwitchLabels(lang);
      }
    };
    requestAnimationFrame(run);
    const t1 = setTimeout(run, 200);
    const t2 = setTimeout(run, 800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [bp, lang]);

  if (bp === 'mobile') return <LandingMobile />;
  if (bp === 'tablet') return <LandingTablet />;
  return <LandingDesktop />;
}
