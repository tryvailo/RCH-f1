"use client"

import { useState } from "react"
import {
  Heart,
  Building2,
  Calendar,
  ChevronDown,
  ChevronUp,
  Info,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Phone,
  ExternalLink,
  Copy,
  Check,
  MapPin,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { formatCurrency, safeArray } from "@/lib/safe-data"

interface FundingOption {
  type: "nhs-chc" | "council" | "dpa"
  probability: number
  potentialSavings: number
  annualValue: number
  timeline: string
  requirements: string[]
  nextSteps: string[]
  contactInfo?: {
    name: string
    phone: string
    website: string
  }
  applicationTemplate?: string
}

interface LocalAuthority {
  name: string
  region: string
  fundingRulesNote: string
  icbName: string
  contactPhone: string
  website: string
}

interface ProFundingIntegrationProps {
  weeklyCareCost?: number
  medicalCondition?: string
  assetLevel?: "below-threshold" | "above-threshold" | "unknown"
  homeOwnership?: boolean
  fundingOptions?: FundingOption[]
  localAuthority?: LocalAuthority
}

const DEFAULT_FUNDING_OPTIONS: FundingOption[] = [
  {
    type: "nhs-chc",
    probability: 78,
    potentialSavings: 75400,
    annualValue: 75400,
    timeline: "28 days for assessment",
    requirements: [
      "Primary health need (complex medical conditions)",
      "Unpredictable or deteriorating condition",
      "Requires constant nursing oversight",
      "Multiple healthcare interventions needed",
    ],
    nextSteps: [
      "Request CHC Checklist from GP or hospital",
      "Complete initial screening tool",
      "If eligible, full Decision Support Tool assessment",
      "Multidisciplinary team meeting",
    ],
    contactInfo: {
      name: "Birmingham & Solihull ICB",
      phone: "0121 203 3300",
      website: "https://www.birminghamandsolihull.icb.nhs.uk",
    },
    applicationTemplate: `Dear CHC Team,

I am writing to request a Continuing Healthcare assessment for [Name], who currently resides at [Address].

[Name] has the following healthcare needs that I believe may qualify for CHC funding:
- [List primary health conditions]
- [Describe care requirements]
- [Note any recent hospitalisations]

Please send me the CHC Checklist so we can begin the assessment process.

Thank you for your assistance.

Yours sincerely,
[Your Name]
[Contact Details]`,
  },
  {
    type: "council",
    probability: 72,
    potentialSavings: 54600,
    annualValue: 54600,
    timeline: "6-8 weeks for assessment",
    requirements: [
      "Capital assets below £23,250",
      "Care needs assessment completed",
      "Ordinarily resident in council area",
      "Eligible care needs identified",
    ],
    nextSteps: [
      "Contact Adult Social Care for assessment",
      "Gather financial documentation",
      "Complete means test",
      "Receive personal budget allocation",
    ],
    contactInfo: {
      name: "Birmingham City Council Adult Social Care",
      phone: "0121 303 1234",
      website: "https://www.birmingham.gov.uk/socialcare",
    },
    applicationTemplate: `Dear Adult Social Care Team,

I am writing to request a care needs assessment and financial assessment for [Name].

Current situation:
- [Name] requires residential care due to [brief reason]
- Current assets are approximately £[amount]
- Weekly care costs are estimated at £[amount]

Please advise on the next steps to apply for council funding support.

Thank you for your assistance.

Yours sincerely,
[Your Name]
[Contact Details]`,
  },
  {
    type: "dpa",
    probability: 85,
    potentialSavings: 0,
    annualValue: 75400,
    timeline: "4-6 weeks to arrange",
    requirements: [
      "Own property worth over £23,250",
      "Non-housing assets below £23,250",
      "Property not occupied by qualifying person",
      "Agree to legal charge on property",
    ],
    nextSteps: [
      "Request DPA information from council",
      "Property valuation arranged",
      "Legal charge documentation",
      "Agreement signed and registered",
    ],
    contactInfo: {
      name: "Birmingham Council DPA Team",
      phone: "0121 303 1234",
      website: "https://www.birmingham.gov.uk/dpa",
    },
    applicationTemplate: `Dear Deferred Payment Team,

I am writing to enquire about a Deferred Payment Agreement for care home fees.

Property details:
- Address: [Property Address]
- Estimated value: £[amount]
- Current mortgage: £[amount if any]

Care home placement:
- Care home name: [Name]
- Weekly fee: £[amount]
- Expected start date: [Date]

Please send me the application forms and details of the process.

Thank you for your assistance.

Yours sincerely,
[Your Name]
[Contact Details]`,
  },
]

const DEFAULT_LOCAL_AUTHORITY: LocalAuthority = {
  name: "Birmingham City Council",
  region: "West Midlands",
  fundingRulesNote:
    "Birmingham follows standard national thresholds but has specific local policies for top-up fees and third-party contributions. Processing times are currently 6-8 weeks.",
  icbName: "Birmingham and Solihull Integrated Care Board",
  contactPhone: "0121 303 1234",
  website: "https://www.birmingham.gov.uk/adult-social-care",
}

const getProbabilityLevel = (prob: number) => {
  if (prob >= 80) return { label: "Very High", colour: "bg-emerald-500 text-white", textColor: "text-emerald-600" }
  if (prob >= 65) return { label: "High", colour: "bg-green-500 text-white", textColor: "text-green-600" }
  if (prob >= 45) return { label: "Moderate", colour: "bg-amber-500 text-white", textColor: "text-amber-600" }
  return { label: "Low", colour: "bg-gray-400 text-white", textColor: "text-gray-500" }
}

const getFundingTypeInfo = (type: string) => {
  switch (type) {
    case "nhs-chc":
      return {
        title: "NHS Continuing Healthcare",
        shortTitle: "NHS CHC",
        icon: Heart,
        description: "100% NHS funded care for complex health needs",
        colour: "blue",
        bgLight: "bg-blue-50",
        borderColor: "border-blue-200",
        textColor: "text-blue-700",
      }
    case "council":
      return {
        title: "Council Funding",
        shortTitle: "Council",
        icon: Building2,
        description: "Means-tested support from local authority",
        colour: "teal",
        bgLight: "bg-teal-50",
        borderColor: "border-teal-200",
        textColor: "text-teal-700",
      }
    case "dpa":
      return {
        title: "Deferred Payment Agreement",
        shortTitle: "DPA",
        icon: Calendar,
        description: "Delay payment until property sale",
        colour: "purple",
        bgLight: "bg-purple-50",
        borderColor: "border-purple-200",
        textColor: "text-purple-700",
      }
    default:
      return {
        title: "Unknown",
        shortTitle: "N/A",
        icon: Info,
        description: "",
        colour: "gray",
        bgLight: "bg-gray-50",
        borderColor: "border-gray-200",
        textColor: "text-gray-700",
      }
  }
}

export function ProFundingIntegration({
  weeklyCareCost = 1450,
  medicalCondition = "complex health needs",
  fundingOptions = DEFAULT_FUNDING_OPTIONS,
  localAuthority = DEFAULT_LOCAL_AUTHORITY,
}: ProFundingIntegrationProps) {
  const [expandedOption, setExpandedOption] = useState<string | null>("nhs-chc")
  const [copiedTemplate, setCopiedTemplate] = useState<string | null>(null)

  const safeWeeklyCost = weeklyCareCost ?? 0
  const annualCareCost = safeWeeklyCost * 52
  const fiveYearCost = annualCareCost * 5
  const safeFundingOptions = safeArray(fundingOptions, [])

  const totalPotentialSavings = safeFundingOptions.reduce((sum, opt) => sum + (opt.potentialSavings ?? 0), 0)

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopiedTemplate(type)
    setTimeout(() => setCopiedTemplate(null), 2000)
  }

  return (
    <div className="w-full bg-white p-8 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mb-4 sm:mb-6">
            <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-3xl bg-gradient-to-br from-[#4F6F52] to-[#3d5741] flex items-center justify-centre shadow-soft-xl">
              <Building2 className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A231E] font-serif leading-tight">
                Funding Eligibility Analysis
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-[#1A231E]/70 mt-2 sm:mt-3 font-sans leading-relaxed">
                Exploring financial support options to ease the burden
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#4F6F52]/30 rounded-2xl p-5 sm:p-6 mb-8 shadow-soft-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#4F6F52]/10 flex items-center justify-centre flex-shrink-0">
              <MapPin className="w-6 h-6 text-[#4F6F52]" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="text-lg font-bold text-[#1A231E]">Your Local Authority</h3>
                <Badge variant="outline" className="text-[#4F6F52] border-[#4F6F52]/30">
                  {localAuthority.region}
                </Badge>
              </div>
              <p className="text-xl font-semibold text-[#4F6F52] mb-2">{localAuthority.name}</p>
              <p className="text-sm text-[#5A6D7A] mb-4">{localAuthority.fundingRulesNote}</p>

              <div className="bg-[#FDFBF7] rounded-xl p-4 border border-[#E8E5DF]">
                <p className="text-sm font-semibold text-[#5A6D7A] uppercase tracking-wider mb-3">
                  Key Contacts for Your Area
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-[#5A6D7A] text-sm mb-1">NHS Integrated Care Board</p>
                    <p className="font-semibold text-[#1A231E]">{localAuthority.icbName}</p>
                  </div>
                  <div>
                    <p className="text-[#5A6D7A] text-sm mb-1">Adult Social Care</p>
                    <div className="flex items-center gap-2">
                      <a
                        href={`tel:${localAuthority.contactPhone}`}
                        className="font-semibold text-[#4F6F52] hover:underline"
                      >
                        {localAuthority.contactPhone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 sm:p-6 mb-8">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-blue-900 mb-1">Why Your Local Authority Matters</h4>
              <p className="text-sm text-blue-800 leading-relaxed">
                England has 152 Local Authorities, each with slightly different policies, processing times, and
                approaches to care funding. The contact details and timelines in this report are specific to{" "}
                <strong>{localAuthority.name}</strong>. If your loved one moves to a different area, you'll need to
                reapply to that council.
              </p>
            </div>
          </div>
        </div>

        {/* Cost Context */}
        <div className="bg-white border border-[#E8E5DF] rounded-2xl p-6 sm:p-8 mb-8 shadow-soft-lg">
          <h2 className="text-xl font-bold text-[#1A231E] mb-6 font-serif">Your Cost Context</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-[#FDFBF7] rounded-2xl text-centre">
              <p className="text-sm font-semibold text-[#1A231E]/60 mb-1">Weekly Care Cost</p>
              <p className="text-3xl font-bold text-[#1A231E]">{formatCurrency(safeWeeklyCost)}</p>
            </div>
            <div className="p-4 bg-[#FDFBF7] rounded-2xl text-centre">
              <p className="text-sm font-semibold text-[#1A231E]/60 mb-1">Annual Cost</p>
              <p className="text-3xl font-bold text-[#1A231E]">{formatCurrency(annualCareCost)}</p>
            </div>
            <div className="p-4 bg-[#FDFBF7] rounded-2xl text-centre">
              <p className="text-sm font-semibold text-[#1A231E]/60 mb-1">5-Year Cost</p>
              <p className="text-3xl font-bold text-[#C88D79]">{formatCurrency(fiveYearCost)}</p>
            </div>
          </div>
          <p className="text-sm text-[#5A6D7A] text-centre mt-4">
            These figures can feel overwhelming. The funding options below may help reduce this burden significantly.
          </p>
        </div>

        {/* Funding Options */}
        {safeFundingOptions.length > 0 && (
          <div className="space-y-6 mb-8">
            {safeFundingOptions.map((option) => {
              const typeInfo = getFundingTypeInfo(option.type)
              const probLevel = getProbabilityLevel(option.probability)
              const Icon = typeInfo.icon
              const isExpanded = expandedOption === option.type

              return (
                <Card
                  key={option.type}
                  className={`bg-white border ${isExpanded ? "border-[#4F6F52]" : "border-[#E8E5DF]"} rounded-2xl overflow-hidden shadow-soft-lg transition-all`}
                >
                  {/* Header */}
                  <button
                    onClick={() => setExpandedOption(isExpanded ? null : option.type)}
                    className="w-full p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#FDFBF7] transition-colours min-h-[56px]"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl ${typeInfo.bgLight} flex items-center justify-centre`}>
                        <Icon className={`w-7 h-7 ${typeInfo.textColor}`} />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-[#1A231E]">{typeInfo.title}</h3>
                        <p className="text-sm text-[#1A231E]/60">{typeInfo.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <Badge className={`${probLevel.colour} text-sm px-3 py-1`}>
                          {option.probability}% {probLevel.label}
                        </Badge>
                        {(option.potentialSavings ?? 0) > 0 && (
                          <p className="text-sm text-emerald-600 font-semibold mt-1">
                            Could save {formatCurrency(option.potentialSavings)}/year
                          </p>
                        )}
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-6 h-6 text-[#1A231E]/40" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-[#1A231E]/40" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8 space-y-6 animate-in slide-in-from-top-2 duration-200">
                      <div className="border-t border-[#E8E5DF] pt-6" />

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Requirements */}
                        <div>
                          <h4 className="font-bold text-[#1A231E] mb-4 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-[#4F6F52]" />
                            Eligibility Requirements
                          </h4>
                          <ul className="space-y-2">
                            {option.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-[#1A231E]/80">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#4F6F52] mt-2 flex-shrink-0" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Next Steps */}
                        <div>
                          <h4 className="font-bold text-[#1A231E] mb-4 flex items-center gap-2">
                            <FileText className="w-5 h-5 text-[#4F6F52]" />
                            Next Steps
                          </h4>
                          <ol className="space-y-2">
                            {option.nextSteps.map((step, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-sm text-[#1A231E]/80">
                                <span className="w-6 h-6 rounded-full bg-[#4F6F52]/10 flex items-center justify-centre text-sm font-bold text-[#4F6F52] flex-shrink-0">
                                  {idx + 1}
                                </span>
                                {step}
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>

                      {/* Contact Info */}
                      {option.contactInfo && (
                        <div className={`p-4 rounded-2xl ${typeInfo.bgLight} ${typeInfo.borderColor} border`}>
                          <h4 className="font-bold text-[#1A231E] mb-3 flex items-center gap-2">
                            <Phone className="w-5 h-5" />
                            Contact Information
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                            <div>
                              <p className="text-[#1A231E]/60">Organisation</p>
                              <p className="font-semibold text-[#1A231E]">{option.contactInfo.name}</p>
                            </div>
                            <div>
                              <p className="text-[#1A231E]/60">Phone</p>
                              <a
                                href={`tel:${option.contactInfo.phone}`}
                                className="font-semibold text-[#4F6F52] hover:underline"
                              >
                                {option.contactInfo.phone}
                              </a>
                            </div>
                            <div>
                              <p className="text-[#1A231E]/60">Website</p>
                              <a
                                href={option.contactInfo.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-[#4F6F52] hover:underline flex items-center gap-1"
                              >
                                Visit Website
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Application Template */}
                      {option.applicationTemplate && (
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-bold text-[#1A231E] flex items-center gap-2">
                              <FileText className="w-5 h-5 text-[#4F6F52]" />
                              Application Letter Template
                            </h4>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => copyToClipboard(option.applicationTemplate || "", option.type)}
                              className="flex items-center gap-2 min-h-[44px]"
                            >
                              {copiedTemplate === option.type ? (
                                <>
                                  <Check className="w-4 h-4 text-emerald-600" />
                                  Copied!
                                </>
                              ) : (
                                <>
                                  <Copy className="w-4 h-4" />
                                  Copy Template
                                </>
                              )}
                            </Button>
                          </div>
                          <div className="bg-[#1A231E] rounded-2xl p-4 sm:p-6 overflow-x-auto">
                            <pre className="text-sm text-white/90 whitespace-pre-wrap font-mono leading-relaxed">
                              {option.applicationTemplate}
                            </pre>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </Card>
              )
            })}
          </div>
        )}

        {/* Important Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-amber-900 mb-2">Important Notice</h3>
              <p className="text-sm text-amber-800 leading-relaxed mb-3">
                These probability estimates are based on your questionnaire answers and general eligibility criteria.
                Final eligibility is determined through official NHS or Council assessments. We recommend pursuing
                multiple funding routes simultaneously as each has different timelines and requirements.
              </p>
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>Remember:</strong> Applying for funding is your right, not a burden on the system. These schemes
                exist specifically to help families like yours. Don't hesitate to explore all options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
