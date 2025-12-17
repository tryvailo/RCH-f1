import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Premium Assessment | RightCareHome",
  description: "Premium care home assessment with dedicated support",
}

export default function PremiumAssessmentPage() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Premium Assessment</h1>
          <p className="text-xl text-muted-foreground">
            Premium assessment with dedicated support and priority service - £299
          </p>
          <div className="p-8 bg-card border border-border rounded-xl">
            <p className="text-muted-foreground">This form will be implemented in the next phase</p>
          </div>
        </div>
      </div>
    </div>
  )
}
