"use client"

import type React from "react"

interface ReportLayoutProps {
  children: React.ReactNode
  reportId?: string
  pageNumber?: number
  totalPages?: number
}

export function ReportLayout({
  children,
  reportId = "PROF-2025-01-27-XYZ789",
  pageNumber = 1,
  totalPages = 13,
}: ReportLayoutProps) {
  return (
    <div className="w-full min-h-screen bg-[#FDFBF7] flex flex-col">
      <header className="w-full bg-white border-b-2 border-[#E8E5DF] px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
          {/* Logo */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#4F6F52] to-[#3d5741] flex items-center justify-centre shadow-soft-lg">
              <span className="text-white font-bold text-xl sm:text-2xl">R</span>
            </div>
            <div>
              <div className="font-bold text-xl sm:text-2xl text-[#1A231E] font-serif">RightCareHome</div>
              <div className="text-sm sm:text-base text-[#1A231E]/60">Professional Analysis Report</div>
            </div>
          </div>

          {/* Report ID */}
          <div className="text-left sm:text-right">
            <div className="text-xs sm:text-sm text-[#1A231E]/50 font-medium">Report ID</div>
            <div className="text-sm sm:text-base font-mono text-[#1A231E]/70">{reportId}</div>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full py-8 sm:py-10 lg:py-12">{children}</main>

      <footer className="w-full bg-white border-t-2 border-[#E8E5DF] px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-xs sm:text-sm text-[#1A231E]/60 font-medium">
            Page {pageNumber} of {totalPages}
          </div>
          <div className="text-xs sm:text-sm text-[#1A231E]/60 font-medium">Confidential and Personal</div>
        </div>
      </footer>
    </div>
  )
}
