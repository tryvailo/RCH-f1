"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Check, Clock, AlertCircle, Eye } from "lucide-react"

interface ChecklistItem {
  id: string
  label: string
  description?: string
  checked: boolean
  week: number
}

export function ProActionPlan() {
  const [checklist, setChecklist] = useState<ChecklistItem[]>([
    // Week 1
    {
      id: "read-report",
      label: "Read full report (all 22 pages)",
      description: "Take notes on key differences between homes",
      checked: false,
      week: 1,
    },
    {
      id: "prioritise-homes",
      label: "Rank your top 3 homes from the 5 analysed",
      description: "Use the Match Score and your priorities",
      checked: false,
      week: 1,
    },
    {
      id: "call-top-3",
      label: "Call your top 3 homes",
      description: "Use the telephone checklist from Appendix D",
      checked: false,
      week: 1,
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
      label: "Start NHS CHC application (if applicable)",
      description: "Use our funding eligibility results as evidence",
      checked: false,
      week: 1,
    },
    // Week 2
    {
      id: "first-visit",
      label: "Complete first care home visit",
      description: "Bring the verification checklist from Appendix D",
      checked: false,
      week: 2,
    },
    {
      id: "verify-data",
      label: "Verify report data during visit",
      description: "Check CQC certificate, ask about staffing",
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
      label: "Use negotiation scripts for fee discussions",
      description: "Reference Fair Cost Gap data in your conversation",
      checked: false,
      week: 2,
    },
    {
      id: "gather-documents",
      label: "Gather all financial documents",
      description: "Bank statements, property valuations, pension details",
      checked: false,
      week: 2,
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
    { id: "cqc-cert", label: "Ask to see CQC registration certificate", checked: false },
    { id: "staff-ratio", label: "Ask about current staff-to-resident ratio", checked: false },
    { id: "manager-tenure", label: "Ask how long the manager has been there", checked: false },
    { id: "fee-breakdown", label: "Request written fee breakdown (what's included)", checked: false },
    { id: "activities", label: "Ask to see the weekly activities schedule", checked: false },
    { id: "meal-menu", label: "Ask to see the current meal menu", checked: false },
    { id: "speak-resident", label: "Ask if you can speak with a current resident's family", checked: false },
    { id: "trial-stay", label: "Ask about trial stay options", checked: false },
  ])

  useEffect(() => {
    const saved = localStorage.getItem("rightcarehome-pro-action-checklist")
    if (saved) {
      try {
        setChecklist(JSON.parse(saved))
      } catch (e) {
        // Ignore
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("rightcarehome-pro-action-checklist", JSON.stringify(checklist))
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
    <section className="w-full p-6 sm:p-8 md:p-12 bg-gradient-to-b from-[#FDFBF7] to-[#F8F9FA] font-sans print:py-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-centre mb-10">
          <div className="inline-flex items-center gap-2 bg-[#4F6F52]/10 text-[#4F6F52] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Clock className="w-4 h-4" />
            Your 14-Day Action Plan
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1A231E] mb-4 leading-tight">
            From Report to Decision in 2 Weeks
          </h2>
          <p className="text-lg sm:text-xl text-[#1A231E]/70 max-w-2xl mx-auto">
            A step-by-step roadmap to secure the best care home at the best price
          </p>
        </div>

        {/* Overall Progress */}
        <Card className="p-6 md:p-8 mb-8 bg-white border-[#E8E5DF]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-[#1A231E] font-serif">Overall Progress</h3>
            <span className="text-lg text-[#1A231E]/70">
              {totalComplete} of {checklist.length} tasks complete
            </span>
          </div>
          <div className="h-4 bg-[#E8E5DF] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#4F6F52] rounded-full transition-all duration-500"
              style={{ width: `${totalProgress}%` }}
            />
          </div>
        </Card>

        {/* Urgency Card */}
        <Card className="p-6 md:p-8 mb-8 bg-amber-50 border-amber-200">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-7 h-7 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#1A231E] font-serif">Why 14 Days Matters</h3>
              <p className="text-base md:text-lg text-[#1A231E]/80 leading-relaxed">
                Families who act within 14 days secure their preferred home <strong>4x more often</strong> than those
                who delay. Good care homes typically have 2-3 week waiting lists. Starting now gives you the best chance
                of placement at your top choice.
              </p>
            </div>
          </div>
        </Card>

        {/* Week 1 */}
        <Card className="p-6 md:p-8 mb-6 bg-white border-[#E8E5DF]">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-centre font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#1A231E] font-serif">Week 1: Research & Contact</h3>
                <p className="text-[#1A231E]/60">Days 1-7</p>
              </div>
            </div>
            <div className="text-base font-medium text-[#1A231E]/70 bg-[#F8F9FA] px-3 py-1 rounded-full">
              {week1Complete}/{week1Items.length}
            </div>
          </div>

          <div className="space-y-3">
            {week1Items.map((item) => (
              <button
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className="flex items-start gap-4 w-full text-left group hover:bg-[#F8F9FA] p-4 rounded-xl transition-colours min-h-[56px]"
              >
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-lg border-2 transition-all ${
                    item.checked ? "bg-[#4F6F52] border-[#4F6F52]" : "border-[#E8E5DF] group-hover:border-[#4F6F52]/50"
                  } flex items-center justify-centre`}
                  aria-hidden="true"
                >
                  {item.checked && <Check className="w-5 h-5 text-white" />}
                </div>
                <div className="flex-1">
                  <span
                    className={`text-base md:text-lg block ${
                      item.checked ? "text-[#1A231E]/50 line-through" : "text-[#1A231E] font-medium"
                    }`}
                  >
                    {item.label}
                    <span className="sr-only">{item.checked ? " - Completed" : " - Not completed"}</span>
                  </span>
                  {item.description && <span className="text-sm text-[#1A231E]/60 mt-1 block">{item.description}</span>}
                </div>
                {item.checked && (
                  <span className="bg-[#4F6F52]/10 text-[#4F6F52] px-2 py-1 rounded text-sm font-medium">Done</span>
                )}
              </button>
            ))}
          </div>
        </Card>

        {/* Week 2 */}
        <Card className="p-6 md:p-8 mb-8 bg-white border-[#E8E5DF]">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-centre font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#1A231E] font-serif">Week 2: Visit & Decide</h3>
                <p className="text-[#1A231E]/60">Days 8-14</p>
              </div>
            </div>
            <div className="text-base font-medium text-[#1A231E]/70 bg-[#F8F9FA] px-3 py-1 rounded-full">
              {week2Complete}/{week2Items.length}
            </div>
          </div>

          <div className="space-y-3">
            {week2Items.map((item) => (
              <button
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className="flex items-start gap-4 w-full text-left group hover:bg-[#F8F9FA] p-4 rounded-xl transition-colours min-h-[56px]"
              >
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-lg border-2 transition-all ${
                    item.checked ? "bg-[#4F6F52] border-[#4F6F52]" : "border-[#E8E5DF] group-hover:border-[#4F6F52]/50"
                  } flex items-center justify-centre`}
                  aria-hidden="true"
                >
                  {item.checked && <Check className="w-5 h-5 text-white" />}
                </div>
                <div className="flex-1">
                  <span
                    className={`text-base md:text-lg block ${
                      item.checked ? "text-[#1A231E]/50 line-through" : "text-[#1A231E] font-medium"
                    }`}
                  >
                    {item.label}
                    <span className="sr-only">{item.checked ? " - Completed" : " - Not completed"}</span>
                  </span>
                  {item.description && <span className="text-sm text-[#1A231E]/60 mt-1 block">{item.description}</span>}
                </div>
                {item.checked && (
                  <span className="bg-[#4F6F52]/10 text-[#4F6F52] px-2 py-1 rounded text-sm font-medium">Done</span>
                )}
              </button>
            ))}
          </div>
        </Card>

        {/* Visit Verification Checklist */}
        <Card className="p-6 md:p-8 mb-8 bg-[#4F6F52]/5 border-[#4F6F52]/20">
          <div className="flex items-center gap-3 mb-6">
            <Eye className="w-7 h-7 text-[#4F6F52]" />
            <h3 className="text-xl md:text-2xl font-bold text-[#1A231E] font-serif">
              Quick Visit Verification Checklist
            </h3>
          </div>
          <p className="text-base text-[#1A231E]/70 mb-6">
            Print this or take a screenshot. Use it during each visit to verify report data.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {verificationChecklist.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#E8E5DF] min-h-[48px]"
              >
                <div className="w-6 h-6 rounded border-2 border-[#4F6F52]/30 flex-shrink-0" />
                <span className="text-base text-[#1A231E]">{item.label}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Encouragement */}
        <div className="text-centre px-4">
          <p className="text-lg md:text-xl text-[#1A231E]/70 leading-relaxed">
            <strong className="text-[#1A231E]">You have everything you need.</strong> This report, combined with your
            visits, will give you the confidence to make the right choice for your family.
          </p>
        </div>
      </div>
    </section>
  )
}
