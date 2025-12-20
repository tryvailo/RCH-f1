# Professional Assessment - Full Structure & Questions

## Overview
**Price:** £119  
**Duration:** 8-12 minutes  
**Questions:** 17 total  
**Delivery:** 48 hours  
**Data Protection:** Secure & Confidential

---

## Assessment Structure

### 6 Categories (Linear Flow)
1. **Contact** (4 questions)
2. **Location** (3 questions)
3. **Medical** (5 questions)
4. **Safety** (4 questions)
5. **Budget** (1 question)
6. **Priorities** (1 question)

**Total: 18 steps** (including priorities ranking)

---

## 📋 CATEGORY 1: CONTACT (4 Questions)

### Q1: Your Name
- **Field Type:** Text input
- **Validation:** Required
- **Placeholder:** "e.g. John Smith"
- **Reinforcement:** "Thank you. Let's continue with your details."
- **Data Field:** `full_name`

### Q2: Email
- **Field Type:** Text input
- **Validation:** Valid email required
- **Placeholder:** "e.g. john@example.com"
- **Reinforcement:** "Perfect. We'll send your report here."
- **Data Field:** `email`

### Q3: Phone
- **Field Type:** Text input (tel)
- **Validation:** Required
- **Placeholder:** "e.g. 07700 900123"
- **Context:** "We may call to clarify care requirements"
- **Reinforcement:** "Great. We may call to clarify details."
- **Data Field:** `phone`

### Q4: Emergency Contact
- **Field Type:** Text input
- **Validation:** Required
- **Placeholder:** "e.g. John Smith - 07700 900456"
- **Context:** "A family member or friend we can contact if needed"
- **Reinforcement:** "Important contact noted."
- **Data Field:** `emergency_contact`

---

## 🗺️ CATEGORY 2: LOCATION (3 Questions)

### Q5: Preferred Location
- **Field Type:** Text input
- **Validation:** Required
- **Placeholder:** "e.g. Birmingham or B15 2TT"
- **Context:** "Enter a town, city, or postcode"
- **Reinforcement:** "Excellent. Now we know where to search."
- **Data Field:** `preferred_location`

### Q6: Search Distance
- **Field Type:** Single select (option cards)
- **Validation:** Required
- **Options:**
  - 5 miles
  - 10 miles
  - 15 miles
  - 20 miles
  - 30+ miles
- **Context:** "A wider area gives more options"
- **Reinforcement:** "Understood. We'll focus on this area."
- **Data Field:** `max_distance`

### Q7: Placement Timeline
- **Field Type:** Single select (option cards)
- **Validation:** Required
- **Options:**
  - Urgent (next 2 weeks)
  - Soon (1-3 months)
  - Within 3-6 months
  - 6+ months
  - Not sure yet
- **Context:** "This helps us prioritise your search"
- **Reinforcement:** "Timing noted. We'll prioritise accordingly."
- **Data Field:** `placement_timeline`

---

## 🏥 CATEGORY 3: MEDICAL (5 Questions)

### Q8: Care Type
- **Field Type:** Multi-select (checkboxes)
- **Validation:** Required (at least 1)
- **Options:**
  | Label | Description | Icon |
  |-------|-------------|------|
  | Residential Care | Help with daily living activities | Home |
  | Dementia Care | Specialist memory care support | Brain |
  | Nursing Care | 24-hour nursing support | Stethoscope |
  | Palliative Care | End-of-life comfort care | HeartPulse |
  | Respite Care | Short-term care breaks | Calendar |

- **Context:** "Select all that apply"
- **Reinforcement:** "This helps us find specialist homes."
- **Data Field:** `care_types[]`

### Q9: Medical Conditions
- **Field Type:** Multi-select (2-column grid)
- **Validation:** Optional (can select "None of the above")
- **Options:**
  | Label | Icon |
  |-------|------|
  | Dementia / Alzheimer's | Brain |
  | Parkinson's Disease | Activity |
  | Stroke Recovery | HeartPulse |
  | Heart Conditions | Heart |
  | Diabetes | Activity |
  | Arthritis | Accessibility |
  | Visual Impairment | Eye |
  | Hearing Impairment | Ear |
  | None of the above | CircleOff |

- **Context:** "Are there any medical conditions we should know about? Select all that apply"
- **Reinforcement:** "We'll match homes with appropriate support."
- **Data Field:** `medical_conditions[]`

