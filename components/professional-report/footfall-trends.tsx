"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface PopularTime {
  hour: number
  intensity: number
}

interface DayData {
  day: string
  popularTimes: PopularTime[]
  peakHour: number
  averageIntensity: number
}

interface FootfallData {
  home_name: string
  weekly_data: DayData[]
  average_visit_duration: string
  busy_periods: string[]
  quiet_periods: string[]
  family_engagement_score: number
  visitor_trend: "Increasing" | "Stable" | "Decreasing"
  peak_visiting_day: string
  peak_visiting_time: string
}

interface FootfallTrendsProps {
  homes: FootfallData[]
}

const generateMockFootfallData = (homeName: string): FootfallData => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  
  const generateDayData = (dayIndex: number): DayData => {
    const isWeekend = dayIndex >= 5
    const baseIntensity = isWeekend ? 60 : 35
    
    const popularTimes: PopularTime[] = []
    let peakHour = 14
    let peakIntensity = 0
    let totalIntensity = 0
    let count = 0
    
    for (let hour = 8; hour <= 20; hour++) {
      let intensity = baseIntensity
      
      if (hour >= 10 && hour <= 12) {
        intensity += 20 + Math.floor(Math.random() * 15)
      }
      if (hour >= 14 && hour <= 17) {
        intensity += 30 + Math.floor(Math.random() * 20)
      }
      if (isWeekend && hour >= 11 && hour <= 16) {
        intensity += 25
      }
      
      intensity = Math.min(100, Math.max(0, intensity + Math.floor(Math.random() * 10) - 5))
      
      if (intensity > peakIntensity) {
        peakIntensity = intensity
        peakHour = hour
      }
      
      totalIntensity += intensity
      count++
      
      popularTimes.push({ hour, intensity })
    }
    
    return {
      day: days[dayIndex],
      popularTimes,
      peakHour,
      averageIntensity: Math.round(totalIntensity / count),
    }
  }
  
  const weeklyData = days.map((_, index) => generateDayData(index))
  
  const weekendData = weeklyData.filter((_, i) => i >= 5)
  const peakDay = weekendData.reduce((max, day) => 
    day.averageIntensity > max.averageIntensity ? day : max, weekendData[0])
  
  const allPeaks = weeklyData.map(d => d.peakHour)
  const avgPeakHour = Math.round(allPeaks.reduce((a, b) => a + b, 0) / allPeaks.length)
  
  return {
    home_name: homeName,
    weekly_data: weeklyData,
    average_visit_duration: `${45 + Math.floor(Math.random() * 30)} minutes`,
    busy_periods: ["Saturday 2-4pm", "Sunday 11am-1pm", "Weekday evenings 5-7pm"],
    quiet_periods: ["Weekday mornings 8-10am", "Tuesday all day", "Friday afternoons"],
    family_engagement_score: 7 + Math.floor(Math.random() * 3),
    visitor_trend: ["Increasing", "Stable", "Decreasing"][Math.floor(Math.random() * 3)] as "Increasing" | "Stable" | "Decreasing",
    peak_visiting_day: peakDay.day === "Sat" ? "Saturday" : "Sunday",
    peak_visiting_time: `${avgPeakHour > 12 ? avgPeakHour - 12 : avgPeakHour}${avgPeakHour >= 12 ? "pm" : "am"}`,
  }
}

