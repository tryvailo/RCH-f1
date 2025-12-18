# Алгоритм Матчинга Домов Престарелых

## Задание: Реализация Интеллектуального Матчинга

### Цель
Создать алгоритм, который на основе данных из ассесмента (`AssessmentData`) находит и ранжирует 3 лучших дома престарелых по трем стратегическим категориям:
1. **Safe Bet** - Максимальная безопасность и стабильность
2. **Best Reputation** - Лучшая репутация в сообществе
3. **Smart Value** - Оптимальное соотношение цена/качество

---

## Входные Данные (AssessmentData)

```typescript
interface AssessmentData {
  location_postcode: string          // UK postcode (e.g., "B15 2TT")
  care_type: string                  // "residential_care" | "dementia_care" | "nursing_care" | "nursing_dementia_care" | "not_sure"
  budget_range: string               // "1150" | "1350" | "all" | "not_sure"
  funding_type: string                // "privately_funded" | "local_authority_funded" | "nhs_funded" | "mixed_funding" | "not_sure"
  duration_type: string               // "permanent" | "short_term_respite" | "trial_period" | "not_sure"
  contact_name: string
  contact_email: string
  marketing_opt_in: boolean
  priority_order: string[]            // ["quality", "cost", "proximity"] (ordered by importance)
  priority_weights: number[]          // [50, 30, 20] (weights in %, sum = 100)
}
```

---

## Структура Данных Дома Престарелых

```typescript
interface CareHome {
  // Базовая информация
  id: string
  name: string
  address: string
  postcode: string
  latitude: number
  longitude: number
  
  // Тип ухода
  care_types: string[]                // ["residential_care", "dementia_care", ...]
  specialisations: string[]           // ["dementia", "palliative", "rehabilitation"]
  
  // Регуляторные данные
  cqc_rating: "Outstanding" | "Good" | "Requires Improvement" | "Inadequate"
  cqc_last_inspection: Date
  cqc_safety_rating: string
  cqc_care_rating: string
  cqc_responsive_rating: string
  cqc_well_led_rating: string
  
  // Финансовые данные
  weekly_fee_min: number               // Минимальная недельная плата
  weekly_fee_max: number              // Максимальная недельная плата
  financial_stability_score: number   // 0-100 (Altman Z-Score based)
  bankruptcy_risk: "low" | "medium" | "high"
  
  // Качество персонала
  staff_turnover_rate: number          // % в год
  agency_staff_reliance: number        // % персонала от агентств
  staff_satisfaction_score: number    // 0-100
  nurses_per_bed: number               // Соотношение медсестер к кроватям
  
  // Репутация и вовлеченность
  google_rating: number                // 1-5
  google_review_count: number
  family_visit_frequency: number       // Среднее количество визитов в неделю
  family_engagement_score: number     // 0-100 (на основе паттернов визитов)
  
  // Удобство и комфорт
  distance_from_user: number           // км от location_postcode (вычисляется)
  private_rooms_percentage: number    // % приватных комнат
  activities_score: number            // 0-100
  food_hygiene_rating: number         // 0-5 (FSA rating)
  
  // Дополнительные метрики
  availability_status: "available" | "limited" | "waitlist"
  accepts_funding_type: string[]      // ["privately_funded", "local_authority_funded", ...]
  min_stay_duration: number           // Минимальная длительность пребывания (дни)
}
```

---

## Псевдокод Алгоритма Матчинга

