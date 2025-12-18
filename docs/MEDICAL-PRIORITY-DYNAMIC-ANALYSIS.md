# Dynamic Medical Priority Analysis

## Proposal

Add a **5th dynamic priority** based on medical assessment data, OR dynamically adjust one of the 4 existing priorities based on **medical complexity score** calculated from questionnaire responses.

### Concept
> "The importance of [Quality/Medical Specialization] has been automatically adjusted to [X%] based on your medical needs assessment."

---

## Medical Data Available

### From Assessment Questionnaire

| Field | Type | Possible Values | Complexity |
|-------|------|---|---|
| **care_types** | array | residential, dementia, nursing, palliative, respite | 5 options |
| **medical_conditions** | array | dementia, parkinsons, stroke, heart, diabetes, arthritis, vision, hearing, none | 9 options |
| **mobility_level** | string | independent, walking_aid, wheelchair, bed_bound | 4 levels |
| **medication_management** | string | self_manage, reminders, administration, complex | 4 levels |
| **special_equipment** | array | Various (bed, hoist, monitoring, dialysis, etc) | N/A |
| **fall_history** | string | yes, recent, no | 3 levels |

### Complexity Scoring Framework

**Option A: Simple Binary (0-100)**
```
complexity_score = 0

// Care type complexity
care_types.includes("nursing_care") → +25
care_types.includes("palliative_care") → +20
care_types.includes("dementia_care") → +15

// Conditions complexity
medical_conditions.length >= 3 → +20
medical_conditions.includes("dementia") → +15
medical_conditions.includes("parkinsons") → +12
medical_conditions.includes("heart") → +10

// Mobility complexity
mobility_level === "bed_bound" → +15
mobility_level === "wheelchair" → +10
mobility_level === "walking_aid" → +5

// Medication complexity
medication_management === "complex" → +15
medication_management === "administration" → +10

// Equipment & Safety
special_equipment.length >= 3 → +10
fall_history === "recent" → +10
fall_history === "yes" → +5

major_allergies.length >= 2 → +5
```

**Max Score:** ~145 → Normalize to 100

---

## Implementation Options

### Option 1: 5th Dynamic Priority

**Add** a new 5th priority that dynamically adjusts:

```typescript
const defaultPriorities: Priority[] = [
  {
    id: "quality_reputation",
    title: "Quality & Reputation",
    description: "CQC ratings, staff stability, specialisations",
    weight: 30,  // Reduced from 40
  },
  {
    id: "cost_financial",
    title: "Cost & Financial Stability",
    description: "Price stability, hidden fees, value for money",
    weight: 25,  // Reduced from 30
  },
  {
    id: "location_social",
    title: "Location & Social",
    description: "Distance from family, visiting ease, community",
    weight: 15,  // Reduced from 20
  },
  {
    id: "comfort_amenities",
    title: "Comfort & Amenities",
    description: "Room quality, facilities, décor, atmosphere",
    weight: 10,
  },
  {
    id: "medical_specialization",  // 🆕 DYNAMIC
    title: "Medical Specialization",
    description: "Staff expertise for your specific medical needs",
    weight: calculateMedicalComplexity(formData),  // Adaptive!
  },
]
```

**Pros:**
- ✅ More transparent - shows medical complexity matters
- ✅ Automatically prioritizes specialist homes
- ✅ Still allows user reordering

**Cons:**
- ❌ 5 cards may be too many to drag/reorder
- ❌ Changes UX from original design
- ❌ Mobile becomes cramped

---

### Option 2: Dynamic Weight Adjustment (Recommended)

Keep 4 priorities, but **auto-adjust Quality & Reputation weight** based on medical complexity:

