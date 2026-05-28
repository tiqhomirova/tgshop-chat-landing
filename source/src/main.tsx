import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Responsive scaling: shrink the 1440px desktop layout to fit narrower viewports.
const DESIGN_WIDTH = 1440;
const root = document.getElementById('root')!;

function applyScale() {
  const vw = document.documentElement.clientWidth;
  const scale = Math.min(1, vw / DESIGN_WIDTH);
  document.documentElement.style.setProperty('--scale', String(scale));
  const designHeight = root.scrollHeight;
  document.body.style.height = `${designHeight * scale}px`;
}

window.addEventListener('resize', applyScale);
window.addEventListener('load', applyScale);
// Watch the root for layout changes (e.g. pricing toggle expands/collapses).
new ResizeObserver(applyScale).observe(root);
// Initial calls — root may still be growing as React/images settle.
applyScale();
requestAnimationFrame(applyScale);
setTimeout(applyScale, 100);
setTimeout(applyScale, 500);

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
