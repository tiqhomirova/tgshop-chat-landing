# Figma Dev Mode — готовый код секций

**Это самый прямой путь к pixel-perfect лендингу.**

Figma Dev Mode генерирует **точный React + Tailwind CSS код** для каждой секции макета. Вместо ручного переписывания HTML/CSS — твой фронт-дев берёт этот код напрямую в свой React/Next.js проект.

## Как использовать

1. **Создать Next.js проект** (или Vite + React):
   ```bash
   npx create-next-app@latest tgshop-uz --tailwind
   ```

2. **Скопировать секции** из `figma-code/*.tsx` в `app/components/` или `src/components/`

3. **Подключить шрифт SF Pro** (или fallback Inter) в `_app.tsx`:
   ```tsx
   import { Inter } from 'next/font/google';
   const inter = Inter({ subsets: ['latin', 'cyrillic'] });
   ```

4. **Собрать страницу** в `app/page.tsx`:
   ```tsx
   import Hero from '@/components/Hero';
   import Pain from '@/components/Pain';
   // ... etc
   
   export default function Page() {
     return (
       <>
         <Header />
         <Hero />
         <Trust />
         <Pain />
         ...
         <Footer />
       </>
     );
   }
   ```

5. **Заменить изображения** — URL из Figma живут 7 дней. Экспортировать ассеты из Figma:
   - Открыть Figma → выделить элемент → Export → PNG @2x или SVG
   - Сохранить в `public/` и обновить пути

## Файлы в этой папке

| Файл | Соответствует Figma ноде | Статус |
|---|---|---|
| `Hero.tsx` | `40002524:7927` (Hero v1, упрощённая chat-mock) | ✓ |
| ... | (другие секции — генерировать через `get_design_context` или Figma Dev Mode) | |

## Как получить код для остальных секций

В Figma:
1. Открыть файл `TGShop-Merchant`
2. Перейти в **Dev Mode** (toggle в правом верхнем углу)
3. Кликнуть на нужный фрейм
4. Скопировать **React + Tailwind** код из правой панели

Или через MCP API (если есть доступ):
```bash
get_design_context fileKey="dW5U2kQyvtzYYgIiDuWSbZ" nodeId="40002524:8060"
```

## Список фреймов для генерации кода

(Все на странице `Vika Marketing`, frame `Landing v2 / Desktop — 1440px`)

| Секция | Node ID |
|---|---|
| Header | `40002524:7911` |
| Hero | `40002524:7927` |
| Trust | `40002524:8037` |
| Pain | `40002524:8060` |
| Price/Calc | `40002524:8103` |
| Solution (Quick Start) | `40002524:8202` |
| KeyFeatures | `40002524:8226` |
| How | `40002524:8335` |
| Pricing (Тарифы) | `40002524:8481` |
| FAQ | `40002524:8618` |
| Footer | `40002524:8678` |

## Tablet и Mobile

Те же секции есть в фреймах:
- `Landing v2 / Tablet — 1024px` (`40002524:8897`)
- `Landing v2 / Mobile — 375px` (`40002524:9615`)

Стратегия: **берёшь Desktop код как основу**, добавляешь Tailwind responsive prefixes (`md:`, `lg:`):
- Desktop стили (по умолчанию для `lg:`)
- Tablet — `md:` префиксы
- Mobile — default (mobile-first)

Или генерируешь Tablet/Mobile код отдельно из Figma и используешь responsive вариант через `useMediaQuery` hook.
