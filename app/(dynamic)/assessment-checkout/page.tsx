"use client"
import { useRouter } from "next/navigation"

export default function AssessmentCheckoutPage() {
  const router = useRouter()

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     router.push("/professional-assessment/thank-you?ref=PRO-DEMO-2024&name=Sarah%20Johnson&location=Birmingham")
  //   }, 3000)

  //   return () => clearTimeout(timer)
  // }, [router])
  // </CHANGE>

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 text-center">
            Complete Your Purchase
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="p-8 bg-card border border-border rounded-xl">
                <h2 className="text-2xl font-bold text-foreground mb-4">Billing Information</h2>
                <p className="text-muted-foreground">Checkout form will be implemented in the next phase</p>
                {/* </CHANGE> */}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="p-6 bg-card border border-border rounded-xl sticky top-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Order Summary</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Professional Assessment</span>
                    <span>£119.00</span>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between text-foreground font-bold text-lg">
                      <span>Total</span>
                      <span>£119.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
