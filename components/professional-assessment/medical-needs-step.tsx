"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Stethoscope, Activity, Pill } from "lucide-react"
import type { ProfessionalAssessmentData } from "@/app/(dynamic)/professional-assessment/steps/page"

interface MedicalNeedsStepProps {
  data: ProfessionalAssessmentData
  errors: Record<string, string>
  updateData: (updates: Partial<ProfessionalAssessmentData>) => void
}

const CARE_TYPES = [
  { value: "residential", label: "Residential Care", description: "General care and support" },
  { value: "nursing", label: "Nursing Care", description: "24/7 qualified nurse on site" },
  { value: "dementia", label: "Dementia Care", description: "Specialist dementia support" },
  { value: "respite", label: "Respite Care", description: "Short-term temporary care" },
]

const MEDICAL_CONDITIONS = [
  { value: "dementia", label: "Dementia or Alzheimer's" },
  { value: "mobility", label: "Mobility Problems" },
  { value: "diabetes", label: "Diabetes (Type 1 or Type 2)" },
  { value: "heart", label: "Heart Conditions" },
  { value: "stroke", label: "Stroke Recovery" },
  { value: "parkinsons", label: "Parkinson's Disease" },
  { value: "none", label: "No Serious Medical Conditions" },
]

const MOBILITY_OPTIONS = [
  { value: "independent", label: "Fully Independent", description: "Can walk without assistance" },
  { value: "walker", label: "Uses Walking Aid", description: "Requires walker or stick" },
  { value: "wheelchair-partial", label: "Wheelchair Sometimes", description: "Uses wheelchair for longer distances" },
  { value: "wheelchair-full", label: "Wheelchair Permanent", description: "Requires wheelchair at all times" },
]

const MEDICATION_OPTIONS = [
  { value: "none", label: "No Regular Medications", description: "No daily medication needs" },
  { value: "simple", label: "1-2 Simple Medications", description: "Basic medication routine" },
  { value: "several", label: "Several Medications", description: "Multiple but straightforward" },
  { value: "complex", label: "Many Medications, Complex", description: "Requires careful management" },
]

const EQUIPMENT_OPTIONS = [
  { value: "hoist", label: "Hoist" },
  { value: "hospital-bed", label: "Hospital Bed" },
  { value: "oxygen", label: "Oxygen Equipment" },
  { value: "catheter", label: "Catheter Care" },
  { value: "peg", label: "PEG Feeding" },
  { value: "none", label: "No Special Equipment" },
]

