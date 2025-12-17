"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import type { AssessmentData } from "@/app/(dynamic)/free-assessment/steps/page"

interface FundingDurationStepProps {
  data: AssessmentData
  errors: Record<string, string>
  updateData: (updates: Partial<AssessmentData>) => void
}

const fundingOptions = [
  { value: "privately_funded", label: "Privately funded" },
  { value: "local_authority_top_up", label: "Self-funded with Local Authority top-up" },
  { value: "local_authority_funded", label: "Local Authority funded" },
  { value: "nhs_funded", label: "NHS funded (Continuing Healthcare)" },
  { value: "mixed_funding", label: "Mixed funding" },
  { value: "not_sure", label: "I'm not sure" },
]

const durationOptions = [
  { value: "permanent", label: "Permanent", description: "Long-term stay" },
  { value: "short_term_respite", label: "Short-term / Respite care", description: "Temporary care" },
  { value: "trial_period", label: "Trial period", description: "Testing the arrangement" },
  { value: "not_sure", label: "Not sure yet", description: "We'll help you decide" },
]

export function FundingDurationStep({ data, errors, updateData }: FundingDurationStepProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl md:text-2xl font-serif font-bold mb-2">Funding & Duration</h2>
        <p className="text-muted-foreground">Understanding your situation helps us provide better recommendations</p>
      </div>

      {/* Funding Type */}
      <div className="space-y-3">
        <Label className="text-base">
          How will the care be funded? <span className="text-destructive">*</span>
        </Label>
        <RadioGroup
          value={data.funding_type}
          onValueChange={(value) => updateData({ funding_type: value })}
          className="space-y-2"
        >
          {fundingOptions.map((option) => (
            <label
              key={option.value}
              className={`flex items-center space-x-3 p-3 rounded-lg border-2 cursor-pointer transition-all hover:border-primary/50 ${
                data.funding_type === option.value ? "border-primary bg-primary/5" : "border-border"
              }`}
            >
              <RadioGroupItem value={option.value} id={option.value} />
              <div className="font-medium">{option.label}</div>
            </label>
          ))}
        </RadioGroup>
        {errors.funding_type && <p className="text-sm text-destructive">{errors.funding_type}</p>}
      </div>

      {/* Duration Type */}
      <div className="space-y-3">
        <Label className="text-base">
          How long will the care be needed? <span className="text-destructive">*</span>
        </Label>
        <RadioGroup
          value={data.duration_type}
          onValueChange={(value) => updateData({ duration_type: value })}
          className="space-y-3"
        >
          {durationOptions.map((option) => (
            <label
              key={option.value}
              className={`flex items-start space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all hover:border-primary/50 ${
                data.duration_type === option.value ? "border-primary bg-primary/5" : "border-border"
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
        {errors.duration_type && <p className="text-sm text-destructive">{errors.duration_type}</p>}
      </div>
    </div>
  )
}
