import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { XCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Payment Failed | RightCareHome",
  description: "Your payment could not be processed",
}

export default function CheckoutFailedPage() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-destructive/10 mb-4">
            <XCircle className="w-12 h-12 text-destructive" />
          </div>

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Payment Failed</h1>

          <p className="text-xl text-muted-foreground">
            We were unable to process your payment. Please try again or contact support if the problem persists.
          </p>

          <div className="p-8 bg-card border border-border rounded-xl space-y-4">
            <h3 className="text-xl font-bold text-foreground">Common Issues</h3>
            <ul className="text-left space-y-2 text-muted-foreground">
              <li>• Insufficient funds</li>
              <li>• Incorrect card details</li>
              <li>• Card expired or blocked</li>
              <li>• Bank declined the transaction</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild size="lg" variant="default">
              <Link href="/assessment-checkout">Try Again</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/">Return to Homepage</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
