# Financial Stability Analysis - Data Integration Issue

## Problem

"Financial Stability Analysis не определяются для домов престарелых"

**Root Cause:** Компонент `FinancialStabilityAnalysis` существует, но использует **sample/mock данные**, а не реальные данные домов.

---

## Current State

### Component Exists ✅
📁 [`components/professional-report/financial-stability-analysis.tsx`](file:///Users/alexander/Documents/Products/RCH-frontend/components/professional-report/financial-stability-analysis.tsx)

- Ожидает props с:
  - `altman_z_score` (финансовый индекс)
  - `companies_house_data` (финданные за 3 года)
  - `trend_analysis` (направление)
  - `stability_verdict` (оценка)

### Sample Data Used ✅
📁 [`full-professional-report.tsx:965-1008`](file:///Users/alexander/Documents/Products/RCH-frontend/components/full-professional-report.tsx#L965-L1008)

```typescript
const sampleFinancialData = {
  home_name: "Greenfield Manor",
  altman_z_score: {
    current: 3.2,
    interpretation: "Safe Zone",
    // ...
  },
  companies_house_data: [
    { year: 2023, total_assets: 2500000, ... },
    // ...
  ],
}

// Used in report:
<FinancialStabilityAnalysis {...sampleFinancialData} />
```

---

## What's Missing

### 1. Data Source for Real Homes

Нет источника финданных для каждого дома:
- Altman Z-Score нужно рассчитывать из Companies House
- Данные из Companies House нужно получать by company registration number
- Нужна связь между care home и Companies House ID

### 2. API Integration

Нет API endpoint для получения финданных:
```
GET /api/homes/{homeId}/financial-stability
  → компании House lookup
  → Altman Z-Score calculation
  → Trend analysis
```

### 3. Matching Algorithm Integration

В matching algorithm (для 4 приоритетов + medical) нет:
- Запроса финданных
- Расчета `cost_financial_stability` score
- Использования в ranking

---

## Required Data Structure

### For Each Home

```typescript
interface HomeFinancials {
  home_id: string
  home_name: string
  
  // Company registration
  companies_house_number: string
  company_registration_date: string
  
  // Altman Z-Score
  altman_z_score: {
    current: number        // 0-10 scale
    interpretation: "Safe Zone" | "Grey Zone" | "Distress Zone"
    components: {
      working_capital: number
      retained_earnings: number
      ebit: number
      market_value: number
      sales: number
    }
  }
  
  // Historical data (3 years)
  companies_house_data: {
    year: number
    total_assets: number
    total_liabilities: number
    net_profit: number
    revenue: number
  }[]
  
  // Analysis
  trend_analysis: {
    direction: "Improving" | "Stable" | "Declining"
    confidence: "High" | "Medium" | "Low"
    explanation: string
  }
  
  // Verdict
  stability_verdict: "Financially Secure" | "Stable" | "Monitor Closely" | "Concerning"
  financial_stability_score: number  // 0-100 for ranking
}
```

---

## Implementation Roadmap

### Phase 1: Data Collection (Backend)
1. **Identify:** Каким homes есть Companies House numbers
2. **Fetch:** Получить финданные из Companies House API
3. **Store:** Сохранить в базу (care_homes.companies_house_data)
4. **Calculate:** Посчитать Altman Z-Score
5. **Analyze:** Trend analysis за 3 года

### Phase 2: API Endpoint
```
GET /api/homes/{homeId}/financial-stability
  Response:
  {
    home_id: string
    altman_z_score: {...}
    companies_house_data: [...]
    trend_analysis: {...}
    stability_verdict: string
    financial_stability_score: number
  }
```

### Phase 3: Report Integration
Update `full-professional-report.tsx`:
```typescript
// Instead of:
<FinancialStabilityAnalysis {...sampleFinancialData} />

// Do:
const financialData = await fetch(`/api/homes/${topChoice.id}/financial-stability`)
const financialAnalysis = await financialData.json()
<FinancialStabilityAnalysis {...financialAnalysis} />
```

### Phase 4: Matching Algorithm
Include in cost/financial priority scoring:
```typescript
const costFinancialScore = (home) => {
  const priceScore = calculatePriceScore(home.weekly_cost)
  const stabilityScore = home.financial_stability_score  // 0-100
  const transparencyScore = home.hidden_fees ? 0.7 : 1.0
  
  return (priceScore * 0.4) + 
         (stabilityScore * 0.4) + 
         (transparencyScore * 0.2)
}
```

---

## Quick Fixes (Short-term)

If data unavailable, can:

1. **Show generic message** instead of component:
```tsx
{home.financial_data ? (
  <FinancialStabilityAnalysis {...home.financial_data} />
) : (
  <div className="p-4 bg-blue-50 rounded">
    💡 Financial stability data not yet available for this home. 
    Contact directly to ask about Companies House accounts.
  </div>
)}
```

2. **Use simplified scoring** instead of Altman:
```typescript
financial_stability_score = (
  home.years_in_operation * 5 +
  (home.cqc_rating === 'Outstanding' ? 20 : 10) +
  (home.staff_turnover < 20 ? 15 : 5) +
  (home.has_recent_inspection ? 20 : 0)
) // 0-100
```

3. **Placeholder data** for demo (current state)
```typescript
// Keep using sampleFinancialData for now
// Add comment: "TODO: Replace with real data from Companies House"
```

---

## Companies House API

For implementation:

```typescript
// Required: Companies House API key
const companiesHouseApiKey = process.env.COMPANIES_HOUSE_API_KEY

async function getFinancialData(companiesHouseNumber: string) {
  const response = await fetch(
    `https://api.companieshouse.gov.uk/company/${companiesHouseNumber}`,
    {
      headers: {
        'Authorization': `Basic ${Buffer.from(companiesHouseApiKey + ':').toString('base64')}`
      }
    }
  )
  
  const company = await response.json()
  
  // Extract financials
  const financials = {
    name: company.company_name,
    registration_date: company.date_of_creation,
    accounts: company.accounts.next_due, // Last accounts date
    // ... more fields
  }
  
  // Fetch accounts (separate endpoint)
  const accountsResponse = await fetch(
    `https://api.companieshouse.gov.uk/company/${companiesHouseNumber}/filing-history`
  )
}
```

---

## Current Status

| Component | Status | Notes |
|-----------|--------|-------|
| UI Component | ✅ Done | `financial-stability-analysis.tsx` |
| Sample Data | ✅ Done | Mock data in full-professional-report.tsx |
| Real Data | ❌ Missing | No Companies House integration |
| API Endpoint | ❌ Missing | Need /api/homes/:id/financial-stability |
| Matching Integration | ❌ Missing | Not used in ranking |

---

## Recommendation

### Short-term (Current)
Keep sample data for demo. Add comment in code:
```typescript
// TODO: Replace with real Companies House data
// Requires: Companies House API integration
const sampleFinancialData = { ... }
```

### Mid-term (Next Sprint)
Implement Companies House integration:
1. Set up Companies House API credentials
2. Create backend endpoint to fetch & cache financials
3. Update report component to use real data
4. Integrate into matching algorithm

### Long-term (Product)
ML model to predict financial stability based on:
- CQC history
- Staff retention rates
- Online reviews
- Fee trends
- Inspection outcomes

---

## For User

If you see "Financial Stability Analysis не определяются":

**It's using sample/demo data.** Real data will come from:
1. Companies House accounts (via API)
2. Care home company registration number
3. Calculation: Altman Z-Score, trends, verdict

This is currently in **demo mode** showing the UI layout.
