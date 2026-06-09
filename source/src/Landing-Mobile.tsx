import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CTA_HREF, SIGNIN_HREF } from './utm';
import { T, HERO_CHAT_NAMES } from './region';

// Mobile burger-menu overlay — rendered as portal to <body> so that
// it sits OUTSIDE the #root element (which has transform: scale on it
// for responsive scaling). Using a portal keeps fixed-position math
// honest regardless of the scale on the parent stacking context.
function MobileMenuPortal({ onClose }: { onClose: () => void }) {
  // Lock body scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);
  const linkClass = "block py-[14px] text-[18px] font-['SF_Pro:Semibold',sans-serif] font-[590] text-[#121726] tracking-[-0.18px] no-underline border-b border-[#e9ebf1]";
  return createPortal(
    <div className="fixed inset-0 z-[1000] flex" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40" />
      <div
        className="relative ml-auto w-[80%] max-w-[320px] h-full bg-white shadow-2xl p-[20px] flex flex-col gap-[6px] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-[12px]">
          <div className="text-[18px]">
            <span className="font-['SF_Pro:Bold',sans-serif] font-bold text-[#121726]">TGShop</span>
            <span className="font-['SF_Pro:Regular',sans-serif] font-normal text-[#299eeb] ml-[4px]">Chat</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть меню"
            className="bg-transparent border-0 p-[8px] text-[22px] leading-none text-[#6b7885] cursor-pointer"
          >
            ✕
          </button>
        </div>
        <a className={linkClass} href="https://docs.tgshop.io/uz/telegramda-dokon-ochish/tezkor-boshlash" target="_blank" rel="noopener" onClick={onClose}>База знаний</a>
        <a className={linkClass} href="https://t.me/TGShopHelp_bot" target="_blank" rel="noopener" onClick={onClose}>Помощь</a>
        <a className={linkClass} href="#trust" onClick={onClose}>Кейсы</a>

        <div className="mt-[16px] flex flex-col gap-[10px]">
          <a
            href={SIGNIN_HREF}
            target="_blank"
            rel="noopener"
            onClick={onClose}
            className="block text-center py-[12px] rounded-[100px] border-[1.5px] border-[rgba(16,142,245,0.3)] text-[#108ef5] text-[15px] font-['SF_Pro:Semibold',sans-serif] font-[590] no-underline"
          >
            Войти
          </a>
          <a
            href={CTA_HREF}
            target="_blank"
            rel="noopener"
            onClick={onClose}
            className="block text-center py-[12px] rounded-[100px] bg-[#108ef5] text-white text-[15px] font-['SF_Pro:Semibold',sans-serif] font-[590] no-underline shadow-[0px_12px_24px_0px_rgba(51,133,255,0.22)]"
          >
            Зарегистрироваться
          </a>
        </div>

        <div className="mt-[20px] pt-[16px] border-t border-[#e9ebf1] text-[12px] text-[#6b7885]" data-name="lang-switch">
          Язык: <span className="text-[#121726] font-semibold">Русский</span> · <span className="cursor-pointer hover:text-[#121726]">O'zbek</span>
        </div>
      </div>
    </div>,
    document.body
  );
}


// === IMAGE CONSTANTS (deduped across sections) ===

// Hero
const imgHero_Frame21361400041 = `${import.meta.env.BASE_URL}assets/imgHero_Frame21361400041.png`;
const imgHero_Ellipse = `${import.meta.env.BASE_URL}assets/imgHero_Ellipse.svg`;

// Trust — brand logos (Figma node 40002682:1121). Local assets to survive
// the 7-day Figma CDN URL expiry that was breaking the strip.
const imgTrust_YvesRocher = `${import.meta.env.BASE_URL}assets/brand-yves-rocher.png`;
const imgTrust_61 = `${import.meta.env.BASE_URL}assets/brand-emra.png`;
const imgTrust_221 = `${import.meta.env.BASE_URL}assets/brand-merci.png`;
const imgTrust_51 = `${import.meta.env.BASE_URL}assets/brand-dragonfly.png`;
const imgTrust_62 = `${import.meta.env.BASE_URL}assets/brand-ana-hildebrant.png`;
const imgTrust_222 = `${import.meta.env.BASE_URL}assets/brand-skincare.png`;
const imgTrust_223 = `${import.meta.env.BASE_URL}assets/brand-bogner.png`;
const imgTrust_Photo1 = `${import.meta.env.BASE_URL}assets/imgTrust_Photo1.png`;
const imgTrust_Bg1 = `${import.meta.env.BASE_URL}assets/imgTrust_Bg1.png`;
const imgTrust_Bg2 = `${import.meta.env.BASE_URL}assets/imgTrust_Bg2.png`;
const imgTrust_Photo2 = `${import.meta.env.BASE_URL}assets/imgTrust_Photo2.png`;
const imgTrust_Logo1 = `${import.meta.env.BASE_URL}assets/brand-around-you.svg`;

// KeyFeatures
const imgKF_Ellipse = `${import.meta.env.BASE_URL}assets/imgKF_Ellipse.svg`;
const imgKF_Ellipse1 = `${import.meta.env.BASE_URL}assets/imgKF_Ellipse1.svg`;
const imgKF_Ellipse2 = `${import.meta.env.BASE_URL}assets/imgKF_Ellipse2.svg`;
const imgKF_Ellipse3 = `${import.meta.env.BASE_URL}assets/imgKF_Ellipse3.svg`;

// Solution
const imgSol_Ellipse = `${import.meta.env.BASE_URL}assets/imgSol_Ellipse.svg`;
const imgSol_Ellipse1 = `${import.meta.env.BASE_URL}assets/imgSol_Ellipse1.svg`;
const imgSol_Ellipse2 = `${import.meta.env.BASE_URL}assets/imgSol_Ellipse2.svg`;
const imgSol_Ellipse3 = `${import.meta.env.BASE_URL}assets/imgSol_Ellipse3.svg`;
const imgSol_Ellipse4 = `${import.meta.env.BASE_URL}assets/imgSol_Ellipse4.svg`;
const imgSol_Ellipse5 = `${import.meta.env.BASE_URL}assets/imgSol_Ellipse5.svg`;
const imgSol_Ellipse6 = `${import.meta.env.BASE_URL}assets/imgSol_Ellipse6.svg`;

// CTA_HREF is now imported from ./utm (it already includes ?utm_* from URL)

