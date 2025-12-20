"use client"

import { useEffect, useState } from "react"
import { CheckCircle2, Loader2 } from "lucide-react"
import { Utensils, Coins, Database } from "lucide-react"

interface LoadingStep {
  id: number
  text: string
  subtext: string
  icon: any
  duration: number
}

const LOADING_STEPS: LoadingStep[] = [
  {
    id: 1,
    text: "Analysing your priorities...",
    subtext: "Understanding what matters most for your search",
    icon: CheckCircle2,
    duration: 2500,
  },
  {
    id: 2,
    text: "Checking regulatory compliance...",
    subtext: "Verifying CQC ratings across 147 local homes",
    icon: Loader2,
    duration: 2500,
  },
  {
    id: 3,
    text: "Reviewing food safety standards...",
    subtext: "Cross-referencing FSA hygiene ratings",
    icon: Utensils,
    duration: 2500,
  },
  {
    id: 4,
    text: "Calculating fair cost gaps...",
    subtext: "Comparing fees with 15,000+ UK care homes",
    icon: Loader2,
    duration: 2500,
  },
  {
    id: 5,
    text: "Assessing funding eligibility...",
    subtext: "Checking council support in your area",
    icon: Coins,
    duration: 2500,
  },
  {
    id: 6,
    text: "Mapping local amenities...",
    subtext: "Finding GPs, transport links & community services",
    icon: Loader2,
    duration: 2500,
  },
  {
    id: 7,
    text: "Cross-referencing data sources...",
    subtext: "Validating information from 15+ official sources",
    icon: Database,
    duration: 2500,
  },
  {
    id: 8,
    text: "Generating your matches...",
    subtext: "Personalised recommendations ready",
    icon: CheckCircle2,
    duration: 2500,
  },
]

const LOADING_FACTS = [
  "We analyse official regulatory data, not just ratings",
  "Fair cost comparison can save families £400+ per month",
  "Most directories don't show food hygiene ratings",
  "We're independent - we don't take commissions from homes",
  "Local amenities affect family visit frequency significantly",
]

interface ReportLoadingAnimationProps {
  onComplete: () => void
}

export function ReportLoadingAnimation({ onComplete }: ReportLoadingAnimationProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [currentFact, setCurrentFact] = useState(0)

  useEffect(() => {
    const factInterval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % LOADING_FACTS.length)
    }, 3000)
    return () => clearInterval(factInterval)
  }, [])

  useEffect(() => {
    if (currentStep >= LOADING_STEPS.length) {
      setTimeout(onComplete, 300)
      return
    }

    const step = LOADING_STEPS[currentStep]
    const progressIncrement = 100 / LOADING_STEPS.length

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const target = (currentStep + 1) * progressIncrement
        if (prev >= target) {
          clearInterval(progressInterval)
          return target
        }
        return prev + 1
      })
    }, 30)

    const stepTimer = setTimeout(() => {
      setCurrentStep((prev) => prev + 1)
    }, step.duration)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(stepTimer)
    }
  }, [currentStep, onComplete])

  return (
    <div className="min-h-screen flex items-center justify-centre bg-gradient-to-br from-[#FDFBF7] via-white to-[#F5F3EF] px-4">
      <div className="w-full max-w-2xl">
        {/* Main Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-soft p-6 sm:p-10 border border-[#E8E6E1]">
          {/* Logo/Brand */}
          <div className="text-centre mb-6">
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A231E] mb-2">RightCareHome</h1>
            <p className="text-sm text-[#4A5555]">Preparing your personalised analysis</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="h-3 bg-[#E8E6E1] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#4F6F52] to-[#6B9070] transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between mt-2 text-xs text-[#6B7777]">
              <span>Analysing your requirements...</span>
              <span className="font-medium">{Math.round(progress)}%</span>
            </div>
          </div>

          {/* Loading Steps */}
          <div className="space-y-3">
            {LOADING_STEPS.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-start gap-4 p-3 sm:p-4 rounded-xl transition-all duration-300 ${
                  index < currentStep
                    ? "bg-[#F0F6F1] border border-[#4F6F52]/20"
                    : index === currentStep
                      ? "bg-white border-2 border-[#4F6F52] shadow-md"
                      : "bg-[#FDFBF7] border border-transparent opacity-40"
                }`}
              >
                {/* Icon */}
                <div className="flex-shrink-0 mt-0.5">
                  {index < currentStep ? (
                    <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#4F6F52]" />
                  ) : index === currentStep ? (
                    <Loader2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#4F6F52] animate-spin" />
                  ) : (
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#E8E6E1]" />
                  )}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-sm sm:text-base font-medium transition-colours ${
                      index <= currentStep ? "text-[#1A231E]" : "text-[#8B9494]"
                    }`}
                  >
                    {step.text}
                  </p>
                  {index === currentStep && (
                    <p className="text-xs sm:text-sm text-[#6B7777] mt-1 animate-pulse">{step.subtext}</p>
                  )}
                </div>

                {/* Status indicator */}
                {index < currentStep && (
                  <div className="text-xs font-medium text-[#4F6F52] bg-[#F0F6F1] px-2 py-1 rounded flex-shrink-0">
                    Done
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-[#FDF8F3] rounded-xl border border-[#C88D79]/20">
            <p className="text-xs text-[#6B7777] mb-1.5">Did you know?</p>
            <p className="text-sm text-[#4A5555] font-medium transition-opacity duration-500">
              {LOADING_FACTS[currentFact]}
            </p>
          </div>

          <div className="mt-6 text-centre">
            <p className="text-sm text-[#6B7777]">Analysing 18 data points for your shortlist</p>
          </div>
        </div>

        {/* Trust indicator */}
        <div className="mt-6 text-centre">
          <p className="text-xs text-[#8B9494]">Secure analysis | No spam | 100% independent</p>
        </div>
      </div>
    </div>
  )
}
