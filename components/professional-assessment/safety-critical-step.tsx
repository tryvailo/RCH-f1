"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { ShieldAlert, AlertTriangle, Utensils, Brain } from "lucide-react"
import type { ProfessionalAssessmentData } from "@/app/(dynamic)/professional-assessment/steps/page"

interface SafetyCriticalStepProps {
  data: ProfessionalAssessmentData
  errors: Record<string, string>
  updateData: (updates: Partial<ProfessionalAssessmentData>) => void
}

const FALL_OPTIONS = [
  { value: "none", label: "No Falls", description: "No fall history in the past year" },
  { value: "minor", label: "1-2 Falls, No Serious Injury", description: "Minor falls" },
  { value: "multiple", label: "3+ Falls or Serious Injury", description: "Multiple falls occurred" },
  { value: "high-risk", label: "High Fall Risk", description: "Requires constant supervision", badge: "HIGH RISK" },
]

const ALLERGY_OPTIONS = [
  { value: "nuts", label: "Nuts (Severe)" },
  { value: "penicillin", label: "Penicillin" },
  { value: "latex", label: "Latex" },
  { value: "shellfish", label: "Shellfish" },
  { value: "dairy", label: "Dairy/Lactose" },
  { value: "none", label: "No Known Allergies" },
]

const DIETARY_OPTIONS = [
  { value: "diabetic", label: "Diabetic Diet" },
  { value: "pureed", label: "Pureed/Soft Food" },
  { value: "vegetarian", label: "Vegetarian" },
  { value: "vegan", label: "Vegan" },
  { value: "halal", label: "Halal" },
  { value: "kosher", label: "Kosher" },
  { value: "gluten-free", label: "Gluten-Free" },
  { value: "none", label: "No Special Requirements" },
]

const BEHAVIORAL_OPTIONS = [
  { value: "agitation", label: "Frequent Agitation", description: "Becomes easily upset" },
  { value: "sundowning", label: "Sundowning", description: "Increased confusion in evening" },
  { value: "sleep", label: "Sleep Disruption", description: "Irregular sleep patterns" },
  { value: "wandering", label: "Wandering or Exit-Seeking", description: "Attempts to leave unsupervised" },
  { value: "none", label: "No Behavioral Concerns", description: "No significant issues" },
]

export function SafetyCriticalStep({ data, errors, updateData }: SafetyCriticalStepProps) {
  const handleCheckboxChange = (
    field: keyof Pick<ProfessionalAssessmentData, "major_allergies" | "dietary_requirements" | "behavioral_concerns">,
    value: string,
    checked: boolean,
  ) => {
    const currentValues = data[field] as string[]
    if (checked) {
      if (value === "none") {
        updateData({ [field]: ["none"] })
      } else {
        updateData({ [field]: [...currentValues.filter((v) => v !== "none"), value] })
      }
    } else {
      updateData({ [field]: currentValues.filter((v) => v !== value) })
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl md:text-2xl font-serif font-semibold text-foreground mb-2">Safety & Critical Needs</h2>
        <p className="text-base text-muted-foreground">
          This information helps us match you with homes that can safely manage specific needs.
        </p>
      </div>

      <div className="space-y-8">
        {/* Q13: Falls - CRITICAL */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-red-600" />
            <Label className="text-base font-medium">
              Q13. Fall History <span className="text-destructive">*</span>
            </Label>
            <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-medium rounded">CRITICAL</span>
          </div>
          <RadioGroup
            value={data.fall_history}
            onValueChange={(value) => updateData({ fall_history: value })}
            className="grid gap-3"
          >
            {FALL_OPTIONS.map((option) => (
              <label
                key={option.value}
                className={`flex items-center justify-between gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${data.fall_history === option.value ? "border-[#4F6F52] bg-[#4F6F52]/5" : "border-border hover:border-[#4F6F52]/50"}`}
              >
                <div className="flex items-center gap-4">
                  <RadioGroupItem value={option.value} id={`fall-${option.value}`} />
                  <div>
                    <span className="text-base font-medium">{option.label}</span>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </div>
                </div>
                {option.badge && (
                  <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded">{option.badge}</span>
                )}
              </label>
            ))}
          </RadioGroup>
          {data.fall_history === "high-risk" && (
            <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-800">
                High fall risk will prioritize homes with enhanced safety features and 24/7 supervision.
              </p>
            </div>
          )}
          {errors.fall_history && <p className="text-sm text-destructive">{errors.fall_history}</p>}
        </div>

        {/* Q14: Allergies - CRITICAL */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            <Label className="text-base font-medium">
              Q14. Major Allergies <span className="text-destructive">*</span>
            </Label>
            <span className="px-2 py-0.5 bg-[#4F6F52]/10 text-[#4F6F52] text-xs font-medium rounded">CRITICAL</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {ALLERGY_OPTIONS.map((option) => (
              <label
                key={option.value}
                className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${data.major_allergies.includes(option.value) ? "border-[#4F6F52] bg-[#4F6F52]/5" : "border-border hover:border-[#4F6F52]/50"}`}
              >
                <Checkbox
                  checked={data.major_allergies.includes(option.value)}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("major_allergies", option.value, checked as boolean)
                  }
                  className="h-5 w-5"
                />
                <span className="text-base">{option.label}</span>
              </label>
            ))}
          </div>
          {errors.major_allergies && <p className="text-sm text-destructive">{errors.major_allergies}</p>}
        </div>

        {/* Q15: Dietary */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Utensils className="w-5 h-5 text-[#4F6F52]" />
            <Label className="text-base font-medium">
              Q15. Dietary Requirements <span className="text-destructive">*</span>
            </Label>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {DIETARY_OPTIONS.map((option) => (
              <label
                key={option.value}
                className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${data.dietary_requirements.includes(option.value) ? "border-[#4F6F52] bg-[#4F6F52]/5" : "border-border hover:border-[#4F6F52]/50"}`}
              >
                <Checkbox
                  checked={data.dietary_requirements.includes(option.value)}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("dietary_requirements", option.value, checked as boolean)
                  }
                  className="h-5 w-5"
                />
                <span className="text-base">{option.label}</span>
              </label>
            ))}
          </div>
          {errors.dietary_requirements && <p className="text-sm text-destructive">{errors.dietary_requirements}</p>}
        </div>

        {/* Q16: Behavioral */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-[#4F6F52]" />
            <Label className="text-base font-medium">
              Q16. Behavioral Concerns <span className="text-destructive">*</span>
            </Label>
          </div>
          <div className="grid gap-2">
            {BEHAVIORAL_OPTIONS.map((option) => (
              <label
                key={option.value}
                className={`flex items-center gap-4 p-3 rounded-lg border cursor-pointer transition-all ${data.behavioral_concerns.includes(option.value) ? "border-[#4F6F52] bg-[#4F6F52]/5" : "border-border hover:border-[#4F6F52]/50"}`}
              >
                <Checkbox
                  checked={data.behavioral_concerns.includes(option.value)}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("behavioral_concerns", option.value, checked as boolean)
                  }
                  className="h-5 w-5"
                />
                <div>
                  <span className="text-base font-medium">{option.label}</span>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </div>
              </label>
            ))}
          </div>
          {data.behavioral_concerns.includes("wandering") && (
            <div className="flex items-start gap-2 p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">Wandering behaviour requires homes with secure units.</p>
            </div>
          )}
          {errors.behavioral_concerns && <p className="text-sm text-destructive">{errors.behavioral_concerns}</p>}
        </div>
      </div>
    </div>
  )
}
