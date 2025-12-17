# Professional Report Implementation Plan
## Comprehensive Roadmap for £119 Product Enhancement

---

## Current State Analysis

### Existing Components (18 sections implemented)
```
✓ ProExecutiveSummary
✓ ReportTableOfContents
✓ ProfessionalReportDashboard
✓ UserNeedMatchScore
✓ DotMatrixComparison
✓ CategoryAnalysisPage (Safety, Medical, Staff, Financial, Comfort)
✓ FSAFoodSafetySection
✓ CommunityReputationReport
✓ GooglePlacesInsights
✓ FairCostGapCalculator
✓ ProFundingIntegration
✓ ProActionPlan
✓ ComfortLifestyleReport
✓ ProWellbeingComparison
✓ ProAreaMap
✓ ProSocialProof
✓ ProEmpathySection
✓ ProShareWithFamily
✓ AppendixDataAccuracy
```

### Missing Components (10 critical sections)
```
✗ Risk Assessment Dashboard (P0 - CRITICAL)
✗ Priorities Match Matrix (P0 - CRITICAL)
✗ Negotiation Strategy (P0 - CRITICAL)
✗ CQC Deep Dive (P1)
✗ Financial Stability Deep Dive (P1)
✗ Staff Quality Analysis (P1)
✗ LLM Insights (P2)
✗ Cost Analysis Tabs (P2)
✗ Footfall Trends (P3)
✗ Report Navigation System (P1)
```

---

## Implementation Plan: 4 Phases, 12 Weeks

### PHASE 1: Critical Additions (Weeks 1-3)
**Goal:** Add must-have sections that justify £119 price point

#### Week 1: Risk Assessment Dashboard

**File:** `components/professional-report/risk-assessment-dashboard.tsx`

**Location in report:** Page 2 (after Executive Summary)

**What to build:**
```typescript
interface RiskAssessmentData {
  home_name: string
  overall_risk: 'Low' | 'Medium' | 'High'
  risk_categories: {
    regulatory: {
      score: number  // 0-10
      concerns: string[]
      verdict: 'Safe' | 'Monitor' | 'Concern'
    }
    financial: {
      score: number
      concerns: string[]
      verdict: 'Safe' | 'Monitor' | 'Concern'
    }
    operational: {
      score: number
      concerns: string[]
      verdict: 'Safe' | 'Monitor' | 'Concern'
    }
    reputational: {
      score: number
      concerns: string[]
      verdict: 'Safe' | 'Monitor' | 'Concern'
    }
  }
}
```

**Design requirements:**
- Card-based layout (not tables)
- Traffic light colors: Green (Low), Amber (Medium), Red (High)
- All data visible immediately (no expand/collapse)
- Large icons: 48px for risk indicators
- Font sizes: 20px titles, 16px body text
- Touch-friendly: 56px minimum button height

**Data sources:**
- CQC enforcement actions from `home.metrics`
- Financial stability from `home.metrics.altmanZScore`
- Staff turnover from `home.metrics.staffTurnover`
- Google reviews sentiment from `home.metrics.googleRating`

**Integration:**
Update `components/full-professional-report.tsx`:
```typescript
// Add import
import { RiskAssessmentDashboard } from "./professional-report/risk-assessment-dashboard"

// Add after Executive Summary (Page 2)
<div className="break-after-page print:break-after-page">
  <ReportLayout reportId={finalReportId} pageNumber={2} totalPages={26}>
    <RiskAssessmentDashboard homes={allHomes} />
  </ReportLayout>
</div>
```

---

#### Week 2: Priorities Match Matrix

**File:** `components/professional-report/priorities-match-matrix.tsx`

**Location:** Page 3 (after Risk Assessment, before Dashboard)

**What to build:**
```typescript
interface PrioritiesMatchData {
  user_priorities: Array<{
    name: string
    importance: number  // 1-10
    category: 'safety' | 'medical' | 'staff' | 'financial' | 'comfort' | 'location'
  }>
  homes: Array<{
    name: string
    matches: {
      [priority_name: string]: {
        match_score: number  // 0-100
        meets_requirement: boolean
        details: string
      }
    }
  }>
}
```

