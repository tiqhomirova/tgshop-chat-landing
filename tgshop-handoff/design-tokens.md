# Design Tokens — TGShop Chat лендинг

## Цвета (CSS variables)

```css
:root {
  /* Brand */
  --color-brand-blue: #2563EB;            /* primary CTA, ссылки, акценты */
  --color-brand-blue-light: #2196F5;      /* "Chat" suffix в логотипе */
  --color-brand-blue-soft: #E6F3FF;       /* badges background, pills */

  /* Status */
  --color-success: #0E8C33;               /* зелёный для ✓, метрики */
  --color-success-light: #21B265;
  --color-success-bg: #D9F7E5;            /* для зелёных бейджей */
  --color-warning: #F5A524;               /* амбер для "Открыт" статуса */
  --color-danger: #EF4444;                /* красный для ✕, "Просрочка" */
  --color-danger-bg: #FBE7E7;

  /* Neutrals */
  --color-ink: #121826;                   /* основной текст */
  --color-text: #121826;
  --color-muted: #6B7280;                 /* второстепенный текст */
  --color-faint: #99A3B3;                 /* подписи, метки */
  --color-stroke: #EBEDF0;                /* бордеры карточек */
  --color-bg-page: #F7F8FA;               /* фон страницы (между секциями) */
  --color-bg-card: #FFFFFF;               /* фон карточек */
  --color-bg-soft: #F7FAFB;               /* фон столбцов kanban */

  /* Footer (dark) */
  --color-footer-bg: #11161F;
  --color-footer-text: #A6AFBE;
  --color-footer-header: #FFFFFF;

  /* Accent (charts) */
  --color-red-loss: #E5484D;              /* bar chart, "потери" */
  --color-amber-loss: #F5A524;
}
```

## Типографика

```css
:root {
  /* Font family */
  --font-sans: "SF Pro", -apple-system, BlinkMacSystemFont, "Inter", "Helvetica Neue", sans-serif;
  
  /* Размеры (desktop / mobile) */
  --fs-hero: 56px;       /* H1 hero — на mobile 32px */
  --fs-h2: 36px;         /* section titles — на mobile 24px */
  --fs-h3: 22px;         /* card titles — на mobile 18px */
  --fs-body: 16px;       /* body text */
  --fs-small: 14px;      /* labels, captions */
  --fs-tiny: 11px;       /* badges, helper text */
  
  /* Веса */
  --fw-regular: 400;
  --fw-medium: 500;
  --fw-semibold: 600;
  --fw-bold: 700;
  
  /* Line heights */
  --lh-tight: 1.1;       /* hero/H2 */
  --lh-normal: 1.4;      /* body */
  --lh-relaxed: 1.6;     /* paragraphs */
}
```

## Spacing (8px grid)

```css
:root {
  --space-0: 0;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
}
```

## Border radius

```css
:root {
  --radius-sm: 6px;       /* мелкие бейджи */
  --radius-md: 10px;      /* кнопки, пилюли */
  --radius-lg: 16px;      /* карточки */
  --radius-xl: 20px;      /* большие блоки */
  --radius-2xl: 24px;     /* hero мокапы */
  --radius-full: 9999px;  /* круглые лого, аватарки */
}
```

## Тени

```css
:root {
  --shadow-sm: 0 2px 6px rgba(12, 18, 31, 0.06);    /* лого-плашки */
  --shadow-md: 0 8px 24px rgba(12, 18, 31, 0.06);   /* карточки */
  --shadow-lg: 0 16px 40px rgba(12, 18, 31, 0.08);  /* hero badges, premium cards */
  --shadow-cta: 0 20px 35px rgba(38, 134, 255, 0.22); /* primary кнопки, голубое свечение */
}
```

## Брейкпоинты (CSS)

```css
/* Mobile-first подход */
/* Default: < 768px (Mobile, 375 design) */

/* Tablet */
@media (min-width: 768px) {
  /* ... */
}

/* Desktop */
@media (min-width: 1024px) {
  /* ... */
}

/* Large Desktop (если нужно) */
@media (min-width: 1440px) {
  /* ... */
}
```

## Контент-зона

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 48px;
  padding-right: 48px;
}

@media (max-width: 1023px) {
  .container { padding-left: 32px; padding-right: 32px; }
}

@media (max-width: 767px) {
  .container { padding-left: 20px; padding-right: 20px; }
}
```

## Кнопки

```css
.btn-primary {
  background: var(--color-brand-blue);
  color: #FFF;
  font-weight: var(--fw-semibold);
  padding: 14px 32px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-cta);
  transition: transform .15s ease, box-shadow .15s ease;
}
.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 24px 40px rgba(38, 134, 255, 0.28);
}

.btn-outline {
  background: #FFF;
  color: var(--color-ink);
  border: 1px solid var(--color-stroke);
  padding: 14px 32px;
  border-radius: var(--radius-md);
}
```
