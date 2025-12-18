# Matching Results Architecture

## Complete Picture

### Assessment Flow
```
Professional Assessment (18 steps)
       ↓
[Step 18] Priorities Selection
  └─ User chooses & reorders 4 priorities:
     1. Quality & Reputation
     2. Cost & Financial Stability
     3. Location & Social
     4. Comfort & Amenities
       ↓
Assessment submitted + API processes
       ↓
Matching Algorithm runs
  ├─ Score homes by Priority #1 (Quality)
  ├─ Score homes by Priority #2 (Cost)
  ├─ Score homes by Priority #3 (Location)
  ├─ Score homes by Priority #4 (Comfort)
  └─ Score homes by MEDICAL criteria ← Separate!
       ↓
Results Screen: Show 5 homes
```

---

## Results Screen Layout

```
┌─────────────────────────────────────────────────────┐
│  Your Personalized Matches                          │
│  (Based on: Quality, Cost, Location, Comfort)       │
└─────────────────────────────────────────────────────┘

🏆 PRIORITY #1: Quality & Reputation (40%)
┌─────────────────────────────────────────────────────┐
│ Evergreen Care Home                                 │
│ ⭐⭐⭐⭐⭐ CQC: Outstanding                            │
│ 📍 5 miles from you                                 │
│ "Top-rated for quality of care and staff expertise" │
│ [View Details] [Request Visit]                      │
└─────────────────────────────────────────────────────┘

💰 PRIORITY #2: Cost & Financial (25%)
┌─────────────────────────────────────────────────────┐
│ Meadows Residential Care                            │
│ 💷 £950/week (excellent value)                      │
│ "Best value home on your matches list"              │
│ [View Details] [Request Visit]                      │
└─────────────────────────────────────────────────────┘

📍 PRIORITY #3: Location & Social (20%)
┌─────────────────────────────────────────────────────┐
│ Riverside Living                                    │
│ 📍 2 miles away (closest to you)                    │
│ 🎭 Active social calendar, day trips                │
│ [View Details] [Request Visit]                      │
└─────────────────────────────────────────────────────┘

🏠 PRIORITY #4: Comfort & Amenities (15%)
┌─────────────────────────────────────────────────────┐
│ Sunnybrook Manor                                    │
│ 🛏️ Luxury en-suite rooms                            │
│ 🍽️ 5-star dining, gardens, activities               │
│ [View Details] [Request Visit]                      │
└─────────────────────────────────────────────────────┘

🏥 MEDICAL MATCH (Separate Dimension)
┌─────────────────────────────────────────────────────┐
│ Specialist Dementia Care Unit                       │
│ 🔬 Dementia + Parkinsons specialist staff          │
│ 🩺 24h nurse on-call, complex med management        │
│ ↳ Matches your complex medical needs best           │
│ [View Details] [Request Visit]                      │
└─────────────────────────────────────────────────────┘
```

---

## Scoring Algorithm Overview

### Four Priority-Based Rankings

```
For each home, calculate:

Priority #1 Score = (CQC_rating * 0.4) + (staff_stability * 0.3) + (specialisations * 0.3)
Priority #2 Score = (price_stability * 0.4) + (value_perception * 0.3) + (negotiation_history * 0.3)
Priority #3 Score = (distance_proximity * 0.5) + (visiting_ease * 0.3) + (social_activities * 0.2)
Priority #4 Score = (room_quality * 0.4) + (facilities * 0.3) + (atmosphere * 0.3)

Best Home for Priority #1 = argmax(Priority #1 Score)
Best Home for Priority #2 = argmax(Priority #2 Score)
Best Home for Priority #3 = argmax(Priority #3 Score)
Best Home for Priority #4 = argmax(Priority #4 Score)
```

### Fifth: Medical-Based Ranking

```
Medical Score = (staff_expertise_match * 0.4) 
              + (condition_support * 0.3)
              + (equipment_availability * 0.2)
              + (medication_management * 0.1)

Best Home for Medical = argmax(Medical Score)

Inputs:
- User's conditions (dementia, parkinsons, etc)
- User's mobility level
- User's medication complexity
- User's equipment needs
- User's fall risk
```

---

## Why 4 + Medical Is Perfect

### Current Design (Stays as is ✅)

```typescript
const defaultPriorities: Priority[] = [
  {
    id: "quality_reputation",
    title: "Quality & Reputation",
    weight: 40,
  },
  {
    id: "cost_financial",
    title: "Cost & Financial Stability",
    weight: 30,
  },
  {
    id: "location_social",
    title: "Location & Social",
    weight: 20,
  },
  {
    id: "comfort_amenities",
    title: "Comfort & Amenities",
    weight: 10,
  },
]
```

### Medical Scoring (Separate Implementation)

```typescript
interface MedicalMatch {
  dementia_care: boolean
  parkinsons_care: boolean
  nursing_care: boolean
  wheelchair_accessible: boolean
  complex_medication_support: boolean
  fall_risk_management: boolean
  dietary_restrictions: boolean
  allergy_management: boolean
}

const calculateMedicalScore = (home: Home, assessment: ProfessionalAssessmentData): number => {
  let score = 0
  
  // Condition matching
  if (assessment.medical_conditions.includes("dementia") && home.specialisations.includes("dementia")) {
    score += 25
  }
  if (assessment.care_types.includes("nursing_care") && home.has_nurses) {
    score += 25
  }
  
  // Mobility support
  if (assessment.mobility_level === "wheelchair" && home.wheelchair_accessible) {
    score += 15
  }
  
  // Medication management
  if (assessment.medication_management === "complex" && home.can_handle_complex_meds) {
    score += 15
  }
  
  // Equipment & safety
  score += home.special_equipment_count * 5
  if (assessment.fall_history && home.fall_prevention_training) {
    score += 10
  }
  
  return Math.min(score, 100)
}
```