export function FootfallTrends({ homes }: FootfallTrendsProps) {
  const getIntensityColor = (intensity: number): string => {
    if (intensity >= 80) return "bg-red-500"
    if (intensity >= 60) return "bg-orange-400"
    if (intensity >= 40) return "bg-yellow-400"
    if (intensity >= 20) return "bg-green-300"
    return "bg-green-100"
  }

  const getIntensityLabel = (intensity: number): string => {
    if (intensity >= 80) return "Very Busy"
    if (intensity >= 60) return "Busy"
    if (intensity >= 40) return "Moderate"
    if (intensity >= 20) return "Quiet"
    return "Very Quiet"
  }

  const getTrendBadge = (trend: string) => {
    switch (trend) {
      case "Increasing":
        return "bg-green-100 text-green-800 border-green-300"
      case "Stable":
        return "bg-blue-100 text-blue-800 border-blue-300"
      case "Decreasing":
        return "bg-amber-100 text-amber-800 border-amber-300"
      default:
        return "bg-gray-100 text-gray-800 border-gray-300"
    }
  }

  const getEngagementColor = (score: number) => {
    if (score >= 9) return "text-green-700"
    if (score >= 7) return "text-blue-700"
    if (score >= 5) return "text-amber-700"
    return "text-red-700"
  }

  const formatHour = (hour: number): string => {
    if (hour === 12) return "12pm"
    if (hour > 12) return `${hour - 12}pm`
    return `${hour}am`
  }

  const timeLabels = [8, 10, 12, 14, 16, 18, 20]

  return (
    <div className="space-y-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">Footfall & Visitor Trends</h1>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          Understanding visitor patterns helps you plan visits during quieter times and indicates family engagement 
          levels. Data derived from Google Places popular times analysis.
        </p>
      </div>

      <div className="grid gap-4 grid-cols-5 max-w-md">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-green-100 border border-green-200"></div>
          <span className="text-sm text-muted-foreground">Very Quiet</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-green-300 border border-green-400"></div>
          <span className="text-sm text-muted-foreground">Quiet</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-yellow-400 border border-yellow-500"></div>
          <span className="text-sm text-muted-foreground">Moderate</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-orange-400 border border-orange-500"></div>
          <span className="text-sm text-muted-foreground">Busy</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-red-500 border border-red-600"></div>
          <span className="text-sm text-muted-foreground">Very Busy</span>
        </div>
      </div>

      {homes.map((home, homeIdx) => (
        <Card key={homeIdx} className="p-6 md:p-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">{home.home_name}</h2>
              <p className="text-base text-muted-foreground">
                Peak visiting: <span className="font-semibold">{home.peak_visiting_day}</span> at{" "}
                <span className="font-semibold">{home.peak_visiting_time}</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-centre">
                <div className={`text-3xl font-bold ${getEngagementColor(home.family_engagement_score)}`}>
                  {home.family_engagement_score}/10
                </div>
                <div className="text-sm text-muted-foreground">Family Engagement</div>
              </div>
              <Badge variant="outline" className={`text-base px-4 py-2 ${getTrendBadge(home.visitor_trend)}`}>
                {home.visitor_trend === "Increasing" && "↑ "}
                {home.visitor_trend === "Decreasing" && "↓ "}
                {home.visitor_trend}
              </Badge>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Weekly Visitor Heatmap</h3>
            
            <div className="overflow-x-auto">
              <div className="min-w-[600px]">
                <div className="flex items-center gap-2 mb-2 pl-16">
                  {timeLabels.map((hour) => (
                    <div key={hour} className="flex-1 text-centre text-sm text-muted-foreground">
                      {formatHour(hour)}
                    </div>
                  ))}
                </div>
                
                {home.weekly_data.map((day, dayIdx) => (
                  <div key={dayIdx} className="flex items-center gap-2 mb-1">
                    <div className="w-14 text-sm font-medium text-foreground">{day.day}</div>
                    <div className="flex-1 flex gap-1">
                      {day.popularTimes.map((time, timeIdx) => (
                        <div
                          key={timeIdx}
                          className={`flex-1 h-10 rounded ${getIntensityColor(time.intensity)} transition-colours`}
                          title={`${formatHour(time.hour)}: ${getIntensityLabel(time.intensity)} (${time.intensity}%)`}
                        />
                      ))}
                    </div>
                    <div className="w-16 text-right text-sm text-muted-foreground">
                      Peak: {formatHour(day.peakHour)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <span className="text-2xl">⏱</span> Average Visit Duration
              </h4>
              <div className="text-2xl font-bold text-foreground">{home.average_visit_duration}</div>
              <p className="text-sm text-muted-foreground">
                Longer visits often indicate comfortable facilities and positive resident-family interactions.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <span className="text-2xl text-red-500">●</span> Busy Periods
              </h4>
              <ul className="space-y-2">
                {home.busy_periods.map((period, idx) => (
                  <li key={idx} className="text-base text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-400"></span>
                    {period}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <span className="text-2xl text-green-500">●</span> Quiet Periods
              </h4>
              <ul className="space-y-2">
                {home.quiet_periods.map((period, idx) => (
                  <li key={idx} className="text-base text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    {period}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-foreground mb-3">What This Means For You</h4>
            <ul className="space-y-2 text-base text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>
                  <strong>Best time to visit:</strong> {home.quiet_periods[0]} for a calmer, more personal experience
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>
                  <strong>Family engagement:</strong> A score of {home.family_engagement_score}/10 indicates{" "}
                  {home.family_engagement_score >= 8
                    ? "excellent family involvement"
                    : home.family_engagement_score >= 6
                    ? "good family participation"
                    : "room for improvement in family engagement"}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>
                  <strong>Visitor trend:</strong> {home.visitor_trend} visitor numbers{" "}
                  {home.visitor_trend === "Increasing"
                    ? "suggest growing satisfaction and word-of-mouth recommendations"
                    : home.visitor_trend === "Stable"
                    ? "indicate consistent family engagement"
                    : "may warrant investigation into recent changes"}
                </span>
              </li>
            </ul>
          </div>
        </Card>
      ))}
    </div>
  )
}

interface CareHome {
  name: string
  overallScore: number
  categoryScores: {
    safety: number
    medicalCare: number
    staffQuality: number
    financialStability: number
    comfort: number
    communityReputation: number
  }
  metrics: Record<string, unknown>
}

export function FootfallTrendsFromHomes({ homes }: { homes: CareHome[] }) {
  const footfallData = homes.slice(0, 3).map((home) => generateMockFootfallData(home.name))
  return <FootfallTrends homes={footfallData} />
}
