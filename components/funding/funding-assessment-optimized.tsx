"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowLeft, CheckCircle2, Info } from "lucide-react"

interface Step {
  id: string
  title: string
  description: string
  estimatedTime: number
}

interface Question {
  id: string
  step: number
  question: string
  context?: string
  options?: { value: string; label: string }[]
  type?: "radio" | "checkbox" | "select"
  skipLogic?: (answers: Record<string, string | string[]>) => boolean
}

const STEPS: Step[] = [
  { id: "personal", title: "Your Health Journey", description: "Understanding core needs", estimatedTime: 2 },
  { id: "domains", title: "Health Assessment", description: "Exploring care domains", estimatedTime: 4 },
  { id: "therapies", title: "Complex Treatments", description: "Specialist care needs", estimatedTime: 1 },
  { id: "financial", title: "Your Finances", description: "Capital and income", estimatedTime: 2 },
  { id: "property", title: "Property Details", description: "Home ownership status", estimatedTime: 1 },
  { id: "disregards", title: "Financial Disregards", description: "Protected assets", estimatedTime: 1 },
  { id: "review", title: "Review & Calculate", description: "Generate your funding report", estimatedTime: 1 },
]

const QUESTIONS: Question[] = [
  // Step 0: Personal - Key Health Indicators
  {
    id: "primary-health-need",
    step: 0,
    question: "What is the main reason for needing care?",
    context: "This helps us understand your primary funding pathway (CHC requires a primary health need)",
    type: "radio",
    options: [
      { value: "physical", label: "Physical health conditions" },
      { value: "mental", label: "Mental health or cognitive needs" },
      { value: "mixed", label: "Both physical and mental health" },
      { value: "unsure", label: "Not sure" },
    ],
  },
  {
    id: "nursing-care",
    step: 0,
    question: "Does your care include nursing?",
    context: "Nursing needs are a key CHC indicator and affect funding eligibility",
    type: "radio",
    options: [
      { value: "yes", label: "Yes, regular nursing care" },
      { value: "monitoring", label: "Monitoring by nurse only" },
      { value: "no", label: "No nursing care needed" },
    ],
  },
  {
    id: "unpredictability",
    step: 0,
    question: "How unpredictable is the care needed?",
    context: "Unpredictable needs increase CHC eligibility probability",
    type: "radio",
    options: [
      { value: "high", label: "Highly unpredictable (frequent changes)" },
      { value: "moderate", label: "Somewhat unpredictable" },
      { value: "low", label: "Stable and predictable" },
    ],
  },

  // Step 1: 12 DST Domains
  {
    id: "breathing",
    step: 1,
    question: "Breathing - Does the person have difficulty breathing or use oxygen?",
    context: "CHC Domain 1: Respiratory function",
    type: "radio",
    options: [
      { value: "none", label: "No breathing difficulties" },
      { value: "mild", label: "Mild - managed at home" },
      { value: "moderate", label: "Moderate - requires intervention" },
      { value: "complex", label: "Complex - oxygen or ventilation" },
    ],
  },
  {
    id: "nutrition",
    step: 1,
    question: "Nutrition - How is nutrition managed?",
    context: "CHC Domain 2: Eating and drinking",
    type: "radio",
    options: [
      { value: "normal", label: "Normal eating and drinking" },
      { value: "assisted", label: "Requires assistance" },
      { value: "tube", label: "Tube feeding (PEG, NG)" },
      { value: "other", label: "Other feeding method" },
    ],
  },
  {
    id: "continence",
    step: 1,
    question: "Continence - What support is needed?",
    context: "CHC Domain 3: Continence management",
    type: "checkbox",
    options: [
      { value: "none", label: "Continent, no support needed" },
      { value: "urinary", label: "Urinary incontinence management" },
      { value: "faecal", label: "Faecal incontinence management" },
      { value: "catheter", label: "Catheter care" },
    ],
  },
  {
    id: "skin",
    step: 1,
    question: "Skin - Are there wound or skin care needs?",
    context: "CHC Domain 4: Skin care and wound management",
    type: "checkbox",
    options: [
      { value: "none", label: "No skin concerns" },
      { value: "pressure", label: "Pressure ulcer risk/care" },
      { value: "wound", label: "Wound care required" },
      { value: "dermatological", label: "Skin condition management" },
    ],
  },
  {
    id: "mobility",
    step: 1,
    question: "Mobility - What movement support is needed?",
    context: "CHC Domain 5: Movement and mobility support",
    type: "radio",
    options: [
      { value: "independent", label: "Fully independent" },
      { value: "aids", label: "Uses aids/equipment" },
      { value: "assistance", label: "Requires personal assistance" },
      { value: "total", label: "Totally dependent" },
    ],
  },
  {
    id: "communication",
    step: 1,
    question: "Communication - How do they express needs?",
    context: "CHC Domain 6: Communication support",
    type: "radio",
    options: [
      { value: "clear", label: "Clear verbal communication" },
      { value: "assisted", label: "Assisted communication (AAC, gestures)" },
      { value: "limited", label: "Very limited communication" },
      { value: "non-verbal", label: "Non-verbal" },
    ],
  },
  {
    id: "psychological",
    step: 1,
    question: "Psychological - Any mental health support needs?",
    context: "CHC Domain 7: Psychological/emotional support",
    type: "checkbox",
    options: [
      { value: "none", label: "No psychological concerns" },
      { value: "mild-depression", label: "Mild depression/anxiety" },
      { value: "moderate", label: "Moderate mental health needs" },
      { value: "severe", label: "Severe mental health conditions" },
    ],
  },
  {
    id: "cognition",
    step: 1,
    question: "Cognition - How is memory and thinking affected?",
    context: "CHC Domain 8: Cognitive support (highest priority for CHC)",
    type: "radio",
    options: [
      { value: "clear", label: "No cognitive concerns" },
      { value: "mild", label: "Mild confusion occasionally" },
      { value: "moderate", label: "Moderate cognitive impairment" },
      { value: "severe", label: "Severe dementia/cognitive loss" },
    ],
  },
  {
    id: "behaviour",
    step: 1,
    question: "Behaviour - Any challenging behaviours?",
    context: "CHC Domain 9: Behaviour management",
    type: "checkbox",
    options: [
      { value: "none", label: "No behavioural concerns" },
      { value: "occasional", label: "Occasional challenging behaviours" },
      { value: "frequent", label: "Frequent challenging behaviours" },
      { value: "aggressive", label: "Aggressive or harmful behaviours" },
    ],
  },
  {
    id: "drug-therapies",
    step: 1,
    question: "Drug Therapies - Medication support needed?",
    context: "CHC Domain 10: Medication management",
    type: "checkbox",
    options: [
      { value: "self", label: "Self-administered" },
      { value: "prompting", label: "Prompting/support" },
      { value: "supervised", label: "Supervised administration" },
      { value: "complex", label: "Complex medication regimen" },
    ],
  },
  {
    id: "altered-states",
    step: 1,
    question: "Altered States - Consciousness or level changes?",
    context: "CHC Domain 11: Altered states of consciousness",
    type: "checkbox",
    options: [
      { value: "none", label: "No altered states" },
      { value: "seizures", label: "Seizures or convulsions" },
      { value: "unconscious", label: "Periods of unconsciousness" },
      { value: "other", label: "Other altered states" },
    ],
  },
  {
    id: "other-needs",
    step: 1,
    question: "Other Significant Needs - Any other care requirements?",
    context: "CHC Domain 12: Other significant care needs",
    type: "checkbox",
    options: [
      { value: "none", label: "None" },
      { value: "infection", label: "Infection control needs" },
      { value: "sensory", label: "Sensory support (blind/deaf)" },
      { value: "social", label: "Complex social needs" },
    ],
  },

  // Step 2: Complex Therapies
  {
    id: "complex-therapies",
    step: 2,
    question: "Complex Therapies - Which apply?",
    context: "These specialist treatments affect funding eligibility",
    type: "checkbox",
    options: [
      { value: "peg", label: "PEG feeding" },
      { value: "tracheostomy", label: "Tracheostomy care" },
      { value: "dialysis", label: "Renal dialysis" },
      { value: "ventilator", label: "Mechanical ventilation" },
      { value: "none", label: "None of these" },
    ],
  },

  // Step 3: Financial
  {
    id: "savings",
    step: 3,
    question: "What is the total value of savings and investments?",
    context: "Used to calculate means-tested funding (LA and DPA)",
    type: "radio",
    options: [
      { value: "0-6000", label: "Under £6,000" },
      { value: "6000-10000", label: "£6,000 - £10,000" },
      { value: "10000-23000", label: "£10,000 - £23,000" },
      { value: "23000-100000", label: "£23,000 - £100,000" },
      { value: "100000+", label: "Over £100,000" },
    ],
  },
  {
    id: "annual-income",
    step: 3,
    question: "What is the approximate annual household income?",
    context: "Income assessment affects LA eligibility and contribution levels",
    type: "radio",
    options: [
      { value: "under-20k", label: "Under £20,000" },
      { value: "20-30k", label: "£20,000 - £30,000" },
      { value: "30-50k", label: "£30,000 - £50,000" },
      { value: "50-75k", label: "£50,000 - £75,000" },
      { value: "75k+", label: "Over £75,000" },
    ],
  },
  {
    id: "employed",
    step: 3,
    question: "Is anyone in the household in employment?",
    context: "Employment status affects benefit disregards",
    type: "radio",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
  },

  // Step 4: Property
  {
    id: "own-property",
    step: 4,
    question: "Do you own any property?",
    context: "Property ownership affects means testing and DPA eligibility",
    type: "radio",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    skipLogic: (answers) => false,
  },
  {
    id: "property-value",
    step: 4,
    question: "What is the approximate value of the property?",
    context: "Higher property values may affect means testing",
    type: "radio",
    options: [
      { value: "under-150k", label: "Under £150,000" },
      { value: "150-300k", label: "£150,000 - £300,000" },
      { value: "300-500k", label: "£300,000 - £500,000" },
      { value: "500k+", label: "Over £500,000" },
    ],
    skipLogic: (answers) => answers["own-property"] === "no",
  },
  {
    id: "mortage-rent",
    step: 4,
    question: "Is there a mortgage or rent on the property?",
    type: "radio",
    options: [
      { value: "owned-outright", label: "Owned outright" },
      { value: "mortgage", label: "Mortgage" },
      { value: "rent", label: "Rented" },
    ],
    skipLogic: (answers) => answers["own-property"] === "no",
  },

  // Step 5: Financial Disregards
  {
    id: "income-disregards",
    step: 5,
    question: "Which income sources are received?",
    context: "Some income sources are fully or partially disregarded in means testing",
    type: "checkbox",
    options: [
      { value: "dla", label: "Disability Living Allowance (DLA)" },
      { value: "pip", label: "Personal Independence Payment (PIP)" },
      { value: "aa", label: "Attendance Allowance (AA)" },
      { value: "war-pension", label: "War Pension" },
      { value: "industrial", label: "Industrial Injuries Disablement Benefit" },
      { value: "employment", label: "Supported employment income" },
      { value: "none", label: "None of these" },
    ],
  },
  {
    id: "asset-disregards",
    step: 5,
    question: "Are there any of these protected assets?",
    context: "Some assets are fully disregarded in means testing calculations",
    type: "checkbox",
    options: [
      { value: "personal-injury", label: "Personal injury trust" },
      { value: "life-insurance", label: "Life insurance policy value" },
      { value: "business", label: "Business assets" },
      { value: "burial", label: "Burial insurance" },
      { value: "none", label: "None of these" },
    ],
  },

  // Step 6: Review (no questions, just summary)
]

