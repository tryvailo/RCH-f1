"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import type { AssessmentData } from "@/app/(dynamic)/free-assessment/steps/page"

interface LocationCareTypeStepProps {
  data: AssessmentData
  errors: Record<string, string>
  updateData: (updates: Partial<AssessmentData>) => void
}

const careTypeOptions = [
  {
    value: "residential_care",
    label: "Residential Care",
    description: "Help with daily living",
  },
  {
    value: "dementia_care",
    label: "Dementia Care",
    description: "Specialist care",
  },
  {
    value: "nursing_care",
    label: "Nursing Care",
    description: "Regular medical care",
  },
  {
    value: "nursing_dementia_care",
    label: "Nursing & Dementia Care",
    description: "Combined specialist support",
  },
  {
    value: "not_sure",
    label: "I'm not sure",
    description: "We'll help you decide",
  },
]

export function LocationCareTypeStep({ data, errors, updateData }: LocationCareTypeStepProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl md:text-2xl font-serif font-bold mb-2">Location & Care Type</h2>
        <p className="text-muted-foreground">Help us find the right care homes in your area</p>
      </div>

      {/* Postcode */}
      <div className="space-y-2">
        <Label htmlFor="location_postcode" className="text-base">
          What's the postcode you're looking in? <span className="text-destructive">*</span>
        </Label>
        <Input
          id="location_postcode"
          type="text"
          placeholder="e.g. B15 2TT"
          value={data.location_postcode}
          onChange={(e) => updateData({ location_postcode: e.target.value.toUpperCase() })}
          className={errors.location_postcode ? "border-destructive" : ""}
          aria-invalid={!!errors.location_postcode}
          aria-describedby={errors.location_postcode ? "postcode-error" : undefined}
        />
        {errors.location_postcode && (
          <p id="postcode-error" className="text-sm text-destructive">
            {errors.location_postcode}
          </p>
        )}
      </div>

      {/* Care Type */}
      <div className="space-y-3">
        <Label className="text-base">
          What type of care are you looking for? <span className="text-destructive">*</span>
        </Label>
        <RadioGroup
          value={data.care_type}
          onValueChange={(value) => updateData({ care_type: value })}
          className="space-y-3"
        >
          {careTypeOptions.map((option) => (
            <label
              key={option.value}
              className={`flex items-start space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all hover:border-primary/50 ${
                data.care_type === option.value ? "border-primary bg-primary/5" : "border-border"
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
        {errors.care_type && <p className="text-sm text-destructive">{errors.care_type}</p>}
      </div>
    </div>
  )
}
