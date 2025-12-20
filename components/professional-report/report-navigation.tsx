"use client"

import { useState, useEffect } from "react"
import { ChevronUp, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Section {
  id: string
  title: string
  pageNumber: number
}

const REPORT_SECTIONS: Section[] = [
  { id: "executive-summary", title: "Executive Summary", pageNumber: 1 },
  { id: "risk-assessment", title: "Risk Assessment", pageNumber: 2 },
  { id: "priorities-match", title: "Your Priorities Match", pageNumber: 3 },
  { id: "home-analysis", title: "Detailed Home Analysis", pageNumber: 4 },
  { id: "cqc-analysis", title: "CQC Deep Dive", pageNumber: 5 },
  { id: "staff-quality", title: "Staff Quality", pageNumber: 6 },
  { id: "financial-stability", title: "Financial Stability", pageNumber: 7 },
  { id: "community-reputation", title: "Community Reputation", pageNumber: 8 },
  { id: "comparative-analysis", title: "Comparative Analysis", pageNumber: 9 },
  { id: "fair-cost-gap", title: "Fair Cost Gap", pageNumber: 10 },
  { id: "funding-cost", title: "Funding Options", pageNumber: 11 },
  { id: "cost-analysis-tabs", title: "Cost Analysis", pageNumber: 12 },
  { id: "negotiation", title: "Negotiation Strategy", pageNumber: 13 },
  { id: "action-plan", title: "14-Day Action Plan", pageNumber: 14 },
  { id: "comfort-lifestyle", title: "Comfort & Lifestyle", pageNumber: 15 },
  { id: "area-map", title: "Location & Surroundings", pageNumber: 16 },
  { id: "footfall-trends", title: "Visitor Trends", pageNumber: 17 },
  { id: "dashboard", title: "Report Dashboard", pageNumber: 18 },
  { id: "ai-insights", title: "AI Expert Insights", pageNumber: 19 },
  { id: "share-family", title: "Share with Family", pageNumber: 20 },
  { id: "appendix", title: "Appendix", pageNumber: 21 },
]

export function ReportNavigation() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [showTOC, setShowTOC] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      // Show back to top after scrolling 800px
      setShowBackToTop(window.scrollY > 800)

      // Determine active section based on scroll position
      const sections = REPORT_SECTIONS.map((s) => ({
        id: s.id,
        element: document.getElementById(s.id),
      }))

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top: y, behavior: "smooth" })
      setShowTOC(false)
    }
  }

  return (
    <>
      {/* Desktop: Sticky Table of Contents */}
      <div className="hidden lg:block fixed left-4 xl:left-6 top-24 w-56 xl:w-64 bg-white border-2 border-border rounded-xl xl:rounded-2xl p-3 xl:p-4 shadow-lg max-h-[calc(100vh-120px)] overflow-y-auto no-print z-40">
        <h3 className="text-xs xl:text-sm font-bold text-foreground mb-3 uppercase tracking-wide">Report Sections</h3>
        <nav className="space-y-1">
          {REPORT_SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-full text-left px-2 xl:px-3 py-2 rounded-lg text-xs xl:text-sm transition-colours ${
                activeSection === section.id
                  ? "bg-primary text-primary-foreground font-semibold"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <span className="block truncate">{section.title}</span>
              <span className="text-xs opacity-70">Page {section.pageNumber}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile: Floating TOC Button */}
      <Button
        onClick={() => setShowTOC(!showTOC)}
        className="lg:hidden fixed left-4 bottom-20 md:bottom-24 w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg z-50 no-print bg-primary hover:bg-primary/90"
        size="icon"
        aria-label="Table of contents"
      >
        {showTOC ? <X className="w-5 h-5 md:w-6 md:h-6" /> : <Menu className="w-5 h-5 md:w-6 md:h-6" />}
      </Button>

      {/* Mobile: TOC Overlay */}
      {showTOC && (
        <div className="lg:hidden fixed inset-0 bg-background/95 z-40 no-print overflow-y-auto">
          <div className="p-6 pt-20">
            <h3 className="text-xl font-bold text-foreground mb-6">Report Sections</h3>
            <nav className="space-y-2">
              {REPORT_SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-colours ${
                    activeSection === section.id
                      ? "bg-primary text-primary-foreground font-semibold"
                      : "bg-white text-foreground hover:bg-muted border border-border"
                  }`}
                >
                  <span className="block text-base mb-1">{section.title}</span>
                  <span className="text-sm opacity-70">Page {section.pageNumber}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed right-4 md:right-6 bottom-6 w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg z-50 no-print bg-primary hover:bg-primary/90"
          size="icon"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5 md:w-6 md:h-6" />
        </Button>
      )}
    </>
  )
}
