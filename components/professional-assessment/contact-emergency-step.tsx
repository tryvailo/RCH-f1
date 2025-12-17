"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertTriangle } from "lucide-react"
import type { ProfessionalAssessmentData } from "@/app/(dynamic)/professional-assessment/steps/page"

interface ContactEmergencyStepProps {
  data: ProfessionalAssessmentData
  errors: Record<string, string>
  updateData: (updates: Partial<ProfessionalAssessmentData>) => void
}

export function ContactEmergencyStep({ data, errors, updateData }: ContactEmergencyStepProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl md:text-2xl font-serif font-semibold text-foreground mb-2">
          Contact & Emergency Information
        </h2>
        <p className="text-base text-muted-foreground">
          We need your contact details to send your personalised report.
        </p>
      </div>

      <div className="space-y-6">
        {/* Q1: Full Name */}
        <div className="space-y-2">
          <Label htmlFor="full_name" className="text-base font-medium">
            Q1. Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="full_name"
            type="text"
            placeholder="Enter your full name"
            value={data.full_name}
            onChange={(e) => updateData({ full_name: e.target.value })}
            className={`h-12 text-base ${errors.full_name ? "border-destructive" : ""}`}
          />
          {errors.full_name && <p className="text-sm text-destructive">{errors.full_name}</p>}
        </div>

        {/* Q2: Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-base font-medium">
            Q2. Email Address <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            value={data.email}
            onChange={(e) => updateData({ email: e.target.value })}
            className={`h-12 text-base ${errors.email ? "border-destructive" : ""}`}
          />
          <p className="text-sm text-muted-foreground">Your report will be delivered within 48 hours</p>
          {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
        </div>

        {/* Q3: Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-base font-medium">
            Q3. Contact Phone <span className="text-destructive">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+44 7XXX XXX XXX"
            value={data.phone}
            onChange={(e) => updateData({ phone: e.target.value })}
            className={`h-12 text-base ${errors.phone ? "border-destructive" : ""}`}
          />
          {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
        </div>

        {/* Q4: Emergency Contact - CRITICAL */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="emergency_contact" className="text-base font-medium">
              Q4. Emergency Contact (Name & Phone) <span className="text-destructive">*</span>
            </Label>
            <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-medium rounded">CRITICAL</span>
          </div>
          <Input
            id="emergency_contact"
            type="text"
            placeholder="e.g., John Smith, +44 7XXX XXX XXX"
            value={data.emergency_contact}
            onChange={(e) => updateData({ emergency_contact: e.target.value })}
            className={`h-12 text-base ${errors.emergency_contact ? "border-destructive" : ""}`}
          />
          <div className="flex items-start gap-2 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              Critical for care home emergency records. This person will be contacted in case of medical emergency.
            </p>
          </div>
          {errors.emergency_contact && <p className="text-sm text-destructive">{errors.emergency_contact}</p>}
        </div>
      </div>
    </div>
  )
}