```typescript
const calculateMedicalComplexity = (data: ProfessionalAssessmentData): number => {
  let score = 0
  
  // Care type
  if (data.care_types.includes("nursing_care")) score += 25
  if (data.care_types.includes("palliative_care")) score += 20
  if (data.care_types.includes("dementia_care")) score += 15
  
  // Medical conditions
  score += data.medical_conditions.length * 3
  if (data.medical_conditions.includes("dementia")) score += 10
  if (data.medical_conditions.includes("parkinsons")) score += 8
  
  // Mobility
  const mobilityWeights = {
    bed_bound: 15,
    wheelchair: 10,
    walking_aid: 5,
    independent: 0,
  }
  score += mobilityWeights[data.mobility_level] || 0
  
  // Medication
  const medicationWeights = {
    complex: 15,
    administration: 10,
    reminders: 3,
    self_manage: 0,
  }
  score += medicationWeights[data.medication_management] || 0
  
  // Equipment & Safety
  score += data.special_equipment.length * 5
  score += data.fall_history === "recent" ? 10 : data.fall_history === "yes" ? 5 : 0
  score += data.major_allergies.length * 3
  
  return Math.min(score, 100)
}

// On priorities step:
const medicalScore = calculateMedicalComplexity(formData)
const baseWeights = [40, 30, 20, 10]
const adjustedWeights = [
  baseWeights[0] + (medicalScore * 0.2),  // Quality gets 0-20% boost
  baseWeights[1] - (medicalScore * 0.1),  // Cost reduced
  baseWeights[2] - (medicalScore * 0.05), // Location slightly reduced
  baseWeights[3] - (medicalScore * 0.05), // Comfort slightly reduced
]
// Normalize to 100%
```

**Visual Feedback:**
```
Quality & Reputation: 40% → 52% (auto-adjusted for medical needs)
Cost & Financial: 30% → 24%
Location & Social: 20% → 16%
Comfort & Amenities: 10% → 8%
```

**Pros:**
- ✅ Keeps 4-card design intact
- ✅ Transparent to user ("auto-adjusted for your medical needs")
- ✅ Still allows manual reordering
- ✅ Subtle but impactful
- ✅ Mobile UX unchanged

**Cons:**
- ⚠️ Harder to explain in UI
- ⚠️ Weight changes need clear labeling

---

### Option 3: Suggested Reordering (Lightest Touch)

No automatic adjustment. Instead:

1. Calculate medical complexity score
2. Show suggestion: **"Based on your assessment, we recommend prioritizing Medical Specialization"**
3. Auto-sort priorities based on complexity
4. User can override/reorder

```typescript
// If complexity > 60:
suggestedOrder = ["quality_reputation", "cost_financial", "location_social", "comfort_amenities"]

// If complexity < 30:
suggestedOrder = ["comfort_amenities", "location_social", "cost_financial", "quality_reputation"]
```

**Pros:**
- ✅ Most transparent
- ✅ User maintains full control
- ✅ Educational (shows why recommendation)

**Cons:**
- ❌ Extra UI element (recommendation banner)
- ❌ Not fully automatic
- ❌ May confuse users

---

## Recommended Approach: Option 2

**Why?**
1. **Non-intrusive:** Stays within 4-card design
2. **Data-driven:** Uses actual assessment data
3. **Transparent:** Show adjustment in UI
4. **Flexible:** Users can still reorder manually
5. **Mobile-friendly:** No layout changes

### Implementation Steps

1. Add `calculateMedicalComplexity()` function to `priorities-step.tsx`

```typescript
const calculateMedicalComplexity = (data: ProfessionalAssessmentData): number => {
  // Scoring logic (see above)
}

const getMedicalPriorityWeight = (baseScore: number): number => {
  const boost = baseScore * 0.2  // 0-20% boost
  return Math.min(40 + boost, 60) // Cap at 60%
}
```

2. Update `handlePrioritiesComplete()` to calculate score before rendering

```typescript
const handlePrioritiesComplete = (priorities: string[], weights: number[]) => {
  const medicalComplexity = calculateMedicalComplexity(formData)
  const adjustedWeights = adjustWeightsForMedicalNeeds(weights, medicalComplexity)
  
  setFormData((prev) => ({
    ...prev,
    priority_order: priorities,
    priority_weights: adjustedWeights,
    medical_complexity_score: medicalComplexity,  // For tracking
  }))
}
```

3. Show hint in UI

```jsx
{medicalComplexity > 50 && (
  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
    <p className="text-sm text-blue-800">
      💡 <strong>Note:</strong> We've boosted "Quality & Reputation" weight to {adjustedWeights[0]}% 
      based on your medical needs assessment.
    </p>
  </div>
)}
```

