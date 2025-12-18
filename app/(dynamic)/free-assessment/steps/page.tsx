"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ChevronLeft,
  ChevronRight,
  Check,
  MapPin,
  Heart,
  Coins,
  Clock,
  User,
  Home,
  Brain,
  Stethoscope,
  HelpCircle,
  CreditCard,
  Building2,
  Building,
  Calendar,
  ClipboardCheck,
  Info,
  BarChart3,
  GripVertical,
  ChevronUp,
  ChevronDown,
  ArrowRight,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export type AssessmentData = {
  location_postcode: string
  care_type: string
  budget_range: string
  funding_type: string
  duration_type: string
  contact_name: string
  contact_email: string
  marketing_opt_in: boolean
  priority_order?: string[]
  priority_weights?: number[]
}

const STEPS = [
  {
    id: "location",
    label: "Location",
    icon: MapPin,
    reinforcement: "Excellent. Now we know where to search.",
  },
  {
    id: "care",
    label: "Care Type",
    icon: Heart,
    reinforcement: "Perfect. This helps us find specialist homes.",
  },
  {
    id: "budget",
    label: "Budget",
    icon: Coins,
    reinforcement: "Noted. We'll show you the best value options.",
  },
  {
    id: "funding",
    label: "Funding",
    icon: Building2,
    reinforcement: "Understood. We'll check potential support options.",
  },
  {
    id: "duration",
    label: "Duration",
    icon: Clock,
    reinforcement: "Nearly there — just your contact details.",
  },
  {
    id: "contact",
    label: "Contact",
    icon: User,
    reinforcement: "Almost done — let's personalise your report.",
  },
  {
    id: "priorities",
    label: "Priorities",
    icon: BarChart3,
    reinforcement: "",
  },
]

const TOTAL_STEPS = STEPS.length

const careTypeOptions = [
  {
    value: "residential_care",
    label: "Residential Care",
    description: "Help with daily living activities",
    icon: Home,
    color: "text-[#4F6F52]",
    bgColor: "bg-[#4F6F52]/10",
  },
  {
    value: "dementia_care",
    label: "Dementia Care",
    description: "Specialist memory care support",
    icon: Brain,
    color: "text-[#7C6A9A]",
    bgColor: "bg-[#7C6A9A]/10",
  },
  {
    value: "nursing_care",
    label: "Nursing Care",
    description: "24/7 qualified nursing staff",
    icon: Stethoscope,
    color: "text-[#3B82A0]",
    bgColor: "bg-[#3B82A0]/10",
  },
  {
    value: "nursing_dementia_care",
    label: "Nursing & Dementia",
    description: "Combined specialist care",
    icon: Building,
    color: "text-[#C88D79]",
    bgColor: "bg-[#C88D79]/10",
  },
  {
    value: "not_sure",
    label: "I'm not sure yet",
    description: "We'll help you decide",
    icon: HelpCircle,
    color: "text-muted-foreground",
    bgColor: "bg-muted",
  },
]

const budgetOptions = [
  {
    value: "1150",
    label: "Up to £1,150/week",
    description: "Economy options available",
    icon: Coins,
    color: "text-[#4F6F52]",
    bgColor: "bg-[#4F6F52]/10",
  },
  {
    value: "1350",
    label: "Up to £1,350/week",
    description: "Most popular range",
    icon: CreditCard,
    color: "text-[#3B82A0]",
    bgColor: "bg-[#3B82A0]/10",
  },
  {
    value: "all",
    label: "Show all options",
    description: "No budget limit",
    icon: CreditCard,
    color: "text-[#C88D79]",
    bgColor: "bg-[#C88D79]/10",
  },
  {
    value: "not_sure",
    label: "I'm not sure yet",
    description: "We'll help you understand costs",
    icon: HelpCircle,
    color: "text-muted-foreground",
    bgColor: "bg-muted",
  },
]

