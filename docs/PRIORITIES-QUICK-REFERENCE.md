# Priorities Feature - Quick Reference

## What Was Added?

Final step (18 of 18) in Professional Assessment where users **drag & drop 4 priority cards** to personalize care home ranking.

---

## 4 Priorities (User Reorderable)

```
Quality & Reputation (40%)
├─ CQC ratings, staff stability, specialisations

Cost & Financial Stability (30%)
├─ Price stability, fees, value for money

Location & Social (20%)
├─ Distance from family, activities, community

Comfort & Amenities (10%)
└─ Rooms, facilities, décor, atmosphere
```

---

## Files

| File | Change | Location |
|------|--------|----------|
| **priorities-step.tsx** | 🆕 NEW | `components/professional-assessment/` |
| **steps/page.tsx** | ✏️ MODIFIED | `app/(dynamic)/professional-assessment/` |

---

## Component Architecture

### PrioritiesStep (Reusable)
```tsx
<PrioritiesStep onComplete={(priorities, weights) => {...}} />
```

**Props:**
- `onComplete`: Callback with priority order and weights

**Features:**
- Drag-drop (desktop) / Arrows (mobile)
- Real-time weight display
- Confirmation button
- Auto-advance on completion

---

## Integration Points

### Professional Assessment Flow
1. Budget Question (17/18)
   ↓
2. **Priorities Step (18/18)** ← NEW
   ↓
3. Submit to API
   ↓
4. Checkout

### Data Saved
```typescript
{
  priority_order: ["quality_reputation", "cost_financial", "location_social", "comfort_amenities"],
  priority_weights: [40, 30, 20, 10]
}
```

### Auto-Submitted
- No separate submit button
- `PrioritiesStep` calls `onComplete()` on confirmation
- Parent handler submits entire assessment

---

## Key Differences vs Free Assessment

| Feature | Free (Step 7) | Professional (Step 18) |
|---------|---------------|---------------------:|
| Priorities | 3 | 4 |
| Weights | [40, 35, 25] | [40, 30, 20, 10] |
| Position | Mid-assessment | Final step |
| Auto-submit | No | Yes ✓ |
| Component | Inline in page | `PrioritiesStep` |

---

## Testing Quick Hits

✅ Desktop: Drag cards to reorder
✅ Mobile: Arrow buttons work
✅ Data saved: Check localStorage `professional-assessment-v3`
✅ API: Receives `priority_order` & `priority_weights`
✅ Auto-advance: Moves to checkout after confirmation

---

## Styling

```css
Default: White bg, light gray border
Hover: Subtle shadow
Dragging: 50% opacity, scale 98%
Drag-over: Green border (#4F6F52)
Focus: Ring outline
```

---

## Accessibility

✅ Keyboard: Arrow keys, Tab, Enter
✅ Screen reader: ARIA labels on cards
✅ Mobile: Touch-friendly arrow buttons
✅ Focus: Clear focus ring on all elements

---

## Common Questions

**Q: Why 4 priorities instead of 3?**
A: Professional assessment allows more nuanced preference specification.

**Q: Do weights have to be [40, 30, 20, 10]?**
A: Yes, fixed preset. Future enhancement could add sliders for custom weights.

**Q: What if user doesn't reorder?**
A: Defaults are applied - no error.

**Q: Where is priorities data used?**
A: API persists it, used to rank homes in professional report.

**Q: Can priorities be optional?**
A: No, always required with defaults.

---

## Documentation Links

- 📖 Full guide: [PROFESSIONAL-ASSESSMENT-PRIORITIES-INTEGRATION.md](file:///Users/alexander/Documents/Products/RCH-frontend/docs/PROFESSIONAL-ASSESSMENT-PRIORITIES-INTEGRATION.md)
- 📖 Free assessment: [PERSONALIZATION-DRAGGABLE-CARDS-GUIDE.md](file:///Users/alexander/Documents/Products/RCH-frontend/docs/PERSONALIZATION-DRAGGABLE-CARDS-GUIDE.md)
- 💻 Component: [priorities-step.tsx](file:///Users/alexander/Documents/Products/RCH-frontend/components/professional-assessment/priorities-step.tsx)