**Design requirements:**
- Table format: Priorities (rows) × Homes (columns)
- Visual indicators: ✓ Green checkmark (24px), ✗ Red X (24px)
- Match score display: "92/100" with color coding
- All data visible (no hidden content)
- Minimum row height: 60px for 55+ touch targets
- Font size: 17px for priority names, 16px for scores

**Data source:**
- Pull from professional assessment form data (stored in Supabase)
- Map user priorities to home category scores

**Integration:**
```typescript
// Update full-professional-report.tsx
<div className="break-after-page print:break-after-page">
  <ReportLayout reportId={finalReportId} pageNumber={3} totalPages={26}>
    <PrioritiesMatchMatrix 
      userPriorities={userPriorities} 
      homes={allHomes} 
    />
  </ReportLayout>
</div>
```

---

#### Week 3: Negotiation Strategy

**File:** `components/professional-report/negotiation-strategy.tsx`

**Location:** Page 16 (before ProActionPlan)

**What to build:**
```typescript
interface NegotiationData {
  homes: Array<{
    name: string
    weekly_fee: number
    market_average: number
    negotiation_leverage: Array<{
      point: string
      category: 'occupancy' | 'market' | 'timing' | 'quality'
      strength: 'strong' | 'moderate' | 'weak'
    }>
    recommended_offer: number
    max_offer: number
  }>
  email_templates: {
    initial_inquiry: string
    fee_negotiation: string
    contract_review_questions: string
  }
  contract_red_flags: string[]
}
```

**Design requirements:**
- Email templates in monospace code blocks with copy button
- Leverage points visible as bullet list (not collapsed)
- Contract red flags checklist with visual indicators
- Font: 14px monospace for templates, 16px for body
- Copy button: 44px height, clear hover state

**Content:**
```
EMAIL TEMPLATE 1: Initial Inquiry
----
Subject: Care Home Enquiry - [Your Name]

Dear [Home Name],

I am currently researching care homes in [Location] for my [relation]. 
Based on my research, your home appears to offer excellent care with 
[mention specific strength from report].

I would like to arrange a visit to discuss:
- Current availability and waiting times
- Weekly fee structure and included services
- Trial stay options
- Any current promotions or discounts

Could we arrange a convenient time to visit?

Best regards,
[Your Name]
----

EMAIL TEMPLATE 2: Fee Negotiation
EMAIL TEMPLATE 3: Contract Questions
```

**Integration:**
```typescript
// Update full-professional-report.tsx - insert before ProActionPlan
<div className="break-after-page print:break-after-page">
  <ReportLayout reportId={finalReportId} pageNumber={16} totalPages={26}>
    <NegotiationStrategy homes={allHomes} />
  </ReportLayout>
</div>
```

---

### PHASE 2: Data Enrichment (Weeks 4-6)
**Goal:** Add depth to existing sections

#### Week 4: CQC Deep Dive

**File:** `components/professional-report/cqc-deep-dive.tsx`

**Location:** Embedded within each home's Safety analysis (Page 6)

**What to build:**
```typescript
interface CQCDeepDiveData {
  home_name: string
  current_rating: {
    overall: string
    inspection_date: string
    report_url: string
  }
  historical_ratings: Array<{
    inspection_date: string
    overall_rating: string
    safe: number
    effective: number
    caring: number
    responsive: number
    well_led: number
  }>
  enforcement_actions: Array<{
    date: string
    type: 'Warning Notice' | 'Requirement Notice' | 'Prosecution' | 'None'
    status: 'Active' | 'Resolved' | 'N/A'
    description: string
    resolution_date?: string
  }>
  action_plans: Array<{
    issue: string
    identified_date: string
    resolution_date: string | null
    status: 'Resolved' | 'In Progress' | 'Overdue'
  }>
}
```

