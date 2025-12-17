"use client"

import { useState, useEffect } from "react"
import {
  MapPin,
  TreePine,
  ShoppingBag,
  Bus,
  Building2,
  Heart,
  Coffee,
  Stethoscope,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface NearbyAmenity {
  name: string
  type: "park" | "shop" | "transport" | "cafe" | "pharmacy" | "hospital" | "gp"
  distance: string
  walkTime: string
}

interface HomeLocationData {
  name: string
  postcode: string
  address: string
  walkScore: number
  noiseLevel: "Low" | "Moderate" | "High"
  nearbyAmenities: {
    parks: NearbyAmenity[]
    healthcare: NearbyAmenity[]
    shops: NearbyAmenity[]
    transport: NearbyAmenity[]
  }
}

interface ProAreaMapProps {
  homes?: HomeLocationData[]
}

const SAMPLE_HOMES: HomeLocationData[] = [
  {
    name: "Greenfield Manor",
    postcode: "B15 2TT",
    address: "123 Oak Lane, Moseley",
    walkScore: 78,
    noiseLevel: "Low",
    nearbyAmenities: {
      parks: [
        { name: "Cannon Hill Park", type: "park", distance: "0.3 mi", walkTime: "6 min" },
        { name: "Highbury Park", type: "park", distance: "0.5 mi", walkTime: "10 min" },
      ],
      healthcare: [
        { name: "Moseley Medical Centre", type: "gp", distance: "0.2 mi", walkTime: "4 min" },
        { name: "Queen Elizabeth Hospital", type: "hospital", distance: "1.2 mi", walkTime: "24 min" },
      ],
      shops: [
        { name: "Sainsbury's Local", type: "shop", distance: "0.2 mi", walkTime: "4 min" },
        { name: "Boots Pharmacy", type: "pharmacy", distance: "0.3 mi", walkTime: "6 min" },
      ],
      transport: [
        { name: "Moseley Road Bus Stop", type: "transport", distance: "0.1 mi", walkTime: "2 min" },
        { name: "Kings Heath Station", type: "transport", distance: "0.8 mi", walkTime: "16 min" },
      ],
    },
  },
  {
    name: "Oakwood Lodge",
    postcode: "B29 6QJ",
    address: "45 Elm Street, Selly Oak",
    walkScore: 82,
    noiseLevel: "Moderate",
    nearbyAmenities: {
      parks: [
        { name: "Selly Oak Park", type: "park", distance: "0.2 mi", walkTime: "4 min" },
        { name: "Bournville Park", type: "park", distance: "0.7 mi", walkTime: "14 min" },
      ],
      healthcare: [
        { name: "Selly Oak Health Centre", type: "gp", distance: "0.3 mi", walkTime: "6 min" },
        { name: "Queen Elizabeth Hospital", type: "hospital", distance: "0.5 mi", walkTime: "10 min" },
      ],
      shops: [
        { name: "Tesco Express", type: "shop", distance: "0.1 mi", walkTime: "2 min" },
        { name: "Lloyds Pharmacy", type: "pharmacy", distance: "0.2 mi", walkTime: "4 min" },
      ],
      transport: [
        { name: "Selly Oak Station", type: "transport", distance: "0.3 mi", walkTime: "6 min" },
        { name: "Bristol Road Bus Stop", type: "transport", distance: "0.1 mi", walkTime: "2 min" },
      ],
    },
  },
  {
    name: "Riverside Care Home",
    postcode: "B30 1HH",
    address: "78 River Walk, Stirchley",
    walkScore: 71,
    noiseLevel: "Low",
    nearbyAmenities: {
      parks: [
        { name: "Stirchley Park", type: "park", distance: "0.4 mi", walkTime: "8 min" },
        { name: "River Rea Walk", type: "park", distance: "0.1 mi", walkTime: "2 min" },
      ],
      healthcare: [
        { name: "Stirchley Medical Practice", type: "gp", distance: "0.5 mi", walkTime: "10 min" },
        { name: "Queen Elizabeth Hospital", type: "hospital", distance: "1.5 mi", walkTime: "30 min" },
      ],
      shops: [
        { name: "Co-op Food", type: "shop", distance: "0.3 mi", walkTime: "6 min" },
        { name: "Superdrug", type: "pharmacy", distance: "0.4 mi", walkTime: "8 min" },
      ],
      transport: [
        { name: "Stirchley High Street Bus", type: "transport", distance: "0.2 mi", walkTime: "4 min" },
        { name: "Bournville Station", type: "transport", distance: "0.6 mi", walkTime: "12 min" },
      ],
    },
  },
  {
    name: "Meadowbrook House",
    postcode: "B13 8QG",
    address: "22 Meadow Lane, Moseley",
    walkScore: 85,
    noiseLevel: "Moderate",
    nearbyAmenities: {
      parks: [
        { name: "Moseley Bog", type: "park", distance: "0.2 mi", walkTime: "4 min" },
        { name: "Swanshurst Park", type: "park", distance: "0.4 mi", walkTime: "8 min" },
      ],
      healthcare: [
        { name: "Wake Green Surgery", type: "gp", distance: "0.1 mi", walkTime: "2 min" },
        { name: "BMI The Priory Hospital", type: "hospital", distance: "0.8 mi", walkTime: "16 min" },
      ],
      shops: [
        { name: "Waitrose", type: "shop", distance: "0.3 mi", walkTime: "6 min" },
        { name: "Moseley Pharmacy", type: "pharmacy", distance: "0.2 mi", walkTime: "4 min" },
      ],
      transport: [
        { name: "Moseley Village Bus Stop", type: "transport", distance: "0.1 mi", walkTime: "2 min" },
        { name: "Kings Heath Station", type: "transport", distance: "0.7 mi", walkTime: "14 min" },
      ],
    },
  },
  {
    name: "Sunnydale Residence",
    postcode: "B14 7TL",
    address: "99 Sunny Road, Kings Heath",
    walkScore: 68,
    noiseLevel: "Low",
    nearbyAmenities: {
      parks: [
        { name: "Kings Heath Park", type: "park", distance: "0.3 mi", walkTime: "6 min" },
        { name: "Highbury Park", type: "park", distance: "0.9 mi", walkTime: "18 min" },
      ],
      healthcare: [
        { name: "Kings Heath Practice", type: "gp", distance: "0.4 mi", walkTime: "8 min" },
        { name: "Queen Elizabeth Hospital", type: "hospital", distance: "2.0 mi", walkTime: "40 min" },
      ],
      shops: [
        { name: "Asda", type: "shop", distance: "0.5 mi", walkTime: "10 min" },
        { name: "Well Pharmacy", type: "pharmacy", distance: "0.4 mi", walkTime: "8 min" },
      ],
      transport: [
        { name: "Kings Heath High Street Bus", type: "transport", distance: "0.3 mi", walkTime: "6 min" },
        { name: "Kings Heath Station", type: "transport", distance: "0.4 mi", walkTime: "8 min" },
      ],
    },
  },
]

const amenityIcons = {
  park: TreePine,
  shop: ShoppingBag,
  transport: Bus,
  cafe: Coffee,
  pharmacy: Heart,
  hospital: Stethoscope,
  gp: Stethoscope,
}

const amenityColors = {
  park: "bg-emerald-500",
  shop: "bg-blue-500",
  transport: "bg-amber-500",
  cafe: "bg-orange-500",
  pharmacy: "bg-pink-500",
  hospital: "bg-red-500",
  gp: "bg-teal-500",
}

const getWalkScoreLabel = (score: number) => {
  if (score >= 90) return { label: "Walker's Paradise", color: "text-emerald-600 bg-emerald-50" }
  if (score >= 70) return { label: "Very Walkable", color: "text-green-600 bg-green-50" }
  if (score >= 50) return { label: "Somewhat Walkable", color: "text-amber-600 bg-amber-50" }
  return { label: "Car-Dependent", color: "text-red-600 bg-red-50" }
}

const getNoiseLevelColor = (level: string) => {
  switch (level) {
    case "Low":
      return "text-emerald-600 bg-emerald-50"
    case "Moderate":
      return "text-amber-600 bg-amber-50"
    case "High":
      return "text-red-600 bg-red-50"
    default:
      return "text-gray-600 bg-gray-50"
  }
}

function ProAreaMap({ homes = [] }: ProAreaMapProps) {
  const defaultAmenities = {
    parks: [] as NearbyAmenity[],
    healthcare: [] as NearbyAmenity[],
    shops: [] as NearbyAmenity[],
    transport: [] as NearbyAmenity[],
  }

  const safeHomes = (homes.length > 0 ? homes : SAMPLE_HOMES).map((home) => ({
    ...home,
    nearbyAmenities: {
      parks: home.nearbyAmenities?.parks ?? [],
      healthcare: home.nearbyAmenities?.healthcare ?? [],
      shops: home.nearbyAmenities?.shops ?? [],
      transport: home.nearbyAmenities?.transport ?? [],
    },
  }))

  const [selectedHome, setSelectedHome] = useState<HomeLocationData>(safeHomes[0])
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  useEffect(() => {
    if (safeHomes.length > 0) {
      setSelectedHome(safeHomes[0])
    }
  }, [homes])

  const safeAmenities = {
    parks: selectedHome?.nearbyAmenities?.parks ?? [],
    healthcare: selectedHome?.nearbyAmenities?.healthcare ?? [],
    shops: selectedHome?.nearbyAmenities?.shops ?? [],
    transport: selectedHome?.nearbyAmenities?.transport ?? [],
  }

  const bestWalkScore = Math.max(...safeHomes.map((h) => h.walkScore))
  const bestWalkScoreHome = safeHomes.find((h) => h.walkScore === bestWalkScore)

  if (!selectedHome) {
    return null
  }

  return (
    <div className="bg-[#FDFBF7] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mb-4 sm:mb-6">
            <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-3xl bg-gradient-to-br from-[#4F6F52] to-[#3d5741] flex items-center justify-center shadow-soft-xl">
              <MapPin className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A231E] font-serif leading-tight">
                Location & Surroundings
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-[#1A231E]/70 mt-2 sm:mt-3 font-sans leading-relaxed">
                Detailed neighbourhood analysis for each care home
              </p>
            </div>
          </div>
        </div>

        {/* Walk Score Summary */}
        <div className="bg-white border-2 border-[#E8E5DF] rounded-3xl p-6 sm:p-8 mb-8 shadow-soft-lg">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1A231E] mb-6 font-serif">Walk Score Comparison</h2>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {safeHomes.map((home) => {
              const scoreInfo = getWalkScoreLabel(home.walkScore)
              const isBest = home.walkScore === bestWalkScore
              return (
                <button
                  key={home.name}
                  onClick={() => setSelectedHome(home)}
                  className={`p-4 rounded-2xl border-2 transition-all text-left ${
                    selectedHome.name === home.name
                      ? "border-[#4F6F52] bg-[#4F6F52]/5"
                      : "border-[#E8E5DF] hover:border-[#4F6F52]/50"
                  }`}
                >
                  {isBest && <Badge className="bg-[#4F6F52] text-white text-sm mb-2">Best Location</Badge>}
                  <h3 className="font-semibold text-[#1A231E] text-sm mb-2 line-clamp-1">{home.name}</h3>
                  <div className="text-3xl font-bold text-[#1A231E] mb-1">{home.walkScore}</div>
                  <span className={`text-sm font-medium px-2 py-1 rounded-full ${scoreInfo.color}`}>
                    {scoreInfo.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Selected Home Map & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
          {/* Visual Map */}
          <div className="bg-white border-2 border-[#E8E5DF] rounded-3xl overflow-hidden shadow-soft-lg">
            <div className="relative h-[350px] sm:h-[400px] bg-gradient-to-br from-[#4F6F52]/10 via-[#4F6F52]/5 to-[#C88D79]/5">
              {/* Grid Pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #4F6F52 1px, transparent 1px),
                    linear-gradient(to bottom, #4F6F52 1px, transparent 1px)
                  `,
                  backgroundSize: "30px 30px",
                }}
              />

              {/* Central Care Home Marker */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-[#C88D79] flex items-center justify-center shadow-lg border-4 border-white">
                    <Building2 className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-xl shadow-md whitespace-nowrap">
                    <span className="text-sm font-bold text-[#1A231E]">{selectedHome.name}</span>
                  </div>
                </div>

                {/* Radius Circles */}
                <div className="absolute w-40 h-40 rounded-full border-2 border-dashed border-[#4F6F52]/30" />
                <div className="absolute w-64 h-64 rounded-full border-2 border-dashed border-[#4F6F52]/20" />
                <div className="absolute w-96 h-96 rounded-full border-2 border-dashed border-[#4F6F52]/10" />

                {/* Amenity Markers */}
                <div className="absolute top-16 left-1/4 w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center shadow-md">
                  <TreePine className="w-5 h-5 text-white" />
                </div>
                <div className="absolute top-24 right-1/4 w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center shadow-md">
                  <Stethoscope className="w-5 h-5 text-white" />
                </div>
                <div className="absolute bottom-24 left-1/3 w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shadow-md">
                  <Bus className="w-5 h-5 text-white" />
                </div>
                <div className="absolute bottom-20 right-1/3 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shadow-md">
                  <ShoppingBag className="w-5 h-5 text-white" />
                </div>
                <div className="absolute top-1/3 right-16 w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center shadow-md">
                  <Heart className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-md">
                <p className="text-sm font-semibold text-[#1A231E]/60 mb-2 uppercase tracking-wide">Legend</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-[#1A231E]/70">Parks</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-teal-500" />
                    <span className="text-[#1A231E]/70">Healthcare</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                    <span className="text-[#1A231E]/70">Shops</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="text-[#1A231E]/70">Transport</span>
                  </div>
                </div>
              </div>

              {/* Postcode Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-md">
                <span className="text-sm font-bold text-[#1A231E]">{selectedHome.postcode}</span>
              </div>
            </div>
          </div>

          {/* Home Details */}
          <div className="bg-white border-2 border-[#E8E5DF] rounded-3xl p-6 sm:p-8 shadow-soft-lg">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-[#1A231E] font-serif mb-1">{selectedHome.name}</h2>
                <p className="text-base text-[#1A231E]/60">{selectedHome.address}</p>
              </div>
            </div>

            {/* Walk Score & Noise */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-[#4F6F52]/5 rounded-2xl">
                <p className="text-sm font-semibold text-[#1A231E]/60 mb-1">Walk Score</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-[#4F6F52]">{selectedHome.walkScore}</span>
                  <span className="text-sm text-[#1A231E]/60">/100</span>
                </div>
                <span
                  className={`text-sm font-medium px-2 py-1 rounded-full mt-2 inline-block ${getWalkScoreLabel(selectedHome.walkScore).color}`}
                >
                  {getWalkScoreLabel(selectedHome.walkScore).label}
                </span>
              </div>
              <div className="p-4 bg-[#4F6F52]/5 rounded-2xl">
                <p className="text-sm font-semibold text-[#1A231E]/60 mb-1">Noise Level</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-[#4F6F52]">{selectedHome.noiseLevel}</span>
                </div>
                <span
                  className={`text-sm font-medium px-2 py-1 rounded-full mt-2 inline-block ${getNoiseLevelColor(selectedHome.noiseLevel)}`}
                >
                  {selectedHome.noiseLevel === "Low"
                    ? "Peaceful Area"
                    : selectedHome.noiseLevel === "Moderate"
                      ? "Some Traffic"
                      : "Busy Area"}
                </span>
              </div>
            </div>

            {/* Amenities Categories */}
            <div className="space-y-3">
              {[
                {
                  key: "parks",
                  label: "Parks & Green Spaces",
                  icon: TreePine,
                  data: safeAmenities.parks,
                },
                {
                  key: "healthcare",
                  label: "Healthcare",
                  icon: Stethoscope,
                  data: safeAmenities.healthcare,
                },
                {
                  key: "shops",
                  label: "Shops & Pharmacy",
                  icon: ShoppingBag,
                  data: safeAmenities.shops,
                },
                { key: "transport", label: "Transport Links", icon: Bus, data: safeAmenities.transport },
              ].map((category) => {
                const Icon = category.icon
                const isExpanded = expandedCategory === category.key
                return (
                  <div key={category.key} className="border border-[#E8E5DF] rounded-xl overflow-hidden">
                    <button
                      onClick={() => setExpandedCategory(isExpanded ? null : category.key)}
                      className="w-full flex items-center justify-between p-4 hover:bg-[#FDFBF7] transition-colors min-h-[56px]"
                      aria-label={`${isExpanded ? "Collapse" : "Expand"} ${category.label}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#4F6F52]/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#4F6F52]" />
                        </div>
                        <span className="font-semibold text-[#1A231E]">{category.label}</span>
                        <Badge variant="secondary" className="bg-[#E8E5DF] text-[#1A231E]/70">
                          {(category.data ?? []).length} nearby
                        </Badge>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-[#1A231E]/40" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#1A231E]/40" />
                      )}
                    </button>
                    {isExpanded && (
                      <div className="px-4 pb-4 space-y-2">
                        {category.data.map((amenity, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 bg-[#FDFBF7] rounded-lg">
                            <span className="text-sm font-medium text-[#1A231E]">{amenity.name}</span>
                            <div className="text-right">
                              <span className="text-sm font-bold text-[#4F6F52]">{amenity.distance}</span>
                              <span className="text-sm text-[#1A231E]/50 ml-2">({amenity.walkTime} walk)</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="bg-gradient-to-br from-[#4F6F52] to-[#3d5741] rounded-3xl p-6 sm:p-8 text-white">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Location Insight</h3>
              <p className="text-white/90 leading-relaxed">
                <strong>{bestWalkScoreHome?.name}</strong> has the highest Walk Score ({bestWalkScore}/100), making it
                the most accessible for family visits on foot. All homes are within reasonable distance of NHS
                healthcare facilities, but proximity to GP surgeries varies significantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ProAreaMap }
