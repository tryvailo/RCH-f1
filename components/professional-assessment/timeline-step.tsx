"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import type { ProfessionalAssessmentData } from "@/app/(dynamic)/professional-assessment/steps/page"

interface TimelineStepProps {
  data: ProfessionalAssessmentData
  errors: Record<string, string>
  updateData: (updates: Partial<ProfessionalAssessmentData>) => void
}

const timelineOptions = [
  { value: "urgent_2_weeks", label: "Urgent (within 2 weeks)", description: "Immediate placement needed" },
  { value: "next_month", label: "Within next month", description: "Planning for near-term placement" },
  { value: "planning_2_3_months", label: "Planning for 2-3 months", description: "Time to evaluate options" },
  {
    value: "exploring_6_plus_months",
    label: "Just exploring options (6+ months)",
    description: "Early research stage",
  },
]

export function TimelineStep({ data, errors, updateData }: TimelineStepProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl md:text-2xl font-serif font-bold mb-2">Timeline</h2>
        <p className="text-muted-foreground">When do you need care home placement?</p>
      </div>

      <div className="space-y-3">
        <Label className="text-base">
          Placement timeline <span className="text-destructive">*</span>
        </Label>
        <RadioGroup value={data.timeline} onValueChange={(value) => updateData({ timeline: value })}>
          {timelineOptions.map((option) => (
            <label
              key={option.value}
              className={`flex items-start space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all hover:border-primary/50 ${
                data.timeline === option.value ? "border-primary bg-primary/5" : "border-border"
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
        {errors.timeline && <p className="text-sm text-destructive">{errors.timeline}</p>}
      </div>

      <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg space-y-2">
        <h3 className="font-semibold text-sm">What happens after submission?</h3>
        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
          <li>Your comprehensive report will be ready within 3-5 business days</li>
          <li>We'll analyze care homes matching your specific needs</li>
          <li>You'll receive detailed insights on quality, safety, and value</li>
          <li>Our team will contact you to discuss the findings</li>
        </ul>
      </div>
    </div>
  )
}