**Design requirements:**
- Timeline visualization for historical ratings (vertical line with nodes)
- All enforcement actions visible (not collapsed)
- Color coding: Green (no actions), Amber (resolved), Red (active)
- Font sizes: 22px for section title, 17px for subsections, 15px for details
- Timeline nodes: 40px diameter circles

**Visual hierarchy:**
```
[LARGE] CQC Overall: Outstanding (Current)
  ↓
[MEDIUM] Historical Performance Timeline
  2024: Outstanding (Safe: 9.5, Effective: 9.2, ...)
  2022: Good (Safe: 9.0, Effective: 8.8, ...)
  2020: Good (Safe: 8.5, Effective: 8.5, ...)
  ↓
[MEDIUM] Enforcement Actions
  ✓ No enforcement actions in past 5 years
  ↓
[MEDIUM] Action Plans
  Issue: Minor medication documentation gap
  Status: Resolved (Jan 2023)
```

**Integration:**
- Embed within CategoryAnalysisPage for Safety
- Do NOT create new page, enhance existing

---

#### Week 5: Financial Stability Deep Dive

**File:** `components/professional-report/financial-stability-analysis.tsx`

**Location:** Embedded within Financial Stability page (Page 12)

**What to build:**
```typescript
interface FinancialStabilityData {
  home_name: string
  altman_z_score: {
    current: number
    interpretation: 'Safe Zone' | 'Grey Zone' | 'Distress Zone'
    components: {
      working_capital: number
      retained_earnings: number
      ebit: number
      market_value: number
      sales: number
    }
  }
  companies_house_data: Array<{
    year: number
    total_assets: number
    total_liabilities: number
    net_profit: number
    revenue: number
  }>
  trend_analysis: {
    direction: 'Improving' | 'Stable' | 'Declining'
    confidence: 'High' | 'Medium' | 'Low'
    explanation: string
  }
  stability_verdict: 'Financially Secure' | 'Stable' | 'Monitor Closely' | 'Concerning'
}
```

**Design requirements:**
- Gauge chart for Altman Z-Score:
  - Green zone: 3.0+ (Safe)
  - Amber zone: 1.8-3.0 (Grey)
  - Red zone: <1.8 (Distress)
- 3-year table for Companies House data (all visible, no pagination)
- Trend arrow: ↑ Improving (green), → Stable (amber), ↓ Declining (red)
- Font: 20px for verdict, 16px for table content

**Visual hierarchy:**
```
[LARGE] Financial Verdict: Financially Secure
[GAUGE] Altman Z-Score: 3.2 (Safe Zone)
  ↓
[TABLE] 3-Year Financial Performance
  Year | Assets | Liabilities | Profit | Revenue
  2023 | £2.5M  | £850K       | £180K  | £1.8M
  2022 | £2.3M  | £900K       | £160K  | £1.7M
  2021 | £2.1M  | £950K       | £140K  | £1.6M
  ↓
[TEXT] Trend: Improving ↑
  Assets growing, debt reducing, profit increasing
```

---

#### Week 6: Staff Quality Analysis

**File:** `components/professional-report/staff-quality-analysis.tsx`

**Location:** Embedded within Staff Quality page (Page 9)

**What to build:**
```typescript
interface StaffQualityData {
  home_name: string
  external_ratings: {
    glassdoor: number | null
    indeed: number | null
    care_quality_commission_staff_rating: number
  }
  turnover_analysis: {
    annual_turnover_rate: string  // "12%"
    industry_average: string      // "28%"
    verdict: 'Excellent' | 'Good' | 'Average' | 'Concerning'
    indicator: 'Low' | 'Medium' | 'High'
  }
  sample_reviews: Array<{
    source: 'Glassdoor' | 'Indeed' | 'CQC Staff Survey'
    sentiment: 'Positive' | 'Negative' | 'Neutral'
    quote: string
    date: string
    role?: string
  }>
  overall_staff_quality_score: number  // 0-10
}
```

