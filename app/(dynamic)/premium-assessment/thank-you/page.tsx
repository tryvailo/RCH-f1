import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Thank You | Premium Assessment",
  description: "Your premium assessment has been submitted",
}

export default function PremiumAssessmentThankYouPage() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
            <CheckCircle2 className="w-12 h-12 text-primary" />
          </div>

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Welcome to Premium Service!</h1>

          <p className="text-xl text-muted-foreground">
            Your premium assessment has been received. A dedicated care advisor will contact you within 2 hours to begin
            your personalized service.
          </p>

          <div className="p-8 bg-card border border-border rounded-xl space-y-4">
            <h3 className="text-xl font-bold text-foreground">Premium Benefits Include:</h3>
            <ul className="text-left space-y-3 text-muted-foreground">
              <li>✓ Dedicated care advisor assigned</li>
              <li>✓ Priority report delivery (within 24 hours)</li>
              <li>✓ Personal care home visits with you</li>
              <li>✓ Unlimited consultation calls</li>
              <li>✓ Negotiation support with care homes</li>
            </ul>
          </div>

          <Button asChild size="lg" className="mt-8">
            <Link href="/">Return to Homepage</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