export function MedicalNeedsStep({ data, errors, updateData }: MedicalNeedsStepProps) {
  const handleCheckboxChange = (
    field: keyof Pick<ProfessionalAssessmentData, "care_types" | "medical_conditions" | "special_equipment">,
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
        <h2 className="text-xl md:text-2xl font-serif font-semibold text-foreground mb-2">Medical Needs Assessment</h2>
        <p className="text-base text-muted-foreground">
          Help us understand the care requirements to find the best matching homes.
        </p>
      </div>

      <div className="space-y-8">
        {/* Q8: Care Types - CRITICAL */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Stethoscope className="w-5 h-5 text-[#4F6F52]" />
            <Label className="text-base font-medium">
              Q8. Types of Care Needed <span className="text-destructive">*</span>
            </Label>
            <span className="px-2 py-0.5 bg-[#4F6F52]/10 text-[#4F6F52] text-xs font-medium rounded">CRITICAL</span>
          </div>
          <div className="grid gap-3">
            {CARE_TYPES.map((option) => (
              <label
                key={option.value}
                className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${data.care_types.includes(option.value) ? "border-[#4F6F52] bg-[#4F6F52]/5" : "border-border hover:border-[#4F6F52]/50"}`}
              >
                <Checkbox
                  checked={data.care_types.includes(option.value)}
                  onCheckedChange={(checked) => handleCheckboxChange("care_types", option.value, checked as boolean)}
                  className="h-5 w-5"
                />
                <div>
                  <span className="text-base font-medium">{option.label}</span>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </div>
              </label>
            ))}
          </div>
          {errors.care_types && <p className="text-sm text-destructive">{errors.care_types}</p>}
        </div>

        {/* Q9: Medical Conditions - CRITICAL */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-[#4F6F52]" />
            <Label className="text-base font-medium">
              Q9. Main Medical Conditions <span className="text-destructive">*</span>
            </Label>
            <span className="px-2 py-0.5 bg-[#4F6F52]/10 text-[#4F6F52] text-xs font-medium rounded">CRITICAL</span>
          </div>
          <div className="grid gap-2">
            {MEDICAL_CONDITIONS.map((option) => (
              <label
                key={option.value}
                className={`flex items-center gap-4 p-3 rounded-lg border cursor-pointer transition-all ${data.medical_conditions.includes(option.value) ? "border-[#4F6F52] bg-[#4F6F52]/5" : "border-border hover:border-[#4F6F52]/50"}`}
              >
                <Checkbox
                  checked={data.medical_conditions.includes(option.value)}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("medical_conditions", option.value, checked as boolean)
                  }
                  className="h-5 w-5"
                />
                <span className="text-base">{option.label}</span>
              </label>
            ))}
          </div>
          {errors.medical_conditions && <p className="text-sm text-destructive">{errors.medical_conditions}</p>}
        </div>

        {/* Q10: Mobility */}
        <div className="space-y-3">
          <Label className="text-base font-medium">
            Q10. Mobility Level <span className="text-destructive">*</span>
          </Label>
          <RadioGroup
            value={data.mobility_level}
            onValueChange={(value) => updateData({ mobility_level: value })}
            className="grid gap-3"
          >
            {MOBILITY_OPTIONS.map((option) => (
              <label
                key={option.value}
                className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${data.mobility_level === option.value ? "border-[#4F6F52] bg-[#4F6F52]/5" : "border-border hover:border-[#4F6F52]/50"}`}
              >
                <RadioGroupItem value={option.value} id={`mobility-${option.value}`} />
                <div>
                  <span className="text-base font-medium">{option.label}</span>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </div>
              </label>
            ))}
          </RadioGroup>
          {errors.mobility_level && <p className="text-sm text-destructive">{errors.mobility_level}</p>}
        </div>

        {/* Q11: Medication - CRITICAL */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Pill className="w-5 h-5 text-[#4F6F52]" />
            <Label className="text-base font-medium">
              Q11. Medication Management <span className="text-destructive">*</span>
            </Label>
            <span className="px-2 py-0.5 bg-[#4F6F52]/10 text-[#4F6F52] text-xs font-medium rounded">CRITICAL</span>
          </div>
          <RadioGroup
            value={data.medication_management}
            onValueChange={(value) => updateData({ medication_management: value })}
            className="grid gap-3"
          >
            {MEDICATION_OPTIONS.map((option) => (
              <label
                key={option.value}
                className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${data.medication_management === option.value ? "border-[#4F6F52] bg-[#4F6F52]/5" : "border-border hover:border-[#4F6F52]/50"}`}
              >
                <RadioGroupItem value={option.value} id={`medication-${option.value}`} />
                <div>
                  <span className="text-base font-medium">{option.label}</span>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </div>
              </label>
            ))}
          </RadioGroup>
          {errors.medication_management && <p className="text-sm text-destructive">{errors.medication_management}</p>}
        </div>

        {/* Q12: Equipment */}
        <div className="space-y-3">
          <Label className="text-base font-medium">
            Q12. Special Equipment Needed <span className="text-destructive">*</span>
          </Label>
          <div className="grid grid-cols-2 gap-2">
            {EQUIPMENT_OPTIONS.map((option) => (
              <label
                key={option.value}
                className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${data.special_equipment.includes(option.value) ? "border-[#4F6F52] bg-[#4F6F52]/5" : "border-border hover:border-[#4F6F52]/50"}`}
              >
                <Checkbox
                  checked={data.special_equipment.includes(option.value)}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("special_equipment", option.value, checked as boolean)
                  }
                  className="h-5 w-5"
                />
                <span className="text-base">{option.label}</span>
              </label>
            ))}
          </div>
          {errors.special_equipment && <p className="text-sm text-destructive">{errors.special_equipment}</p>}
        </div>
      </div>
    </div>
  )
}