**Design requirements:**
- Star ratings for Glassdoor/Indeed (large, 32px stars)
- Turnover comparison bar chart (side-by-side bars)
- Review cards: 2-3 positive, 1-2 negative for balance
- All reviews visible (no "load more")
- Font: 18px for review quotes, 14px for metadata

**Visual hierarchy:**
```
[LARGE] Staff Quality Score: 8.9/10 (Excellent)
  ↓
[STARS] External Ratings
  Glassdoor: ★★★★☆ 4.2/5
  Indeed: ★★★★☆ 4.0/5
  ↓
[CHART] Staff Turnover
  This Home: 12% ████ (Low - Excellent)
  Industry:  28% ██████████ (Average)
  ↓
[CARDS] What Staff Say
  [Positive] "Supportive management, excellent training..."
  [Positive] "Great team environment, residents are priority..."
  [Negative] "Can be busy during peak times..." (for balance)
```

---

### PHASE 3: UX Improvements (Weeks 7-9)
**Goal:** Optimize for 55+ audience

#### Week 7: Visual Hierarchy Overhaul

**Files affected:** ALL existing components

**Changes:**

1. **Typography System**
```css
/* Establish 3-tier heading system */
.report-h1 { font-size: 30px; font-weight: bold; line-height: 1.2; }
.report-h2 { font-size: 20px; font-weight: 600; line-height: 1.3; }
.report-h3 { font-size: 18px; font-weight: 500; line-height: 1.4; }
.report-body { font-size: 16px; font-weight: 400; line-height: 1.6; }
.report-small { font-size: 14px; font-weight: 400; line-height: 1.6; }

/* NEVER go below 14px */
```

2. **Spacing System**
```typescript
// Update all components
<div className="space-y-12">  // Between major sections (48px)
  <section className="space-y-6">  // Within sections (24px)
    <Card className="p-8">  // Card padding (32px, not 16px)
      <div className="space-y-4">  // Between elements (16px)
```

3. **Visual Separators**
```typescript
// Add between major sections
<hr className="border-muted my-12" />
```

**Action items:**
- Update ProExecutiveSummary: Increase title from text-2xl to text-3xl
- Update ProfessionalReportDashboard: Increase card padding from p-6 to p-8
- Update CategoryAnalysisPage: Add space-y-12 between sections
- Update ALL components: Ensure minimum 16px body text

---

#### Week 8: Consolidate Redundant Sections

**Changes:**

1. **Merge ProEmpathySection into Executive Summary**
```typescript
// Remove standalone ProEmpathySection page
// Add empathy content to ProExecutiveSummary as intro paragraph

// BEFORE: Separate page (Page 21)
// AFTER: Part of Executive Summary (Page 1)

<ProExecutiveSummary>
  {/* Add empathy intro */}
  <div className="mb-8 bg-primary/5 p-8 rounded-2xl">
    <p className="text-lg leading-relaxed">
      We understand choosing care for a loved one is one of life's most 
      difficult decisions. This report is designed to give you confidence...
    </p>
  </div>
  {/* ... rest of executive summary */}
</ProExecutiveSummary>
```

2. **Move ProSocialProof to header/footer**
```typescript
// Remove from main report body (Page 20)
// Add testimonials to ReportHeader component

// This reduces page count from 25 to 23 pages
```

3. **Combine Wellbeing sections**
```typescript
// Merge ProWellbeingComparison + ComfortLifestyleReport
// Keep ComfortLifestyleReport (more detailed)
// Remove ProWellbeingComparison (simpler version)

// Reduces pages from 23 to 22
```

---

#### Week 9: Print Optimization

**Files affected:** `app/globals.css` + all report components

