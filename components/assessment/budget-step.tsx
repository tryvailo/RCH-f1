"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import type { AssessmentData } from "@/app/(dynamic)/free-assessment/steps/page"

interface BudgetStepProps {
  data: AssessmentData
  errors: Record<string, string>
  updateData: (updates: Partial<AssessmentData>) => void
}

const budgetOptions = [
  {
    value: "1150",
    label: "Up to £1,150/week",
    description: "~127 homes available",
  },
  {
    value: "1350",
    label: "Up to £1,350/week",
    description: "~289 homes available",
  },
  {
    value: "all",
    label: "Show me all options",
    description: "No budget limit",
  },
  {
    value: "not_sure",
    label: "I'm not sure yet",
    description: "We'll help you understand costs",
  },
]

export function BudgetStep({ data, errors, updateData }: BudgetStepProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl md:text-2xl font-serif font-bold mb-2">Budget</h2>
        <p className="text-muted-foreground">This helps us show you the most relevant options</p>
      </div>

      <div className="space-y-3">
        <Label className="text-base">
          What's your weekly budget? <span className="text-destructive">*</span>
        </Label>
        <RadioGroup
          value={data.budget_range}
          onValueChange={(value) => updateData({ budget_range: value })}
          className="space-y-3"
        >
          {budgetOptions.map((option) => (
            <label
              key={option.value}
              className={`flex items-start space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all hover:border-primary/50 ${
                data.budget_range === option.value ? "border-primary bg-primary/5" : "border-border"
              }`}
            >
              <RadioGroupItem value={option.value} id={option.value} className="mt-0.5" />
              <div className="flex-1">
                <div className="font-medium">{option.label}</div>
                <div className="text-sm text-muted-foreground">{option.description}</div>
              </div>
            </label>
          ))}
        </RadioGroup>
        {errors.budget_range && <p className="text-sm text-destructive">{errors.budget_range}</p>}
      </div>

      <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
        <p className="text-sm text-muted-foreground">
          💡 <strong>Tip:</strong> The average cost in your area is around £1,200/week. We'll show you how to
          potentially reduce this by £23,400/year.
        </p>
      </div>
    </div>
  )
}
