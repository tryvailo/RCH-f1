"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { RefreshCw, Home } from "lucide-react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="min-h-screen bg-[#FDFBF7] flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl text-center">
          <h1 className="text-9xl font-bold text-[#C88D79] mb-4">500</h1>
          <h2 className="text-4xl font-serif font-bold text-[#1A231E] mb-6">Something Went Wrong</h2>
          <p className="text-xl text-[#5C6B5E] mb-8 leading-relaxed">
            We encountered an unexpected error. Our team has been notified and we're working to fix it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => reset()} size="lg" className="bg-[#4F6F52] hover:bg-[#3F5A42] text-white">
              <RefreshCw className="w-5 h-5 mr-2" />
              Try Again
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-[#4F6F52] text-[#4F6F52] hover:bg-[#4F6F52] hover:text-white bg-transparent"
            >
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                Go to Homepage
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
