"use client"

import { ClipboardCheck, ExternalLink, Phone, MapPin, FileText, Eye, MessageSquare, AlertCircle } from "lucide-react"

interface CareHomeVerification {
  homeName: string
  cqcUrl: string
  companiesHouseUrl: string
  googleMapsUrl: string
  phone: string
  address: string
}

interface AppendixVerificationGuideProps {
  careHomes?: CareHomeVerification[]
  pageNumber?: number
}

const sampleCareHomes: CareHomeVerification[] = [
  {
    homeName: "Greenfield Manor",
    cqcUrl: "https://www.cqc.org.uk/location/1-123456789",
    companiesHouseUrl: "https://find-and-update.company-information.service.gov.uk/company/12345678",
    googleMapsUrl: "https://maps.google.com/?q=Greenfield+Manor+Care+Home+Birmingham",
    phone: "0121 555 0001",
    address: "123 Oak Lane, Birmingham, B15 2TT",
  },
  {
    homeName: "Oakwood Court",
    cqcUrl: "https://www.cqc.org.uk/location/1-234567890",
    companiesHouseUrl: "https://find-and-update.company-information.service.gov.uk/company/23456789",
    googleMapsUrl: "https://maps.google.com/?q=Oakwood+Court+Care+Home+Birmingham",
    phone: "0121 555 0002",
    address: "45 Maple Drive, Birmingham, B16 3AB",
  },
  {
    homeName: "Riverside Lodge",
    cqcUrl: "https://www.cqc.org.uk/location/1-345678901",
    companiesHouseUrl: "https://find-and-update.company-information.service.gov.uk/company/34567890",
    googleMapsUrl: "https://maps.google.com/?q=Riverside+Lodge+Care+Home+Birmingham",
    phone: "0121 555 0003",
    address: "78 River Road, Birmingham, B17 4CD",
  },
  {
    homeName: "Elmwood House",
    cqcUrl: "https://www.cqc.org.uk/location/1-456789012",
    companiesHouseUrl: "https://find-and-update.company-information.service.gov.uk/company/45678901",
    googleMapsUrl: "https://maps.google.com/?q=Elmwood+House+Care+Home+Birmingham",
    phone: "0121 555 0004",
    address: "92 Elm Street, Birmingham, B18 5EF",
  },
  {
    homeName: "Meadowbrook Care",
    cqcUrl: "https://www.cqc.org.uk/location/1-567890123",
    companiesHouseUrl: "https://find-and-update.company-information.service.gov.uk/company/56789012",
    googleMapsUrl: "https://maps.google.com/?q=Meadowbrook+Care+Home+Birmingham",
    phone: "0121 555 0005",
    address: "15 Meadow Close, Birmingham, B19 6GH",
  },
]

const verificationChecklist = [
  {
    category: "Before Your Visit",
    icon: <FileText className="w-5 h-5" />,
    items: [
      "Review CQC inspection report (link provided below)",
      "Check Companies House for financial health indicators",
      "Read recent Google reviews (last 6 months)",
      "Prepare questions from our Negotiation Scripts",
      "Note specific concerns from this report to verify",
    ],
  },
  {
    category: "During Your Visit",
    icon: <Eye className="w-5 h-5" />,
    items: [
      "Observe staff interactions with residents - are they warm and patient?",
      "Check cleanliness of common areas and corridors",
      "Note any odours (should smell fresh, not of urine or heavy air freshener)",
      "Ask to see a sample weekly activities schedule",
      "Request a sample menu and ask about dietary accommodations",
      "Visit at mealtimes if possible to observe food quality",
      "Ask about staff turnover - how long has the manager been there?",
    ],
  },
  {
    category: "Questions to Ask",
    icon: <MessageSquare className="w-5 h-5" />,
    items: [
      "What is your staff-to-resident ratio during day and night?",
      "How do you handle medical emergencies?",
      "Can family visit at any time?",
      "What activities are available for residents with dementia?",
      "Are there any additional fees not included in the quoted price?",
      "What happens if my loved one's care needs increase?",
      "Can I speak to families of current residents?",
    ],
  },
]

