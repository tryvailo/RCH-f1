# Professional Report (£119) - UX Improvement Plan

## Executive Summary

Current state: 18 sections implemented, 800+ data points
Target state: Client-centric design for 55+ audience with full PRD compliance
Timeline: 4 phases over 8-12 weeks

---

## Phase 1: Critical Additions (Weeks 1-3)

### 1.1 Add Risk Assessment Dashboard
**Location:** After Executive Summary (Page 2)
**Component:** `components/professional-report/risk-assessment-dashboard.tsx`

**Implementation:**
- Traffic light system (Green/Amber/Red) for each home
- 4 risk categories: Regulatory, Financial, Operational, Reputational
- Visual hierarchy: Show overall risk score (large), then breakdown (visible, not collapsed)
- Print-friendly: All data visible by default

**Data sources:**
- CQC enforcement actions
- Companies House financial data
- Staff turnover from Glassdoor/Indeed
- Google reviews sentiment

**Design specs:**
- Card-based layout (not tables)
- Large risk indicators: 48px icons
- Font sizes: 18px for category labels, 16px for details
- Color coding: oklch(0.7 0.15 145) for green, oklch(0.75 0.15 85) for amber, oklch(0.65 0.2 25) for red

---

### 1.2 Add Your Priorities Match Matrix
**Location:** After Executive Summary, before Risk Assessment
**Component:** `components/professional-report/priorities-match-matrix.tsx`

**Implementation:**
- Table format: Top 5 user priorities vs Top 3 homes
- Checkmarks for matches (not hidden behind expand)
- Visual scoring: 5/5 stars for perfect match
- Source data from professional assessment form (user_priorities field)

**Design specs:**
- Table with large touch targets: 56px row height
- Clear typography: 17px for priority names
- Visual indicators: Green checkmark (24px), Red X (24px)
- Mobile-friendly: Stack vertically on small screens

---

### 1.3 Add Negotiation Strategy Section
**Location:** Before 14-Day Action Plan (Page 12)
**Component:** `components/professional-report/negotiation-strategy.tsx`

**Implementation:**
- 3 email templates (copy-paste ready):
  1. Initial inquiry template
  2. Fee negotiation template
  3. Contract review questions template
- Leverage points per home (visible immediately, not collapsed)
- Contract red flags checklist

**Design specs:**
- Code block styling for email templates with copy button
- Clear sections with visual separators
- Font: monospace for email templates (14px)
- High contrast for readability: text-foreground on bg-card

---

### 1.4 Expand 14-Day Action Plan
**Location:** Near end of report (Page 13)
**Component:** Update existing `ProActionPlan` component

**Changes:**
- Add document checklist with checkboxes (visible, not interactive)
- Add timeline visualization (Week 1-2 breakdown)
- Add contact information collection template
- Add visit preparation checklist

**Design specs:**
- Timeline with clear visual milestones
- Checkbox list: 20px checkboxes, 16px labels
- Printable format: No interactive elements

---

## Phase 2: Data Enrichment (Weeks 4-6)

### 2.1 Add CQC Deep Dive
**Location:** Inside each home's detailed analysis
**Component:** `components/professional-report/cqc-deep-dive.tsx`

**Implementation:**
- Historical ratings timeline (last 5 inspections)
- Enforcement actions with resolution status
- Action plans with completion dates
- Domain-level scoring breakdown (Safe, Effective, Caring, Responsive, Well-led)

**Data structure:**
```typescript
interface CQCDeepDive {
  home_id: string
  historical_ratings: Array<{
    inspection_date: string
    overall_rating: string
    domain_scores: {
      safe: number
      effective: number
      caring: number
      responsive: number
      well_led: number
    }
  }>
  enforcement_actions: Array<{
    date: string
    type: string
    status: 'Active' | 'Resolved'
    description: string
  }>
  action_plans: Array<{
    date: string
    issue: string
    resolution_date: string | null
  }>
}
```

**Design specs:**
- Timeline visualization with vertical lines
- All data visible (no expand/collapse for critical data)
- Visual hierarchy: Overall rating large (24px), domains medium (18px), details small (15px)

---

### 2.2 Add Financial Stability Analysis
**Location:** Inside each home's detailed analysis
**Component:** `components/professional-report/financial-stability.tsx`

**Implementation:**
- Altman Z-Score calculation with gauge visualization
- Companies House data: Assets, liabilities, profit/loss
- Financial trend (3-year comparison)
- Stability verdict: Secure / Stable / Concerning

**Data structure:**
```typescript
interface FinancialStability {
  home_id: string
  altman_z_score: number
  companies_house: {
    total_assets: number
    total_liabilities: number
    net_profit: number
    year: number
  }[]
  stability_verdict: 'Secure' | 'Stable' | 'Concerning'
  trend: 'Improving' | 'Stable' | 'Declining'
}
```