**Add print CSS:**
```css
/* app/globals.css */
@media print {
  /* Hide interactive elements */
  .no-print { display: none !important; }
  
  /* Force page breaks */
  .break-after-page { 
    break-after: page; 
    page-break-after: always;
  }
  
  /* Expand collapsed content for print */
  details[open] { display: block; }
  details:not([open]) summary::after {
    content: " (See online version for details)";
    font-size: 12px;
    color: #666;
  }
  
  /* Remove fixed elements */
  .fixed, .sticky { position: static !important; }
  
  /* Optimize colors for print */
  .bg-primary { background-color: #4F6F52 !important; print-color-adjust: exact; }
  
  /* Ensure readable text */
  body { color: #000; background: #fff; }
  a { color: #000; text-decoration: underline; }
  
  /* Page margins */
  @page { margin: 2cm; }
}
```

**Update all components:**
- Add `.no-print` class to: Progress bar, navigation buttons, sticky CTAs
- Ensure all data is visible (no collapsed sections in print)
- Test: Print to PDF and verify all 22 pages render correctly

---

### PHASE 4: Advanced Features (Weeks 10-12)
**Goal:** Differentiate from competitors

#### Week 10: LLM-Generated Insights

**File:** `components/professional-report/llm-insights.tsx`

**Location:** Page 21 (before Appendix)

**What to build:**
```typescript
interface LLMInsightsData {
  personalized_summary: string  // 200-300 words
  key_recommendations: Array<{
    recommendation: string
    rationale: string
    confidence: 'High' | 'Medium' | 'Low'
    priority: 'Critical' | 'Important' | 'Consider'
  }>
  concerns_to_address: Array<{
    concern: string
    homes_affected: string[]
    suggested_questions: string[]
  }>
  best_fit_explanation: string  // Why top choice matches user needs
}
```

**API Integration:**
```typescript
// Use Vercel AI SDK with GPT-4
import { generateText } from 'ai'

const prompt = `
You are an expert care home advisor. Based on:
- User priorities: ${userPriorities}
- Home scores: ${homeScores}
- Risk factors: ${riskFactors}

Generate personalized insights in this format:
{
  "personalized_summary": "...",
  "key_recommendations": [...],
  "concerns_to_address": [...],
  "best_fit_explanation": "..."
}
`

const { text } = await generateText({
  model: 'openai/gpt-4.1',
  prompt,
  temperature: 0.3  // Low temperature for consistency
})
```

**Design requirements:**
- Chat-style UI with assistant avatar
- Confidence badges: High (green), Medium (amber), Low (grey)
- Disclaimer at top: "AI-generated insights based on data analysis"
- Font: 16px for body, 18px for recommendations
- Spacing: Extra room between recommendations (space-y-6)

---

#### Week 11: Cost Analysis Sub-Sections

**Files:**
- `components/professional-report/funding-hidden-fees.tsx`
- `components/professional-report/funding-5-year-projection.tsx`
- `components/professional-report/funding-scenarios.tsx`

**Location:** Expand existing ProFundingIntegration (Page 14)

**What to build:**

1. **Hidden Fees Detector**
```typescript
interface HiddenFeesData {
  home_name: string
  weekly_advertised_fee: number
  potential_additional_fees: Array<{
    category: 'Care' | 'Activities' | 'Maintenance' | 'Services'
    item: string
    typical_cost: string
    frequency: 'Weekly' | 'Monthly' | 'Annual' | 'One-time'
    mandatory: boolean
  }>
  estimated_total_weekly: number
  transparency_score: number  // 0-10
}
```

2. **5-Year Projection**
```typescript
interface FiveYearProjection {
  home_name: string
  baseline_weekly_fee: number
  projections: Array<{
    year: number
    projected_fee: number
    inflation_rate: number
    total_annual_cost: number
    cumulative_cost: number
  }>
  total_5_year_cost: number
  average_annual_increase: string
}
```

3. **Funding Scenarios**
```typescript
interface FundingScenarios {
  home_name: string
  scenarios: {
    best_case: {
      description: string
      chc_funding: number
      la_contribution: number
      personal_contribution: number
      total_weekly: number
    }
    expected: { /* same structure */ }
    worst_case: { /* same structure */ }
  }
  savings_potential: {
    best_vs_worst: number
    annual_difference: number
  }
}
```

