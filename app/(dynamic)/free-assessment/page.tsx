"use client"

import dynamic from "next/dynamic"

const StepsPage = dynamic(() => import("./steps/page"), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div>,
})

export default function FreeAssessmentPage() {
  return <StepsPage />
}
