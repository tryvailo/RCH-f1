# Professional Assessment - Priorities Step Integration

## Overview

A new **final step (18th question)** has been added to the Professional Assessment questionnaire that allows users to personalize care home ranking by selecting and reordering 4 priority categories.

---

## Implementation Details

### Files Modified/Created

1. **New Component:** [`components/professional-assessment/priorities-step.tsx`](file:///Users/alexander/Documents/Products/RCH-frontend/components/professional-assessment/priorities-step.tsx)
   - Standalone reusable component with drag-and-drop functionality
   - 4 default priorities with predefined weights

2. **Modified:** [`app/(dynamic)/professional-assessment/steps/page.tsx`](file:///Users/alexander/Documents/Products/RCH-frontend/app/(dynamic)/professional-assessment/steps/page.tsx)
   - Added `priority_order` and `priority_weights` to `ProfessionalAssessmentData` type
   - Added new "Priorities" step to `STEPS` array
   - Added validation logic (always valid - has defaults)
   - Integrated `PrioritiesStep` component into render flow
   - Updated navigation logic to handle priorities step

### Step Configuration

```typescript
{
  id: "priorities",
  label: "Priorities",
  icon: Target,
  category: "Priorities",
  reinforcement: ""
}
```

**Position:** Final step (18 of 18)
**Category:** New "Priorities" category added to the progress tracker

---

## 4 Default Priorities

| # | ID | Title | Description | Weight |
|---|---|---|---|---|
| 1 | `quality_reputation` | Quality & Reputation | CQC ratings, staff stability, care quality, specialisations | 40% |
| 2 | `cost_financial` | Cost & Financial Stability | Price stability, hidden fees, value for money, negotiation potential | 30% |
| 3 | `location_social` | Location & Social | Distance from family, visiting ease, community, activities | 20% |
| 4 | `comfort_amenities` | Comfort & Amenities | Room quality, facilities, décor, atmosphere, personal touches | 10% |

---

## User Flow

```
[Budget Step]
     ↓
[Priorities Step]  ← New!
  - User sees 4 cards
  - Desktop: Drag to reorder
  - Mobile: Use arrows to reorder
  - Button: "Got it - Let's See Your Homes"
     ↓
[Confirmation Screen]
  - Shows priority order with weights
  - Auto-advances after confirmation
     ↓
[Checkout]
```

---

## Component Features

### Desktop Experience
- ✅ **Drag & Drop:** Smooth drag-and-drop to reorder cards
- ✅ **Visual Feedback:** Grip icon, hover effects, border highlight on drag-over
- ✅ **Keyboard Support:** Arrow keys for navigation when card is focused
- ✅ **Weight Badges:** Show percentage weight for each position

### Mobile Experience
- ✅ **Touch-Friendly:** Up/Down arrow buttons instead of drag
- ✅ **Disabled Dragging:** `draggable={!isTouchDevice}`
- ✅ **Large Buttons:** Accessible button size (p-2)
- ✅ **No Weight Display:** Weights hidden on mobile (space saving)

### Accessibility
- ✅ **ARIA Labels:** Descriptive labels for screen readers
- ✅ **Keyboard Navigation:** Full keyboard control support
- ✅ **Focus States:** Clear focus ring styling
- ✅ **Role Semantics:** List structure with listitem roles

---

## Data Structure

### Input to Priorities Step
```typescript
interface Priority {
  id: string                    // Unique ID: "quality_reputation"
  title: string                 // Display title
  description: string           // Context text
  icon: React.ReactNode         // Lucide icon component
  weight?: number               // Optional, calculated from position
}
```

### Output from Priorities Step
```typescript
const onComplete = (
  priorities: string[],         // ["quality_reputation", "cost_financial", "location_social", "comfort_amenities"]
  weights: number[]             // [40, 30, 20, 10]
) => {
  // Saved to formData.priority_order & formData.priority_weights
}
```

### Saved to FormData
```typescript
{
  // ... existing fields ...
  priority_order: ["quality_reputation", "cost_financial", "location_social", "comfort_amenities"],
  priority_weights: [40, 30, 20, 10]
}
```

---

## Integration Points

### With Assessment Submission
The priorities are included in the API POST to `/api/assessments/professional`:

```typescript
const response = await fetch("/api/assessments/professional", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    full_name: "...",
    email: "...",
    // ... other fields ...
    priority_order: ["quality_reputation", ...],
    priority_weights: [40, 30, 20, 10],
  })
})
```

### With Professional Report
The priorities influence:
1. **Home Ranking Algorithm:** Homes matching top priority are weighted higher
2. **Report Insights:** "Based on your priority for Quality & Reputation..."
3. **Recommendation Scoring:** Each home gets individual scores per priority

### With Local Storage
- **Draft Key:** `"professional-assessment-v3"`
- **Saved:** Priority order is persisted on each step change
- **Restored:** On mount, loads previous user's priority order if draft exists

---

## Visual Design

### Card Layout (Same as Free Assessment)

```
┌──────────────────────────────────────────────────────────────┐
│ [1]  ⋮⋮  [⭐]  Quality & Reputation               [40%]     │
│           CQC ratings, staff stability, care quality...      │
└──────────────────────────────────────────────────────────────┘
```

### Styling
- **Default State:** White background, light gray border
- **Hover:** Subtle shadow, border tint toward green
- **Dragging:** 50% opacity, scale 98%
- **Drag-over:** Green border (#4F6F52), drop shadow
- **Focus:** Ring focus state for keyboard navigation

### Color Scheme
- Primary: `#4F6F52` (Dark green)
- Background: White
- Text: `#1A231E` (Almost black)
- Borders: `#E5E7EB` (Light gray)

---

## Navigation Logic

### Before Priorities Step
- Budget step shows "Continue" button → Next

### Priorities Step
- **Desktop/Tablet:** Full drag-drop interaction
- **Mobile:** Arrow button controls
- Completion triggered by user clicking "Got it - Let's See Your Homes"
- On completion:
  - Data saved to formData
  - Shows confirmation message with weights
  - Auto-advances to checkout after 1 second

### After Priorities Step
- **If this is last step (which it is):**
  - `handlePrioritiesComplete()` calls `handleSubmit()`
  - Submits entire assessment to API
  - Redirects to checkout with reference

---

## Validation & Error Handling

### Validation
- **Always Valid:** Priorities step has no validation errors
- Default weights are automatically applied: `[40, 30, 20, 10]`
- Users can complete without manually confirming (though button prompts them)

### Error Handling
- **Invalid Step:** Falls through to default case, returns null
- **Submission Errors:** Handled by parent `handleSubmit()`
- **Touch Detection:** Gracefully degraded on older devices

---

## API Response Flow

```
User Completes Assessment
         ↓
POST /api/assessments/professional
         ↓
{
  reference: "PROF-2025-01-27-ABC123",
  name: "Margaret Smith",
  location: "Birmingham",
  // Other response fields...
}
         ↓
Redirect to /assessment-checkout?ref=PROF-...&name=...&location=...
```

---

## Testing Checklist

### Functionality
- [ ] Desktop drag-drop reorders priorities correctly
- [ ] Mobile arrow buttons increment/decrement correctly
- [ ] Confirmation button shows priority order with weights
- [ ] Form data persists priority_order and priority_weights
- [ ] API submission includes priority fields

### UX/Visual
- [ ] Cards display all 4 priorities
- [ ] Icons render correctly
- [ ] Weight badges show correct percentages
- [ ] Drag-over border and shadow visible
- [ ] Responsive design on small screens

### Accessibility
- [ ] Keyboard navigation works (Tab, Arrow keys)
- [ ] Screen reader announces card positions
- [ ] Focus ring visible on all interactive elements
- [ ] ARIA labels descriptive and helpful

### Integration
- [ ] Auto-advance to next step works
- [ ] localStorage persistence works
- [ ] Budget step shows "Continue" button
- [ ] Priorities step doesn't show Continue button
- [ ] Progress tracker shows "Priorities" category
- [ ] API endpoint receives priority data

---

## Future Enhancements

### Possible Extensions
1. **Dynamic Priorities:** Show different priorities based on care type
   - Dementia care → show dementia-specific priorities
   - Nursing care → show medical priority

2. **Custom Priorities:** Allow users to replace a priority with custom value
   - "What else matters?" input field
   - Max 4 selections

3. **Weight Adjustment Sliders:**
   - Fine-tune weight distribution beyond preset values
   - Visual slider per card
   - Real-time preview impact on home ranking

4. **Conditional Priority Reset:**
   - When user changes care_type, reset priorities to defaults
   - Add modal: "Would you like to adjust your priorities for this care type?"

5. **Priority Presets:**
   - "Budget-conscious family" → [cost, quality, location, comfort]
   - "Quality-first" → [quality, comfort, location, cost]
   - Load preset button

6. **Analytics:**
   - Track which priorities are most commonly reordered
   - A/B test priority titles and descriptions
   - Heatmap of priority preference by region

---

## Related Files

- 📄 [PERSONALIZATION-DRAGGABLE-CARDS-GUIDE.md](file:///Users/alexander/Documents/Products/RCH-frontend/docs/PERSONALIZATION-DRAGGABLE-CARDS-GUIDE.md) - Free assessment version (3 priorities)
- 📄 [PROFESSIONAL-REPORT-SPECIFICATION.md](file:///Users/alexander/Documents/Products/RCH-frontend/docs/PROFESSIONAL-REPORT-SPECIFICATION.md) - Report structure
- 💻 [report-priority-score.tsx](file:///Users/alexander/Documents/Products/RCH-frontend/components/report-priority-score.tsx) - Report display component (similar 3-priority version)
