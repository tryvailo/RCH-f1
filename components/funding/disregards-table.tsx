"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Check, X, Info } from "lucide-react"
import {
    INCOME_DISREGARDS,
    ASSET_DISREGARDS,
    type IncomeDisregard,
    type AssetDisregard,
} from "@/lib/funding-mock-data"
import * as Icons from "lucide-react"

interface DisregardsTableProps {
    incomeDisregards?: IncomeDisregard[]
    assetDisregards?: AssetDisregard[]
}

export function DisregardsTable({
    incomeDisregards = INCOME_DISREGARDS,
    assetDisregards = ASSET_DISREGARDS,
}: DisregardsTableProps) {
    const [activeTab, setActiveTab] = useState<"income" | "assets">("income")
    const [expandedItem, setExpandedItem] = useState<string | null>(null)
    const [selectedItems, setSelectedItems] = useState<Set<string>>(
        new Set(incomeDisregards.filter((d) => d.isApplicable).map((d) => d.id))
    )

    const getIconComponent = (iconName: string) => {
        const Icon = Icons[iconName as keyof typeof Icons] as any
        return Icon ? <Icon className="w-5 h-5" /> : null
    }

    const renderContent = () => {
        const items =
            activeTab === "income"
                ? (incomeDisregards as (IncomeDisregard | AssetDisregard)[])
                : (assetDisregards as (IncomeDisregard | AssetDisregard)[])

        const applicableCount = items.filter((d) => d.isApplicable).length
        const totalCount = items.length

        return (
            <div className="space-y-4">
                {/* Summary */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-[#FDFBF7] border border-[#E8E5DF]">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#4F6F52] text-white flex items-center justify-center font-bold">
                            ✓
                        </div>
                        <div>
                            <div className="text-sm text-[#1A231E]/60 uppercase font-semibold">
                                {activeTab === "income" ? "Income" : "Assets"} Applied
                            </div>
                            <div className="text-lg font-bold text-[#1A231E]">
                                {applicableCount} of {totalCount}
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-xs text-[#1A231E]/60 uppercase font-semibold">
                            Current Status
                        </div>
                        <Badge className="bg-[#4F6F52] text-white">Identified</Badge>
                    </div>
                </div>

                {/* Disregards List */}
                <div className="space-y-2">
                    {items.map((item) => {
                        const isApplicable = item.isApplicable
                        const isExpanded = expandedItem === item.id
                        const isSelected = selectedItems.has(item.id)

                        return (
                            <div
                                key={item.id}
                                className={`rounded-lg border-2 transition-all ${isApplicable
                                        ? "border-[#4F6F52] bg-white shadow-soft-md"
                                        : "border-[#E8E5DF] bg-[#F5F3EF] opacity-70"
                                    }`}
                            >
                                {/* Header */}
                                <button
                                    onClick={() =>
                                        setExpandedItem(isExpanded ? null : item.id)
                                    }
                                    className={`w-full flex items-center gap-3 p-4 hover:bg-opacity-50 transition-colors ${isApplicable ? "hover:bg-[#FDFBF7]" : "cursor-default"
                                        }`}
                                >
                                    {/* Checkbox */}
                                    <div
                                        className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${isApplicable
                                                ? "border-[#4F6F52] bg-[#4F6F52]/10 cursor-pointer"
                                                : "border-[#E8E5DF] bg-white"
                                            }`}
                                    >
                                        {isApplicable && <Check className="w-4 h-4 text-[#4F6F52]" />}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 text-left min-w-0">
                                        <h4 className="font-semibold text-[#1A231E] text-sm sm:text-base">{item.name}</h4>
                                        {item.amount && (
                                            <p className="text-xs text-[#4F6F52] font-bold mt-0.5">{item.amount}</p>
                                        )}
                                    </div>

                                    {/* Status Badge */}
                                    <div className="flex items-center gap-2 flex-shrink-0">
                                        {isApplicable ? (
                                            <Badge className="bg-[#4F6F52] text-white text-xs">Applied</Badge>
                                        ) : (
                                            <Badge className="bg-[#E8E5DF] text-[#1A231E] text-xs">Not applicable</Badge>
                                        )}
                                        {isApplicable && (
                                            isExpanded ? (
                                                <ChevronUp className="w-5 h-5 text-[#4F6F52]" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5 text-[#4F6F52]" />
                                            )
                                        )}
                                    </div>
                                </button>

                                {/* Expanded Content */}
                                {isExpanded && isApplicable && (
                                    <div className="border-t-2 border-[#E8E5DF] p-4 space-y-3 bg-[#FDFBF7]">
                                        <div className="flex gap-3">
                                            <div
                                                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                                style={{ backgroundColor: "#4F6F5220" }}
                                            >
                                                {getIconComponent(item.icon)}
                                            </div>
                                            <p className="text-sm text-[#1A231E]/70 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>

                                        {/* Action for applicable items */}
                                        {activeTab === "income" && (
                                            <div className="text-xs text-[#1A231E]/60 pt-2 border-t border-[#E8E5DF]">
                                                <strong>Impact on means test:</strong> This income is excluded from your
                                                assessable income when calculating LA support.
                                            </div>
                                        )}
                                        {activeTab === "assets" && (
                                            <div className="text-xs text-[#1A231E]/60 pt-2 border-t border-[#E8E5DF]">
                                                <strong>Impact on means test:</strong> This asset is excluded from your
                                                capital assessment.
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>

                {/* Info Box */}
                <div className="bg-[#4F6F52]/10 rounded-xl p-4 border border-[#4F6F52]/20">
                    <div className="flex gap-3">
                        <Info className="w-5 h-5 text-[#4F6F52] flex-shrink-0 mt-0.5" />
                        <div className="text-sm">
                            <p className="font-semibold text-[#1A231E] mb-1">What does this mean?</p>
                            <p className="text-[#1A231E]/70">
                                Disregarded {activeTab === "income" ? "income" : "assets"} don't count toward the
                                means test. This list shows which ones apply to your situation based on your answers.
                                The Local Authority will verify these during formal assessment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Card className="border-[#E8E5DF] shadow-soft-xl bg-white overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[#8B7355]/5 to-[#C88D79]/5 border-b border-[#E8E5DF] pb-6">
                <div className="space-y-2">
                    <CardTitle className="text-2xl font-bold text-[#1A231E]">
                        💷 Income & Asset Disregards
                    </CardTitle>
                    <p className="text-sm text-[#1A231E]/70">
                        What doesn't count toward your means test assessment
                    </p>
                </div>
            </CardHeader>

            <CardContent className="pt-6">
                {/* Tabs */}
                <div className="flex gap-2 mb-6 border-b-2 border-[#E8E5DF]">
                    {["income", "assets"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => {
                                setActiveTab(tab as "income" | "assets")
                                setExpandedItem(null)
                            }}
                            className={`px-4 py-3 font-semibold text-sm uppercase tracking-wide transition-colors border-b-2 -mb-0.5 ${activeTab === tab
                                    ? "border-[#8B7355] text-[#8B7355]"
                                    : "border-transparent text-[#1A231E]/50 hover:text-[#1A231E]"
                                }`}
                        >
                            {tab === "income" ? "💰 Income" : "🏠 Assets"}
                        </button>
                    ))}
                </div>

                {/* Content */}
                {renderContent()}

                {/* Footer Note */}
                <div className="mt-8 pt-6 border-t-2 border-[#E8E5DF]">
                    <p className="text-xs text-[#1A231E]/60 text-center">
                        These are {activeTab === "income" ? "income" : "asset"} disregards under the Care Act
                        2014. Always verify with your Local Authority before formally applying.{" "}
                        <a href="#" className="text-[#4F6F52] font-semibold hover:underline">
                            Learn more →
                        </a>
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}
