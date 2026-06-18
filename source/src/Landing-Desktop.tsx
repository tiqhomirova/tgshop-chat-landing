// Generated from Figma Dev Mode — Landing v2 / Desktop — 1440px
// Node 40002524:7910
// Full responsive landing — React + Tailwind
import { useState } from 'react';
import { CTA_HREF, SIGNIN_HREF } from './utm';
import { T, HERO_CHAT_NAMES } from './region';
import LossCalculator from './LossCalculator';

const imgPhoto202508261509211 = `${import.meta.env.BASE_URL}assets/imgPhoto202508261509211.png`;
// Brand logos — local assets, mirror Figma node 40002682:1121 (8 brands).
const imgYvesRocherLogoSvg3 = `${import.meta.env.BASE_URL}assets/brand-yves-rocher.png`;
const img61 = `${import.meta.env.BASE_URL}assets/brand-emra.png`;
const img221 = `${import.meta.env.BASE_URL}assets/brand-merci.png`;
const img51 = `${import.meta.env.BASE_URL}assets/brand-dragonfly.png`;
const img41 = `${import.meta.env.BASE_URL}assets/logo-third.png`;
const imgAroundYou = `${import.meta.env.BASE_URL}assets/brand-around-you.svg`;
const imgAnaHildebrant = `${import.meta.env.BASE_URL}assets/brand-ana-hildebrant.png`;
const imgSkincare = `${import.meta.env.BASE_URL}assets/brand-skincare.png`;
const imgGroup = `${import.meta.env.BASE_URL}assets/imgGroup.svg`;
const imgGroup1 = `${import.meta.env.BASE_URL}assets/imgGroup1.svg`;
const imgGroup2 = `${import.meta.env.BASE_URL}assets/imgGroup2.svg`;
const imgGroup3 = `${import.meta.env.BASE_URL}assets/imgGroup3.svg`;
const imgGroup4 = `${import.meta.env.BASE_URL}assets/imgGroup4.svg`;
const imgGroup5 = `${import.meta.env.BASE_URL}assets/imgGroup5.svg`;
const imgGroup6 = `${import.meta.env.BASE_URL}assets/imgGroup6.svg`;
const imgGroup7 = `${import.meta.env.BASE_URL}assets/imgGroup7.svg`;
const imgGroup8 = `${import.meta.env.BASE_URL}assets/imgGroup8.svg`;
const imgSvg = `${import.meta.env.BASE_URL}assets/imgSvg.svg`;
const imgVector = `${import.meta.env.BASE_URL}assets/brand-bogner.png`;
const imgFrame21361400041 = `${import.meta.env.BASE_URL}assets/${import.meta.env.VITE_REGION === 'ru' ? 'ru_hero_phone.png' : 'imgFrame21361400041.png'}`;
const imgBackground = `${import.meta.env.BASE_URL}assets/imgBackground.png`;
const imgBackground1 = `${import.meta.env.BASE_URL}assets/imgBackground1.png`;
const imgPhoto202508261509132 = `${import.meta.env.BASE_URL}assets/imgPhoto202508261509132.png`;
const imgEllipse = `${import.meta.env.BASE_URL}assets/imgEllipse.svg`;
const imgEllipse1 = `${import.meta.env.BASE_URL}assets/imgEllipse1.svg`;
const imgEllipse2 = `${import.meta.env.BASE_URL}assets/imgEllipse2.svg`;
const imgEllipse3 = `${import.meta.env.BASE_URL}assets/imgEllipse3.svg`;
const imgEllipse4 = `${import.meta.env.BASE_URL}assets/imgEllipse4.svg`;
const imgEllipse5 = `${import.meta.env.BASE_URL}assets/imgEllipse5.svg`;
const imgEllipse6 = `${import.meta.env.BASE_URL}assets/imgEllipse6.svg`;
const imgEllipse7 = `${import.meta.env.BASE_URL}assets/imgEllipse7.svg`;
const imgEllipse8 = `${import.meta.env.BASE_URL}assets/imgEllipse8.svg`;
const imgEllipse9 = `${import.meta.env.BASE_URL}assets/imgEllipse9.svg`;
const imgEllipse10 = `${import.meta.env.BASE_URL}assets/imgEllipse10.svg`;
const imgEllipse11 = `${import.meta.env.BASE_URL}assets/imgEllipse11.svg`;
const imgEllipse12 = `${import.meta.env.BASE_URL}assets/imgEllipse12.svg`;