const fundingOptions = [
  {
    value: "privately_funded",
    label: "Self-funded",
    description: "Paying privately",
    icon: User,
    color: "text-[#4F6F52]",
    bgColor: "bg-[#4F6F52]/10",
  },
  {
    value: "local_authority_funded",
    label: "Council funded",
    description: "Local Authority support",
    icon: Building2,
    color: "text-[#3B82A0]",
    bgColor: "bg-[#3B82A0]/10",
  },
  {
    value: "nhs_funded",
    label: "NHS funded",
    description: "Continuing Healthcare",
    icon: Building,
    color: "text-[#7C6A9A]",
    bgColor: "bg-[#7C6A9A]/10",
  },
  {
    value: "mixed_funding",
    label: "Mixed funding",
    description: "Combined sources",
    icon: Calendar,
    color: "text-[#C88D79]",
    bgColor: "bg-[#C88D79]/10",
  },
  {
    value: "not_sure",
    label: "Not sure yet",
    description: "We'll help you explore options",
    icon: HelpCircle,
    color: "text-muted-foreground",
    bgColor: "bg-muted",
  },
]

const durationOptions = [
  {
    value: "permanent",
    label: "Permanent",
    description: "Long-term care",
    icon: Home,
    color: "text-[#4F6F52]",
    bgColor: "bg-[#4F6F52]/10",
  },
  {
    value: "short_term_respite",
    label: "Respite care",
    description: "Short-term stay",
    icon: Clock,
    color: "text-[#3B82A0]",
    bgColor: "bg-[#3B82A0]/10",
  },
  {
    value: "trial_period",
    label: "Trial period",
    description: "Testing first",
    icon: ClipboardCheck,
    color: "text-[#C88D79]",
    bgColor: "bg-[#C88D79]/10",
  },
  {
    value: "not_sure",
    label: "Not decided",
    description: "Flexible options",
    icon: HelpCircle,
    color: "text-muted-foreground",
    bgColor: "bg-muted",
  },
]

interface Priority {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  weight?: number
}

const defaultPriorities: Priority[] = [
  {
    id: "quality",
    title: "Quality of Care",
    description: "CQC ratings, staff stability, activities, specialisations",
    icon: <BarChart3 className="w-8 h-8 text-[#4F6F52]" />,
  },
  {
    id: "cost",
    title: "Cost & Budget",
    description: "Price, value for money, hidden fees, negotiation potential",
    icon: <Coins className="w-8 h-8 text-[#4F6F52]" />,
  },
  {
    id: "proximity",
    title: "Proximity to Family",
    description: "Distance, visiting ease, location accessibility",
    icon: <MapPin className="w-8 h-8 text-[#4F6F52]" />,
  },
]

const priorityWeights = [50, 30, 20]