---

## Results Data Structure

```typescript
interface MatchingResults {
  assessment_id: string
  priority_order: string[]
  priority_weights: number[]
  
  // 5 homes with their role
  priority_matches: {
    priority_1: {
      home_id: string
      home_name: string
      score: number
      reason: string  // "Top-rated for Quality"
      priority_label: "Quality & Reputation"
    },
    priority_2: { ... },
    priority_3: { ... },
    priority_4: { ... },
  },
  
  medical_match: {
    home_id: string
    home_name: string
    medical_score: number
    matching_conditions: string[]
    reason: string  // "Best specialist match for Dementia + Parkinsons"
  }
}
```

---

## User Journey (Full)

### Step 1: Professional Assessment (18 steps)
```
Steps 1-17: Collect medical, location, budget, safety data
Step 18: User selects & reorders 4 priorities
         └─ User sets: Quality > Cost > Location > Comfort
```

### Step 2: Processing (Backend)
```
API /assessments/professional ← receives 4 priorities + medical data

Backend:
  1. Calculate medical complexity
  2. Run 4 priority-based ranking algorithms
  3. Run 1 medical ranking algorithm
  4. Get top home for each: Best Quality, Best Cost, Best Location, Best Comfort, Best Medical
  5. Return 5 homes with labels
```

### Step 3: Results Display
```
Professional Report Page shows:

Section 1: Your Personalized Matches
  - 5 cards/homes
  - Each labeled with its category (Priority #1, #2, #3, #4, Medical)
  - Show why each home was selected

Section 2: Detailed Comparisons
  - Side-by-side tables
  - Full profiles
  - Contact info, visit booking
```

---

## No Need for Dynamic Medical Priority

❌ **Don't need Option A/B/C from previous analysis**

**Why?**
- Medical is NOT a replaceable priority
- Medical is a **separate scoring dimension**
- 4 priorities always stay the same
- Medical homes are found via different algorithm

**This means:**
- ✅ Current 4-card design is PERFECT
- ✅ Medical scoring happens in backend matching
- ✅ No complex priority swapping logic
- ✅ Clean separation of concerns

---

## Implementation Checklist

### Frontend (PrioritiesStep) - ALREADY DONE
- [x] 4 draggable cards
- [x] Drag-reorder on desktop
- [x] Arrow buttons on mobile
- [x] Save to formData
- [x] No changes needed!

### Backend (Matching Algorithm) - TODO
- [ ] Implement Priority-1 scoring function
- [ ] Implement Priority-2 scoring function
- [ ] Implement Priority-3 scoring function
- [ ] Implement Priority-4 scoring function
- [ ] Implement Medical scoring function
- [ ] Find top home for each (5 total)
- [ ] Generate reasoning strings
- [ ] Return structured MatchingResults

### Results Display (Professional Report) - TODO
- [ ] Create 5 match cards (priority + medical)
- [ ] Show ranking reason for each
- [ ] Link to home details
- [ ] Offer visit booking
- [ ] Compare homes side-by-side

---

## Example: Real User Flow

### Assessment Input (User selects)
```
Priorities: Quality (reordered to #1) > Location (#2) > Cost (#3) > Comfort (#4)
Medical: Dementia + Parkinsons, wheelchair user, complex meds, fall history
Location: Birmingham
Budget: £1,200/week
```

### Matching Output (Backend calculates)
```
Best by Priority #1 (Quality):
  → Evergreen Care Home (CQC Outstanding, 98/100)
  
Best by Priority #2 (Location):
  → Riverside Living (2 miles away, active social)
  
Best by Priority #3 (Cost):
  → Meadows Residential (£950/week, stable pricing)
  
Best by Priority #4 (Comfort):
  → Sunnybrook Manor (luxury rooms, 5-star dining)
  
Best by Medical Match:
  → Specialist Dementia Unit (dementia+parkinsons staff, wheelchair, complex meds support)
```

### Display (Professional Report)
```
Your Personalized Matches

🏆 Your #1 Priority: Quality & Reputation
   Evergreen Care Home
   [Why: Matches your top priority...]

📍 Your #2 Priority: Location & Social  
   Riverside Living
   [Why: Closest to you, great activities...]

💰 Your #3 Priority: Cost & Financial
   Meadows Residential
   [Why: Best value in your budget...]

🏠 Your #4 Priority: Comfort & Amenities
   Sunnybrook Manor
   [Why: Premium facilities match your comfort needs...]

🏥 Medical Specialist Match
   Specialist Dementia Unit
   [Why: Best expertise for Dementia + Parkinsons, wheelchair accessible, handles complex meds...]
```

---

## Conclusion

**Your instinct was 100% correct:**

1. ✅ **Assessment = 4 priority cards** (user reorders)
2. ✅ **Matching = 5 homes** (1 per priority + 1 medical)
3. ✅ **Medical scoring ≠ Priority** (separate algorithm)

This is cleaner than any dynamic medical priority because:
- Priorities remain stable (Quality, Cost, Location, Comfort)
- Medical is additive (5th home), not replaceable
- User always sees 4 clear categories
- Medical complexity is implicitly handled in results

**No changes needed to PrioritiesStep component!**
The 4-card design is exactly right.

Focus now should be on backend matching algorithms.
