"use client"

import {
  FileText,
  LayoutDashboard,
  Target,
  BarChart3,
  Shield,
  Heart,
  Users,
  TrendingUp,
  Home,
  MessageSquare,
  Calculator,
  Wallet,
  ClipboardList,
  Sparkles,
  MapPin,
  Star,
  HeartHandshake,
  BookOpen,
  ChevronRight,
  UtensilsCrossed,
  UserCheck,
} from "lucide-react"
import { Card } from "@/components/ui/card"

interface TableOfContentsProps {
  totalPages: number
  onNavigate?: (page: number) => void
}

const SECTION_GROUPS = [
  {
    groupName: "Overview",
    groupIcon: LayoutDashboard,
    groupColor: "#4F6F52",
    sections: [
      { page: 1, title: "Executive Summary", subtitle: "Top 3 recommendations & next step", icon: FileText },
      { page: 2, title: "Table of Contents", subtitle: "Navigation guide", icon: BookOpen },
      { page: 3, title: "Dashboard", subtitle: "Overall verdict & scores", icon: LayoutDashboard },
      { page: 4, title: "Your Priorities Match", subtitle: "How homes align with your needs", icon: Target },
      { page: 5, title: "At-a-Glance Comparison", subtitle: "All 5 homes side-by-side", icon: BarChart3 },
    ],
  },
  {
    groupName: "Quality Analysis",
    groupIcon: Shield,
    groupColor: "#3b82f6",
    sections: [
      { page: 6, title: "Safety Analysis", subtitle: "CQC ratings, incidents, staffing", icon: Shield },
      { page: 7, title: "Food Safety & Hygiene", subtitle: "FSA ratings, inspections, dietary", icon: UtensilsCrossed },
      { page: 8, title: "Medical Care Analysis", subtitle: "Clinical quality, nursing, specialists", icon: Heart },
      { page: 9, title: "Staff Quality Analysis", subtitle: "Training, retention, satisfaction", icon: Users },
      { page: 10, title: "Community Reputation", subtitle: "Reviews, family feedback", icon: MessageSquare },
      {
        page: 11,
        title: "Family Engagement Insights",
        subtitle: "Visit patterns, dwell time, trends",
        icon: UserCheck,
      },
    ],
  },
  {
    groupName: "Financial & Funding",
    groupIcon: TrendingUp,
    groupColor: "#10b981",
    sections: [
      { page: 12, title: "Financial Stability", subtitle: "Fees, transparency, viability", icon: TrendingUp },
      { page: 13, title: "Fair Cost Gap Calculator", subtitle: "Negotiation scripts & savings", icon: Calculator },
      { page: 14, title: "Funding Options", subtitle: "NHS, Council, DPA eligibility", icon: Wallet },
    ],
  },
  {
    groupName: "Your Action Plan",
    groupIcon: ClipboardList,
    groupColor: "#f97316",
    sections: [{ page: 15, title: "14-Day Action Plan", subtitle: "Roadmap & checklist", icon: ClipboardList }],
  },
  {
    groupName: "Lifestyle & Location",
    groupIcon: Home,
    groupColor: "#f59e0b",
    sections: [
      { page: 16, title: "Comfort & Lifestyle", subtitle: "Rooms, activities, dining", icon: Home },
      { page: 17, title: "Lifestyle Deep Dive", subtitle: "Daily life & wellbeing", icon: Sparkles },
      { page: 18, title: "Location Wellbeing", subtitle: "Neighbourhood comparison", icon: MapPin },
      { page: 19, title: "Area Map", subtitle: "Local amenities & transport", icon: MapPin },
    ],
  },
  {
    groupName: "Trust & Support",
    groupIcon: HeartHandshake,
    groupColor: "#ec4899",
    sections: [
      { page: 20, title: "What Families Say", subtitle: "Real testimonials", icon: Star },
      { page: 21, title: "Your Journey Matters", subtitle: "Support & reassurance", icon: HeartHandshake },
      { page: 22, title: "Share with Family", subtitle: "Send report to relatives", icon: Users },
    ],
  },
  {
    groupName: "Appendices",
    groupIcon: BookOpen,
    groupColor: "#6b7280",
    sections: [{ page: 23, title: "Appendices", subtitle: "Data accuracy & methodology", icon: BookOpen }],
  },
]

