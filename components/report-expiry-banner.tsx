"use client"

import { useState, useEffect } from "react"
import { Clock, X, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ReportExpiryBannerProps {
  onSaveClick: () => void
  reportId: string
}

export function ReportExpiryBanner({ onSaveClick, reportId }: ReportExpiryBannerProps) {
  const [timeRemaining, setTimeRemaining] = useState<{ hours: number; minutes: number } | null>(null)
  const [isDismissed, setIsDismissed] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check localStorage for existing expiry time or create new one
    const storageKey = `report-expiry-${reportId}`
    let expiryTime = localStorage.getItem(storageKey)

    if (!expiryTime) {
      // Set 48 hours from now
      const expiry = Date.now() + 48 * 60 * 60 * 1000
      localStorage.setItem(storageKey, expiry.toString())
      expiryTime = expiry.toString()
    }

    // Check if dismissed
    const dismissedKey = `report-expiry-dismissed-${reportId}`
    if (localStorage.getItem(dismissedKey)) {
      setIsDismissed(true)
      return
    }

    // Show banner after 30 seconds of viewing (not immediately - British politeness)
    const showTimer = setTimeout(() => {
      setIsVisible(true)
    }, 30000)

    // Update countdown
    const updateCountdown = () => {
      const remaining = Number.parseInt(expiryTime!) - Date.now()
      if (remaining <= 0) {
        setTimeRemaining({ hours: 0, minutes: 0 })
      } else {
        const hours = Math.floor(remaining / (60 * 60 * 1000))
        const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000))
        setTimeRemaining({ hours, minutes })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 60000) // Update every minute

    return () => {
      clearTimeout(showTimer)
      clearInterval(interval)
    }
  }, [reportId])

  const handleDismiss = () => {
    const dismissedKey = `report-expiry-dismissed-${reportId}`
    localStorage.setItem(dismissedKey, "true")
    setIsDismissed(true)
  }

  if (isDismissed || !isVisible || !timeRemaining) {
    return null
  }

  // Only show urgency when under 24 hours
  const isUrgent = timeRemaining.hours < 24

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div
        className={`${isUrgent ? "bg-[#C9A86C]/10 border-b border-[#C9A86C]/20" : "bg-[#F8F6F3] border-b border-[#E8E5DF]"}`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-centre flex-shrink-0 ${isUrgent ? "bg-[#C9A86C]/20" : "bg-[#4F6F52]/10"}`}
              >
                <Clock className={`w-4 h-4 ${isUrgent ? "text-[#C9A86C]" : "text-[#4F6F52]"}`} />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-[#1A231E]">
                  <span className="font-medium">Your personalised report</span>
                  <span className="text-[#1A231E]/70">
                    {" "}
                    is available for{" "}
                    <span className={`font-medium ${isUrgent ? "text-[#C9A86C]" : "text-[#4F6F52]"}`}>
                      {timeRemaining.hours}h {timeRemaining.minutes}m
                    </span>
                  </span>
                </p>
                <p className="text-xs text-[#1A231E]/50 hidden sm:block">
                  Save a copy to keep access to your care home research
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <Button
                size="sm"
                onClick={onSaveClick}
                className="h-9 px-4 bg-[#4F6F52] hover:bg-[#3D5940] text-white rounded-full text-sm"
              >
                <Mail className="w-3.5 h-3.5 mr-1.5" />
                <span className="hidden sm:inline">Save to Email</span>
                <span className="sm:hidden">Save</span>
              </Button>
              <button
                onClick={handleDismiss}
                className="p-2 text-[#1A231E]/40 hover:text-[#1A231E]/70 transition-colours"
                aria-label="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
