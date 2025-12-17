"use client"

import { useState } from "react"
import { MapPin, TreePine, ShoppingBag, Bus, ArrowRight, Coffee, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface NearbyAmenity {
  id: string
  name: string
  type: "park" | "shop" | "transport" | "cafe" | "pharmacy"
  distance: string
  walkTime: string
}

interface CareHomeLocation {
  id: string
  name: string
  distance: string
  rating: "Outstanding" | "Good" | "Requires Improvement"
}

interface AreaMapData {
  postcode: string
  latitude: number
  longitude: number
  radiusKm: number
  parks: NearbyAmenity[]
  shops: NearbyAmenity[]
  transport: NearbyAmenity[]
  careHomes: CareHomeLocation[]
}

interface ReportAreaMapProps {
  mapData?: AreaMapData
}

const defaultMapData: AreaMapData = {
  postcode: "B15 2TZ",
  latitude: 52.4714,
  longitude: -1.9294,
  radiusKm: 1,
  parks: [
    { id: "p1", name: "Cannon Hill Park", type: "park", distance: "0.4 miles", walkTime: "8 min" },
    { id: "p2", name: "Highbury Park", type: "park", distance: "0.7 miles", walkTime: "14 min" },
    { id: "p3", name: "Kings Heath Park", type: "park", distance: "1.1 miles", walkTime: "22 min" },
  ],
  shops: [
    { id: "s1", name: "Sainsbury's Local", type: "shop", distance: "0.2 miles", walkTime: "4 min" },
    { id: "s2", name: "Boots Pharmacy", type: "pharmacy", distance: "0.3 miles", walkTime: "6 min" },
    { id: "s3", name: "Moseley Village Shops", type: "shop", distance: "0.5 miles", walkTime: "10 min" },
  ],
  transport: [
    { id: "t1", name: "Moseley Road Bus Stop", type: "transport", distance: "0.1 miles", walkTime: "2 min" },
    { id: "t2", name: "Kings Heath Station", type: "transport", distance: "0.8 miles", walkTime: "16 min" },
    { id: "t3", name: "Balsall Heath Bus Stop", type: "transport", distance: "0.3 miles", walkTime: "6 min" },
  ],
  careHomes: [
    { id: "ch1", name: "Greenfield Manor", distance: "0.3 miles", rating: "Outstanding" },
    { id: "ch2", name: "Moseley Court Care", distance: "0.5 miles", rating: "Good" },
    { id: "ch3", name: "The Beeches", distance: "0.8 miles", rating: "Good" },
  ],
}

const amenityIcons = {
  park: TreePine,
  shop: ShoppingBag,
  transport: Bus,
  cafe: Coffee,
  pharmacy: Building2,
}

const amenityColors = {
  park: { bg: "bg-emerald-100", text: "text-emerald-600", border: "border-emerald-200" },
  shop: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200" },
  transport: { bg: "bg-amber-100", text: "text-amber-600", border: "border-amber-200" },
  cafe: { bg: "bg-orange-100", text: "text-orange-600", border: "border-orange-200" },
  pharmacy: { bg: "bg-red-100", text: "text-red-600", border: "border-red-200" },
}

type AmenityTab = "parks" | "shops" | "transport"

export function ReportAreaMap({ mapData = defaultMapData }: ReportAreaMapProps) {
  const [activeTab, setActiveTab] = useState<AmenityTab>("parks")

  const tabs: { id: AmenityTab; label: string; icon: typeof TreePine; count: number }[] = [
    { id: "parks", label: "Parks & Green Spaces", icon: TreePine, count: mapData.parks.length },
    { id: "shops", label: "Shops & Services", icon: ShoppingBag, count: mapData.shops.length },
    { id: "transport", label: "Transport Links", icon: Bus, count: mapData.transport.length },
  ]

  const currentAmenities =
    activeTab === "parks" ? mapData.parks : activeTab === "shops" ? mapData.shops : mapData.transport

  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-white via-[#FDFBF7] to-[#4F6F52]/5">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <Badge variant="secondary" className="mb-4 text-base px-5 py-2 bg-[#4F6F52]/10 text-[#4F6F52] border-0">
            Page 4 of 10
          </Badge>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A231E] mb-4 leading-tight">
            What's Nearby?
          </h2>
          <p className="text-lg md:text-xl text-[#1A231E]/70 max-w-2xl mx-auto leading-relaxed">
            Explore the neighbourhood around <span className="font-semibold text-[#4F6F52]">{mapData.postcode}</span>. A
            good location means easier visits and better quality of life.
          </p>
        </div>

        {/* Map Placeholder with Visual Representation */}
        <div className="relative bg-gradient-to-br from-[#4F6F52]/10 via-[#4F6F52]/5 to-[#C88D79]/5 rounded-2xl md:rounded-3xl overflow-hidden border border-[#E8E5DF] shadow-soft-lg mb-8">
          {/* Map Container */}
          <div className="relative h-[300px] md:h-[400px] bg-[#E8E5DF]/30">
            {/* Visual Map Representation */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Grid Pattern for Map Feel */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #4F6F52 1px, transparent 1px),
                    linear-gradient(to bottom, #4F6F52 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Central Postcode Marker */}
              <div className="relative z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#4F6F52] flex items-center justify-center shadow-lg animate-pulse">
                  <MapPin className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                  <span className="text-sm font-semibold text-[#1A231E]">{mapData.postcode}</span>
                </div>
              </div>

              {/* Radius Circle */}
              <div className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-dashed border-[#4F6F52]/30" />
              <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-dashed border-[#4F6F52]/20" />

              {/* Scattered Amenity Markers */}
              <div className="absolute top-12 left-1/4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-500 flex items-center justify-center shadow-md">
                <TreePine className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div className="absolute top-20 right-1/4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500 flex items-center justify-center shadow-md">
                <ShoppingBag className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div className="absolute bottom-20 left-1/3 w-8 h-8 md:w-10 md:h-10 rounded-full bg-amber-500 flex items-center justify-center shadow-md">
                <Bus className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div className="absolute bottom-16 right-1/3 w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-500 flex items-center justify-center shadow-md">
                <TreePine className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div className="absolute top-1/3 right-16 w-8 h-8 md:w-10 md:h-10 rounded-full bg-amber-500 flex items-center justify-center shadow-md">
                <Bus className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>

              {/* Care Home Markers */}
              <div className="absolute top-1/4 left-16 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#C88D79] flex items-center justify-center shadow-md border-2 border-white">
                <Building2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="absolute bottom-1/4 right-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#C88D79] flex items-center justify-center shadow-md border-2 border-white">
                <Building2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 md:p-4 shadow-md">
              <p className="text-xs md:text-sm font-medium text-[#1A231E]/60 mb-2">Map Legend</p>
              <div className="flex flex-wrap gap-2 md:gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs md:text-sm text-[#1A231E]/70">Parks</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <span className="text-xs md:text-sm text-[#1A231E]/70">Shops</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="text-xs md:text-sm text-[#1A231E]/70">Transport</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#C88D79]" />
                  <span className="text-xs md:text-sm text-[#1A231E]/70">Care Homes</span>
                </div>
              </div>
            </div>

            {/* Radius Label */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-md">
              <span className="text-xs md:text-sm font-medium text-[#1A231E]/70">{mapData.radiusKm} km radius</span>
            </div>
          </div>
        </div>

        {/* Amenity Tabs */}
        <div className="bg-white rounded-2xl border border-[#E8E5DF] shadow-soft-md overflow-hidden mb-8">
          {/* Tab Headers */}
          <div className="flex flex-col sm:flex-row border-b border-[#E8E5DF]">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-4 md:py-5 text-base md:text-lg font-medium transition-colors min-h-[56px] ${
                    isActive
                      ? "bg-[#4F6F52]/10 text-[#4F6F52] border-b-2 border-[#4F6F52]"
                      : "text-[#1A231E]/60 hover:bg-[#FDFBF7] hover:text-[#1A231E]"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
                  <Badge
                    variant="secondary"
                    className={`ml-1 ${isActive ? "bg-[#4F6F52]/20 text-[#4F6F52]" : "bg-[#E8E5DF] text-[#1A231E]/60"}`}
                  >
                    {tab.count}
                  </Badge>
                </button>
              )
            })}
          </div>

          {/* Tab Content */}
          <div className="p-4 md:p-6">
            <div className="space-y-3">
              {currentAmenities.map((amenity) => {
                const Icon = amenityIcons[amenity.type]
                const colors = amenityColors[amenity.type]
                return (
                  <div
                    key={amenity.id}
                    className={`flex items-center gap-4 p-4 rounded-xl ${colors.bg} ${colors.border} border transition-transform hover:scale-[1.01]`}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-semibold text-[#1A231E] truncate">{amenity.name}</h4>
                      <p className="text-base text-[#1A231E]/60">{amenity.type === "pharmacy" ? "Pharmacy" : ""}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-lg font-bold text-[#1A231E]">{amenity.distance}</p>
                      <p className="text-base text-[#1A231E]/60">{amenity.walkTime} walk</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Care Homes in Area */}
        <div className="bg-gradient-to-br from-[#4F6F52]/5 to-[#4F6F52]/10 rounded-2xl p-6 md:p-8 border border-[#4F6F52]/20 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#4F6F52]/20 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-[#4F6F52]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#1A231E]">Care Homes in This Area</h3>
              <p className="text-base text-[#1A231E]/60">
                Within {mapData.radiusKm} km of {mapData.postcode}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {mapData.careHomes.map((home) => (
              <div
                key={home.id}
                className="flex items-center justify-between p-4 bg-white rounded-xl border border-[#E8E5DF]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C88D79]/20 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-[#C88D79]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#1A231E]">{home.name}</h4>
                    <p className="text-base text-[#1A231E]/60">{home.distance}</p>
                  </div>
                </div>
                <Badge
                  className={`text-sm px-3 py-1 ${
                    home.rating === "Outstanding"
                      ? "bg-emerald-100 text-emerald-700 border-emerald-200"
                      : home.rating === "Good"
                        ? "bg-blue-100 text-blue-700 border-blue-200"
                        : "bg-amber-100 text-amber-700 border-amber-200"
                  }`}
                >
                  {home.rating}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Conversion Trigger Box */}
        <div className="bg-gradient-to-br from-[#C88D79]/10 via-[#C88D79]/5 to-transparent rounded-2xl p-6 md:p-8 border border-[#C88D79]/30">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-serif font-semibold text-[#1A231E] mb-3">
                Want a Detailed Walk Score?
              </h3>
              <p className="text-base md:text-lg text-[#1A231E]/70 leading-relaxed">
                This map shows the <span className="font-semibold">general area</span>. For a detailed{" "}
                <span className="font-semibold text-[#4F6F52]">Walk Score</span> for each care home—including exact
                distances to GP surgeries, hospitals, and family-friendly cafes—see our Professional Report.
              </p>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="lg"
                    className="bg-[#C88D79] hover:bg-[#B87D69] text-white h-14 px-6 text-lg whitespace-nowrap"
                  >
                    See Walk Scores
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm">Upgrade to Professional Report</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        {/* Data Source Footer */}
        <p className="mt-6 text-center text-sm text-[#1A231E]/50">
          Data sources: OpenStreetMap, OS Open Data, Transport for West Midlands • Last updated:{" "}
          {new Date().toLocaleDateString("en-GB")}
        </p>
      </div>
    </section>
  )
}