// === SECTION COMPONENTS ===

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-white border border-[rgba(0,0,0,0.05)] border-solid content-stretch flex items-center justify-between px-[16px] py-[12px] relative w-full" data-node-id="40002524:9616" data-name="Header">
      <div className="[word-break:break-word] bg-white content-stretch flex gap-[4px] items-center leading-[normal] overflow-clip relative shrink-0 text-[18px] whitespace-nowrap" data-node-id="40002794:8506" data-name="brand">
        <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0 text-[#121726]" style={{ fontVariationSettings: "'wdth' 100" }}>TGShop</p>
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#299eeb]" style={{ fontVariationSettings: "'wdth' 100" }}>Chat</p>
      </div>
      <div className="bg-white content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="40002794:8509" data-name="actions">
        <div className="[word-break:break-word] bg-white border border-[#e0e5ed] border-solid content-stretch flex gap-[4px] items-center leading-[normal] overflow-clip pl-[10px] pr-[10px] py-[8px] relative rounded-[8px] shrink-0 whitespace-nowrap cursor-pointer" data-node-id="40002794:8510" data-name="lang-btn">
          <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>🌐</p>
          <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-[#121726] text-[13px]" style={{ fontVariationSettings: "'wdth' 100" }}>O'zbek</p>
        </div>
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Открыть меню"
          className="bg-white border border-[#e0e5ed] border-solid flex flex-col gap-[4px] items-center justify-center px-[8px] py-[12px] rounded-[8px] shrink-0 cursor-pointer"
          data-node-id="40002794:8514"
          data-name="burger-btn"
        >
          <div className="bg-[#121726] h-[2px] rounded-[1px] w-[18px]" />
          <div className="bg-[#121726] h-[2px] rounded-[1px] w-[18px]" />
          <div className="bg-[#121726] h-[2px] rounded-[1px] w-[18px]" />
        </button>
      </div>
      {menuOpen && <MobileMenuPortal onClose={() => setMenuOpen(false)} />}
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center pb-[64px] pt-[48px] px-[20px] relative w-full" data-node-id="40002524:9624" data-name="Hero">
      <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[335px]" data-name="hero-inner">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[335px]" data-name="left">
          <div className="bg-[rgba(16,142,245,0.08)] content-stretch flex gap-[8px] items-center overflow-clip px-[14px] py-[8px] relative rounded-[100px] shrink-0" data-name="pill">
            <div className="bg-[#108ef5] relative rounded-[4px] shrink-0 size-[8px]" />
            <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[#108ef5] text-[11px] tracking-[-0.11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              2 000+ магазинов уже подключили TGShop
            </p>
          </div>
          <div className="h-[24px] shrink-0 w-[100px]" />
          <div className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#0a1519] text-[30px] tracking-[-0.9px] w-[335px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.05] mb-0">{`Telegram-магазин `}</p>
            <p className="leading-[1.05]">и чаты с клиентами в одном кабинете</p>
          </div>
          <div className="h-[24px] shrink-0 w-[100px]" />
          <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#595959] text-[15px] tracking-[-0.15px] w-[335px]">
            Ваши менеджеры не успевают отвечать всем клиентам в Telegram — и заказы уходят к конкурентам. С TGShop ни одна заявка не потеряется, и клиенты смогут покупать в 1 клик.
          </p>
          <div className="h-[32px] shrink-0 w-[100px]" />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="cta-row">
            <a href={CTA_HREF} target="_blank" rel="noopener" className="contents no-underline">
              <div className="bg-[#108ef5] content-stretch cursor-pointer flex h-[48px] items-center justify-center overflow-clip px-[24px] relative rounded-[100px] shadow-[0px_20px_35px_0px_rgba(51,133,255,0.22)] shrink-0 w-full" data-name="btn-primary-l">
                <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.16px] whitespace-nowrap">
                  Попробовать бесплатно
                </p>
              </div>
            </a>
          </div>
          <div className="h-[20px] shrink-0 w-[100px]" />
          <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1d9b5e] text-[13px] tracking-[-0.13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            14 дней бесплатно · без разработки
          </p>
        </div>
        <div className="h-[317px] relative shrink-0 w-[460px]" data-name="right">
          <div className="absolute content-stretch drop-shadow-[-2px_-2px_3px_rgba(0,0,0,0.1)] flex h-[230.1px] items-start left-[158.6px] overflow-clip rounded-[20px] top-[43.22px] w-[209.95px]" data-name="mock-body">
            <div className="bg-white content-stretch flex flex-col gap-[2px] h-[230.1px] items-start overflow-clip px-[10px] py-[14px] relative shrink-0 w-[209.95px]" data-name="chats">
              {/* Fixed tab widths (w-[40.95px] etc) clipped Russian labels. Removed
                  widths + overflow-clip so each pill auto-sizes to its content.
                  Reduced gap from 6px to 4px so all 4 tabs fit in the 203.45px row. */}
              <div className="content-stretch flex gap-[4px] h-[27.3px] items-start pb-[12px] px-[4px] relative shrink-0 w-[203.45px]" data-name="ctabs">
                <div className="bg-[#108ef5] content-stretch flex h-[19.5px] items-center px-[8px] py-[6px] relative rounded-[100px] shrink-0">
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[8px] text-white tracking-[-0.08px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>💬 Чаты</p>
                </div>
                <div className="[word-break:break-word] bg-[#f6f7f9] content-stretch flex gap-[3px] h-[19.5px] items-center leading-[1.5] px-[8px] py-[6px] relative rounded-[100px] shrink-0 text-[8px] tracking-[-0.08px] whitespace-nowrap">
                  <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#767d88]" style={{ fontVariationSettings: "'wdth' 100" }}>Новые</p>
                  <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-[#e5484d]" style={{ fontVariationSettings: "'wdth' 100" }}>8</p>
                </div>
                <div className="[word-break:break-word] bg-[#f6f7f9] content-stretch flex gap-[3px] h-[19.5px] items-center leading-[1.5] px-[8px] py-[6px] relative rounded-[100px] shrink-0 text-[8px] tracking-[-0.08px] whitespace-nowrap">
                  <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#767d88]" style={{ fontVariationSettings: "'wdth' 100" }}>Открыты</p>
                  <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-[#f7b50d]" style={{ fontVariationSettings: "'wdth' 100" }}>5</p>
                </div>
                <div className="[word-break:break-word] bg-[#f6f7f9] content-stretch flex gap-[3px] h-[19.5px] items-center leading-[1.5] px-[8px] py-[6px] relative rounded-[100px] shrink-0 text-[8px] tracking-[-0.08px] whitespace-nowrap">
                  <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#767d88]" style={{ fontVariationSettings: "'wdth' 100" }}>Закрыты</p>
                  <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-[#595959]" style={{ fontVariationSettings: "'wdth' 100" }}>3</p>
                </div>
              </div>
              {/* Fixed badge widths (w-[29.9px] etc) were sized for Uzbek text
                  ("Yangi"/"Ochiq"/"Yopiq") and clipped Russian "Новый"/"Открыт"/"Закрыт".
                  Removed badgeW — pill auto-sizes to content via px-[7px] padding. */}
              {[
                { bg: 'bg-[#f3f8ff]', av: 'bg-[#e5484d]', avT: 'Ю', name: 'Регина К.', time: 'только что', badge: 'Новый', badgeBg: 'bg-[#e5484d]', preview: null },
                { bg: 'bg-[#f3f8ff]', av: 'bg-[#e5484d]', avT: 'Ю', name: HERO_CHAT_NAMES[1], time: 'только что', badge: 'Новый', badgeBg: 'bg-[#e5484d]', preview: null },
                { bg: '', av: 'bg-[#8b5cf6]', avT: 'Д', name: HERO_CHAT_NAMES[2], time: '4 мин', badge: 'Открыт', badgeBg: 'bg-[#f7b50d]', preview: { t: 'Алина: Передал в доставку ✅', c: '#108ef5' } },
                { bg: '', av: 'bg-[#ec4899]', avT: 'М', name: HERO_CHAT_NAMES[3], time: '12 мин', badge: 'Открыт', badgeBg: 'bg-[#f7b50d]', preview: { t: 'Спасибо!', c: '#595959' } },
                { bg: 'bg-[#f3f8ff]', av: 'bg-[#0ea5e9]', avT: 'А', name: HERO_CHAT_NAMES[4], time: '10 мин', badge: 'Закрыт', badgeBg: 'bg-[#4fd192]', preview: { t: 'Доставите сегодня до 18:00?', c: '#595959' } },
                { bg: 'bg-[#f3f8ff]', av: 'bg-[#0ea5e9]', avT: 'А', name: HERO_CHAT_NAMES[5], time: '15 мин', badge: 'Закрыт', badgeBg: 'bg-[#4fd192]', preview: { t: 'Доставите сегодня до 18:00?', c: '#595959' } },
              ].map((c, i) => (
                <div key={i} className={`${c.bg} content-stretch flex gap-[8px] h-[28.6px] items-center p-[10px] relative rounded-[10px] shrink-0 w-[193.7px]`} data-name="ch">
                  <div className={`${c.av} content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shrink-0 size-[18.2px]`}>
                    <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[8px] text-white tracking-[-0.08px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{c.avT}</p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-0 relative shrink">
                    <div className="content-stretch flex gap-[4px] items-baseline relative shrink-0 w-full">
                      <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[#0a1519] text-[8px] tracking-[-0.08px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{c.name}</p>
                      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.5] relative shrink-0 text-[#767d88] text-[8px] tracking-[-0.08px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{c.time}</p>
                    </div>
                    {c.preview && (
                      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.5] overflow-hidden relative shrink-0 text-[8px] text-ellipsis tracking-[-0.08px] w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100", color: c.preview.c }}>
                        {c.preview.t}
                      </p>
                    )}
                  </div>
                  <div className={`${c.badgeBg} content-stretch flex h-[13.65px] items-center px-[7px] py-[3px] relative rounded-[100px] shrink-0`}>
                    <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[8px] text-white tracking-[0.16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{c.badge}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col h-[315px] items-start left-[70.5px] pb-[16px] pt-[14px] px-[14px] top-[2px] w-[156px]" data-name="shop">
            {/* stabs: removed w-[124px] + overflow-clip + first-tab fixed width
                so the "Buyurtmalar 198" pill (longer than "Заказы 198") fits
                without clipping the rounded background. */}
            <div className="content-stretch flex gap-[2px] h-[19px] items-start relative shrink-0" data-name="stabs">
              <div className="bg-[#108ef5] content-stretch flex h-[19px] items-center px-[7px] py-[6px] relative rounded-[100px] shrink-0">
                <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[8px] text-white tracking-[-0.08px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>🛍 Магазин</p>
              </div>
              <div className="[word-break:break-word] bg-[#f6f7f9] content-stretch flex gap-[4px] h-[19px] items-center leading-[1.5] px-[7px] py-[6px] relative rounded-[100px] shrink-0 text-[8px] tracking-[-0.08px] whitespace-nowrap">
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#767d88]" style={{ fontVariationSettings: "'wdth' 100" }}>Заказы</p>
                <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-[#0a1519]" style={{ fontVariationSettings: "'wdth' 100" }}>198</p>
              </div>
            </div>
            <div className="h-[7.8px] shrink-0 w-[65px]" />
            <div className="h-[268px] relative rounded-[20px] shadow-[-1px_-1px_6px_0px_rgba(0,0,0,0.2)] shrink-0 w-[124px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgHero_Frame21361400041} />
            </div>
          </div>
          <div className="absolute flex h-[89.893px] items-center justify-center left-[74.62px] top-[247.38px] w-[166.337px]">
            <div className="-rotate-6 flex-none">
              <div className="bg-white drop-shadow-[0px_16px_20px_rgba(13,18,31,0.12)] h-[73.622px] relative rounded-[20px] w-[159.515px]" data-name="badge-15min">
                <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[15.6px] not-italic text-[#6b7380] text-[9px] top-[13px] whitespace-nowrap">Запуск за</p>
                <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[14.71px] not-italic text-[#121726] text-[17px] top-[26.2px] whitespace-nowrap">15 минут</p>
                <div className="absolute left-[15.64px] size-[14.3px] top-[50.91px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHero_Ellipse} />
                </div>
                <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[35.14px] not-italic text-[#1f242e] text-[9px] top-[52.21px] whitespace-nowrap">без программистов</p>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[73.222px] items-center justify-center left-[304.85px] top-[11.05px] w-[112.588px]">
            <div className="flex-none rotate-3">
              <div className="[word-break:break-word] bg-white drop-shadow-[0px_12px_15px_rgba(79,209,146,0.22)] h-[67.6px] not-italic relative rounded-[16px] w-[109.2px]" data-name="badge-37orders">
                <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[13px] text-[#0fba82] text-[21px] top-[9.1px]">+37</p>
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10px] left-[12.99px] right-[10px] text-[#4d5966] text-[8px] top-[36.25px]">новых заказов сегодня</p>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] absolute bg-white drop-shadow-[0px_12px_15px_rgba(13,18,31,0.1)] h-[67.6px] left-[304.85px] not-italic rounded-[16px] top-[230.75px] w-[101.4px]" data-name="badge-12msg">
            <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[13px] text-[#121726] text-[21px] top-[9.1px]">12</p>
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10px] left-[13px] right-[10px] text-[#4d5966] text-[8px] top-[36.4px]">новых заявок в чатах</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Trust() {
  return (
    <div className="bg-[#f6f7f9] content-stretch flex flex-col gap-[24px] items-center px-[20px] py-[48px] relative w-full" data-node-id="40002674:8244" data-name="Trust" id="trust">
      <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#121726] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Нам доверяют
      </p>
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="logos">
        <div className="content-stretch flex flex-col gap-[12px] items-center py-[8px] relative shrink-0 w-full">
          {/* Restored 1:1 from Figma node 40002682:1121 — subagent had broken
              several h/w/crop params, causing stretched logos that overflowed
              the 4-column row. Each block matches the Figma source exactly. */}
          <div className="content-stretch flex gap-[14px] items-center justify-center overflow-clip relative shrink-0" data-name="logo-row1">
            {/* Yves Rocher 85.333×18 */}
            <div className="h-[18px] relative shrink-0 w-[85.333px]">
              <img alt="Yves Rocher" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTrust_YvesRocher} />
            </div>
            {/* EMRA 64×16 */}
            <div className="h-[16px] relative shrink-0 w-[64px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="EMRA" className="absolute h-[155.06%] left-0 max-w-none top-[-27.53%] w-full" src={imgTrust_61} />
              </div>
            </div>
            {/* Merci Lingerie 63×18 */}
            <div className="h-[18px] relative shrink-0 w-[63px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="Merci Lingerie" className="absolute h-[99.28%] left-[-0.52%] max-w-none top-[-0.16%] w-[100.81%]" src={imgTrust_221} />
              </div>
            </div>
            {/* Dragonfly 60×18 */}
            <div className="h-[18px] relative shrink-0 w-[60px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="Dragonfly" className="absolute h-[115.61%] left-[0.12%] max-w-none top-[0.42%] w-[100.8%]" src={imgTrust_51} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[14px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="logo-row2">
            {/* Around You (SVG) 65×12 */}
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
              <div className="col-1 h-[12px] ml-0 mt-0 relative row-1 w-[65px]">
                <img alt="Around You" className="absolute block inset-0 max-w-none size-full" src={imgTrust_Logo1} />
              </div>
            </div>
            {/* ANA HILDEBRANT 66×18 */}
            <div className="h-[18px] relative shrink-0 w-[66px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="ANA HILDEBRANT" className="absolute h-[270.73%] left-[-46.98%] max-w-none top-[-85.37%] w-[189.08%]" src={imgTrust_62} />
              </div>
            </div>
            {/* skincare 72×18 */}
            <div className="h-[18px] mix-blend-darken relative shrink-0 w-[72px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="Skincare" className="absolute h-[145.61%] left-[-4.68%] max-w-none top-[-19.3%] w-[106.36%]" src={imgTrust_222} />
              </div>
            </div>
            {/* Bogner 82×18 */}
            <div className="h-[18px] relative shrink-0 w-[82px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="Bogner" className="absolute h-[91.65%] left-[0.17%] max-w-none top-[6.39%] w-[99.45%]" src={imgTrust_223} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="cases-row">
        <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-name="row1">
          {/* FashionFabrique */}
          <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px px-[12px] py-[14px] relative rounded-[14px] self-stretch" data-name="case-Fashion Fabrique">
            <div className="[word-break:break-word] bg-[rgba(33,178,99,0.14)] content-stretch flex gap-[5px] items-center leading-[normal] overflow-clip px-[8px] py-[3px] relative rounded-[8px] shrink-0 text-[#0f8c33] text-[10px] w-full whitespace-nowrap">
              <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>✓</p>
              <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>x2 клиентов</p>
            </div>
            <div className="bg-white content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full">
              <div className="bg-white content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0">
                <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f8c33] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>+30%</p>
                <div className="bg-[#21b263] h-[4px] relative rounded-[2px] shrink-0 w-[36px]" />
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6b7885] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>рост онлайн-продаж</p>
              </div>
              <div className="bg-white content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0">
                <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f8c33] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>+40%</p>
                <div className="bg-[#21b263] h-[4px] relative rounded-[2px] shrink-0 w-[36px]" />
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6b7885] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>товаров в заказе</p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8c949e] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>за квартал</p>
            {/* mt-auto pins avatar to bottom of card — aligns with Around You whose
                "«до» было на маркетплейсе" caption wraps to 2 lines, pushing its
                avatar further down. */}
            <div className="bg-white content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full mt-auto">
              <div className="border border-[#f6f7f9] border-solid relative rounded-[200px] shrink-0 size-[32px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[200px] size-full" src={imgTrust_Photo1} />
              </div>
              <div className="[word-break:break-word] bg-white content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px overflow-clip relative">
                <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#121726] text-[11px] w-[109px]" style={{ fontVariationSettings: "'wdth' 100" }}>FashionFabrique</p>
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[13px] min-w-full relative shrink-0 text-[#6b7885] text-[10px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>бренд одежды и аксессуаров</p>
              </div>
            </div>
          </div>
          {/* Around You — Russian source text in JSX; i18n walker translates to Uzbek via dict. */}
          <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px pl-[12px] pr-[10px] py-[14px] relative rounded-[14px] self-stretch" data-name="case-Around You">
            <div className="[word-break:break-word] bg-[rgba(33,178,99,0.14)] content-stretch flex gap-[5px] items-center leading-[normal] overflow-clip px-[8px] py-[3px] relative rounded-[8px] shrink-0 text-[#0f8c33] text-[10px] w-full whitespace-nowrap">
              <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>✓</p>
              <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>{T.zeroAdsBadge}</p>
            </div>
            <div className="bg-white content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full">
              <div className="bg-white content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0">
                <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f8c33] text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>6 515 заказов</p>
                <div className="bg-[#21b263] h-[4px] relative rounded-[2px] shrink-0 w-[50px]" />
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8c949e] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>с TGShop</p>
              </div>
              <div className="bg-white content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0">
                <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f04545] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>740</p>
                <div className="bg-[#f04545] h-[4px] relative rounded-[2px] shrink-0 w-[8px]" />
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8c949e] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>«до» было на маркетплейсе</p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8c949e] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>за 6 месяцев</p>
            <div className="bg-white content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full">
              <div className="border border-[#f6f7f9] border-solid relative rounded-[999px] shrink-0 size-[32px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgTrust_Bg1} />
              </div>
              <div className="[word-break:break-word] bg-white content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px overflow-clip relative">
                <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#121726] text-[13px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>Around You</p>
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[13px] relative shrink-0 text-[#6b7885] text-[10px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>цветочный магазин</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-name="row2">
          {/* Hold Store */}
          <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px px-[12px] py-[14px] relative rounded-[14px] self-stretch" data-name="case-Hold Store">
            <div className="[word-break:break-word] bg-[rgba(33,178,99,0.14)] content-stretch flex gap-[5px] items-center leading-[normal] overflow-clip px-[8px] py-[3px] relative rounded-[8px] shrink-0 text-[#0f8c33] text-[10px] w-full whitespace-nowrap">
              <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>✓</p>
              <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>Постоянный рост</p>
            </div>
            <div className="bg-white content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full">
              <div className="bg-white content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0">
                <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f8c33] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>+15%</p>
                <div className="bg-[#21b263] h-[4px] relative rounded-[2px] shrink-0 w-[36px]" />
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6b7885] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>конверсия продаж</p>
              </div>
              <div className="bg-white content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0">
                <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f8c33] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>+7%</p>
                <div className="bg-[#21b263] h-[4px] relative rounded-[2px] shrink-0 w-[36px]" />
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6b7885] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>рост CR в месяц</p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8c949e] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>в месяц</p>
            <div className="bg-white content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full">
              <div className="border border-[#f6f7f9] border-solid relative rounded-[999px] shrink-0 size-[32px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgTrust_Bg2} />
              </div>
              <div className="[word-break:break-word] bg-white content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px overflow-clip relative">
                <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#121726] text-[13px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>Hold Store</p>
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[13px] relative shrink-0 text-[#6b7885] text-[10px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>магазин кроссовок</p>
              </div>
            </div>
          </div>
          {/* Casher */}
          <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px px-[12px] py-[14px] relative rounded-[14px] self-stretch" data-name="case-Casher">
            <div className="[word-break:break-word] bg-[rgba(33,178,99,0.14)] content-stretch flex gap-[5px] items-center leading-[normal] overflow-clip px-[8px] py-[3px] relative rounded-[8px] shrink-0 text-[#0f8c33] text-[10px] w-full whitespace-nowrap">
              <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>✓</p>
              <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>Без сложной CRM</p>
            </div>
            <div className="bg-white content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full">
              <div className="bg-white content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0">
                <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f8c33] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>+43%</p>
                <div className="bg-[#21b263] h-[4px] relative rounded-[2px] shrink-0 w-[36px]" />
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6b7885] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>конверсия продаж</p>
              </div>
              <div className="bg-white content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0">
                <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f8c33] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>x1,5</p>
                <div className="bg-[#21b263] h-[4px] relative rounded-[2px] shrink-0 w-[36px]" />
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6b7885] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>рост выручки</p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8c949e] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>за полгода</p>
            <div className="bg-white content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full">
              <div className="border-[1.25px] border-[#f6f7f9] border-solid relative rounded-[1000px] shrink-0 size-[32px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[1000px] size-full" src={imgTrust_Photo2} />
              </div>
              <div className="[word-break:break-word] bg-white content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px overflow-clip relative">
                <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#121726] text-[13px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>Casher</p>
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[13px] relative shrink-0 text-[#6b7885] text-[10px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>магазин одежды</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ebedf2] h-px relative shrink-0 w-[200px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center leading-[normal] overflow-clip relative shrink-0 whitespace-nowrap" data-name="stats">
        {[
          { v: '2 000+', l: 'магазинов в Telegram' },
          { v: '1,5 млн', l: 'заказов обработано' },
          { v: '15 минут', l: 'на подключение' },
        ].map((s, i) => (
          <div key={i} className="content-stretch flex flex-col gap-[2px] items-center overflow-clip relative shrink-0">
            <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0 text-[#108ef5] text-[28px]" style={{ fontVariationSettings: "'wdth' 100" }}>{s.v}</p>
            <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7885] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Pain() {
  const cards = [
    { red: true, t: 'Клиент остался без ответа', d: 'Менеджер может забыть ответить — и никто это не заметит. Клиент подождал час и купил у конкурента.' },
    { red: true, t: 'Уволился менеджер — клиенты ушли с ним', d: 'Переписка велась в личном Telegram. Кто этот клиент и чем интересовался, знает только бывший сотрудник.' },
    { red: true, t: 'Менеджеры обещают то, чего нет', d: 'Менеджер грубит клиенту, называет неверную цену или придумывает сроки доставки. Об этом вы узнаёте, когда клиент уже ушёл с негативом.' },
    { red: false, t: 'Контроль чатов с клиентами', d: 'Руководитель открывает любой диалог и видит, как менеджер обрабатывает заявки и как общается с клиентами.' },
    { red: false, t: 'Магазин принимает заказы 24/7', d: 'Клиенты оформляют заказ в один клик в любое время суток, а вы не теряете выручку в нерабочее время.' },
    { red: false, t: 'Без сложных CRM', d: 'Доступ к перепискам и заказам прямо в Telegram. Если менеджер уволится, клиенты останутся у вас, а не на чужом телефоне.' },
  ];
  return (
    <div className="bg-[#f6f7f9] content-stretch flex flex-col items-center px-[20px] py-[40px] relative w-full" data-node-id="40002524:9773" data-name="Pain">
      <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-[335px]">
        <div className="h-[16px] shrink-0 w-[100px]" />
        <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#0a1519] text-[26px] text-center tracking-[-0.65px] w-[335px]">
          Каждый день ваш магазин теряет выручку
        </p>
      </div>
      <div className="h-[36px] shrink-0 w-[100px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[335px]" data-name="pain-grid">
        {cards.map((c, i) => (
          <div key={i} className={`bg-white border ${c.red ? 'border-[#f5c7c7]' : 'border-[#b8e8cf]'} border-solid content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[20px] relative rounded-[14px] shrink-0 w-full`} data-name="pain-card">
            <div className={`${c.red ? 'bg-[#fae8e8]' : 'bg-[#d9f7e8]'} content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[32px]`}>
              <p className={`[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 ${c.red ? 'text-[#f04545]' : 'text-[#21b263]'} text-[14px] whitespace-nowrap`} style={{ fontVariationSettings: "'wdth' 100" }}>
                {c.red ? '✕' : '✓'}
              </p>
            </div>
            <div className="relative shrink-0 size-[4px]" />
            <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[#121726] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>{c.t}</p>
            <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[#667080] text-[13px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>{c.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Price() {
  const bars = [
    11, 18, 14, 24, 21, 30, 26, 35, 32, 42, 38, 46, 43, 51, 48, 56, 53, 61, 58, 64, 62, 67, 66, 70, 69, 74, 72, 77, 75
  ];
  const opacities = [0.21, 0.24, 0.22, 0.27, 0.25, 0.30, 0.28, 0.33, 0.31, 0.36, 0.34, 0.38, 0.37, 0.41, 0.39, 0.43, 0.41, 0.45, 0.44, 0.47, 0.46, 0.49, 0.48, 0.50, 0.49, 0.52, 0.51, 0.53, 0.53];
  return (
    <div className="bg-white content-stretch flex flex-col items-center px-[20px] py-[56px] relative w-full" data-node-id="40002524:9821" data-name="Price">
      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[335px]">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[335px]" data-name="price-text">
          <div className="bg-[rgba(16,142,245,0.08)] content-stretch flex items-start overflow-clip px-[12px] py-[6px] relative rounded-[100px] shrink-0">
            <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#108ef5] text-[12px] tracking-[-0.12px] whitespace-nowrap">
              Цена бездействия
            </p>
          </div>
          <div className="h-[16px] shrink-0 w-[100px]" />
          <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#0a1519] text-[26px] tracking-[-0.65px] w-[335px]">
            Посчитайте, сколько вы теряете
          </p>
          <div className="h-[24px] shrink-0 w-[100px]" />
          <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#595959] text-[15px] tracking-[-0.15px] w-[335px]">
            Магазин получает 50 заявок в день, и хотя бы 10% теряются — это 5 потерянных клиентов ежедневно.
          </p>
          <div className="h-[16px] shrink-0 w-[100px]" />
          <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#595959] text-[15px] tracking-[-0.15px] w-[335px]">
            {T.calcBody}
          </p>
          <div className="h-[32px] shrink-0 w-[100px]" />
          <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#e5484d] text-[15px] tracking-[-0.15px] w-[335px]">
            Не из-за плохого товара — просто потому что ответили поздно.
          </p>
          <div className="h-[28px] shrink-0 w-[100px]" />
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="price-cta">
            <a href={CTA_HREF} target="_blank" rel="noopener" className="contents no-underline">
              <div className="bg-[#108ef5] content-stretch cursor-pointer flex h-[52px] items-center justify-center overflow-clip px-[32px] relative rounded-[100px] shadow-[0px_20px_35px_0px_rgba(51,133,255,0.22)] shrink-0 w-full" data-name="btn-primary-l">
                <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.16px] whitespace-nowrap">
                  Хочу больше продаж
                </p>
              </div>
            </a>
            <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#767d88] text-[13px] tracking-[-0.13px] whitespace-nowrap">
              14 дней бесплатно · карта не нужна
            </p>
          </div>
        </div>
        <div className="bg-white border border-[rgba(0,0,0,0.06)] border-solid content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.06)] flex flex-col gap-[12px] items-center pb-[16px] relative rounded-[24px] shrink-0 w-[335px]" data-name="calc-card">
          <div className="bg-white border border-[rgba(0,0,0,0.06)] border-solid content-stretch flex flex-col h-[196px] items-start overflow-clip pb-px px-[20px] relative rounded-[16px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] shrink-0 w-[335px]" data-name="loss-chart">
            <div className="content-stretch flex h-[48px] items-center relative shrink-0 w-[221px]">
              <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0a1519] text-[13px] tracking-[-0.13px] whitespace-nowrap">
                Потери накапливаются каждый день
              </p>
              <div className="flex-[1_0_0] h-[100px] min-w-px relative" />
            </div>
            <div className="h-[14px] shrink-0 w-[100px]" />
            <div className="content-stretch flex gap-[3px] h-[80px] items-end relative shrink-0 w-full" data-name="bars">
              {bars.map((h, i) => (
                <div key={i} className="relative rounded-tl-[3px] rounded-tr-[3px] shrink-0 w-[6.933px]" style={{ height: `${h}px`, backgroundColor: `rgba(229,72,77,${opacities[i]})` }} />
              ))}
              <div className="bg-[#e5484d] h-[80px] relative rounded-tl-[3px] rounded-tr-[3px] shadow-[0px_0px_14px_0px_rgba(229,71,77,0.35)] shrink-0 w-[6.933px]" />
            </div>
            <div className="h-[10px] shrink-0 w-[100px]" />
            <div className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-full">
              <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#767d88] text-[11px] tracking-[-0.11px] whitespace-nowrap">
                день 1 — {T.lossPerMonthShort}
              </p>
              <div className="flex-[1_0_0] h-[100px] min-w-px relative" />
              <div className="[word-break:break-word] content-stretch flex gap-[4px] items-end justify-end leading-[1.5] not-italic overflow-clip relative shrink-0 text-[11px] tracking-[-0.11px] whitespace-nowrap">
                <p className="font-['SF_Pro_Display:Regular',sans-serif] relative shrink-0 text-[#767d88]">день 30 —</p>
                <p className="font-['SF_Pro_Display:Bold',sans-serif] relative shrink-0 text-[#e5484d]">{T.lossMonthEnd}</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#767d88] text-[22px] text-center tracking-[-0.22px] w-[275px]">↓</p>
          <div className="bg-[#fff1f1] border border-[rgba(229,72,77,0.2)] border-solid content-stretch flex flex-col items-center overflow-clip px-[24px] py-[22px] relative rounded-[16px] shadow-[0px_10px_30px_0px_rgba(229,71,77,0.08)] shrink-0 w-full" data-name="calc-total">
            <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5484d] text-[13px] tracking-[0.78px] whitespace-nowrap">ПОТЕРИ В МЕСЯЦ</p>
            <div className="h-[8px] shrink-0 w-[100px]" />
            <div className="[word-break:break-word] content-stretch flex gap-[8px] items-baseline not-italic overflow-clip relative shrink-0 whitespace-nowrap">
              <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-none relative shrink-0 text-[#e5484d] text-[32px] tracking-[-1.28px]">45 000 000</p>
              <p className="font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] relative shrink-0 text-[16px] text-[rgba(229,72,77,0.8)] tracking-[-0.16px]">soʻm</p>
            </div>
          </div>
          <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#767d88] text-[12px] text-center tracking-[-0.12px] w-[275px]">
            Средний магазин · 30 рабочих дней
          </p>
        </div>
      </div>
    </div>
  );
}

function How() {
  return (
    <div className="bg-[#f6f7f9] content-stretch flex flex-col items-center px-[20px] py-[40px] relative w-full" data-node-id="40002524:10055" data-name="How">
      <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-[335px]">
        <div className="bg-[rgba(16,142,245,0.08)] content-stretch flex items-start overflow-clip px-[12px] py-[6px] relative rounded-[100px] shrink-0">
          <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#108ef5] text-[12px] tracking-[-0.12px] whitespace-nowrap">Старт за 5 минут</p>
        </div>
        <div className="h-[16px] shrink-0 w-[100px]" />
        <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#0a1519] text-[26px] text-center tracking-[-0.65px] w-[335px]">
          Как начать работу — три шага
        </p>
      </div>
      <div className="h-[21.6px] shrink-0 w-[100px]" />
      <div className="content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0 w-[335px]" data-name="steps">
        {/* Step 1 */}
        <div className="bg-white border border-[rgba(0,0,0,0.06)] border-solid content-stretch flex flex-col items-start overflow-clip pb-[18px] pt-[20px] px-[18px] relative rounded-[24px] shrink-0 w-[335px]" data-name="step">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[62px]">
            <div className="bg-[#108ef5] content-stretch flex items-start overflow-clip px-[14px] py-[6px] relative rounded-[100px] shrink-0">
              <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[13px] text-white tracking-[-0.13px] whitespace-nowrap">Шаг 1</p>
            </div>
            <div className="flex-[1_0_0] h-[16px] min-w-px relative" />
            <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#767d88] text-[12px] tracking-[-0.12px] whitespace-nowrap">5 минут</p>
          </div>
          <div className="h-[8px] shrink-0 w-[100px]" />
          <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#0a1519] text-[18px] tracking-[-0.36px] w-[287px]" style={{ fontVariationSettings: "'wdth' 100" }}>Создайте магазин</p>
          <div className="h-[5px] shrink-0 w-[100px]" />
          <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#595959] text-[15px] tracking-[-0.15px] w-[287px]" style={{ fontVariationSettings: "'wdth' 100" }}>Загрузите товары, включите доставку и оплату.</p>
          <div className="h-[10px] shrink-0 w-[100px]" />
          <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex flex-col gap-[6px] items-start overflow-clip p-[14px] relative rounded-[14px] shrink-0 w-full" data-name="m1-setup">
            {[
              { l: 'Каталог', v: '24 SKU' },
              { l: 'Оплата', v: T.setupPayments },
              { l: 'Доставка', v: '3 способа' },
            ].map((r, i) => (
              <div key={i} className="bg-white content-stretch flex gap-[10px] items-center overflow-clip py-[4px] relative shrink-0">
                <div className="bg-[rgba(15,186,130,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[11px] shrink-0 size-[22px]">
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#0fba82] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>✓</p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{r.l}</p>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6b7885] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{r.v}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Step 2 */}
        <div className="bg-white border border-[rgba(0,0,0,0.06)] border-solid content-stretch flex flex-col items-start overflow-clip pb-[18px] pt-[20px] px-[18px] relative rounded-[24px] shrink-0 w-[335px]" data-name="step">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[64px]">
            <div className="bg-[#108ef5] content-stretch flex items-start overflow-clip px-[14px] py-[6px] relative rounded-[100px] shrink-0">
              <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[13px] text-white tracking-[-0.13px] whitespace-nowrap">Шаг 2</p>
            </div>
            <div className="flex-[1_0_0] h-[16px] min-w-px relative" />
            <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#767d88] text-[12px] tracking-[-0.12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>1 минута</p>
          </div>
          <div className="h-[8px] shrink-0 w-[100px]" />
          <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#0a1519] text-[18px] tracking-[-0.36px] w-[287px]" style={{ fontVariationSettings: "'wdth' 100" }}>Выдайте доступ менеджерам</p>
          <div className="h-[5px] shrink-0 w-[100px]" />
          <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#595959] text-[15px] tracking-[-0.15px] w-[287px]" style={{ fontVariationSettings: "'wdth' 100" }}>Обрабатывайте заявки и вопросы клиентов.</p>
          <div className="h-[10px] shrink-0 w-[100px]" />
          <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[14px] relative rounded-[14px] shrink-0 w-full" data-name="m2-chat">
            <div className="bg-white content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full">
              <div className="bg-white content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0">
                <div className="bg-[rgba(38,99,235,0.15)] content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[24px]">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#2663eb] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Ю</p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Юлия К.</p>
              </div>
              <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#99a6b2] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>1 мин</p>
            </div>
            <div className="bg-[#f7fafc] content-stretch flex items-start overflow-clip px-[12px] py-[10px] relative rounded-[12px] shrink-0">
              <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#121726] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Есть Nike Air Max 39?</p>
            </div>
            <div className="bg-white content-stretch flex items-start justify-end overflow-clip relative shrink-0 w-full">
              <div className="bg-[#e8f2ff] content-stretch flex items-start overflow-clip px-[12px] py-[10px] relative rounded-[12px] shrink-0">
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#121726] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{T.chatPriceReply}</p>
              </div>
            </div>
            <div className="bg-[rgba(15,186,130,0.1)] content-stretch flex gap-[10px] items-center overflow-clip px-[12px] py-[10px] relative rounded-[12px] shrink-0 w-full">
              <div className="bg-[#0fba82] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[20px]">
                <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[11px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>✓</p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] overflow-clip relative shrink-0 whitespace-nowrap">
                <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-[#121726] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>Заказ оформлен</p>
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7885] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>{T.chatOrderSum}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Step 3 */}
        <div className="bg-white border border-[rgba(0,0,0,0.06)] border-solid content-stretch flex flex-col items-start overflow-clip pb-[18px] pt-[20px] px-[18px] relative rounded-[24px] shrink-0 w-[335px]" data-name="step">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[64px]">
            <div className="bg-[#108ef5] content-stretch flex items-start overflow-clip px-[14px] py-[6px] relative rounded-[100px] shrink-0">
              <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[13px] text-white tracking-[-0.13px] whitespace-nowrap">Шаг 3</p>
            </div>
            <div className="flex-[1_0_0] h-[16px] min-w-px relative" />
            <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#767d88] text-[12px] tracking-[-0.12px] whitespace-nowrap">автоматически</p>
          </div>
          <div className="h-[8px] shrink-0 w-[100px]" />
          <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#0a1519] text-[18px] tracking-[-0.36px] w-[287px]" style={{ fontVariationSettings: "'wdth' 100" }}>Отслеживайте продажи</p>
          <div className="h-[5px] shrink-0 w-[100px]" />
          <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#595959] text-[15px] tracking-[-0.15px] w-[287px]" style={{ fontVariationSettings: "'wdth' 100" }}>Контролируйте все диалоги и заказы — в одном месте в Telegram.</p>
          <div className="h-[10px] shrink-0 w-[100px]" />
          <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex flex-col gap-[6px] items-start overflow-clip p-[14px] relative rounded-[14px] shrink-0 w-full" data-name="m3-stats">
            {[
              { ic: '📦', icBg: 'bg-[rgba(38,99,235,0.12)]', icC: 'text-[#2663eb]', l: 'Заказов', v: '47' },
              { ic: '💰', icBg: 'bg-[rgba(15,186,130,0.12)]', icC: 'text-[#0fba82]', l: 'Выручка', v: '6,2 млн' },
              { ic: '👥', icBg: 'bg-[rgba(140,92,245,0.12)]', icC: 'text-[#8c5cf5]', l: 'Новых клиентов', v: '12' },
            ].map((r, i) => (
              <div key={i} className="bg-white content-stretch flex gap-[10px] items-center overflow-clip py-[4px] relative shrink-0">
                <div className={`${r.icBg} content-stretch flex items-center justify-center overflow-clip relative rounded-[11px] shrink-0 size-[22px]`}>
                  <p className={`[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 ${r.icC} text-[11px] whitespace-nowrap`} style={{ fontVariationSettings: "'wdth' 100" }}>{r.ic}</p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{r.l}</p>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6b7885] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{r.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[32px] shrink-0 w-[100px]" />
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
        <a href={CTA_HREF} target="_blank" rel="noopener" className="contents no-underline">
          <div className="bg-[#108ef5] content-stretch cursor-pointer flex h-[48px] items-center justify-center overflow-clip px-[24px] relative rounded-[100px] shadow-[0px_20px_35px_0px_rgba(51,133,255,0.22)] shrink-0 w-full" data-name="btn-primary-l">
            <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.16px] whitespace-nowrap">
              Попробовать бесплатно
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

function KeyFeatures() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center px-[20px] py-[40px] relative w-full" data-node-id="40002524:9946" data-name="KeyFeatures">
      <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-[335px]">
        <div className="bg-[rgba(16,142,245,0.08)] content-stretch flex items-start overflow-clip px-[12px] py-[6px] relative rounded-[100px] shrink-0">
          <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#108ef5] text-[12px] tracking-[-0.12px] whitespace-nowrap">Главные функции</p>
        </div>
        <div className="h-[16px] shrink-0 w-[100px]" />
        <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#0a1519] text-[26px] text-center tracking-[-0.65px] w-[335px]">
          Не просто переписки — а система продаж
        </p>
      </div>
      <div className="h-[36px] shrink-0 w-[100px]" />
      {/* Card 1 */}
      <div className="content-stretch flex flex-col gap-[28px] items-center relative shrink-0 w-[335px]" data-name="kf-card">
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[335px]" data-name="kf-text">
          <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.18] not-italic relative shrink-0 text-[#0a1519] text-[22px] tracking-[-0.55px] w-[335px]">
            Статусы заявок — сразу видно, кому не ответили
          </p>
          <div className="h-[16px] shrink-0 w-[100px]" />
          <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.55] relative shrink-0 text-[#595959] text-[16px] tracking-[-0.16px] w-[335px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Каждый чат имеет статус: «новый», «открыт» или «закрыт». Не нужно запоминать, кому уже ответили, а кому — нет.
          </p>
          <div className="h-[20px] shrink-0 w-[100px]" />
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0">
            {['Новые заявки выделяются автоматически', 'Отслеживайте, на какие чаты не ответили'].map((t, i) => (
              <div key={i} className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0">
                <div className="bg-[rgba(16,142,245,0.1)] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[20px]">
                  <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#108ef5] text-[11px] tracking-[-0.11px] whitespace-nowrap">✓</p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.45] not-italic relative shrink-0 text-[#0a1519] text-[15px] tracking-[-0.15px] w-[305px]">{t}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[12px] relative rounded-[18px] shadow-[0px_10px_28px_0px_rgba(13,18,31,0.08)] shrink-0 w-full" data-name="kf-status-board">
          {[
            { bg: 'bg-[rgba(38,99,235,0.12)]', tc: 'text-[#2663eb]', label: 'Новый', cnt: '3', cust: 'Юлия К.', msg: 'Есть Nike?', time: 'только что' },
            { bg: 'bg-[rgba(245,166,36,0.12)]', tc: 'text-[#f5a624]', label: 'Открыт', cnt: '12', cust: HERO_CHAT_NAMES[4], msg: 'Когда доставка?', time: '23 мин' },
            { bg: 'bg-[rgba(15,186,130,0.12)]', tc: 'text-[#0fba82]', label: 'Закрыт', cnt: '48', cust: HERO_CHAT_NAMES[3], msg: 'Получила 👍', time: '2 мин' },
          ].map((c, i) => (
            <div key={i} className="bg-[#f7fafc] content-stretch flex flex-col gap-[6px] items-start overflow-clip p-[10px] relative rounded-[14px] shrink-0 w-full">
              <div className="bg-white content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full">
                <div className={`${c.bg} content-stretch flex items-start overflow-clip px-[10px] py-[4px] relative rounded-[10px] shrink-0`}>
                  <p className={`[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 ${c.tc} text-[12px] whitespace-nowrap`} style={{ fontVariationSettings: "'wdth' 100" }}>{c.label}</p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#6b7885] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{c.cnt}</p>
              </div>
              <div className="[word-break:break-word] bg-white border border-[#ebedf2] border-solid content-stretch flex flex-col gap-[3px] items-start leading-[normal] overflow-clip px-[10px] py-[8px] relative rounded-[10px] shrink-0 w-full whitespace-nowrap">
                <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-[#121726] text-[13px]" style={{ fontVariationSettings: "'wdth' 100" }}>{c.cust}</p>
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7885] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>{c.msg}</p>
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#99a6b2] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>{c.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[80px] shrink-0 w-[100px]" />
      {/* Card 2 */}
      <div className="content-stretch flex flex-col gap-[28px] items-center relative shrink-0 w-[335px]" data-name="kf-card-rev">
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[335px]" data-name="kf-text-2">
          <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.18] not-italic relative shrink-0 text-[#0a1519] text-[22px] tracking-[-0.55px] w-[335px]">
            Рассылки по готовым сегментам — возвращайте клиентов
          </p>
          <div className="h-[16px] shrink-0 w-[100px]" />
          <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#595959] text-[16px] tracking-[-0.16px] w-[335px]">
            Сегменты собираются автоматически — на основе поведения клиента. Отправьте сообщение тем, кто бросил корзину, кто давно не покупал или только что оформил заказ.
          </p>
          <div className="h-[20px] shrink-0 w-[100px]" />
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0">
            {[
              'Бросил корзину — догнать персональным сообщением',
              'Не оплатил — напомнить за 1 клик',
              'Купил недавно — предложить дополнение',
              'Не активен 7 / 30 дней — вернуть промокодом',
            ].map((t, i) => (
              <div key={i} className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0">
                <div className="bg-[rgba(16,142,245,0.1)] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[20px]">
                  <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#108ef5] text-[11px] tracking-[-0.11px] whitespace-nowrap">✓</p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.45] not-italic relative shrink-0 text-[#0a1519] text-[15px] tracking-[-0.15px] w-[305px]">{t}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[12px] relative rounded-[18px] shadow-[0px_10px_28px_0px_rgba(13,18,31,0.08)] shrink-0 w-full" data-name="kf-segment-grid">
          <div className="bg-white content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0 w-full">
            {[
              { img: imgKF_Ellipse, v: '132', t: 'Бросили корзину', a: '→ догнать сообщением', ac: 'text-[#f5a624]' },
              { img: imgKF_Ellipse1, v: '87', t: 'Не оплатили', a: '→ напомнить за 1 клик', ac: 'text-[#2663eb]' },
            ].map((c, i) => (
              <div key={i} className="bg-white border border-[#ebedf2] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip p-[12px] relative rounded-[12px] self-stretch">
                <div className="relative shrink-0 size-[8px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={c.img} />
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#121726] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{c.v}</p>
                <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{c.t}</p>
                <p className={`[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 ${c.ac} text-[11px] whitespace-nowrap`} style={{ fontVariationSettings: "'wdth' 100" }}>{c.a}</p>
              </div>
            ))}
          </div>
          <div className="bg-white content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0 w-full">
            {[
              { img: imgKF_Ellipse2, v: '219', t: 'Купили недавно', a: '→ предложить дополнение', ac: 'text-[#0fba82]' },
              { img: imgKF_Ellipse3, v: '1 247', t: 'Не активны 30 дней', a: '→ вернуть промокодом', ac: 'text-[#8c5cf5]' },
            ].map((c, i) => (
              <div key={i} className="bg-white border border-[#ebedf2] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip p-[12px] relative rounded-[12px] self-stretch">
                <div className="relative shrink-0 size-[8px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={c.img} />
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#121726] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{c.v}</p>
                <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{c.t}</p>
                <p className={`[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 ${c.ac} text-[11px] whitespace-nowrap`} style={{ fontVariationSettings: "'wdth' 100" }}>{c.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Solution() {
  const cards = [
    {
      title: '1. Добавьте товары',
      items: [
        'Массовый импорт из XML/XLS и по ссылке',
        T.importLineWithChips,
        'Добавление товаров вручную',
        'Автоматическое обновление цен и остатков',
      ],
      logos: [
        { img: imgSol_Ellipse, t: 'МойСклад' },
        { img: imgSol_Ellipse1, t: '1С' },
        { img: imgSol_Ellipse2, t: T.importChip3 },
      ],
      wrap: false,
    },
    {
      title: '2. Включите оплату и доставку',
      items: [
        'Курьерская доставка и самовывоз',
        'Онлайн-оплата в 1 клик',
        'Рассрочка',
        'Чеки',
        'Оплата наличными',
      ],
      logos: [
        { img: imgSol_Ellipse1, t: T.paymentChip1 },
        { img: imgSol_Ellipse2, t: T.paymentChip2 },
        { img: imgSol_Ellipse3, t: T.paymentChip3 },
        { img: imgSol_Ellipse4, t: T.paymentChip4 },
      ],
      wrap: true,
    },
    {
      title: '3. Привлекайте клиентов эффективно',
      items: [
        'Промокоды',
        'Закрепите магазин в канале',
        'Интеграция с Яндекс Метрикой',
        'Рассылки и триггерные уведомления',
        'Реферальная программа — клиенты приводят друзей',
      ],
      logos: [
        { img: imgSol_Ellipse5, t: 'Я.Метрика' },
        { img: imgSol_Ellipse, t: 'Telegram Ads' },
      ],
      wrap: false,
    },
    {
      title: '4. Управляйте заказами',
      items: [
        'Интеграции с AmoCRM, Битрикс24',
        'Уведомления о заказах в Telegram',
        'Все диалоги с клиентами со статусами — в Telegram-боте',
      ],
      logos: [
        { img: imgSol_Ellipse6, t: 'amoCRM' },
        { img: imgSol_Ellipse, t: 'МойСклад' },
        { img: imgSol_Ellipse1, t: '1С' },
        { img: imgSol_Ellipse2, t: 'Битрикс24' },
      ],
      wrap: true,
    },
  ];
  return (
    <div className="bg-[#f6f7f9] content-stretch flex flex-col items-center px-[20px] py-[40px] relative w-full" data-node-id="40002524:9920" data-name="Solution">
      <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-[335px]">
        <div className="h-[16px] shrink-0 w-[100px]" />
        <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#0a1519] text-[26px] text-center tracking-[-0.65px] w-[335px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Готовые интеграции без разработки
        </p>
      </div>
      <div className="h-[36px] shrink-0 w-[100px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[335px]" data-name="sol-grid">
        {cards.map((card, ci) => (
          <div key={ci} className="bg-white border border-[#ebedf2] border-solid content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[18px] shadow-[0px_6px_18px_0px_rgba(13,18,31,0.06)] shrink-0 w-full" data-name={`sol-card-${ci + 1}`}>
            <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#121726] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{card.title}</p>
            <div className="bg-white content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-name="list">
              {card.items.map((it, ii) => (
                <div key={ii} className="bg-white content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[16px]">
                    <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f8c33] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>✓</p>
                  </div>
                  <p className={`[word-break:break-word] flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#121726] ${ci === 3 && ii === 2 ? 'text-[15px]' : 'text-[14px]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>{it}</p>
                </div>
              ))}
            </div>
            <div className={`bg-white ${card.wrap ? 'content-start flex flex-wrap' : 'content-stretch flex'} gap-[8px] items-start overflow-clip pt-[8px] relative shrink-0 w-full`} data-name="logos">
              {card.logos.map((l, li) => (
                <div key={li} className="bg-white border border-[#ebedf2] border-solid content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[10px] py-[6px] relative rounded-[8px] shadow-[0px_2px_6px_0px_rgba(13,18,31,0.06)] shrink-0">
                  <div className="relative shrink-0 size-[8px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={l.img} />
                  </div>
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{l.t}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PriceFeature({ text, x }: { text: string; x?: boolean }) {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-name="li">
      <div className={`${x ? 'bg-[#fad9d9]' : 'bg-[rgba(33,178,99,0.12)]'} content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]`} data-name="tk">
        <p className={`[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 ${x ? 'text-[#f04545]' : 'text-[#0f8c33]'} text-[10px] tracking-[-0.1px] whitespace-nowrap`} style={{ fontVariationSettings: "'wdth' 100" }}>
          {x ? '✕' : '✓'}
        </p>
      </div>
      <p className={`[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 ${x ? 'text-[#73808c]' : 'text-[#121726]'} text-[14px] tracking-[-0.14px] w-[255px]`} style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}

function Pricing({ isYear, setPeriod }: { isYear: boolean; setPeriod: (p: 'month' | 'year') => void }) {
  return (
    <div className="bg-[#f6f7f9] content-stretch flex flex-col items-center px-[20px] py-[40px] relative w-full" data-node-id="40002524:10205" data-name="Pricing">
      <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-[335px]">
        <div className="bg-[rgba(16,142,245,0.08)] content-stretch flex items-start overflow-clip px-[12px] py-[6px] relative rounded-[100px] shrink-0">
          </div>
        <div className="h-[16px] shrink-0 w-[100px]" />
        <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#0a1519] text-[26px] text-center tracking-[-0.65px] w-[335px]">
          TGShop Chat включён во все тарифы TGShop
        </p>
      </div>
      <div className="h-[16px] shrink-0 w-[100px]" />
      <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#595959] text-[16px] text-center tracking-[-0.16px] w-[335px] whitespace-pre-wrap">{`Один тариф — магазин, диалоги со статусами, интеграции. Без скрытых доплат.`}</p>
      <div className="h-[40px] shrink-0 w-[100px]" />
      {/* Toggle */}
      <div className="bg-white border border-[rgba(230,232,236,0.6)] border-solid content-stretch flex items-start p-[4px] relative rounded-[100px] shrink-0" data-name="bt">
        <button
          type="button"
          onClick={() => setPeriod('month')}
          className={`${!isYear ? 'bg-[#108ef5] shadow-[0px_4px_12px_0px_rgba(51,133,255,0.25)]' : 'bg-transparent'} cursor-pointer content-stretch flex items-center overflow-clip px-[22px] py-[10px] relative rounded-[100px] shrink-0 border-0`}
          data-name="opt"
        >
          <p className={`[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 ${!isYear ? 'text-white' : 'text-[#595959]'} text-[14px] tracking-[-0.14px] whitespace-nowrap`}>
            Помесячно
          </p>
        </button>
        <button
          type="button"
          onClick={() => setPeriod('year')}
          className={`${isYear ? 'bg-[#108ef5] shadow-[0px_4px_12px_0px_rgba(51,133,255,0.25)]' : 'bg-transparent'} cursor-pointer content-stretch flex items-center overflow-clip px-[22px] py-[10px] relative rounded-[100px] shrink-0 border-0`}
          data-name="opt"
        >
          <p className={`[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 ${isYear ? 'text-white' : 'text-[#595959]'} text-[14px] tracking-[-0.14px] whitespace-nowrap`}>
            За год · −20%
          </p>
        </button>
      </div>
      <div className="h-[48px] shrink-0 w-[100px]" />
      <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0" data-name="pricing-grid">
        {/* Бизнес — popular, на mobile идёт первым */}
        <div className="bg-white border-2 border-[#108ef5] border-solid content-stretch drop-shadow-[0px_12px_20px_rgba(51,133,255,0.15)] flex flex-col items-start pb-[32px] pt-[36px] px-[28px] relative rounded-[24px] shrink-0 w-[335px]" data-name="price-card">
          <div className="bg-[#108ef5] content-stretch flex items-center justify-center overflow-clip px-[14px] py-[6px] relative rounded-[100px] shrink-0">
            <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.12px] whitespace-nowrap">⚡ Популярный</p>
          </div>
          <div className="h-[16px] shrink-0 w-[100px]" />
          <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#595959] text-[18px] tracking-[-0.18px] whitespace-nowrap">Бизнес</p>
          <div className="h-[12px] shrink-0 w-[100px]" />
          <div className="[word-break:break-word] content-stretch flex gap-[6px] items-baseline leading-[1.5] overflow-clip relative shrink-0 whitespace-nowrap">
            <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0 text-[#0a1519] text-[32px] tracking-[-0.96px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {isYear ? T.priceBusinessYear : T.priceBusinessMonth}
            </p>
          </div>
          <div className="h-[6px] shrink-0 w-[100px]" />
          <p className={`[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.5] ${isYear ? 'line-through' : ''} relative shrink-0 text-[#767d88] text-[13px] tracking-[-0.13px] whitespace-nowrap`} style={{ fontVariationSettings: "'wdth' 100" }}>
            {isYear ? T.priceBusinessMonth : '−20% при оплате за год'}
          </p>
          <div className="h-[16px] shrink-0 w-[100px]" />
          <div className="bg-[rgba(16,142,245,0.08)] content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative rounded-[8px] shrink-0">
            <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[#108ef5] text-[13px] tracking-[-0.13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              До 1000 товаров · до 5 магазинов
            </p>
          </div>
          <div className="h-[20px] shrink-0 w-[100px]" />
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0">
            <PriceFeature text="Диалоги с клиентами" />
            <PriceFeature text="Витрина для маркетплейсов" />
            <PriceFeature text="Каталог и товары" />
            <PriceFeature text="Прием платежей" />
            <PriceFeature text="Интеграция со службами доставки" />
            <PriceFeature text="Интеграция с CRM" />
            <PriceFeature text="Доступ к аналитике" />
            <PriceFeature text="Импорт товаров из XLS/XML" />
            <PriceFeature text="Рассылки" />
            <PriceFeature text="Промокоды" />
            <PriceFeature text="Отсутствует реклама сервиса" />
            <PriceFeature text="Интеграция с МойСклад / 1С" x />
            <PriceFeature text="Периодический импорт по ссылке" x />
          </div>
          <div className="h-[24px] shrink-0 w-[100px]" />
          <a href={CTA_HREF} target="_blank" rel="noopener" className="contents no-underline">
            <div className="bg-[#108ef5] content-stretch cursor-pointer flex h-[48px] items-center justify-center overflow-clip px-[32px] relative rounded-[100px] shadow-[0px_12px_24px_0px_rgba(51,133,255,0.25)] shrink-0 w-full">
              <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.15px] whitespace-nowrap">Начать бесплатно</p>
            </div>
          </a>
        </div>
        {/* Старт */}
        <div className="bg-white border border-[rgba(230,232,236,0.5)] border-solid content-stretch flex flex-col items-start overflow-clip pb-[32px] pt-[36px] px-[28px] relative rounded-[24px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.04)] shrink-0 w-[335px]" data-name="price-card">
          <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#595959] text-[18px] tracking-[-0.18px] whitespace-nowrap">Старт</p>
          <div className="h-[12px] shrink-0 w-[100px]" />
          <div className="[word-break:break-word] content-stretch flex gap-[6px] items-baseline leading-[1.5] overflow-clip relative shrink-0 whitespace-nowrap">
            <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0 text-[#0a1519] text-[32px] tracking-[-0.96px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {isYear ? T.priceStarterYear : T.priceStarterMonth}
            </p>
          </div>
          <div className="h-[6px] shrink-0 w-[100px]" />
          <p className={`[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.5] ${isYear ? 'line-through' : ''} relative shrink-0 text-[#767d88] text-[13px] tracking-[-0.13px] whitespace-nowrap`} style={{ fontVariationSettings: "'wdth' 100" }}>
            {isYear ? T.priceStarterMonth : '−20% при оплате за год'}
          </p>
          <div className="h-[16px] shrink-0 w-[100px]" />
          <div className="bg-[rgba(16,142,245,0.08)] content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative rounded-[8px] shrink-0">
            <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[#108ef5] text-[13px] tracking-[-0.13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              До 100 товаров · 1 активный магазин
            </p>
          </div>
          <div className="h-[20px] shrink-0 w-[100px]" />
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0">
            <PriceFeature text="Диалоги с клиентами" />
            <PriceFeature text="Витрина для маркетплейсов" />
            <PriceFeature text="Каталог и товары" />
            <PriceFeature text="Прием платежей" />
            <PriceFeature text="Интеграция со службами доставки" />
            <PriceFeature text="Интеграция с CRM" />
            <PriceFeature text="Доступ к аналитике" />
            <PriceFeature text="Импорт товаров из XLS/XML" />
            <PriceFeature text="Рассылки" />
            <PriceFeature text="Промокоды" />
            <PriceFeature text="Интеграция с МойСклад / 1С" x />
            <PriceFeature text="Периодический импорт по ссылке" x />
            <PriceFeature text="Нет возможности отключить «Сделано при помощи TGShop»" x />
          </div>
          <div className="h-[24px] shrink-0 w-[100px]" />
          <a href={CTA_HREF} target="_blank" rel="noopener" className="contents no-underline">
            <div className="border-[1.5px] border-[rgba(16,142,245,0.3)] border-solid content-stretch cursor-pointer flex h-[48px] items-center justify-center overflow-clip px-[32px] relative rounded-[100px] shrink-0 w-full">
              <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#108ef5] text-[15px] tracking-[-0.15px] whitespace-nowrap">Начать бесплатно</p>
            </div>
          </a>
        </div>
        {/* Премиум */}
        <div className="bg-white border border-[rgba(230,232,236,0.5)] border-solid content-stretch flex flex-col items-start overflow-clip pb-[32px] pt-[36px] px-[28px] relative rounded-[24px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.04)] shrink-0 w-[335px]" data-name="price-card">
          <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#595959] text-[18px] tracking-[-0.18px] whitespace-nowrap">Премиум</p>
          <div className="h-[12px] shrink-0 w-[100px]" />
          <div className="[word-break:break-word] content-stretch flex gap-[6px] items-baseline leading-[1.5] overflow-clip relative shrink-0 whitespace-nowrap">
            <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0 text-[#0a1519] text-[32px] tracking-[-0.96px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {isYear ? T.priceProYear : T.priceProMonth}
            </p>
          </div>
          <div className="h-[6px] shrink-0 w-[100px]" />
          <p className={`[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.5] ${isYear ? 'line-through' : ''} relative shrink-0 text-[#767d88] text-[13px] tracking-[-0.13px] whitespace-nowrap`} style={{ fontVariationSettings: "'wdth' 100" }}>
            {isYear ? T.priceProMonth : '−20% при оплате за год'}
          </p>
          <div className="h-[16px] shrink-0 w-[100px]" />
          <div className="bg-[rgba(16,142,245,0.08)] content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative rounded-[8px] shrink-0">
            <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[#108ef5] text-[13px] tracking-[-0.13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              До 15000 товаров · до 10 магазинов
            </p>
          </div>
          <div className="h-[20px] shrink-0 w-[100px]" />
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0">
            <PriceFeature text="Диалоги с клиентами" />
            <PriceFeature text="Витрина для маркетплейсов" />
            <PriceFeature text="Каталог и товары" />
            <PriceFeature text="Прием платежей" />
            <PriceFeature text="Интеграция со службами доставки" />
            <PriceFeature text="Интеграция с CRM" />
            <PriceFeature text="Доступ к аналитике" />
            <PriceFeature text="Импорт товаров из XLS/XML" />
            <PriceFeature text="Рассылки" />
            <PriceFeature text="Промокоды" />
            <PriceFeature text="Интеграция с МойСклад / 1С" />
            <PriceFeature text="Периодический импорт по ссылке" />
            <PriceFeature text="Отсутствует реклама сервиса" />
            <PriceFeature text="Приоритетная поддержка" />
          </div>
          <div className="h-[24px] shrink-0 w-[100px]" />
          <a href={CTA_HREF} target="_blank" rel="noopener" className="contents no-underline">
            <div className="border-[1.5px] border-[rgba(16,142,245,0.3)] border-solid content-stretch cursor-pointer flex h-[48px] items-center justify-center overflow-clip px-[32px] relative rounded-[100px] shrink-0 w-full">
              <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#108ef5] text-[15px] tracking-[-0.15px] whitespace-nowrap">Начать бесплатно</p>
            </div>
          </a>
        </div>
      </div>
      <div className="h-[32px] shrink-0 w-[100px]" />
      <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#767d88] text-[14px] text-center tracking-[-0.14px] w-[335px]">
        14 дней бесплатно · карта не нужна · отмена в любой момент
      </p>
    </div>
  );
}

function CTAFinal() {
  return (
    <div className="bg-[#0a151a] content-stretch flex flex-col items-center px-[20px] py-[56px] relative w-full" data-node-id="40002524:10392" data-name="CTA Final">
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-[335px]">
        <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[26px] text-center text-white tracking-[-0.65px] w-[335px]">
          Начните сегодня и перестаньте терять заказы в Telegram
        </p>
        <div className="h-[24px] shrink-0 w-[100px]" />
        <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.7)] text-center tracking-[-0.15px] w-[335px]">
          Каждую минуту, пока вы не подключили TGShop, кто-то из ваших клиентов не дождался ответа и ушёл к конкуренту.
        </p>
        <div className="h-[36px] shrink-0 w-[100px]" />
        <a href={CTA_HREF} target="_blank" rel="noopener" className="contents no-underline w-full">
          <div className="bg-white content-stretch cursor-pointer flex h-[52px] items-center justify-center overflow-clip px-[32px] relative rounded-[100px] shadow-[0px_20px_40px_0px_rgba(0,0,0,0.3)] shrink-0 w-full" data-name="btn">
            <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#108ef5] text-[16px] tracking-[-0.16px] whitespace-nowrap">
              Создать Telegram-магазин бесплатно →
            </p>
          </div>
        </a>
        <div className="h-[18px] shrink-0 w-[100px]" />
        <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.5)] text-center tracking-[-0.13px] whitespace-nowrap">
          14 дней бесплатно · отмена в любой момент
        </p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#121721] border border-[rgba(0,0,0,0.04)] border-solid content-stretch flex flex-col items-start pb-[24px] pt-[48px] px-[20px] relative w-full" data-node-id="40002524:10402" data-name="Footer">
      <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip relative shrink-0 w-[335px]" data-name="footer-top">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[1.5] overflow-clip relative shrink-0 w-[335px]" data-name="fb">
          <div className="content-stretch flex font-['SF_Pro:Bold',sans-serif] font-bold gap-[4px] items-baseline overflow-clip relative shrink-0 text-[20px] text-white tracking-[-0.4px] whitespace-nowrap">
            <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>TGShop</p>
            <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>Chat</p>
          </div>
          <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#a6b0bf] text-[14px] tracking-[-0.14px] w-[300px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Все Telegram-чаты магазина в одном кабинете. Часть экосистемы TGShop.
          </p>
        </div>
        {/* Полезные материалы */}
        <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-[335px]" data-name="fc">
          <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[14px] text-white tracking-[-0.14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Полезные материалы
          </p>
          <div className="h-[4px] shrink-0 w-[100px]" />
          {[
            { href: 'https://tgshop.io/blog', t: 'Блог' },
            { href: 'https://tgshop.io/faq', t: 'FAQ' },
            { href: 'https://docs.tgshop.io/uz/telegramda-dokon-ochish/tezkor-boshlash', t: 'Инструкции' },
          ].map((l) => (
            <a key={l.t} className="[word-break:break-word] block font-['SF_Pro:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#a6b0bf] text-[14px] tracking-[-0.14px] whitespace-nowrap" href={l.href} target="_blank" rel="noopener" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="cursor-pointer leading-[1.5]">{l.t}</p>
            </a>
          ))}
        </div>
        {/* Решения */}
        <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-[335px]" data-name="fc">
          <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[14px] text-white tracking-[-0.14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Решения
          </p>
          <div className="h-[4px] shrink-0 w-[100px]" />
          {[
            { href: 'https://tgshop.io/blog/instrukciya-kak-sozdat-magazin-v-telegram-po-shagam/', t: 'Telegram-магазин' },
            { href: 'https://uz.tgshop.io', t: T.footerBrand },
          ].map((l) => (
            <a key={l.t} className="[word-break:break-word] block font-['SF_Pro:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#a6b0bf] text-[14px] tracking-[-0.14px] whitespace-nowrap" href={l.href} target="_blank" rel="noopener" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="cursor-pointer leading-[1.5]">{l.t}</p>
            </a>
          ))}
        </div>
        {/* Поддержка */}
        <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-[335px]" data-name="fc">
          <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[14px] text-white tracking-[-0.14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Поддержка
          </p>
          <div className="h-[4px] shrink-0 w-[100px]" />
          {[
            { href: 'https://t.me/TGShopHelp_bot', t: 'Связаться' },
            { href: 'https://tgshop.io/privacypolicy/', t: 'Политика данных' },
            { href: 'https://tgshop.io/useragreement/', t: 'Правила использования' },
          ].map((l) => (
            <a key={l.t} className="[word-break:break-word] block font-['SF_Pro:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#a6b0bf] text-[14px] tracking-[-0.14px] whitespace-nowrap" href={l.href} target="_blank" rel="noopener" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="cursor-pointer leading-[1.5]">{l.t}</p>
            </a>
          ))}
        </div>
      </div>
      <div className="h-[32px] shrink-0 w-[100px]" />
      <div className="bg-[rgba(0,0,0,0.06)] h-px relative shrink-0 w-[335px]" />
      <div className="h-[20px] shrink-0 w-[100px]" />
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#a6b0bf] text-[12px] tracking-[-0.12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        © 2026 TGShop. Все права защищены.
      </p>
    </div>
  );
}

export default function LandingMobile() {
  const [period, setPeriod] = useState<'month' | 'year'>('year');
  const isYear = period === 'year';
  return (
    <div className="bg-white flex flex-col items-center w-[375px]">
      <Header />
      <Hero />
      <Trust />
      <Pain />
      <Price />
      <How />
      <KeyFeatures />
      <Solution />
      <Pricing isYear={isYear} setPeriod={setPeriod} />
      <CTAFinal />
      <Footer />
    </div>
  );
}
