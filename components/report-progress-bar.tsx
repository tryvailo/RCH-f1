"use client"

import { useEffect, useState } from "react"

interface ReportProgressBarProps {
  currentPage: number
  totalPages: number
  sections?: { name: string; startPage: number; endPage: number }[]
}

const DEFAULT_SECTIONS = [
  { name: "Summary", startPage: 1, endPage: 1 },
  { name: "Dashboard", startPage: 2, endPage: 5 },
  { name: "Analysis", startPage: 6, endPage: 14 },
  { name: "Action Plan", startPage: 15, endPage: 15 },
  { name: "Location", startPage: 16, endPage: 19 },
  { name: "Appendix", startPage: 20, endPage: 24 },
]

export function ReportProgressBar({ currentPage, totalPages, sections = DEFAULT_SECTIONS }: ReportProgressBarProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const progressPercent = (currentPage / totalPages) * 100

  const getCurrentSection = () => {
    for (const section of sections) {
      if (currentPage >= section.startPage && currentPage <= section.endPage) {
        return section.name
      }
    }
    return sections[0].name
  }

  return (
    <>
      <div className="h-12 sm:h-14 print:hidden" />

      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 print:hidden ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Main progress bar */}
        <div className="h-1 bg-[#E8E5DF]">
          <div className="h-full bg-[#4F6F52] transition-all duration-300" style={{ width: `${progressPercent}%` }} />
        </div>

        {/* Info bar */}
        <div className="bg-white/95 backdrop-blur-sm border-b border-[#E8E5DF] px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-[#4F6F52] uppercase tracking-wider">{getCurrentSection()}</span>
            <span className="text-xs text-[#5A6D7A]">
              Page {currentPage} of {totalPages}
            </span>
          </div>

          {/* Section dots */}
          <div className="hidden sm:flex items-center gap-1">
            {sections.map((section, index) => {
              const isActive = currentPage >= section.startPage && currentPage <= section.endPage
              const isCompleted = currentPage > section.endPage

              return (
                <div key={index} className="flex items-center gap-1">
                  <div
                    className={`w-2 h-2 rounded-full transition-colors ${
                      isActive ? "bg-[#4F6F52]" : isCompleted ? "bg-[#4F6F52]/50" : "bg-[#E8E5DF]"
                    }`}
                    title={section.name}
                  />
                  {index < sections.length - 1 && (
                    <div className={`w-4 h-0.5 ${isCompleted ? "bg-[#4F6F52]/50" : "bg-[#E8E5DF]"}`} />
                  )}
                </div>
              )
            })}
          </div>

          {/* Percentage on mobile */}
          <div className="sm:hidden text-xs font-semibold text-[#4F6F52]">{Math.round(progressPercent)}%</div>
        </div>
      </div>
    </>
  )
}
