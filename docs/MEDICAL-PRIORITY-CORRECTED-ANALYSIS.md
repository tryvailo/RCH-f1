# Medical Priority - CORRECTED ANALYSIS

## Проблема с Вариантом 2

❌ **Вариант 2 не добавляет медицинский приоритет!**

Он только усиливает "Quality & Reputation", но:
- Нет явного пункта "Medical Specialization"
- Медицина размазана в Quality
- Неправильно для complex cases

---

## Три ПРАВИЛЬНЫХ Варианта

### Option A: Замена одной карточки на Медицину (Cleaner)

Вместо 4 статичных приоритетов → 4 карточки с медициной вместо одной:

```typescript
const getPriorities = (medicalComplexity: number): Priority[] => {
  const baseCase = [
    { id: "quality", title: "Quality & Reputation", weight: 30 },
    { id: "cost", title: "Cost & Financial", weight: 25 },
    { id: "location", title: "Location & Social", weight: 20 },
    { id: "comfort", title: "Comfort & Amenities", weight: 25 },
  ]

  // HIGH complexity: swap Comfort for Medical
  if (medicalComplexity > 70) {
    return [
      { id: "quality", title: "Quality & Reputation", weight: 40 },
      { id: "medical", title: "Medical Specialization", weight: 30 },  // ← SWAP!
      { id: "cost", title: "Cost & Financial", weight: 20 },
      { id: "location", title: "Location & Social", weight: 10 },
    ]
  }

  // MODERATE complexity: swap Comfort for Medical
  if (medicalComplexity > 40) {
    return [
      { id: "quality", title: "Quality & Reputation", weight: 35 },
      { id: "medical", title: "Medical Specialization", weight: 20 },  // ← SWAP!
      { id: "cost", title: "Cost & Financial", weight: 25 },
      { id: "location", title: "Location & Social", weight: 20 },
    ]
  }

  // LOW complexity: keep original 4
  return baseCase
}
```

**User видит:**
```
LOW complexity (independent, no conditions):
┌─────────────────────────────┐
│ 1. Quality & Reputation (30%)
│ 2. Cost & Financial (25%)
│ 3. Location & Social (20%)
│ 4. Comfort & Amenities (25%)
└─────────────────────────────┘

HIGH complexity (nursing care, 3+ conditions):
┌─────────────────────────────┐
│ 1. Quality & Reputation (40%)
│ 2. Medical Specialization (30%) ← APPEARED!
│ 3. Cost & Financial (20%)
│ 4. Location & Social (10%)
└─────────────────────────────┘
```

**Плюсы:**
- ✅ Всегда 4 карточки (стабильный UX)
- ✅ Medical явно видна для complex cases
- ✅ For simple cases - не путает
- ✅ Честное отображение приоритетов
- ✅ Smart - автоматически выбирает правильный набор

**Минусы:**
- ⚠️ Пользователь видит разные карточки в зависимости от медицины
- ⚠️ Нужно объяснить замену

---

### Option B: Всегда 4 фиксированные + Dynamic Weight

Оставить 4 карточки, но переименовать 4-ю на медицину:

```typescript
const defaultPriorities: Priority[] = [
  { id: "quality", title: "Quality & Reputation", desc: "CQC, staff, specialisations" },
  { id: "cost", title: "Cost & Financial", desc: "Price stability, fees" },
  { id: "location", title: "Location & Social", desc: "Distance, activities, community" },
  { id: "medical", title: "Medical Specialization", desc: "Staff expertise for your needs" },  // ← CHANGED
]

const weights = calculateDynamicWeights(medicalComplexity)
// Returns: [40, 25, 20, 15] or [35, 25, 15, 25] depending on complexity
```

**User видит:**
```
Quality & Reputation: 40%
Cost & Financial: 25%
Location & Social: 15%
Medical Specialization: 20%
     ↑ может быть от 5% до 40% в зависимости от медицины
```

**Плюсы:**
- ✅ Явный медицинский приоритет всегда
- ✅ Динамический вес (низко для healthy, высоко для complex)
- ✅ User может переупорядочить
- ✅ Прозрачно

**Минусы:**
- ⚠️ Medical всегда видна (может быть не нужна для simple cases)
- ⚠️ Вес меняется (может путать)

---

### Option C: Плавное добавление (Gradual)

Показать Medical как 5-ю карточку ТОЛЬКО если сложность > 60:

```typescript
const getPriorities = (complexity: number): Priority[] => {
  const base4 = [
    { id: "quality", title: "Quality & Reputation", weight: 40 },
    { id: "cost", title: "Cost & Financial", weight: 30 },
    { id: "location", title: "Location & Social", weight: 20 },
    { id: "comfort", title: "Comfort & Amenities", weight: 10 },
  ]

  if (complexity > 60) {
    // Add 5th card
    return [
      { id: "quality", title: "Quality & Reputation", weight: 30 },
      { id: "medical", title: "Medical Specialization", weight: 30 },  // ← NEW
      { id: "cost", title: "Cost & Financial", weight: 20 },
      { id: "location", title: "Location & Social", weight: 12 },
      { id: "comfort", title: "Comfort & Amenities", weight: 8 },
    ]
  }

  return base4
}
```

