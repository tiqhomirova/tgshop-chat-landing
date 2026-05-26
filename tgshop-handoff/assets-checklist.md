# Чек-лист ассетов для экспорта из Figma

## Логотипы клиентов (Trust секция)

Экспортировать как **SVG** (если оригинал SVG) или **PNG @2x** иначе. Размер ~ 80-120px wide.

- [ ] Yves Rocher (с зелёным листочком)
- [ ] EMRA
- [ ] Bogner
- [ ] Merci Lingerie
- [ ] Dragonfly (с зелёными «крыльями»)
- [ ] Fashion Fabrique (FF в круге)
- [ ] around you (оранжевый круг)
- [ ] ANA HILDEBRANT
- [ ] Skincare
- [ ] BOSCO (красный овал)
- [ ] Hold Store (sketch-логотип)
- [ ] Casher (чёрный круг)
- [ ] Elen's Pet Club (cursive) — если ещё используется

В Figma все в инстансах `Section-upper/Default` (`40002524:8041`, `40002633:662`, `40002682:1122`).

## Интеграции / партнёрские логотипы (Quick Start секция)

Лого партнёров и платёжных систем. **SVG или PNG @2x**.

### Каталог / товары
- [ ] МойСклад
- [ ] 1С
- [ ] Billz

### Оплата / доставка
- [ ] Яндекс Доставка (Я-Доставка)
- [ ] Click (платёжная система Узбекистан)
- [ ] Uzum Nasiya
- [ ] Payme

### Реклама / маркетинг
- [ ] Яндекс.Метрика
- [ ] Telegram Ads
- [ ] Яндекс.Директ

### CRM
- [ ] amoCRM
- [ ] МойСклад (тот же что выше)
- [ ] 1С
- [ ] Битрикс24

> На сайте `https://tgshop.io/` многие лого уже экспортированы — можно взять напрямую из их HTML.

## Графические мокапы

### Hero — продукт mock
- [ ] Phone mockup (Nothing CLO UZ + NEW COLLECTION + продуктовые карточки) — экспорт PNG @2x для desktop
- [ ] Chat list preview (с именами Регина К., Ozoda M., Дилшод М., Мадина X., Акмал Т.) — PNG @2x

### KeyFeatures — Card 1 (Статусы)
- [ ] Kanban-доска с 3 столбцами (Новый / Открыт / Закрыт) — можно сверстать HTML+CSS без растровой графики

### KeyFeatures — Card 2 (Сегменты)
- [ ] 2×2 grid сегмент-карточек — HTML+CSS

### How steps (3 шага)
- [ ] m1-setup (Каталог / Оплата / Доставка) — HTML+CSS
- [ ] m2-chat (Юлия К. чат-превью) — HTML+CSS
- [ ] m3-stats (Заказы / Выручка / Клиенты) — HTML+CSS

### Calculator
- [ ] Bar chart с 30 столбцами градиента красного — можно собрать через CSS (height по массиву) или SVG

## Иконки

Используйте Heroicons / Lucide или подобную библиотеку:

- [ ] ✓ check (success)
- [ ] ✕ X (danger)
- [ ] ☰ menu/burger
- [ ] 🌐 globe (lang switcher) — или SVG icon
- [ ] ▾ chevron-down
- [ ] → arrow-right (в hint'ах сегмент-карточек)
- [ ] 📦 / 💰 / 👥 — emoji или SVG для How step 3 mock

## Шрифт

- [ ] SF Pro (системный Apple, для macOS/iOS использовать `-apple-system`)
- [ ] Fallback: Inter (Google Fonts) — `https://fonts.google.com/specimen/Inter`

## Favicons & OG

- [ ] `favicon.ico` 32×32
- [ ] `favicon-180.png` (apple-touch-icon)
- [ ] `og-image.png` 1200×630 для соц-сетей
- [ ] `manifest.json` — PWA метадата (опционально)

## Полезные ссылки

Источники ассетов:
- Текущий сайт TGShop: `https://tgshop.io/` — можно открыть DevTools и сохранить SVG лого
- Figma: `https://www.figma.com/design/dW5U2kQyvtzYYgIiDuWSbZ/TGShop-Merchant`

## Замечания

- На текущем лендинге в Figma часть лого — placeholder-плашки с цветным dot + текстом. Если разраб не хочет верстать через CSS, можно использовать готовые **SVG логотипы партнёров** (Click, Payme, Яндекс Метрика и т.д.) — все они есть в открытом доступе или у самой команды TGShop.