### Q10: Mobility Level
- **Field Type:** Single select (option cards)
- **Validation:** Required
- **Options:**
  | Label | Description |
  |-------|-------------|
  | Fully Independent | Walks without assistance |
  | Uses Walking Aid | Stick, frame, or walker |
  | Wheelchair User | Requires wheelchair most of the time |
  | Bed Bound | Limited to bed or chair |

- **Context:** "This affects room and facility requirements"
- **Reinforcement:** "Accessibility requirements noted."
- **Data Field:** `mobility_level`

### Q11: Medication Management
- **Field Type:** Single select (option cards)
- **Validation:** Required
- **Options:**
  | Label | Description |
  |-------|-------------|
  | Self-Managed | Can manage own medication |
  | Needs Reminders | Reminders to take medication |
  | Full Administration | Staff to administer medication |
  | Complex Medication | Injections or special handling |

- **Context:** "This ensures proper care planning"
- **Reinforcement:** "We'll ensure proper medication management."
- **Data Field:** `medication_management`

### Q12: Special Equipment
- **Field Type:** Multi-select (2-column grid)
- **Validation:** Optional (can select "No Special Equipment")
- **Options:**
  | Label | Icon |
  |-------|------|
  | No Special Equipment | CircleOff |
  | Hospital-Style Bed | Bed |
  | Hoist / Lift | Accessibility |
  | Oxygen Equipment | Activity |
  | Pressure Relief Mattress | Bed |

- **Context:** "Select all that apply"
- **Reinforcement:** "Special equipment needs recorded."
- **Data Field:** `special_equipment[]`

---

## 🛡️ CATEGORY 4: SAFETY (4 Questions)

### Q13: Fall Risk
- **Field Type:** Single select (option cards)
- **Validation:** Required
- **Options:**
  | Label | Description |
  |-------|-------------|
  | No Falls | No falls in the past year |
  | Occasional Falls | 1-2 falls in the past year |
  | Frequent Falls | 3+ falls in the past year |
  | Recent Serious Fall | Required hospital treatment |

- **Context:** "This is important for safety planning"
- **Reinforcement:** "Safety history is crucial. Thank you."
- **Data Field:** `fall_history`

### Q14: Allergies
- **Field Type:** Multi-select (2-column grid)
- **Validation:** Optional
- **Options:**
  | Label | Icon |
  |-------|------|
  | No Known Allergies | Check |
  | Penicillin / Antibiotics | Pill |
  | Latex | Shield |
  | Food Allergies | UtensilsCrossed |
  | Other Allergies | HelpCircle |

- **Context:** "Select all that apply"
- **Reinforcement:** "Allergy information saved."
- **Data Field:** `major_allergies[]`

### Q15: Dietary Requirements
- **Field Type:** Multi-select (2-column grid)
- **Validation:** Optional
- **Options:**
  | Label | Icon |
  |-------|------|
  | No Special Diet | CircleOff |
  | Vegetarian | Leaf |
  | Vegan | Leaf |
  | Kosher | Wheat |
  | Halal | Wheat |
  | Diabetic | Apple |
  | Gluten-Free | Wheat |
  | Fortified Food | Cookie |
  | Soft Foods | UtensilsCrossed |

- **Context:** "Select all that apply"
- **Reinforcement:** "Dietary needs noted."
- **Data Field:** `dietary_requirements[]`

### Q16: Behavioural Considerations
- **Field Type:** Multi-select (vertical stacking)
- **Validation:** Optional
- **Options:**
  | Label | Description |
  |-------|-------------|
  | Anxiety / Stress | Experiences worry or stress |
  | Depression | Low mood or emotional support needed |
  | Wandering Risk | May attempt to leave unsupervised |
  | Sundowning | Confusion or agitation in evenings |
  | Aggression Risk | May become aggressive or hostile |
  | Social Withdrawal | Prefers isolation or limited interaction |

- **Context:** "Select all that apply — this is confidential"
- **Reinforcement:** "Nearly there — just one more question."
- **Data Field:** `behavioral_concerns[]`

---

## 💷 CATEGORY 5: BUDGET (1 Question)

### Q17: Weekly Budget
- **Field Type:** Single select (option cards)
- **Validation:** Required
- **Options:**
  | Label |
  |-------|
  | Under £500/week |
  | £500-£750/week |
  | £750-£1000/week |
  | £1000-£1500/week |
  | £1500-£2000/week |
  | £2000+/week |
  | Not sure / Flexible |

