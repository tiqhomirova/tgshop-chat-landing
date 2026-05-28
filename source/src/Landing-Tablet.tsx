import { useState } from 'react';

// === IMAGE CONSTANTS (deduped across sections) ===

// Hero
const imgHero_Frame21361400041 = "https://www.figma.com/api/mcp/asset/1a53674b-1399-44c7-86e1-923e16c24851";
const imgHero_Ellipse = "https://www.figma.com/api/mcp/asset/312c87cf-c9a6-417d-9c43-d621738caa21";

// Trust
const imgTrust_Photo202508261509211 = "https://www.figma.com/api/mcp/asset/d4c3e52e-b9e0-4cc9-b944-b032f80e2f59";
const imgTrust_YvesRocherLogoSvg3 = "https://www.figma.com/api/mcp/asset/f867a245-a697-4cc5-8f68-3bc5807c164d";
const imgTrust_61 = "https://www.figma.com/api/mcp/asset/7e156438-3deb-4bbc-baee-13b03d0017e4";
const imgTrust_221 = "/tgshop-chat-landing/assets/logo-merci-lingerie.png";
const imgTrust_51 = "/tgshop-chat-landing/assets/logo-dragonfly.png";
const imgTrust_41 = "/tgshop-chat-landing/assets/logo-third.png";
const imgTrust_Group = "https://www.figma.com/api/mcp/asset/511a67c6-9054-4e8f-af2d-c47285b786ea";
const imgTrust_Group1 = "https://www.figma.com/api/mcp/asset/59604f62-55e9-4242-9aff-7c3a0c94b891";
const imgTrust_Group2 = "https://www.figma.com/api/mcp/asset/664bbbe7-086b-4610-bb91-58773d128e0d";
const imgTrust_Group3 = "https://www.figma.com/api/mcp/asset/96d0611e-9821-4cae-b045-c8acf0acad41";
const imgTrust_Group4 = "https://www.figma.com/api/mcp/asset/5aba2860-1ba2-4c05-8463-7c2d02b5256f";
const imgTrust_Group5 = "https://www.figma.com/api/mcp/asset/15dcc965-009b-425c-9e05-26da342a539b";
const imgTrust_Group6 = "https://www.figma.com/api/mcp/asset/70da7cea-0aa2-4844-a382-6232989004c7";
const imgTrust_Group7 = "https://www.figma.com/api/mcp/asset/18a0f8f8-e999-4e4b-92e6-5a85d3a91ede";
const imgTrust_Group8 = "https://www.figma.com/api/mcp/asset/428d90f7-6172-476a-891c-dcedf973b0a2";
const imgTrust_Svg = "https://www.figma.com/api/mcp/asset/27a1b550-35ea-48c2-bf52-d84a02f6675e";
const imgTrust_Vector = "https://www.figma.com/api/mcp/asset/2eeb6f2e-3adf-44b9-808d-e18024f79c94";
const imgTrust_Background = "https://www.figma.com/api/mcp/asset/62241a25-bbb6-457d-81c0-69c4ac4b13f8";
const imgTrust_Background1 = "https://www.figma.com/api/mcp/asset/165cbd65-6e8c-45ea-aa55-362359d00b6a";
const imgTrust_Photo202508261509132 = "https://www.figma.com/api/mcp/asset/b5e5e737-2f76-4281-af22-8ca51da0362a";

// KeyFeatures
const imgKF_Ellipse = "https://www.figma.com/api/mcp/asset/17d2661d-3672-4359-b80c-23a1e058f25f";
const imgKF_Ellipse1 = "https://www.figma.com/api/mcp/asset/f6e6ecc3-8357-478b-8002-d6ed8929e9f0";
const imgKF_Ellipse2 = "https://www.figma.com/api/mcp/asset/a24da52a-e152-4a14-9c11-becc760bc3e9";
const imgKF_Ellipse3 = "https://www.figma.com/api/mcp/asset/638d1ca3-7826-4a7a-a348-5c1c449f9dd9";

// Solution
const imgSol_Ellipse = "https://www.figma.com/api/mcp/asset/7f0a21bb-cd71-4bed-997b-ddb18adf34a3";
const imgSol_Ellipse1 = "https://www.figma.com/api/mcp/asset/60e184da-d719-44df-9d9c-6b996b95de38";
const imgSol_Ellipse2 = "https://www.figma.com/api/mcp/asset/3686475f-2327-4689-8c03-4659d7a645f8";
const imgSol_Ellipse3 = "https://www.figma.com/api/mcp/asset/9589992c-796f-47e2-b931-552d2483b122";
const imgSol_Ellipse4 = "https://www.figma.com/api/mcp/asset/02443977-4167-47c5-8022-7627d5d810b5";
const imgSol_Ellipse5 = "https://www.figma.com/api/mcp/asset/0003642b-d3a5-476f-915a-8a08239fd92c";
const imgSol_Ellipse6 = "https://www.figma.com/api/mcp/asset/3459ceb7-4967-4467-9a6d-d70a608c2e2e";
const imgSol_Ellipse7 = "https://www.figma.com/api/mcp/asset/da56fcc0-6f3b-4afb-bcfa-66b23c24bd10";

const CTA_HREF = "https://admin.tgshop.io/sign-up";

// === SECTION COMPONENTS ===