```pseudocode
FUNCTION matchCareHomes(assessment: AssessmentData, allHomes: CareHome[]):
  
  // ШАГ 1: ПРЕДВАРИТЕЛЬНАЯ ФИЛЬТРАЦИЯ
  filteredHomes = FILTER allHomes WHERE:
    - home.care_types CONTAINS assessment.care_type OR assessment.care_type == "not_sure"
    - home.accepts_funding_type CONTAINS assessment.funding_type OR assessment.funding_type == "not_sure"
    - home.distance_from_user <= MAX_DISTANCE(assessment.duration_type)
    - home.weekly_fee_min <= BUDGET_THRESHOLD(assessment.budget_range)
    - home.availability_status != "closed"
    - home.cqc_rating != "Inadequate"
  
  // ШАГ 2: ВЫЧИСЛЕНИЕ БАЗОВЫХ СКОРОВ ДЛЯ КАЖДОГО ДОМА
  FOR EACH home IN filteredHomes:
    
    // 2.1. Безопасность (Safety Score) - 0-100
    safety_score = CALCULATE_SAFETY_SCORE(home)
      = (cqc_rating_score * 0.4) 
      + (financial_stability_score * 0.3)
      + (staff_satisfaction_score * 0.2)
      + (food_hygiene_rating * 20 * 0.1)
      - (bankruptcy_risk_penalty)
      - (staff_turnover_penalty)
    
    // 2.2. Репутация (Reputation Score) - 0-100
    reputation_score = CALCULATE_REPUTATION_SCORE(home)
      = (cqc_rating_score * 0.5)
      + (google_rating * 20 * 0.3)
      + (normalized_review_count * 0.1)
      + (family_engagement_score * 0.1)
    
    // 2.3. Ценность (Value Score) - 0-100
    value_score = CALCULATE_VALUE_SCORE(home, assessment)
      = (quality_per_pound * 0.6)
      + (fair_cost_gap_score * 0.4)
      
    WHERE quality_per_pound = (safety_score + reputation_score) / 2 / (weekly_fee_min / 100)
    AND fair_cost_gap_score = COMPARE_TO_COUNCIL_RATE(home, assessment.location_postcode)
    
    // 2.4. Приоритетный Матч (Priority Match Score) - 0-100
    priority_match_score = CALCULATE_PRIORITY_MATCH(home, assessment)
      = (quality_score * assessment.priority_weights[0] / 100)
      + (cost_score * assessment.priority_weights[1] / 100)
      + (proximity_score * assessment.priority_weights[2] / 100)
      
    WHERE:
      quality_score = (safety_score * 0.4) + (reputation_score * 0.4) + (staff_quality_score * 0.2)
      cost_score = value_score
      proximity_score = DISTANCE_SCORE(home.distance_from_user) // Ближе = выше скор
    
    // Сохраняем все скоры в объекте дома
    home.scores = {
      safety: safety_score,
      reputation: reputation_score,
      value: value_score,
      priority_match: priority_match_score
    }
  
  END FOR
  
  // ШАГ 3: РАНЖИРОВАНИЕ ПО КАТЕГОРИЯМ
  
  // 3.1. Safe Bet - Максимальная безопасность
  safe_bet_candidates = SORT filteredHomes BY:
    PRIMARY: safety_score DESC
    SECONDARY: financial_stability_score DESC
    TERTIARY: bankruptcy_risk ASC (low < medium < high)
    QUATERNARY: cqc_rating_score DESC
    FIFTH: priority_match_score DESC
  
  safe_bet = safe_bet_candidates[0]
  safe_bet.strategy = "safe-bet"
  safe_bet.match_reasoning = GENERATE_SAFE_BET_REASONING(safe_bet)
  
  // 3.2. Best Reputation - Лучшая репутация
  best_reputation_candidates = SORT filteredHomes BY:
    PRIMARY: reputation_score DESC
    SECONDARY: google_rating DESC
    TERTIARY: family_engagement_score DESC
    QUATERNARY: cqc_rating_score DESC (Outstanding > Good)
    FIFTH: google_review_count DESC
    SIXTH: priority_match_score DESC
  
  // Исключаем Safe Bet, если он уже выбран
  best_reputation_candidates = FILTER best_reputation_candidates WHERE id != safe_bet.id
  
  best_reputation = best_reputation_candidates[0]
  best_reputation.strategy = "best-reputation"
  best_reputation.match_reasoning = GENERATE_REPUTATION_REASONING(best_reputation)
  
  // 3.3. Smart Value - Оптимальное соотношение цена/качество
  smart_value_candidates = SORT filteredHomes BY:
    PRIMARY: value_score DESC
    SECONDARY: quality_per_pound DESC
    TERTIARY: fair_cost_gap_score DESC (чем больше экономия, тем лучше)
    QUATERNARY: priority_match_score DESC
    FIFTH: weekly_fee_min ASC (дешевле при одинаковом качестве)
  
  // Исключаем уже выбранные дома
  smart_value_candidates = FILTER smart_value_candidates WHERE 
    id != safe_bet.id AND id != best_reputation.id
  
  smart_value = smart_value_candidates[0]
  smart_value.strategy = "smart-value"
  smart_value.match_reasoning = GENERATE_VALUE_REASONING(smart_value, assessment)
  
  // ШАГ 4: ВАЛИДАЦИЯ И FALLBACK ЛОГИКА
  
  // Если не хватает домов в какой-то категории, расширяем критерии
  IF safe_bet == NULL:
    safe_bet = FIND_BEST_SAFETY_WITH_RELAXED_CRITERIA(filteredHomes)
  
  IF best_reputation == NULL:
    best_reputation = FIND_BEST_REPUTATION_WITH_RELAXED_CRITERIA(filteredHomes)
  
  IF smart_value == NULL:
    smart_value = FIND_BEST_VALUE_WITH_RELAXED_CRITERIA(filteredHomes)
  
  // ШАГ 5: ГЕНЕРАЦИЯ ОБЪЯСНЕНИЙ
  
  FOR EACH home IN [safe_bet, best_reputation, smart_value]:
    home.why_this_match = GENERATE_MATCH_EXPLANATION(home, assessment)
    home.top_strengths = EXTRACT_TOP_STRENGTHS(home)
    home.potential_concerns = EXTRACT_POTENTIAL_CONCERNS(home)
  END FOR
  
  RETURN {
    safe_bet: safe_bet,
    best_reputation: best_reputation,
    smart_value: smart_value,
    match_metadata: {
      total_homes_considered: filteredHomes.length,
      search_radius_km: MAX_DISTANCE(assessment.duration_type),
      matching_timestamp: NOW()
    }
  }
  
END FUNCTION
```

