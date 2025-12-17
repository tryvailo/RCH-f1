"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertTriangle } from "lucide-react"
import type { ProfessionalAssessmentData } from "@/app/(dynamic)/professional-assessment/steps/page"

interface SafetySpecialNeedsStepProps {
  data: ProfessionalAssessmentData
  errors: Record<string, string>
  updateData: (updates: Partial<ProfessionalAssessmentData>) => void
}

const fallsOptions = [
  { value: "no_falls_occurred", label: "No falls occurred" },
  { value: "1_2_no_serious_injuries", label: "1-2 falls, no serious injuries" },
  { value: "3_plus_or_serious_injuries", label: "3+ falls or serious injuries" },
  { value: "high_risk_of_falling", label: "High risk of falling" },
]

const allergyOptions = [
  { value: "food_allergies", label: "Food allergies" },
  { value: "medication_allergies", label: "Medication allergies" },
  { value: "environmental_allergies", label: "Environmental allergies" },
  { value: "no_allergies", label: "No allergies", exclusive: true },
]

const dietaryOptions = [
  { value: "diabetic_diet", label: "Diabetic diet" },
  { value: "pureed_soft_food", label: "Pureed/soft food" },
  { value: "vegetarian_vegan", label: "Vegetarian/vegan" },
  { value: "no_special_requirements", label: "No special requirements", exclusive: true },
]

const socialOptions = [
  { value: "very_sociable", label: "Very sociable, loves activities" },
  { value: "moderately_sociable", label: "Moderately sociable" },
  { value: "prefers_quiet", label: "Prefers quiet and peace" },
]

export function SafetySpecialNeedsStep({ data, errors, updateData }: SafetySpecialNeedsStepProps) {
  const handleAllergyChange = (value: string, checked: boolean, isExclusive: boolean) => {
    let updated: string[]
    if (isExclusive && checked) {
      updated = [value]
    } else if (checked) {
      updated = [...data.allergies.filter((v) => v !== "no_allergies"), value]
    } else {
      updated = data.allergies.filter((v) => v !== value)
    }
    updateData({ allergies: updated })
  }

  const handleDietaryChange = (value: string, checked: boolean, isExclusive: boolean) => {
    let updated: string[]
    if (isExclusive && checked) {
      updated = [value]
    } else if (checked) {
      updated = [...data.dietary.filter((v) => v !== "no_special_requirements"), value]
    } else {
      updated = data.dietary.filter((v) => v !== value)
    }
    updateData({ dietary: updated })
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl md:text-2xl font-serif font-bold mb-2">Safety & Special Needs</h2>
        <p className="text-muted-foreground">Critical information for ensuring proper care</p>
      </div>

      <div className="space-y-3">
        <Label className="text-base flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-destructive" />
          Falls history in the last year <span className="text-destructive">*</span>
        </Label>
        <RadioGroup value={data.safety_falls} onValueChange={(value) => updateData({ safety_falls: value })}>
          {fallsOptions.map((option) => (
            <label
              key={option.value}
              className={`flex items-center space-x-3 p-3 rounded-lg border-2 cursor-pointer transition-all hover:border-primary/50 ${
                data.safety_falls === option.value ? "border-primary bg-primary/5" : "border-border"
              }`}
            >
              <RadioGroupItem value={option.value} id={option.value} />
              <div className="font-medium">{option.label}</div>
            </label>
          ))}
        </RadioGroup>
        {errors.safety_falls && <p className="text-sm text-destructive">{errors.safety_falls}</p>}
      </div>

      <div className="space-y-3">
        <Label className="text-base">
          Main allergies <span className="text-destructive">*</span>
        </Label>
        <div className="space-y-2">
          {allergyOptions.map((option) => (
            <label
              key={option.value}
              className="flex items-center space-x-3 p-3 rounded-lg border-2 cursor-pointer hover:border-primary/50"
            >
              <Checkbox
                checked={data.allergies.includes(option.value)}
                onCheckedChange={(checked) => handleAllergyChange(option.value, checked === true, !!option.exclusive)}
              />
              <span className="font-medium">{option.label}</span>
            </label>
          ))}
        </div>
        {errors.allergies && <p className="text-sm text-destructive">{errors.allergies}</p>}
      </div>

      <div className="space-y-3">
        <Label className="text-base">
          Dietary requirements <span className="text-destructive">*</span>
        </Label>
        <div className="space-y-2">
          {dietaryOptions.map((option) => (
            <label
              key={option.value}
              className="flex items-center space-x-3 p-3 rounded-lg border-2 cursor-pointer hover:border-primary/50"
            >
              <Checkbox
                checked={data.dietary.includes(option.value)}
                onCheckedChange={(checked) => handleDietaryChange(option.value, checked === true, !!option.exclusive)}
              />
              <span className="font-medium">{option.label}</span>
            </label>
          ))}
        </div>
        {errors.dietary && <p className="text-sm text-destructive">{errors.dietary}</p>}
      </div>

      <div className="space-y-3">
        <Label className="text-base">
          Social personality type <span className="text-destructive">*</span>
        </Label>
        <RadioGroup
          value={data.social_personality}
          onValueChange={(value) => updateData({ social_personality: value })}
        >
          {socialOptions.map((option) => (
            <label
              key={option.value}
              className={`flex items-center space-x-3 p-3 rounded-lg border-2 cursor-pointer transition-all hover:border-primary/50 ${
                data.social_personality === option.value ? "border-primary bg-primary/5" : "border-border"
              }`}
            >
              <RadioGroupItem value={option.value} id={option.value} />
              <div className="font-medium">{option.label}</div>
            </label>
          ))}
        </RadioGroup>
        {errors.social_personality && <p className="text-sm text-destructive">{errors.social_personality}</p>}
      </div>
    </div>
  )
}