export function ReportTableOfContents({ totalPages, onNavigate }: TableOfContentsProps) {
  return (
    <div className="min-h-screen bg-[#FDFBF7] py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-centre mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4F6F52]/10 rounded-full mb-4">
            <BookOpen className="w-4 h-4 text-[#4F6F52]" />
            <span className="text-sm font-semibold text-[#4F6F52]">Navigation Guide</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1A231E] font-serif mb-2">Table of Contents</h1>
          <p className="text-base text-[#1A231E]/70 font-sans">
            Your {totalPages}-page Professional Report organised by section
          </p>
        </div>

        <div className="space-y-6">
          {SECTION_GROUPS.map((group) => {
            const GroupIcon = group.groupIcon

            return (
              <Card
                key={group.groupName}
                className="bg-white border border-[#E8E5DF] overflow-hidden rounded-2xl shadow-sm"
              >
                {/* Group Header */}
                <div className="px-5 py-4 flex items-center gap-3" style={{ backgroundColor: `${group.groupColor}10` }}>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-centre"
                    style={{ backgroundColor: group.groupColor }}
                  >
                    <GroupIcon className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-[#1A231E] font-serif">{group.groupName}</h2>
                    <p className="text-xs text-[#1A231E]/60">
                      {group.sections.length} {group.sections.length === 1 ? "page" : "pages"}
                    </p>
                  </div>
                </div>

                {/* Sections List */}
                <div className="divide-y divide-[#E8E5DF]/50">
                  {group.sections.map((section) => {
                    const Icon = section.icon

                    return (
                      <button
                        key={section.page}
                        className="w-full px-5 py-3 flex items-center gap-3 hover:bg-[#F8F6F3] transition-colours text-left group"
                        onClick={() => onNavigate?.(section.page)}
                      >
                        {/* Page Number */}
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-centre text-white font-bold text-sm flex-shrink-0"
                          style={{ backgroundColor: group.groupColor }}
                        >
                          {section.page}
                        </div>

                        {/* Icon */}
                        <Icon className="w-4 h-4 flex-shrink-0" style={{ colour: group.groupColor }} strokeWidth={2} />

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold text-[#1A231E] truncate">{section.title}</h3>
                          <p className="text-xs text-[#1A231E]/60 truncate">{section.subtitle}</p>
                        </div>

                        {/* Arrow */}
                        <ChevronRight className="w-4 h-4 text-[#1A231E]/30 group-hover:text-[#1A231E]/60 transition-colours flex-shrink-0" />
                      </button>
                    )
                  })}
                </div>
              </Card>
            )
          })}
        </div>

        {/* Quick Stats */}
        <Card className="mt-8 bg-gradient-to-br from-[#4F6F52]/5 to-[#4F6F52]/10 border border-[#4F6F52]/20 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-[#1A231E] font-serif mb-4 text-centre">What's Inside Your Report</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-centre">
            <div>
              <div className="text-2xl font-bold text-[#4F6F52]">22</div>
              <div className="text-xs text-[#1A231E]/60">Pages</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#4F6F52]">5</div>
              <div className="text-xs text-[#1A231E]/60">Care Homes</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#4F6F52]">830+</div>
              <div className="text-xs text-[#1A231E]/60">Data Points</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#4F6F52]">15+</div>
              <div className="text-xs text-[#1A231E]/60">Categories</div>
            </div>
          </div>
        </Card>

        {/* Print Hint */}
        <p className="text-centre text-xs text-[#1A231E]/50 mt-6 no-print">
          Tip: Use Ctrl+P (or Cmd+P) to print this report for offline reference
        </p>
      </div>
    </div>
  )
}