---

## Вспомогательные Функции

### CALCULATE_SAFETY_SCORE

```pseudocode
FUNCTION CALCULATE_SAFETY_SCORE(home: CareHome) -> number:
  
  // CQC Rating Score (0-100)
  cqc_score = SWITCH home.cqc_rating:
    "Outstanding" -> 100
    "Good" -> 75
    "Requires Improvement" -> 40
    "Inadequate" -> 0
    DEFAULT -> 50
  
  // Financial Stability (0-100)
  financial_score = home.financial_stability_score
  
  // Staff Satisfaction (0-100)
  staff_score = home.staff_satisfaction_score
  
  // Food Hygiene (0-100)
  food_score = home.food_hygiene_rating * 20
  
  // Penalties
  bankruptcy_penalty = SWITCH home.bankruptcy_risk:
    "high" -> 30
    "medium" -> 15
    "low" -> 0
  
  turnover_penalty = IF home.staff_turnover_rate > 30 THEN 20
                     ELSE IF home.staff_turnover_rate > 20 THEN 10
                     ELSE 0
  
  // Final calculation
  safety = (cqc_score * 0.4) 
         + (financial_score * 0.3)
         + (staff_score * 0.2)
         + (food_score * 0.1)
         - bankruptcy_penalty
         - turnover_penalty
  
  RETURN MAX(0, MIN(100, safety))  // Clamp to 0-100
  
END FUNCTION
```

### CALCULATE_REPUTATION_SCORE

```pseudocode
FUNCTION CALCULATE_REPUTATION_SCORE(home: CareHome) -> number:
  
  // CQC Rating (0-100)
  cqc_score = SWITCH home.cqc_rating:
    "Outstanding" -> 100
    "Good" -> 75
    "Requires Improvement" -> 40
    DEFAULT -> 50
  
  // Google Rating (0-60, так как * 20 * 0.3)
  google_score = home.google_rating * 20
  
  // Review Count Normalization (0-10)
  // Нормализуем количество отзывов: 0 отзывов = 0, 100+ отзывов = 10
  review_count_score = MIN(10, home.google_review_count / 10) * 10
  
  // Family Engagement (0-100)
  engagement_score = home.family_engagement_score
  
  // Final calculation
  reputation = (cqc_score * 0.5)
             + (google_score * 0.3)
             + (review_count_score * 0.1)
             + (engagement_score * 0.1)
  
  RETURN MAX(0, MIN(100, reputation))
  
END FUNCTION
```

### CALCULATE_VALUE_SCORE

