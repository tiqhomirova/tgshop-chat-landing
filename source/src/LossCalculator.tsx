// "Цена бездействия" / Loss-calculator section — Variant B
// Hi-fi reference: design_handoff_loss_calculator/loss_calculator_reference.html
// Static content. Three breakpoint variants rendered via the `variant` prop —
// Mobile / Tablet / Desktop. Each variant matches the spec's pixel values
// (sizes, weights, gaps) one-to-one — no media queries.

import { CTA_HREF } from './utm';

const LOSS_RED = '#E5383B';
const LOSS_TINT = '#FEF1F1';
const BRAND_BLUE = '#108EF5';

type Variant = 'mobile' | 'tablet' | 'desktop';

// Inline SVG area-chart — identical path data across variants (preserveAspectRatio="none").
function LossChart({ height }: { height: number }) {
  return (
    <svg viewBox="0 0 600 210" width="100%" height={height} preserveAspectRatio="none" style={{ display: 'block' }}>
      <defs>
        <linearGradient id="lossfill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={LOSS_RED} stopOpacity="0.28" />
          <stop offset="100%" stopColor={LOSS_RED} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <path d="M0,210 L0,188 C70,180 110,172 170,156 C230,140 270,126 340,102 C410,78 450,60 510,40 C545,28 575,18 600,12 L600,210 Z" fill="url(#lossfill)" />
      <path d="M0,188 C70,180 110,172 170,156 C230,140 270,126 340,102 C410,78 450,60 510,40 C545,28 575,18 600,12" fill="none" stroke={LOSS_RED} strokeWidth={2.5} strokeLinecap="round" />
      <circle cx={600} cy={12} r={5.5} fill={LOSS_RED} />
    </svg>
  );
}

// Synthetic-bold rouble glyph rendered as text; the spec uses a smaller weight 700
// "₽" right after the big 900 number — keeping it inline keeps kerning correct.
function LossTotal({ size, rubSize, letterSpacing }: { size: number; rubSize: number; letterSpacing: string }) {
  return (
    <div
      className="leading-none whitespace-nowrap"
      style={{
        fontFamily: "'SF Pro', -apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
        fontWeight: 900,
        fontSize: `${size}px`,
        letterSpacing,
        color: LOSS_RED,
      }}
    >
      −450 000
      <span style={{ fontSize: `${rubSize}px`, fontWeight: 700, marginLeft: '6px', letterSpacing: 0 }}>₽</span>
    </div>
  );
}