export function AppendixVerificationGuide({
  careHomes = sampleCareHomes,
  pageNumber = 4,
}: AppendixVerificationGuideProps) {
  return (
    <div className="w-full bg-white p-6 md:p-10 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-[#1A231E]/10">
        <div className="flex items-center gap-3">
          <ClipboardCheck className="w-6 h-6 text-[#4F6F52]" />
          <h1 className="text-2xl font-bold text-[#1A231E]">Appendix D: Verification Guide</h1>
        </div>
        <div className="text-sm text-[#1A231E]/50">Page A-{pageNumber}</div>
      </div>

      {/* Introduction */}
      <section className="mb-10">
        <p className="text-lg text-[#1A231E] leading-relaxed mb-4">
          While our analysis uses verified data sources, we strongly recommend independent verification during your
          visits. Use the direct links below to access official records and the checklist to guide your in-person
          assessment.
        </p>

        <div className="bg-[#C88D79]/10 rounded-xl p-5 border border-[#C88D79]/20 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#C88D79] flex-shrink-0 mt-0.5" />
          <p className="text-base text-[#1A231E]">
            <strong>Important:</strong> Data can change between our report generation and your visit. Always verify
            current CQC ratings and recent reviews before making a final decision.
          </p>
        </div>
      </section>

      {/* Direct Links for Each Care Home */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#1A231E] mb-6">Direct Verification Links</h2>

        <div className="space-y-4">
          {careHomes.map((home, idx) => (
            <div key={idx} className="bg-[#F8F9FA] rounded-xl p-5 border border-[#E8E5DF]">
              <h3 className="text-lg font-bold text-[#1A231E] mb-3">{home.homeName}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-[#5A6D7A]" />
                  <span className="text-[#5A6D7A]">{home.address}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-[#5A6D7A]" />
                  <span className="text-[#5A6D7A]">{home.phone}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <a
                  href={home.cqcUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#4F6F52] text-white text-sm font-medium rounded-lg hover:bg-[#4F6F52]/90 transition-colours"
                >
                  <ExternalLink className="w-4 h-4" />
                  CQC Report
                </a>
                <a
                  href={home.companiesHouseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#2C5F8D] text-white text-sm font-medium rounded-lg hover:bg-[#2C5F8D]/90 transition-colours"
                >
                  <ExternalLink className="w-4 h-4" />
                  Companies House
                </a>
                <a
                  href={home.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#C88D79] text-white text-sm font-medium rounded-lg hover:bg-[#C88D79]/90 transition-colours"
                >
                  <ExternalLink className="w-4 h-4" />
                  Google Maps & Reviews
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Verification Checklist */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-[#1A231E] mb-6">Visit Verification Checklist</h2>

        <div className="space-y-6">
          {verificationChecklist.map((section, idx) => (
            <div key={idx} className="bg-[#F8F9FA] rounded-xl p-6 border border-[#E8E5DF]">
              <h3 className="text-lg font-bold text-[#1A231E] mb-4 flex items-center gap-2">
                <span className="text-[#4F6F52]">{section.icon}</span>
                {section.category}
              </h3>

              <ul className="space-y-3">
                {section.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border-2 border-[#4F6F52]/30 flex-shrink-0 mt-0.5"></div>
                    <span className="text-base text-[#1A231E] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Resources */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-[#1A231E] mb-4">Additional Resources</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="https://www.cqc.org.uk/about-us/how-we-do-our-job/judgement-framework"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F8F9FA] rounded-xl p-5 border border-[#E8E5DF] hover:border-[#4F6F52]/50 transition-colours group"
          >
            <h4 className="text-base font-bold text-[#1A231E] mb-1 group-hover:text-[#4F6F52] transition-colours">
              CQC Judgement Framework
            </h4>
            <p className="text-sm text-[#5A6D7A]">Understand how CQC rates care homes and what each rating means</p>
            <span className="inline-flex items-center gap-1 text-sm text-[#4F6F52] mt-2">
              Visit CQC <ExternalLink className="w-3 h-3" />
            </span>
          </a>

          <a
            href="https://www.ageuk.org.uk/information-advice/care/choosing-care-home/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F8F9FA] rounded-xl p-5 border border-[#E8E5DF] hover:border-[#4F6F52]/50 transition-colours group"
          >
            <h4 className="text-base font-bold text-[#1A231E] mb-1 group-hover:text-[#4F6F52] transition-colours">
              Age UK Care Home Guide
            </h4>
            <p className="text-sm text-[#5A6D7A]">Independent advice on choosing and paying for a care home</p>
            <span className="inline-flex items-center gap-1 text-sm text-[#4F6F52] mt-2">
              Visit Age UK <ExternalLink className="w-3 h-3" />
            </span>
          </a>

          <a
            href="https://www.nhs.uk/conditions/social-care-and-support-guide/care-services-equipment-and-care-homes/care-homes/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F8F9FA] rounded-xl p-5 border border-[#E8E5DF] hover:border-[#4F6F52]/50 transition-colours group"
          >
            <h4 className="text-base font-bold text-[#1A231E] mb-1 group-hover:text-[#4F6F52] transition-colours">
              NHS Care Home Information
            </h4>
            <p className="text-sm text-[#5A6D7A]">Official NHS guidance on care homes and what to expect</p>
            <span className="inline-flex items-center gap-1 text-sm text-[#4F6F52] mt-2">
              Visit NHS <ExternalLink className="w-3 h-3" />
            </span>
          </a>

          <a
            href="https://www.which.co.uk/later-life-care/care-homes"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F8F9FA] rounded-xl p-5 border border-[#E8E5DF] hover:border-[#4F6F52]/50 transition-colours group"
          >
            <h4 className="text-base font-bold text-[#1A231E] mb-1 group-hover:text-[#4F6F52] transition-colours">
              Which? Care Home Reviews
            </h4>
            <p className="text-sm text-[#5A6D7A]">Independent consumer reviews and ratings of care homes</p>
            <span className="inline-flex items-center gap-1 text-sm text-[#4F6F52] mt-2">
              Visit Which? <ExternalLink className="w-3 h-3" />
            </span>
          </a>
        </div>
      </section>

      {/* Page Footer */}
      <div className="mt-10 pt-4 border-t border-[#E8E5DF] flex items-center justify-between text-xs text-[#5A6D7A]">
        <div>RightCareHome Professional Report</div>
        <div>Confidential</div>
      </div>
    </div>
  )
}
