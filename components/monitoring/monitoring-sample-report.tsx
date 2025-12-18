"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export function MonitoringSampleReport() {
  const [downloaded, setDownloaded] = useState(false)

  const handleDownload = () => {
    // In a real implementation, this would download a PDF
    // For now, we'll simulate it
    setDownloaded(true)
    setTimeout(() => {
      alert("Sample report download started! Check your downloads folder.")
      // In production, this would trigger an actual PDF download
    }, 500)
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-[#FDFBF7] to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-4 px-4 py-2 bg-[#4F6F52]/10 text-[#4F6F52] border-[#4F6F52]/20">
              SAMPLE REPORT
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A231E] mb-4 sm:mb-6 text-balance">
              See What You'll <span className="text-[#4F6F52]">Receive Monthly</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#1A231E]/70 leading-relaxed">
              Download a sample monthly monitoring report to see the depth of analysis you'll receive
            </p>
          </div>

          <Card className="p-6 sm:p-8 lg:p-10 bg-white border-2 border-[#E8E5DF] rounded-2xl shadow-soft-xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4F6F52] to-[#3A5140] flex items-center justify-center">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-[#1A231E]">Monthly Monitoring Report</h3>
                    <p className="text-sm text-[#1A231E]/60">Comprehensive 24-page analysis</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#4F6F52] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#1A231E] mb-1">Financial Health Analysis</div>
                      <p className="text-sm text-[#1A231E]/70">
                        Altman Z-Score, liquidity ratios, asset trends, and financial stability indicators
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#4F6F52] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#1A231E] mb-1">Care Quality Metrics</div>
                      <p className="text-sm text-[#1A231E]/70">
                        CQC ratings, hygiene scores, staff turnover, and quality trend analysis
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#4F6F52] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#1A231E] mb-1">Risk Assessment & Alerts</div>
                      <p className="text-sm text-[#1A231E]/70">
                        Early warning indicators, risk scoring, and actionable recommendations
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#4F6F52] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#1A231E] mb-1">Comparative Analysis</div>
                      <p className="text-sm text-[#1A231E]/70">
                        How your care home compares to regional averages and industry standards
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#4F6F52]/10 to-[#7FAD7E]/10 rounded-xl p-6 border border-[#4F6F52]/20 mb-6">
                  <p className="text-sm text-[#1A231E]/70 mb-4">
                    <span className="font-semibold text-[#1A231E]">2,000+ families</span> receive this comprehensive
                    report every month. See exactly what insights you'll get.
                  </p>
                  {downloaded ? (
                    <div className="flex items-center gap-2 text-[#4F6F52] font-semibold">
                      <CheckCircle className="w-5 h-5" />
                      <span>Download started! Check your downloads folder.</span>
                    </div>
                  ) : (
                    <Button
                      onClick={handleDownload}
                      className="w-full h-12 bg-[#4F6F52] hover:bg-[#3A5140] text-white rounded-xl font-semibold"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download Sample Report (PDF)
                    </Button>
                  )}
                </div>

                <div className="text-center">
                  <p className="text-sm text-[#1A231E]/60 mb-4">
                    Want to receive reports like this every month?
                  </p>
                  <Button asChild variant="outline" className="w-full h-12 rounded-xl border-2 border-[#4F6F52]">
                    <Link href="#pricing">
                      Start Free 30-Day Trial
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="bg-gradient-to-br from-[#F5F3EF] to-white rounded-2xl p-8 border-2 border-[#E8E5DF] shadow-soft-lg">
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border border-[#E8E5DF]">
                      <div className="text-xs text-[#1A231E]/60 mb-2">Report Preview</div>
                      <div className="h-48 bg-gradient-to-br from-[#4F6F52]/5 to-[#7FAD7E]/5 rounded-lg flex items-center justify-center border-2 border-dashed border-[#4F6F52]/20">
                        <div className="text-center">
                          <FileText className="w-12 h-12 text-[#4F6F52]/40 mx-auto mb-2" />
                          <p className="text-sm text-[#1A231E]/50">24-page PDF report</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white rounded-lg p-3 border border-[#E8E5DF] text-center">
                        <div className="text-2xl font-bold text-[#4F6F52]">156</div>
                        <div className="text-xs text-[#1A231E]/60">Data Points</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-[#E8E5DF] text-center">
                        <div className="text-2xl font-bold text-[#4F6F52]">12</div>
                        <div className="text-xs text-[#1A231E]/60">Risk Categories</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}



