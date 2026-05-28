import { RU_TO_UZ } from './ru_uz_dict';

export type Lang = 'ru' | 'uz';

const URL_PARAM = 'lang';

/** Read lang from URL ?lang=uz, fallback to localStorage, fallback to 'ru'. */
export function readLangFromUrl(): Lang {
  if (typeof window === 'undefined') return 'ru';
  const url = new URLSearchParams(window.location.search);
  const fromUrl = url.get(URL_PARAM);
  if (fromUrl === 'uz' || fromUrl === 'ru') return fromUrl;
  try {
    const stored = window.localStorage.getItem('tgshop_lang');
    if (stored === 'uz' || stored === 'ru') return stored;
  } catch {
    /* localStorage unavailable */
  }
  return 'ru';
}

/** Persist lang to URL and localStorage, then reload so React re-renders Russian
   strings and the walker can re-translate them cleanly. */
export function setLang(lang: Lang) {
  try {
    window.localStorage.setItem('tgshop_lang', lang);
  } catch {
    /* ignore */
  }
  const url = new URL(window.location.href);
  if (lang === 'ru') {
    url.searchParams.delete(URL_PARAM);
  } else {
    url.searchParams.set(URL_PARAM, lang);
  }
  // Reload to reset Russian DOM → then walker translates fresh.
  window.location.href = url.toString();
}

/** Walks every text node under `root` and replaces Russian text with its
   Uzbek counterpart from the dictionary. Preserves leading/trailing
   whitespace and non-breaking spaces ( ). Idempotent: running it twice
   is harmless because once a node is translated, its trimmed value is no
   longer a key in RU_TO_UZ. */
export function applyTranslations(lang: Lang, root: HTMLElement = document.body): number {
  if (lang !== 'uz') return 0;
  let replaced = 0;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => {
      const v = node.nodeValue;
      if (!v || !v.trim()) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  const todo: Text[] = [];
  let n = walker.nextNode();
  while (n) {
    todo.push(n as Text);
    n = walker.nextNode();
  }
  for (const node of todo) {
    const orig = node.nodeValue!;
    // Normalize NBSP to plain space for lookup, but preserve original spacing.
    const trimmed = orig.replace(/ /g, ' ').trim();
    if (!trimmed) continue;
    const uz = RU_TO_UZ[trimmed];
    if (!uz) continue;
    const leading = orig.match(/^[\s ]*/)?.[0] ?? '';
    const trailing = orig.match(/[\s ]*$/)?.[0] ?? '';
    node.nodeValue = leading + uz + trailing;
    replaced++;
  }
  return replaced;
}

/** Update the visible label of the language switcher chips.
   The chip shows the language the user can switch TO (not the current one):
     - on RU page  →  "O'zbek"
     - on UZ page  →  "Русский"
   Initial JSX renders "O'zbek" (since RU is default); when on UZ this
   function swaps it to "Русский". */
export function updateLangSwitchLabels(lang: Lang) {
  const chips = document.querySelectorAll<HTMLElement>('[data-name="lang-btn"], [data-name="lang-switch"]');
  chips.forEach((chip) => {
    // The chip contains a globe emoji + a label span. Find the text span(s) that
    // currently say "O'zbek" or "Русский" and swap based on current lang.
    chip.querySelectorAll<HTMLElement>('span, p').forEach((el) => {
      const txt = el.textContent?.trim();
      if (!txt) return;
      if (lang === 'uz') {
        if (txt === "O'zbek") el.textContent = 'Русский';
      } else {
        if (txt === 'Русский') el.textContent = "O'zbek";
      }
    });
  });
}