- **Context:** "This helps us find homes within your range"
- **Data Field:** `monthly_budget`

---

## 🎯 CATEGORY 6: PRIORITIES (1 Question)

### Q18: Lifestyle Priorities Ranking
- **Component:** `PrioritiesStep`
- **Type:** Drag-to-rank interface
- **Cards (4 Lifestyle Priorities):**
  1. **Quality & Reputation** - Standard of care, ratings, reviews
  2. **Cost & Financial** - Value for money, affordability
  3. **Location & Social** - Proximity to family, activities, community
  4. **Comfort & Amenities** - Room quality, facilities, environment

- **Medical Handling:** Separate algorithmic matching (not ranked here)
- **Output:** 5 homes
  - 4 homes matching lifestyle priorities
  - 1 home best for medical needs

- **Context:** 
  - "Rank Your Lifestyle Priorities"
  - "What matters most to your family?"
  - "While you rank homes here by lifestyle fit (quality, cost, location, comfort), we analyze your medical conditions, mobility, and care requirements independently for accurate specialist matching."

- **Data Field:** `priority_order[]`, `priority_weights[]`

---

## Data Structure

```typescript
type ProfessionalAssessmentData = {
  // Contact
  full_name: string
  email: string
  phone: string
  emergency_contact: string

  // Location
  preferred_location: string
  max_distance: string
  placement_timeline: string

  // Medical
  care_types: string[]
  medical_conditions: string[]
  mobility_level: string
  medication_management: string
  special_equipment: string[]

  // Safety
  fall_history: string
  major_allergies: string[]
  dietary_requirements: string[]
  behavioral_concerns: string[]

  // Budget
  monthly_budget: string

  // Priorities
  priority_order?: string[]
  priority_weights?: number[]
}
```

---

## Question Types Summary

| Type | Questions | Examples |
|------|-----------|----------|
| **Text Input** | 5 | Name, Email, Phone, Emergency, Location |
| **Single Select** | 7 | Distance, Timeline, Mobility, Medication, Falls, Budget, Priority |
| **Multi-Select** | 5 | Care Type, Conditions, Equipment, Allergies, Dietary, Behaviour |
| **Ranking** | 1 | Lifestyle Priorities |
| **TOTAL** | **18** | |

---

## Navigation & Validation

### Step Flow
```
Contact (4) → Location (3) → Medical (5) → Safety (4) → Budget (1) → Priorities (1)
```

### Validation Rules
- **All text fields:** Required
- **All single-select:** Required
- **Multi-select fields:** Optional (except Care Type = required)
- **Priorities ranking:** Required (all 4 cards must be ranked)

### Button Logic
- **Back:** Available from step 2 onwards
- **Continue:** 
  - Enabled after valid input
  - Becomes "Continue to Payment" on last step
- **Reinforcement Messages:** Positive feedback after each step

---

## UX Features

✅ **Progress Tracking**
- Category indicators (6 total)
- Step counter: "Question X of 18"
- Visual progress bar with category icons

✅ **Visual Design**
- Option cards with icons & colors
- Color-coded by category
- Smooth transitions & animations

✅ **Accessibility**
- Semantic HTML structure
- Screen reader friendly
- WCAG AA contrast compliance
- Clear visual hierarchy

✅ **Mobile Responsive**
- Single column on mobile
- Grid layouts adapt
- Touch-friendly card sizes

✅ **Security & Trust**
- "Your data is secure and confidential"
- "Pay only after completing questionnaire"

---

## Messaging Strategy

**Key Principles:**
1. **Transparency:** Clear about what data is used for
2. **Medical Reassurance:** Medical needs handled separately & thoroughly
3. **Value Proposition:** 5 homes (not just 1) = more choice
4. **Psychological Safety:** Questions are non-judgmental, confidential
5. **Efficiency:** "8-12 minutes" sets clear expectation

---

## Files Referenced

📁 **Components:**
- `/components/professional-assessment/priorities-step.tsx` - Q18 (Ranking)
- `/app/(dynamic)/professional-assessment/steps/page.tsx` - All 18 steps

📁 **Documentation:**
- `MEDICAL-MESSAGING-SUMMARY.md` - Q18 messaging details
- `PRIORITIES-UI-MESSAGING.md` - 6 tone options for Q18
