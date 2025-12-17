# RightCareHome Brand Book & Design System

> Руководство по дизайну и чеклист для создания страниц, оптимизированных для британской аудитории 55+ в сфере выбора домов престарелых.

---

## 1. БРЕНД И ЦЕННОСТИ

### Миссия
Помочь британским семьям найти правильный дом престарелых без переплат, стресса и комиссий.

### Тон голоса (Tone of Voice)

| Характеристика | Описание | Пример |
|----------------|----------|--------|
| **Empathetic** | Понимаем эмоциональную сложность решения | "We know this isn't easy. You're not alone." |
| **Expert** | Профессиональны, но не высокомерны | "Our 156-point analysis reveals..." |
| **Reassuring** | Снижаем тревожность | "Take your time. There's no pressure." |
| **Direct** | Без jargon, простым языком | "You could save £21,788" (не "optimise expenditure") |
| **British** | Используем британский английский | "analyse" не "analyze", "colour" не "color" |

### Чего ИЗБЕГАТЬ:
- Агрессивные sales tactics
- Dark patterns (fake urgency, fake scarcity)
- Американизмы
- Сложные термины без объяснения
- Снисходительный тон

---

## 2. ЦВЕТОВАЯ ПАЛИТРА

### Основные цвета

| Название | HEX | CSS Variable | Использование |
|----------|-----|--------------|---------------|
| Sage Green | `#4F6F52` | `--sage` | Primary actions, success states, trust |
| Light Sage | `#7FAD7E` | `--sage-light` | Hover states, secondary elements |
| Terracotta | `#C88D79` | `--terracotta` | Accent, CTAs, warmth |
| Cream | `#FDFBF7` | `--cream` | Backgrounds |
| Charcoal | `#1A231E` | `--charcoal` | Text, headings |

### Семантические цвета

| Назначение | Цвет | Использование |
|------------|------|---------------|
| Success | Sage Green | Подтверждения, позитивные метрики |
| Warning | Amber `#F59E0B` | Предупреждения, важная информация |
| Error | Rose `#E11D48` | Ошибки (использовать осторожно) |
| Info | Teal `#0D9488` | Нейтральная информация |