---

## Data Fields to Add

### Type Extension
```typescript
export type ProfessionalAssessmentData = {
  // ... existing fields ...
  priority_order?: string[]
  priority_weights?: number[]
  medical_complexity_score?: number  // NEW: 0-100
}
```

### Display in Confirmation
```
Your priorities (personalized for your medical needs):

Priority #1: Quality & Reputation (52%)
  ↳ Boosted due to medical specialization needs

Priority #2: Cost & Financial (24%)
Priority #3: Location & Social (16%)
Priority #4: Comfort & Amenities (8%)
```

---

## User Experience

### Current Flow
```
[Budget Step]
     ↓
[Priorities Step: 4 static cards]
  → Manual reorder
  → Confirm
```

### With Dynamic Adjustment
```
[Budget Step (includes all medical data)]
     ↓
[Priorities Step]
  → Load 4 cards
  → Calculate complexity: 72/100
  → Adjust weights: [52%, 24%, 16%, 8%]
  → Show hint: "Auto-adjusted for medical needs"
  → User can manually reorder if desired
  → Confirm
```

---

## A/B Testing Opportunity

**Variant A (Control):** Static [40, 30, 20, 10] weights
**Variant B (Dynamic):** Medical-adjusted weights with hint

**Metrics:**
- Do homes with better medical specialization rank higher?
- Do users reorder from suggested weights?
- Does personalization increase satisfaction scores?

---

## API & Reporting

### Include in Submission
```json
{
  "priority_order": ["quality_reputation", "cost_financial", "location_social", "comfort_amenities"],
  "priority_weights": [52, 24, 16, 8],
  "medical_complexity_score": 72,
  "initial_weights": [40, 30, 20, 10],
  "weights_adjusted": true
}
```

### Professional Report Impact
```
"Based on your medical complexity score (72/100), 
we prioritized homes with strong CQC ratings and 
specialized staff expertise. Quality & Reputation 
received 52% weight in our ranking algorithm."
```

---

## Complexity Score Ranges

| Score | Complexity Level | Typical Profile |
|-------|-----------------|---|
| 0-20 | Minimal | Independent, no conditions, self-managed meds |
| 21-40 | Low | 1-2 conditions, walking aid, needs reminders |
| 41-60 | Moderate | 2-3 conditions, wheelchair, medication admin |
| 61-80 | High | 3+ conditions, complex meds, specialized care |
| 81-100 | Very High | Nursing/palliative care, bed-bound, multiple needs |

**Examples:**
- **Score 15:** Residential care, no conditions, independent → Comfort & Amenities priority
- **Score 45:** Dementia care, 2 conditions, walking aid → Quality more important
- **Score 75:** Nursing care, 4 conditions, wheelchair, complex meds → Quality essential

---

## Future Enhancements

1. **ML Refinement:** Train model on successful placements to improve scoring
2. **Conditional Recommendations:** "We recommend changing Priority #2 to Cost..." 
3. **Priority Locking:** Lock top priority for high-complexity cases
4. **Specialist Matching:** Show "This home has [X] specialists for your conditions"
5. **Confidence Scores:** "Quality & Reputation (52%) - Confidence: 89%"

---

## Decision Matrix

| Option | Complexity | UX Impact | Transparency | User Control | Recommendation |
|--------|-----------|-----------|--------------|--------------|---|
| **Option 1 (5 cards)** | High | Major | Explicit | High | ❌ Too complex |
| **Option 2 (Dynamic weights)** | Medium | Minimal | Good | High | ✅ **BEST** |
| **Option 3 (Suggestion)** | Low | Minimal | Excellent | High | ⚠️ Extra step |
| Static (Current) | None | None | N/A | N/A | ✅ Safe baseline |

---

## Conclusion

**Recommend implementing Option 2** with:
1. ✅ Medical complexity score calculation
2. ✅ Dynamic weight adjustment (Quality gets 0-20% boost)
3. ✅ Clear UI hint explaining adjustment
4. ✅ Full user override capability
5. ✅ Track score for analytics & reporting

This provides **data-driven personalization without overwhelming UX complexity**.