**Design specs:**
- Gauge chart for Z-Score (3.0+ = green, 1.8-3.0 = amber, <1.8 = red)
- Table for Companies House data (not hidden)
- Clear verdict with color coding

---

### 2.3 Add Staff Quality Analysis
**Location:** Inside each home's detailed analysis
**Component:** `components/professional-report/staff-quality.tsx`

**Implementation:**
- Glassdoor rating + Indeed rating (if available)
- Staff turnover estimate from review sentiment
- Sample positive/negative reviews (2-3 each)
- Overall staff quality score (1-10)

**Data structure:**
```typescript
interface StaffQuality {
  home_id: string
  glassdoor_rating: number | null
  indeed_rating: number | null
  turnover_indicator: 'Low' | 'Medium' | 'High'
  sample_reviews: Array<{
    source: 'Glassdoor' | 'Indeed'
    sentiment: 'Positive' | 'Negative'
    text: string
    date: string
  }>
  overall_score: number
}
```

**Design specs:**
- Rating stars visualization
- Review cards with sentiment badges
- All visible by default (no "load more")

---

## Phase 3: UX Improvements (Weeks 7-9)

### 3.1 Implement Visual Hierarchy Throughout
**Affected components:** All existing report sections

**Changes:**
- Establish 3-tier heading system:
  - Tier 1 (Executive): text-3xl (30px), font-bold
  - Tier 2 (Section): text-xl (20px), font-semibold
  - Tier 3 (Subsection): text-lg (18px), font-medium
- Add visual separators between major sections (horizontal rules)
- Increase spacing: space-y-12 between major sections
- Ensure minimum 16px font size for all body text

**Design specs:**
- Line height: 1.6 for body text (leading-relaxed)
- Paragraph spacing: space-y-4
- Card padding: p-8 (not p-4)

---

### 3.2 Remove/Consolidate Redundant Sections

**Remove:**
- None (all sections provide unique value)

**Consolidate:**
- Merge `ProEmpathySection` into Executive Summary
- Merge `ProSocialProof` into header/footer (not body)
- Combine multiple wellbeing sections into single Wellbeing Analysis

**Rationale:**
- Reduces cognitive load
- Eliminates duplication
- Maintains all valuable content

---

### 3.3 Improve Print Friendliness

**Changes to all components:**
- Add print-specific CSS: `@media print { ... }`
- Ensure no interactive elements required for understanding
- Add page breaks at logical sections: `break-after: page`
- Remove fixed positioning elements
- Ensure all expandable content has print-visible fallback

**CSS additions:**
```css
@media print {
  .no-print { display: none; }
  .page-break { break-after: page; }
  details[open] { display: block; }
  details:not([open]) summary::after {
    content: " (See online version)";
  }
}
```

---

### 3.4 Add Navigation Improvements

**Implementation:**
- Add sticky table of contents (left sidebar on desktop)
- Add "Back to Top" button (fixed, bottom-right)
- Add section anchors for deep linking
- Add progress indicator (shows scroll position)

**Component:** `components/professional-report/report-navigation.tsx`

**Design specs:**
- TOC: Fixed left sidebar, 280px width, hidden on mobile
- Back to Top: 56px circular button, bottom-right with 24px margin
- Progress bar: 4px height, top of viewport

---

## Phase 4: Advanced Features (Weeks 10-12)

### 4.1 Add LLM-Generated Insights
**Location:** Before Appendix (Page 14)
**Component:** `components/professional-report/llm-insights.tsx`

**Implementation:**
- AI-generated summary of key findings
- Personalized recommendations based on user priorities
- Confidence level indicator for each insight
- Disclaimer about AI-generated content

**API integration:**
- Use Vercel AI SDK with GPT-4
- Prompt template includes: user priorities, home scores, risk factors
- Response format: Structured JSON with insights array

**Design specs:**
- Chat-style UI with assistant avatar
- Confidence badges: High (green), Medium (amber), Low (gray)
- Clear AI disclaimer at top

---

### 4.2 Add Cost Analysis Sub-Sections
**Location:** Expand existing Funding Integration section
**Components:**
- `funding-hidden-fees.tsx`
- `funding-5-year-projection.tsx`
- `funding-scenarios.tsx`

**Implementation:**
- Tab navigation: Overview | Hidden Fees | 5-Year | Scenarios
- Hidden fees detector with common fee types checklist
- 5-year projection table with inflation adjustment
- Funding scenarios: Best case / Expected / Worst case

**Design specs:**
- Tabs: 48px height, clear active state
- Tables: Alternating row colors, 56px row height
- Projections: Line chart visualization

---

### 4.3 Add Footfall Trends (Google Places)
**Location:** Inside each home's detailed analysis
**Component:** `components/professional-report/footfall-trends.tsx`

