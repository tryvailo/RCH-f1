"use client"

import { useState } from "react"
import { Mail, Users, Check, Clock, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface ReportSaveShareBarProps {
  reportId: string
  recipientName: string
  location: string
}

export function ReportSaveShareBar({ reportId, recipientName, location }: ReportSaveShareBarProps) {
  const [showSaveDialog, setShowSaveDialog] = useState(false)
  const [showShareDialog, setShowShareDialog] = useState(false)
  const [saveEmail, setSaveEmail] = useState("")
  const [shareEmails, setShareEmails] = useState("")
  const [shareMessage, setShareMessage] = useState(
    `I've been researching care homes for our family and found this helpful. Thought you might want to have a look at the options I've found.`,
  )
  const [isSaved, setIsSaved] = useState(false)
  const [isShared, setIsShared] = useState(false)

  const handleSave = () => {
    // Simulate saving - in production this would send an email
    setIsSaved(true)
    setTimeout(() => {
      setShowSaveDialog(false)
    }, 1500)
  }

  const handleShare = () => {
    // Simulate sharing - in production this would send emails
    setIsShared(true)
    setTimeout(() => {
      setShowShareDialog(false)
    }, 1500)
  }

  return (
    <>
      {/* Floating Action Bar - subtle, British-appropriate */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-white/95 backdrop-blur-sm border border-[#E8E5DF] rounded-full shadow-lg px-2 py-2 flex items-center gap-2">
          {/* Save Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowSaveDialog(true)}
            className="rounded-full h-11 px-4 hover:bg-[#4F6F52]/10 text-[#1A231E]/80 hover:text-[#4F6F52] transition-all"
          >
            <Mail className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Save to Email</span>
            <span className="sm:hidden">Save</span>
          </Button>

          <div className="w-px h-6 bg-[#E8E5DF]" />

          {/* Share Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowShareDialog(true)}
            className="rounded-full h-11 px-4 hover:bg-[#4F6F52]/10 text-[#1A231E]/80 hover:text-[#4F6F52] transition-all"
          >
            <Users className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Share with Family</span>
            <span className="sm:hidden">Share</span>
          </Button>
        </div>
      </div>

      {/* Save Dialog - British-friendly copy */}
      <Dialog open={showSaveDialog} onOpenChange={setShowSaveDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-[#1A231E]">
              <Download className="w-5 h-5 text-[#4F6F52]" />
              Keep a Copy of Your Report
            </DialogTitle>
            <DialogDescription className="text-[#1A231E]/70">
              We'll send a link to your personalised report so you can refer back to it whenever you need.
            </DialogDescription>
          </DialogHeader>

          {isSaved ? (
            <div className="py-8 text-center">
              <div className="w-12 h-12 bg-[#4F6F52]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6 text-[#4F6F52]" />
              </div>
              <p className="text-[#1A231E] font-medium">Report saved successfully</p>
              <p className="text-sm text-[#1A231E]/60 mt-1">Check your inbox shortly</p>
            </div>
          ) : (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="save-email" className="text-[#1A231E]">
                  Your email address
                </Label>
                <Input
                  id="save-email"
                  type="email"
                  placeholder="you@example.com"
                  value={saveEmail}
                  onChange={(e) => setSaveEmail(e.target.value)}
                  className="h-12"
                />
              </div>

              <div className="bg-[#F8F6F3] rounded-lg p-3 flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#4F6F52] mt-0.5 flex-shrink-0" />
                <p className="text-sm text-[#1A231E]/70">
                  Your report link will be valid for 7 days. You can request a new copy anytime from your email.
                </p>
              </div>

              <Button
                onClick={handleSave}
                disabled={!saveEmail.includes("@")}
                className="w-full h-12 bg-[#4F6F52] hover:bg-[#3D5940] text-white rounded-xl"
              >
                Send My Report
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Share Dialog - Family-centric, British copy */}
      <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-[#1A231E]">
              <Users className="w-5 h-5 text-[#4F6F52]" />
              Share with Your Family
            </DialogTitle>
            <DialogDescription className="text-[#1A231E]/70">
              Decisions like this are often easier when made together. Share your findings with family members.
            </DialogDescription>
          </DialogHeader>

          {isShared ? (
            <div className="py-8 text-center">
              <div className="w-12 h-12 bg-[#4F6F52]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6 text-[#4F6F52]" />
              </div>
              <p className="text-[#1A231E] font-medium">Shared successfully</p>
              <p className="text-sm text-[#1A231E]/60 mt-1">Your family will receive the report shortly</p>
            </div>
          ) : (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="share-emails" className="text-[#1A231E]">
                  Family members' email addresses
                </Label>
                <Input
                  id="share-emails"
                  type="text"
                  placeholder="sister@example.com, brother@example.com"
                  value={shareEmails}
                  onChange={(e) => setShareEmails(e.target.value)}
                  className="h-12"
                />
                <p className="text-xs text-[#1A231E]/50">Separate multiple emails with commas</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="share-message" className="text-[#1A231E]">
                  Add a personal note <span className="text-[#1A231E]/50">(optional)</span>
                </Label>
                <Textarea
                  id="share-message"
                  placeholder="Add a message..."
                  value={shareMessage}
                  onChange={(e) => setShareMessage(e.target.value)}
                  className="min-h-24 resize-none"
                />
              </div>

              <div className="bg-[#F8F6F3] rounded-lg p-3">
                <p className="text-sm text-[#1A231E]/70">
                  <span className="font-medium text-[#1A231E]">What they'll receive:</span> A summary of your care home
                  research for {location}, including your top 3 matched homes and key findings.
                </p>
              </div>

              <Button
                onClick={handleShare}
                disabled={!shareEmails.includes("@")}
                className="w-full h-12 bg-[#4F6F52] hover:bg-[#3D5940] text-white rounded-xl"
              >
                Share Report
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