function SectionUpperDefault({ className }: { className?: string }) {
  // Brand strip — single row of 8 brand logos (mirror of Figma node 40002682:1121
  // mobile 2x4 grid, but stretched horizontally for desktop). Each logo uses
  // overflow-hidden + absolute image with figma-supplied crop parameters so
  // white margins inside the source PNGs are clipped.
  const dividerCls = "w-px h-[28px] bg-[#e9ebf1] shrink-0";
  return (
    <div className={className || "h-[80px] overflow-clip relative w-[1216px]"} data-node-id="40002524:7510" data-name="Section-upper/Default">
      <div className="h-full flex items-center justify-center gap-[32px] px-[40px]">
        {/* Yves Rocher */}
        <div className="h-[22px] relative shrink-0 w-[104px]">
          <img alt="Yves Rocher" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgYvesRocherLogoSvg3} />
        </div>
        <div className={dividerCls} />
        {/* EMRA */}
        <div className="h-[20px] relative shrink-0 w-[78px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="EMRA" className="absolute h-[155.06%] left-0 max-w-none top-[-27.53%] w-full" src={img61} />
          </div>
        </div>
        <div className={dividerCls} />
        {/* Merci Lingerie */}
        <div className="h-[22px] mix-blend-darken relative shrink-0 w-[77px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="Merci Lingerie" className="absolute h-[99.28%] left-[-0.52%] max-w-none top-[-0.16%] w-[100.81%]" src={img221} />
          </div>
        </div>
        <div className={dividerCls} />
        {/* Dragonfly */}
        <div className="h-[22px] mix-blend-darken relative shrink-0 w-[73px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="Dragonfly" className="absolute h-[115.61%] left-[0.12%] max-w-none top-[0.42%] w-[100.8%]" src={img51} />
          </div>
        </div>
        <div className={dividerCls} />
        {/* Bogner */}
        <div className="h-[22px] mix-blend-darken relative shrink-0 w-[100px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="Bogner" className="absolute h-[91.65%] left-[0.17%] max-w-none top-[6.39%] w-[99.45%]" src={imgVector} />
          </div>
        </div>
        <div className={dividerCls} />
        {/* ANA HILDEBRANT */}
        <div className="h-[22px] relative shrink-0 w-[80px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="ANA HILDEBRANT" className="absolute h-[270.73%] left-[-46.98%] max-w-none top-[-85.37%] w-[189.08%]" src={imgAnaHildebrant} />
          </div>
        </div>
        <div className={dividerCls} />
        {/* skincare */}
        <div className="h-[22px] mix-blend-darken relative shrink-0 w-[88px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="Skincare" className="absolute h-[145.61%] left-[-4.68%] max-w-none top-[-19.3%] w-[106.36%]" src={imgSkincare} />
          </div>
        </div>
        <div className={dividerCls} />
        {/* Around You */}
        <div className="h-[15px] relative shrink-0 w-[80px]">
          <img alt="Around You" className="absolute block inset-0 max-w-none size-full" src={imgAroundYou} />
        </div>
      </div>
      {/* Edge fade overlays per Figma node 40002524:8041 — bg matches Trust #f6f7f9 */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[80px] bg-gradient-to-r from-[#f6f7f9] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[80px] bg-gradient-to-l from-[#f6f7f9] to-transparent" />
    </div>
  );
}

export default function LandingDesktop() {
  const [period, setPeriod] = useState<'month' | 'year'>('year');
  const isYear = period === 'year';
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-node-id="40002524:7910" data-name="Landing v2 / Desktop — 1440px">
      <div className="bg-white border border-[rgba(0,0,0,0.05)] border-solid content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[1440px]" data-node-id="40002524:7911" data-name="Header">
        <div className="content-stretch flex gap-[40px] h-[72px] items-center px-[120px] relative shrink-0 w-[1440px]" data-node-id="40002524:7912" data-name="header-inner">
          <div className="[word-break:break-word] content-stretch flex font-['SF_Pro_Display:Bold',sans-serif] font-bold gap-[4px] items-baseline leading-[1.5] not-italic overflow-clip relative shrink-0 text-[20px] tracking-[-0.4px] whitespace-nowrap" data-node-id="40002524:7913" data-name="brand">
            <p className="relative shrink-0 text-[#0a1519]" data-node-id="40002524:7914">
              TGShop
            </p>
            <p className="relative shrink-0 text-[#108ef5]" data-node-id="40002524:7915">
              Chat
            </p>
          </div>
          <div className="flex-[1_0_0] h-[100px] min-w-px relative" data-node-id="40002524:7916" data-name="sp" />
          <div className="[word-break:break-word] content-stretch flex font-['SF_Pro:Medium',sans-serif] font-normal gap-[28px] items-center leading-[0] overflow-clip relative shrink-0 text-[#595959] text-[14px] tracking-[-0.14px] whitespace-nowrap" data-node-id="40002524:7917" data-name="nav">
            <a className="block relative shrink-0" href="https://docs.tgshop.io/uz/telegramda-dokon-ochish/tezkor-boshlash" data-node-id="40002524:7918" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
              <p className="cursor-pointer leading-[1.5]">База знаний</p>
            </a>
            <a className="block relative shrink-0" href="https://t.me/TGShopHelp_bot" data-node-id="40002524:7920" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
              <p className="cursor-pointer leading-[1.5]">Помощь</p>
            </a>
            <a className="block relative shrink-0" href="#trust" data-node-id="40002524:7921" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="cursor-pointer leading-[1.5]">Кейсы</p>
            </a>
          </div>
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="40002524:7922" data-name="header-cta">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 mr-[4px]" data-name="lang-switch">
              <div className="content-stretch flex gap-[6px] items-center px-[12px] py-[8px] rounded-[100px] cursor-pointer hover:bg-[rgba(16,142,245,0.06)] transition-colors" title="Сменить язык / Tilni o'zgartirish">
                <span className="text-[14px]">🌐</span>
                <span className="font-['SF_Pro:Semibold',sans-serif] font-[590] text-[14px] text-[#595959] tracking-[-0.14px]">O'zbek</span>
              </div>
            </div>
            <div className="border-[1.5px] border-[rgba(16,142,245,0.2)] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[18px] relative rounded-[100px] shrink-0" data-node-id="40002524:7923" data-name="btn-outline">
              <a className="[word-break:break-word] block font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[0] relative shrink-0 text-[#108ef5] text-[14px] tracking-[-0.14px] whitespace-nowrap" href={SIGNIN_HREF} data-node-id="40002524:7924" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <p className="cursor-pointer leading-[1.5]">Войти</p>
              </a>
            </div>
            <div className="bg-[#108ef5] content-stretch flex h-[40px] items-center justify-center overflow-clip px-[18px] relative rounded-[100px] shadow-[0px_12px_24px_0px_rgba(51,133,255,0.22)] shrink-0" data-node-id="40002524:7925" data-name="btn-primary">
              <a className="[word-break:break-word] block font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[0] relative shrink-0 text-[14px] text-white tracking-[-0.14px] whitespace-nowrap" href={CTA_HREF} data-node-id="40002524:7926" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <p className="cursor-pointer leading-[1.5]">Зарегистрироваться</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col items-center pb-[120px] pt-[80px] px-[120px] relative shrink-0 w-[1440px]" data-node-id="40002524:7927" data-name="Hero">
        <div className="content-stretch flex gap-[40px] h-[493px] items-center relative shrink-0 w-full" data-node-id="40002524:7928" data-name="hero-inner">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[560px]" data-node-id="40002524:7929" data-name="left">
            <div className="bg-[rgba(16,142,245,0.08)] content-stretch flex gap-[8px] items-center overflow-clip px-[14px] py-[8px] relative rounded-[100px] shrink-0" data-node-id="40002524:7930" data-name="pill">
              <div className="bg-[#108ef5] relative rounded-[4px] shrink-0 size-[8px]" data-node-id="40002524:7931" data-name="dot" />
              <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#108ef5] text-[13px] tracking-[-0.13px] whitespace-nowrap" data-node-id="40002524:7932">
                2 000+ магазинов уже подключили TGShop
              </p>
            </div>
            <div className="h-[24px] relative shrink-0 w-[100px]" data-node-id="40002524:7933" data-name="sp" />
            <div className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#0a1519] text-[56px] tracking-[-1.68px] w-[521px] whitespace-pre-wrap" data-node-id="40002524:7934">
              <p className="leading-[1.05] mb-0">{`Telegram-магазин `}</p>
              <p className="leading-[1.05]">и чаты с клиентами в одном кабинете</p>
            </div>
            <div className="h-[24px] relative shrink-0 w-[100px]" data-node-id="40002524:7935" data-name="sp" />
            <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#595959] text-[18px] tracking-[-0.18px] w-[551px]" data-node-id="40002524:7936">
              Ваши менеджеры не успевают отвечать всем клиентам в Telegram — и заказы уходят к конкурентам. С TGShop ни одна заявка не потеряется, и клиенты смогут покупать в 1 клик.
            </p>
            <div className="h-[32px] relative shrink-0 w-[100px]" data-node-id="40002524:7937" data-name="sp" />
            <div className="content-stretch flex items-start relative shrink-0" data-node-id="40002524:7938" data-name="cta-row">
              <a href={CTA_HREF} target="_blank" rel="noopener" className="contents no-underline">
                <div className="bg-[#108ef5] content-stretch flex h-[52px] items-center justify-center overflow-clip px-[32px] relative rounded-[100px] shadow-[0px_20px_35px_0px_rgba(51,133,255,0.22)] shrink-0 cursor-pointer" data-node-id="40002524:7939" data-name="btn-primary-l">
                  <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.16px] whitespace-nowrap" data-node-id="40002524:7940">
                    Попробовать бесплатно
                  </p>
                </div>
              </a>
            </div>
            <div className="h-[20px] relative shrink-0 w-[100px]" data-node-id="40002524:7943" data-name="sp" />
            <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1d9b5e] text-[13px] tracking-[-0.13px] whitespace-nowrap" data-node-id="40002524:7944">
              14 дней бесплатно · без разработки
            </p>
          </div>
          <div className="h-[488px] relative shrink-0 w-[708px]" data-node-id="40002524:7945" data-name="right">
            <div className="absolute content-stretch drop-shadow-[-2px_-2px_3px_rgba(0,0,0,0.1)] flex h-[354px] items-start left-[244px] overflow-clip rounded-[20px] top-[66.5px] w-[323px]" data-node-id="40002524:7946" data-name="mock-body">
              <div className="bg-white content-stretch flex flex-col gap-[2px] h-[354px] items-start overflow-clip px-[10px] py-[14px] relative shrink-0 w-[323px]" data-node-id="40002524:7947" data-name="chats">
                <div className="content-stretch flex gap-[6px] items-start overflow-clip pb-[12px] px-[4px] relative shrink-0" data-node-id="40002524:7948" data-name="ctabs">
                  <div className="bg-[#108ef5] content-stretch flex items-center overflow-clip px-[10px] py-[6px] relative rounded-[100px] shrink-0" data-node-id="40002524:7949" data-name="ct1">
                    <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.12px] whitespace-nowrap" data-node-id="40002524:7950">
                      💬 Чаты
                    </p>
                  </div>
                  <div className="[word-break:break-word] bg-[#f6f7f9] content-stretch flex gap-[4px] items-center leading-[1.5] not-italic overflow-clip px-[10px] py-[6px] relative rounded-[100px] shrink-0 text-[12px] tracking-[-0.12px] whitespace-nowrap" data-node-id="40002524:7951" data-name="ct2">
                    <p className="font-['SF_Pro_Display:Regular',sans-serif] relative shrink-0 text-[#767d88]" data-node-id="40002524:7952">
                      Новые
                    </p>
                    <p className="font-['SF_Pro_Display:Semibold',sans-serif] relative shrink-0 text-[#e5484d]" data-node-id="40002524:7953">
                      8
                    </p>
                  </div>
                  <div className="[word-break:break-word] bg-[#f6f7f9] content-stretch flex gap-[4px] items-center leading-[1.5] not-italic overflow-clip px-[10px] py-[6px] relative rounded-[100px] shrink-0 text-[12px] tracking-[-0.12px] whitespace-nowrap" data-node-id="40002524:7954" data-name="ct2">
                    <p className="font-['SF_Pro_Display:Regular',sans-serif] relative shrink-0 text-[#767d88]" data-node-id="40002524:7955">
                      Открыты
                    </p>
                    <p className="font-['SF_Pro_Display:Semibold',sans-serif] relative shrink-0 text-[#f7b50d]" data-node-id="40002524:7956">
                      5
                    </p>
                  </div>
                  <div className="[word-break:break-word] bg-[#f6f7f9] content-stretch flex gap-[4px] items-center leading-[1.5] not-italic overflow-clip px-[10px] py-[6px] relative rounded-[100px] shrink-0 text-[12px] tracking-[-0.12px] whitespace-nowrap" data-node-id="40002524:7957" data-name="ct3">
                    <p className="font-['SF_Pro_Display:Regular',sans-serif] relative shrink-0 text-[#767d88]" data-node-id="40002524:7958">
                      Закрыты
                    </p>
                    <p className="font-['SF_Pro_Display:Semibold',sans-serif] relative shrink-0 text-[#595959]" data-node-id="40002524:7959">
                      3
                    </p>
                  </div>
                </div>
                <div className="bg-[#f3f8ff] content-stretch flex gap-[12px] h-[54px] items-start px-[10px] py-[7px] overflow-hidden relative rounded-[10px] shrink-0 w-[298px]" data-node-id="40002524:7960" data-name="ch">
                  <div className="bg-[#e5484d] content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shrink-0 size-[28px]" data-node-id="40002524:7961" data-name="av">
                    <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.12px] whitespace-nowrap" data-node-id="40002524:7962">
                      Ю
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="40002524:7963" data-name="main">
                    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-node-id="40002524:7964" data-name="top">
                      <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0a1519] text-[13px] tracking-[-0.13px] whitespace-nowrap" data-node-id="40002524:7965">
                        Регина К.
                      </p>
                      <div className="flex-[1_0_0] h-[100px] min-w-px relative" data-node-id="40002524:7966" data-name="s" />
                      <p className="[word-break:break-word] font-['SF_Pro_Display:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#767d88] text-[11px] tracking-[-0.11px] whitespace-nowrap" data-node-id="40002524:7967">
                        только что
                      </p>
                    </div>
                    <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#595959] text-[13px] tracking-[-0.13px] w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      Есть в наличии?
                    </p>
                  </div>
                  <div className="bg-[#e5484d] content-stretch flex items-center overflow-clip px-[7px] py-[3px] relative rounded-[100px] shrink-0" data-node-id="40002524:7969" data-name="bd">
                    <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[10px] text-white tracking-[0.2px] whitespace-nowrap" data-node-id="40002524:7970">
                      Новый
                    </p>
                  </div>
                </div>
                <div className="bg-[#f3f8ff] content-stretch flex gap-[12px] h-[54px] items-start px-[10px] py-[7px] overflow-hidden relative rounded-[10px] shrink-0 w-[298px]" data-node-id="40002524:7971" data-name="ch">
                  <div className="bg-[#e5484d] content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shrink-0 size-[28px]" data-node-id="40002524:7972" data-name="av">
                    <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.12px] whitespace-nowrap" data-node-id="40002524:7973">
                      Ю
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="40002524:7974" data-name="main">
                    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-node-id="40002524:7975" data-name="top">
                      <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0a1519] text-[13px] tracking-[-0.13px] whitespace-nowrap" data-node-id="40002524:7976">
                        {HERO_CHAT_NAMES[1]}
                      </p>
                      <div className="flex-[1_0_0] h-[100px] min-w-px relative" data-node-id="40002524:7977" data-name="s" />
                      <p className="[word-break:break-word] font-['SF_Pro_Display:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#767d88] text-[11px] tracking-[-0.11px] whitespace-nowrap" data-node-id="40002524:7978">
                        только что
                      </p>
                    </div>
                    <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#595959] text-[13px] tracking-[-0.13px] w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      Когда доставка?
                    </p>
                  </div>
                  <div className="bg-[#e5484d] content-stretch flex items-center overflow-clip px-[7px] py-[3px] relative rounded-[100px] shrink-0" data-node-id="40002524:7980" data-name="bd">
                    <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[10px] text-white tracking-[0.2px] whitespace-nowrap" data-node-id="40002524:7981">
                      Новый
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] h-[54px] items-start px-[10px] py-[7px] overflow-hidden relative rounded-[10px] shrink-0 w-[298px]" data-node-id="40002524:7982" data-name="ch">
                  <div className="bg-[#8b5cf6] content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shrink-0 size-[28px]" data-node-id="40002524:7983" data-name="av">
                    <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.12px] whitespace-nowrap" data-node-id="40002524:7984">
                      Д
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="40002524:7985" data-name="main">
                    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-node-id="40002524:7986" data-name="top">
                      <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0a1519] text-[13px] tracking-[-0.13px] whitespace-nowrap" data-node-id="40002524:7987">
                        {HERO_CHAT_NAMES[2]}
                      </p>
                      <div className="flex-[1_0_0] h-[100px] min-w-px relative" data-node-id="40002524:7988" data-name="s" />
                      <p className="[word-break:break-word] font-['SF_Pro_Display:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#767d88] text-[11px] tracking-[-0.11px] whitespace-nowrap" data-node-id="40002524:7989">
                        4 мин
                      </p>
                    </div>
                    <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#108ef5] text-[13px] tracking-[-0.13px] w-full overflow-hidden text-ellipsis whitespace-nowrap" data-node-id="40002524:7990">
                      Передал в доставку ✅
                    </p>
                  </div>
                  <div className="bg-[#f7b50d] content-stretch flex items-center overflow-clip px-[7px] py-[3px] relative rounded-[100px] shrink-0" data-node-id="40002524:7991" data-name="bd">
                    <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[10px] text-white tracking-[0.2px] whitespace-nowrap" data-node-id="40002524:7992">
                      Открыт
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] h-[54px] items-start px-[10px] py-[7px] overflow-hidden relative rounded-[10px] shrink-0 w-[298px]" data-node-id="40002524:7993" data-name="ch">
                  <div className="bg-[#ec4899] content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shrink-0 size-[28px]" data-node-id="40002524:7994" data-name="av">
                    <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.12px] whitespace-nowrap" data-node-id="40002524:7995">
                      М
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="40002524:7996" data-name="main">
                    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-node-id="40002524:7997" data-name="top">
                      <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0a1519] text-[13px] tracking-[-0.13px] whitespace-nowrap" data-node-id="40002524:7998">
                        {HERO_CHAT_NAMES[3]}
                      </p>
                      <div className="flex-[1_0_0] h-[100px] min-w-px relative" data-node-id="40002524:7999" data-name="s" />
                      <p className="[word-break:break-word] font-['SF_Pro_Display:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#767d88] text-[11px] tracking-[-0.11px] whitespace-nowrap" data-node-id="40002524:8000">
                        12 мин
                      </p>
                    </div>
                    <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#595959] text-[13px] tracking-[-0.13px] w-full overflow-hidden text-ellipsis whitespace-nowrap" data-node-id="40002524:8001">
                      Спасибо!
                    </p>
                  </div>
                  <div className="bg-[#f7b50d] content-stretch flex items-center overflow-clip px-[7px] py-[3px] relative rounded-[100px] shrink-0" data-node-id="40002524:8002" data-name="bd">
                    <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[10px] text-white tracking-[0.2px] whitespace-nowrap" data-node-id="40002524:8003">
                      Открыт
                    </p>
                  </div>
                </div>
                <div className="bg-[#f3f8ff] content-stretch flex gap-[12px] h-[54px] items-start px-[10px] py-[7px] overflow-hidden relative rounded-[10px] shrink-0 w-[298px]" data-node-id="40002524:8004" data-name="ch">
                  <div className="bg-[#0ea5e9] content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shrink-0 size-[28px]" data-node-id="40002524:8005" data-name="av">
                    <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.12px] whitespace-nowrap" data-node-id="40002524:8006">
                      А
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="40002524:8007" data-name="main">
                    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-node-id="40002524:8008" data-name="top">
                      <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0a1519] text-[13px] tracking-[-0.13px] whitespace-nowrap" data-node-id="40002524:8009">
                        {HERO_CHAT_NAMES[4]}
                      </p>
                      <div className="flex-[1_0_0] h-[100px] min-w-px relative" data-node-id="40002524:8010" data-name="s" />
                      <p className="[word-break:break-word] font-['SF_Pro_Display:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#767d88] text-[11px] tracking-[-0.11px] whitespace-nowrap" data-node-id="40002524:8011">
                        10 мин
                      </p>
                    </div>
                    <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#595959] text-[13px] tracking-[-0.13px] w-full overflow-hidden text-ellipsis whitespace-nowrap" data-node-id="40002524:8012">
                      Буду ждать!
                    </p>
                  </div>
                  <div className="bg-[#4fd192] content-stretch flex items-center overflow-clip px-[7px] py-[3px] relative rounded-[100px] shrink-0" data-node-id="40002524:8013" data-name="bd">
                    <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[10px] text-white tracking-[0.2px] whitespace-nowrap" data-node-id="40002524:8014">
                      Закрыт
                    </p>
                  </div>
                </div>
                <div className="bg-[#f3f8ff] content-stretch flex gap-[12px] h-[54px] items-start px-[10px] py-[7px] overflow-hidden relative rounded-[10px] shrink-0 w-[298px]" data-node-id="40002524:8015" data-name="ch">
                  <div className="bg-[#0ea5e9] content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shrink-0 size-[28px]" data-node-id="40002524:8016" data-name="av">
                    <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.12px] whitespace-nowrap" data-node-id="40002524:8017">
                      А
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="40002524:8018" data-name="main">
                    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-node-id="40002524:8019" data-name="top">
                      <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0a1519] text-[13px] tracking-[-0.13px] whitespace-nowrap" data-node-id="40002524:8020">
                        {HERO_CHAT_NAMES[5]}
                      </p>
                      <div className="flex-[1_0_0] h-[100px] min-w-px relative" data-node-id="40002524:8021" data-name="s" />
                      <p className="[word-break:break-word] font-['SF_Pro_Display:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#767d88] text-[11px] tracking-[-0.11px] whitespace-nowrap" data-node-id="40002524:8022">
                        15 мин
                      </p>
                    </div>
                    <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#595959] text-[13px] tracking-[-0.13px] w-full overflow-hidden text-ellipsis whitespace-nowrap" data-node-id="40002524:8023">
                      Можно скидку?
                    </p>
                  </div>
                  <div className="bg-[#4fd192] content-stretch flex items-center overflow-clip px-[7px] py-[3px] relative rounded-[100px] shrink-0" data-node-id="40002524:8024" data-name="bd">
                    <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[10px] text-white tracking-[0.2px] whitespace-nowrap" data-node-id="40002524:8025">
                      Закрыт
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white content-stretch flex flex-col items-start left-[19px] pb-[16px] pt-[14px] px-[14px] top-[19.5px] w-[203px]" data-node-id="40002524:8026" data-name="shop">
              <div className="content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="40002524:8027" data-name="stabs">
                <div className="bg-[#108ef5] content-stretch flex items-center overflow-clip px-[10px] py-[6px] relative rounded-[100px] shrink-0" data-node-id="40002524:8028" data-name="ta">
                  <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.12px] whitespace-nowrap" data-node-id="40002524:8029">
                    🛍 Магазин
                  </p>
                </div>
                <div className="[word-break:break-word] bg-[#f6f7f9] content-stretch flex gap-[4px] items-center leading-[1.5] not-italic px-[10px] py-[6px] relative rounded-[100px] shrink-0 text-[12px] tracking-[-0.12px] whitespace-nowrap" data-node-id="40002524:8030" data-name="tm">
                  <p className="font-['SF_Pro_Display:Regular',sans-serif] relative shrink-0 text-[#767d88]" data-node-id="40002524:8031">
                    Заказы
                  </p>
                  <p className="font-['SF_Pro_Display:Semibold',sans-serif] relative shrink-0 text-[#0a1519]" data-node-id="40002524:8032">
                    198
                  </p>
                </div>
              </div>
              <div className="h-[12px] relative shrink-0 w-[100px]" data-node-id="40002524:8033" data-name="sp" />
              <div className={`h-[379px] relative shrink-0 w-[175px] ${T.isRU ? '' : 'rounded-[20px] shadow-[-1px_-1px_6px_0px_rgba(0,0,0,0.2)]'}`} data-node-id="40002524:8034" data-name="Frame 2136140004 1">
                <img alt="" className={`absolute inset-0 max-w-none pointer-events-none size-full ${T.isRU ? 'object-contain' : 'object-cover rounded-[20px]'}`} src={imgFrame21361400041} />
              </div>
              <div className="h-[12px] relative shrink-0 w-[100px]" data-node-id="40002524:8035" data-name="sp" />
              <div className="h-[8px] relative shrink-0 w-[100px]" data-node-id="40002524:8036" data-name="sp" />
            </div>
            <div className="absolute flex h-[161.172px] items-center justify-center left-[-16px] top-[306.1px] w-[298.231px]">
              <div className="-rotate-6 flex-none">
                <div className="bg-white drop-shadow-[0px_16px_20px_rgba(13,18,31,0.12)] h-[132px] relative rounded-[20px] w-[286px]" data-node-id="40002526:7859" data-name="badge-15min">
                  <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[24px] not-italic text-[#6b7380] text-[14px] top-[20px] whitespace-nowrap" data-node-id="40002526:7860">
                    Запуск за
                  </p>
                  <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[24px] not-italic text-[#121726] text-[32px] top-[42px] whitespace-nowrap" data-node-id="40002526:7861">
                    15 минут
                  </p>
                  <div className="absolute left-[24px] size-[22px] top-[92px]" data-node-id="40002526:7862" data-name="Ellipse">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
                  </div>
                  <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[54px] not-italic text-[#1f242e] text-[14px] top-[94px] whitespace-nowrap" data-node-id="40002526:7863">
                    без программистов
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute flex h-[112.65px] items-center justify-center left-[498.56px] top-[24px] w-[173.213px]">
              <div className="flex-none rotate-3">
                <div className="[word-break:break-word] bg-white drop-shadow-[0px_12px_15px_rgba(79,209,146,0.22)] h-[104px] not-italic relative rounded-[16px] w-[168px]" data-node-id="40002526:7864" data-name="badge-37orders">
                  <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[20px] text-[#0fba82] text-[32px] top-[14px]" data-node-id="40002526:7865">
                    +37
                  </p>
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[20px] right-[16px] text-[#4d5966] text-[13px] top-[56px]" data-node-id="40002526:7866">новых заказов сегодня</p>
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] absolute bg-white drop-shadow-[0px_12px_15px_rgba(13,18,31,0.1)] h-[104px] left-[520px] not-italic rounded-[16px] top-[376px] w-[156px]" data-node-id="40002526:7867" data-name="badge-12msg">
              <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[20px] text-[#121726] text-[32px] top-[14px]" data-node-id="40002526:7868">
                12
              </p>
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[20px] right-[16px] text-[#4d5966] text-[13px] top-[56px]" data-node-id="40002526:7869">новых заявок в чатах</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f6f7f9] border border-[rgba(0,0,0,0.04)] border-solid content-stretch flex flex-col items-center overflow-clip px-[120px] py-[56px] relative shrink-0 w-[1440px]" data-node-id="40002524:8037" data-name="Trust" id="trust">
        <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[30px] text-black text-center w-[1200px]" data-node-id="40002524:8038">
          Нам доверяют
        </p>
        <div className="h-[32px] relative shrink-0 w-[100px]" data-node-id="40002524:8039" data-name="sp" />
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[1200px]" data-node-id="40002524:8040" data-name="logos">
          <SectionUpperDefault className="h-[80px] overflow-clip relative shrink-0 w-[1200px]" />
        </div>
        <div className="content-stretch flex gap-[12px] h-[287px] items-center relative shrink-0 w-[1200px]" data-node-id="40002524:8042" data-name="cases-row">
          <div className="bg-[var(--bg-\/-main,white)] content-stretch flex flex-col gap-[10px] items-start px-[16px] py-[32px] relative rounded-[20px] shrink-0 w-[310px]" data-node-id="40002686:8557" data-name="case-1">
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-node-id="40002686:8558">
              <div className="[word-break:break-word] bg-[rgba(33,178,99,0.14)] content-stretch flex gap-[6px] items-center leading-[normal] overflow-clip px-[10px] py-[4px] relative rounded-[10px] shrink-0 text-[#0f8c33] whitespace-nowrap" data-node-id="40002712:8489" data-name="badge-case">
                <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0 text-[10px]" data-node-id="40002712:8490" style={{ fontVariationSettings: "'wdth' 100" }}>
                  ✓
                </p>
                <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-[11px]" data-node-id="40002712:8491" style={{ fontVariationSettings: "'wdth' 100" }}>
                  x2 клиентов
                </p>
              </div>
              <div className="content-stretch flex gap-[27px] items-start relative shrink-0 w-full" data-node-id="40002686:8559">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-node-id="40002686:8560">
                  <p className="[word-break:break-word] font-['SF_Pro:Heavy',sans-serif] font-[860] leading-[normal] relative shrink-0 text-[24px] text-[color:var(--accent-\/-green,#1d9b5e)] tracking-[-0.912px] whitespace-nowrap" data-node-id="40002686:8561" style={{ fontVariationSettings: "'wdth' 100" }}>
                    +30%
                  </p>
                  <div className="bg-[#21b263] h-[4px] relative rounded-[2px] shrink-0 w-[60px]" data-node-id="40002712:8485" data-name="Rectangle" />
                  <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[18px] min-w-full relative shrink-0 text-[14px] text-[color:var(--text-\/-primary,#0a1519)] tracking-[-0.392px] w-[min-content]" data-node-id="40002686:8562" style={{ fontVariationSettings: "'wdth' 100" }}>
                    рост продаж
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-node-id="40002686:8563">
                  <p className="[word-break:break-word] font-['SF_Pro:Heavy',sans-serif] font-[860] leading-[normal] relative shrink-0 text-[24px] text-[color:var(--accent-\/-green,#1d9b5e)] tracking-[-0.912px] whitespace-nowrap" data-node-id="40002686:8564" style={{ fontVariationSettings: "'wdth' 100" }}>
                    +40%
                  </p>
                  <div className="bg-[#21b263] h-[4px] relative rounded-[2px] shrink-0 w-[60px]" data-node-id="40002712:8486" data-name="Rectangle" />
                  <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[18px] min-w-full relative shrink-0 text-[14px] text-[color:var(--text-\/-primary,#0a1519)] tracking-[-0.392px] w-[min-content]" data-node-id="40002686:8565" style={{ fontVariationSettings: "'wdth' 100" }}>
                    товаров в заказе
                  </p>
                </div>
              </div>
              <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8c949e] text-[11px] whitespace-nowrap" data-node-id="40002712:8488" style={{ fontVariationSettings: "'wdth' 100" }}>
                за квартал
              </p>
              <div className="h-[48px] overflow-clip relative shrink-0 w-[272px]" data-node-id="40002686:8569" data-name="Container">
                <div className="-translate-y-1/2 absolute content-stretch flex gap-[16px] items-center left-0 overflow-clip top-[calc(50%+0.14px)] w-[272px]" data-node-id="40002686:8570" data-name="Container">
                  <div className="border border-[var(--bg-\/-minor,#f6f7f9)] border-solid relative rounded-[200px] shrink-0 size-[48px]" data-node-id="40002686:8571" data-name="photo_2025-08-26 15.09.21 2">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[200px] size-full" src={imgPhoto202508261509211} />
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-px items-start relative shrink-0 w-[202px]" data-node-id="40002686:8572">
                    <div className="flex flex-col font-['SF_Pro:Heavy',sans-serif] font-[860] justify-center leading-[0] relative shrink-0 text-[14px] text-[color:var(--text-\/-primary,#0a1519)] tracking-[-0.09px] w-full" data-node-id="40002686:8573" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[17px]">Fashion Fabrique</p>
                    </div>
                    <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[15px] opacity-60 relative shrink-0 text-[12px] text-[color:var(--text-\/-secondary,#595959)] tracking-[-0.216px] w-full" data-node-id="40002686:8574" style={{ fontVariationSettings: "'wdth' 100" }}>
                      бренд одежды, обуви и аксессуаров
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute border border-[#e9ebf1] border-solid inset-0 rounded-[12px]" data-node-id="40002686:8575" data-name="Border" />
          </div>
          <div className="bg-[var(--bg-\/-main,white)] content-stretch flex flex-col gap-[10px] h-[239px] items-start pb-[11px] pt-[14px] px-[32px] relative rounded-[20px] shrink-0 w-[285px]" data-node-id="40002690:8539" data-name="case-2">
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-node-id="40002690:8540">
              <div className="[word-break:break-word] bg-[rgba(33,178,99,0.14)] content-stretch flex gap-[6px] items-center leading-[normal] overflow-clip px-[10px] py-[4px] relative rounded-[10px] shrink-0 text-[#0f8c33] whitespace-nowrap" data-node-id="40002705:8488" data-name="badge-0rub">
                <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0 text-[10px]" data-node-id="40002705:8489" style={{ fontVariationSettings: "'wdth' 100" }}>
                  ✓
                </p>
                <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-[11px]" data-node-id="40002705:8490" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {T.zeroAdsBadge}
                </p>
              </div>
              <div className="content-stretch flex gap-[34px] h-[63px] items-start relative shrink-0 w-full" data-node-id="40002690:8541">
                <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-node-id="40002690:8542">
                  <div className="[word-break:break-word] font-['SF_Pro:Heavy',sans-serif] font-[860] leading-[0] relative shrink-0 text-[#0f8c33] text-[24px] tracking-[-0.912px] whitespace-nowrap" data-node-id="40002690:8543" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[normal] mb-0 whitespace-pre">{`6 515 `}</p>
                    <p className="leading-[normal] whitespace-pre">заказов</p>
                  </div>
                  <div className="bg-[#21b263] h-[4px] relative rounded-[2px] shrink-0 w-[80px]" data-node-id="40002705:8485" data-name="Rectangle" />
                  <div className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[0] relative shrink-0 text-[#6b7885] text-[14px] tracking-[-0.392px] whitespace-nowrap" data-node-id="40002690:8544" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[18px] mb-0 whitespace-pre">{`с TGShop `}</p>
                    <p className="leading-[18px] whitespace-pre">за 6 месяцев</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-node-id="40002690:8545">
                  <p className="[word-break:break-word] font-['SF_Pro:Heavy',sans-serif] font-[860] leading-[normal] relative shrink-0 text-[#f04545] text-[24px] tracking-[-0.912px] whitespace-nowrap" data-node-id="40002690:8546" style={{ fontVariationSettings: "'wdth' 100" }}>740</p>
                  <div className="bg-[#c7cfd9] h-[4px] relative rounded-[2px] shrink-0 w-[12px]" data-node-id="40002705:8486" data-name="Rectangle" />
                  <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[18px] relative shrink-0 text-[#6b7885] text-[14px] tracking-[-0.392px] w-[130px]" data-node-id="40002690:8547" style={{ fontVariationSettings: "'wdth' 100" }}>«до» было на маркетплейсе</p>
                </div>
              </div>
            </div>
            <div className="h-[121px] overflow-clip relative shrink-0 w-[253px]" data-node-id="40002690:8551" data-name="Container">
              <div className="-translate-y-1/2 absolute content-stretch flex gap-[12px] items-center left-0 overflow-clip top-[calc(50%+15.5px)] w-[272px]" data-node-id="40002690:8552" data-name="Container">
                <div className="border border-[var(--bg-\/-minor,#f6f7f9)] border-solid relative rounded-[999px] shrink-0 size-[40px]" data-node-id="40002758:2528" data-name="Background">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgBackground} />
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px items-start min-w-px relative" data-node-id="40002690:8554">
                  <div className="flex flex-col font-['SF_Pro:Heavy',sans-serif] font-[860] justify-center leading-[0] relative shrink-0 text-[14px] text-[color:var(--text-\/-primary,#0a1519)] tracking-[-0.09px] w-full" data-node-id="40002690:8555" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[17px]">Around You</p>
                  </div>
                  <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[15px] opacity-60 relative shrink-0 text-[12px] text-[color:var(--text-\/-secondary,#595959)] tracking-[-0.216px] w-full" data-node-id="40002690:8556" style={{ fontVariationSettings: "'wdth' 100" }}>
                    цветочный магазин
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute border border-[#e9ebf1] border-solid inset-0 rounded-[12px]" data-node-id="40002690:8557" data-name="Border" />
          </div>
          <div className="bg-[var(--bg-\/-main,white)] content-stretch flex flex-col gap-[10px] items-start p-[32px] relative rounded-[20px] shrink-0 w-[285px]" data-node-id="40002690:8558" data-name="case-3">
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-node-id="40002690:8559">
              <div className="[word-break:break-word] bg-[rgba(33,178,99,0.14)] content-stretch flex gap-[6px] items-center leading-[normal] overflow-clip px-[10px] py-[4px] relative rounded-[10px] shrink-0 text-[#0f8c33] whitespace-nowrap" data-node-id="40002712:8496" data-name="badge-case">
                <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0 text-[10px]" data-node-id="40002712:8497" style={{ fontVariationSettings: "'wdth' 100" }}>
                  ✓
                </p>
                <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-[11px]" data-node-id="40002712:8498" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Постоянный рост
                </p>
              </div>
              <div className="content-stretch flex gap-[20px] h-[63px] items-start relative shrink-0 w-full" data-node-id="40002690:8560">
                <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-node-id="40002690:8561">
                  <p className="[word-break:break-word] font-['SF_Pro:Heavy',sans-serif] font-[860] leading-[normal] relative shrink-0 text-[24px] text-[color:var(--accent-\/-green,#1d9b5e)] tracking-[-0.912px] whitespace-nowrap" data-node-id="40002690:8562" style={{ fontVariationSettings: "'wdth' 100" }}>
                    +15%
                  </p>
                  <div className="bg-[#21b263] h-[4px] relative rounded-[2px] shrink-0 w-[60px]" data-node-id="40002712:8492" data-name="Rectangle" />
                  <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[18px] relative shrink-0 text-[14px] text-[color:var(--text-\/-primary,#0a1519)] tracking-[-0.392px] w-[110px]" data-node-id="40002690:8563" style={{ fontVariationSettings: "'wdth' 100" }}>
                    конверсия продаж
                  </p>
                </div>
                <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-node-id="40002690:8564">
                  <p className="[word-break:break-word] font-['SF_Pro:Heavy',sans-serif] font-[860] leading-[normal] relative shrink-0 text-[24px] text-[color:var(--accent-\/-green,#1d9b5e)] tracking-[-0.912px] whitespace-nowrap" data-node-id="40002690:8565" style={{ fontVariationSettings: "'wdth' 100" }}>
                    +7%
                  </p>
                  <div className="bg-[#21b263] h-[4px] relative rounded-[2px] shrink-0 w-[60px]" data-node-id="40002712:8493" data-name="Rectangle" />
                  <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[18px] relative shrink-0 text-[14px] text-[color:var(--text-\/-primary,#0a1519)] tracking-[-0.392px] whitespace-nowrap" data-node-id="40002690:8566" style={{ fontVariationSettings: "'wdth' 100" }}>
                    рост в месяц
                  </p>
                </div>
              </div>
              <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] opacity-0 relative shrink-0 text-[#8c949e] text-[11px] whitespace-nowrap" data-node-id="40002712:8495" style={{ fontVariationSettings: "'wdth' 100" }}>
                в месяц
              </p>
              <div className="h-[48px] overflow-clip relative shrink-0 w-[272px]" data-node-id="40002690:8570" data-name="Container">
                <div className="-translate-y-1/2 absolute content-stretch flex gap-[12px] items-center left-0 overflow-clip top-[calc(50%+0.14px)] w-[272px]" data-node-id="40002690:8571" data-name="Container">
                  <div className="border border-[var(--bg-\/-minor,#f6f7f9)] border-solid relative rounded-[999px] shrink-0 size-[40px]" data-node-id="40002690:8572" data-name="Background">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgBackground1} />
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px items-start min-w-px relative" data-node-id="40002690:8573">
                    <div className="flex flex-col font-['SF_Pro:Heavy',sans-serif] font-[860] justify-center leading-[0] relative shrink-0 text-[14px] text-[color:var(--text-\/-primary,#0a1519)] tracking-[-0.09px] w-full" data-node-id="40002690:8574" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[17px]">Hold Store</p>
                    </div>
                    <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[15px] opacity-60 relative shrink-0 text-[12px] text-[color:var(--text-\/-secondary,#595959)] tracking-[-0.216px] w-full" data-node-id="40002690:8575" style={{ fontVariationSettings: "'wdth' 100" }}>
                      магазин кроссовок
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute border border-[#e9ebf1] border-solid inset-0 rounded-[12px]" data-node-id="40002690:8576" data-name="Border" />
          </div>
          <div className="bg-[var(--bg-\/-main,white)] content-stretch flex flex-col gap-[10px] items-start p-[32px] relative rounded-[20px] shrink-0 w-[285px]" data-node-id="40002690:8577" data-name="case-4">
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-node-id="40002690:8578">
              <div className="[word-break:break-word] bg-[rgba(33,178,99,0.14)] content-stretch flex gap-[6px] items-center leading-[normal] overflow-clip px-[10px] py-[4px] relative rounded-[10px] shrink-0 text-[#0f8c33] whitespace-nowrap" data-node-id="40002712:8503" data-name="badge-case">
                <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0 text-[10px]" data-node-id="40002712:8504" style={{ fontVariationSettings: "'wdth' 100" }}>
                  ✓
                </p>
                <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-[11px]" data-node-id="40002712:8505" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Без сложной CRM
                </p>
              </div>
              <div className="content-stretch flex gap-[20px] h-[63px] items-start relative shrink-0 w-full" data-node-id="40002690:8579">
                <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-node-id="40002690:8580">
                  <p className="[word-break:break-word] font-['SF_Pro:Heavy',sans-serif] font-[860] leading-[normal] relative shrink-0 text-[24px] text-[color:var(--accent-\/-green,#1d9b5e)] tracking-[-0.912px] whitespace-nowrap" data-node-id="40002690:8581" style={{ fontVariationSettings: "'wdth' 100" }}>
                    +43%
                  </p>
                  <div className="bg-[#21b263] h-[4px] relative rounded-[2px] shrink-0 w-[60px]" data-node-id="40002712:8499" data-name="Rectangle" />
                  <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[18px] relative shrink-0 text-[14px] text-[color:var(--text-\/-primary,#0a1519)] tracking-[-0.392px] w-[113px]" data-node-id="40002690:8582" style={{ fontVariationSettings: "'wdth' 100" }}>
                    конверсия продаж
                  </p>
                </div>
                <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-node-id="40002690:8583">
                  <p className="[word-break:break-word] font-['SF_Pro:Heavy',sans-serif] font-[860] leading-[normal] relative shrink-0 text-[24px] text-[color:var(--accent-\/-green,#1d9b5e)] tracking-[-0.912px] whitespace-nowrap" data-node-id="40002690:8584" style={{ fontVariationSettings: "'wdth' 100" }}>
                    х1,5
                  </p>
                  <div className="bg-[#21b263] h-[4px] relative rounded-[2px] shrink-0 w-[60px]" data-node-id="40002712:8500" data-name="Rectangle" />
                  <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[18px] relative shrink-0 text-[14px] text-[color:var(--text-\/-primary,#0a1519)] tracking-[-0.392px] whitespace-nowrap" data-node-id="40002690:8585" style={{ fontVariationSettings: "'wdth' 100" }}>
                    рост выручки
                  </p>
                </div>
              </div>
              <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] opacity-0 relative shrink-0 text-[#8c949e] text-[11px] whitespace-nowrap" data-node-id="40002712:8502" style={{ fontVariationSettings: "'wdth' 100" }}>
                за полгода
              </p>
              <div className="h-[48px] overflow-clip relative shrink-0 w-[272px]" data-node-id="40002690:8589" data-name="Container">
                <div className="-translate-y-1/2 absolute content-stretch flex gap-[12px] items-center left-0 overflow-clip top-[calc(50%+0.14px)] w-[272px]" data-node-id="40002690:8590" data-name="Container">
                  <div className="border-[1.25px] border-[var(--bg-\/-minor,#f6f7f9)] border-solid relative rounded-[1000px] shrink-0 size-[40px]" data-node-id="40002690:8591" data-name="photo_2025-08-26 15.09.13 2">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[1000px] size-full" src={imgPhoto202508261509132} />
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px items-start min-w-px relative" data-node-id="40002690:8592">
                    <div className="flex flex-col font-['SF_Pro:Heavy',sans-serif] font-[860] justify-center leading-[0] relative shrink-0 text-[14px] text-[color:var(--text-\/-primary,#0a1519)] tracking-[-0.09px] w-full" data-node-id="40002690:8593" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[17px]">Casher</p>
                    </div>
                    <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[15px] opacity-60 relative shrink-0 text-[12px] text-[color:var(--text-\/-secondary,#595959)] tracking-[-0.216px] w-full" data-node-id="40002690:8594" style={{ fontVariationSettings: "'wdth' 100" }}>
                      магазин одежды
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute border border-[#e9ebf1] border-solid inset-0 rounded-[12px]" data-node-id="40002690:8595" data-name="Border" />
          </div>
        </div>
        <div className="h-[40px] relative shrink-0 w-[100px]" data-node-id="40002524:8047" data-name="sp" />
        <div className="bg-[rgba(0,0,0,0.06)] h-px relative shrink-0 w-[1200px]" data-node-id="40002524:8048" data-name="div" />
        <div className="h-[32px] relative shrink-0 w-[100px]" data-node-id="40002524:8049" data-name="sp" />
        <div className="[word-break:break-word] content-stretch flex gap-[64px] items-center not-italic overflow-clip relative shrink-0 text-center" data-node-id="40002524:8050" data-name="stats">
          <div className="content-stretch flex flex-col gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="40002524:8051" data-name="stat">
            <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-none relative shrink-0 text-[#108ef5] text-[36px] tracking-[-1.08px] whitespace-nowrap" data-node-id="40002524:8052">
              2 000+
            </p>
            <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[#595959] text-[14px] tracking-[-0.14px] w-[200px]" data-node-id="40002524:8053">
              магазинов в Telegram
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="40002524:8054" data-name="stat">
            <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-none relative shrink-0 text-[#108ef5] text-[36px] tracking-[-1.08px] whitespace-nowrap" data-node-id="40002524:8055">
              1,5 млн
            </p>
            <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[#595959] text-[14px] tracking-[-0.14px] w-[200px]" data-node-id="40002524:8056">
              заказов обработано
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="40002524:8057" data-name="stat">
            <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-none relative shrink-0 text-[#108ef5] text-[36px] tracking-[-1.08px] whitespace-nowrap" data-node-id="40002524:8058">
              15 минут
            </p>
            <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[#595959] text-[14px] tracking-[-0.14px] w-[200px]" data-node-id="40002524:8059">
              на подключение
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#f6f7f9] content-stretch flex flex-col items-center overflow-clip pb-[120px] pt-[52px] px-[120px] relative shrink-0 w-[1440px]" data-node-id="40002524:8060" data-name="Pain">
        <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-[820px]" data-node-id="40002524:8061" data-name="section-head">
          <div className="h-[16px] relative shrink-0 w-[100px]" data-node-id="40002524:8062" data-name="sp" />
          <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#0a1519] text-[44px] text-center tracking-[-1.1px] w-[820px]" data-node-id="40002524:8063">
            Каждый день ваш магазин теряет выручку
          </p>
        </div>
        <div className="h-[48px] relative shrink-0 w-[100px]" data-node-id="40002524:8064" data-name="sp" />
        <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-[1200px]" data-node-id="40002524:8065" data-name="pain-grid">
          <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-[1200px]" data-node-id="40002524:8066" data-name="r0">
            <div className="bg-white border border-[rgba(229,72,77,0.5)] border-solid content-stretch flex flex-col items-start overflow-clip px-[24px] py-[28px] relative rounded-[24px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] shrink-0 w-[386.667px]" data-node-id="40002524:8067" data-name="pain-card">
              <div className="bg-[rgba(229,72,77,0.08)] content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[40px]" data-node-id="40002524:8068" data-name="icon">
                <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5484d] text-[18px] tracking-[-0.18px] whitespace-nowrap" data-node-id="40002524:8069">
                  ✕
                </p>
              </div>
              <div className="h-[18px] relative shrink-0 w-[100px]" data-node-id="40002524:8070" data-name="sp" />
              <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[#0a1519] text-[18px] tracking-[-0.36px] w-[330.667px]" data-node-id="40002524:8071" style={{ fontVariationSettings: "'wdth' 100" }}>
                Клиент остался без ответа
              </p>
              <div className="h-[10px] relative shrink-0 w-[100px]" data-node-id="40002524:8072" data-name="sp" />
              <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.55] relative shrink-0 text-[#595959] text-[15px] tracking-[-0.15px] w-[330.667px]" data-node-id="40002524:8073" style={{ fontVariationSettings: "'wdth' 100" }}>
                Менеджер может забыть ответить — и никто это не заметит. Клиент подождал час и купил у конкурента.
              </p>
            </div>
            <div className="bg-white border border-[rgba(229,72,77,0.5)] border-solid content-stretch flex flex-col items-start overflow-clip px-[24px] py-[28px] relative rounded-[24px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] shrink-0 w-[386.667px]" data-node-id="40002524:8081" data-name="pain-card">
              <div className="bg-[rgba(229,72,77,0.08)] content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[40px]" data-node-id="40002524:8082" data-name="icon">
                <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5484d] text-[18px] tracking-[-0.18px] whitespace-nowrap" data-node-id="40002524:8083">
                  ✕
                </p>
              </div>
              <div className="h-[18px] relative shrink-0 w-[100px]" data-node-id="40002524:8084" data-name="sp" />
              <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[#0a1519] text-[18px] tracking-[-0.36px] w-[330.667px]" data-node-id="40002524:8085" style={{ fontVariationSettings: "'wdth' 100" }}>
                Уволился менеджер — клиенты ушли с ним
              </p>
              <div className="h-[10px] relative shrink-0 w-[100px]" data-node-id="40002524:8086" data-name="sp" />
              <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.55] relative shrink-0 text-[#595959] text-[15px] tracking-[-0.15px] w-[330.667px]" data-node-id="40002524:8087" style={{ fontVariationSettings: "'wdth' 100" }}>
                Переписка велась в личном Telegram. Кто этот клиент и чем интересовался, знает только бывший сотрудник.
              </p>
            </div>
            <div className="bg-white border border-[rgba(229,72,77,0.5)] border-solid content-stretch flex flex-col items-start overflow-clip px-[24px] py-[28px] relative rounded-[24px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] shrink-0 w-[386.667px]" data-node-id="40002524:8089" data-name="pain-card">
              <div className="bg-[rgba(229,72,77,0.08)] content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[40px]" data-node-id="40002524:8090" data-name="icon">
                <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5484d] text-[18px] tracking-[-0.18px] whitespace-nowrap" data-node-id="40002524:8091">
                  ✕
                </p>
              </div>
              <div className="h-[18px] relative shrink-0 w-[100px]" data-node-id="40002524:8092" data-name="sp" />
              <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[#0a1519] text-[18px] tracking-[-0.36px] w-[330.667px]" data-node-id="40002524:8093" style={{ fontVariationSettings: "'wdth' 100" }}>
                Менеджеры обещают то, чего нет
              </p>
              <div className="h-[10px] relative shrink-0 w-[100px]" data-node-id="40002524:8094" data-name="sp" />
              <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.55] relative shrink-0 text-[#595959] text-[15px] tracking-[-0.15px] w-[330.667px]" data-node-id="40002524:8095" style={{ fontVariationSettings: "'wdth' 100" }}>
                Менеджер грубит клиенту, называет неверную цену или придумывает сроки доставки. Об этом вы узнаёте, когда клиент уже ушёл с негативом.
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-[1200px]" data-node-id="40002524:8088" data-name="r3">
            <div className="bg-white border border-[#4fd192] border-solid content-stretch flex flex-col items-start overflow-clip px-[24px] py-[28px] relative rounded-[24px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] shrink-0 w-[386.667px]" data-node-id="40002524:8096" data-name="pain-card">
              <div className="bg-[rgba(79,209,146,0.08)] content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[40px]" data-node-id="40002524:8097" data-name="icon">
                <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1d9b5e] text-[18px] tracking-[-0.18px] whitespace-nowrap" data-node-id="40002524:8098">
                  ✓
                </p>
              </div>
              <div className="h-[18px] relative shrink-0 w-[100px]" data-node-id="40002524:8099" data-name="sp" />
              <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[#0a1519] text-[18px] tracking-[-0.36px] w-[330.667px]" data-node-id="40002524:8100" style={{ fontVariationSettings: "'wdth' 100" }}>
                Контроль чатов с клиентами
              </p>
              <div className="h-[10px] relative shrink-0 w-[100px]" data-node-id="40002524:8101" data-name="sp" />
              <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.55] relative shrink-0 text-[#595959] text-[15px] tracking-[-0.15px] w-[330.667px]" data-node-id="40002524:8102" style={{ fontVariationSettings: "'wdth' 100" }}>
                Руководитель открывает любой диалог и видит, как менеджер обрабатывает заявки и как общается с клиентами.
              </p>
            </div>
            <div className="bg-white border border-[#4fd192] border-solid content-stretch flex flex-col items-start overflow-clip px-[24px] py-[28px] relative rounded-[24px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] shrink-0 w-[386.667px]" data-node-id="40002616:7859" data-name="pain-card">
              <div className="bg-[rgba(79,209,146,0.08)] content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[40px]" data-node-id="40002616:7860" data-name="icon">
                <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1d9b5e] text-[18px] tracking-[-0.18px] whitespace-nowrap" data-node-id="40002616:7861">
                  ✓
                </p>
              </div>
              <div className="h-[18px] relative shrink-0 w-[100px]" data-node-id="40002616:7862" data-name="sp" />
              <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[#0a1519] text-[18px] tracking-[-0.36px] w-[330.667px]" data-node-id="40002616:7863" style={{ fontVariationSettings: "'wdth' 100" }}>
                Магазин принимает заказы 24/7
              </p>
              <div className="h-[10px] relative shrink-0 w-[100px]" data-node-id="40002616:7864" data-name="sp" />
              <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.55] relative shrink-0 text-[#595959] text-[15px] tracking-[-0.15px] w-[330.667px]" data-node-id="40002616:7865" style={{ fontVariationSettings: "'wdth' 100" }}>
                Клиенты оформляют заказ в один клик в любое время суток, а вы не теряете выручку в нерабочее время.
              </p>
            </div>
            <div className="bg-white border border-[#4fd192] border-solid content-stretch flex flex-col items-start overflow-clip px-[24px] py-[28px] relative rounded-[24px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] shrink-0 w-[386.667px]" data-node-id="40002616:7866" data-name="pain-card">
              <div className="bg-[rgba(79,209,146,0.08)] content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[40px]" data-node-id="40002616:7867" data-name="icon">
                <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1d9b5e] text-[18px] tracking-[-0.18px] whitespace-nowrap" data-node-id="40002616:7868">
                  ✓
                </p>
              </div>
              <div className="h-[18px] relative shrink-0 w-[100px]" data-node-id="40002616:7869" data-name="sp" />
              <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[#0a1519] text-[18px] tracking-[-0.36px] w-[330.667px]" data-node-id="40002616:7870" style={{ fontVariationSettings: "'wdth' 100" }}>
                Без сложных CRM
              </p>
              <div className="h-[10px] relative shrink-0 w-[100px]" data-node-id="40002616:7871" data-name="sp" />
              <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.55] relative shrink-0 text-[#595959] text-[15px] tracking-[-0.15px] w-[330.667px]" data-node-id="40002616:7872" style={{ fontVariationSettings: "'wdth' 100" }}>
                Доступ к перепискам и заказам прямо в Telegram. Если менеджер уволится, клиенты останутся у вас, а не на чужом телефоне.
              </p>
            </div>
          </div>
        </div>
      </div>
      <LossCalculator variant="desktop" />

      <div className="bg-white content-stretch flex flex-col items-center overflow-clip px-[120px] py-[70px] relative shrink-0 w-[1440px]" data-node-id="40002524:8335" data-name="How">
        <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-[820px]" data-node-id="40002524:8336" data-name="section-head">
          <div className="bg-[rgba(16,142,245,0.08)] content-stretch flex items-start overflow-clip px-[12px] py-[6px] relative rounded-[100px] shrink-0" data-node-id="40002524:8337" data-name="kicker">
            <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#108ef5] text-[14px] tracking-[-0.14px] whitespace-nowrap" data-node-id="40002524:8338">
              Старт за 15 минут
            </p>
          </div>
          <div className="h-[16px] relative shrink-0 w-[100px]" data-node-id="40002524:8339" data-name="sp" />
          <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#0a1519] text-[44px] text-center tracking-[-1.1px] w-[820px]" data-node-id="40002524:8340">
            Как начать работу — три шага
          </p>
        </div>
        <div className="h-[48px] relative shrink-0 w-[100px]" data-node-id="40002524:8341" data-name="sp" />
        <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-[1200px]" data-node-id="40002524:8342" data-name="steps">
          <div className="bg-white border border-[rgba(0,0,0,0.06)] border-solid content-stretch flex flex-col items-start overflow-clip px-[24px] py-[28px] relative rounded-[24px] shrink-0 w-[384px]" data-node-id="40002524:8343" data-name="step">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="40002524:8344" data-name="h">
              <div className="bg-[#108ef5] content-stretch flex items-start overflow-clip px-[14px] py-[6px] relative rounded-[100px] shrink-0" data-node-id="40002524:8345" data-name="np">
                <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[13px] text-white tracking-[-0.13px] whitespace-nowrap" data-node-id="40002524:8346">
                  Шаг 1
                </p>
              </div>
              <div className="flex-[1_0_0] h-[16px] min-w-px relative" data-node-id="40002524:8347" data-name="s" />
              <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#767d88] text-[12px] tracking-[-0.12px] whitespace-nowrap" data-node-id="40002524:8348">
                5 минут
              </p>
            </div>
            <div className="h-[16px] relative shrink-0 w-[100px]" data-node-id="40002524:8349" data-name="sp" />
            <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#0a1519] text-[22px] tracking-[-0.44px] w-[336px]" data-node-id="40002524:8350" style={{ fontVariationSettings: "'wdth' 100" }}>
              Создайте магазин
            </p>
            <div className="h-[10px] relative shrink-0 w-[100px]" data-node-id="40002524:8351" data-name="sp" />
            <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#595959] text-[15px] tracking-[-0.15px] w-[336px]" data-node-id="40002524:8352" style={{ fontVariationSettings: "'wdth' 100" }}>
              Загрузите товары, включите доставку и оплату.
            </p>
            <div className="h-[20px] relative shrink-0 w-[100px]" data-node-id="40002524:8353" data-name="sp" />
            <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[18px] relative rounded-[16px] shrink-0 w-full" data-node-id="40002655:8244" data-name="m1-setup">
              <div className="bg-white content-stretch flex gap-[12px] items-center overflow-clip py-[4px] relative shrink-0" data-node-id="40002655:8245" data-name="row">
                <div className="bg-[rgba(15,186,130,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[24px]" data-node-id="40002655:8246" data-name="Frame">
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#0fba82] text-[12px] whitespace-nowrap" data-node-id="40002655:8247" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[14px] whitespace-nowrap" data-node-id="40002655:8248" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Каталог
                </p>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6b7885] text-[13px] whitespace-nowrap" data-node-id="40002655:8249" style={{ fontVariationSettings: "'wdth' 100" }}>
                  24 SKU
                </p>
              </div>
              <div className="bg-white content-stretch flex gap-[12px] items-center overflow-clip py-[4px] relative shrink-0" data-node-id="40002655:8250" data-name="row">
                <div className="bg-[rgba(15,186,130,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[24px]" data-node-id="40002655:8251" data-name="Frame">
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#0fba82] text-[12px] whitespace-nowrap" data-node-id="40002655:8252" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[14px] whitespace-nowrap" data-node-id="40002655:8253" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Оплата
                </p>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6b7885] text-[13px] whitespace-nowrap" data-node-id="40002655:8254" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {T.setupPayments}
                </p>
              </div>
              <div className="bg-white content-stretch flex gap-[12px] items-center overflow-clip py-[4px] relative shrink-0" data-node-id="40002655:8255" data-name="row">
                <div className="bg-[rgba(15,186,130,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[24px]" data-node-id="40002655:8256" data-name="Frame">
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#0fba82] text-[12px] whitespace-nowrap" data-node-id="40002655:8257" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[14px] whitespace-nowrap" data-node-id="40002655:8258" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Доставка
                </p>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6b7885] text-[13px] whitespace-nowrap" data-node-id="40002655:8259" style={{ fontVariationSettings: "'wdth' 100" }}>
                  3 способа
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-[rgba(0,0,0,0.06)] border-solid content-stretch flex flex-col items-start overflow-clip px-[24px] py-[28px] relative rounded-[24px] shrink-0 w-[384px]" data-node-id="40002524:8372" data-name="step">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="40002524:8373" data-name="h">
              <div className="bg-[#108ef5] content-stretch flex items-start overflow-clip px-[14px] py-[6px] relative rounded-[100px] shrink-0" data-node-id="40002524:8374" data-name="np">
                <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[13px] text-white tracking-[-0.13px] whitespace-nowrap" data-node-id="40002524:8375">
                  Шаг 2
                </p>
              </div>
              <div className="flex-[1_0_0] h-[16px] min-w-px relative" data-node-id="40002524:8376" data-name="s" />
              <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#767d88] text-[12px] tracking-[-0.12px] whitespace-nowrap" data-node-id="40002524:8377" style={{ fontVariationSettings: "'wdth' 100" }}>
                1 минута
              </p>
            </div>
            <div className="h-[16px] relative shrink-0 w-[100px]" data-node-id="40002524:8378" data-name="sp" />
            <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#0a1519] text-[22px] tracking-[-0.44px] w-[336px]" data-node-id="40002524:8379" style={{ fontVariationSettings: "'wdth' 100" }}>
              Выдайте доступ менеджерам
            </p>
            <div className="h-[10px] relative shrink-0 w-[100px]" data-node-id="40002524:8380" data-name="sp" />
            <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#595959] text-[15px] tracking-[-0.15px] w-[336px]" data-node-id="40002524:8381" style={{ fontVariationSettings: "'wdth' 100" }}>
              Обрабатывайте заявки и вопросы клиентов.
            </p>
            <div className="h-[20px] relative shrink-0 w-[100px]" data-node-id="40002524:8382" data-name="sp" />
            <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[18px] relative rounded-[16px] shrink-0 w-full" data-node-id="40002679:8244" data-name="m2-chat">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="40002679:8245" data-name="Frame">
                <div className="bg-white content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="40002679:8246" data-name="Frame">
                  <div className="bg-[rgba(38,99,235,0.15)] content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[24px]" data-node-id="40002679:8247" data-name="Frame">
                    <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#2663eb] text-[11px] whitespace-nowrap" data-node-id="40002679:8248" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Ю
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[14px] whitespace-nowrap" data-node-id="40002679:8249" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Юлия К.
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#99a6b2] text-[11px] whitespace-nowrap" data-node-id="40002679:8250" style={{ fontVariationSettings: "'wdth' 100" }}>
                  1 мин
                </p>
              </div>
              <div className="bg-[#f7fafc] content-stretch flex items-start overflow-clip px-[12px] py-[10px] relative rounded-[12px] shrink-0" data-node-id="40002679:8251" data-name="Frame">
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#121726] text-[13px] whitespace-nowrap" data-node-id="40002679:8252" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Есть Nike Air Max 39?
                </p>
              </div>
              <div className="bg-white content-stretch flex items-start justify-end overflow-clip relative shrink-0 w-full" data-node-id="40002679:8253" data-name="Frame">
                <div className="bg-[#e8f2ff] content-stretch flex items-start overflow-clip px-[12px] py-[10px] relative rounded-[12px] shrink-0" data-node-id="40002679:8254" data-name="Frame">
                  <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#121726] text-[13px] whitespace-nowrap" data-node-id="40002679:8255" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {T.chatPriceReply}
                  </p>
                </div>
              </div>
              <div className="bg-[rgba(15,186,130,0.1)] content-stretch flex gap-[10px] items-center overflow-clip px-[12px] py-[10px] relative rounded-[12px] shrink-0 w-full" data-node-id="40002679:8256" data-name="Frame">
                <div className="bg-[#0fba82] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[20px]" data-node-id="40002679:8257" data-name="Frame">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[11px] text-white whitespace-nowrap" data-node-id="40002679:8258" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="40002679:8259" data-name="Frame">
                  <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-[#121726] text-[13px]" data-node-id="40002679:8260" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Заказ оформлен
                  </p>
                  <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7885] text-[11px]" data-node-id="40002679:8261" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {T.chatOrderSum}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border border-[rgba(0,0,0,0.06)] border-solid content-stretch flex flex-col items-start overflow-clip px-[24px] py-[28px] relative rounded-[24px] shrink-0 w-[384px]" data-node-id="40002524:8403" data-name="step">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="40002524:8404" data-name="h">
              <div className="bg-[#108ef5] content-stretch flex items-start overflow-clip px-[14px] py-[6px] relative rounded-[100px] shrink-0" data-node-id="40002524:8405" data-name="np">
                <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[13px] text-white tracking-[-0.13px] whitespace-nowrap" data-node-id="40002524:8406">
                  Шаг 3
                </p>
              </div>
              <div className="flex-[1_0_0] h-[16px] min-w-px relative" data-node-id="40002524:8407" data-name="s" />
              <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#767d88] text-[12px] tracking-[-0.12px] whitespace-nowrap" data-node-id="40002524:8408">
                автоматически
              </p>
            </div>
            <div className="h-[16px] relative shrink-0 w-[100px]" data-node-id="40002524:8409" data-name="sp" />
            <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#0a1519] text-[22px] tracking-[-0.44px] w-[336px]" data-node-id="40002524:8410" style={{ fontVariationSettings: "'wdth' 100" }}>
              Отслеживайте продажи
            </p>
            <div className="h-[10px] relative shrink-0 w-[100px]" data-node-id="40002524:8411" data-name="sp" />
            <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#595959] text-[15px] tracking-[-0.15px] w-[336px]" data-node-id="40002524:8412" style={{ fontVariationSettings: "'wdth' 100" }}>
              Контролируйте все диалоги и заказы — в одном месте в Telegram.
            </p>
            <div className="h-[20px] relative shrink-0 w-[100px]" data-node-id="40002524:8413" data-name="sp" />
            <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[18px] relative rounded-[16px] shrink-0 w-full" data-node-id="40002655:8277" data-name="m3-stats">
              <div className="bg-white content-stretch flex gap-[12px] items-center overflow-clip py-[4px] relative shrink-0" data-node-id="40002655:8278" data-name="row">
                <div className="bg-[rgba(38,99,235,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[24px]" data-node-id="40002655:8279" data-name="Frame">
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#2663eb] text-[12px] whitespace-nowrap" data-node-id="40002655:8280" style={{ fontVariationSettings: "'wdth' 100" }}>
                    📦
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[14px] whitespace-nowrap" data-node-id="40002655:8281" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Заказов сегодня
                </p>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6b7885] text-[13px] whitespace-nowrap" data-node-id="40002655:8282" style={{ fontVariationSettings: "'wdth' 100" }}>
                  47
                </p>
              </div>
              <div className="bg-white content-stretch flex gap-[12px] items-center overflow-clip py-[4px] relative shrink-0" data-node-id="40002655:8283" data-name="row">
                <div className="bg-[rgba(15,186,130,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[24px]" data-node-id="40002655:8284" data-name="Frame">
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#0fba82] text-[12px] whitespace-nowrap" data-node-id="40002655:8285" style={{ fontVariationSettings: "'wdth' 100" }}>
                    💰
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[14px] whitespace-nowrap" data-node-id="40002655:8286" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Выручка
                </p>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6b7885] text-[13px] whitespace-nowrap" data-node-id="40002655:8287" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {T.revenueAmount}
                </p>
              </div>
              <div className="bg-white content-stretch flex gap-[12px] items-center overflow-clip py-[4px] relative shrink-0" data-node-id="40002655:8288" data-name="row">
                <div className="bg-[rgba(140,92,245,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[24px]" data-node-id="40002655:8289" data-name="Frame">
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#8c5cf5] text-[12px] whitespace-nowrap" data-node-id="40002655:8290" style={{ fontVariationSettings: "'wdth' 100" }}>
                    👥
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[14px] whitespace-nowrap" data-node-id="40002655:8291" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Новых клиентов
                </p>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6b7885] text-[13px] whitespace-nowrap" data-node-id="40002655:8292" style={{ fontVariationSettings: "'wdth' 100" }}>
                  12
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[48px] relative shrink-0 w-[100px]" />
        <div className="content-stretch flex items-center justify-center relative shrink-0">
          <a href={CTA_HREF} target="_blank" rel="noopener" className="contents no-underline">
            <div className="bg-[#108ef5] content-stretch flex h-[52px] items-center justify-center overflow-clip px-[32px] relative rounded-[100px] shadow-[0px_20px_35px_0px_rgba(51,133,255,0.22)] shrink-0 cursor-pointer" data-name="btn-primary-l">
              <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.16px] whitespace-nowrap">
                Попробовать бесплатно
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col items-center overflow-clip p-[120px] relative shrink-0 w-[1440px]" data-node-id="40002524:8226" data-name="KeyFeatures">
        <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-[820px]" data-node-id="40002524:8227" data-name="section-head">
          <div className="bg-[rgba(16,142,245,0.08)] content-stretch flex items-start overflow-clip px-[12px] py-[6px] relative rounded-[100px] shrink-0" data-node-id="40002524:8228" data-name="kicker">
            <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#108ef5] text-[14px] tracking-[-0.14px] whitespace-nowrap" data-node-id="40002524:8229">
              Главные функции
            </p>
          </div>
          <div className="h-[16px] relative shrink-0 w-[100px]" data-node-id="40002524:8230" data-name="sp" />
          <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#0a1519] text-[44px] text-center tracking-[-1.1px] w-[820px]" data-node-id="40002524:8231">
            Не просто переписки — а система продаж
          </p>
        </div>
        <div className="h-[48px] relative shrink-0 w-[100px]" data-node-id="40002524:8232" data-name="sp" />
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1200px]" data-node-id="40002524:8233" data-name="kf-card">
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[560px]" data-node-id="40002524:8234" data-name="kf-text">
            <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.18] not-italic relative shrink-0 text-[#0a1519] text-[30px] tracking-[-0.75px] w-[560px]" data-node-id="40002524:8235">
              Статусы заявок — сразу видно, кому не ответили
            </p>
            <div className="h-[16px] relative shrink-0 w-[100px]" data-node-id="40002524:8236" data-name="sp" />
            <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.55] relative shrink-0 text-[#595959] text-[16px] tracking-[-0.16px] w-[560px]" data-node-id="40002524:8237" style={{ fontVariationSettings: "'wdth' 100" }}>
              Каждый чат имеет статус: «новый», «открыт» или «закрыт». Не нужно запоминать, кому уже ответили, а кому — нет.
            </p>
            <div className="h-[20px] relative shrink-0 w-[100px]" data-node-id="40002524:8238" data-name="sp" />
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0" data-node-id="40002524:8239" data-name="bullets">
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002524:8240" data-name="b">
                <div className="bg-[rgba(16,142,245,0.1)] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[20px]" data-node-id="40002524:8241" data-name="tick">
                  <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#108ef5] text-[11px] tracking-[-0.11px] whitespace-nowrap" data-node-id="40002524:8242">
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.45] not-italic relative shrink-0 text-[#0a1519] text-[15px] tracking-[-0.15px] w-[530px]" data-node-id="40002524:8243">
                  Новые заявки выделяются автоматически
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002524:8248" data-name="b">
                <div className="bg-[rgba(16,142,245,0.1)] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[20px]" data-node-id="40002524:8249" data-name="tick">
                  <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#108ef5] text-[11px] tracking-[-0.11px] whitespace-nowrap" data-node-id="40002524:8250">
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.45] not-italic relative shrink-0 text-[#0a1519] text-[15px] tracking-[-0.15px] w-[530px]" data-node-id="40002524:8251">
                  Отслеживайте, на какие чаты не ответили
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex gap-[12px] items-start overflow-clip p-[20px] relative rounded-[24px] shadow-[0px_16px_40px_0px_rgba(13,18,31,0.08)] shrink-0 w-[600px]" data-node-id="40002650:7859" data-name="kf-status-board">
            <div className="bg-[#f7fafc] content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip px-[14px] py-[16px] relative rounded-[16px]" data-node-id="40002650:7860" data-name="col-Новый">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="40002650:7861" data-name="Frame">
                <div className="bg-[rgba(38,99,235,0.12)] content-stretch flex items-start overflow-clip px-[10px] py-[4px] relative rounded-[10px] shrink-0" data-node-id="40002650:7862" data-name="Frame">
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#2663eb] text-[12px] whitespace-nowrap" data-node-id="40002650:7863" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Новый
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#6b7885] text-[12px] whitespace-nowrap" data-node-id="40002650:7864" style={{ fontVariationSettings: "'wdth' 100" }}>
                  3
                </p>
              </div>
              <div className="[word-break:break-word] bg-white border border-[#edf0f5] border-solid content-stretch flex flex-col gap-[6px] items-start leading-[normal] overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full whitespace-nowrap" data-node-id="40002650:7865" data-name="stat-card">
                <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-[#121726] text-[13px]" data-node-id="40002650:7866" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Юлия К.
                </p>
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7885] text-[12px]" data-node-id="40002650:7867" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Можно в рассрочку?
                </p>
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#99a6b2] text-[11px]" data-node-id="40002650:7868" style={{ fontVariationSettings: "'wdth' 100" }}>
                  только что
                </p>
              </div>
              <div className="[word-break:break-word] bg-white border border-[#edf0f5] border-solid content-stretch flex flex-col gap-[6px] items-start leading-[normal] overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full whitespace-nowrap" data-node-id="40002650:7869" data-name="stat-card">
                <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-[#121726] text-[13px]" data-node-id="40002650:7870" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Зухра М.
                </p>
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7885] text-[12px]" data-node-id="40002650:7871" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Когда появится S?
                </p>
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#99a6b2] text-[11px]" data-node-id="40002650:7872" style={{ fontVariationSettings: "'wdth' 100" }}>
                  1 мин назад
                </p>
              </div>
            </div>
            <div className="bg-[#f7fafc] content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip px-[14px] py-[16px] relative rounded-[16px]" data-node-id="40002650:7873" data-name="col-Открыт">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="40002650:7874" data-name="Frame">
                <div className="bg-[rgba(245,166,36,0.12)] content-stretch flex items-start overflow-clip px-[10px] py-[4px] relative rounded-[10px] shrink-0" data-node-id="40002650:7875" data-name="Frame">
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#f5a624] text-[12px] whitespace-nowrap" data-node-id="40002650:7876" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Открыт
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#6b7885] text-[12px] whitespace-nowrap" data-node-id="40002650:7877" style={{ fontVariationSettings: "'wdth' 100" }}>
                  12
                </p>
              </div>
              <div className="[word-break:break-word] bg-white border border-[#edf0f5] border-solid content-stretch flex flex-col gap-[6px] items-start leading-[normal] overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full whitespace-nowrap" data-node-id="40002650:7878" data-name="stat-card">
                <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-[#121726] text-[13px]" data-node-id="40002650:7879" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {HERO_CHAT_NAMES[4]}
                </p>
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7885] text-[12px]" data-node-id="40002650:7880" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Когда доставка?
                </p>
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#99a6b2] text-[11px]" data-node-id="40002650:7881" style={{ fontVariationSettings: "'wdth' 100" }}>
                  23 мин назад
                </p>
              </div>
              <div className="[word-break:break-word] bg-white border border-[#edf0f5] border-solid content-stretch flex flex-col gap-[6px] items-start leading-[normal] overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full whitespace-nowrap" data-node-id="40002650:7882" data-name="stat-card">
                <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-[#121726] text-[13px]" data-node-id="40002650:7883" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {HERO_CHAT_NAMES[2]}
                </p>
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7885] text-[12px]" data-node-id="40002650:7884" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Уточните адрес
                </p>
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#99a6b2] text-[11px]" data-node-id="40002650:7885" style={{ fontVariationSettings: "'wdth' 100" }}>
                  5 мин назад
                </p>
              </div>
            </div>
            <div className="bg-[#f7fafc] content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip px-[14px] py-[16px] relative rounded-[16px]" data-node-id="40002650:7886" data-name="col-Закрыт">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="40002650:7887" data-name="Frame">
                <div className="bg-[rgba(15,186,130,0.12)] content-stretch flex items-start overflow-clip px-[10px] py-[4px] relative rounded-[10px] shrink-0" data-node-id="40002650:7888" data-name="Frame">
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#0fba82] text-[12px] whitespace-nowrap" data-node-id="40002650:7889" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Закрыт
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#6b7885] text-[12px] whitespace-nowrap" data-node-id="40002650:7890" style={{ fontVariationSettings: "'wdth' 100" }}>
                  48
                </p>
              </div>
              <div className="[word-break:break-word] bg-white border border-[#edf0f5] border-solid content-stretch flex flex-col gap-[6px] items-start leading-[normal] overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full whitespace-nowrap" data-node-id="40002650:7891" data-name="stat-card">
                <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-[#121726] text-[13px]" data-node-id="40002650:7892" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {HERO_CHAT_NAMES[3]}
                </p>
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7885] text-[12px]" data-node-id="40002650:7893" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Получила 👍
                </p>
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#99a6b2] text-[11px]" data-node-id="40002650:7894" style={{ fontVariationSettings: "'wdth' 100" }}>
                  2 мин назад
                </p>
              </div>
              <div className="[word-break:break-word] bg-white border border-[#edf0f5] border-solid content-stretch flex flex-col gap-[6px] items-start leading-[normal] overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full whitespace-nowrap" data-node-id="40002650:7895" data-name="stat-card">
                <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-[#121726] text-[13px]" data-node-id="40002650:7896" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Малика О.
                </p>
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7885] text-[12px]" data-node-id="40002650:7897" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Спасибо!
                </p>
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#99a6b2] text-[11px]" data-node-id="40002650:7898" style={{ fontVariationSettings: "'wdth' 100" }}>
                  15 мин назад
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[80px] relative shrink-0 w-[100px]" data-node-id="40002524:8284" data-name="sp" />
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1200px]" data-node-id="40002524:8285" data-name="kf-card-rev">
          <div className="bg-white content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[20px] relative rounded-[24px] shadow-[0px_16px_40px_0px_rgba(13,18,31,0.08)] shrink-0 w-[600px]" data-node-id="40002651:8244" data-name="kf-segment-grid">
            <div className="bg-white content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="40002651:8245" data-name="row1">
              <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px overflow-clip p-[20px] relative rounded-[16px]" data-node-id="40002651:8247" data-name="seg-Бросили корзину">
                <div className="relative shrink-0 size-[10px]" data-node-id="40002651:8248" data-name="Ellipse">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} />
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#121726] text-[32px] whitespace-nowrap" data-node-id="40002651:8249" style={{ fontVariationSettings: "'wdth' 100" }}>
                  132
                </p>
                <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[14px] whitespace-nowrap" data-node-id="40002651:8250" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Бросили корзину
                </p>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#f5a624] text-[12px] whitespace-nowrap" data-node-id="40002651:8251" style={{ fontVariationSettings: "'wdth' 100" }}>
                  → написать: товар скоро закончится
                </p>
              </div>
              <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px overflow-clip p-[20px] relative rounded-[16px]" data-node-id="40002651:8252" data-name="seg-Не оплатили">
                <div className="relative shrink-0 size-[10px]" data-node-id="40002651:8253" data-name="Ellipse">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse2} />
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#121726] text-[32px] whitespace-nowrap" data-node-id="40002651:8254" style={{ fontVariationSettings: "'wdth' 100" }}>
                  87
                </p>
                <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[14px] whitespace-nowrap" data-node-id="40002651:8255" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Не оплатили
                </p>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2663eb] text-[12px] whitespace-nowrap" data-node-id="40002651:8256" style={{ fontVariationSettings: "'wdth' 100" }}>
                  → автоматическое напоминание
                </p>
              </div>
            </div>
            <div className="bg-white content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="40002651:8246" data-name="row2">
              <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px overflow-clip p-[20px] relative rounded-[16px]" data-node-id="40002651:8257" data-name="seg-Купили недавно">
                <div className="relative shrink-0 size-[10px]" data-node-id="40002651:8258" data-name="Ellipse">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse3} />
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#121726] text-[32px] whitespace-nowrap" data-node-id="40002651:8259" style={{ fontVariationSettings: "'wdth' 100" }}>
                  219
                </p>
                <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[14px] whitespace-nowrap" data-node-id="40002651:8260" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Купили недавно
                </p>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#0fba82] text-[12px] whitespace-nowrap" data-node-id="40002651:8261" style={{ fontVariationSettings: "'wdth' 100" }}>
                  → предложить новинки
                </p>
              </div>
              <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px overflow-clip p-[20px] relative rounded-[16px]" data-node-id="40002651:8262" data-name="seg-Не активны 30 дней">
                <div className="relative shrink-0 size-[10px]" data-node-id="40002651:8263" data-name="Ellipse">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse4} />
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#121726] text-[32px] whitespace-nowrap" data-node-id="40002651:8264" style={{ fontVariationSettings: "'wdth' 100" }}>
                  1 247
                </p>
                <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[14px] whitespace-nowrap" data-node-id="40002651:8265" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Не активны 30 дней
                </p>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8c5cf5] text-[12px] whitespace-nowrap" data-node-id="40002651:8266" style={{ fontVariationSettings: "'wdth' 100" }}>
                  → вернуть промокодом
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[560px]" data-node-id="40002524:8313" data-name="kf-text-2">
            <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.18] not-italic relative shrink-0 text-[#0a1519] text-[30px] tracking-[-0.75px] w-[560px]" data-node-id="40002524:8314">
              Рассылки по готовым сегментам — возвращайте клиентов
            </p>
            <div className="h-[16px] relative shrink-0 w-[100px]" data-node-id="40002524:8315" data-name="sp" />
            <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#595959] text-[16px] tracking-[-0.16px] w-[560px]" data-node-id="40002524:8316">
              Сегменты собираются автоматически — на основе поведения клиента. Отправьте сообщение тем, кто бросил корзину, кто давно не покупал или только что оформил заказ.
            </p>
            <div className="h-[20px] relative shrink-0 w-[100px]" data-node-id="40002524:8317" data-name="sp" />
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0" data-node-id="40002524:8318" data-name="bullets2">
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002524:8319" data-name="b">
                <div className="bg-[rgba(16,142,245,0.1)] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[20px]" data-node-id="40002524:8320" data-name="tick">
                  <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#108ef5] text-[11px] tracking-[-0.11px] whitespace-nowrap" data-node-id="40002524:8321">
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.45] not-italic relative shrink-0 text-[#0a1519] text-[15px] tracking-[-0.15px] w-[530px]" data-node-id="40002524:8322">
                  Бросил корзину — догнать персональным сообщением
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002524:8323" data-name="b">
                <div className="bg-[rgba(16,142,245,0.1)] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[20px]" data-node-id="40002524:8324" data-name="tick">
                  <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#108ef5] text-[11px] tracking-[-0.11px] whitespace-nowrap" data-node-id="40002524:8325">
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.45] not-italic relative shrink-0 text-[#0a1519] text-[15px] tracking-[-0.15px] w-[530px]" data-node-id="40002524:8326">
                  Не оплатил — бот автоматически напомнит
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002524:8327" data-name="b">
                <div className="bg-[rgba(16,142,245,0.1)] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[20px]" data-node-id="40002524:8328" data-name="tick">
                  <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#108ef5] text-[11px] tracking-[-0.11px] whitespace-nowrap" data-node-id="40002524:8329">
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.45] not-italic relative shrink-0 text-[#0a1519] text-[15px] tracking-[-0.15px] w-[530px]" data-node-id="40002524:8330">
                  Купил недавно — предложить дополнение
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002524:8331" data-name="b">
                <div className="bg-[rgba(16,142,245,0.1)] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[20px]" data-node-id="40002524:8332" data-name="tick">
                  <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#108ef5] text-[11px] tracking-[-0.11px] whitespace-nowrap" data-node-id="40002524:8333">
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.45] not-italic relative shrink-0 text-[#0a1519] text-[15px] tracking-[-0.15px] w-[530px]" data-node-id="40002524:8334">
                  Не активен 7 / 30 дней — вернуть промокодом
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f6f7f9] content-stretch flex flex-col items-center overflow-clip px-[120px] py-[63px] relative shrink-0 w-[1440px]" data-node-id="40002524:8202" data-name="Solution">
        <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-[820px]" data-node-id="40002524:8203" data-name="section-head">
          <div className="h-[16px] relative shrink-0 w-[100px]" data-node-id="40002524:8206" data-name="sp" />
          <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#0a1519] text-[44px] text-center tracking-[-1.1px] w-[820px]" data-node-id="40002524:8207" style={{ fontVariationSettings: "'wdth' 100" }}>
            Готовые интеграции без разработки
          </p>
        </div>
        <div className="h-[48px] relative shrink-0 w-[100px]" data-node-id="40002524:8208" data-name="sp" />
        <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[1200px]" data-node-id="40002524:8209" data-name="sol-grid">
          <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="40002781:8485" data-name="sr0">
            <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip p-[32px] relative rounded-[20px] shadow-[0px_8px_24px_0px_rgba(13,18,31,0.06)]" data-node-id="40002781:8487" data-name="sol-card-1">
              <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#121726] text-[22px] w-full" data-node-id="40002781:8488" style={{ fontVariationSettings: "'wdth' 100" }}>
                1. Добавьте товары
              </p>
              <div className="bg-white content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="40002781:8489" data-name="Frame">
                <div className="bg-white content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-node-id="40002781:8490" data-name="Frame">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-node-id="40002781:8491" data-name="Frame">
                    <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f8c33] text-[12px] whitespace-nowrap" data-node-id="40002781:8492" style={{ fontVariationSettings: "'wdth' 100" }}>
                      ✓
                    </p>
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#121726] text-[15px]" data-node-id="40002781:8493" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Массовый импорт из XML/XLS и по ссылке
                  </p>
                </div>
                <div className="bg-white content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-node-id="40002781:8494" data-name="Frame">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-node-id="40002781:8495" data-name="Frame">
                    <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f8c33] text-[12px] whitespace-nowrap" data-node-id="40002781:8496" style={{ fontVariationSettings: "'wdth' 100" }}>
                      ✓
                    </p>
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#121726] text-[15px]" data-node-id="40002781:8497" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {T.importLineWithChips}
                  </p>
                </div>
                <div className="bg-white content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-node-id="40002781:8498" data-name="Frame">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-node-id="40002781:8499" data-name="Frame">
                    <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f8c33] text-[12px] whitespace-nowrap" data-node-id="40002781:8500" style={{ fontVariationSettings: "'wdth' 100" }}>
                      ✓
                    </p>
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#121726] text-[15px]" data-node-id="40002781:8501" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Добавление товаров вручную
                  </p>
                </div>
                <div className="bg-white content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-node-id="40002781:8502" data-name="Frame">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-node-id="40002781:8503" data-name="Frame">
                    <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f8c33] text-[12px] whitespace-nowrap" data-node-id="40002781:8504" style={{ fontVariationSettings: "'wdth' 100" }}>
                      ✓
                    </p>
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#121726] text-[15px]" data-node-id="40002781:8505" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Автоматическое обновление цен и остатков
                  </p>
                </div>
              </div>
              <div className="bg-white content-start flex flex-wrap gap-[8px] items-start overflow-clip pt-[12px] relative shrink-0 w-full" data-node-id="40002781:8506" data-name="Frame">
                <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[10px] py-[6px] relative rounded-[8px] shadow-[0px_2px_6px_0px_rgba(13,18,31,0.06)] shrink-0" data-node-id="40002781:8507" data-name="Frame">
                  <div className="relative shrink-0 size-[8px]" data-node-id="40002781:8508" data-name="Ellipse">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse5} />
                  </div>
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[11px] whitespace-nowrap" data-node-id="40002781:8509" style={{ fontVariationSettings: "'wdth' 100" }}>
                    МойСклад
                  </p>
                </div>
                <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[10px] py-[6px] relative rounded-[8px] shadow-[0px_2px_6px_0px_rgba(13,18,31,0.06)] shrink-0" data-node-id="40002781:8510" data-name="Frame">
                  <div className="relative shrink-0 size-[8px]" data-node-id="40002781:8511" data-name="Ellipse">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse6} />
                  </div>
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[11px] whitespace-nowrap" data-node-id="40002781:8512" style={{ fontVariationSettings: "'wdth' 100" }}>
                    1С
                  </p>
                </div>
                <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[10px] py-[6px] relative rounded-[8px] shadow-[0px_2px_6px_0px_rgba(13,18,31,0.06)] shrink-0" data-node-id="40002781:8513" data-name="Frame">
                  <div className="relative shrink-0 size-[8px]" data-node-id="40002781:8514" data-name="Ellipse">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse7} />
                  </div>
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[11px] whitespace-nowrap" data-node-id="40002781:8515" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {T.importChip3}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip p-[32px] relative rounded-[20px] shadow-[0px_8px_24px_0px_rgba(13,18,31,0.06)]" data-node-id="40002781:8516" data-name="sol-card-2">
              <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#121726] text-[22px] w-full" data-node-id="40002781:8517" style={{ fontVariationSettings: "'wdth' 100" }}>
                2. Включите оплату и доставку
              </p>
              <div className="bg-white content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="40002781:8518" data-name="Frame">
                <div className="bg-white content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-node-id="40002781:8519" data-name="Frame">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-node-id="40002781:8520" data-name="Frame">
                    <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f8c33] text-[12px] whitespace-nowrap" data-node-id="40002781:8521" style={{ fontVariationSettings: "'wdth' 100" }}>
                      ✓
                    </p>
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#121726] text-[15px]" data-node-id="40002781:8522" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Курьерская доставка и самовывоз
                  </p>
                </div>
                <div className="bg-white content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-node-id="40002781:8523" data-name="Frame">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-node-id="40002781:8524" data-name="Frame">
                    <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f8c33] text-[12px] whitespace-nowrap" data-node-id="40002781:8525" style={{ fontVariationSettings: "'wdth' 100" }}>
                      ✓
                    </p>
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#121726] text-[15px]" data-node-id="40002781:8526" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Онлайн-оплата в 1 клик
                  </p>
                </div>
                <div className="bg-white content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-node-id="40002781:8527" data-name="Frame">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-node-id="40002781:8528" data-name="Frame">
                    <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f8c33] text-[12px] whitespace-nowrap" data-node-id="40002781:8529" style={{ fontVariationSettings: "'wdth' 100" }}>
                      ✓
                    </p>
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#121726] text-[15px]" data-node-id="40002781:8530" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Рассрочка
                  </p>
                </div>
                <div className="bg-white content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-node-id="40002781:8531" data-name="Frame">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-node-id="40002781:8532" data-name="Frame">
                    <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f8c33] text-[12px] whitespace-nowrap" data-node-id="40002781:8533" style={{ fontVariationSettings: "'wdth' 100" }}>
                      ✓
                    </p>
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#121726] text-[15px]" data-node-id="40002781:8534" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Чеки
                  </p>
                </div>
                <div className="bg-white content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-node-id="40002781:8535" data-name="Frame">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-node-id="40002781:8536" data-name="Frame">
                    <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f8c33] text-[12px] whitespace-nowrap" data-node-id="40002781:8537" style={{ fontVariationSettings: "'wdth' 100" }}>
                      ✓
                    </p>
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#121726] text-[15px]" data-node-id="40002781:8538" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Оплата наличными
                  </p>
                </div>
              </div>
              <div className="bg-white content-start flex flex-wrap gap-[8px] items-start overflow-clip pt-[12px] relative shrink-0 w-full" data-node-id="40002781:8539" data-name="Frame">
                <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[10px] py-[6px] relative rounded-[8px] shadow-[0px_2px_6px_0px_rgba(13,18,31,0.06)] shrink-0" data-node-id="40002781:8540" data-name="Frame">
                  <div className="relative shrink-0 size-[8px]" data-node-id="40002781:8541" data-name="Ellipse">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse6} />
                  </div>
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[11px] whitespace-nowrap" data-node-id="40002781:8542" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {T.paymentChip1}
                  </p>
                </div>
                <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[10px] py-[6px] relative rounded-[8px] shadow-[0px_2px_6px_0px_rgba(13,18,31,0.06)] shrink-0" data-node-id="40002781:8543" data-name="Frame">
                  <div className="relative shrink-0 size-[8px]" data-node-id="40002781:8544" data-name="Ellipse">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse7} />
                  </div>
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[11px] whitespace-nowrap" data-node-id="40002781:8545" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {T.paymentChip2}
                  </p>
                </div>
                <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[10px] py-[6px] relative rounded-[8px] shadow-[0px_2px_6px_0px_rgba(13,18,31,0.06)] shrink-0" data-node-id="40002781:8546" data-name="Frame">
                  <div className="relative shrink-0 size-[8px]" data-node-id="40002781:8547" data-name="Ellipse">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse8} />
                  </div>
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[11px] whitespace-nowrap" data-node-id="40002781:8548" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {T.paymentChip3}
                  </p>
                </div>
                <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[10px] py-[6px] relative rounded-[8px] shadow-[0px_2px_6px_0px_rgba(13,18,31,0.06)] shrink-0" data-node-id="40002781:8549" data-name="Frame">
                  <div className="relative shrink-0 size-[8px]" data-node-id="40002781:8550" data-name="Ellipse">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse9} />
                  </div>
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[11px] whitespace-nowrap" data-node-id="40002781:8551" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {T.paymentChip4}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="40002781:8486" data-name="sr1">
            <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip p-[32px] relative rounded-[20px] shadow-[0px_8px_24px_0px_rgba(13,18,31,0.06)]" data-node-id="40002781:8552" data-name="sol-card-3">
              <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#121726] text-[22px] w-full" data-node-id="40002781:8553" style={{ fontVariationSettings: "'wdth' 100" }}>
                3. Привлекайте клиентов эффективно
              </p>
              <div className="bg-white content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="40002781:8554" data-name="Frame">
                <div className="bg-white content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-node-id="40002781:8555" data-name="Frame">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-node-id="40002781:8556" data-name="Frame">
                    <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f8c33] text-[12px] whitespace-nowrap" data-node-id="40002781:8557" style={{ fontVariationSettings: "'wdth' 100" }}>
                      ✓
                    </p>
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#121726] text-[15px]" data-node-id="40002781:8558" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Промокоды
                  </p>
                </div>
                <div className="bg-white content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-node-id="40002781:8559" data-name="Frame">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-node-id="40002781:8560" data-name="Frame">
                    <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f8c33] text-[12px] whitespace-nowrap" data-node-id="40002781:8561" style={{ fontVariationSettings: "'wdth' 100" }}>
                      ✓
                    </p>
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#121726] text-[15px]" data-node-id="40002781:8562" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Закрепите магазин в канале
                  </p>
                </div>
                <div className="bg-white content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-node-id="40002781:8563" data-name="Frame">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-node-id="40002781:8564" data-name="Frame">
                    <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f8c33] text-[12px] whitespace-nowrap" data-node-id="40002781:8565" style={{ fontVariationSettings: "'wdth' 100" }}>
                      ✓
                    </p>
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#121726] text-[15px]" data-node-id="40002781:8566" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Интеграция с Яндекс Метрикой
                  </p>
                </div>
                <div className="bg-white content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-node-id="40002781:8567" data-name="Frame">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-node-id="40002781:8568" data-name="Frame">
                    <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f8c33] text-[12px] whitespace-nowrap" data-node-id="40002781:8569" style={{ fontVariationSettings: "'wdth' 100" }}>
                      ✓
                    </p>
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#121726] text-[15px]" data-node-id="40002781:8570" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Рассылки и триггерные уведомления
                  </p>
                </div>
                <div className="bg-white content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-node-id="40002781:8571" data-name="Frame">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-node-id="40002781:8572" data-name="Frame">
                    <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f8c33] text-[12px] whitespace-nowrap" data-node-id="40002781:8573" style={{ fontVariationSettings: "'wdth' 100" }}>
                      ✓
                    </p>
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#121726] text-[15px]" data-node-id="40002781:8574" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Реферальная программа — клиенты приводят друзей
                  </p>
                </div>
              </div>
              <div className="bg-white content-start flex flex-wrap gap-[8px] items-start overflow-clip pt-[12px] relative shrink-0 w-full" data-node-id="40002781:8575" data-name="Frame">
                <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[10px] py-[6px] relative rounded-[8px] shadow-[0px_2px_6px_0px_rgba(13,18,31,0.06)] shrink-0" data-node-id="40002781:8576" data-name="Frame">
                  <div className="relative shrink-0 size-[8px]" data-node-id="40002781:8577" data-name="Ellipse">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse10} />
                  </div>
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[11px] whitespace-nowrap" data-node-id="40002781:8578" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Я.Метрика
                  </p>
                </div>
                <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[10px] py-[6px] relative rounded-[8px] shadow-[0px_2px_6px_0px_rgba(13,18,31,0.06)] shrink-0" data-node-id="40002781:8579" data-name="Frame">
                  <div className="relative shrink-0 size-[8px]" data-node-id="40002781:8580" data-name="Ellipse">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse5} />
                  </div>
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[11px] whitespace-nowrap" data-node-id="40002781:8581" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Telegram Ads
                  </p>
                </div>
                <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[10px] py-[6px] relative rounded-[8px] shadow-[0px_2px_6px_0px_rgba(13,18,31,0.06)] shrink-0" data-node-id="40002781:8582" data-name="Frame">
                  <div className="relative shrink-0 size-[8px]" data-node-id="40002781:8583" data-name="Ellipse">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse11} />
                  </div>
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[11px] whitespace-nowrap" data-node-id="40002781:8584" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Я.Директ
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip p-[32px] relative rounded-[20px] shadow-[0px_8px_24px_0px_rgba(13,18,31,0.06)]" data-node-id="40002781:8585" data-name="sol-card-4">
              <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#121726] text-[22px] w-full" data-node-id="40002781:8586" style={{ fontVariationSettings: "'wdth' 100" }}>
                4. Управляйте заказами
              </p>
              <div className="bg-white content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="40002781:8587" data-name="Frame">
                <div className="bg-white content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-node-id="40002781:8588" data-name="Frame">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-node-id="40002781:8589" data-name="Frame">
                    <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f8c33] text-[12px] whitespace-nowrap" data-node-id="40002781:8590" style={{ fontVariationSettings: "'wdth' 100" }}>
                      ✓
                    </p>
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#121726] text-[15px]" data-node-id="40002781:8591" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Интеграции с AmoCRM, Битрикс24
                  </p>
                </div>
                <div className="bg-white content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-node-id="40002781:8592" data-name="Frame">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-node-id="40002781:8593" data-name="Frame">
                    <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f8c33] text-[12px] whitespace-nowrap" data-node-id="40002781:8594" style={{ fontVariationSettings: "'wdth' 100" }}>
                      ✓
                    </p>
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#121726] text-[15px]" data-node-id="40002781:8595" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Уведомления о заказах в Telegram
                  </p>
                </div>
                <div className="bg-white content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-node-id="40002758:2878" data-name="Frame">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-node-id="40002758:2879" data-name="Frame">
                    <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f8c33] text-[12px] whitespace-nowrap" data-node-id="40002758:2880" style={{ fontVariationSettings: "'wdth' 100" }}>
                      ✓
                    </p>
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#121726] text-[15px]" data-node-id="40002758:2881" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Все диалоги с клиентами со статусами — в Telegram-боте
                  </p>
                </div>
              </div>
              <div className="bg-white content-start flex flex-wrap gap-[8px] items-start overflow-clip pt-[12px] relative shrink-0 w-full" data-node-id="40002781:8596" data-name="Frame">
                <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[10px] py-[6px] relative rounded-[8px] shadow-[0px_2px_6px_0px_rgba(13,18,31,0.06)] shrink-0" data-node-id="40002781:8597" data-name="Frame">
                  <div className="relative shrink-0 size-[8px]" data-node-id="40002781:8598" data-name="Ellipse">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse12} />
                  </div>
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[11px] whitespace-nowrap" data-node-id="40002781:8599" style={{ fontVariationSettings: "'wdth' 100" }}>
                    amoCRM
                  </p>
                </div>
                <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[10px] py-[6px] relative rounded-[8px] shadow-[0px_2px_6px_0px_rgba(13,18,31,0.06)] shrink-0" data-node-id="40002781:8600" data-name="Frame">
                  <div className="relative shrink-0 size-[8px]" data-node-id="40002781:8601" data-name="Ellipse">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse5} />
                  </div>
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[11px] whitespace-nowrap" data-node-id="40002781:8602" style={{ fontVariationSettings: "'wdth' 100" }}>
                    МойСклад
                  </p>
                </div>
                <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[10px] py-[6px] relative rounded-[8px] shadow-[0px_2px_6px_0px_rgba(13,18,31,0.06)] shrink-0" data-node-id="40002781:8603" data-name="Frame">
                  <div className="relative shrink-0 size-[8px]" data-node-id="40002781:8604" data-name="Ellipse">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse6} />
                  </div>
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[11px] whitespace-nowrap" data-node-id="40002781:8605" style={{ fontVariationSettings: "'wdth' 100" }}>
                    1С
                  </p>
                </div>
                <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[10px] py-[6px] relative rounded-[8px] shadow-[0px_2px_6px_0px_rgba(13,18,31,0.06)] shrink-0" data-node-id="40002781:8606" data-name="Frame">
                  <div className="relative shrink-0 size-[8px]" data-node-id="40002781:8607" data-name="Ellipse">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse7} />
                  </div>
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[11px] whitespace-nowrap" data-node-id="40002781:8608" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Битрикс24
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f6f7f9] content-stretch flex flex-col items-center overflow-clip px-[120px] py-[90px] relative shrink-0 w-[1440px]" data-node-id="40002524:8481" data-name="Pricing">
        <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-[820px]" data-node-id="40002524:8482" data-name="section-head">
          <div className="bg-[rgba(16,142,245,0.08)] content-stretch flex items-start overflow-clip px-[12px] py-[6px] relative rounded-[100px] shrink-0" data-node-id="40002524:8483" data-name="kicker">
            </div>
          <div className="h-[16px] relative shrink-0 w-[100px]" data-node-id="40002524:8485" data-name="sp" />
          <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#0a1519] text-[44px] text-center tracking-[-1.1px] w-[820px]" data-node-id="40002524:8486">
            TGShop Chat включён во все тарифы TGShop
          </p>
        </div>
        <div className="h-[16px] relative shrink-0 w-[100px]" data-node-id="40002524:8487" data-name="sp" />
        <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#595959] text-[16px] text-center tracking-[-0.16px] w-[620px] whitespace-pre-wrap" data-node-id="40002524:8488">{`Один тариф — магазин, диалоги со статусами, интеграции. Без скрытых доплат.`}</p>
        <div className="h-[40px] relative shrink-0 w-[100px]" data-node-id="40002524:8489" data-name="sp" />
        <div className="bg-white border border-[rgba(230,232,236,0.6)] border-solid content-stretch flex items-start p-[4px] relative rounded-[100px] shrink-0" data-node-id="40002524:8490" data-name="bt">
          <button type="button" onClick={() => setPeriod('month')} className={`content-stretch flex items-center overflow-clip px-[22px] py-[10px] relative rounded-[100px] shrink-0 cursor-pointer border-0 ${!isYear ? 'bg-[#108ef5] shadow-[0px_4px_12px_0px_rgba(51,133,255,0.25)]' : 'bg-transparent'}`} data-node-id="40002524:8491" data-name="opt">
            <p className={`[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] tracking-[-0.14px] whitespace-nowrap ${!isYear ? 'text-white' : 'text-[#595959]'}`} data-node-id="40002524:8492">
              Помесячно
            </p>
          </button>
          <button type="button" onClick={() => setPeriod('year')} className={`content-stretch flex items-center overflow-clip px-[22px] py-[10px] relative rounded-[100px] shrink-0 cursor-pointer border-0 ${isYear ? 'bg-[#108ef5] shadow-[0px_4px_12px_0px_rgba(51,133,255,0.25)]' : 'bg-transparent'}`} data-node-id="40002524:8493" data-name="opt">
            <p className={`[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] tracking-[-0.14px] whitespace-nowrap ${isYear ? 'text-white' : 'text-[#595959]'}`} data-node-id="40002524:8494">
              За год · −20%
            </p>
          </button>
        </div>
        <div className="h-[48px] relative shrink-0 w-[100px]" data-node-id="40002524:8495" data-name="sp" />
        <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-node-id="40002524:8496" data-name="pricing-grid">
          <div className="bg-white border border-[rgba(230,232,236,0.5)] border-solid content-stretch flex flex-col items-start overflow-clip pb-[32px] pt-[36px] px-[28px] relative rounded-[24px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.04)] shrink-0 w-[386.667px]" data-node-id="40002524:8497" data-name="price-card">
            <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#595959] text-[18px] tracking-[-0.18px] whitespace-nowrap" data-node-id="40002524:8498">
              Старт
            </p>
            <div className="h-[12px] relative shrink-0 w-[100px]" data-node-id="40002524:8499" data-name="sp" />
            <div className="[word-break:break-word] content-stretch flex gap-[6px] items-baseline leading-[1.5] overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="40002524:8500" data-name="pr">
              <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0 text-[#0a1519] text-[40px] tracking-[-1.2px]" data-node-id="40002524:8501" style={{ fontVariationSettings: "'wdth' 100" }}>
                {isYear ? T.priceStarterYear : T.priceStarterMonth}
              </p>
            </div>
            <div className="h-[6px] relative shrink-0 w-[100px]" data-node-id="40002524:8503" data-name="sp" />
            <p className={`[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#767d88] text-[13px] tracking-[-0.13px] whitespace-nowrap ${isYear ? 'line-through' : ''}`} data-node-id="40002524:8504" style={{ fontVariationSettings: "'wdth' 100" }}>
              {isYear ? T.priceStarterMonth : '−20% при оплате за год'}
            </p>
            <div className="h-[16px] relative shrink-0 w-[100px]" data-node-id="40002524:8505" data-name="sp" />
            <div className="bg-[rgba(16,142,245,0.08)] content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-node-id="40002524:8506" data-name="lim">
              <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[#108ef5] text-[13px] tracking-[-0.13px] whitespace-nowrap" data-node-id="40002524:8507" style={{ fontVariationSettings: "'wdth' 100" }}>
                До 100 товаров · 1 активный магазин
              </p>
            </div>
            <div className="h-[20px] relative shrink-0 w-[100px]" data-node-id="40002524:8508" data-name="sp" />
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0" data-node-id="40002524:8509" data-name="ls">
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8485" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8486" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8487" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8488" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Диалоги с клиентами
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8489" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8490" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8491" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8492" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Витрина для маркетплейсов
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8493" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8494" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8495" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8496" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Каталог и товары
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8497" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8498" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8499" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8500" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Прием платежей
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8501" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8502" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8503" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8504" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Интеграция со службами доставки
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8505" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8506" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8507" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8508" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Интеграция с CRM
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8509" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8510" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8511" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8512" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Доступ к аналитике
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8513" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8514" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8515" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8516" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Импорт товаров из XLS/XML
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8517" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8518" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8519" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8520" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Рассылки
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8521" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8522" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8523" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8524" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Промокоды
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8525" data-name="li">
                <div className="bg-[#fad9d9] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8526" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#f04545] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8527" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✕
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#73808c] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8528" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Интеграция с МойСклад / 1С
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8529" data-name="li">
                <div className="bg-[#fad9d9] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8530" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#f04545] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8531" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✕
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#73808c] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8532" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Периодический импорт по ссылке
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8533" data-name="li">
                <div className="bg-[#fad9d9] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8534" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#f04545] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8535" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✕
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#73808c] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8536" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Нет возможности отключить «Сделано при помощи TGShop»
                </p>
              </div>
            </div>
            <div className="h-[24px] relative shrink-0 w-[100px]" data-node-id="40002524:8546" data-name="sp" />
            <a href={CTA_HREF} target="_blank" rel="noopener" className="contents no-underline">
              <div className="border-[1.5px] border-[rgba(16,142,245,0.3)] border-solid content-stretch flex h-[48px] items-center justify-center overflow-clip px-[32px] relative rounded-[100px] shrink-0 w-full cursor-pointer" data-node-id="40002524:8547" data-name="btn">
                <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#108ef5] text-[15px] tracking-[-0.15px] whitespace-nowrap" data-node-id="40002524:8548">
                  Начать бесплатно
                </p>
              </div>
            </a>
          </div>
          <div className="bg-white border-2 border-[#108ef5] border-solid content-stretch drop-shadow-[0px_12px_20px_rgba(51,133,255,0.15)] flex flex-col items-start pb-[32px] pt-[36px] px-[28px] relative rounded-[24px] shrink-0 w-[386.667px]" data-node-id="40002524:8549" data-name="price-card">
            <div className="bg-[#108ef5] content-stretch flex items-center justify-center overflow-clip px-[14px] py-[6px] relative rounded-[100px] shrink-0" data-node-id="40002524:8550" data-name="tag">
              <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.12px] whitespace-nowrap" data-node-id="40002524:8551">
                ⚡ Популярный
              </p>
            </div>
            <div className="h-[16px] relative shrink-0 w-[100px]" data-node-id="40002524:8552" data-name="sp" />
            <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#595959] text-[18px] tracking-[-0.18px] whitespace-nowrap" data-node-id="40002524:8553">
              Бизнес
            </p>
            <div className="h-[12px] relative shrink-0 w-[100px]" data-node-id="40002524:8554" data-name="sp" />
            <div className="[word-break:break-word] content-stretch flex gap-[6px] items-baseline leading-[1.5] overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="40002524:8555" data-name="pr">
              <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0 text-[#0a1519] text-[40px] tracking-[-1.2px]" data-node-id="40002524:8556" style={{ fontVariationSettings: "'wdth' 100" }}>
                {isYear ? T.priceBusinessYear : T.priceBusinessMonth}
              </p>
            </div>
            <div className="h-[6px] relative shrink-0 w-[100px]" data-node-id="40002524:8558" data-name="sp" />
            <p className={`[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#767d88] text-[13px] tracking-[-0.13px] whitespace-nowrap ${isYear ? 'line-through' : ''}`} data-node-id="40002524:8559" style={{ fontVariationSettings: "'wdth' 100" }}>
              {isYear ? T.priceBusinessMonth : '−20% при оплате за год'}
            </p>
            <div className="h-[16px] relative shrink-0 w-[100px]" data-node-id="40002524:8560" data-name="sp" />
            <div className="bg-[rgba(16,142,245,0.08)] content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-node-id="40002524:8561" data-name="lim">
              <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[#108ef5] text-[13px] tracking-[-0.13px] whitespace-nowrap" data-node-id="40002524:8562" style={{ fontVariationSettings: "'wdth' 100" }}>
                До 1000 товаров · до 5 активных магазинов
              </p>
            </div>
            <div className="h-[20px] relative shrink-0 w-[100px]" data-node-id="40002524:8563" data-name="sp" />
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0" data-node-id="40002524:8564" data-name="ls">
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8537" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8538" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8539" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8540" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Диалоги с клиентами
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8541" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8542" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8543" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8544" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Витрина для маркетплейсов
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8545" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8546" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8547" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8548" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Каталог и товары
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8549" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8550" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8551" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8552" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Прием платежей
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8553" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8554" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8555" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8556" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Интеграция со службами доставки
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8557" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8558" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8559" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8560" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Интеграция с CRM
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8561" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8562" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8563" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8564" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Доступ к аналитике
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8565" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8566" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8567" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8568" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Импорт товаров из XLS/XML
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8569" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8570" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8571" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8572" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Рассылки
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8573" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8574" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8575" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8576" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Промокоды
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8577" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8578" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8579" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8580" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Отсутствует реклама сервиса
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8581" data-name="li">
                <div className="bg-[#fad9d9] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8582" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#f04545] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8583" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✕
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#73808c] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8584" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Интеграция с МойСклад / 1С
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8585" data-name="li">
                <div className="bg-[#fad9d9] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8586" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#f04545] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8587" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✕
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#73808c] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8588" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Периодический импорт по ссылке
                </p>
              </div>
            </div>
            <div className="h-[24px] relative shrink-0 w-[100px]" data-node-id="40002524:8581" data-name="sp" />
            <a href={CTA_HREF} target="_blank" rel="noopener" className="contents no-underline">
              <div className="bg-[#108ef5] content-stretch flex h-[48px] items-center justify-center overflow-clip px-[32px] relative rounded-[100px] shadow-[0px_12px_24px_0px_rgba(51,133,255,0.25)] shrink-0 w-full cursor-pointer" data-node-id="40002524:8582" data-name="btn">
                <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.15px] whitespace-nowrap" data-node-id="40002524:8583">
                  Начать бесплатно
                </p>
              </div>
            </a>
          </div>
          <div className="bg-white border border-[rgba(230,232,236,0.5)] border-solid content-stretch flex flex-col items-start overflow-clip pb-[32px] pt-[36px] px-[28px] relative rounded-[24px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.04)] shrink-0 w-[386.667px]" data-node-id="40002524:8584" data-name="price-card">
            <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#595959] text-[18px] tracking-[-0.18px] whitespace-nowrap" data-node-id="40002524:8585">
              Премиум
            </p>
            <div className="h-[12px] relative shrink-0 w-[100px]" data-node-id="40002524:8586" data-name="sp" />
            <div className="[word-break:break-word] content-stretch flex gap-[6px] items-baseline leading-[1.5] overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="40002524:8587" data-name="pr">
              <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0 text-[#0a1519] text-[40px] tracking-[-1.2px]" data-node-id="40002524:8588" style={{ fontVariationSettings: "'wdth' 100" }}>
                {isYear ? T.priceProYear : T.priceProMonth}
              </p>
            </div>
            <div className="h-[6px] relative shrink-0 w-[100px]" data-node-id="40002524:8590" data-name="sp" />
            <p className={`[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#767d88] text-[13px] tracking-[-0.13px] whitespace-nowrap ${isYear ? 'line-through' : ''}`} data-node-id="40002524:8591" style={{ fontVariationSettings: "'wdth' 100" }}>
              {isYear ? T.priceProMonth : '−20% при оплате за год'}
            </p>
            <div className="h-[16px] relative shrink-0 w-[100px]" data-node-id="40002524:8592" data-name="sp" />
            <div className="bg-[rgba(16,142,245,0.08)] content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-node-id="40002524:8593" data-name="lim">
              <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[#108ef5] text-[13px] tracking-[-0.13px] whitespace-nowrap" data-node-id="40002524:8594" style={{ fontVariationSettings: "'wdth' 100" }}>
                До 15000 товаров · до 10 активных магазинов
              </p>
            </div>
            <div className="h-[20px] relative shrink-0 w-[100px]" data-node-id="40002524:8595" data-name="sp" />
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0" data-node-id="40002524:8596" data-name="ls">
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8589" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8590" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8591" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8592" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Диалоги с клиентами
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8593" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8594" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8595" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8596" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Витрина для маркетплейсов
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8597" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8598" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8599" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8600" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Каталог и товары
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8601" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8602" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8603" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8604" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Прием платежей
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8605" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8606" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8607" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8608" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Интеграция со службами доставки
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8609" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8610" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8611" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8612" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Интеграция с CRM
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8613" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8614" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8615" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8616" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Доступ к аналитике
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8617" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8618" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8619" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8620" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Импорт товаров из XLS/XML
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8621" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8622" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8623" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8624" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Рассылки
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8625" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8626" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8627" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8628" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Промокоды
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8629" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8630" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8631" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8632" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Интеграция с МойСклад / 1С
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8633" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8634" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8635" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8636" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Периодический импорт по ссылке
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8637" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8638" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8639" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8640" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Отсутствует реклама сервиса
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="40002734:8641" data-name="li">
                <div className="bg-[rgba(33,178,99,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-node-id="40002734:8642" data-name="tk">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0f8c33] text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002734:8643" style={{ fontVariationSettings: "'wdth' 100" }}>
                    ✓
                  </p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#121726] text-[14px] tracking-[-0.14px] w-[306.667px]" data-node-id="40002734:8644" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Приоритетная поддержка
                </p>
              </div>
            </div>
            <div className="h-[24px] relative shrink-0 w-[100px]" data-node-id="40002524:8613" data-name="sp" />
            <a href={CTA_HREF} target="_blank" rel="noopener" className="contents no-underline">
              <div className="border-[1.5px] border-[rgba(16,142,245,0.3)] border-solid content-stretch flex h-[48px] items-center justify-center overflow-clip px-[32px] relative rounded-[100px] shrink-0 w-full cursor-pointer" data-node-id="40002524:8614" data-name="btn">
                <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#108ef5] text-[15px] tracking-[-0.15px] whitespace-nowrap" data-node-id="40002524:8615">
                  Начать бесплатно
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="h-[32px] relative shrink-0 w-[100px]" data-node-id="40002524:8616" data-name="sp" />
        <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#767d88] text-[14px] text-center tracking-[-0.14px] w-[1200px]" data-node-id="40002524:8617">
          14 дней бесплатно · карта не нужна · отмена в любой момент
        </p>
      </div>
      <div className="bg-[#0a151a] content-stretch flex flex-col items-center overflow-clip p-[120px] relative shrink-0 w-[1440px]" data-node-id="40002524:8668" data-name="CTA Final">
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-[820px]" data-node-id="40002524:8669" data-name="cta-inner">
          <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[44px] text-center text-white tracking-[-1.1px] w-[820px]" data-node-id="40002524:8670">
            Начните сегодня и перестаньте терять заказы в Telegram
          </p>
          <div className="h-[24px] relative shrink-0 w-[100px]" data-node-id="40002524:8671" data-name="sp" />
          <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.7)] text-center tracking-[-0.18px] w-[720px]" data-node-id="40002524:8672">
            Каждую минуту, пока вы не подключили TGShop, кто-то из ваших клиентов не дождался ответа и ушёл к конкуренту.
          </p>
          <div className="h-[36px] relative shrink-0 w-[100px]" data-node-id="40002524:8673" data-name="sp" />
          <a href={CTA_HREF} target="_blank" rel="noopener" className="contents no-underline">
            <div className="bg-white content-stretch flex h-[52px] items-center justify-center overflow-clip px-[32px] relative rounded-[100px] shadow-[0px_20px_40px_0px_rgba(0,0,0,0.3)] shrink-0 cursor-pointer" data-node-id="40002524:8674" data-name="btn">
              <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#108ef5] text-[16px] tracking-[-0.16px] whitespace-nowrap" data-node-id="40002524:8675">
                Создать Telegram-магазин бесплатно →
              </p>
            </div>
          </a>
          <div className="h-[18px] relative shrink-0 w-[100px]" data-node-id="40002524:8676" data-name="sp" />
          <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.5)] text-center tracking-[-0.13px] whitespace-nowrap" data-node-id="40002524:8677">
            14 дней бесплатно · отмена в любой момент
          </p>
        </div>
      </div>
      <div className="bg-[#121721] border border-[rgba(0,0,0,0.04)] border-solid content-stretch flex flex-col items-start overflow-clip pb-[24px] pt-[48px] px-[120px] relative shrink-0 w-[1440px]" data-node-id="40002524:8678" data-name="Footer">
        <div className="content-stretch flex gap-[40px] items-start overflow-clip relative shrink-0 w-[1200px]" data-node-id="40002524:8679" data-name="footer-top">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[1.5] overflow-clip relative shrink-0 w-[440px]" data-node-id="40002524:8680" data-name="fb">
            <div className="content-stretch flex font-['SF_Pro:Bold',sans-serif] font-bold gap-[4px] items-baseline overflow-clip relative shrink-0 text-[20px] text-white tracking-[-0.4px] whitespace-nowrap" data-node-id="40002524:8681" data-name="br">
              <p className="relative shrink-0" data-node-id="40002524:8682" style={{ fontVariationSettings: "'wdth' 100" }}>
                {T.footerLogoBrand}
              </p>
              {T.footerLogoSuffix && (
                <p className="relative shrink-0" data-node-id="40002524:8683" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {T.footerLogoSuffix}
                </p>
              )}
            </div>
            <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#a6b0bf] text-[14px] tracking-[-0.14px] w-[300px]" data-node-id="40002524:8684" style={{ fontVariationSettings: "'wdth' 100" }}>
              Все Telegram-чаты магазина в одном кабинете. Часть экосистемы TGShop.
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-[200px]" data-node-id="40002524:8685" data-name="fc">
            <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[14px] text-white tracking-[-0.14px] whitespace-nowrap" data-node-id="40002524:8686" style={{ fontVariationSettings: "'wdth' 100" }}>
              Полезные материалы
            </p>
            <div className="h-[4px] relative shrink-0 w-[100px]" data-node-id="40002524:8687" data-name="sp" />
            <a className="[word-break:break-word] block font-['SF_Pro:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#a6b0bf] text-[14px] tracking-[-0.14px] whitespace-nowrap" href="https://tgshop.io/blog" data-node-id="40002524:8688" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
              <p className="cursor-pointer leading-[1.5]">Блог</p>
            </a>
            <a className="[word-break:break-word] block font-['SF_Pro:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#a6b0bf] text-[14px] tracking-[-0.14px] whitespace-nowrap" href="https://tgshop.io/faq" data-node-id="40002524:8689" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
              <p className="cursor-pointer leading-[1.5]">FAQ</p>
            </a>
            <a className="[word-break:break-word] block font-['SF_Pro:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#a6b0bf] text-[14px] tracking-[-0.14px] whitespace-nowrap" href={T.docsHref} data-node-id="40002524:8691" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
              <p className="cursor-pointer leading-[1.5]">Инструкции</p>
            </a>
          </div>
          <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-[200px]" data-node-id="40002524:8692" data-name="fc">
            <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[14px] text-white tracking-[-0.14px] whitespace-nowrap" data-node-id="40002524:8693" style={{ fontVariationSettings: "'wdth' 100" }}>
              Решения
            </p>
            <div className="h-[4px] relative shrink-0 w-[100px]" data-node-id="40002524:8694" data-name="sp" />
            <a className="[word-break:break-word] block font-['SF_Pro:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#a6b0bf] text-[14px] tracking-[-0.14px] whitespace-nowrap" href="https://tgshop.io/blog/instrukciya-kak-sozdat-magazin-v-telegram-po-shagam/" data-node-id="40002524:8695" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
              <p className="cursor-pointer leading-[1.5]">Telegram-магазин</p>
            </a>
            <a className="[word-break:break-word] block font-['SF_Pro:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#a6b0bf] text-[14px] tracking-[-0.14px] whitespace-nowrap" href={T.solutionsExtraHref} data-node-id="40002524:8696" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
              <p className="cursor-pointer leading-[1.5]">{T.solutionsExtraLabel}</p>
            </a>
          </div>
          <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-[200px]" data-node-id="40002524:8697" data-name="fc">
            <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[14px] text-white tracking-[-0.14px] whitespace-nowrap" data-node-id="40002524:8698" style={{ fontVariationSettings: "'wdth' 100" }}>
              Поддержка
            </p>
            <div className="h-[4px] relative shrink-0 w-[100px]" data-node-id="40002524:8699" data-name="sp" />
            <a className="[word-break:break-word] block font-['SF_Pro:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#a6b0bf] text-[14px] tracking-[-0.14px] whitespace-nowrap" href="https://t.me/TGShopHelp_bot" data-node-id="40002524:8700" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
              <p className="cursor-pointer leading-[1.5]">Связаться</p>
            </a>
            <a className="[word-break:break-word] block font-['SF_Pro:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#a6b0bf] text-[14px] tracking-[-0.14px] whitespace-nowrap" href="https://tgshop.io/privacypolicy/" data-node-id="40002524:8701" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
              <p className="cursor-pointer leading-[1.5]">Политика данных</p>
            </a>
            <a className="[word-break:break-word] block font-['SF_Pro:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#a6b0bf] text-[14px] tracking-[-0.14px] whitespace-nowrap" href="https://tgshop.io/useragreement/" data-node-id="40002524:8702" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
              <p className="cursor-pointer leading-[1.5]">Правила использования</p>
            </a>
          </div>
        </div>
        <div className="h-[32px] relative shrink-0 w-[100px]" data-node-id="40002524:8703" data-name="sp" />
        <div className="bg-[rgba(0,0,0,0.06)] h-px relative shrink-0 w-[1200px]" data-node-id="40002524:8704" data-name="div" />
        <div className="h-[20px] relative shrink-0 w-[100px]" data-node-id="40002524:8705" data-name="sp" />
        <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#a6b0bf] text-[12px] tracking-[-0.12px] whitespace-nowrap" data-node-id="40002524:8706" style={{ fontVariationSettings: "'wdth' 100" }}>
          {T.copyrightText}
        </p>
      </div>
    </div>
  );
}