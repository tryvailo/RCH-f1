"use client"

import { useState } from "react"
import {
  Users,
  Mail,
  Send,
  Check,
  Copy,
  Link2,
  FileText,
  Clock,
  Shield,
  X,
  Plus,
  Trash2,
  Heart,
  CheckCircle,
} from "lucide-react"

interface FamilyMember {
  id: string
  email: string
  name: string
  relationship: string
}

interface SharedReport {
  recipientEmail: string
  recipientName: string
  sharedAt: Date
  expiresAt: Date
  viewCount: number
}

interface ProShareWithFamilyProps {
  reportId?: string
  userName?: string
  topRecommendation?: string
  reportLocation?: string
  onShare?: (members: FamilyMember[]) => void
  sharedWith?: SharedReport[]
}

export function ProShareWithFamily({
  reportId = "rpt_abc123",
  userName = "Margaret",
  topRecommendation = "Greenfield Manor",
  reportLocation = "Birmingham",
  onShare,
  sharedWith = [],
}: ProShareWithFamilyProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState<"add" | "preview" | "success">("add")
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([
    { id: "1", email: "", name: "", relationship: "Son/Daughter" },
  ])
  const [linkCopied, setLinkCopied] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const shareLink = `https://rightcarehome.co.uk/shared/${reportId}`

  const relationshipOptions = [
    "Son/Daughter",
    "Spouse/Partner",
    "Sibling",
    "Niece/Nephew",
    "Grandchild",
    "Friend",
    "Other Family",
  ]

  const addFamilyMember = () => {
    if (familyMembers.length < 5) {
      setFamilyMembers([
        ...familyMembers,
        { id: Date.now().toString(), email: "", name: "", relationship: "Son/Daughter" },
      ])
    }
  }

  const removeFamilyMember = (id: string) => {
    if (familyMembers.length > 1) {
      setFamilyMembers(familyMembers.filter((m) => m.id !== id))
    }
  }

  const updateFamilyMember = (id: string, field: keyof FamilyMember, value: string) => {
    setFamilyMembers(familyMembers.map((m) => (m.id === id ? { ...m, [field]: value } : m)))
  }

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const canProceed = familyMembers.some((m) => isValidEmail(m.email) && m.name.trim())

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(shareLink)
    setLinkCopied(true)
    setTimeout(() => setLinkCopied(false), 3000)
  }

  const handleSend = async () => {
    setIsSending(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSending(false)
    setStep("success")
    onShare?.(familyMembers.filter((m) => isValidEmail(m.email) && m.name.trim()))
  }

  const validMembers = familyMembers.filter((m) => isValidEmail(m.email) && m.name.trim())

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 bg-white border border-[#E8E5DF] hover:border-[#4F6F52] text-[#1A231E] px-4 py-3 rounded-xl font-semibold transition-all hover:shadow-md min-h-[48px]"
      >
        <Users className="w-5 h-5 text-[#4F6F52]" />
        <span>Share with Family</span>
        {sharedWith.length > 0 && (
          <span className="bg-[#4F6F52] text-white text-xs px-2 py-0.5 rounded-full ml-1">{sharedWith.length}</span>
        )}
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-[#E8E5DF] p-5 sm:p-6 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#4F6F52]/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#4F6F52]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#1A231E]">Share with Family</h2>
                  <p className="text-sm text-[#5A6D7A]">Decisions like this are often easier when made together</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false)
                  setStep("add")
                }}
                className="w-10 h-10 rounded-full hover:bg-[#F8F9FA] flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-[#5A6D7A]" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5 sm:p-6">
              {step === "add" && (
                <>
                  {/* What They'll Receive */}
                  <div className="bg-[#F8F9FA] rounded-xl p-4 mb-6 border border-[#E8E5DF]">
                    <h3 className="font-semibold text-[#1A231E] mb-3">What they'll receive:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                          <Link2 className="w-4 h-4 text-[#4F6F52]" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#1A231E]">Secure Report Link</div>
                          <div className="text-sm text-[#5A6D7A]">Full report access, no login required</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                          <FileText className="w-4 h-4 text-[#4F6F52]" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#1A231E]">PDF Summary</div>
                          <div className="text-sm text-[#5A6D7A]">Top 3 homes, ideal for family discussions</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                          <Clock className="w-4 h-4 text-[#4F6F52]" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#1A231E]">30-Day Access</div>
                          <div className="text-sm text-[#5A6D7A]">Plenty of time to review together</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                          <Shield className="w-4 h-4 text-[#4F6F52]" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#1A231E]">Read-Only Access</div>
                          <div className="text-sm text-[#5A6D7A]">Your data remains private and secure</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Family Members Form */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-[#1A231E]">Family members to invite</h3>
                      <span className="text-sm text-[#5A6D7A]">{familyMembers.length}/5</span>
                    </div>

                    {familyMembers.map((member, index) => (
                      <div key={member.id} className="bg-[#F8F9FA] rounded-xl p-4 border border-[#E8E5DF]">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-[#5A6D7A]">Family Member {index + 1}</span>
                          {familyMembers.length > 1 && (
                            <button
                              onClick={() => removeFamilyMember(member.id)}
                              className="text-[#EB5757] hover:text-[#c94545] p-1"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <input
                            type="text"
                            placeholder="Name"
                            value={member.name}
                            onChange={(e) => updateFamilyMember(member.id, "name", e.target.value)}
                            className="px-4 py-3 rounded-lg border border-[#E8E5DF] focus:border-[#4F6F52] focus:ring-2 focus:ring-[#4F6F52]/20 outline-none text-[#1A231E]"
                          />
                          <input
                            type="email"
                            placeholder="Email address"
                            value={member.email}
                            onChange={(e) => updateFamilyMember(member.id, "email", e.target.value)}
                            className={`px-4 py-3 rounded-lg border focus:ring-2 outline-none text-[#1A231E] ${
                              member.email && !isValidEmail(member.email)
                                ? "border-[#EB5757] focus:border-[#EB5757] focus:ring-[#EB5757]/20"
                                : "border-[#E8E5DF] focus:border-[#4F6F52] focus:ring-[#4F6F52]/20"
                            }`}
                          />
                          <select
                            value={member.relationship}
                            onChange={(e) => updateFamilyMember(member.id, "relationship", e.target.value)}
                            className="px-4 py-3 rounded-lg border border-[#E8E5DF] focus:border-[#4F6F52] focus:ring-2 focus:ring-[#4F6F52]/20 outline-none text-[#1A231E] bg-white"
                          >
                            {relationshipOptions.map((rel) => (
                              <option key={rel} value={rel}>
                                {rel}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    ))}

                    {familyMembers.length < 5 && (
                      <button
                        onClick={addFamilyMember}
                        className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-[#E8E5DF] rounded-xl text-[#5A6D7A] hover:border-[#4F6F52] hover:text-[#4F6F52] transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                        Add another family member
                      </button>
                    )}
                  </div>

                  {/* Or Copy Link */}
                  <div className="border-t border-[#E8E5DF] pt-6 mb-6">
                    <h3 className="font-semibold text-[#1A231E] mb-3">Or share link directly</h3>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        readOnly
                        value={shareLink}
                        className="flex-1 px-4 py-3 rounded-lg border border-[#E8E5DF] bg-[#F8F9FA] text-[#5A6D7A] text-sm"
                      />
                      <button
                        onClick={handleCopyLink}
                        className={`px-4 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 min-w-[120px] justify-center ${
                          linkCopied
                            ? "bg-[#27AE60] text-white"
                            : "bg-[#F8F9FA] border border-[#E8E5DF] text-[#1A231E] hover:border-[#4F6F52]"
                        }`}
                      >
                        {linkCopied ? (
                          <>
                            <Check className="w-4 h-4" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            Copy Link
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="flex-1 px-6 py-3 rounded-xl border border-[#E8E5DF] text-[#5A6D7A] font-semibold hover:bg-[#F8F9FA] transition-colors min-h-[48px]"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => setStep("preview")}
                      disabled={!canProceed}
                      className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 min-h-[48px] ${
                        canProceed
                          ? "bg-[#4F6F52] text-white hover:bg-[#3d5741]"
                          : "bg-[#E8E5DF] text-[#5A6D7A] cursor-not-allowed"
                      }`}
                    >
                      Preview Email
                      <Mail className="w-4 h-4" />
                    </button>
                  </div>
                </>
              )}

              {step === "preview" && (
                <>
                  {/* Email Preview */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-[#1A231E] mb-3">Email Preview</h3>
                    <div className="bg-white rounded-xl border border-[#E8E5DF] overflow-hidden">
                      {/* Email Header */}
                      <div className="bg-[#F8F9FA] px-4 py-3 border-b border-[#E8E5DF]">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-[#5A6D7A]">To:</span>
                          <span className="text-[#1A231E]">{validMembers.map((m) => m.email).join(", ")}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm mt-1">
                          <span className="text-[#5A6D7A]">Subject:</span>
                          <span className="text-[#1A231E]">Care Home Research for {userName} - Your Input Needed</span>
                        </div>
                      </div>

                      {/* Email Body */}
                      <div className="p-5 sm:p-6 space-y-4">
                        <p className="text-[#1A231E]">Dear {validMembers[0]?.name || "Family Member"},</p>

                        <p className="text-[#5A6D7A]">
                          I've been researching care home options for our family, and I'd value your thoughts on what
                          I've found. Making this decision together feels right.
                        </p>

                        <div className="bg-[#4F6F52]/5 rounded-xl p-4 border border-[#4F6F52]/20">
                          <div className="flex items-center gap-2 mb-2">
                            <Heart className="w-5 h-5 text-[#4F6F52]" />
                            <span className="font-semibold text-[#1A231E]">Our Top Recommendation</span>
                          </div>
                          <p className="text-[#1A231E] font-medium">{topRecommendation}</p>
                          <p className="text-sm text-[#5A6D7A] mt-1">
                            Based on analysis of 5 care homes in {reportLocation}
                          </p>
                        </div>

                        <p className="text-[#5A6D7A]">
                          I've attached a summary of the top 3 options, and you can view the full report using the link
                          below. The link will remain active for 30 days.
                        </p>

                        <div className="bg-[#F8F9FA] rounded-xl p-4 text-center">
                          <a href="#" className="text-[#4F6F52] font-semibold hover:underline">
                            View Full Report
                          </a>
                          <p className="text-sm text-[#5A6D7A] mt-1">No login required</p>
                        </div>

                        <p className="text-[#5A6D7A]">
                          When you have a moment, perhaps we could arrange a time to discuss?
                        </p>

                        <p className="text-[#1A231E]">
                          With love,
                          <br />
                          {userName}
                        </p>

                        <div className="border-t border-[#E8E5DF] pt-4 mt-4">
                          <div className="flex items-center gap-2 text-sm text-[#5A6D7A]">
                            <FileText className="w-4 h-4" />
                            <span>Attachment: Care_Home_Summary_{reportLocation}.pdf (4 pages)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recipients Summary */}
                  <div className="bg-[#F8F9FA] rounded-xl p-4 mb-6 border border-[#E8E5DF]">
                    <h3 className="font-semibold text-[#1A231E] mb-2">
                      Sending to {validMembers.length} family member{validMembers.length > 1 ? "s" : ""}:
                    </h3>
                    <div className="space-y-2">
                      {validMembers.map((member) => (
                        <div key={member.id} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-[#27AE60]" />
                          <span className="text-[#1A231E]">{member.name}</span>
                          <span className="text-[#5A6D7A]">({member.relationship})</span>
                          <span className="text-[#5A6D7A]">- {member.email}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => setStep("add")}
                      className="flex-1 px-6 py-3 rounded-xl border border-[#E8E5DF] text-[#5A6D7A] font-semibold hover:bg-[#F8F9FA] transition-colors min-h-[48px]"
                    >
                      Edit Recipients
                    </button>
                    <button
                      onClick={handleSend}
                      disabled={isSending}
                      className="flex-1 px-6 py-3 rounded-xl bg-[#4F6F52] text-white font-semibold hover:bg-[#3d5741] transition-all flex items-center justify-center gap-2 min-h-[48px] disabled:opacity-70"
                    >
                      {isSending ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send to Family
                        </>
                      )}
                    </button>
                  </div>
                </>
              )}

              {step === "success" && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-[#27AE60]/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-[#27AE60]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A231E] mb-2">Report Shared</h3>
                  <p className="text-[#5A6D7A] mb-6 max-w-md mx-auto">
                    Your family members will receive an email with the report link and PDF summary. You'll be notified
                    when they view the report.
                  </p>

                  <div className="bg-[#F8F9FA] rounded-xl p-4 mb-6 max-w-md mx-auto">
                    <div className="text-sm text-[#5A6D7A] mb-2">Shared with:</div>
                    <div className="space-y-1">
                      {validMembers.map((member) => (
                        <div key={member.id} className="text-[#1A231E] font-medium">
                          {member.name} ({member.relationship})
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setIsOpen(false)
                      setStep("add")
                      setFamilyMembers([{ id: "1", email: "", name: "", relationship: "Son/Daughter" }])
                    }}
                    className="px-8 py-3 rounded-xl bg-[#4F6F52] text-white font-semibold hover:bg-[#3d5741] transition-all min-h-[48px]"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>

            {/* Already Shared Section */}
            {sharedWith.length > 0 && step === "add" && (
              <div className="border-t border-[#E8E5DF] p-5 sm:p-6 bg-[#F8F9FA]">
                <h3 className="font-semibold text-[#1A231E] mb-3">Already shared with:</h3>
                <div className="space-y-2">
                  {sharedWith.map((share, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-white rounded-lg p-3 border border-[#E8E5DF]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#4F6F52]/10 flex items-center justify-center">
                          <Users className="w-4 h-4 text-[#4F6F52]" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-[#1A231E]">{share.recipientName}</div>
                          <div className="text-xs text-[#5A6D7A]">{share.recipientEmail}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-[#5A6D7A]">
                          Viewed {share.viewCount} time{share.viewCount !== 1 ? "s" : ""}
                        </div>
                        <div className="text-xs text-[#27AE60]">
                          Active until {share.expiresAt.toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
