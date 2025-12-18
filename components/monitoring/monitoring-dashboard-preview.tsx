"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, TrendingDown, TrendingUp, CheckCircle, Clock, DollarSign, Users, Shield } from "lucide-react"
import Link from "next/link"

export function MonitoringDashboardPreview() {
  const [activeTab, setActiveTab] = useState("financial")

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-white via-[#FDFBF7] to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge className="mb-4 px-4 py-2 bg-[#4F6F52]/10 text-[#4F6F52] border-[#4F6F52]/20">
            LIVE PREVIEW
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A231E] mb-4 sm:mb-6 text-balance">
            See What You'll Get <span className="text-[#4F6F52]">Every Month</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#1A231E]/70 leading-relaxed">
            Real-time monitoring dashboard showing financial health, care quality, and critical alerts
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="p-6 sm:p-8 lg:p-10 bg-white border-2 border-[#E8E5DF] rounded-2xl sm:rounded-3xl shadow-soft-xl">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-[#F5F3EF] rounded-xl p-1">
                <TabsTrigger
                  value="financial"
                  className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg"
                >
                  <DollarSign className="w-4 h-4 mr-2" />
                  Financial Health
                </TabsTrigger>
                <TabsTrigger
                  value="quality"
                  className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Care Quality
                </TabsTrigger>
                <TabsTrigger
                  value="alerts"
                  className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg"
                >
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Recent Alerts
                </TabsTrigger>
              </TabsList>

              {/* Financial Health Tab */}
              <TabsContent value="financial" className="space-y-6">
                <div className="bg-gradient-to-br from-[#FEF2F2] to-white rounded-xl p-6 border-2 border-[#D17A6F]/20">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-[#1A231E] mb-1">Oakwood Manor Care Home</h3>
                      <Badge className="bg-[#D17A6F] text-white border-0">
                        <AlertTriangle className="w-3 h-3 mr-1" />
                        WARNING
                      </Badge>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white rounded-lg p-4 border border-[#E8E5DF]">
                      <div className="text-sm text-[#1A231E]/60 mb-1">Altman Z-Score</div>
                      <div className="text-2xl font-bold text-[#D17A6F]">1.8</div>
                      <div className="text-xs text-[#D17A6F] font-semibold">RISK ZONE</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-[#E8E5DF]">
                      <div className="text-sm text-[#1A231E]/60 mb-1">Assets Change</div>
                      <div className="text-2xl font-bold text-[#D17A6F] flex items-center gap-1">
                        <TrendingDown className="w-5 h-5" />
                        -40%
                      </div>
                      <div className="text-xs text-[#1A231E]/60">2023-2024</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-[#E8E5DF]">
                      <div className="text-sm text-[#1A231E]/60 mb-1">Current Ratio</div>
                      <div className="text-2xl font-bold text-[#D17A6F]">0.6</div>
                      <div className="text-xs text-[#D17A6F] font-semibold">LOW</div>
                    </div>
                  </div>

                  <div className="bg-[#D17A6F]/10 rounded-lg p-4 border border-[#D17A6F]/20">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-[#D17A6F] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#1A231E] mb-1">Financial Stress Detected</div>
                        <p className="text-sm text-[#1A231E]/70">
                          Alert triggered 3 months ago. Assets declining, liquidity concerns. Action recommended: Begin
                          researching alternative care homes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Care Quality Tab */}
              <TabsContent value="quality" className="space-y-6">
                <div className="bg-gradient-to-br from-[#F0FDF4] to-white rounded-xl p-6 border-2 border-[#4F6F52]/20">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-[#1A231E] mb-1">Oakwood Manor Care Home</h3>
                      <Badge className="bg-[#4F6F52] text-white border-0">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        STABLE
                      </Badge>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-[#E8E5DF]">
                      <div className="text-sm text-[#1A231E]/60 mb-1">CQC Rating</div>
                      <div className="text-2xl font-bold text-[#4F6F52]">Good</div>
                      <div className="text-xs text-[#4F6F52] font-semibold flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        Stable
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-[#E8E5DF]">
                      <div className="text-sm text-[#1A231E]/60 mb-1">Hygiene Score</div>
                      <div className="text-2xl font-bold text-[#4F6F52]">4/5</div>
                      <div className="text-xs text-[#4F6F52] font-semibold flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        Improving
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-[#E8E5DF]">
                      <div className="text-sm text-[#1A231E]/60 mb-1">Staff Turnover</div>
                      <div className="text-2xl font-bold text-[#4F6F52]">15%</div>
                      <div className="text-xs text-[#4F6F52] font-semibold">Normal</div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Recent Alerts Tab */}
              <TabsContent value="alerts" className="space-y-4">
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-5 border-l-4 border-[#D17A6F] shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#D17A6F]/10 flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5 text-[#D17A6F]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge className="bg-[#D17A6F] text-white text-xs">3 days ago</Badge>
                          <span className="font-semibold text-[#1A231E]">Staff Turnover Spike</span>
                        </div>
                        <p className="text-sm text-[#1A231E]/70">
                          Staff turnover increased from 15% to 38% within 2 months. This is above normal threshold.
                          Monitoring recommended.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-5 border-l-4 border-[#4F6F52] shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#4F6F52]/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-[#4F6F52]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge className="bg-[#4F6F52] text-white text-xs">1 week ago</Badge>
                          <span className="font-semibold text-[#1A231E]">New CQC Report Published</span>
                        </div>
                        <p className="text-sm text-[#1A231E]/70">
                          Latest CQC inspection report available. Rating maintained at "Good". No new concerns
                          identified.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-5 border-l-4 border-[#7FAD7E] shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#7FAD7E]/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-[#7FAD7E]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge className="bg-[#7FAD7E] text-white text-xs">2 weeks ago</Badge>
                          <span className="font-semibold text-[#1A231E]">Financial Alert Resolved</span>
                        </div>
                        <p className="text-sm text-[#1A231E]/70">
                          Previous financial concern has been addressed. Home shows improved financial stability
                          indicators.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-8 pt-8 border-t border-[#E8E5DF] text-center">
              <p className="text-sm text-[#1A231E]/60 mb-4">
                This is a sample of what you'll receive in your monthly monitoring report
              </p>
              <Button asChild className="bg-[#4F6F52] hover:bg-[#3A5140] text-white rounded-xl h-12 px-8">
                <Link href="#pricing">Start Your Free 30-Day Trial</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}