### ПРАВИЛА:
- Максимум 3-5 цветов на странице
- Всегда проверять контраст (min 4.5:1 для текста)
- Избегать чистого черного (#000) — использовать Charcoal
- Избегать чистого белого (#FFF) — использовать Cream или off-white

---

## 3. ТИПОГРАФИКА

### Шрифты

| Тип | Шрифт | Использование |
|-----|-------|---------------|
| Headings | Serif (Georgia, Times) | H1, H2, H3 — создает доверие и традиционность |
| Body | Sans-serif (Inter, System) | Параграфы, списки — читаемость |
| Mono | System mono | Цены, коды, технические данные |

### Размеры для аудитории 55+

| Элемент | Mobile | Desktop | Line Height |
|---------|--------|---------|-------------|
| H1 | 28-32px | 48-56px | 1.2 |
| H2 | 24-28px | 36-40px | 1.3 |
| H3 | 20-24px | 28-32px | 1.3 |
| Body | 16-18px | 18-20px | 1.6-1.8 |
| Small | 14px min | 16px | 1.5 |
| Caption | 14px | 14px | 1.4 |

### ПРАВИЛА:
- **Минимум 16px** для body text (никогда меньше 14px)
- **Line-height 1.5-1.8** для комфортного чтения
- **Letter-spacing** немного увеличить для мелкого текста
- **Жирный текст** для emphasis, не курсив (сложнее читать)
- **text-balance** или **text-pretty** для заголовков

---

## 4. SPACING И LAYOUT

### Spacing Scale (Tailwind)

| Размер | Значение | Использование |
|--------|----------|---------------|
| xs | 4px (p-1) | Внутри компактных элементов |
| sm | 8px (p-2) | Между связанными элементами |
| md | 16px (p-4) | Стандартный padding |
| lg | 24px (p-6) | Между секциями внутри карточки |
| xl | 32px (p-8) | Между карточками |
| 2xl | 48px (py-12) | Между секциями страницы |
| 3xl | 64-96px (py-16/24) | Между major секциями |

### Layout Principles

1. **Mobile-first** — всегда начинать с мобильной версии
2. **Single column** на mobile — без горизонтального скролла
3. **Max-width** для контента: 1280px (max-w-7xl)
4. **Generous whitespace** — не бояться пустого пространства

### Grid System

```
Mobile: 1 column
Tablet (md): 2 columns
Desktop (lg): 3 columns
```

### ПРАВИЛА:
- Минимум 16px padding от краев экрана на mobile
- Карточки: padding 16-24px на mobile, 24-32px на desktop
- Между секциями: py-16 (mobile) до py-32 (desktop)

---

## 5. КОМПОНЕНТЫ

### Кнопки

| Тип | Использование | Стиль |
|-----|---------------|-------|
| Primary | Главное действие (1 на экран) | bg-terracotta, text-white, h-12/h-14 |
| Secondary | Альтернативное действие | border-sage, text-sage |
| Ghost | Третичное действие | text-sage, underline on hover |

**Размеры для 55+:**
- Минимум высота: 48px (h-12)
- Минимум padding: px-6
- Touch target: минимум 44x44px
- Font size: 16-18px

### Карточки

**Структура:**
```
Card
├── Header (optional) — gradient или solid color
├── Content — padding p-6
└── Footer (optional) — actions
```

**Стили:**
- Background: white или cream
- Border: 1px border-border или none с shadow
- Border-radius: rounded-xl (12px)
- Shadow: shadow-sm (subtle)

### Формы

**Input fields:**
- Height: минимум h-12 (48px)
- Font size: text-base (16px) — предотвращает zoom на iOS
- Border: 2px для лучшей видимости
- Focus state: ring-2 ring-sage

**Labels:**
- Font size: text-base
- Font weight: medium
- Всегда над полем, не placeholder-only

### Иконки

- Размер: минимум 20-24px
- С текстовой подписью когда возможно
- Consistent stroke width
- Lucide React как основная библиотека

---

## 6. ACCESSIBILITY ДЛЯ 55+

### Зрение

| Требование | Реализация |
|------------|------------|
| Контраст | Минимум 4.5:1 для текста, 3:1 для крупного |
| Размер текста | Минимум 16px body |
| Цвет | Не использовать только цвет для передачи информации |
| Focus states | Видимые, не только outline |

### Моторика

| Требование | Реализация |
|------------|------------|
| Touch targets | Минимум 44x44px |
| Spacing между кликабельными | Минимум 8px |
| Hover states | Не полагаться только на hover |
| Double-click | Избегать |

### Когнитивная нагрузка

| Требование | Реализация |
|------------|------------|
| Простой язык | Reading level 8th grade |
| Chunk information | Не более 3-5 пунктов в списке |
| Progressive disclosure | Сложное разбивать на шаги |
| Clear hierarchy | Визуальная иерархия заголовков |

### Технические

```html
<!-- Всегда использовать -->
<html lang="en-GB">
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Семантические элементы -->
<main>, <nav>, <header>, <footer>, <article>, <section>

<!-- ARIA когда нужно -->
aria-label, aria-describedby, role
```

---

## 7. UX PATTERNS

### Формы и опросники

1. **Один вопрос на экран** для сложных форм
2. **Progress indicator** — показывать прогресс
3. **Save progress** — автосохранение
4. **Clear error messages** — что не так и как исправить
5. **Confirmation** — подтверждение перед отправкой

### Navigation

1. **Sticky header** — всегда доступна навигация
2. **Back button** — явная кнопка назад в формах
3. **Breadcrumbs** — для глубокой навигации
4. **Skip links** — для screen readers

### Trust Signals

Размещать в стратегических местах:

| Сигнал | Где размещать |
|--------|---------------|
| "100% Free" | Рядом с CTA |
| "No Obligation" | Рядом с формами |
| Money-back guarantee | Pricing section |
| Data protection | Footer, формы |
| Social proof (ratings) | Hero, CTA sections |
| Testimonials | После value proposition |

### Loading States

1. **Skeleton screens** вместо spinners где возможно
2. **Progress messages** для длительных операций
3. **Estimated time** — "This usually takes 2-3 seconds"

---

## 8. COPYWRITING GUIDELINES

### Заголовки

- **Benefit-focused** — что получит пользователь
- **Specific numbers** — "Save £21,788" не "Save money"
- **Active voice** — "Get your report" не "Report will be sent"

### CTA Buttons

| Плохо | Хорошо |
|-------|--------|
| Submit | Get My Free Report |
| Click Here | Start Free Assessment |
| Learn More | See How It Works |
| Buy Now | Secure My Analysis |

### Microcopy

- **Form hints:** "We'll never share your email"
- **Button context:** "Takes 2 minutes • No credit card"
- **Error messages:** Конкретные и helpful

### British English Checklist

- [ ] analyse (не analyze)
- [ ] colour (не color)
- [ ] organisation (не organization)
- [ ] centre (не center)
- [ ] favour (не favor)
- [ ] programme (не program, кроме computer program)
- [ ] £ before number (£119 не 119£)
- [ ] Dates: 27 January 2025 (не January 27, 2025)

---

## 9. ТРЕНДЫ 2025

### Использовать:

| Тренд | Как применять |
|-------|---------------|
| Typography-first | Крупные заголовки как визуальный элемент |
| Generous whitespace | py-16 до py-32 между секциями |
| Muted palettes | Sage/Terracotta/Cream |
| Subtle shadows | shadow-sm, не dramatic |
| Bento grids | Для feature sections |
| Data visualization | Метрики как визуальные якоря |
| Micro-interactions | Subtle hover effects |

### Избегать:

| Устаревшее | Почему |
|------------|--------|
| Glassmorphism | Пик был 2022-2023 |
| Яркие gradients | Слишком "tech startup" |
| Parallax scrolling | Может вызывать motion sickness |
| Auto-playing video | Раздражает 55+ |
| Infinite scroll | Сложно ориентироваться |
| Toast notifications | Dark pattern |
| Rotating carousels | Низкая конверсия |

---

## 10. ЧЕКЛИСТ ДЛЯ НОВЫХ СТРАНИЦ

### Перед началом:

- [ ] Определена цель страницы (conversion goal)
- [ ] Понятна целевая аудитория
- [ ] Собран контент и копирайтинг

### Дизайн:

- [ ] Цвета только из brand palette
- [ ] Типографика соответствует guidelines (min 16px body)
- [ ] Достаточный whitespace между секциями
- [ ] Визуальная иерархия четкая
- [ ] Максимум 1 primary CTA на экран

### Accessibility:

- [ ] Контраст проверен (min 4.5:1)
- [ ] Touch targets минимум 44x44px
- [ ] Формы имеют labels (не только placeholders)
- [ ] Focus states видимые
- [ ] Alt text для изображений
- [ ] Семантический HTML

### Mobile:

- [ ] Протестировано на 320px ширине
- [ ] Нет горизонтального скролла
- [ ] Кнопки full-width или достаточно большие
- [ ] Текст читаемый без zoom

### Trust & Conversion:

- [ ] Trust signals рядом с CTAs
- [ ] Social proof присутствует
- [ ] Clear value proposition
- [ ] No dark patterns
- [ ] Exit intent не агрессивный

### Content:

- [ ] British English spelling
- [ ] Reading level проверен
- [ ] CTAs action-oriented
- [ ] Error messages helpful

### Technical:

- [ ] Page title и meta description
- [ ] Open Graph tags
- [ ] Loading states для async операций
- [ ] Console.log statements удалены
- [ ] No unused imports

---

## 11. QUICK REFERENCE

### Tailwind Classes Cheatsheet

```tsx
// Typography for 55+
className="text-lg lg:text-xl leading-relaxed"

// Card
className="bg-card rounded-xl border shadow-sm p-6"

// Primary Button
className="h-12 px-6 bg-terracotta hover:bg-terracotta/90 text-white rounded-lg text-lg font-medium"

// Section spacing
className="py-16 sm:py-20 lg:py-24"

// Container
className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"

// Grid responsive
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
```

### Color Classes

```tsx
// Brand colors
bg-[#4F6F52] // Sage
bg-[#C88D79] // Terracotta
bg-[#FDFBF7] // Cream
text-[#1A231E] // Charcoal

// Semantic (from theme)
bg-background
bg-card
bg-muted
text-foreground
text-muted-foreground
border-border
```

---

## 12. КОНТАКТЫ И РЕСУРСЫ

### Design Assets
- Figma: [link to be added]
- Icons: Lucide React
- Fonts: System fonts + Google Fonts

### Документация
- Next.js: https://nextjs.org/docs
- Tailwind: https://tailwindcss.com/docs
- shadcn/ui: https://ui.shadcn.com

### Тестирование
- Contrast checker: https://webaim.org/resources/contrastchecker/
- Readability: https://readable.com

---

*Последнее обновление: January 2025*
*Версия: 1.0*