export default function FreeAssessmentSteps() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [mounted, setMounted] = useState(false)
  const [showReinforcement, setShowReinforcement] = useState(false)
  const [formData, setFormData] = useState<AssessmentData>({
    location_postcode: "",
    care_type: "",
    budget_range: "",
    funding_type: "",
    duration_type: "",
    contact_name: "",
    contact_email: "",
    marketing_opt_in: false,
    priority_order: ["quality", "cost", "proximity"],
    priority_weights: [50, 30, 20],
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [priorities, setPriorities] = useState<Priority[]>(defaultPriorities)
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null)
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window !== "undefined") {
      setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0)
    }
    const saved = localStorage.getItem("free-assessment-draft")
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setFormData(parsed.data)
        setCurrentStep(parsed.step)
        if (parsed.data.priority_order) {
          const reorderedPriorities = defaultPriorities.slice()
            .sort((a, b) => (parsed.data.priority_order?.indexOf(a.id) ?? 0) - (parsed.data.priority_order?.indexOf(b.id) ?? 0))
          setPriorities(reorderedPriorities)
        }
      } catch (e) {
        console.error("Failed to restore draft", e)
      }
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem("free-assessment-draft", JSON.stringify({ data: formData, step: currentStep }))
    }, 500)
    return () => clearTimeout(timer)
  }, [formData, currentStep])

  const updateFormData = (updates: Partial<AssessmentData>) => {
    setFormData((prev) => ({ ...prev, ...updates }))
    setErrors({})
  }

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    switch (step) {
      case 1:
        if (!formData.location_postcode.trim()) {
          newErrors.location_postcode = "We need a valid UK postcode to find homes near you"
        } else if (!/^[A-Z]{1,2}\d{1,2}[A-Z]?\s?\d[A-Z]{2}$/i.test(formData.location_postcode)) {
          newErrors.location_postcode = "Please check your postcode format (e.g. B15 2TT)"
        }
        break
      case 2:
        if (!formData.care_type) {
          newErrors.care_type = "Please select the type of care you're looking for"
        }
        break
      case 3:
        if (!formData.budget_range) {
          newErrors.budget_range = "This helps us show you the most suitable options"
        }
        break
      case 4:
        if (!formData.funding_type) {
          newErrors.funding_type = "We'll check what funding support may be available"
        }
        break
      case 5:
        if (!formData.duration_type) {
          newErrors.duration_type = "Please let us know your timeframe"
        }
        break
      case 6:
        if (!formData.contact_name.trim() || formData.contact_name.length < 2) {
          newErrors.contact_name = "This helps us personalise your report"
        }
        if (!formData.contact_email.trim()) {
          newErrors.contact_email = "We'll send your report here - please check it's correct"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contact_email)) {
          newErrors.contact_email = "Please check your email address is correct"
        }
        break
      case 7:
        // Priorities step - always valid since defaults are set
        break
      }

      return Object.keys(newErrors).length === 0
      }

  const validateAndSetErrors = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    switch (step) {
      case 1:
        if (!formData.location_postcode.trim()) {
          newErrors.location_postcode = "We need a valid UK postcode to find homes near you"
        } else if (!/^[A-Z]{1,2}\d{1,2}[A-Z]?\s?\d[A-Z]{2}$/i.test(formData.location_postcode)) {
          newErrors.location_postcode = "Please check your postcode format (e.g. B15 2TT)"
        }
        break
      case 2:
        if (!formData.care_type) {
          newErrors.care_type = "Please select the type of care you're looking for"
        }
        break
      case 3:
        if (!formData.budget_range) {
          newErrors.budget_range = "This helps us show you the most suitable options"
        }
        break
      case 4:
        if (!formData.funding_type) {
          newErrors.funding_type = "We'll check what funding support may be available"
        }
        break
      case 5:
        if (!formData.duration_type) {
          newErrors.duration_type = "Please let us know your timeframe"
        }
        break
      case 6:
        if (!formData.contact_name.trim() || formData.contact_name.length < 2) {
          newErrors.contact_name = "This helps us personalise your report"
        }
        if (!formData.contact_email.trim()) {
          newErrors.contact_email = "We'll send your report here - please check it's correct"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contact_email)) {
          newErrors.contact_email = "Please check your email address is correct"
        }
        break
      case 7:
        // Priorities step - always valid since defaults are set
        break
      }

      setErrors(newErrors)
      return Object.keys(newErrors).length === 0
  }

  // Priority dragging handlers
  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index)
    e.dataTransfer.effectAllowed = "move"
  }

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "move"
    setDragOverIndex(index)
  }

  const handleDragLeave = () => {
    setDragOverIndex(null)
  }

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault()
    const dragIndex = draggedIndex

    if (dragIndex === null || dragIndex === dropIndex) {
      setDraggedIndex(null)
      setDragOverIndex(null)
      return
    }

    const newPriorities = [...priorities]
    const [draggedItem] = newPriorities.splice(dragIndex, 1)
    newPriorities.splice(dropIndex, 0, draggedItem)

    setPriorities(newPriorities)
    updateFormData({
      priority_order: newPriorities.map((p) => p.id),
      priority_weights: priorityWeights,
    })
    setDraggedIndex(null)
    setDragOverIndex(null)
  }

  const handleDragEnd = () => {
    setDraggedIndex(null)
    setDragOverIndex(null)
  }

  const movePriorityItem = (index: number, direction: "up" | "down") => {
    const newIndex = direction === "up" ? index - 1 : index + 1
    if (newIndex < 0 || newIndex >= priorities.length) return

    const newPriorities = [...priorities]
    const [movedItem] = newPriorities.splice(index, 1)
    newPriorities.splice(newIndex, 0, movedItem)
    setPriorities(newPriorities)
    updateFormData({
      priority_order: newPriorities.map((p) => p.id),
      priority_weights: priorityWeights,
    })
  }

  const handleNext = () => {
    if (validateAndSetErrors(currentStep)) {
      if (currentStep < TOTAL_STEPS) {
        const currentStepData = STEPS[currentStep - 1]
        if (currentStepData.reinforcement) {
          setShowReinforcement(true)
          setTimeout(() => {
            setShowReinforcement(false)
            setCurrentStep((prev) => prev + 1)
            window.scrollTo({ top: 0, behavior: "smooth" })
          }, 1200)
        } else {
          setCurrentStep((prev) => prev + 1)
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
      } else {
        handleSubmit()
      }
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleOptionSelect = (field: keyof AssessmentData, value: string) => {
    updateFormData({ [field]: value })
    setTimeout(() => {
      if (validateStep(currentStep)) {  // Use validateStep (without setState) here for render
        const currentStepData = STEPS[currentStep - 1]
        if (currentStepData.reinforcement && currentStep < TOTAL_STEPS) {
          setShowReinforcement(true)
          setTimeout(() => {
            setShowReinforcement(false)
            setCurrentStep((prev) => prev + 1)
            window.scrollTo({ top: 0, behavior: "smooth" })
          }, 1200)
        } else if (currentStep < TOTAL_STEPS) {
          setCurrentStep((prev) => prev + 1)
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
      }
    }, 300)
  }

  const handleSubmit = async () => {
    if (!validateAndSetErrors(TOTAL_STEPS)) return

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/assessments/free", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Submission failed")
      }

      localStorage.removeItem("free-assessment-draft")

      const queryParams = new URLSearchParams({
        ref: result.reference,
        name: formData.contact_name,
        location: formData.location_postcode,
        email: formData.contact_email,
        priorities: formData.priority_order?.join(",") || "quality,cost,proximity",
        weights: formData.priority_weights?.join(",") || "50,30,20",
      })

      router.push(`/free-assessment/thank-you?${queryParams.toString()}`)
    } catch (error) {
      console.error("Submission error:", error)
      setErrors({ submit: error instanceof Error ? error.message : "Something went wrong. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const OptionCard = ({
    value,
    label,
    description,
    icon: Icon,
    color,
    bgColor,
    selected,
    onClick,
  }: {
    value: string
    label: string
    description: string
    icon: React.ComponentType<{ className?: string }>
    color: string
    bgColor: string
    selected: boolean
    onClick: () => void
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`w-full p-5 rounded-xl border-2 text-left transition-all ${
        selected ? "border-primary bg-primary/10 shadow-md" : "border-border hover:border-primary/50 hover:bg-muted/50"
      }`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-xl ${selected ? "bg-primary/20" : bgColor} flex items-center justify-center flex-shrink-0`}
        >
          <Icon className={`w-6 h-6 ${selected ? "text-primary" : color}`} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-lg text-foreground">{label}</div>
          <div className="text-base text-muted-foreground">{description}</div>
        </div>
        {selected && (
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
            <Check className="w-4 h-4 text-primary-foreground" />
          </div>
        )}
      </div>
    </button>
  )

  const getStepCompletionPercentage = () => {
    const getFieldsForStep = (step: number) => {
      switch (step) {
        case 1:
          return ["location_postcode"]
        case 2:
          return ["care_type"]
        case 3:
          return ["budget_range"]
        case 4:
          return ["funding_type"]
        case 5:
          return ["duration_type"]
        case 6:
          return ["contact_name", "contact_email"]
        default:
          return []
      }
    }

    const fields = getFieldsForStep(currentStep)
    const completed = fields.filter((field) => {
      const value = formData[field as keyof AssessmentData]
      return typeof value === "string" ? value.trim() !== "" : Boolean(value)
    }).length
    return (completed / fields.length) * 100
  }

  const stepCompletionPercentage = getStepCompletionPercentage()
  const isStepValid = validateStep(currentStep) // Safe - no setState

  if (!mounted) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <div className="mb-6">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-muted-foreground">
                Step {currentStep} of {TOTAL_STEPS}
              </span>
              <span className="text-primary font-medium">{Math.round(stepCompletionPercentage)}% complete</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-500 ease-out"
                style={{ width: `${stepCompletionPercentage}%` }}
              />
            </div>
          </div>

          <div className="mb-8 md:mb-12">
            <div className="flex items-center justify-between gap-1 md:gap-2 px-2">
              {STEPS.map((step, index) => {
                const Icon = step.icon
                const isActive = index + 1 === currentStep
                const isComplete = index + 1 < currentStep

                return (
                  <div key={step.id} className="flex items-center flex-1">
                    <div
                      className={`flex flex-col items-center w-full ${
                        isActive ? "opacity-100" : isComplete ? "opacity-70" : "opacity-40"
                      }`}
                    >
                      <div
                        className={`w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center mb-1 transition-all ${
                          isActive
                            ? "bg-primary text-primary-foreground scale-110"
                            : isComplete
                              ? "bg-primary/20 text-primary"
                              : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {isComplete ? (
                          <Check className="w-4 h-4 md:w-5 md:h-5" />
                        ) : (
                          <Icon className="w-4 h-4 md:w-5 md:h-5" />
                        )}
                      </div>
                      <span
                        className={`text-[10px] md:text-xs font-medium text-center truncate w-full px-1 ${
                          isActive ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                    {index < STEPS.length - 1 && (
                      <div
                        className={`h-0.5 flex-1 mx-1 hidden sm:block ${isComplete ? "bg-primary/40" : "bg-border"}`}
                      />
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {showReinforcement && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
              <div className="bg-card p-8 rounded-2xl shadow-xl border text-center max-w-md mx-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-8 h-8 md:w-5 md:h-5 text-primary" />
                </div>
                <p className="text-xl font-medium text-foreground">{STEPS[currentStep - 1]?.reinforcement}</p>
              </div>
            </div>
          )}

          <Card className="p-6 sm:p-8 lg:p-10 shadow-sm">
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">Where are you looking for care?</h2>
                  <p className="text-lg text-muted-foreground">
                    Enter the postcode where you'd like to find care homes
                  </p>
                </div>

                <div className="max-w-sm mx-auto">
                  <input
                    type="text"
                    inputMode="text"
                    autoComplete="postal-code"
                    placeholder="e.g. B15 2TT"
                    value={formData.location_postcode}
                    onChange={(e) => updateFormData({ location_postcode: e.target.value.toUpperCase() })}
                    className={`w-full text-center text-2xl p-4 rounded-xl border-2 bg-background transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                      errors.location_postcode ? "border-amber-300" : "border-border focus:border-primary"
                    }`}
                    autoFocus
                  />
                  {errors.location_postcode && (
                    <div className="flex items-start gap-2 p-3 mt-3 bg-amber-50 border border-amber-200 rounded-lg">
                      <Info className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-amber-800">{errors.location_postcode}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">What type of care is needed?</h2>
                  <p className="text-lg text-muted-foreground">Select the option that best describes your needs</p>
                </div>

                <div className="space-y-3">
                  {careTypeOptions.map((option) => (
                    <OptionCard
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      description={option.description}
                      icon={option.icon}
                      color={option.color}
                      bgColor={option.bgColor}
                      selected={formData.care_type === option.value}
                      onClick={() => handleOptionSelect("care_type", option.value)}
                    />
                  ))}
                </div>
                {errors.care_type && <p className="text-center text-sm text-destructive">{errors.care_type}</p>}
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">What's your weekly budget?</h2>
                  <p className="text-lg text-muted-foreground">This helps us show you the most relevant options</p>
                </div>

                <div className="space-y-3">
                  {budgetOptions.map((option) => (
                    <OptionCard
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      description={option.description}
                      icon={option.icon}
                      color={option.color}
                      bgColor={option.bgColor}
                      selected={formData.budget_range === option.value}
                      onClick={() => handleOptionSelect("budget_range", option.value)}
                    />
                  ))}
                </div>
                {errors.budget_range && <p className="text-center text-sm text-destructive">{errors.budget_range}</p>}

                <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl mt-6">
                  <p className="text-base text-muted-foreground text-center">
                    <strong>Tip:</strong> The average cost in your area is around £1,200/week
                  </p>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">How will the care be funded?</h2>
                  <p className="text-lg text-muted-foreground">We'll check what support may be available</p>
                </div>

                <div className="space-y-3">
                  {fundingOptions.map((option) => (
                    <OptionCard
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      description={option.description}
                      icon={option.icon}
                      color={option.color}
                      bgColor={option.bgColor}
                      selected={formData.funding_type === option.value}
                      onClick={() => handleOptionSelect("funding_type", option.value)}
                    />
                  ))}
                </div>
                {errors.funding_type && <p className="text-center text-sm text-destructive">{errors.funding_type}</p>}
              </div>
            )}

            {currentStep === 5 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">How long will care be needed?</h2>
                  <p className="text-lg text-muted-foreground">This helps us find the right type of placement</p>
                </div>

                <div className="space-y-3">
                  {durationOptions.map((option) => (
                    <OptionCard
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      description={option.description}
                      icon={option.icon}
                      color={option.color}
                      bgColor={option.bgColor}
                      selected={formData.duration_type === option.value}
                      onClick={() => handleOptionSelect("duration_type", option.value)}
                    />
                  ))}
                </div>
                {errors.duration_type && <p className="text-center text-sm text-destructive">{errors.duration_type}</p>}
              </div>
            )}

            {currentStep === 6 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">Where should we send your report?</h2>
                  <p className="text-lg text-muted-foreground">
                    Your personalised shortlist will be ready in under 10 minutes
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="contact_name" className="block text-base font-medium mb-2">
                      Your name
                    </label>
                    <input
                      id="contact_name"
                      type="text"
                      inputMode="text"
                      autoComplete="name"
                      placeholder="e.g. Sarah Johnson"
                      value={formData.contact_name}
                      onChange={(e) => updateFormData({ contact_name: e.target.value })}
                      className={`w-full text-lg p-4 rounded-xl border-2 bg-background transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                        errors.contact_name ? "border-amber-300" : "border-border focus:border-primary"
                      }`}
                    />
                    {errors.contact_name && (
                      <div className="flex items-start gap-2 p-3 mt-2 bg-amber-50 border border-amber-200 rounded-lg">
                        <Info className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-amber-800">{errors.contact_name}</p>
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact_email" className="block text-base font-medium mb-2">
                      Email address
                    </label>
                    <input
                      id="contact_email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={formData.contact_email}
                      onChange={(e) => updateFormData({ contact_email: e.target.value })}
                      className={`w-full text-lg p-4 rounded-xl border-2 bg-background transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                        errors.contact_email ? "border-amber-300" : "border-border focus:border-primary"
                      }`}
                    />
                    {errors.contact_email && (
                      <div className="flex items-start gap-2 p-3 mt-2 bg-amber-50 border border-amber-200 rounded-lg">
                        <Info className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-amber-800">{errors.contact_email}</p>
                      </div>
                    )}
                  </div>

                  <label className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.marketing_opt_in}
                      onChange={(e) => updateFormData({ marketing_opt_in: e.target.checked })}
                      className="w-5 h-5 mt-0.5 rounded border-border"
                    />
                    <span className="text-base text-muted-foreground">
                      Send me helpful tips about choosing care homes (optional)
                    </span>
                  </label>
                </div>

                {errors.submit && (
                   <div className="flex items-start gap-2 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                     <Info className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                     <p className="text-sm text-amber-800">{errors.submit}</p>
                   </div>
                 )}
                </div>
                )}

                {currentStep === 7 && (
                <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#1A231E] mb-3">
                    Let's Personalise This Report
                  </h2>
                  <p className="text-lg sm:text-xl text-[#1A231E] mb-4">What matters most to your family?</p>
                  <p className="text-base text-[#1A231E]/70 max-w-xl mx-auto">
                    {isTouchDevice
                      ? "Use the arrows to order these three priorities. We'll use this to rank your homes specifically for you."
                      : "Drag these three priorities in order of importance. We'll use this to rank your homes specifically for you."}
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-8" role="list" aria-label="Priority order list">
                  {priorities.map((priority, index) => (
                    <div
                      key={priority.id}
                      draggable={!isTouchDevice}
                      onDragStart={(e) => handleDragStart(e, index)}
                      onDragOver={(e) => handleDragOver(e, index)}
                      onDragLeave={handleDragLeave}
                      onDrop={(e) => handleDrop(e, index)}
                      onDragEnd={handleDragEnd}
                      tabIndex={0}
                      role="listitem"
                      aria-label={`Draggable card: ${priority.title}, position ${index + 1} of ${priorities.length}`}
                      className={`
                        relative flex items-center gap-4 p-4 sm:p-5
                        bg-white border rounded-lg
                        transition-all duration-200 ease-out
                        focus:outline-none focus:ring-2 focus:ring-[#4F6F52] focus:ring-offset-2
                        ${draggedIndex === index ? "opacity-50 scale-[0.98]" : ""}
                        ${dragOverIndex === index ? "border-[#4F6F52] border-2 shadow-md" : "border-[#E5E7EB]"}
                        ${!isTouchDevice ? "cursor-grab active:cursor-grabbing hover:shadow-lg hover:border-[#4F6F52]/50" : ""}
                      `}
                    >
                      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#4F6F52]/10 flex items-center justify-center">
                        <span className="text-lg sm:text-xl font-bold text-[#4F6F52]">{index + 1}</span>
                      </div>

                      {!isTouchDevice && (
                        <div className="flex-shrink-0 text-[#1A231E]/30 hover:text-[#1A231E]/60">
                          <GripVertical className="w-5 h-5" />
                        </div>
                      )}

                      <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#4F6F52]/5 flex items-center justify-center">
                        {priority.icon}
                      </div>

                      <div className="flex-grow min-w-0">
                        <h3 className="text-base sm:text-lg font-semibold text-[#1A231E] mb-0.5">{priority.title}</h3>
                        <p className="text-sm text-[#1A231E]/60 line-clamp-2">{priority.description}</p>
                      </div>

                      <div className="flex-shrink-0 hidden sm:block">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#4F6F52]/10 text-[#4F6F52]">
                          {priorityWeights[index]}%
                        </span>
                      </div>

                      {isTouchDevice && (
                        <div className="flex-shrink-0 flex flex-col gap-1">
                          <button
                            onClick={() => movePriorityItem(index, "up")}
                            disabled={index === 0}
                            aria-label={`Move ${priority.title} up`}
                            className={`
                              p-2 rounded-lg transition-colors
                              ${
                                index === 0
                                  ? "text-[#1A231E]/20 cursor-not-allowed"
                                  : "text-[#1A231E]/60 hover:bg-[#4F6F52]/10 hover:text-[#4F6F52] active:bg-[#4F6F52]/20"
                              }
                            `}
                          >
                            <ChevronUp className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => movePriorityItem(index, "down")}
                            disabled={index === priorities.length - 1}
                            aria-label={`Move ${priority.title} down`}
                            className={`
                              p-2 rounded-lg transition-colors
                              ${
                                index === priorities.length - 1
                                  ? "text-[#1A231E]/20 cursor-not-allowed"
                                  : "text-[#1A231E]/60 hover:bg-[#4F6F52]/10 hover:text-[#4F6F52] active:bg-[#4F6F52]/20"
                              }
                            `}
                          >
                            <ChevronDown className="w-5 h-5" />
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="bg-[#4F6F52]/5 rounded-xl p-5 sm:p-6 mb-6 sm:mb-8" aria-live="polite">
                  <p className="text-base sm:text-lg text-[#1A231E] mb-3">Your priorities are set to:</p>
                  <ol className="space-y-2">
                    {priorities.map((priority, index) => (
                      <li key={priority.id} className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#4F6F52] text-white text-sm font-medium flex items-center justify-center">
                          {index + 1}
                        </span>
                        <span className="text-base font-medium text-[#1A231E]">{priority.title}</span>
                        <span className="text-base font-semibold text-[#4F6F52]">({priorityWeights[index]}% weight)</span>
                      </li>
                    ))}
                  </ol>
                </div>
                </div>
                )}
                </Card>

          <div className="flex items-center justify-between gap-4 mt-6">
            {currentStep > 1 ? (
              <Button
                variant="outline"
                size="lg"
                onClick={handleBack}
                className="min-w-[120px] h-12 text-base bg-transparent"
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                Back
              </Button>
            ) : (
              <div></div>
            )}

            <Button
              size="lg"
              onClick={handleNext}
              disabled={isSubmitting || !isStepValid}
              className={`min-w-[140px] h-12 text-base transition-all duration-300 ${
                isStepValid
                  ? "bg-[#4F6F52] hover:bg-[#3d5a40] shadow-lg"
                  : "bg-[#4F6F52]/40 cursor-not-allowed hover:bg-[#4F6F52]/40"
              }`}
            >
              {isSubmitting ? (
                "Processing..."
              ) : currentStep === TOTAL_STEPS ? (
                "Get My Free Report"
              ) : isStepValid ? (
                <>
                  Continue
                  <ChevronRight className="w-5 h-5 ml-2 animate-pulse" />
                </>
              ) : (
                "Please complete above"
              )}
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