```pseudocode
FUNCTION CALCULATE_VALUE_SCORE(home: CareHome, assessment: AssessmentData) -> number:
  
  // Quality per Pound
  quality_score = (home.scores.safety + home.scores.reputation) / 2
  weekly_fee = home.weekly_fee_min
  quality_per_pound = quality_score / (weekly_fee / 100)  // Нормализуем цену
  
  // Fair Cost Gap Score
  council_rate = GET_COUNCIL_RATE(assessment.location_postcode, home.care_types[0])
  fair_cost_gap = council_rate - weekly_fee
  
  // Если дом дешевле council rate - это хорошо (высокий скор)
  // Если дороже - штрафуем
  IF fair_cost_gap > 0:
    gap_score = MIN(100, (fair_cost_gap / 200) * 100)  // Каждые £2/week = 1 point
  ELSE:
    gap_score = MAX(0, 100 + (fair_cost_gap / 100) * 50)  // Штраф за переплату
  
  // Final calculation
  value = (quality_per_pound * 0.6) + (gap_score * 0.4)
  
  RETURN MAX(0, MIN(100, value))
  
END FUNCTION
```

### CALCULATE_PRIORITY_MATCH

```pseudocode
FUNCTION CALCULATE_PRIORITY_MATCH(home: CareHome, assessment: AssessmentData) -> number:
  
  // Quality Score (0-100)
  quality_score = (home.scores.safety * 0.4) 
                + (home.scores.reputation * 0.4)
                + (home.staff_satisfaction_score * 0.2)
  
  // Cost Score (0-100) - обратная зависимость от цены при одинаковом качестве
  cost_score = home.scores.value
  
  // Proximity Score (0-100) - чем ближе, тем выше
  distance = home.distance_from_user
  IF distance <= 5:
    proximity_score = 100 - (distance * 10)  // 0km = 100, 5km = 50
  ELSE IF distance <= 15:
    proximity_score = 50 - ((distance - 5) * 3)  // 5km = 50, 15km = 20
  ELSE:
    proximity_score = MAX(0, 20 - ((distance - 15) * 1))
  
  // Weighted combination based on user priorities
  weights = assessment.priority_weights  // [quality_weight, cost_weight, proximity_weight]
  
  priority_match = (quality_score * weights[0] / 100)
                 + (cost_score * weights[1] / 100)
                 + (proximity_score * weights[2] / 100)
  
  RETURN MAX(0, MIN(100, priority_match))
  
END FUNCTION
```

### DISTANCE_SCORE

```pseudocode
FUNCTION DISTANCE_SCORE(distance_km: number) -> number:
  
  IF distance_km <= 2:
    RETURN 100  // Очень близко
  ELSE IF distance_km <= 5:
    RETURN 100 - ((distance_km - 2) * 15)  // 2km = 100, 5km = 55
  ELSE IF distance_km <= 10:
    RETURN 55 - ((distance_km - 5) * 5)  // 5km = 55, 10km = 30
  ELSE IF distance_km <= 20:
    RETURN 30 - ((distance_km - 10) * 2)  // 10km = 30, 20km = 10
  ELSE:
    RETURN MAX(0, 10 - ((distance_km - 20) * 0.5))  // 20km+ = постепенное снижение
  
END FUNCTION
```

### MAX_DISTANCE

```pseudocode
FUNCTION MAX_DISTANCE(duration_type: string) -> number:
  
  SWITCH duration_type:
    "permanent":
      RETURN 25  // Для постоянного проживания готовы ехать дальше
    "short_term_respite":
      RETURN 15  // Для краткосрочного ухода - ближе
    "trial_period":
      RETURN 20  // Для пробного периода - среднее расстояние
    DEFAULT:
      RETURN 20
  
END FUNCTION
```

### BUDGET_THRESHOLD

```pseudocode
FUNCTION BUDGET_THRESHOLD(budget_range: string) -> number:
  
  SWITCH budget_range:
    "1150":
      RETURN 1150
    "1350":
      RETURN 1350
    "all":
      RETURN 999999  // Нет ограничения
    "not_sure":
      RETURN 2000  // Консервативное ограничение
    DEFAULT:
      RETURN 1350
  
END FUNCTION
```

---

## Генерация Объяснений Матчинга

### GENERATE_SAFE_BET_REASONING