function Header() {
  return (
    <div className="bg-white border border-[rgba(0,0,0,0.05)] border-solid content-stretch flex flex-col items-start relative size-full" data-node-id="40002524:8898" data-name="Header">
      <div className="content-stretch flex gap-[40px] h-[72px] items-center px-[48px] relative shrink-0 w-[1024px]" data-node-id="40002524:8899" data-name="header-inner">
        <div className="[word-break:break-word] content-stretch flex font-['SF_Pro_Display:Bold',sans-serif] font-bold gap-[4px] items-baseline leading-[1.5] not-italic overflow-clip relative shrink-0 text-[20px] tracking-[-0.4px] whitespace-nowrap" data-node-id="40002524:8900" data-name="brand">
          <p className="relative shrink-0 text-[#0a1519]" data-node-id="40002524:8901">TGShop</p>
          <p className="relative shrink-0 text-[#108ef5]" data-node-id="40002524:8902">Chat</p>
        </div>
        <div className="flex-[1_0_0] h-[100px] min-w-px relative" data-node-id="40002524:8903" data-name="sp" />
        <div className="[word-break:break-word] content-stretch flex font-['SF_Pro:Medium',sans-serif] font-normal gap-[28px] items-center leading-[0] overflow-clip relative shrink-0 text-[#595959] text-[14px] tracking-[-0.14px] whitespace-nowrap" data-node-id="40002524:8904" data-name="nav">
          <a className="block relative shrink-0" href="https://docs.tgshop.io/uz/telegramda-dokon-ochish/tezkor-boshlash" data-node-id="40002524:8905" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
            <p className="cursor-pointer leading-[1.5]">База знаний</p>
          </a>
          <a className="block relative shrink-0" href="https://t.me/TGShopHelp_bot" data-node-id="40002524:8907" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
            <p className="cursor-pointer leading-[1.5]">Помощь</p>
          </a>
          <a className="block relative shrink-0" href="#trust" data-node-id="40002524:8908" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="cursor-pointer leading-[1.5]">Кейсы</p>
          </a>
        </div>
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="40002524:8909" data-name="header-cta">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 mr-[4px]" data-name="lang-switch">
              <div className="content-stretch flex gap-[6px] items-center px-[12px] py-[8px] rounded-[100px] cursor-pointer hover:bg-[rgba(16,142,245,0.06)] transition-colors" title="Сменить язык / Tilni o'zgartirish">
                <span className="text-[14px]">🌐</span>
                <span className="font-['SF_Pro:Semibold',sans-serif] font-[590] text-[14px] text-[#595959] tracking-[-0.14px]">O'zbek</span>
              </div>
            </div>
          <div className="border-[1.5px] border-[rgba(16,142,245,0.2)] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[18px] relative rounded-[100px] shrink-0" data-node-id="40002524:8910" data-name="btn-outline">
            <a className="[word-break:break-word] block font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[0] relative shrink-0 text-[#108ef5] text-[14px] tracking-[-0.14px] whitespace-nowrap" href="https://admin.tgshop.io/sign-in" data-node-id="40002524:8911" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
              <p className="cursor-pointer leading-[1.5]">Войти</p>
            </a>
          </div>
          <div className="bg-[#108ef5] content-stretch flex h-[40px] items-center justify-center overflow-clip px-[18px] relative rounded-[100px] shadow-[0px_12px_24px_0px_rgba(51,133,255,0.22)] shrink-0" data-node-id="40002524:8912" data-name="btn-primary">
            <a className="[word-break:break-word] block font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[0] relative shrink-0 text-[14px] text-white tracking-[-0.14px] whitespace-nowrap" href="https://admin.tgshop.io/sign-up" data-node-id="40002524:8913" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
              <p className="cursor-pointer leading-[1.5]">Зарегистрироваться</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center pb-[50px] pt-[80px] px-[48px] relative size-full" data-node-id="40002524:8914" data-name="Hero">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-[928px]" data-node-id="40002524:8915" data-name="hero-inner">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[460px]" data-node-id="40002524:8916" data-name="left">
          <div className="bg-[rgba(16,142,245,0.08)] content-stretch flex gap-[8px] items-center overflow-clip px-[14px] py-[8px] relative rounded-[100px] shrink-0" data-node-id="40002524:8917" data-name="pill">
            <div className="bg-[#108ef5] relative rounded-[4px] shrink-0 size-[8px]" data-node-id="40002524:8918" data-name="dot" />
            <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[#108ef5] text-[13px] tracking-[-0.13px] whitespace-nowrap" data-node-id="40002524:8919" style={{ fontVariationSettings: "'wdth' 100" }}>
              2 000+ магазинов уже подключили TGShop
            </p>
          </div>
          <div className="h-[24px] relative shrink-0 w-[100px]" data-node-id="40002524:8920" data-name="sp" />
          <div className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#0a1519] text-[44px] tracking-[-1.32px] w-[460px] whitespace-pre-wrap" data-node-id="40002524:8921" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.05] mb-0">{`Telegram-магазин `}</p>
            <p className="leading-[1.05]">и чаты с клиентами в одном кабинете</p>
          </div>
          <div className="h-[24px] relative shrink-0 w-[100px]" data-node-id="40002524:8922" data-name="sp" />
          <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#595959] text-[18px] tracking-[-0.18px] w-[460px]" data-node-id="40002524:8923">
            Ваши менеджеры не успевают отвечать всем клиентам в Telegram — и заказы уходят к конкурентам. С TGShop ни одна заявка не потеряется, и клиенты смогут покупать в 1 клик.
          </p>
          <div className="h-[32px] relative shrink-0 w-[100px]" data-node-id="40002524:8924" data-name="sp" />
          <div className="content-stretch flex items-start relative shrink-0" data-node-id="40002524:8925" data-name="cta-row">
            <a href={CTA_HREF} target="_blank" rel="noopener" className="contents no-underline">
              <div className="bg-[#108ef5] cursor-pointer content-stretch flex h-[52px] items-center justify-center overflow-clip px-[32px] relative rounded-[100px] shadow-[0px_20px_35px_0px_rgba(51,133,255,0.22)] shrink-0" data-node-id="40002524:8926" data-name="btn-primary-l">
                <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.16px] whitespace-nowrap" data-node-id="40002524:8927">
                  Попробовать бесплатно
                </p>
              </div>
            </a>
          </div>
          <div className="h-[20px] relative shrink-0 w-[100px]" data-node-id="40002524:8930" data-name="sp" />
          <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1d9b5e] text-[13px] tracking-[-0.13px] whitespace-nowrap" data-node-id="40002524:8931" style={{ fontVariationSettings: "'wdth' 100" }}>
            14 дней бесплатно · без разработки
          </p>
        </div>
        <div className="h-[415px] relative shrink-0 w-[602px]" data-node-id="40002757:8485" data-name="right">
          <div className="absolute content-stretch drop-shadow-[-2px_-2px_3px_rgba(0,0,0,0.1)] flex h-[300.9px] items-start left-[207.4px] overflow-clip rounded-[20px] top-[56.53px] w-[274.55px]" data-node-id="40002757:8486" data-name="mock-body">
            <div className="bg-white content-stretch flex flex-col gap-[2px] h-[300.9px] items-start overflow-clip px-[10px] py-[14px] relative shrink-0 w-[274.55px]" data-node-id="40002757:8487" data-name="chats">
              <div className="content-stretch flex gap-[6px] h-[35.7px] items-start overflow-clip pb-[12px] px-[4px] relative shrink-0 w-[266.05px]" data-node-id="40002757:8488" data-name="ctabs">
                <div className="bg-[#108ef5] content-stretch flex h-[25.5px] items-center overflow-clip px-[10px] py-[6px] relative rounded-[100px] shrink-0 w-[53.55px]" data-node-id="40002757:8489" data-name="ct1">
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[10px] text-white tracking-[-0.1px] whitespace-nowrap" data-node-id="40002757:8490" style={{ fontVariationSettings: "'wdth' 100" }}>💬 Чаты</p>
                </div>
                <div className="[word-break:break-word] bg-[#f6f7f9] content-stretch flex gap-[4px] h-[25.5px] items-center leading-[1.5] overflow-clip px-[10px] py-[6px] relative rounded-[100px] shrink-0 text-[10px] tracking-[-0.1px] w-[56.95px] whitespace-nowrap" data-node-id="40002757:8491" data-name="ct2">
                  <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#767d88]" data-node-id="40002757:8492" style={{ fontVariationSettings: "'wdth' 100" }}>Новые</p>
                  <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-[#e5484d]" data-node-id="40002757:8493" style={{ fontVariationSettings: "'wdth' 100" }}>8</p>
                </div>
                <div className="[word-break:break-word] bg-[#f6f7f9] content-stretch flex gap-[4px] h-[25.5px] items-center leading-[1.5] overflow-clip px-[10px] py-[6px] relative rounded-[100px] shrink-0 text-[10px] tracking-[-0.1px] w-[67.15px] whitespace-nowrap" data-node-id="40002757:8494" data-name="ct2">
                  <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#767d88]" data-node-id="40002757:8495" style={{ fontVariationSettings: "'wdth' 100" }}>Открыты</p>
                  <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-[#f7b50d]" data-node-id="40002757:8496" style={{ fontVariationSettings: "'wdth' 100" }}>5</p>
                </div>
                <div className="[word-break:break-word] bg-[#f6f7f9] content-stretch flex gap-[4px] h-[25.5px] items-center leading-[1.5] overflow-clip px-[10px] py-[6px] relative rounded-[100px] shrink-0 text-[10px] tracking-[-0.1px] w-[66.3px] whitespace-nowrap" data-node-id="40002757:8497" data-name="ct3">
                  <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#767d88]" data-node-id="40002757:8498" style={{ fontVariationSettings: "'wdth' 100" }}>Закрыты</p>
                  <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-[#595959]" data-node-id="40002757:8499" style={{ fontVariationSettings: "'wdth' 100" }}>3</p>
                </div>
              </div>
              <div className="bg-[#f3f8ff] content-stretch flex gap-[12px] h-[37.4px] items-start p-[10px] relative rounded-[10px] shrink-0 w-[253.3px]" data-node-id="40002757:8500" data-name="ch">
                <div className="bg-[#e5484d] content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shrink-0 size-[23.8px]" data-node-id="40002757:8501" data-name="av">
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[10px] text-white tracking-[-0.1px] whitespace-nowrap" data-node-id="40002757:8502" style={{ fontVariationSettings: "'wdth' 100" }}>Ю</p>
                </div>
                <div className="content-stretch flex flex-col h-[85px] items-start relative shrink-0 w-[118.575px]" data-node-id="40002757:8503" data-name="main">
                  <div className="content-stretch flex h-[85px] items-start overflow-clip relative shrink-0 w-[100.789px]" data-node-id="40002757:8504" data-name="top">
                    <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[#0a1519] text-[11px] tracking-[-0.11px] whitespace-nowrap" data-node-id="40002757:8505" style={{ fontVariationSettings: "'wdth' 100" }}>Регина К.</p>
                    <div className="h-[85px] relative shrink-0 w-[6px]" data-node-id="40002757:8506" data-name="s" />
                    <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.5] relative shrink-0 text-[#767d88] text-[9px] tracking-[-0.09px] whitespace-nowrap" data-node-id="40002757:8507" style={{ fontVariationSettings: "'wdth' 100" }}>только что</p>
                  </div>
                </div>
                <div className="bg-[#e5484d] content-stretch flex h-[18px] items-center overflow-clip px-[7px] py-[3px] relative rounded-[100px] shrink-0 w-[45px]" data-node-id="40002757:8508" data-name="bd">
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[9px] text-white tracking-[0.18px] whitespace-nowrap" data-node-id="40002757:8509" style={{ fontVariationSettings: "'wdth' 100" }}>Новый</p>
                </div>
              </div>
              <div className="bg-[#f3f8ff] content-stretch flex gap-[12px] h-[37.4px] items-start p-[10px] relative rounded-[10px] shrink-0 w-[253.3px]" data-node-id="40002757:8510" data-name="ch">
                <div className="bg-[#e5484d] content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shrink-0 size-[23.8px]" data-node-id="40002757:8511" data-name="av">
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[10px] text-white tracking-[-0.1px] whitespace-nowrap" data-node-id="40002757:8512" style={{ fontVariationSettings: "'wdth' 100" }}>Ю</p>
                </div>
                <div className="content-stretch flex flex-col h-[85px] items-start relative shrink-0 w-[118.575px]" data-node-id="40002757:8513" data-name="main">
                  <div className="content-stretch flex h-[85px] items-start overflow-clip relative shrink-0 w-[100.789px]" data-node-id="40002757:8514" data-name="top">
                    <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[#0a1519] text-[11px] tracking-[-0.11px] whitespace-nowrap" data-node-id="40002757:8515" style={{ fontVariationSettings: "'wdth' 100" }}>Ozoda M.</p>
                    <div className="h-[85px] relative shrink-0 w-[6px]" data-node-id="40002757:8516" data-name="s" />
                    <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.5] relative shrink-0 text-[#767d88] text-[9px] tracking-[-0.09px] whitespace-nowrap" data-node-id="40002757:8517" style={{ fontVariationSettings: "'wdth' 100" }}>только что</p>
                  </div>
                </div>
                <div className="bg-[#e5484d] content-stretch flex h-[18px] items-center overflow-clip px-[7px] py-[3px] relative rounded-[100px] shrink-0 w-[45px]" data-node-id="40002757:8518" data-name="bd">
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[9px] text-white tracking-[0.18px] whitespace-nowrap" data-node-id="40002757:8519" style={{ fontVariationSettings: "'wdth' 100" }}>Новый</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] h-[37.4px] items-start p-[10px] relative rounded-[10px] shrink-0 w-[253.3px]" data-node-id="40002757:8520" data-name="ch">
                <div className="bg-[#8b5cf6] content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shrink-0 size-[23.8px]" data-node-id="40002757:8521" data-name="av">
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[10px] text-white tracking-[-0.1px] whitespace-nowrap" data-node-id="40002757:8522" style={{ fontVariationSettings: "'wdth' 100" }}>Д</p>
                </div>
                <div className="content-stretch flex flex-col gap-[2px] h-[103.7px] items-start relative shrink-0 w-[114.325px]" data-node-id="40002757:8523" data-name="main">
                  <div className="content-stretch flex h-[85px] items-start overflow-clip relative shrink-0 w-[97.176px]" data-node-id="40002757:8524" data-name="top">
                    <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[#0a1519] text-[11px] tracking-[-0.11px] whitespace-nowrap" data-node-id="40002757:8525" style={{ fontVariationSettings: "'wdth' 100" }}>Дилшод М.</p>
                    <div className="h-[85px] relative shrink-0 w-[6px]" data-node-id="40002757:8526" data-name="s" />
                    <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.5] relative shrink-0 text-[#767d88] text-[9px] tracking-[-0.09px] whitespace-nowrap" data-node-id="40002757:8527" style={{ fontVariationSettings: "'wdth' 100" }}>4 мин</p>
                  </div>
                  <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#108ef5] text-[11px] tracking-[-0.11px] w-[252px]" data-node-id="40002757:8528" style={{ fontVariationSettings: "'wdth' 100" }}>Алина: Передал в доставку ✅</p>
                </div>
                <div className="bg-[#f7b50d] content-stretch flex h-[18px] items-center overflow-clip px-[7px] py-[3px] relative rounded-[100px] shrink-0 w-[48px]" data-node-id="40002757:8529" data-name="bd">
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[9px] text-white tracking-[0.18px] whitespace-nowrap" data-node-id="40002757:8530" style={{ fontVariationSettings: "'wdth' 100" }}>Открыт</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] h-[37.4px] items-start p-[10px] relative rounded-[10px] shrink-0 w-[253.3px]" data-node-id="40002757:8531" data-name="ch">
                <div className="bg-[#ec4899] content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shrink-0 size-[23.8px]" data-node-id="40002757:8532" data-name="av">
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[10px] text-white tracking-[-0.1px] whitespace-nowrap" data-node-id="40002757:8533" style={{ fontVariationSettings: "'wdth' 100" }}>М</p>
                </div>
                <div className="content-stretch flex flex-col gap-[2px] h-[103.7px] items-start relative shrink-0 w-[114.325px]" data-node-id="40002757:8534" data-name="main">
                  <div className="content-stretch flex h-[85px] items-start overflow-clip relative shrink-0 w-[97.176px]" data-node-id="40002757:8535" data-name="top">
                    <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[#0a1519] text-[11px] tracking-[-0.11px] whitespace-nowrap" data-node-id="40002757:8536" style={{ fontVariationSettings: "'wdth' 100" }}>Мадина Х.</p>
                    <div className="h-[85px] relative shrink-0 w-[6px]" data-node-id="40002757:8537" data-name="s" />
                    <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.5] relative shrink-0 text-[#767d88] text-[9px] tracking-[-0.09px] whitespace-nowrap" data-node-id="40002757:8538" style={{ fontVariationSettings: "'wdth' 100" }}>12 мин</p>
                  </div>
                  <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#595959] text-[11px] tracking-[-0.11px] w-[252px]" data-node-id="40002757:8539" style={{ fontVariationSettings: "'wdth' 100" }}>Спасибо!</p>
                </div>
                <div className="bg-[#f7b50d] content-stretch flex h-[18px] items-center overflow-clip px-[7px] py-[3px] relative rounded-[100px] shrink-0 w-[48px]" data-node-id="40002757:8540" data-name="bd">
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[9px] text-white tracking-[0.18px] whitespace-nowrap" data-node-id="40002757:8541" style={{ fontVariationSettings: "'wdth' 100" }}>Открыт</p>
                </div>
              </div>
              <div className="bg-[#f3f8ff] content-stretch flex gap-[12px] h-[37.4px] items-start p-[10px] relative rounded-[10px] shrink-0 w-[253.3px]" data-node-id="40002757:8542" data-name="ch">
                <div className="bg-[#0ea5e9] content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shrink-0 size-[23.8px]" data-node-id="40002757:8543" data-name="av">
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[10px] text-white tracking-[-0.1px] whitespace-nowrap" data-node-id="40002757:8544" style={{ fontVariationSettings: "'wdth' 100" }}>А</p>
                </div>
                <div className="content-stretch flex flex-col gap-[2px] h-[103.7px] items-start relative shrink-0 w-[115.175px]" data-node-id="40002757:8545" data-name="main">
                  <div className="content-stretch flex h-[85px] items-start overflow-clip relative shrink-0 w-[97.899px]" data-node-id="40002757:8546" data-name="top">
                    <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[#0a1519] text-[11px] tracking-[-0.11px] whitespace-nowrap" data-node-id="40002757:8547" style={{ fontVariationSettings: "'wdth' 100" }}>Акмал Т.</p>
                    <div className="h-[85px] relative shrink-0 w-[12.664px]" data-node-id="40002757:8548" data-name="s" />
                    <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.5] relative shrink-0 text-[#767d88] text-[9px] tracking-[-0.09px] whitespace-nowrap" data-node-id="40002757:8549" style={{ fontVariationSettings: "'wdth' 100" }}>10 мин</p>
                  </div>
                  <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#595959] text-[11px] tracking-[-0.11px] w-[252px]" data-node-id="40002757:8550" style={{ fontVariationSettings: "'wdth' 100" }}>Доставите сегодня до 18:00?</p>
                </div>
                <div className="bg-[#4fd192] content-stretch flex h-[18px] items-center overflow-clip px-[7px] py-[3px] relative rounded-[100px] shrink-0 w-[48px]" data-node-id="40002757:8551" data-name="bd">
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[9px] text-white tracking-[0.18px] whitespace-nowrap" data-node-id="40002757:8552" style={{ fontVariationSettings: "'wdth' 100" }}>Закрыт</p>
                </div>
              </div>
              <div className="bg-[#f3f8ff] content-stretch flex gap-[12px] h-[37.4px] items-start p-[10px] relative rounded-[10px] shrink-0 w-[253.3px]" data-node-id="40002757:8553" data-name="ch">
                <div className="bg-[#0ea5e9] content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shrink-0 size-[23.8px]" data-node-id="40002757:8554" data-name="av">
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[10px] text-white tracking-[-0.1px] whitespace-nowrap" data-node-id="40002757:8555" style={{ fontVariationSettings: "'wdth' 100" }}>А</p>
                </div>
                <div className="content-stretch flex flex-col gap-[2px] h-[103.7px] items-start relative shrink-0 w-[115.175px]" data-node-id="40002757:8556" data-name="main">
                  <div className="content-stretch flex h-[85px] items-start overflow-clip relative shrink-0 w-[97.899px]" data-node-id="40002757:8557" data-name="top">
                    <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[#0a1519] text-[11px] tracking-[-0.11px] whitespace-nowrap" data-node-id="40002757:8558" style={{ fontVariationSettings: "'wdth' 100" }}>Aziz K.</p>
                    <div className="h-[85px] relative shrink-0 w-[22.864px]" data-node-id="40002757:8559" data-name="s" />
                    <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.5] relative shrink-0 text-[#767d88] text-[9px] tracking-[-0.09px] whitespace-nowrap" data-node-id="40002757:8560" style={{ fontVariationSettings: "'wdth' 100" }}>15 мин</p>
                  </div>
                  <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#595959] text-[11px] tracking-[-0.11px] w-[252px]" data-node-id="40002757:8561" style={{ fontVariationSettings: "'wdth' 100" }}>Доставите сегодня до 18:00?</p>
                </div>
                <div className="bg-[#4fd192] content-stretch flex h-[18px] items-center overflow-clip px-[7px] py-[3px] relative rounded-[100px] shrink-0 w-[48px]" data-node-id="40002757:8562" data-name="bd">
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[9px] text-white tracking-[0.18px] whitespace-nowrap" data-node-id="40002757:8563" style={{ fontVariationSettings: "'wdth' 100" }}>Закрыт</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col h-[400.35px] items-start left-[91.8px] pb-[16px] pt-[14px] px-[14px] top-[2.55px] w-[172.55px]" data-node-id="40002757:8564" data-name="shop">
            <div className="content-stretch flex gap-[6px] h-[26px] items-start overflow-clip relative shrink-0 w-[154px]" data-node-id="40002757:8565" data-name="stabs">
              <div className="bg-[#108ef5] content-stretch flex h-[25.5px] items-center overflow-clip px-[10px] py-[6px] relative rounded-[100px] shrink-0 w-[69.7px]" data-node-id="40002757:8566" data-name="ta">
                <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[10px] text-white tracking-[-0.1px] whitespace-nowrap" data-node-id="40002757:8567" style={{ fontVariationSettings: "'wdth' 100" }}>🛍 Магазин</p>
              </div>
              <div className="[word-break:break-word] bg-[#f6f7f9] content-stretch flex gap-[4px] h-[25.5px] items-center leading-[1.5] px-[10px] py-[6px] relative rounded-[100px] shrink-0 text-[10px] tracking-[-0.1px] whitespace-nowrap" data-node-id="40002757:8568" data-name="tm">
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#767d88]" data-node-id="40002757:8569" style={{ fontVariationSettings: "'wdth' 100" }}>Заказы</p>
                <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-[#0a1519]" data-node-id="40002757:8570" style={{ fontVariationSettings: "'wdth' 100" }}>198</p>
              </div>
            </div>
            <div className="h-[10.2px] relative shrink-0 w-[85px]" data-node-id="40002757:8571" data-name="sp" />
            <div className="h-[322.15px] relative rounded-[20px] shadow-[-1px_-1px_6px_0px_rgba(0,0,0,0.2)] shrink-0 w-[148.75px]" data-node-id="40002757:8572" data-name="Frame 2136140004 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgHero_Frame21361400041} />
            </div>
            <div className="h-[10.2px] relative shrink-0 w-[85px]" data-node-id="40002757:8573" data-name="sp" />
            <div className="h-[6.8px] relative shrink-0 w-[85px]" data-node-id="40002757:8574" data-name="sp" />
          </div>
          <div className="absolute flex h-[112.443px] items-center justify-center left-[91.37px] top-[293.83px] w-[208.063px]">
            <div className="-rotate-6 flex-none">
              <div className="bg-white drop-shadow-[0px_16px_20px_rgba(13,18,31,0.12)] h-[92.091px] relative rounded-[20px] w-[199.53px]" data-node-id="40002757:8575" data-name="badge-15min">
                <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[20.4px] not-italic text-[#6b7380] text-[12px] top-[17px] whitespace-nowrap" data-node-id="40002757:8576">Запуск за</p>
                <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[20.4px] not-italic text-[#121726] text-[20px] top-[35.7px] whitespace-nowrap" data-node-id="40002757:8577">15 минут</p>
                <div className="absolute left-[20.19px] size-[18.7px] top-[62.68px]" data-node-id="40002757:8578" data-name="Ellipse">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHero_Ellipse} />
                </div>
                <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[45.69px] not-italic text-[#1f242e] text-[12px] top-[64.38px] whitespace-nowrap" data-node-id="40002757:8579">без программистов</p>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[95.752px] items-center justify-center left-[353px] top-[9.5px] w-[147.231px]">
            <div className="flex-none rotate-3">
              <div className="[word-break:break-word] bg-white drop-shadow-[0px_12px_15px_rgba(79,209,146,0.22)] h-[88.4px] not-italic relative rounded-[16px] w-[142.8px] whitespace-nowrap" data-node-id="40002757:8580" data-name="badge-37orders">
                <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[17px] text-[#0fba82] text-[27px] top-[11.9px]" data-node-id="40002757:8581">+37</p>
                <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[17px] text-[#4d5966] text-[11px] top-[47.6px]" data-node-id="40002757:8582">
                  <p className="leading-[12px] mb-0">новых заказов</p>
                  <p className="leading-[12px]">сегодня</p>
                </div>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] absolute bg-white drop-shadow-[0px_12px_15px_rgba(13,18,31,0.1)] h-[88.4px] left-[370px] not-italic rounded-[16px] top-[324.5px] w-[132.6px] whitespace-nowrap" data-node-id="40002757:8583" data-name="badge-12msg">
            <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[17px] text-[#121726] text-[27px] top-[11.9px]" data-node-id="40002757:8584">12</p>
            <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[17px] text-[#4d5966] text-[11px] top-[47.6px]" data-node-id="40002757:8585">
              <p className="leading-[12px] mb-0">новых</p>
              <p className="leading-[12px]">заявок в чатах</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionUpperDefault({ className }: { className?: string }) {
  // Brand strip — same 5 logos for Desktop & Tablet, uniform sizing via
  // max-height. Width auto via object-contain, so each logo keeps its
  // own aspect ratio without pixel tweaks.
  const logoCls = "max-h-[36px] w-auto object-contain mix-blend-darken shrink-0";
  const dividerCls = "w-px h-[32px] bg-[#e9ebf1] shrink-0";
  return (
    <div className={className || "h-[80px] overflow-clip relative w-[928px]"} data-node-id="40002524:7510" data-name="Section-upper/Default">
      <div className="h-full flex items-center justify-around gap-[40px] px-[40px]">
        <img src={imgTrust_YvesRocherLogoSvg3} alt="Yves Rocher" className={logoCls} />
        <div className={dividerCls} />
        <img src={imgTrust_Vector} alt="Bogner" className={logoCls} />
        <div className={dividerCls} />
        <img src={imgTrust_61} alt="EMRA" className={logoCls} />
        <div className={dividerCls} />
        <img src={imgTrust_221} alt="Merci Lingerie" className={logoCls} />
        <div className={dividerCls} />
        <img src={imgTrust_51} alt="Dragonfly" className={logoCls} />
      </div>
    </div>
  );
}

function Trust() {
  return (
    <div className="bg-[#f6f7f9] content-stretch flex flex-col gap-[32px] items-center px-[48px] py-[80px] relative size-full" data-node-id="40002673:8244" data-name="Trust" id="trust">
      <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#121726] text-[36px] whitespace-nowrap" data-node-id="40002673:8245" style={{ fontVariationSettings: "'wdth' 100" }}>
        Нам доверяют
      </p>
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[928px]" data-node-id="40002758:2562" data-name="logos">
        <SectionUpperDefault className="h-[80px] overflow-clip relative shrink-0 w-[928px]" />
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[928px]" data-node-id="40002673:8253" data-name="cases-row">
        <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="40002673:8254" data-name="Frame">
          <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px overflow-clip p-[24px] relative rounded-[16px]" data-node-id="40002673:8256" data-name="case-Fashion Fabrique">
            <div className="[word-break:break-word] bg-[rgba(33,178,99,0.14)] content-stretch flex gap-[6px] items-center leading-[normal] overflow-clip px-[10px] py-[4px] relative rounded-[10px] shrink-0 text-[#0f8c33] whitespace-nowrap">
              <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0 text-[10px]" style={{ fontVariationSettings: "'wdth' 100" }}>✓</p>
              <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>x2 клиентов</p>
            </div>
            <div className="bg-white content-stretch flex gap-[20px] items-start overflow-clip relative shrink-0">
              <div className="bg-white content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0">
                <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f8c33] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>+30%</p>
                <div className="bg-[#21b263] h-[4px] relative rounded-[2px] shrink-0 w-[40px]" />
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6b7885] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>рост онлайн-продаж</p>
              </div>
              <div className="bg-white content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0">
                <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f8c33] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>+40%</p>
                <div className="bg-[#21b263] h-[4px] relative rounded-[2px] shrink-0 w-[40px]" />
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6b7885] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>товаров в заказе</p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8c949e] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>за квартал</p>
            <div className="bg-white content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0">
              <div className="border border-[#f6f7f9] border-solid relative rounded-[200px] shrink-0 size-[40px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[200px] size-full" src={imgTrust_Photo202508261509211} />
              </div>
              <div className="[word-break:break-word] bg-white content-stretch flex flex-col gap-[2px] items-start leading-[normal] overflow-clip relative shrink-0 whitespace-nowrap">
                <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0 text-[#121726] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>Fashion Fabrique</p>
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7885] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>бренд одежды, обуви и аксессуаров</p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px overflow-clip p-[24px] relative rounded-[16px]" data-node-id="40002673:8273" data-name="case-Around You">
            <div className="[word-break:break-word] bg-[rgba(33,178,99,0.14)] content-stretch flex gap-[6px] items-center leading-[normal] overflow-clip px-[10px] py-[4px] relative rounded-[10px] shrink-0 text-[#0f8c33] whitespace-nowrap">
              <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0 text-[10px]" style={{ fontVariationSettings: "'wdth' 100" }}>✓</p>
              <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>0 сум на рекламу</p>
            </div>
            <div className="bg-white content-stretch flex gap-[20px] items-start overflow-clip relative shrink-0">
              <div className="bg-white content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0">
                <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f8c33] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>6 515 заказов</p>
                <div className="bg-[#21b263] h-[4px] relative rounded-[2px] shrink-0 w-[60px]" />
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8c949e] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>с TGShop</p>
              </div>
              <div className="bg-white content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0">
                <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f04545] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>740 заказов</p>
                <div className="bg-[#f04545] h-[4px] relative rounded-[2px] shrink-0 w-[10px]" />
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8c949e] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>“до” было на маркетплейсе</p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8c949e] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>за 6 месяцев</p>
            <div className="bg-white content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0">
              <div className="border border-[#f6f7f9] border-solid relative rounded-[999px] shrink-0 size-[40px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgTrust_Background} />
              </div>
              <div className="[word-break:break-word] bg-white content-stretch flex flex-col gap-[2px] items-start leading-[normal] overflow-clip relative shrink-0 whitespace-nowrap">
                <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0 text-[#121726] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>Around You</p>
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7885] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>цветочный магазин</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="40002673:8255" data-name="Frame">
          <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px overflow-clip p-[24px] relative rounded-[16px]" data-node-id="40002673:8287" data-name="case-Hold Store">
            <div className="[word-break:break-word] bg-[rgba(33,178,99,0.14)] content-stretch flex gap-[6px] items-center leading-[normal] overflow-clip px-[10px] py-[4px] relative rounded-[10px] shrink-0 text-[#0f8c33] whitespace-nowrap">
              <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0 text-[10px]" style={{ fontVariationSettings: "'wdth' 100" }}>✓</p>
              <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>Постоянный рост</p>
            </div>
            <div className="bg-white content-stretch flex gap-[20px] items-start overflow-clip relative shrink-0">
              <div className="bg-white content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0">
                <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f8c33] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>+15%</p>
                <div className="bg-[#21b263] h-[4px] relative rounded-[2px] shrink-0 w-[40px]" />
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6b7885] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>конверсия продаж</p>
              </div>
              <div className="bg-white content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0">
                <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f8c33] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>+7%</p>
                <div className="bg-[#21b263] h-[4px] relative rounded-[2px] shrink-0 w-[40px]" />
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6b7885] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>рост CR в месяц</p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8c949e] text-[11px] opacity-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>в месяц</p>
            <div className="bg-white content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0">
              <div className="border border-[#f6f7f9] border-solid relative rounded-[999px] shrink-0 size-[40px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgTrust_Background1} />
              </div>
              <div className="[word-break:break-word] bg-white content-stretch flex flex-col gap-[2px] items-start leading-[normal] overflow-clip relative shrink-0 whitespace-nowrap">
                <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0 text-[#121726] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>Hold Store</p>
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7885] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>магазин кроссовок</p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px overflow-clip p-[24px] relative rounded-[16px]" data-node-id="40002673:8301" data-name="case-Casher">
            <div className="[word-break:break-word] bg-[rgba(33,178,99,0.14)] content-stretch flex gap-[6px] items-center leading-[normal] overflow-clip px-[10px] py-[4px] relative rounded-[10px] shrink-0 text-[#0f8c33] whitespace-nowrap">
              <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0 text-[10px]" style={{ fontVariationSettings: "'wdth' 100" }}>✓</p>
              <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>Без сложной CRM</p>
            </div>
            <div className="bg-white content-stretch flex gap-[20px] items-start overflow-clip relative shrink-0">
              <div className="bg-white content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0">
                <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f8c33] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>+43%</p>
                <div className="bg-[#21b263] h-[4px] relative rounded-[2px] shrink-0 w-[40px]" />
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6b7885] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>конверсия продаж</p>
              </div>
              <div className="bg-white content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0">
                <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f8c33] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>x1,5</p>
                <div className="bg-[#21b263] h-[4px] relative rounded-[2px] shrink-0 w-[40px]" />
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6b7885] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>рост выручки</p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8c949e] text-[11px] opacity-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>за полгода</p>
            <div className="bg-white content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0">
              <div className="border-[1.25px] border-[#f6f7f9] border-solid relative rounded-[1000px] shrink-0 size-[40px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[1000px] size-full" src={imgTrust_Photo202508261509132} />
              </div>
              <div className="[word-break:break-word] bg-white content-stretch flex flex-col gap-[2px] items-start leading-[normal] overflow-clip relative shrink-0 whitespace-nowrap">
                <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0 text-[#121726] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>Casher</p>
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7885] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>магазин одежды</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ebedf2] h-px relative shrink-0 w-[600px]" />
      <div className="[word-break:break-word] content-stretch flex gap-[60px] items-start justify-center leading-[normal] overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="40002673:8316" data-name="stats">
        <div className="content-stretch flex flex-col gap-[4px] items-center overflow-clip relative shrink-0">
          <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0 text-[#108ef5] text-[32px]" style={{ fontVariationSettings: "'wdth' 100" }}>2 000+</p>
          <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7885] text-[13px]" style={{ fontVariationSettings: "'wdth' 100" }}>магазинов в Telegram</p>
        </div>
        <div className="content-stretch flex flex-col gap-[4px] items-center overflow-clip relative shrink-0">
          <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0 text-[#108ef5] text-[32px]" style={{ fontVariationSettings: "'wdth' 100" }}>1,5 млн</p>
          <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7885] text-[13px]" style={{ fontVariationSettings: "'wdth' 100" }}>заказов обработано</p>
        </div>
        <div className="content-stretch flex flex-col gap-[4px] items-center overflow-clip relative shrink-0">
          <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0 text-[#108ef5] text-[32px]" style={{ fontVariationSettings: "'wdth' 100" }}>15 минут</p>
          <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7885] text-[13px]" style={{ fontVariationSettings: "'wdth' 100" }}>на подключение</p>
        </div>
      </div>
    </div>
  );
}

