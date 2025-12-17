"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, FileText, Check, Clock, AlertCircle, Calendar, Users } from "lucide-react"

interface ChecklistItem {
  id: string
  label: string
  description?: string
  checked: boolean
}

export function ReportActionPlan() {
  const [checklist, setChecklist] = useState<ChecklistItem[]>([
    {
      id: "review-shortlist",
      label: "Review your 3 shortlisted homes",
      description: "Read through each recommendation carefully",
      checked: false,
    },
    {
      id: "call-homes",
      label: "Call all 3 homes to check availability",
      description: "Use the telephone checklist below when calling",
      checked: false,
    },
    {
      id: "schedule-visits",
      label: "Schedule visits to at least 2 homes",
      description: "Ideally within the next 7 days",
      checked: false,
    },
    {
      id: "bring-family",
      label: "Bring a family member to visits",
      description: "A second opinion helps spot things you might miss",
      checked: false,
    },
    {
      id: "start-funding",
      label: "Start NHS CHC application (if applicable)",
      description: "Don't wait for home placement to begin this process",
      checked: false,
    },
    {
      id: "gather-documents",
      label: "Gather financial documents",
      description: "Bank statements, property valuations, pension details",
      checked: false,
    },
    {
      id: "compare-fees",
      label: "Compare all-inclusive fees",
      description: "Ask each home exactly what's included and what costs extra",
      checked: false,
    },
    {
      id: "make-decision",
      label: "Make your decision",
      description: "Trust your instincts after visiting",
      checked: false,
    },
  ])

  const [enquiryChecklist, setEnquiryChecklist] = useState<ChecklistItem[]>([
    { id: "availability", label: "Do you have beds available in [timeline]?", checked: false },
    { id: "full-fee", label: "What's the full weekly fee? (Include everything—no hidden costs)", checked: false },
    { id: "not-included", label: "What's NOT included? (Ask this—they'll reveal hidden surprises)", checked: false },
    { id: "nhs-funding", label: "Do you accept NHS CHC funding?", checked: false },
    { id: "trial-visit", label: "Can we arrange a trial placement or visit?", checked: false },
    { id: "cancellation", label: "What's your cancellation/refund policy?", checked: false },
    { id: "family-reference", label: "Can we speak to a current family member?", checked: false },
  ])

  useEffect(() => {
    const savedChecklist = localStorage.getItem("rightcarehome-action-checklist")
    const savedEnquiryChecklist = localStorage.getItem("rightcarehome-enquiry-checklist")
    if (savedChecklist) {
      try {
        setChecklist(JSON.parse(savedChecklist))
      } catch (e) {
        // Ignore parse errors
      }
    }
    if (savedEnquiryChecklist) {
      try {
        setEnquiryChecklist(JSON.parse(savedEnquiryChecklist))
      } catch (e) {
        // Ignore parse errors
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("rightcarehome-action-checklist", JSON.stringify(checklist))
  }, [checklist])

  useEffect(() => {
    localStorage.setItem("rightcarehome-enquiry-checklist", JSON.stringify(enquiryChecklist))
  }, [enquiryChecklist])

  const toggleChecklistItem = (id: string) => {
    setChecklist((prev) => prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)))
  }

  const toggleEnquiryChecklistItem = (id: string) => {
    setEnquiryChecklist((prev) => prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)))
  }

  const completedCount = checklist.filter((item) => item.checked).length
  const progressPercent = Math.round((completedCount / checklist.length) * 100)

  return (
    <section className="bg-gradient-to-b from-background to-muted/20 py-14 md:py-20 px-4 sm:px-6 overflow-x-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-14">
          <Badge variant="secondary" className="mb-4 text-base md:text-lg px-6 py-2.5">
            <Clock className="w-5 h-5 md:w-6 md:h-6 mr-2 inline" />
            Your 7-Day Action Plan
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-5 leading-tight text-balance">
            Your Week-by-Week Action Plan
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
            Follow these steps to secure the best home at the best price
          </p>
        </div>

        {/* Urgency Stat Card */}
        <Card className="p-7 sm:p-9 md:p-10 mb-8 bg-amber-50/50 border-amber-200">
          <div className="flex items-start gap-5">
            <AlertCircle className="w-8 h-8 md:w-9 md:h-9 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-amber-900">Why Act Within 7 Days?</h3>
              <p className="text-lg md:text-xl text-amber-800 leading-relaxed">
                Families who contact care homes within 7 days of receiving their report secure beds{" "}
                <strong>3.2x faster</strong> and negotiate <strong>£1,200+ better annual rates</strong> on average. Good
                homes fill quickly.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-7 sm:p-9 lg:p-12 mb-10 bg-white/80 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">Your Progress Checklist</h3>
            <div className="flex items-center gap-4">
              <span className="text-base md:text-lg text-muted-foreground">
                {completedCount} of {checklist.length}
              </span>
              <div className="w-28 md:w-32 h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#4F6F52] rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {checklist.map((item, index) => (
              <button
                key={item.id}
                onClick={() => toggleChecklistItem(item.id)}
                className="flex items-start gap-5 w-full text-left group hover:bg-muted/50 p-5 -mx-5 rounded-xl transition-colors min-h-[72px]"
              >
                <div className="flex items-center gap-4 flex-shrink-0">
                  <span className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-muted flex items-center justify-center text-base md:text-lg font-medium">
                    {index + 1}
                  </span>
                  <div
                    className={`w-8 h-8 md:w-9 md:h-9 rounded border-2 transition-all ${
                      item.checked
                        ? "bg-[#4F6F52] border-[#4F6F52]"
                        : "border-muted-foreground/30 group-hover:border-[#4F6F52]/50"
                    } flex items-center justify-center`}
                  >
                    {item.checked && (
                      <Check className="w-5 h-5 md:w-6 md:h-6 text-white animate-in zoom-in-50 duration-200" />
                    )}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <span
                    className={`text-lg sm:text-xl md:text-[1.35rem] leading-relaxed block ${
                      item.checked ? "text-muted-foreground line-through" : "text-foreground font-medium"
                    }`}
                  >
                    {item.label}
                  </span>
                  {item.description && (
                    <span className="text-base md:text-lg text-muted-foreground mt-1.5 block leading-relaxed">
                      {item.description}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </Card>

        <Card className="p-7 sm:p-9 lg:p-12 mb-10 sm:mb-14 bg-white/80 backdrop-blur-sm">
          <div className="flex items-center gap-4 mb-8 sm:mb-10">
            <Phone className="w-7 h-7 md:w-8 md:h-8 text-[#4F6F52]" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">Telephone Enquiry Checklist</h3>
          </div>

          <div className="space-y-5">
            {enquiryChecklist.map((item) => (
              <button
                key={item.id}
                onClick={() => toggleEnquiryChecklistItem(item.id)}
                className="flex items-start gap-5 w-full text-left group hover:bg-muted/50 p-5 -mx-5 rounded-xl transition-colors min-h-[64px]"
              >
                <div
                  className={`flex-shrink-0 w-8 h-8 md:w-9 md:h-9 rounded border-2 transition-all ${
                    item.checked
                      ? "bg-[#4F6F52] border-[#4F6F52]"
                      : "border-muted-foreground/30 group-hover:border-[#4F6F52]/50"
                  } flex items-center justify-center`}
                >
                  {item.checked && (
                    <Check className="w-5 h-5 md:w-6 md:h-6 text-white animate-in zoom-in-50 duration-200" />
                  )}
                </div>
                <span
                  className={`text-lg sm:text-xl md:text-[1.35rem] leading-relaxed ${
                    item.checked ? "text-muted-foreground line-through" : "text-foreground font-medium"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 pt-8 sm:pt-10 border-t">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              <strong>Tip:</strong> Keep this checklist by your phone when calling care homes. It ensures you get all
              the information you need.
            </p>
          </div>
        </Card>

        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-center">Your Roadmap</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <Card className="p-7 sm:p-9 bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200">
            <div className="flex items-start justify-between mb-5">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl md:text-3xl flex-shrink-0">
                1
              </div>
              <Phone className="w-8 h-8 md:w-9 md:h-9 text-blue-600 flex-shrink-0" />
            </div>

            <Badge variant="outline" className="mb-4 border-blue-300 text-blue-700 text-base py-1.5 px-3">
              <Calendar className="w-4 h-4 mr-1.5" />
              Days 1-3
            </Badge>

            <h3 className="text-xl sm:text-2xl font-bold mb-5 text-balance">Call & Visit Homes</h3>

            <ul className="space-y-4 text-lg sm:text-xl">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                <span className="leading-relaxed">Call all 3 homes today</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                <span className="leading-relaxed">Use the checklist above</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                <span className="leading-relaxed">Schedule visits for this week</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                <span className="leading-relaxed">Bring family member if possible</span>
              </li>
            </ul>
          </Card>

          <Card className="p-7 sm:p-9 bg-gradient-to-br from-amber-50 to-amber-100/50 border-amber-200">
            <div className="flex items-start justify-between mb-5">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-2xl md:text-3xl flex-shrink-0">
                2
              </div>
              <FileText className="w-8 h-8 md:w-9 md:h-9 text-amber-600 flex-shrink-0" />
            </div>

            <Badge variant="outline" className="mb-4 border-amber-300 text-amber-700 text-base py-1.5 px-3">
              <Calendar className="w-4 h-4 mr-1.5" />
              Day 1 (Start Now)
            </Badge>

            <h3 className="text-xl sm:text-2xl font-bold mb-5 text-balance">Apply for Funding</h3>

            <ul className="space-y-4 text-lg sm:text-xl">
              <li className="flex items-start gap-3">
                <span className="text-amber-600 mt-1 flex-shrink-0">•</span>
                <span className="leading-relaxed">Start NHS CHC application today</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 mt-1 flex-shrink-0">•</span>
                <span className="leading-relaxed">Don't wait for home placement</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 mt-1 flex-shrink-0">•</span>
                <span className="leading-relaxed">Gather financial documents</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 mt-1 flex-shrink-0">•</span>
                <span className="leading-relaxed">Average approval: 8-12 weeks</span>
              </li>
            </ul>
          </Card>

          <Card className="p-7 sm:p-9 bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-emerald-200 sm:col-span-2 lg:col-span-1">
            <div className="flex items-start justify-between mb-5">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-2xl md:text-3xl flex-shrink-0">
                3
              </div>
              <Users className="w-8 h-8 md:w-9 md:h-9 text-emerald-600 flex-shrink-0" />
            </div>

            <Badge variant="outline" className="mb-4 border-emerald-300 text-emerald-700 text-base py-1.5 px-3">
              <Calendar className="w-4 h-4 mr-1.5" />
              Days 4-7
            </Badge>

            <h3 className="text-xl sm:text-2xl font-bold mb-5 text-balance">Visit & Decide</h3>

            <ul className="space-y-4 text-lg sm:text-xl">
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 mt-1 flex-shrink-0">•</span>
                <span className="leading-relaxed">Visit your top 2 choices</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 mt-1 flex-shrink-0">•</span>
                <span className="leading-relaxed">Use "Things to Verify" checklist</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 mt-1 flex-shrink-0">•</span>
                <span className="leading-relaxed">Trust your instincts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 mt-1 flex-shrink-0">•</span>
                <span className="leading-relaxed">Make your decision with confidence</span>
              </li>
            </ul>
          </Card>
        </div>

        {/* Encouraging Message */}
        <div className="mt-10 sm:mt-14 text-center px-4">
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
            <strong className="text-foreground">You can do this.</strong> Take it one step at a time, and you'll find
            the right home.
          </p>
        </div>
      </div>
    </section>
  )
}