export default function LossCalculator({ variant }: { variant: Variant }) {
  // Variant-specific tuning per spec
  const cfg = {
    mobile: {
      sectionPad: 'px-[20px] py-[56px]',
      contentWidth: 'w-[335px]',
      rowGap: 'gap-[36px]',
      eyebrowText: 'text-[14px] px-[16px] py-[8px]',
      titleSize: 'text-[32px] mt-[20px]',
      titleLs: '-0.4px',
      leadSize: 'text-[16px] mt-[24px]',
      leadGap: 'mt-[14px]',
      warnSize: 'text-[16px] mt-[28px]',
      ctaWidth: 'w-full mt-[32px] px-[28px] py-[16px] text-[16px]',
      cardPad: 'p-[24px]',
      cardRadius: 'rounded-[20px]',
      headDir: 'flex-col-reverse items-start gap-[14px]',
      lossLabel: 'text-[12px]',
      lossLabelLs: '1px',
      totalSize: 46,
      totalRub: 24,
      totalLs: '-1.5px',
      badgePad: 'px-[12px] py-[7px] text-[11px]',
      chartHeight: 160,
      chartMt: 'mt-[28px]',
      axisText: 'text-[13px]',
      noteMt: 'mt-[24px]',
      notePad: 'p-[14px_16px]',
      noteText: 'text-[15px]',
      noteAlign: 'items-start',
    },
    tablet: {
      sectionPad: 'px-[40px] py-[80px]',
      contentWidth: 'w-full max-w-[928px]',
      rowGap: 'gap-[48px]',
      eyebrowText: 'text-[15px] px-[18px] py-[9px]',
      titleSize: 'text-[44px] mt-[28px]',
      titleLs: '-0.5px',
      leadSize: 'text-[18px] mt-[32px]',
      leadGap: 'mt-[18px]',
      warnSize: 'text-[18px] mt-[40px]',
      ctaWidth: 'mt-[40px] px-[34px] py-[18px] text-[18px]',
      cardPad: 'p-[40px]',
      cardRadius: 'rounded-[24px]',
      headDir: 'flex-row justify-between items-start',
      lossLabel: 'text-[13px]',
      lossLabelLs: '1.4px',
      totalSize: 64,
      totalRub: 32,
      totalLs: '-2px',
      badgePad: 'px-[14px] py-[8px] text-[12px]',
      chartHeight: 210,
      chartMt: 'mt-[36px]',
      axisText: 'text-[14px]',
      noteMt: 'mt-[28px]',
      notePad: 'p-[16px_18px]',
      noteText: 'text-[16px]',
      noteAlign: 'items-center',
    },
    desktop: {
      sectionPad: 'px-[24px] py-[120px]',
      contentWidth: 'w-full max-w-[1200px]',
      rowGap: 'gap-[64px]',
      eyebrowText: 'text-[15px] px-[18px] py-[9px]',
      titleSize: 'text-[56px] mt-[28px]',
      titleLs: '-0.7px',
      leadSize: 'text-[18px] mt-[32px]',
      leadGap: 'mt-[18px]',
      warnSize: 'text-[18px] mt-[40px]',
      ctaWidth: 'mt-[40px] px-[34px] py-[18px] text-[18px]',
      cardPad: 'p-[40px]',
      cardRadius: 'rounded-[24px]',
      headDir: 'flex-row justify-between items-start',
      lossLabel: 'text-[13px]',
      lossLabelLs: '1.4px',
      totalSize: 72,
      totalRub: 34,
      totalLs: '-3.5px',
      badgePad: 'px-[14px] py-[8px] text-[12px]',
      chartHeight: 210,
      chartMt: 'mt-[36px]',
      axisText: 'text-[14px]',
      noteMt: 'mt-[28px]',
      notePad: 'p-[16px_18px]',
      noteText: 'text-[16px]',
      noteAlign: 'items-center',
    },
  }[variant];

  const isDesktop = variant === 'desktop';

  return (
    <div
      className={`bg-white w-full flex justify-center ${cfg.sectionPad}`}
      data-name="loss-calc-section"
      style={{ fontFamily: "'SF Pro', -apple-system, BlinkMacSystemFont, 'Inter', sans-serif" }}
    >
      <div className={`${cfg.contentWidth} flex ${isDesktop ? 'flex-row' : 'flex-col'} ${cfg.rowGap} items-start`}>
        {/* LEFT COLUMN — text + CTA */}
        <div className={isDesktop ? 'flex-none w-[480px]' : 'w-full max-w-[560px]'}>
          <span
            className={`inline-block font-semibold rounded-[100px] ${cfg.eyebrowText}`}
            style={{ background: 'rgba(16,142,245,0.10)', color: BRAND_BLUE, letterSpacing: '-0.15px' }}
          >
            Цена бездействия
          </span>
          <h2
            className={`font-bold leading-[1.0] ${cfg.titleSize}`}
            style={{ color: '#0A1519', letterSpacing: cfg.titleLs, margin: '0 0 0 0' }}
          >
            <span className="block" style={{ marginTop: variant === 'mobile' ? '20px' : '28px' }}>
              Посчитайте, сколько теряете
            </span>
          </h2>
          <p
            className={`leading-[1.55] ${cfg.leadSize}`}
            style={{ color: '#595959', maxWidth: variant === 'mobile' ? undefined : '430px', margin: '0' }}
          >
            <span className="block" style={{ marginTop: variant === 'mobile' ? '24px' : '32px' }}>
              50 заявок в день → 10% не дождутся ответа = 5 ушедших клиентов
            </span>
          </p>
          <p
            className={`leading-[1.55] ${cfg.leadSize.replace(/mt-\[\d+px\]/, '')}`}
            style={{ color: '#595959', maxWidth: variant === 'mobile' ? undefined : '430px', marginTop: variant === 'mobile' ? '14px' : '18px' }}
          >
            Средний чек 3 000 ₽ → −15 000 ₽ в день и −450 000 ₽ в месяц
          </p>
          <p
            className={`leading-[1.55] ${cfg.warnSize}`}
            style={{ color: LOSS_RED, maxWidth: variant === 'mobile' ? undefined : '430px', margin: 0 }}
          >
            <span className="block" style={{ marginTop: variant === 'mobile' ? '28px' : '40px' }}>
              Не из-за товара или цены — а потому что долго принимали заказ
            </span>
          </p>
          <a href={CTA_HREF} target="_blank" rel="noopener" className="no-underline">
            <span
              className={`inline-flex items-center justify-center font-semibold text-white rounded-[100px] cursor-pointer ${cfg.ctaWidth}`}
              style={{
                background: BRAND_BLUE,
                boxShadow: '0 20px 35px rgba(51,132,255,0.20)',
                transition: 'background .15s',
              }}
              onMouseEnter={(e) => { (e.currentTarget.style.background = '#047DE0'); }}
              onMouseLeave={(e) => { (e.currentTarget.style.background = BRAND_BLUE); }}
            >
              Хочу больше продаж
            </span>
          </a>
        </div>

        {/* RIGHT COLUMN — card */}
        <div className={isDesktop ? 'flex-1' : 'w-full'}>
          <div
            className={`bg-white flex flex-col ${cfg.cardPad} ${cfg.cardRadius}`}
            style={{ border: '1px solid rgba(10,21,25,0.08)', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}
          >
            {/* Card head */}
            <div className={`flex ${cfg.headDir}`}>
              <div>
                <div
                  className={`font-black uppercase ${cfg.lossLabel}`}
                  style={{ color: LOSS_RED, letterSpacing: cfg.lossLabelLs }}
                >
                  Теряете каждый месяц
                </div>
                <div style={{ marginTop: variant === 'mobile' ? '8px' : '10px' }}>
                  <LossTotal size={cfg.totalSize} rubSize={cfg.totalRub} letterSpacing={cfg.totalLs} />
                </div>
              </div>
              <span
                className={`flex-none font-bold rounded-[100px] ${cfg.badgePad}`}
                style={{
                  background: LOSS_TINT,
                  color: LOSS_RED,
                  letterSpacing: variant === 'mobile' ? '0.5px' : '0.6px',
                  marginTop: isDesktop || variant === 'tablet' ? '6px' : 0,
                }}
              >
                30 ДНЕЙ
              </span>
            </div>

            {/* Chart */}
            <div className={cfg.chartMt}>
              <LossChart height={cfg.chartHeight} />
            </div>
            <div
              className={`flex justify-between mt-[10px] pt-[14px] ${cfg.axisText}`}
              style={{ borderTop: '1px solid rgba(10,21,25,0.06)', color: '#767D88' }}
            >
              <span>день 1 — 15 000 ₽</span>
              <span>
                день 30 — <span style={{ color: LOSS_RED, fontWeight: 600 }}>450 000 ₽</span>
              </span>
            </div>

            {/* Blue note */}
            <div
              className={`flex gap-[10px] rounded-[16px] ${cfg.noteMt} ${cfg.notePad} ${cfg.noteAlign}`}
              style={{ background: 'rgba(16,142,245,0.06)' }}
            >
              <span
                className="flex-none inline-flex items-center justify-center font-bold rounded-full"
                style={{ width: '22px', height: '22px', background: BRAND_BLUE, color: '#fff', fontSize: '13px' }}
              >
                ✓
              </span>
              <span className={`font-medium ${cfg.noteText}`} style={{ color: '#0A1519' }}>
                С TGShop все чаты в одном кабинете со статусами, а бот продает 24/7
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
