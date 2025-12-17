"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { PoundSterling, Info } from "lucide-react"
import type { ProfessionalAssessmentData } from "@/app/(dynamic)/professional-assessment/steps/page"

interface BudgetStepProps {
  data: ProfessionalAssessmentData
  errors: Record<string, string>
  updateData: (updates: Partial<ProfessionalAssessmentData>) => void
}

const BUDGET_OPTIONS = [
  {
    value: "under-3k",
    label: "Under £3,000/month",
    description: "Budget-conscious options",
    note: "May limit options",
  },
  {
    value: "3k-5k",
    label: "£3,000 - £5,000/month",
    description: "Standard residential care",
    note: "Good range available",
  },
  {
    value: "5k-7k",
    label: "£5,000 - £7,000/month",
    description: "Nursing and specialist care",
    note: "Premium facilities",
  },
  {
    value: "over-7k",
    label: "Over £7,000/month",
    description: "Premium and luxury options",
    note: "Full access to all",
  },
]

export function BudgetStep({ data, errors, updateData }: BudgetStepProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl md:text-2xl font-serif font-semibold text-foreground mb-2">Budget & Funding</h2>
        <p className="text-base text-muted-foreground">
          Understanding your budget helps us find the best value options.
        </p>
      </div>

      <div className="space-y-6">
        {/* Q17: Budget */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <PoundSterling className="w-5 h-5 text-[#4F6F52]" />
            <Label className="text-base font-medium">
              Q17. Monthly Budget <span className="text-destructive">*</span>
            </Label>
          </div>
          <RadioGroup
            value={data.monthly_budget}
            onValueChange={(value) => updateData({ monthly_budget: value })}
            className="grid gap-4"
          >
            {BUDGET_OPTIONS.map((option) => (
              <label
                key={option.value}
                className={`flex flex-col gap-2 p-5 rounded-lg border-2 cursor-pointer transition-all ${data.monthly_budget === option.value ? "border-[#4F6F52] bg-[#4F6F52]/5" : "border-border hover:border-[#4F6F52]/50"}`}
              >
                <div className="flex items-start gap-4">
                  <RadioGroupItem value={option.value} id={`budget-${option.value}`} className="mt-1" />
                  <div className="flex-1">
                    <span className="text-lg font-medium">{option.label}</span>
                    <p className="text-base text-muted-foreground">{option.description}</p>
                    <p className="text-sm text-[#4F6F52] mt-1">{option.note}</p>
                  </div>
                </div>
              </label>
            ))}
          </RadioGroup>
          {errors.monthly_budget && <p className="text-sm text-destructive">{errors.monthly_budget}</p>}
        </div>

        {/* Funding info */}
        <div className="p-5 bg-[#4F6F52]/5 border border-[#4F6F52]/20 rounded-lg">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-[#4F6F52] flex-shrink-0 mt-0.5" />
            <div className="space-y-2">
              <p className="text-base font-medium text-foreground">Your report will include funding analysis</p>
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>NHS Continuing Healthcare (CHC) - potential 100% funding</li>
                <li>Local Authority support - means-tested assistance</li>
                <li>Deferred Payment Agreements - delay costs until property sale</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Ready message */}
        <div className="p-5 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-base text-green-800 font-medium mb-2">You're almost done!</p>
          <p className="text-sm text-green-700">
            Click "Continue to Payment" to proceed. Your personalised 25-35 page Professional Report will be delivered
            within 48 hours.
          </p>
        </div>
      </div>
    </div>
  )
}