export function FundingAssessmentOptimized() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({})

  const currentStepData = STEPS[currentStep]
  const stepQuestions = QUESTIONS.filter((q) => q.step === currentStep).filter(
    (q) => !q.skipLogic || !q.skipLogic(answers),
  )

  const totalSteps = STEPS.length
  const completionPercentage = Math.round(((currentStep + 1) / totalSteps) * 100)

  // Calculate remaining time
  const remainingTime = STEPS.slice(currentStep).reduce((sum, step) => sum + step.estimatedTime, 0)

  const handleAnswer = (questionId: string, value: string | string[]) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }))
  }

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleSubmit = () => {
    console.log("Assessment completed:", answers)
    // Handle submission - navigate to results
  }

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6">
      <div className="mx-auto max-w-2xl space-y-6">
        {/* Progress Header */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl">{currentStepData.title}</h1>
            <Badge variant="outline" className="text-sm font-medium">
              Step {currentStep + 1} of {totalSteps}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">{currentStepData.description}</p>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">Progress</span>
              <span className="text-xs font-medium text-muted-foreground">~{remainingTime}min left</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Questions Card */}
        <Card className="border-border shadow-soft-sm">
          <CardContent className="pt-6 space-y-6">
            {currentStep === totalSteps - 1 ? (
              // Review Step
              <div className="space-y-4">
                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium text-foreground">Assessment Complete</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Review your answers below, then click Calculate to get your personalized funding report.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {Object.entries(answers).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-start pb-2 border-b border-border">
                      <span className="text-sm font-medium text-foreground capitalize">
                        {QUESTIONS.find((q) => q.id === key)?.question || key}
                      </span>
                      <span className="text-sm text-muted-foreground text-right">
                        {Array.isArray(value) ? value.join(", ") : value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // Questions
              <div className="space-y-6">
                {stepQuestions.map((question) => (
                  <div key={question.id} className="space-y-3">
                    <div className="flex items-start gap-2">
                      <label className="text-base font-medium text-foreground flex-1 pt-0.5">{question.question}</label>
                      {question.context && (
                        <div className="group relative flex-shrink-0">
                          <Info className="h-5 w-5 text-muted-foreground cursor-help" />
                          <div className="absolute right-0 top-full mt-2 hidden w-48 rounded-lg bg-card p-2 text-xs text-card-foreground shadow-md group-hover:block z-10 border border-border">
                            {question.context}
                          </div>
                        </div>
                      )}
                    </div>

                    {question.type === "radio" && (
                      <RadioGroup
                        value={answers[question.id] as string}
                        onValueChange={(value) => handleAnswer(question.id, value)}
                      >
                        <div className="space-y-2">
                          {question.options?.map((option) => (
                            <div
                              key={option.value}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                            >
                              <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} />
                              <Label
                                htmlFor={`${question.id}-${option.value}`}
                                className="text-sm font-normal cursor-pointer flex-1"
                              >
                                {option.label}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </RadioGroup>
                    )}

                    {question.type === "checkbox" && (
                      <div className="space-y-2">
                        {question.options?.map((option) => {
                          const currentValue = answers[question.id] as string[]
                          const isChecked = Array.isArray(currentValue) && currentValue.includes(option.value)
                          return (
                            <div
                              key={option.value}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                            >
                              <Checkbox
                                id={`${question.id}-${option.value}`}
                                checked={isChecked}
                                onCheckedChange={(checked) => {
                                  const newValue = Array.isArray(currentValue) ? currentValue : []
                                  if (checked) {
                                    handleAnswer(question.id, [...newValue, option.value])
                                  } else {
                                    handleAnswer(
                                      question.id,
                                      newValue.filter((v) => v !== option.value),
                                    )
                                  }
                                }}
                              />
                              <Label
                                htmlFor={`${question.id}-${option.value}`}
                                className="text-sm font-normal cursor-pointer flex-1"
                              >
                                {option.label}
                              </Label>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 0}
            className="flex items-center gap-2 bg-transparent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          {currentStep === totalSteps - 1 ? (
            <Button onClick={handleSubmit} className="flex-1 flex items-center gap-2">
              Calculate My Funding
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={handleNext} className="flex-1 flex items-center gap-2">
              Continue
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
