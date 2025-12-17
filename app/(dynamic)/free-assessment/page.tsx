"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const StepsPage = dynamic(() => import("./steps/page"), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div>,
})

export default function FreeAssessmentPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <StepsPage />
    </Suspense>
  )
}
