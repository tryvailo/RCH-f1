"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import type { AssessmentData } from "@/app/(dynamic)/free-assessment/steps/page"

interface ContactInformationStepProps {
  data: AssessmentData
  errors: Record<string, string>
  updateData: (updates: Partial<AssessmentData>) => void
}

export function ContactInformationStep({ data, errors, updateData }: ContactInformationStepProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl md:text-2xl font-serif font-bold mb-2">Almost Done!</h2>
        <p className="text-muted-foreground">We'll send your free care home shortlist to this email</p>
      </div>

      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="contact_name" className="text-base">
          Your full name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="contact_name"
          type="text"
          placeholder="e.g. Sarah Johnson"
          value={data.contact_name}
          onChange={(e) => updateData({ contact_name: e.target.value })}
          className={errors.contact_name ? "border-destructive" : ""}
          aria-invalid={!!errors.contact_name}
          aria-describedby={errors.contact_name ? "name-error" : undefined}
        />
        {errors.contact_name && (
          <p id="name-error" className="text-sm text-destructive">
            {errors.contact_name}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="contact_email" className="text-base">
          Your email address <span className="text-destructive">*</span>
        </Label>
        <Input
          id="contact_email"
          type="email"
          placeholder="e.g. sarah@example.com"
          value={data.contact_email}
          onChange={(e) => updateData({ contact_email: e.target.value })}
          className={errors.contact_email ? "border-destructive" : ""}
          aria-invalid={!!errors.contact_email}
          aria-describedby={errors.contact_email ? "email-error" : undefined}
        />
        {errors.contact_email && (
          <p id="email-error" className="text-sm text-destructive">
            {errors.contact_email}
          </p>
        )}
      </div>

      {/* Marketing Opt-in */}
      <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
        <Checkbox
          id="marketing_opt_in"
          checked={data.marketing_opt_in}
          onCheckedChange={(checked) => updateData({ marketing_opt_in: checked === true })}
        />
        <div className="flex-1">
          <Label htmlFor="marketing_opt_in" className="text-sm font-normal cursor-pointer">
            I'd like to receive helpful tips and updates about care home selection (optional)
          </Label>
        </div>
      </div>

      <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg space-y-2">
        <h3 className="font-semibold text-sm">What happens next?</h3>
        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
          <li>You'll receive your personalized shortlist within 24 hours</li>
          <li>We'll highlight key factors you should consider</li>
          <li>Optional: Upgrade to Professional Assessment for in-depth analysis</li>
        </ul>
      </div>
    </div>
  )
}
