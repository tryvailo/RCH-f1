"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { MapPin, Clock } from "lucide-react"
import type { ProfessionalAssessmentData } from "@/app/(dynamic)/professional-assessment/steps/page"

interface LocationTimelineStepProps {
  data: ProfessionalAssessmentData
  errors: Record<string, string>
  updateData: (updates: Partial<ProfessionalAssessmentData>) => void
}

const DISTANCE_OPTIONS = [
  { value: "5km", label: "Within 5km", description: "Very close to home" },
  { value: "15km", label: "Within 15km", description: "Local area" },
  { value: "30km", label: "Within 30km", description: "Wider search" },
  { value: "any", label: "Distance not important", description: "Nationwide search" },
]

const TIMELINE_OPTIONS = [
  { value: "urgent", label: "Urgent (within 2 weeks)", description: "Immediate placement needed", badge: "URGENT" },
  { value: "1month", label: "Within 1 month", description: "Soon but not immediate" },
  { value: "2-3months", label: "2-3 months", description: "Planning ahead" },
  { value: "6months+", label: "6+ months", description: "Long-term planning" },
]

export function LocationTimelineStep({ data, errors, updateData }: LocationTimelineStepProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl md:text-2xl font-serif font-semibold text-foreground mb-2">Location & Timeline</h2>
        <p className="text-base text-muted-foreground">Tell us where you are looking and when you need placement.</p>
      </div>

      <div className="space-y-8">
        {/* Q5: Location */}
        <div className="space-y-2">
          <Label htmlFor="preferred_location" className="text-base font-medium flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#4F6F52]" />
            Q5. Preferred City or Region <span className="text-destructive">*</span>
          </Label>
          <Input
            id="preferred_location"
            type="text"
            placeholder="e.g., Birmingham, Manchester, London SW"
            value={data.preferred_location}
            onChange={(e) => updateData({ preferred_location: e.target.value })}
            className={`h-12 text-base ${errors.preferred_location ? "border-destructive" : ""}`}
          />
          {errors.preferred_location && <p className="text-sm text-destructive">{errors.preferred_location}</p>}
        </div>

        {/* Q6: Distance */}
        <div className="space-y-3">
          <Label className="text-base font-medium">
            Q6. Maximum Distance <span className="text-destructive">*</span>
          </Label>
          <RadioGroup
            value={data.max_distance}
            onValueChange={(value) => updateData({ max_distance: value })}
            className="grid gap-3"
          >
            {DISTANCE_OPTIONS.map((option) => (
              <label
                key={option.value}
                className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  data.max_distance === option.value
                    ? "border-[#4F6F52] bg-[#4F6F52]/5"
                    : "border-border hover:border-[#4F6F52]/50"
                }`}
              >
                <RadioGroupItem value={option.value} id={option.value} />
                <div>
                  <span className="text-base font-medium">{option.label}</span>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </div>
              </label>
            ))}
          </RadioGroup>
          {errors.max_distance && <p className="text-sm text-destructive">{errors.max_distance}</p>}
        </div>

        {/* Q7: Timeline - CRITICAL */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#4F6F52]" />
            <Label className="text-base font-medium">
              Q7. When Do You Need Placement? <span className="text-destructive">*</span>
            </Label>
            <span className="px-2 py-0.5 bg-[#4F6F52]/10 text-[#4F6F52] text-xs font-medium rounded">CRITICAL</span>
          </div>
          <RadioGroup
            value={data.placement_timeline}
            onValueChange={(value) => updateData({ placement_timeline: value })}
            className="grid gap-3"
          >
            {TIMELINE_OPTIONS.map((option) => (
              <label
                key={option.value}
                className={`flex items-center justify-between gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  data.placement_timeline === option.value
                    ? "border-[#4F6F52] bg-[#4F6F52]/5"
                    : "border-border hover:border-[#4F6F52]/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <RadioGroupItem value={option.value} id={`timeline-${option.value}`} />
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
          {errors.placement_timeline && <p className="text-sm text-destructive">{errors.placement_timeline}</p>}
        </div>
      </div>
    </div>
  )
}