```pseudocode
FUNCTION GENERATE_SAFE_BET_REASONING(home: CareHome) -> string[]:
  
  reasons = []
  
  IF home.cqc_rating == "Outstanding":
    reasons.ADD("Outstanding CQC rating - highest regulatory standard")
  
  IF home.financial_stability_score >= 85:
    reasons.ADD("Excellent financial stability - low risk of closure")
  
  IF home.bankruptcy_risk == "low":
    reasons.ADD("Minimal bankruptcy risk - secure long-term future")
  
  IF home.staff_turnover_rate < 15:
    reasons.ADD("Low staff turnover - consistent, familiar care team")
  
  IF home.cqc_safety_rating == "Good" OR "Outstanding":
    reasons.ADD("Strong safety record with no regulatory warnings")
  
  RETURN reasons
  
END FUNCTION
```

### GENERATE_REPUTATION_REASONING

```pseudocode
FUNCTION GENERATE_REPUTATION_REASONING(home: CareHome) -> string[]:
  
  reasons = []
  
  IF home.google_rating >= 4.5:
    reasons.ADD("Exceptional family reviews - " + home.google_rating + " stars from " + home.google_review_count + " families")
  
  IF home.family_engagement_score >= 80:
    reasons.ADD("High family engagement - families visit frequently, indicating satisfaction")
  
  IF home.cqc_rating == "Outstanding":
    reasons.ADD("Outstanding CQC rating - recognised excellence in care")
  
  IF home.google_review_count >= 50:
    reasons.ADD("Well-established reputation with extensive community feedback")
  
  RETURN reasons
  
END FUNCTION
```

### GENERATE_VALUE_REASONING

```pseudocode
FUNCTION GENERATE_VALUE_REASONING(home: CareHome, assessment: AssessmentData) -> string[]:
  
  reasons = []
  
  council_rate = GET_COUNCIL_RATE(assessment.location_postcode, home.care_types[0])
  savings = council_rate - home.weekly_fee_min
  
  IF savings > 0:
    reasons.ADD("Saves £" + savings + "/week compared to council rate - excellent value")
  
  IF home.scores.value >= 75:
    reasons.ADD("Outstanding quality-to-price ratio - premium care at competitive rates")
  
  IF home.weekly_fee_min <= BUDGET_THRESHOLD(assessment.budget_range):
    reasons.ADD("Within your budget while maintaining high care standards")
  
  IF home.fair_cost_gap_score >= 70:
    reasons.ADD("Fair pricing - no hidden premium compared to similar homes")
  
  RETURN reasons
  
END FUNCTION
```

---

## Пример Использования

```typescript
// Входные данные
const assessment: AssessmentData = {
  location_postcode: "B15 2TT",
  care_type: "dementia_care",
  budget_range: "1350",
  funding_type: "privately_funded",
  duration_type: "permanent",
  contact_name: "Sarah Johnson",
  contact_email: "sarah@example.com",
  marketing_opt_in: true,
  priority_order: ["quality", "cost", "proximity"],
  priority_weights: [50, 30, 20]
}

// Вызов функции
const matches = matchCareHomes(assessment, allCareHomes)

// Результат
console.log(matches.safe_bet.name)        // "Greenfield Manor"
console.log(matches.best_reputation.name) // "Oakwood Lodge"
console.log(matches.smart_value.name)     // "Riverside Care Home"
```

---

## Важные Замечания

1. **Приоритеты пользователя** должны влиять на финальное ранжирование, но не должны переопределять категоризацию (Safe Bet всегда должен быть самым безопасным, даже если пользователь приоритизирует cost).

2. **Fallback логика**: Если в какой-то категории нет подходящих домов, нужно расширить критерии поиска (увеличить радиус, смягчить требования по бюджету).

3. **Уникальность**: Три выбранных дома должны быть разными (нельзя выбрать один дом в двух категориях).

4. **Валидация данных**: Все скоры должны быть в диапазоне 0-100, расстояния должны быть вычислены корректно (Haversine formula).

5. **Производительность**: Алгоритм должен работать быстро (< 3 секунды для базы из 1000+ домов). Используйте индексы по postcode, care_type, weekly_fee.

---

## Метрики для Тестирования

- **Точность матчинга**: Дома должны соответствовать своим категориям
- **Релевантность**: Дома должны соответствовать приоритетам пользователя
- **Разнообразие**: Три дома должны быть достаточно разными
- **Производительность**: Время выполнения < 3 секунд
- **Покрытие**: Алгоритм должен находить дома для 95%+ запросов