**Плюсы:**
- ✅ For 70% users (low-moderate complexity) - чистые 4 карточки
- ✅ For 30% users (high complexity) - добавляется Medical
- ✅ Контролируемое усложнение

**Минусы:**
- ❌ 5 карточек на мобилке - плохо
- ❌ Нужны масштабирование UI

---

## Рекомендуемый вариант: **OPTION A** ✅

**Почему?**
- Всегда 4 карточки (стабильный UX для мобилки)
- Medical явно видна для тех, кому нужна
- Для простых случаев - не отвлекает
- Smart замена (не просто усиление)

**Пример логики:**

```typescript
const medicalComplexity = calculateScore({
  care_types,
  medical_conditions,
  mobility_level,
  medication_management,
  special_equipment,
  fall_history
})

const priorities = medicalComplexity > 70
  ? [
      { id: "quality", title: "Quality & Reputation", weight: 40 },
      { id: "medical", title: "Medical Specialization", weight: 30 },
      { id: "cost", title: "Cost & Financial", weight: 20 },
      { id: "location", title: "Location & Social", weight: 10 },
    ]
  : medicalComplexity > 40
    ? [
        { id: "quality", title: "Quality & Reputation", weight: 35 },
        { id: "medical", title: "Medical Specialization", weight: 20 },
        { id: "cost", title: "Cost & Financial", weight: 25 },
        { id: "location", title: "Location & Social", weight: 20 },
      ]
    : [
        { id: "quality", title: "Quality & Reputation", weight: 40 },
        { id: "cost", title: "Cost & Financial", weight: 30 },
        { id: "location", title: "Location & Social", weight: 20 },
        { id: "comfort", title: "Comfort & Amenities", weight: 10 },
      ]
```

---

## Сравнение Вариантов

| Вариант | Медицина | Карточек | Мобилка | Complexity | Прозрачность | Recommendation |
|---------|---------|----------|---------|-----------|---|---|
| **Option A** | Явно (swap) | 4 | ✅ Good | Medium | Excellent | ✅ **BEST** |
| **Option B** | Явно (всегда) | 4 | ✅ Good | Low | Good | ⚠️ Может быть не нужна |
| **Option C** | Явно (5-я) | 4-5 | ❌ Bad | High | Excellent | ❌ UX issue |
| Old V2 | Неявно (в Quality) | 4 | ✅ Good | Low | Poor | ❌ Не честно |

---

## Параметры для Option A

| Complexity | Type | Priorities |
|-----------|------|---|
| **0-40** | Independent, minimal care | Quality (40%), Cost (30%), Location (20%), Comfort (10%) |
| **41-70** | Moderate (2-3 cond) | Quality (35%), Medical (20%), Cost (25%), Location (20%) |
| **71-100** | High (nursing/palliative) | Quality (40%), Medical (30%), Cost (20%), Location (10%) |

**Medical появляется при complexity > 40**

---

## UI Hint для User

```jsx
{complexity > 40 && (
  <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-4">
    <p className="text-sm">
      💡 <strong>Based on your medical needs,</strong> we've included 
      "Medical Specialization" as a priority. Homes with staff expertise 
      for your conditions will rank higher.
    </p>
  </div>
)}
```

---

## Implementation for Option A

**Modified `priorities-step.tsx`:**

```typescript
interface PrioritiesStepProps {
  formData: ProfessionalAssessmentData  // ← ADD: pass form data
  onComplete: (priorities: string[], weights: number[]) => void
}

export function PrioritiesStep({ formData, onComplete }: PrioritiesStepProps) {
  const medicalComplexity = calculateMedicalComplexity(formData)
  const priorities = getPrioritiesByComplexity(medicalComplexity)
  
  // Rest of component...
}

const getPrioritiesByComplexity = (complexity: number): Priority[] => {
  if (complexity > 70) {
    return [
      {
        id: "quality_reputation",
        title: "Quality & Reputation",
        description: "CQC ratings, staff stability, care quality",
        icon: <BarChart3 className="w-8 h-8 text-[#4F6F52]" />,
      },
      {
        id: "medical_specialization",  // ← NEW
        title: "Medical Specialization",
        description: "Staff expertise for your specific medical conditions",
        icon: <Stethoscope className="w-8 h-8 text-[#4A90A4]" />,
      },
      {
        id: "cost_financial",
        title: "Cost & Financial Stability",
        description: "Price stability, hidden fees, value for money",
        icon: <PoundSterling className="w-8 h-8 text-[#4F6F52]" />,
      },
      {
        id: "location_social",
        title: "Location & Social",
        description: "Distance from family, visiting ease, community",
        icon: <MapPin className="w-8 h-8 text-[#4F6F52]" />,
      },
    ]
  }
  // ... more complexity ranges ...
}
```

**Modified `steps/page.tsx`:**

```typescript
case "priorities":
  return <PrioritiesStep 
    formData={formData}  // ← PASS formData
    onComplete={handlePrioritiesComplete} 
  />
```

---

## Conclusion

**Вы были правы!** Вариант 2 не был честен - скрывал медицину в Quality.

**Правильный подход: Option A**
- ✅ Медицинский приоритет явный
- ✅ Динамическое появление (не для всех)
- ✅ Всегда 4 карточки
- ✅ Smart & honest