function Pain() {
  return (
    <div className="bg-[#f6f7f9] content-stretch flex flex-col items-center px-[48px] py-[60px] relative size-full" data-node-id="40002524:8963" data-name="Pain">
      <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-[820px]" data-node-id="40002524:8964" data-name="section-head">
        <div className="h-[16px] relative shrink-0 w-[100px]" />
        <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#0a1519] text-[36px] text-center tracking-[-0.9px] w-[820px]" data-node-id="40002524:8968">
          Каждый день ваш магазин теряет выручку
        </p>
      </div>
      <div className="h-[48px] relative shrink-0 w-[100px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[928px]" data-node-id="40002524:8970" data-name="pain-grid">
        <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="40002667:8244" data-name="row">
          {[
            { title: 'Клиент остался без ответа', text: 'Менеджер может забыть ответить — и никто это не заметит. Клиент подождал час и купил у конкурента.' },
            { title: 'Уволился менеджер — клиенты ушли с ним', text: 'Переписка велась в личном Telegram. Кто этот клиент и чем интересовался, знает только бывший сотрудник.' },
            { title: 'Менеджеры обещают то, чего нет', text: 'Менеджер грубит клиенту, называет неверную цену или придумывает сроки доставки. Об этом вы узнаёте, когда клиент уже ушёл с негативом.' },
          ].map((card, i) => (
            <div key={`pain-bad-${i}`} className="bg-white border border-[#f5c7c7] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip p-[24px] relative rounded-[16px]" data-name="pain-card">
              <div className="bg-[#fae8e8] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[36px]">
                <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f04545] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>✕</p>
              </div>
              <div className="relative shrink-0 size-[8px]" />
              <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[#121726] text-[18px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>{card.title}</p>
              <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#667080] text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>{card.text}</p>
            </div>
          ))}
        </div>
        <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="40002667:8263" data-name="row">
          {[
            { title: 'Контроль чатов с клиентами', text: 'Руководитель открывает любой диалог и видит, как менеджер обрабатывает заявки и как общается с клиентами.' },
            { title: 'Магазин принимает заказы 24/7', text: 'Клиенты оформляют заказ в один клик в любое время суток, а вы не теряете выручку в нерабочее время.' },
            { title: 'Без сложных CRM', text: 'Доступ к перепискам и заказам прямо в Telegram. Если менеджер уволится, клиенты останутся у вас, а не на чужом телефоне.' },
          ].map((card, i) => (
            <div key={`pain-good-${i}`} className="bg-white border border-[#b8e8cf] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip p-[24px] relative rounded-[16px]" data-name="pain-card">
              <div className="bg-[#d9f7e8] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[36px]">
                <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#21b263] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>✓</p>
              </div>
              <div className="relative shrink-0 size-[8px]" />
              <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[#121726] text-[18px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>{card.title}</p>
              <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#667080] text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Price() {
  // Bar heights for the 30-day loss chart
  const bars = [
    [11, 0.21], [18, 0.24], [14, 0.22], [24, 0.27], [21, 0.25], [30, 0.3],
    [26, 0.28], [35, 0.33], [32, 0.31], [42, 0.36], [38, 0.34], [46, 0.38],
    [43, 0.37], [51, 0.41], [48, 0.39], [56, 0.43], [53, 0.41], [61, 0.45],
    [58, 0.44], [64, 0.47], [62, 0.46], [67, 0.49], [66, 0.48], [70, 0.5],
    [69, 0.49], [74, 0.52], [72, 0.51], [77, 0.53], [75, 0.53],
  ];
  return (
    <div className="bg-white content-stretch flex flex-col items-center px-[48px] py-[80px] relative size-full" data-node-id="40002524:9009" data-name="Price">
      <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-[928px]" data-node-id="40002524:9010" data-name="price-inner">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[432px]" data-node-id="40002524:9011" data-name="price-text">
          <div className="bg-[rgba(16,142,245,0.08)] content-stretch flex items-start overflow-clip px-[12px] py-[6px] relative rounded-[100px] shrink-0">
            <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#108ef5] text-[14px] tracking-[-0.14px] whitespace-nowrap">
              Цена бездействия
            </p>
          </div>
          <div className="h-[16px] relative shrink-0 w-[100px]" />
          <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#0a1519] text-[36px] tracking-[-0.9px] w-[432px]">
            Посчитайте, сколько вы теряете
          </p>
          <div className="h-[24px] relative shrink-0 w-[100px]" />
          <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#595959] text-[18px] tracking-[-0.18px] w-[432px]">
            Магазин получает 50 заявок в день, и хотя бы 10% теряются — это 5 потерянных клиентов ежедневно.
          </p>
          <div className="h-[16px] relative shrink-0 w-[100px]" />
          <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#595959] text-[18px] tracking-[-0.18px] w-[432px]">
            При среднем чеке 300 000 soʻm это 1 500 000 soʻm в день. Или 45 миллионов soʻm в месяц.
          </p>
          <div className="h-[32px] relative shrink-0 w-[100px]" />
          <div className="h-[28px] relative shrink-0 w-[100px]" />
          <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#e5484d] text-[15px] tracking-[-0.15px] w-[432px]">
            Не из-за плохого товара. Не из-за цены. Просто потому что ответили поздно — или не ответили вообще.
          </p>
          <div className="h-[28px] relative shrink-0 w-[100px]" />
          <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
            <a href={CTA_HREF} target="_blank" rel="noopener" className="contents no-underline">
              <div className="bg-[#108ef5] cursor-pointer content-stretch flex h-[52px] items-center justify-center overflow-clip px-[32px] relative rounded-[100px] shadow-[0px_20px_35px_0px_rgba(51,133,255,0.22)] shrink-0" data-name="btn-primary-l">
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
        <div className="bg-white border border-[rgba(0,0,0,0.06)] border-solid content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.06)] flex flex-col gap-[14px] items-center pb-[20px] relative rounded-[24px] shrink-0 w-[432px]" data-name="calc-card">
          <div className="bg-white border border-[rgba(0,0,0,0.06)] border-solid content-stretch flex flex-col items-start overflow-clip pb-[16px] pt-[18px] px-[20px] relative rounded-[16px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] shrink-0 w-[432px]" data-name="loss-chart">
            <div className="content-stretch flex items-center relative shrink-0 w-[221px]">
              <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0a1519] text-[13px] tracking-[-0.13px] whitespace-nowrap">
                Потери накапливаются каждый день
              </p>
              <div className="flex-[1_0_0] h-[100px] min-w-px relative" />
              <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#767d88] text-[11px] tracking-[0.22px] whitespace-nowrap">30 ДНЕЙ</p>
            </div>
            <div className="h-[14px] relative shrink-0 w-[100px]" />
            <div className="content-stretch flex gap-[3px] h-[80px] items-end relative shrink-0 w-full" data-name="bars">
              {bars.map(([h, op], i) => (
                <div key={`bar-${i}`} className="relative rounded-tl-[3px] rounded-tr-[3px] shrink-0 w-[10.167px]" style={{ height: `${h}px`, backgroundColor: `rgba(229,72,77,${op})` }} />
              ))}
              <div className="bg-[#e5484d] h-[80px] relative rounded-tl-[3px] rounded-tr-[3px] shadow-[0px_0px_14px_0px_rgba(229,71,77,0.35)] shrink-0 w-[10.167px]" />
            </div>
            <div className="h-[10px] relative shrink-0 w-[100px]" />
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="ch-foot">
              <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#767d88] text-[11px] tracking-[-0.11px] whitespace-nowrap">день 1 — 1,5 млн</p>
              <div className="flex-[1_0_0] h-[100px] min-w-px relative" />
              <div className="[word-break:break-word] content-stretch flex gap-[4px] items-start leading-[1.5] not-italic overflow-clip relative shrink-0 text-[11px] tracking-[-0.11px] whitespace-nowrap">
                <p className="font-['SF_Pro_Display:Regular',sans-serif] relative shrink-0 text-[#767d88]">день 30 —</p>
                <p className="font-['SF_Pro_Display:Bold',sans-serif] relative shrink-0 text-[#e5484d]">45 млн soʻm</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#767d88] text-[22px] text-center tracking-[-0.22px] w-[372px]">↓</p>
          <div className="bg-[#fff1f1] border border-[rgba(229,72,77,0.2)] border-solid content-stretch flex flex-col items-center overflow-clip px-[24px] py-[22px] relative rounded-[16px] shadow-[0px_10px_30px_0px_rgba(229,71,77,0.08)] shrink-0 w-full" data-name="calc-total">
            <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5484d] text-[13px] tracking-[0.78px] whitespace-nowrap">ПОТЕРИ В МЕСЯЦ</p>
            <div className="h-[8px] relative shrink-0 w-[100px]" />
            <div className="[word-break:break-word] content-stretch flex gap-[8px] items-baseline not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="total-num">
              <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-none relative shrink-0 text-[#e5484d] text-[44px] tracking-[-1.76px]">45 000 000</p>
              <p className="font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] relative shrink-0 text-[20px] text-[rgba(229,72,77,0.8)] tracking-[-0.2px]">soʻm</p>
            </div>
          </div>
          <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#767d88] text-[12px] text-center tracking-[-0.12px] w-[372px]">Средний магазин · 30 рабочих дней</p>
        </div>
      </div>
    </div>
  );
}

function How() {
  return (
    <div className="bg-[#f6f7f9] content-stretch flex flex-col items-center px-[48px] py-[50px] relative size-full" data-node-id="40002524:9242" data-name="How">
      <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-[820px]" data-name="section-head">
        <div className="bg-[rgba(16,142,245,0.08)] content-stretch flex items-start overflow-clip px-[12px] py-[6px] relative rounded-[100px] shrink-0" data-name="kicker">
          <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#108ef5] text-[14px] tracking-[-0.14px] whitespace-nowrap">
            Старт за 5 минут
          </p>
        </div>
        <div className="h-[16px] relative shrink-0 w-[100px]" />
        <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#0a1519] text-[36px] text-center tracking-[-0.9px] w-[820px]">
          Как начать работу — три шага
        </p>
      </div>
      <div className="h-[48px] relative shrink-0 w-[100px]" />
      <div className="content-stretch flex gap-[20px] items-start overflow-clip relative shrink-0 w-[928px]" data-name="steps">
        {/* Step 1 */}
        <div className="bg-white border border-[rgba(0,0,0,0.06)] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip pb-[20px] pt-[24px] px-[20px] relative rounded-[24px]" data-name="step">
          <div className="content-stretch flex items-center relative shrink-0 w-full">
            <div className="bg-[#108ef5] content-stretch flex items-start overflow-clip px-[14px] py-[6px] relative rounded-[100px] shrink-0">
              <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[13px] text-white tracking-[-0.13px] whitespace-nowrap">Шаг 1</p>
            </div>
            <div className="flex-[1_0_0] min-w-px relative" />
            <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#767d88] text-[12px] tracking-[-0.12px] whitespace-nowrap">5 минут</p>
          </div>
          <div className="h-[12px] relative shrink-0 w-[100px]" />
          <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.2] min-w-full relative shrink-0 text-[#0a1519] text-[22px] tracking-[-0.44px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>Создайте магазин</p>
          <div className="h-[10px] relative shrink-0 w-[100px]" />
          <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#595959] text-[15px] tracking-[-0.15px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>Загрузите товары, включите доставку и оплату.</p>
          <div className="h-[20px] relative shrink-0 w-[100px]" />
          <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[18px] relative rounded-[16px] shrink-0 w-full" data-name="m1-setup">
            {[
              { label: 'Каталог', value: '24 SKU' },
              { label: 'Оплата', value: 'Click, Payme, наличные' },
              { label: 'Доставка', value: '3 способа' },
            ].map((row, i) => (
              <div key={`m1-${i}`} className="bg-white content-stretch flex gap-[12px] items-center overflow-clip py-[4px] relative shrink-0" data-name="row">
                <div className="bg-[rgba(15,186,130,0.12)] content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[24px]">
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#0fba82] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>✓</p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{row.label}</p>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6b7885] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{row.value}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Step 2 */}
        <div className="bg-white border border-[rgba(0,0,0,0.06)] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip pb-[20px] pt-[24px] px-[20px] relative rounded-[24px]" data-name="step">
          <div className="content-stretch flex items-center relative shrink-0 w-full">
            <div className="bg-[#108ef5] content-stretch flex items-start overflow-clip px-[14px] py-[6px] relative rounded-[100px] shrink-0">
              <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[13px] text-white tracking-[-0.13px] whitespace-nowrap">Шаг 2</p>
            </div>
            <div className="flex-[1_0_0] min-w-px relative" />
            <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#767d88] text-[12px] tracking-[-0.12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>1 минута</p>
          </div>
          <div className="h-[12px] relative shrink-0 w-[100px]" />
          <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.2] min-w-full relative shrink-0 text-[#0a1519] text-[22px] tracking-[-0.44px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>Выдайте доступ менеджерам</p>
          <div className="h-[10px] relative shrink-0 w-[100px]" />
          <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#595959] text-[15px] tracking-[-0.15px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>Обрабатывайте заявки и вопросы клиентов.</p>
          <div className="h-[20px] relative shrink-0 w-[100px]" />
          <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[18px] relative rounded-[16px] shrink-0 w-full" data-name="m2-chat">
            <div className="bg-white content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full">
              <div className="bg-white content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0">
                <div className="bg-[rgba(38,99,235,0.15)] content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[24px]">
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#2663eb] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Ю</p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Юлия К.</p>
              </div>
              <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#99a6b2] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>1 мин</p>
            </div>
            <div className="bg-[#f7fafc] content-stretch flex items-start overflow-clip px-[12px] py-[10px] relative rounded-[12px] shrink-0">
              <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#121726] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Есть Nike Air Max 39?</p>
            </div>
            <div className="bg-white content-stretch flex items-start justify-end overflow-clip relative shrink-0 w-full">
              <div className="bg-[#e8f2ff] content-stretch flex items-start overflow-clip px-[12px] py-[10px] relative rounded-[12px] shrink-0 w-[220px]">
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#121726] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Да, 1290000 soʻm. Оформлять?</p>
              </div>
            </div>
            <div className="bg-[rgba(15,186,130,0.1)] content-stretch flex gap-[10px] items-center overflow-clip px-[12px] py-[10px] relative rounded-[12px] shrink-0 w-full">
              <div className="bg-[#0fba82] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[20px]">
                <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[11px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>✓</p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] overflow-clip relative shrink-0 whitespace-nowrap">
                <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-[#121726] text-[13px]" style={{ fontVariationSettings: "'wdth' 100" }}>Заказ оформлен</p>
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7885] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>1 290 000 soʻm</p>
              </div>
            </div>
          </div>
        </div>
        {/* Step 3 */}
        <div className="bg-white border border-[rgba(0,0,0,0.06)] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip pb-[20px] pt-[24px] px-[20px] relative rounded-[24px]" data-name="step">
          <div className="content-stretch flex items-center relative shrink-0 w-full">
            <div className="bg-[#108ef5] content-stretch flex items-start overflow-clip px-[14px] py-[6px] relative rounded-[100px] shrink-0">
              <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[13px] text-white tracking-[-0.13px] whitespace-nowrap">Шаг 3</p>
            </div>
            <div className="flex-[1_0_0] min-w-px relative" />
            <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#767d88] text-[12px] tracking-[-0.12px] whitespace-nowrap">автоматически</p>
          </div>
          <div className="h-[12px] relative shrink-0 w-[100px]" />
          <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.2] min-w-full relative shrink-0 text-[#0a1519] text-[22px] tracking-[-0.44px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>Отслеживайте продажи</p>
          <div className="h-[10px] relative shrink-0 w-[100px]" />
          <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#595959] text-[15px] tracking-[-0.15px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>Контролируйте все диалоги и заказы — в одном месте в Telegram.</p>
          <div className="h-[20px] relative shrink-0 w-[100px]" />
          <div className="bg-white border border-[#ebedf2] border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[18px] relative rounded-[16px] shrink-0 w-full" data-name="m3-stats">
            {[
              { icon: '📦', iconBg: 'rgba(38,99,235,0.12)', iconColor: '#2663eb', label: 'Заказов сегодня', value: '47' },
              { icon: '💰', iconBg: 'rgba(15,186,130,0.12)', iconColor: '#0fba82', label: 'Выручка', value: '6,2 млн soʻm' },
              { icon: '👥', iconBg: 'rgba(140,92,245,0.12)', iconColor: '#8c5cf5', label: 'Новых клиентов', value: '12' },
            ].map((row, i) => (
              <div key={`m3-${i}`} className="bg-white content-stretch flex gap-[12px] items-center overflow-clip py-[4px] relative shrink-0" data-name="row">
                <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[24px]" style={{ backgroundColor: row.iconBg }}>
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100", color: row.iconColor }}>{row.icon}</p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{row.label}</p>
                <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6b7885] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{row.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[40px] relative shrink-0 w-[100px]" />
      <div className="content-stretch flex items-center justify-center relative shrink-0">
        <a href={CTA_HREF} target="_blank" rel="noopener" className="contents no-underline">
          <div className="bg-[#108ef5] cursor-pointer content-stretch flex h-[52px] items-center justify-center overflow-clip px-[32px] relative rounded-[100px] shadow-[0px_20px_35px_0px_rgba(51,133,255,0.22)] shrink-0" data-name="btn-primary-l">
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
    <div className="bg-white content-stretch flex flex-col items-center px-[48px] py-[80px] relative size-full" data-node-id="40002524:9133" data-name="KeyFeatures">
      <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-[820px]" data-name="section-head">
        <div className="bg-[rgba(16,142,245,0.08)] content-stretch flex items-start overflow-clip px-[12px] py-[6px] relative rounded-[100px] shrink-0">
          <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#108ef5] text-[14px] tracking-[-0.14px] whitespace-nowrap">
            Главные функции
          </p>
        </div>
        <div className="h-[16px] relative shrink-0 w-[100px]" />
        <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#0a1519] text-[36px] text-center tracking-[-0.9px] w-[820px]">
          Не просто переписки — а система продаж
        </p>
      </div>
      <div className="h-[48px] relative shrink-0 w-[100px]" />
      <div className="content-stretch flex gap-[80px] items-center relative shrink-0 w-[928px]" data-name="kf-card">
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[424px]" data-name="kf-text">
          <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.18] not-italic relative shrink-0 text-[#0a1519] text-[30px] tracking-[-0.75px] w-[424px]">
            Статусы заявок — сразу видно, кому не ответили
          </p>
          <div className="h-[16px] relative shrink-0 w-[100px]" />
          <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.55] relative shrink-0 text-[#595959] text-[16px] tracking-[-0.16px] w-[424px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Каждый чат имеет статус: «новый», «открыт» или «закрыт». Не нужно запоминать, кому уже ответили, а кому — нет.
          </p>
          <div className="h-[20px] relative shrink-0 w-[100px]" />
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0" data-name="bullets">
            {['Новые заявки выделяются автоматически', 'Отслеживайте, на какие чаты не ответили'].map((b, i) => (
              <div key={`bsta-${i}`} className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-name="b">
                <div className="bg-[rgba(16,142,245,0.1)] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[20px]">
                  <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#108ef5] text-[11px] tracking-[-0.11px] whitespace-nowrap">✓</p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.45] not-italic relative shrink-0 text-[#0a1519] text-[15px] tracking-[-0.15px] w-[394px]">{b}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[10px] items-start overflow-clip p-[16px] relative rounded-[20px] shadow-[0px_12px_32px_0px_rgba(13,18,31,0.08)] shrink-0 w-[440px]" data-name="kf-status-board">
          {[
            { label: 'Новый', labelColor: '#2663eb', labelBg: 'rgba(38,99,235,0.12)', count: '3', cards: [{ name: 'Юлия К.', msg: 'Есть Nike?', time: 'только что' }, { name: 'Зухра М.', msg: 'Хочу заказать', time: '1 мин' }] },
            { label: 'Открыт', labelColor: '#f5a624', labelBg: 'rgba(245,166,36,0.12)', count: '12', cards: [{ name: 'Акмал Т.', msg: 'Когда доставка?', time: '23 мин' }, { name: 'Дилшод М.', msg: 'Адрес?', time: '5 мин' }] },
            { label: 'Закрыт', labelColor: '#0fba82', labelBg: 'rgba(15,186,130,0.12)', count: '48', cards: [{ name: 'Мадина Х.', msg: 'Получила 👍', time: '2 мин' }, { name: 'Малика О.', msg: 'Спасибо!', time: '15 мин' }] },
          ].map((col, i) => (
            <div key={`col-${i}`} className="bg-[#f7fafc] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px overflow-clip px-[10px] py-[12px] relative rounded-[14px]" data-name={`col-${col.label}`}>
              <div className="bg-white content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full">
                <div className="content-stretch flex items-start overflow-clip px-[8px] py-[3px] relative rounded-[8px] shrink-0" style={{ backgroundColor: col.labelBg }}>
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100", color: col.labelColor }}>{col.label}</p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#6b7885] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{col.count}</p>
              </div>
              {col.cards.map((card, j) => (
                <div key={`card-${i}-${j}`} className="[word-break:break-word] bg-white border border-[#ebedf2] border-solid content-stretch flex flex-col gap-[5px] items-start leading-[normal] overflow-clip p-[10px] relative rounded-[10px] shrink-0 w-full whitespace-nowrap" data-name="stat-card">
                  <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-[#121726] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>{card.name}</p>
                  <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7885] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>{card.msg}</p>
                  <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#99a6b2] text-[10px]" style={{ fontVariationSettings: "'wdth' 100" }}>{card.time}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="h-[80px] relative shrink-0 w-[100px]" />
      <div className="content-stretch flex gap-[80px] items-center relative shrink-0 w-[928px]" data-name="kf-card-rev">
        <div className="bg-white content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[16px] relative rounded-[20px] shadow-[0px_12px_32px_0px_rgba(13,18,31,0.08)] shrink-0 w-[440px]" data-name="kf-segment-grid">
          {[
            [
              { dot: imgKF_Ellipse, num: '132', label: 'Бросили корзину', color: '#f5a624', cta: '→ догнать' },
              { dot: imgKF_Ellipse1, num: '87', label: 'Не оплатили', color: '#2663eb', cta: '→ напомнить' },
            ],
            [
              { dot: imgKF_Ellipse2, num: '219', label: 'Купили недавно', color: '#0fba82', cta: '→ допродать' },
              { dot: imgKF_Ellipse3, num: '1 247', label: 'Не активны 30 дней', color: '#8c5cf5', cta: '→ вернуть промо' },
            ],
          ].map((row, i) => (
            <div key={`segrow-${i}`} className="bg-white content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full">
              {row.map((seg, j) => (
                <div key={`seg-${i}-${j}`} className="bg-white border border-[#ebedf2] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip p-[16px] relative rounded-[12px]" data-name={`seg-${seg.label}`}>
                  <div className="relative shrink-0 size-[8px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={seg.dot} />
                  </div>
                  <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#121726] text-[26px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{seg.num}</p>
                  <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{seg.label}</p>
                  <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100", color: seg.color }}>{seg.cta}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[424px]" data-name="kf-text-2">
          <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.18] not-italic relative shrink-0 text-[#0a1519] text-[30px] tracking-[-0.75px] w-[424px]">
            Рассылки по готовым сегментам — возвращайте клиентов
          </p>
          <div className="h-[16px] relative shrink-0 w-[100px]" />
          <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#595959] text-[16px] tracking-[-0.16px] w-[424px]">
            Сегменты собираются автоматически — на основе поведения клиента. Отправьте сообщение тем, кто бросил корзину, кто давно не покупал или только что оформил заказ.
          </p>
          <div className="h-[20px] relative shrink-0 w-[100px]" />
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0" data-name="bullets2">
            {[
              'Бросил корзину — догнать персональным сообщением',
              'Не оплатил — напомнить за 1 клик',
              'Купил недавно — предложить дополнение',
              'Не активен 7 / 30 дней — вернуть промокодом',
            ].map((b, i) => (
              <div key={`bseg-${i}`} className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-name="b">
                <div className="bg-[rgba(16,142,245,0.1)] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[20px]">
                  <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#108ef5] text-[11px] tracking-[-0.11px] whitespace-nowrap">✓</p>
                </div>
                <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.45] not-italic relative shrink-0 text-[#0a1519] text-[15px] tracking-[-0.15px] w-[394px]">{b}</p>
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
        'Импорт из Мойсклад, 1С, Billz',
        'Добавление товаров вручную',
        'Автоматическое обновление цен и остатков',
      ],
      tags: [
        { dot: imgSol_Ellipse, label: 'МойСклад' },
        { dot: imgSol_Ellipse1, label: '1С' },
        { dot: imgSol_Ellipse2, label: 'Billz' },
      ],
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
      tags: [
        { dot: imgSol_Ellipse1, label: 'Я.Доставка' },
        { dot: imgSol_Ellipse2, label: 'Click' },
        { dot: imgSol_Ellipse3, label: 'Uzum nasiya' },
        { dot: imgSol_Ellipse4, label: 'Payme' },
      ],
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
      tags: [
        { dot: imgSol_Ellipse5, label: 'Я.Метрика' },
        { dot: imgSol_Ellipse, label: 'Telegram Ads' },
        { dot: imgSol_Ellipse6, label: 'Я.Директ' },
      ],
    },
    {
      title: '4. Управляйте заказами',
      items: [
        'Интеграции с AmoCRM, Битрикс24',
        'Уведомления о заказах в Telegram',
        'Все диалоги с клиентами со статусами — в Telegram-боте',
      ],
      tags: [
        { dot: imgSol_Ellipse7, label: 'amoCRM' },
        { dot: imgSol_Ellipse, label: 'МойСклад' },
        { dot: imgSol_Ellipse1, label: '1С' },
        { dot: imgSol_Ellipse2, label: 'Битрикс24' },
      ],
    },
  ];
  return (
    <div className="bg-[#f6f7f9] content-stretch flex flex-col items-center px-[48px] py-[60px] relative size-full" data-node-id="40002524:9108" data-name="Solution">
      <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-[820px]" data-name="section-head">
        <div className="h-[16px] relative shrink-0 w-[100px]" />
        <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#0a1519] text-[36px] text-center tracking-[-0.9px] w-[820px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Готовые интеграции без разработки
        </p>
      </div>
      <div className="h-[48px] relative shrink-0 w-[100px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[928px]" data-name="sol-grid">
        {[0, 2].map((startIdx) => (
          <div key={`sr-${startIdx}`} className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full">
            {cards.slice(startIdx, startIdx + 2).map((card, i) => (
              <div key={`sol-${startIdx + i}`} className="bg-white border border-[#ebedf2] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip p-[28px] relative rounded-[20px] shadow-[0px_8px_24px_0px_rgba(13,18,31,0.06)]" data-name={`sol-card-${startIdx + i + 1}`}>
                <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#121726] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{card.title}</p>
                <div className="bg-white content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full">
                  {card.items.map((item, j) => (
                    <div key={`item-${startIdx + i}-${j}`} className="bg-white content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full">
                      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[16px]">
                        <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f8c33] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>✓</p>
                      </div>
                      <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#121726] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>{item}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-white content-start flex flex-wrap gap-[8px] items-start overflow-clip pt-[12px] relative shrink-0 w-full">
                  {card.tags.map((tag, j) => (
                    <div key={`tag-${startIdx + i}-${j}`} className="bg-white border border-[#ebedf2] border-solid content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[10px] py-[6px] relative rounded-[8px] shadow-[0px_2px_6px_0px_rgba(13,18,31,0.06)] shrink-0">
                      <div className="relative shrink-0 size-[8px]">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={tag.dot} />
                      </div>
                      <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#121726] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{tag.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Pricing({ isYear, setPeriod }: { isYear: boolean; setPeriod: (p: 'month' | 'year') => void }) {
  const sharedItems = [
    'Диалоги с клиентами',
    'Витрина для маркетплейсов',
    'Каталог и товары',
    'Прием платежей',
    'Интеграция со службами доставки',
    'Интеграция с CRM',
    'Доступ к аналитике',
    'Импорт товаров из XLS/XML',
    'Рассылки',
    'Промокоды',
  ];

  const startCard = {
    name: 'Старт',
    price: isYear ? '399 000' : '499 000',
    hint: isYear ? '499 000 soʻm/мес' : '−20% при оплате за год',
    limit: 'До 100 товаров · 1 активный магазин',
    items: [
      ...sharedItems.map((t) => ({ text: t, ok: true })),
      { text: 'Интеграция с МойСклад / 1С', ok: false },
      { text: 'Периодический импорт по ссылке', ok: false },
      { text: 'Нет возможности отключить «Сделано при помощи TGShop»', ok: false },
    ],
    highlight: false,
  };
  const businessCard = {
    name: 'Бизнес',
    price: isYear ? '559 000' : '699 000',
    hint: isYear ? '699 000 soʻm/мес' : '−20% при оплате за год',
    limit: 'До 1000 товаров · до 5 активных магазинов',
    items: [
      ...sharedItems.map((t) => ({ text: t, ok: true })),
      { text: 'Отсутствует реклама сервиса', ok: true },
      { text: 'Интеграция с МойСклад / 1С', ok: false },
      { text: 'Периодический импорт по ссылке', ok: false },
    ],
    highlight: true,
  };
  const premiumCard = {
    name: 'Премиум',
    price: isYear ? '799 000' : '999 000',
    hint: isYear ? '999 000 soʻm/мес' : '−20% при оплате за год',
    limit: 'До 15000 товаров · до 10 активных магазинов',
    items: [
      ...sharedItems.map((t) => ({ text: t, ok: true })),
      { text: 'Интеграция с МойСклад / 1С', ok: true },
      { text: 'Периодический импорт по ссылке', ok: true },
      { text: 'Отсутствует реклама сервиса', ok: true },
      { text: 'Приоритетная поддержка', ok: true },
    ],
    highlight: false,
  };

  const cards = [businessCard, startCard, premiumCard];

  return (
    <div className="bg-[#f6f7f9] content-stretch flex flex-col items-center px-[48px] py-[80px] relative size-full" data-node-id="40002524:9389" data-name="Pricing">
      <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-[820px]" data-name="section-head">
        <div className="bg-[rgba(16,142,245,0.08)] content-stretch flex items-start overflow-clip px-[12px] py-[6px] relative rounded-[100px] shrink-0">
          </div>
        <div className="h-[16px] relative shrink-0 w-[100px]" />
        <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#0a1519] text-[36px] text-center tracking-[-0.9px] w-[820px]">
          TGShop Chat включён во все тарифы TGShop
        </p>
      </div>
      <div className="h-[16px] relative shrink-0 w-[100px]" />
      <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#595959] text-[16px] text-center tracking-[-0.16px] w-[620px] whitespace-pre-wrap">{`Один тариф — магазин, диалоги со статусами, интеграции. Без скрытых доплат.`}</p>
      <div className="h-[40px] relative shrink-0 w-[100px]" />
      <div className="bg-white border border-[rgba(230,232,236,0.6)] border-solid content-stretch flex items-start p-[4px] relative rounded-[100px] shrink-0" data-name="bt">
        <button
          onClick={() => setPeriod('month')}
          className={`content-stretch flex items-center overflow-clip px-[22px] py-[10px] relative rounded-[100px] shrink-0 cursor-pointer border-0 ${!isYear ? 'bg-[#108ef5] shadow-[0px_4px_12px_0px_rgba(51,133,255,0.25)]' : 'bg-transparent'}`}
          data-name="opt"
        >
          <p className={`[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] tracking-[-0.14px] whitespace-nowrap ${!isYear ? 'text-white' : 'text-[#595959]'}`}>
            Помесячно
          </p>
        </button>
        <button
          onClick={() => setPeriod('year')}
          className={`content-stretch flex items-center overflow-clip px-[22px] py-[10px] relative rounded-[100px] shrink-0 cursor-pointer border-0 ${isYear ? 'bg-[#108ef5] shadow-[0px_4px_12px_0px_rgba(51,133,255,0.25)]' : 'bg-transparent'}`}
          data-name="opt"
        >
          <p className={`[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] tracking-[-0.14px] whitespace-nowrap ${isYear ? 'text-white' : 'text-[#595959]'}`}>
            За год · −20%
          </p>
        </button>
      </div>
      <div className="h-[48px] relative shrink-0 w-[100px]" />
      <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="pricing-grid">
        {cards.map((card, i) => (
          <div
            key={`pc-${i}`}
            className={
              card.highlight
                ? 'bg-white border-2 border-[#108ef5] border-solid content-stretch drop-shadow-[0px_12px_20px_rgba(51,133,255,0.15)] flex flex-col items-start pb-[32px] pt-[36px] px-[28px] relative rounded-[24px] shrink-0 w-[480px]'
                : 'bg-white border border-[rgba(230,232,236,0.5)] border-solid content-stretch flex flex-col items-start overflow-clip pb-[32px] pt-[36px] px-[28px] relative rounded-[24px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.04)] shrink-0 w-[480px]'
            }
            data-name="price-card"
          >
            {card.highlight && (
              <>
                <div className="bg-[#108ef5] content-stretch flex items-center justify-center overflow-clip px-[14px] py-[6px] relative rounded-[100px] shrink-0" data-name="tag">
                  <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.12px] whitespace-nowrap">⚡ Популярный</p>
                </div>
                <div className="h-[16px] relative shrink-0 w-[100px]" />
              </>
            )}
            <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#595959] text-[18px] tracking-[-0.18px] whitespace-nowrap">{card.name}</p>
            <div className="h-[12px] relative shrink-0 w-[100px]" />
            <div className="[word-break:break-word] content-stretch flex gap-[6px] items-baseline leading-[1.5] overflow-clip relative shrink-0 whitespace-nowrap" data-name="pr">
              <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0 text-[#0a1519] text-[40px] tracking-[-1.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>{card.price}</p>
              <p className="font-['SF_Pro_Display:Regular',sans-serif] not-italic relative shrink-0 text-[#767d88] text-[14px] tracking-[-0.14px]">soʻm / мес</p>
            </div>
            <div className="h-[6px] relative shrink-0 w-[100px]" />
            <p className={`[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#767d88] text-[13px] tracking-[-0.13px] whitespace-nowrap ${isYear ? 'line-through' : ''}`} style={{ fontVariationSettings: "'wdth' 100" }}>{card.hint}</p>
            <div className="h-[16px] relative shrink-0 w-[100px]" />
            <div className="bg-[rgba(16,142,245,0.08)] content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="lim">
              <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[#108ef5] text-[13px] tracking-[-0.13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{card.limit}</p>
            </div>
            <div className="h-[20px] relative shrink-0 w-[100px]" />
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0" data-name="ls">
              {card.items.map((it, j) => (
                <div key={`li-${i}-${j}`} className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-name="li">
                  <div className={`content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px] ${it.ok ? 'bg-[rgba(33,178,99,0.12)]' : 'bg-[#fad9d9]'}`}>
                    <p className={`[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[10px] tracking-[-0.1px] whitespace-nowrap ${it.ok ? 'text-[#0f8c33]' : 'text-[#f04545]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>{it.ok ? '✓' : '✕'}</p>
                  </div>
                  <p className={`[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[14px] tracking-[-0.14px] w-[400px] ${it.ok ? 'text-[#121726]' : 'text-[#73808c]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>{it.text}</p>
                </div>
              ))}
            </div>
            <div className="h-[24px] relative shrink-0 w-[100px]" />
            <a href={CTA_HREF} target="_blank" rel="noopener" className="contents no-underline">
              {card.highlight ? (
                <div className="bg-[#108ef5] cursor-pointer content-stretch flex h-[48px] items-center justify-center overflow-clip px-[32px] relative rounded-[100px] shadow-[0px_12px_24px_0px_rgba(51,133,255,0.25)] shrink-0 w-full" data-name="btn">
                  <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.15px] whitespace-nowrap">Начать бесплатно</p>
                </div>
              ) : (
                <div className="border-[1.5px] border-[rgba(16,142,245,0.3)] border-solid content-stretch cursor-pointer flex h-[48px] items-center justify-center overflow-clip px-[32px] relative rounded-[100px] shrink-0 w-full" data-name="btn">
                  <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#108ef5] text-[15px] tracking-[-0.15px] whitespace-nowrap">Начать бесплатно</p>
                </div>
              )}
            </a>
          </div>
        ))}
      </div>
      <div className="h-[32px] relative shrink-0 w-[100px]" />
      <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#767d88] text-[14px] text-center tracking-[-0.14px] w-[928px]">
        14 дней бесплатно · карта не нужна · отмена в любой момент
      </p>
    </div>
  );
}

function CtaFinal() {
  return (
    <div className="bg-[#0a151a] content-stretch flex flex-col items-center px-[48px] py-[80px] relative size-full" data-node-id="40002524:9576" data-name="CTA Final">
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-[820px]" data-name="cta-inner">
        <p className="[word-break:break-word] font-['SF_Pro_Display:Bold',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[36px] text-center text-white tracking-[-0.9px] w-[820px]">
          Начните сегодня и перестаньте терять заказы в Telegram
        </p>
        <div className="h-[24px] relative shrink-0 w-[100px]" />
        <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.7)] text-center tracking-[-0.18px] w-[720px]">
          Каждую минуту, пока вы не подключили TGShop, кто-то из ваших клиентов не дождался ответа и ушёл к конкуренту.
        </p>
        <div className="h-[36px] relative shrink-0 w-[100px]" />
        <a href={CTA_HREF} target="_blank" rel="noopener" className="contents no-underline">
          <div className="bg-white cursor-pointer content-stretch flex h-[52px] items-center justify-center overflow-clip px-[32px] relative rounded-[100px] shadow-[0px_20px_40px_0px_rgba(0,0,0,0.3)] shrink-0" data-name="btn-primary-l">
            <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#108ef5] text-[16px] tracking-[-0.16px] whitespace-nowrap">
              Создать Telegram-магазин бесплатно →
            </p>
          </div>
        </a>
        <div className="h-[18px] relative shrink-0 w-[100px]" />
        <p className="[word-break:break-word] font-['SF_Pro_Display:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.5)] text-center tracking-[-0.13px] whitespace-nowrap">
          14 дней бесплатно · отмена в любой момент
        </p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#121721] border border-[rgba(0,0,0,0.04)] border-solid content-stretch flex flex-col items-start pb-[24px] pt-[48px] px-[48px] relative size-full" data-node-id="40002524:9586" data-name="Footer">
      <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="footer-top">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[1.5] overflow-clip relative shrink-0 w-[260px]" data-name="fb">
          <div className="content-stretch flex font-['SF_Pro:Bold',sans-serif] font-bold gap-[4px] items-baseline overflow-clip relative shrink-0 text-[20px] text-white tracking-[-0.4px] whitespace-nowrap" data-name="br">
            <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>TGShop</p>
            <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>Chat</p>
          </div>
          <p className="font-['SF_Pro:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#a6b0bf] text-[14px] tracking-[-0.14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Все Telegram-чаты магазина в одном кабинете. Часть экосистемы TGShop.
          </p>
        </div>
        {[
          { title: 'Полезные материалы', links: [
            { label: 'Блог', href: 'https://tgshop.io/blog' },
            { label: 'FAQ', href: 'https://tgshop.io/faq' },
            { label: 'Инструкции', href: 'https://docs.tgshop.io/uz/telegramda-dokon-ochish/tezkor-boshlash' },
          ]},
          { title: 'Решения', links: [
            { label: 'Telegram-магазин', href: 'https://tgshop.io/blog/instrukciya-kak-sozdat-magazin-v-telegram-po-shagam/' },
            { label: 'TGShop Узбекистан', href: 'https://uz.tgshop.io' },
          ]},
          { title: 'Поддержка', links: [
            { label: 'Связаться', href: 'https://t.me/TGShopHelp_bot' },
            { label: 'Политика данных', href: 'https://tgshop.io/privacypolicy/' },
            { label: 'Правила использования', href: 'https://tgshop.io/useragreement/' },
          ]},
        ].map((col, i) => (
          <div key={`fc-${i}`} className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip relative" data-name="fc">
            <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[1.5] relative shrink-0 text-[14px] text-white tracking-[-0.14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{col.title}</p>
            <div className="h-[4px] relative shrink-0 w-[100px]" />
            {col.links.map((l, j) => (
              <a key={`fl-${i}-${j}`} className="[word-break:break-word] block font-['SF_Pro:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#a6b0bf] text-[14px] tracking-[-0.14px] whitespace-nowrap" href={l.href} style={{ fontVariationSettings: "'wdth' 100" }} target="_blank" rel="noopener">
                <p className="cursor-pointer leading-[1.5]">{l.label}</p>
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="h-[32px] relative shrink-0 w-[100px]" />
      <div className="bg-[rgba(0,0,0,0.06)] h-px relative shrink-0 w-[928px]" />
      <div className="h-[20px] relative shrink-0 w-[100px]" />
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#a6b0bf] text-[12px] tracking-[-0.12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        © 2026 TGShop. Все права защищены.
      </p>
    </div>
  );
}

export default function LandingTablet() {
  const [period, setPeriod] = useState<'month' | 'year'>('year');
  const isYear = period === 'year';
  return (
    <div className="bg-white flex flex-col items-center w-[1024px]">
      <Header />
      <Hero />
      <Trust />
      <Pain />
      <Price />
      <How />
      <KeyFeatures />
      <Solution />
      <Pricing isYear={isYear} setPeriod={setPeriod} />
      <CtaFinal />
      <Footer />
    </div>
  );
}
