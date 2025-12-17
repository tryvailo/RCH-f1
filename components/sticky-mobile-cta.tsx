"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 800
      setIsVisible(shouldShow)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] bg-white border-t border-[#E8E5DF] md:hidden animate-slide-up shadow-lg">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="flex-1 min-w-0">
          <div className="text-[10px] sm:text-xs text-[#1A231E]/60 uppercase tracking-wider font-semibold">
            Free Assessment
          </div>
          <div className="text-sm sm:text-base font-bold text-[#4F6F52]">One less worry</div>
        </div>
        <Button
          asChild
          className="flex-1 h-11 sm:h-12 text-sm sm:text-base bg-[#4F6F52] hover:bg-[#3A5140] text-white rounded-xl shadow-soft-md"
        >
          <Link href="/free-assessment">See My Options</Link>
        </Button>
      </div>
    </div>
  )
}

export { StickyMobileCTA as StickyMobileCta }
