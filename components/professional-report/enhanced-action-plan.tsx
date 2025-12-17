"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Clock, AlertCircle, Eye, FileText } from "lucide-react"

interface ChecklistItem {
  id: string
  label: string
  description?: string
  checked: boolean
  week: number
  documentsRequired?: string[]
}

interface CareHome {
  name: string
  matchScore: number
}

interface EnhancedActionPlanProps {
  topChoice?: CareHome
  allHomes?: CareHome[]
}

export function EnhancedActionPlan({ topChoice, allHomes }: EnhancedActionPlanProps) {
  const [checklist, setChecklist] = useState<ChecklistItem[]>([
    // Week 1
    {
      id: "read-report",
      label: "Read full Professional Report (all 22 pages)",
      description: "Take notes on key differences between homes",
      checked: false,
      week: 1,
    },
    {
      id: "priorities-review",
      label: "Review Your Priorities Match Matrix",
      description: "Confirm the priorities we identified align with your needs",
      checked: false,
      week: 1,
    },
    {
      id: "risk-assessment",
      label: "Study Risk Assessment Dashboard",
      description: "Understand any red or amber flags for each home",
      checked: false,
      week: 1,
    },
    {
      id: "call-top-3",
      label: "Call your top 3 homes",
      description: "Use the telephone checklist from Section 16",
      checked: false,
      week: 1,
      documentsRequired: ["Questions list", "Availability enquiry"],
    },
    {
      id: "schedule-visits",
      label: "Schedule visits to at least 2 homes",
      description: "Aim for different times of day if possible",
      checked: false,
      week: 1,
    },
    {
      id: "start-funding",
      label: "Start NHS CHC application (if 65%+ probability)",
      description: "Use Section 14 funding templates",
      checked: false,
      week: 1,
      documentsRequired: ["GP letter", "Medical history", "CHC Checklist"],
    },
    {
      id: "gather-financial",
      label: "Gather financial documents",
      description: "Bank statements, property valuation, pension details",
      checked: false,
      week: 1,
      documentsRequired: [
        "Last 3 months bank statements",
        "Property valuation",
        "Pension statements",
        "Savings certificates",
      ],
    },
    // Week 2
    {
      id: "first-visit",
      label: "Complete first care home visit",
      description: "Bring the Verification Checklist (see below)",
      checked: false,
      week: 2,
      documentsRequired: ["Verification checklist", "Questions for manager"],
    },
    {
      id: "verify-cqc",
      label: "Verify CQC Deep Dive data during visit",
      description: "Ask to see CQC certificate, staff-to-resident ratios",
      checked: false,
      week: 2,
    },
    {
      id: "verify-financial",
      label: "Verify Financial Stability data",
      description: "Ask about ownership structure, recent investments",
      checked: false,
      week: 2,
    },
    {
      id: "second-visit",
      label: "Complete second care home visit",
      description: "Compare experience to first visit",
      checked: false,
      week: 2,
    },
    {
      id: "negotiate-fees",
      label: "Use Negotiation Scripts for fee discussions",
      description: "Reference Fair Cost Gap data (Section 15)",
      checked: false,
      week: 2,
      documentsRequired: ["Negotiation email templates", "Fair Cost Gap printout"],
    },
    {
      id: "council-application",
      label: "Submit Council funding application (if applicable)",
      description: "Use Section 14 templates",
      checked: false,
      week: 2,
      documentsRequired: ["Financial assessment form", "Care needs assessment", "Supporting documents"],
    },
    {
      id: "family-discussion",
      label: "Hold family discussion to review options",
      description: "Share report findings with key decision makers",
      checked: false,
      week: 2,
    },
    {
      id: "final-decision",
      label: "Make your final decision",
      description: "Trust your research and instincts",
      checked: false,
      week: 2,
    },
  ])

  const [verificationChecklist] = useState([
    { id: "cqc-cert", label: "Ask to see CQC registration certificate displayed", verified: false },
    { id: "staff-ratio", label: "Ask about current staff-to-resident ratio (day & night)", verified: false },
    { id: "manager-tenure", label: "Ask how long the current manager has been in post", verified: false },
    { id: "fee-breakdown", label: "Request written fee breakdown (what is included vs extras)", verified: false },
    { id: "activities", label: "Ask to see the weekly activities schedule", verified: false },
    { id: "meal-menu", label: "Ask to see the current meal menu and dietary accommodations", verified: false },
    { id: "speak-resident", label: "Ask if you can speak with a current resident's family", verified: false },
    { id: "trial-stay", label: "Ask about trial stay or respite options before committing", verified: false },
    { id: "ownership", label: "Ask about ownership structure (private vs corporate)", verified: false },
    { id: "stability", label: "Ask about recent investments or changes in management", verified: false },
  ])

  const [documentsChecklist] = useState([
    { category: "Identity", items: ["Passport or driving licence", "Proof of address (utility bill)"] },
    { category: "Medical", items: ["GP summary care record", "Current medication list", "Recent hospital letters"] },
    {
      category: "Financial",
      items: ["Bank statements (3 months)", "Pension statements", "Property valuation", "Savings certificates"],
    },
    {
      category: "Care Needs",
      items: ["Care needs assessment", "Social worker report", "NHS CHC Checklist (if applicable)"],
    },
  ])

  useEffect(() => {
    const saved = localStorage.getItem("rightcarehome-pro-action-checklist-v2")
    if (saved) {
      try {
        setChecklist(JSON.parse(saved))
      } catch (e) {
        // Ignore parse errors
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("rightcarehome-pro-action-checklist-v2", JSON.stringify(checklist))
  }, [checklist])

  const toggleItem = (id: string) => {
    setChecklist((prev) => prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)))
  }

  const week1Items = checklist.filter((item) => item.week === 1)
  const week2Items = checklist.filter((item) => item.week === 2)
  const week1Complete = week1Items.filter((item) => item.checked).length
  const week2Complete = week2Items.filter((item) => item.checked).length
  const totalComplete = checklist.filter((item) => item.checked).length
  const totalProgress = Math.round((totalComplete / checklist.length) * 100)

  return (
    <section className="w-full px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30 font-sans print:py-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Clock className="w-4 h-4" />
            Your Enhanced 14-Day Action Plan
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 leading-tight">
            From Report to Decision in 2 Weeks
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A step-by-step roadmap combining all report sections to secure the best care home
          </p>
        </div>

        <Card className="p-4 md:p-8 mb-6 md:mb-8 bg-card border-border">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 md:gap-4 mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-foreground font-serif">Overall Progress</h3>
            <span className="text-base md:text-lg text-muted-foreground">
              {totalComplete} of {checklist.length} tasks complete
            </span>
          </div>
          <div className="h-4 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${totalProgress}%` }}
            />
          </div>
        </Card>

        <Card className="p-4 md:p-8 mb-6 md:mb-8 bg-amber-50 border-amber-200">
          <div className="flex flex-col sm:flex-row sm:items-start gap-3 md:gap-4">
            <AlertCircle className="w-6 h-6 md:w-7 md:h-7 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground font-serif">Why 14 Days Matters</h3>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
                Families who act within 14 days secure their preferred home <strong>4x more often</strong> than those
                who delay. Good care homes typically have 2-3 week waiting lists.
              </p>
              <p className="text-base text-foreground/70">
                This plan integrates all sections of your £119 Professional Report: Risk Assessment, CQC Deep Dive,
                Financial Stability, Negotiation Scripts, and Funding Templates.
              </p>
            </div>
          </div>
        </Card>

        {/* Week 1 */}
        <Card className="p-8 mb-6 bg-card border-border">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground font-serif">Week 1: Research & Contact</h3>
                <p className="text-muted-foreground">Days 1-7</p>
              </div>
            </div>
            <div className="text-base font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
              {week1Complete}/{week1Items.length}
            </div>
          </div>

          <div className="space-y-3">
            {week1Items.map((item) => (
              <button
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className="flex items-start gap-4 w-full text-left group hover:bg-muted/50 p-4 rounded-xl transition-colors min-h-[56px]"
              >
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-lg border-2 transition-all ${
                    item.checked ? "bg-primary border-primary" : "border-border group-hover:border-primary/50"
                  } flex items-center justify-center`}
                  aria-hidden="true"
                >
                  {item.checked && <Check className="w-5 h-5 text-primary-foreground" />}
                </div>
                <div className="flex-1">
                  <span
                    className={`text-lg block ${
                      item.checked ? "text-muted-foreground line-through" : "text-foreground font-medium"
                    }`}
                  >
                    {item.label}
                    <span className="sr-only">{item.checked ? " - Completed" : " - Not completed"}</span>
                  </span>
                  {item.description && (
                    <span className="text-sm text-muted-foreground mt-1 block">{item.description}</span>
                  )}
                  {item.documentsRequired && item.documentsRequired.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {item.documentsRequired.map((doc, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          <FileText className="w-3 h-3 mr-1" />
                          {doc}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
                {item.checked && (
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">Done</span>
                )}
              </button>
            ))}
          </div>
        </Card>

        {/* Week 2 */}
        <Card className="p-8 mb-8 bg-card border-border">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground font-serif">Week 2: Visit & Decide</h3>
                <p className="text-muted-foreground">Days 8-14</p>
              </div>
            </div>
            <div className="text-base font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
              {week2Complete}/{week2Items.length}
            </div>
          </div>

          <div className="space-y-3">
            {week2Items.map((item) => (
              <button
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className="flex items-start gap-4 w-full text-left group hover:bg-muted/50 p-4 rounded-xl transition-colors min-h-[56px]"
              >
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-lg border-2 transition-all ${
                    item.checked ? "bg-primary border-primary" : "border-border group-hover:border-primary/50"
                  } flex items-center justify-center`}
                  aria-hidden="true"
                >
                  {item.checked && <Check className="w-5 h-5 text-primary-foreground" />}
                </div>
                <div className="flex-1">
                  <span
                    className={`text-lg block ${
                      item.checked ? "text-muted-foreground line-through" : "text-foreground font-medium"
                    }`}
                  >
                    {item.label}
                    <span className="sr-only">{item.checked ? " - Completed" : " - Not completed"}</span>
                  </span>
                  {item.description && (
                    <span className="text-sm text-muted-foreground mt-1 block">{item.description}</span>
                  )}
                  {item.documentsRequired && item.documentsRequired.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {item.documentsRequired.map((doc, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          <FileText className="w-3 h-3 mr-1" />
                          {doc}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
                {item.checked && (
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">Done</span>
                )}
              </button>
            ))}
          </div>
        </Card>

        <Card className="p-4 md:p-8 mb-6 md:mb-8 bg-primary/5 border-primary/20">
          <div className="flex items-center gap-3 mb-6">
            <Eye className="w-7 h-7 text-primary" />
            <h3 className="text-2xl font-bold text-foreground font-serif">Enhanced Visit Verification Checklist</h3>
          </div>
          <p className="text-base text-muted-foreground mb-6">
            Print this or take a screenshot. Use it during each visit to verify data from Sections 5 (CQC Deep Dive), 6
            (Financial Stability), and 7 (Staff Quality).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {verificationChecklist.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-3 md:p-4 bg-card rounded-xl border border-border min-h-[48px]"
              >
                <div className="w-5 h-5 md:w-6 md:h-6 rounded border-2 border-primary/30 flex-shrink-0" />
                <span className="text-sm md:text-base text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Document Preparation */}
        <Card className="p-8 mb-8 bg-card border-border">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-7 h-7 text-primary" />
            <h3 className="text-2xl font-bold text-foreground font-serif">Document Preparation Checklist</h3>
          </div>
          <p className="text-base text-muted-foreground mb-6">
            For funding applications (Section 14), you'll need these documents. Start gathering them in Week 1.
          </p>
          <div className="space-y-6">
            {documentsChecklist.map((category) => (
              <div key={category.category}>
                <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {category.category}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-4">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-base text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Report Section References */}
        <Card className="p-8 bg-muted/30 border-border">
          <h3 className="text-xl font-bold text-foreground mb-4 font-serif">Quick Section Reference Guide</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base">
            <div className="flex items-start gap-2">
              <Badge variant="outline" className="mt-0.5">
                Section 4
              </Badge>
              <span className="text-foreground">Risk Assessment → Understand red flags before visiting</span>
            </div>
            <div className="flex items-start gap-2">
              <Badge variant="outline" className="mt-0.5">
                Section 5
              </Badge>
              <span className="text-foreground">CQC Deep Dive → Verify regulatory data during visit</span>
            </div>
            <div className="flex items-start gap-2">
              <Badge variant="outline" className="mt-0.5">
                Section 6
              </Badge>
              <span className="text-foreground">Financial Stability → Ask about ownership & investments</span>
            </div>
            <div className="flex items-start gap-2">
              <Badge variant="outline" className="mt-0.5">
                Section 7
              </Badge>
              <span className="text-foreground">Staff Quality → Ask about turnover & training</span>
            </div>
            <div className="flex items-start gap-2">
              <Badge variant="outline" className="mt-0.5">
                Section 14
              </Badge>
              <span className="text-foreground">Funding → Use email templates for applications</span>
            </div>
            <div className="flex items-start gap-2">
              <Badge variant="outline" className="mt-0.5">
                Section 15
              </Badge>
              <span className="text-foreground">Negotiation → Use scripts & Fair Cost Gap data</span>
            </div>
          </div>
        </Card>

        {/* Encouragement */}
        <div className="text-center px-4 mt-8">
          <p className="text-xl text-muted-foreground leading-relaxed">
            <strong className="text-foreground">You have everything you need.</strong> This £119 Professional Report,
            combined with your visits, will give you the confidence to make the right choice for your family.
          </p>
        </div>
      </div>
    </section>
  )
}
