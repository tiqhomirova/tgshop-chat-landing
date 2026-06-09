// Region-specific content map. Source files import `T` and use its fields
// inline instead of hardcoding region-specific strings. At build time
// VITE_REGION (set by vite.config) picks between RU and UZ content.

export type Region = 'ru' | 'uz';

export const REGION: Region = (import.meta.env.VITE_REGION as Region) || 'uz';

interface RegionContent {
  // Pricing — monthly tariffs
  priceStarterMonth: string;       // "499 000 soʻm/мес" / "3 290 ₽/мес"
  priceBusinessMonth: string;
  priceProMonth: string;
  // Pricing — yearly (-20% per-month)
  priceStarterYear: string;
  priceBusinessYear: string;
  priceProYear: string;
  // Calc "Цена бездействия" — daily & monthly loss numbers
  lossPerDay: string;              // "1 500 000 soʻm" / "15 000 ₽"
  lossPerMonth: string;            // "45 миллионов soʻm" / "450 000 ₽"
  lossPerMonthShort: string;       // "1,5 млн" / "15 000 ₽"  (day-1 label)
  lossMonthEnd: string;            // "45 млн soʻm" / "450 000 ₽" (day-30 label)
  avgCheck: string;                // "300 000 soʻm" / "3 000 ₽"
  // Calc body sentence (one big phrase, walker key in dict)
  calcBody: string;
  // Hero chat-message price reply
  chatPriceReply: string;          // "Да, 1290000 soʻm. Оформлять?" / "Да, 12 900 ₽. Оформлять?"
  // Hero "Заказ оформлен" green pill amount
  chatOrderSum: string;            // "1 290 000 soʻm" / "12 900 ₽"
  // Hero Around-You badge
  zeroAdsBadge: string;            // "0 sum on рекламу" / "0 ₽ на рекламу"
  // Footer brand line
  footerBrand: string;             // "TGShop Узбекистан" / "TGShop"
  // Currency unit suffix (where the standalone "soʻm" appears)
  currency: string;                // "soʻm" / "₽"
  // Integration chip names (Solution section, 4 payment chips + 1 import-card name)
  paymentChip1: string;            // "Я.Доставка" / "СБП"
  paymentChip2: string;            // "Click" / "T-Pay"
  paymentChip3: string;            // "Uzum nasiya" / "СберPay"
  paymentChip4: string;            // "Payme" / "Сплит"
  importChip3: string;             // "Billz" / "YCLIENTS"
  importLineWithChips: string;     // "Импорт из Мойсклад, 1С, Billz" / "Импорт из Мойсклад, 1С, YCLIENTS"
  setupPayments: string;           // "Click, Payme, наличные" / "Карта, СБП, наличные"
  // Region flag for conditional rendering of UZ-only icons (Я.Доставка/Click/…)
  isRU: boolean;
}

const UZ: RegionContent = {
  priceStarterMonth:  "499 000 soʻm/мес",
  priceBusinessMonth: "699 000 soʻm/мес",
  priceProMonth:      "999 000 soʻm/мес",
  priceStarterYear:   "399 200 soʻm/мес",
  priceBusinessYear:  "559 200 soʻm/мес",
  priceProYear:       "799 200 soʻm/мес",
  lossPerDay:         "1 500 000 soʻm",
  lossPerMonth:       "45 миллионов soʻm",
  lossPerMonthShort:  "1,5 млн",
  lossMonthEnd:       "45 млн soʻm",
  avgCheck:           "300 000 soʻm",
  calcBody:           "При среднем чеке 300 000 soʻm это 1 500 000 soʻm в день. Или 45 миллионов soʻm в месяц.",
  chatPriceReply:     "Да, 1290000 soʻm. Оформлять?",
  chatOrderSum:       "1 290 000 soʻm",
  zeroAdsBadge:       "0 сум на рекламу",
  footerBrand:        "TGShop Узбекистан",
  currency:           "soʻm",
  paymentChip1:       "Я.Доставка",
  paymentChip2:       "Click",
  paymentChip3:       "Uzum nasiya",
  paymentChip4:       "Payme",
  importChip3:        "Billz",
  importLineWithChips:"Импорт из Мойсклад, 1С, Billz",
  setupPayments:      "Click, Payme, наличные",
  isRU: false,
};

const RU: RegionContent = {
  priceStarterMonth:  "3 290 ₽/мес",
  priceBusinessMonth: "4 490 ₽/мес",
  priceProMonth:      "6 490 ₽/мес",
  priceStarterYear:   "2 632 ₽/мес",
  priceBusinessYear:  "3 592 ₽/мес",
  priceProYear:       "5 192 ₽/мес",
  lossPerDay:         "15 000 ₽",
  lossPerMonth:       "450 000 ₽",
  lossPerMonthShort:  "15 000 ₽",
  lossMonthEnd:       "450 000 ₽",
  avgCheck:           "3 000 ₽",
  calcBody:           "При среднем чеке 3 000 ₽ это 15 000 ₽ в день. Или 450 000 ₽ в месяц.",
  chatPriceReply:     "Да, 12 900 ₽. Оформлять?",
  chatOrderSum:       "12 900 ₽",
  zeroAdsBadge:       "0 ₽ на рекламу",
  footerBrand:        "TGShop",
  currency:           "₽",
  paymentChip1:       "СБП",
  paymentChip2:       "T-Pay",
  paymentChip3:       "СберPay",
  paymentChip4:       "Сплит",
  importChip3:        "YCLIENTS",
  importLineWithChips:"Импорт из Мойсклад, 1С, YCLIENTS",
  setupPayments:      "Карта, СБП, наличные",
  isRU: true,
};

export const T: RegionContent = REGION === 'ru' ? RU : UZ;

// Russian names for hero chat-mock (Mobile/Tablet/Desktop). On UZ build the
// DOM-walker dict translates these to Uzbek transliterations; on RU build the
// walker is not invoked, so they stay Russian.
// Single source of truth — used by all three Landing files.
export const HERO_CHAT_NAMES = REGION === 'ru'
  ? ['Регина К.', 'Ольга М.', 'Дмитрий М.', 'Мария Х.', 'Алексей Т.', 'Александр К.']
  : ['Регина К.', 'Ozoda M.',  'Дилшод М.',  'Мадина Х.', 'Акмал Т.',  'Aziz K.'];
