"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import type { ProfessionalAssessmentData } from "@/app/(dynamic)/professional-assessment/steps/page"

interface LocationBudgetStepProps {
  data: ProfessionalAssessmentData
  errors: Record<string, string>
  updateData: (updates: Partial<ProfessionalAssessmentData>) => void
}

const distanceOptions = [
  { value: "5km", label: "Up to 5 km" },
  { value: "15km", label: "Up to 15 km" },
  { value: "30km", label: "Up to 30 km" },
  { value: "distance_not_important", label: "Distance not important" },
]

const budgetOptions = [
  { value: "under_3000_self", label: "Up to £3,000 (self-funded)" },
  { value: "under_3000_local", label: "Up to £3,000 (local authority funded)" },
  { value: "3000_5000_self", label: "£3,000 - £5,000 (self-funded)" },
  { value: "3000_5000_local", label: "£3,000 - £5,000 (local authority funded)" },
  { value: "5000_7000_self", label: "£5,000 - £7,000 (self-funded)" },
  { value: "5000_7000_local", label: "£5,000 - £7,000 (local authority funded)" },
  { value: "over_7000_self", label: "Over £7,000 (self-funded)" },
  { value: "over_7000_local", label: "Over £7,000 (local authority funded)" },
  { value: "need_budget_guidance", label: "Need budget guidance" },
]

export function LocationBudgetStep({ data, errors, updateData }: LocationBudgetStepProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl md:text-2xl font-serif font-bold mb-2">Location & Budget</h2>
        <p className="text-muted-foreground">Help us narrow down the best options for you</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="location_001" className="text-base">
          Preferred city or region <span className="text-destructive">*</span>
        </Label>
        <Input
          id="location_001"
          type="text"
          placeholder="e.g. Birmingham, West Midlands"
          value={data.location_001}
          onChange={(e) => updateData({ location_001: e.target.value })}
          className={errors.location_001 ? "border-destructive" : ""}
        />
        {errors.location_001 && <p className="text-sm text-destructive">{errors.location_001}</p>}
      </div>

      <div className="space-y-3">
        <Label className="text-base">
          Maximum distance <span className="text-destructive">*</span>
        </Label>
        <RadioGroup
          value={data.location_002}
          onValueChange={(value) => updateData({ location_002: value })}
          className="space-y-2"
        >
          {distanceOptions.map((option) => (
            <label
              key={option.value}
              className={`flex items-center space-x-3 p-3 rounded-lg border-2 cursor-pointer transition-all hover:border-primary/50 ${
                data.location_002 === option.value ? "border-primary bg-primary/5" : "border-border"
              }`}
            >
              <RadioGroupItem value={option.value} id={option.value} />
              <div className="font-medium">{option.label}</div>
            </label>
          ))}
        </RadioGroup>
        {errors.location_002 && <p className="text-sm text-destructive">{errors.location_002}</p>}
      </div>

      <div className="space-y-3">
        <Label className="text-base">
          Monthly budget and funding source <span className="text-destructive">*</span>
        </Label>
        <RadioGroup
          value={data.budget_001}
          onValueChange={(value) => updateData({ budget_001: value })}
          className="space-y-2"
        >
          {budgetOptions.map((option) => (
            <label
              key={option.value}
              className={`flex items-center space-x-3 p-3 rounded-lg border-2 cursor-pointer transition-all hover:border-primary/50 ${
                data.budget_001 === option.value ? "border-primary bg-primary/5" : "border-border"
              }`}
            >
              <RadioGroupItem value={option.value} id={option.value} />
              <div className="font-medium text-sm">{option.label}</div>
            </label>
          ))}
        </RadioGroup>
        {errors.budget_001 && <p className="text-sm text-destructive">{errors.budget_001}</p>}
      </div>
    </div>
  )
}
