# Personalization with Draggable Cards - Free Assessment

## Overview

The free assessment includes a **priority personalization step** (Step 7) where users drag and drop care home priority cards to order them by importance. This enables:

1. **Personalized ranking** of care homes based on user priorities
2. **Dynamic weight assignment** to each priority
3. **User control** over what matters most to their family

---

## Current Implementation

### Location
📁 **File:** [`/app/(dynamic)/free-assessment/steps/page.tsx`](file:///Users/alexander/Documents/Products/RCH-frontend/app/(dynamic)/free-assessment/steps/page.tsx#L967-L1070)

### Step 7: "Let's Personalise This Report"

```tsx
currentStep === 7 && (
  <div className="space-y-6">
    <div className="text-center mb-8">
      <h2>Let's Personalise This Report</h2>
      <p>What matters most to your family?</p>
    </div>
    
    <div className="space-y-3 sm:space-y-4 mb-8">
      {priorities.map((priority, index) => (
        <div draggable={!isTouchDevice} ...>
          {/* Card content */}
        </div>
      ))}
    </div>
  </div>
)
```

---

## Default Priorities

Three predefined priorities users can reorder:

| ID | Title | Description | Weight |
|---|---|---|---|
| `location` | Location | Within 5 miles of [city] | 40% |
| `quality` | Quality Care | CQC rated Good or Outstanding | 35% |
| `activities` | Daily Activities | Social engagement & hobbies | 25% |

### State Management

```typescript
const [priorities, setPriorities] = useState<Priority[]>(defaultPriorities)
const [draggedIndex, setDraggedIndex] = useState<number | null>(null)
const [dragOverIndex, setDragOverIndex] = useState<number | null>(null)
const [isTouchDevice, setIsTouchDevice] = useState(false)

// Default weights array (position-based)
const priorityWeights = [40, 35, 25]
```

---

## Drag & Drop Implementation

### Desktop (Mouse)
- **Draggable:** Yes (`draggable={!isTouchDevice}`)
- **Interaction:** Click & drag card to reorder
- **Visual Feedback:** Grip icon, hover effects, border highlight on drag-over

### Mobile/Touch
- **Draggable:** No (disabled)
- **Interaction:** Up/Down arrow buttons instead
- **Visual Feedback:** Button hover states

### Drag Event Handlers

```typescript
const handleDragStart = (e, index) => {
  setDraggedIndex(index)
  e.dataTransfer.effectAllowed = "move"
}

const handleDragOver = (e, index) => {
  e.preventDefault()
  e.dataTransfer.dropEffect = "move"
  setDragOverIndex(index)
}

const handleDrop = (e, dropIndex) => {
  e.preventDefault()
  const dragIndex = draggedIndex
  
  if (dragIndex === null || dragIndex === dropIndex) return
  
  const newPriorities = [...priorities]
  const [draggedItem] = newPriorities.splice(dragIndex, 1)
  newPriorities.splice(dropIndex, 0, draggedItem)
  
  setPriorities(newPriorities)
  updateFormData({
    priority_order: newPriorities.map(p => p.id),
    priority_weights: priorityWeights
  })
}
```

---

## Visual Design

### Card Structure

```
┌─────────────────────────────────────────────────────┐
│ [1]  ⋮⋮  [🏠]  Location                    [40%]   │
│           Within 5 miles of [city]               │
└─────────────────────────────────────────────────────┘

Key Elements:
- Position badge (1, 2, 3)
- Grip icon (desktop only)
- Icon container with priority emoji
- Title + description
- Weight badge (desktop only)
```

### Styling

- **Default:** White background, light border
- **Dragging:** Opacity 50%, scale 98%
- **Drag-over:** Green border (`#4F6F52`), shadow
- **Hover:** Shadow lift, border tint
- **Focus:** Ring focus state (accessibility)

```css
.priority-card {
  border-radius: 0.5rem;
  padding: 1rem;
  background: white;
  border: 1px solid #E5E7EB;
  transition: all 0.2s ease-out;
}

.priority-card:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-color: rgba(79, 111, 82, 0.5);
}

.priority-card.dragging {
  opacity: 0.5;
  transform: scale(0.98);
}

.priority-card.drag-over {
  border: 2px solid #4F6F52;
  box-shadow: 0 4px 12px rgba(79, 111, 82, 0.2);
}
```

---

## Data Flow

### Input (Assessment Data)
```typescript
interface AssessmentData {
  location_postcode: string
  care_type: string
  budget_range: string
  funding_type: string
  duration_type: string
  contact_name: string
  contact_email: string
  priority_order: string[]        // ["location", "quality", "activities"]
  priority_weights: number[]      // [40, 35, 25]
}
```

### Persistence
- **Local Storage:** Auto-saves to `"free-assessment-draft"` on each step
- **Restoration:** On mount, loads previous order if draft exists

```typescript
useEffect(() => {
  const saved = localStorage.getItem("free-assessment-draft")
  if (saved) {
    const parsed = JSON.parse(saved)
    if (parsed.data.priority_order) {
      const reorderedPriorities = defaultPriorities.slice()
        .sort((a, b) => 
          (parsed.data.priority_order?.indexOf(a.id) ?? 0) - 
          (parsed.data.priority_order?.indexOf(b.id) ?? 0)
        )
      setPriorities(reorderedPriorities)
    }
  }
}, [])
```

---

## Integration Points

### With Free Report
The priority order is used to **rank care homes** in the generated free report:

1. **Home Filtering:** Homes matching top priority are listed first
2. **Weight Application:** Homes scoring high on 1st priority get higher weight
3. **Personalized Copy:** "Based on your preference for [top priority]..."

### With Professional Assessment
Users can refine priorities further in the professional assessment flow:
- Additional priority options (e.g., "Pet-friendly", "Location flexibility")
- Custom weight adjustment
- Budget-based filtering

---

## Accessibility Features

- ✅ **ARIA Labels:** Cards labeled with position and title
- ✅ **Keyboard Focus:** Cards focusable with `tabIndex={0}`
- ✅ **Mobile Alternative:** Arrow buttons for touch devices
- ✅ **Screen Readers:** Informative role and aria-label attributes
- ✅ **Color Contrast:** Text passes WCAG AA standards

```html
<div
  role="listitem"
  aria-label="Draggable card: Location, position 1 of 3"
  tabIndex={0}
>
  ...
</div>
```

---

## Future Enhancements

### Possible Extensions

1. **Custom Priority Creation**
   - Allow users to add/remove priorities
   - Input: "What else matters to your family?"

2. **Weight Adjustment Sliders**
   - Let users fine-tune weight distribution
   - Visual slider component per card

3. **Priority Preview Impact**
   - Show real-time preview of how top 3 homes rank
   - Update as user reorders

4. **Mobile Swipe Gestures**
   - Native swipe-to-reorder for mobile UX
   - `react-beautiful-dnd` or similar library

5. **Conditional Priorities**
   - Show different priorities based on care type
   - E.g., "Specialist dementia care" → show dementia-specific priorities

6. **Saved Preference Profiles**
   - "Save this preference set as a template"
   - Quick-load for repeat assessments

---

## Testing Checklist

- [ ] Desktop drag-drop functionality works smoothly
- [ ] Mobile arrow buttons increment/decrement correctly
- [ ] Priority order persists in localStorage
- [ ] Form validation passes (step 7 always valid)
- [ ] Accessibility: Keyboard navigation works
- [ ] Accessibility: Screen reader announces card order
- [ ] Visual feedback clear on drag-over
- [ ] Weight badges update correctly per position
- [ ] Icons render properly in each card
- [ ] Responsive design works on small screens (< 640px)

---

## Related Documentation

- 📄 [FREE-REPORT-SPECIFICATION.md](file:///Users/alexander/Documents/Products/RCH-frontend/docs/FREE-REPORT-SPECIFICATION.md) - Report structure & personalization
- 📄 [PRODUCT-REQUIREMENTS-DOCUMENT.md](file:///Users/alexander/Documents/Products/RCH-frontend/docs/PRODUCT-REQUIREMENTS-DOCUMENT.md) - Feature context
- 💻 [report-priority-score.tsx](file:///Users/alexander/Documents/Products/RCH-frontend/components/report-priority-score.tsx) - Similar implementation in professional report