**Design:**
- Tab navigation: Overview | Hidden Fees | 5-Year | Scenarios
- Tabs: 52px height, clear active state with underline
- Tables: Alternating row colors, 56px row height for 55+
- Charts: Line chart for 5-year projection (use Recharts)

---

#### Week 12: Final Polish & QA

**Tasks:**

1. **Navigation System**
```typescript
// Add components/professional-report/report-navigation.tsx
// Features:
// - Sticky table of contents (left sidebar on desktop)
// - "Back to Top" button (bottom-right, 56px circular)
// - Section anchors for deep linking
// - Progress indicator showing scroll position
```

2. **Comprehensive Testing**
- Test all 22 pages in Chrome, Safari, Firefox
- Test print to PDF (ensure all pages render)
- Test on mobile (responsive design)
- Test with screen reader (accessibility)
- Load test with 10 concurrent users

3. **Documentation**
- Update README with new components
- Document data structure requirements
- Create component usage examples
- Write integration guide for developers

4. **Performance Optimization**
- Lazy load images
- Code split large components
- Optimize bundle size (target <500KB JS)
- Add loading skeletons for async data

---

## Technical Integration Guide

### Step 1: Update total pages count

```typescript
// components/full-professional-report.tsx

// BEFORE:
const totalPages = 25

// AFTER:
const totalPages = 22  // Reduced after consolidation
```

### Step 2: Update page numbering

```typescript
// Reorganized page structure:

Page 1:  Executive Summary (with empathy intro)
Page 2:  Risk Assessment Dashboard (NEW)
Page 3:  Priorities Match Matrix (NEW)
Page 4:  Dashboard
Page 5:  User Need Match Score
Page 6:  At-a-Glance Comparison
Page 7:  Safety Analysis (with CQC Deep Dive)
Page 8:  FSA Food Safety
Page 9:  Medical Care Analysis
Page 10: Staff Quality Analysis (with Staff Quality Deep Dive)
Page 11: Community Reputation
Page 12: Google Places Insights
Page 13: Financial Stability (with Financial Stability Deep Dive)
Page 14: Fair Cost Gap
Page 15: Funding Integration (with tabs: Hidden Fees, 5-Year, Scenarios)
Page 16: Negotiation Strategy (NEW)
Page 17: Action Plan (expanded)
Page 18: Comfort Analysis
Page 19: Comfort Lifestyle
Page 20: Area Map
Page 21: LLM Insights (NEW)
Page 22: Appendix

// REMOVED: ProEmpathySection, ProSocialProof, ProWellbeingComparison
```

### Step 3: Add new imports

```typescript
// components/full-professional-report.tsx

import { RiskAssessmentDashboard } from "./professional-report/risk-assessment-dashboard"
import { PrioritiesMatchMatrix } from "./professional-report/priorities-match-matrix"
import { NegotiationStrategy } from "./professional-report/negotiation-strategy"
import { CQCDeepDive } from "./professional-report/cqc-deep-dive"
import { FinancialStabilityAnalysis } from "./professional-report/financial-stability-analysis"
import { StaffQualityAnalysis } from "./professional-report/staff-quality-analysis"
import { LLMInsights } from "./professional-report/llm-insights"
import { FundingHiddenFees } from "./professional-report/funding-hidden-fees"
import { Funding5YearProjection } from "./professional-report/funding-5-year-projection"
import { FundingScenarios } from "./professional-report/funding-scenarios"
import { ReportNavigation } from "./professional-report/report-navigation"
```

### Step 4: Add components to render flow

```typescript
// Insert after Executive Summary:
<div className="break-after-page print:break-after-page">
  <ReportLayout reportId={finalReportId} pageNumber={2} totalPages={22}>
    <RiskAssessmentDashboard homes={allHomes} />
  </ReportLayout>
</div>

<div className="break-after-page print:break-after-page">
  <ReportLayout reportId={finalReportId} pageNumber={3} totalPages={22}>
    <PrioritiesMatchMatrix 
      userPriorities={userPriorities} 
      homes={allHomes} 
    />
  </ReportLayout>
</div>

// ... continue for all new components
```