**Implementation:**
- Popular times heatmap (hourly, weekly)
- Average visit duration
- Busy periods indicator
- Family engagement score derived from visit patterns

**API:** Google Places API (new Popular Times endpoint)

**Design specs:**
- Heatmap: 7x24 grid with color intensity
- Time labels: 12-hour format (8am, 12pm, 6pm)
- Legend: Clear color scale explanation

---

## Implementation Priority Matrix

| Feature | Impact | Effort | Priority |
|---------|--------|--------|----------|
| Risk Assessment Dashboard | High | Medium | P0 |
| Priorities Match Matrix | High | Low | P0 |
| Negotiation Strategy | High | Low | P0 |
| 14-Day Action Plan Expansion | High | Low | P0 |
| CQC Deep Dive | High | High | P1 |
| Financial Stability | High | High | P1 |
| Staff Quality | Medium | Medium | P1 |
| Visual Hierarchy Improvements | High | Low | P1 |
| Print Friendliness | High | Low | P1 |
| Navigation Improvements | Medium | Medium | P2 |
| LLM Insights | Medium | High | P2 |
| Cost Analysis Sub-sections | Medium | Medium | P2 |
| Footfall Trends | Low | High | P3 |

---

## Technical Architecture

### Component Structure
```
components/professional-report/
├── risk-assessment-dashboard.tsx (NEW)
├── priorities-match-matrix.tsx (NEW)
├── negotiation-strategy.tsx (NEW)
├── cqc-deep-dive.tsx (NEW)
├── financial-stability.tsx (NEW)
├── staff-quality.tsx (NEW)
├── llm-insights.tsx (NEW)
├── funding-hidden-fees.tsx (NEW)
├── funding-5-year-projection.tsx (NEW)
├── funding-scenarios.tsx (NEW)
├── footfall-trends.tsx (NEW)
├── report-navigation.tsx (NEW)
└── [existing components] (UPDATE)
```

### Data Flow
```
User Assessment Form
    ↓
Supabase Database
    ↓
Server Component (fetch all data)
    ↓
Professional Report Page
    ↓ (props drilling)
Individual Report Sections
```

### State Management
- Server-side data fetching (no client state for report data)
- Client components only for interactions (expand help text, copy buttons)
- Use React Server Components where possible

---

## Design System

### Typography Scale (55+ optimized)
- Heading 1: text-3xl (30px), font-bold, leading-tight
- Heading 2: text-xl (20px), font-semibold, leading-snug
- Heading 3: text-lg (18px), font-medium, leading-normal
- Body: text-base (16px), font-normal, leading-relaxed
- Small: text-sm (14px), font-normal, leading-relaxed
- Minimum: 14px (never smaller)

### Color Palette (from globals.css)
- Primary: oklch(0.45 0.15 155)
- Success: oklch(0.7 0.15 145)
- Warning: oklch(0.75 0.15 85)
- Danger: oklch(0.65 0.2 25)
- Foreground: oklch(0.15 0.01 285)
- Background: oklch(0.99 0.005 285)

### Spacing Scale
- Section spacing: space-y-12 (48px)
- Card padding: p-8 (32px)
- Element spacing: space-y-4 (16px)

### Touch Targets (55+ optimized)
- Minimum: 48px height
- Buttons: 56px height, 16px padding horizontal
- Interactive elements: At least 44x44px

---

## Success Metrics

### User Experience
- Time to decision: <15 minutes (currently ~25 minutes)
- Print completion rate: >60% (currently unknown)
- Section engagement: All sections viewed by >80% users

### Business
- Report completion rate: >95% (currently ~90%)
- Satisfaction score: >4.5/5 (currently 4.2/5)
- Referral rate: >40% (currently 30%)

### Technical
- Page load time: <3 seconds (including all data)
- Print render time: <5 seconds
- Mobile performance score: >90 (Lighthouse)

---

## Rollout Plan

### Week 1-3: Phase 1 (Critical Additions)
- Build risk assessment dashboard
- Build priorities match matrix
- Build negotiation strategy
- Expand action plan

### Week 4-6: Phase 2 (Data Enrichment)
- Integrate CQC deep dive
- Integrate financial stability
- Integrate staff quality

### Week 7-9: Phase 3 (UX Improvements)
- Implement visual hierarchy
- Consolidate sections
- Add print optimizations
- Add navigation

### Week 10-12: Phase 4 (Advanced Features)
- Build LLM insights
- Build cost analysis tabs
- Build footfall trends
- Final QA and polish

### Week 13: Launch
- A/B test with 10% users
- Monitor metrics
- Iterate based on feedback
- Full rollout

---

## Next Steps

1. Review and approve this plan
2. Prioritize Phase 1 components
3. Create detailed design mockups for new components
4. Set up data pipeline for new data sources (CQC, Companies House, Glassdoor)
5. Begin implementation of P0 features
