# Dynamic Medical Priority - TL;DR

## The Idea
> Auto-adjust priority weights based on actual medical questionnaire answers

**Example:** If user selects nursing care + 3+ conditions + complex medication → automatically boost "Quality & Reputation" weight from 40% → 52% (and reduce others)

---

## Why It's Good

✅ **Transparent:** "We adjusted weights based on your medical needs"
✅ **Smart:** Uses real data (not just static)
✅ **Flexible:** Users can still manually reorder
✅ **Non-intrusive:** Keeps 4-card design
✅ **Mobile-friendly:** No layout changes
✅ **Data-driven:** Personalizes naturally

---

## How It Works (Recommended: Option 2)

### 1. Calculate Complexity Score (0-100)
```
Nursing care → +25
Dementia → +15
Wheelchair → +10
Complex meds → +15
... more factors ...
Total: e.g., 65/100
```

### 2. Adjust Weights
```
Base:      [40%, 30%, 20%, 10%]
           ↓ (medical complexity = 65)
Adjusted:  [52%, 24%, 16%, 8%]
           ↑ Quality gets boost
```

### 3. Show to User
```
┌─────────────────────────────────────┐
│ Quality & Reputation: 52%           │
│ ↳ Auto-adjusted for medical needs   │
│ Cost & Financial: 24%               │
│ Location & Social: 16%              │
│ Comfort & Amenities: 8%             │
└─────────────────────────────────────┘
```

### 4. User Can Override
Still drag/reorder to any priority they want

---

## Medical Data Used

From questionnaire:
- **Care type:** residential, dementia, nursing, palliative
- **Conditions:** dementia, parkinsons, heart, diabetes, etc (count & type)
- **Mobility:** independent → bed_bound
- **Medication:** self-manage → complex
- **Equipment:** special devices needed
- **Fall risk:** yes/no/recent
- **Allergies:** count & severity

---

## Three Options Analyzed

| Option | Design | Complexity | UX Cost | Recommendation |
|--------|--------|-----------|---------|---|
| **Option 1** | Add 5th dynamic card | High | Major | ❌ Too many cards |
| **Option 2** | Adjust 4 cards' weights | Medium | Minimal | ✅ **BEST** |
| **Option 3** | Suggest reordering | Low | Minimal | ⚠️ Extra step |

---

## Implementation (Option 2)

**Add to `priorities-step.tsx`:**

```typescript
const calculateMedicalComplexity = (data) => {
  let score = 0
  if (data.care_types.includes("nursing_care")) score += 25
  if (data.medical_conditions.length >= 3) score += 20
  // ... more logic ...
  return score  // 0-100
}

const adjustedWeights = [
  40 + (score * 0.2),  // Quality: +0-20%
  30 - (score * 0.1),  // Cost: -0-10%
  20 - (score * 0.05), // Location: -0-5%
  10 - (score * 0.05), // Comfort: -0-5%
]
```

**Show in UI:**
```jsx
{complexity > 50 && (
  <Hint>
    💡 Quality weight auto-boosted to {adjustedWeights[0]}% 
    based on your medical needs
  </Hint>
)}
```

---

## Key Metrics

| Complexity | Profile | Typical Weights |
|-----------|---------|---|
| 0-20 | Independent, no conditions | [40, 30, 20, 10] |
| 41-60 | Moderate (2-3 conditions) | [48, 26, 18, 8] |
| 61-80 | High (3+ + complex) | [56, 22, 14, 8] |
| 81-100 | Very high (nursing/palliative) | [60, 20, 12, 8] |

---

## API & Reporting

**Submit:**
```json
{
  "priority_weights": [52, 24, 16, 8],
  "medical_complexity_score": 65,
  "weights_adjusted": true
}
```

**Report:**
```
"We prioritized Quality & Reputation (52%) 
because of your medical complexity score (65/100)"
```

---

## Pro/Con Quick

### Pros
- Smart personalization
- Uses real assessment data
- Transparent to user
- Still fully customizable
- No UX clutter

### Cons
- Need to explain scoring
- Weights change (may confuse some)
- Requires careful UI copy

---

## Next Steps if Approved

1. ✏️ Implement scoring in `priorities-step.tsx`
2. ✏️ Add complexity_score to data type
3. ✏️ Add UI hint explanation
4. 🧪 A/B test vs static weights
5. 📊 Track medical_complexity_score for analytics

---

## One-liner
**Automatically boost "Quality" priority based on medical complexity, let user override - transparent & smart personalization.**

---

📖 Full analysis: [MEDICAL-PRIORITY-DYNAMIC-ANALYSIS.md](file:///Users/alexander/Documents/Products/RCH-frontend/docs/MEDICAL-PRIORITY-DYNAMIC-ANALYSIS.md)