---

## Data Requirements

### New Supabase Tables/Columns Needed

```sql
-- Add to professional_assessments table
ALTER TABLE professional_assessments ADD COLUMN user_priorities JSONB;

-- Structure:
{
  "priorities": [
    {
      "name": "Safety and regulatory compliance",
      "importance": 10,
      "category": "safety"
    },
    {
      "name": "Specialized dementia care",
      "importance": 9,
      "category": "medical"
    }
    // ... up to 10 priorities
  ]
}

-- Add CQC historical data (if not exists)
CREATE TABLE IF NOT EXISTS cqc_historical_ratings (
  id UUID PRIMARY KEY,
  home_id UUID REFERENCES care_homes(id),
  inspection_date DATE,
  overall_rating TEXT,
  safe_score INTEGER,
  effective_score INTEGER,
  caring_score INTEGER,
  responsive_score INTEGER,
  well_led_score INTEGER,
  enforcement_actions JSONB,
  action_plans JSONB
);

-- Add Companies House data (if not exists)
CREATE TABLE IF NOT EXISTS financial_history (
  id UUID PRIMARY KEY,
  home_id UUID REFERENCES care_homes(id),
  year INTEGER,
  total_assets BIGINT,
  total_liabilities BIGINT,
  net_profit BIGINT,
  revenue BIGINT,
  altman_z_score DECIMAL
);
```

---

## Success Metrics & KPIs

### User Experience Metrics
- **Time to decision:** Target <12 minutes (from 25 minutes)
  - Measure: Time between report open and first home contact
- **Print completion rate:** Target >65%
  - Measure: % of users who print/download PDF
- **Section engagement:** Target >85%
  - Measure: % of sections viewed by users

### Business Metrics
- **Report completion rate:** Target >96% (from 90%)
  - Measure: % of purchased reports that are opened
- **Satisfaction score:** Target >4.6/5 (from 4.2/5)
  - Measure: Post-report survey
- **Referral rate:** Target >45% (from 30%)
  - Measure: % of users who share with family/friends

### Technical Metrics
- **Page load time:** Target <2.5 seconds
  - Measure: Time to first contentful paint
- **Print render time:** Target <4 seconds
  - Measure: Time from print click to PDF ready
- **Mobile performance:** Target >92 Lighthouse score
  - Measure: Lighthouse audit on mobile device

---

## Rollout Strategy

### Week 1-3: Phase 1 Development
- Build Risk Assessment Dashboard
- Build Priorities Match Matrix
- Build Negotiation Strategy
- Expand Action Plan with document checklist

### Week 4-6: Phase 2 Development
- Integrate CQC Deep Dive
- Integrate Financial Stability Analysis
- Integrate Staff Quality Analysis

### Week 7-9: Phase 3 UX Improvements
- Apply visual hierarchy changes to all components
- Consolidate redundant sections
- Add print optimizations
- Add navigation system

### Week 10-12: Phase 4 Advanced Features
- Build LLM Insights
- Build Cost Analysis tabs
- Final QA and polish
- Performance optimization

### Week 13: Launch Preparation
- A/B test with 10% of users
- Monitor metrics daily
- Collect feedback
- Fix any critical issues

### Week 14: Full Rollout
- Deploy to 100% of users
- Monitor performance
- Continue iterating based on feedback

---

## Next Steps

1. **Get approval** on this implementation plan
2. **Assign developers** to Phase 1 components
3. **Set up data pipeline** for CQC, Companies House, staff review data
4. **Create design mockups** for new components (use Figma)
5. **Begin implementation** starting Week 1

**Questions to resolve before starting:**
- Do we have access to CQC historical data API?
- Do we have Companies House API access?
- Do we have Glassdoor/Indeed scraping setup?
- What's the budget for GPT-4 API calls (LLM Insights)?
- When is target launch date?

---

**Document version:** 1.0
**Last updated:** [Current Date]
**Owner:** Product Team
