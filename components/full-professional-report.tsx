"use client"

import { ReportLayout } from "./report-layout"
import { ProfessionalReportDashboard } from "./professional-report-dashboard"
import { CategoryAnalysisPage } from "./category-analysis-page"
import { CommunityReputationReport } from "./community-reputation-report"
import { UserNeedMatchScore } from "./user-need-match-score"
import { DotMatrixComparison } from "./dot-matrix-comparison"
import { FairCostGapCalculator } from "./fair-cost-gap-calculator"
import { ComfortLifestyleReport } from "./comfort-lifestyle-report"
import { AppendixDataAccuracy } from "./appendix-data-accuracy"
import { ProAreaMap } from "./pro-area-map"
import { ProFundingIntegration } from "./pro-funding-integration"
import { ProExecutiveSummary } from "./pro-executive-summary"
import { ReportProgressBar } from "./report-progress-bar"
import { ProShareWithFamily } from "./pro-share-with-family"
import { FSAFoodSafetySection } from "./fsa-food-safety-section"
import { GooglePlacesInsights } from "./google-places-insights"
import { RiskAssessmentDashboard } from "./professional-report/risk-assessment-dashboard"
import { PrioritiesMatchMatrix } from "./professional-report/priorities-match-matrix"
import { NegotiationStrategy } from "./professional-report/negotiation-strategy"
import { CQCDeepDive } from "./professional-report/cqc-deep-dive"
import { FinancialStabilityAnalysis } from "./professional-report/financial-stability-analysis"
import { StaffQualityAnalysis } from "./professional-report/staff-quality-analysis"
import { EnhancedActionPlan } from "./professional-report/enhanced-action-plan"
import { CostAnalysisTabs } from "./professional-report/cost-analysis-tabs"
import { LLMInsights } from "./professional-report/llm-insights"
import { ReportNavigation } from "./professional-report/report-navigation"
import { FootfallTrendsFromHomes } from "./professional-report/footfall-trends"
import { useState, useEffect } from "react"

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
  metrics: {
    // Safety metrics (15 data points)
    cqcRating: string
    cqcSafeRating: string
    cqcEffectiveRating: string
    cqcCaringRating: string
    cqcResponsiveRating: string
    cqcWellLedRating: string
    fsaRating: number
    fallIncidents: number
    fallTrend: "improving" | "stable" | "worsening"
    staffRatio: string
    nightStaffRatio: string
    medicationErrors: number
    infectionRate: number
    emergencyResponseTime: number
    safeguardingIncidents: number

    // Medical Care metrics (12 data points)
    nursesPerBed: number
    nurseQualifications: string
    gpVisitFrequency: string
    specialistAccess: string
    hospitalAdmissions: number
    medicationManagement: string
    dementiaCareLevel: string
    palliativeCare: boolean
    physioAvailable: boolean
    dietitianAccess: boolean
    mentalHealthSupport: boolean
    diabetesManagement: string

    // Staff Quality metrics (15 data points)
    trainingRate: string
    staffTurnover: string
    avgTenure: string
    glassdoorRating: number
    staffSatisfaction: number
    qualifiedStaff: string
    supervisionFrequency: string
    continuingEducation: boolean
    languageSupport: string[]
    backgroundChecks: string
    staffRecognition: boolean
    teamMeetingFrequency: string
    staffWellbeing: string
    seniorStaffRatio: string
    agencyStaffUsage: string

    // Financial metrics (18 data points)
    altmanZScore: number
    revenue: string
    netProfit: string
    profitMargin: string
    currentRatio: number
    debtToEquity: number
    weeklyFee: number
    feeTransparency: string
    hiddenFees: string[]
    feeIncreasesHistory: string
    fundingOptionsAccepted: string[]
    valueForMoney: number
    occupancyRate: string
    yearsInOperation: number
    ownershipType: string
    parentCompany: string
    financialTrend: "improving" | "stable" | "declining"
    insuranceCoverage: string

    // Comfort metrics (20 data points)
    privateRooms: string
    roomSize: string
    enSuiteRooms: string
    activityHours: number
    activityVariety: number
    outdoorSpace: string
    gardenAccess: boolean
    petFriendly: boolean
    visitingHours: string
    wifiAvailable: boolean
    tvInRooms: boolean
    personalFurniture: boolean
    roomCustomisation: string
    diningOptions: string
    mealQuality: number
    snackAvailability: string
    laundryService: string
    housekeepingFrequency: string
    maintenanceResponse: string
    recentRefurbishment: string

    // Lifestyle metrics (10 data points)
    walkScore: number
    noiseLevel: "quiet" | "moderate" | "busy"
    noiseDBA: number
    greenSpaceAccess: number
    transportScore: number
    shopsNearby: number
    healthcareNearby: number
    communityRating: number
    localAttractions: string[]
    parkingAvailable: string

    // Community metrics (12 data points)
    googleRating: number
    googleReviewCount: number
    carehomeCoUkRating: number
    carehomeCoUkReviews: number
    familySatisfaction: number
    residentSatisfaction: number
    complaintRate: number
    complaintResolution: string
    familyEngagement: string
    communityEvents: number
    volunteerProgramme: boolean
    localPartnerships: string[]

    // Additional metrics for Executive Summary
    phoneNumber?: string
    waitingList?: string
    address?: string
  }
}

interface FullReportData {
  reportId: string
  generatedDate: string
  topChoice: CareHome
  allHomes: CareHome[]
  keyTakeaway: string
  userName?: string // Added for ProShareWithFamily
  location?: string // Added for ProShareWithFamily
}

interface FullProfessionalReportProps {
  data?: FullReportData
  reportId?: string
}

const sampleReportData: FullReportData = {
  reportId: "PROF-2025-01-27-XYZ789",
  generatedDate: "27 January 2025",
  topChoice: {
    name: "Greenfield Manor",
    overallScore: 9.2,
    categoryScores: {
      safety: 9.5,
      medicalCare: 9.0,
      staffQuality: 9.3,
      financialStability: 8.8,
      comfort: 9.4,
      communityReputation: 9.1,
    },
    metrics: {
      // Safety
      cqcRating: "Outstanding",
      cqcSafeRating: "Outstanding",
      cqcEffectiveRating: "Outstanding",
      cqcCaringRating: "Outstanding",
      cqcResponsiveRating: "Good",
      cqcWellLedRating: "Outstanding",
      fsaRating: 5,
      fallIncidents: 2,
      fallTrend: "improving",
      staffRatio: "1:4",
      nightStaffRatio: "1:6",
      medicationErrors: 1,
      infectionRate: 0.8,
      emergencyResponseTime: 2.1,
      safeguardingIncidents: 0,
      // Medical
      nursesPerBed: 2.8,
      nurseQualifications: "RGN, RMN",
      gpVisitFrequency: "Twice weekly",
      specialistAccess: "On-site consultant monthly",
      hospitalAdmissions: 3,
      medicationManagement: "Electronic MAR",
      dementiaCareLevel: "Specialist unit",
      palliativeCare: true,
      physioAvailable: true,
      dietitianAccess: true,
      mentalHealthSupport: true,
      diabetesManagement: "Excellent",
      // Staff
      trainingRate: "98%",
      staffTurnover: "12%",
      avgTenure: "4.2 years",
      glassdoorRating: 4.6,
      staffSatisfaction: 92,
      qualifiedStaff: "85%",
      supervisionFrequency: "Monthly",
      continuingEducation: true,
      languageSupport: ["English", "Polish", "Urdu"],
      backgroundChecks: "Enhanced DBS",
      staffRecognition: true,
      teamMeetingFrequency: "Weekly",
      staffWellbeing: "EAP available",
      seniorStaffRatio: "1:8",
      agencyStaffUsage: "5%",
      // Financial
      altmanZScore: 4.12,
      revenue: "£3.8M",
      netProfit: "£350K",
      profitMargin: "9.2%",
      currentRatio: 2.3,
      debtToEquity: 0.32,
      weeklyFee: 1450,
      feeTransparency: "Excellent",
      hiddenFees: ["Laundry £45/week", "Activities £35/week"],
      feeIncreasesHistory: "3.2% avg annually",
      fundingOptionsAccepted: ["Self-fund", "LA", "CHC", "Mixed"],
      valueForMoney: 8.5,
      occupancyRate: "94%",
      yearsInOperation: 18,
      ownershipType: "Private (Family)",
      parentCompany: "Independent",
      financialTrend: "stable",
      insuranceCoverage: "Comprehensive",
      // Comfort
      privateRooms: "100%",
      roomSize: "18-24 sqm",
      enSuiteRooms: "100%",
      activityHours: 18,
      activityVariety: 25,
      outdoorSpace: "2.5 acres landscaped gardens",
      gardenAccess: true,
      petFriendly: true,
      visitingHours: "8am-8pm (flexible)",
      wifiAvailable: true,
      tvInRooms: true,
      personalFurniture: true,
      roomCustomisation: "Encouraged",
      diningOptions: "3 choices per meal",
      mealQuality: 9.0,
      snackAvailability: "24/7",
      laundryService: "Included",
      housekeepingFrequency: "Daily",
      maintenanceResponse: "Same day",
      recentRefurbishment: "2023",
      // Lifestyle
      walkScore: 82,
      noiseLevel: "quiet",
      noiseDBA: 42,
      greenSpaceAccess: 95,
      transportScore: 78,
      shopsNearby: 12,
      healthcareNearby: 3,
      communityRating: 4.8,
      localAttractions: ["Park", "Library", "Cafe"],
      parkingAvailable: "Free, 20 spaces",
      // Community
      googleRating: 4.7,
      googleReviewCount: 156,
      carehomeCoUkRating: 9.4,
      carehomeCoUkReviews: 89,
      familySatisfaction: 94,
      residentSatisfaction: 91,
      complaintRate: 0.5,
      complaintResolution: "48 hours avg",
      familyEngagement: "Monthly meetings",
      communityEvents: 12,
      volunteerProgramme: true,
      localPartnerships: ["Local school", "Church", "Rotary"],
      // Additional metrics for Executive Summary
      phoneNumber: "0121 456 7890",
      address: "123 Green Lane, Birmingham, B1 1AA",
    },
  },
  allHomes: [
    // First home (same as topChoice)
    {
      name: "Greenfield Manor",
      overallScore: 9.2,
      categoryScores: {
        safety: 9.5,
        medicalCare: 9.0,
        staffQuality: 9.3,
        financialStability: 8.8,
        comfort: 9.4,
        communityReputation: 9.1,
      },
      metrics: {
        cqcRating: "Outstanding",
        cqcSafeRating: "Outstanding",
        cqcEffectiveRating: "Outstanding",
        cqcCaringRating: "Outstanding",
        cqcResponsiveRating: "Good",
        cqcWellLedRating: "Outstanding",
        fsaRating: 5,
        fallIncidents: 2,
        fallTrend: "improving",
        staffRatio: "1:4",
        nightStaffRatio: "1:6",
        medicationErrors: 1,
        infectionRate: 0.8,
        emergencyResponseTime: 2.1,
        safeguardingIncidents: 0,
        nursesPerBed: 2.8,
        nurseQualifications: "RGN, RMN",
        gpVisitFrequency: "Twice weekly",
        specialistAccess: "On-site consultant monthly",
        hospitalAdmissions: 3,
        medicationManagement: "Electronic MAR",
        dementiaCareLevel: "Specialist unit",
        palliativeCare: true,
        physioAvailable: true,
        dietitianAccess: true,
        mentalHealthSupport: true,
        diabetesManagement: "Excellent",
        trainingRate: "98%",
        staffTurnover: "12%",
        avgTenure: "4.2 years",
        glassdoorRating: 4.6,
        staffSatisfaction: 92,
        qualifiedStaff: "85%",
        supervisionFrequency: "Monthly",
        continuingEducation: true,
        languageSupport: ["English", "Polish", "Urdu"],
        backgroundChecks: "Enhanced DBS",
        staffRecognition: true,
        teamMeetingFrequency: "Weekly",
        staffWellbeing: "EAP available",
        seniorStaffRatio: "1:8",
        agencyStaffUsage: "5%",
        altmanZScore: 4.12,
        revenue: "£3.8M",
        netProfit: "£350K",
        profitMargin: "9.2%",
        currentRatio: 2.3,
        debtToEquity: 0.32,
        weeklyFee: 1450,
        feeTransparency: "Excellent",
        hiddenFees: ["Laundry £45/week", "Activities £35/week"],
        feeIncreasesHistory: "3.2% avg annually",
        fundingOptionsAccepted: ["Self-fund", "LA", "CHC", "Mixed"],
        valueForMoney: 8.5,
        occupancyRate: "94%",
        yearsInOperation: 18,
        ownershipType: "Private (Family)",
        parentCompany: "Independent",
        financialTrend: "stable",
        insuranceCoverage: "Comprehensive",
        privateRooms: "100%",
        roomSize: "18-24 sqm",
        enSuiteRooms: "100%",
        activityHours: 18,
        activityVariety: 25,
        outdoorSpace: "2.5 acres landscaped gardens",
        gardenAccess: true,
        petFriendly: true,
        visitingHours: "8am-8pm (flexible)",
        wifiAvailable: true,
        tvInRooms: true,
        personalFurniture: true,
        roomCustomisation: "Encouraged",
        diningOptions: "3 choices per meal",
        mealQuality: 9.0,
        snackAvailability: "24/7",
        laundryService: "Included",
        housekeepingFrequency: "Daily",
        maintenanceResponse: "Same day",
        recentRefurbishment: "2023",
        walkScore: 82,
        noiseLevel: "quiet",
        noiseDBA: 42,
        greenSpaceAccess: 95,
        transportScore: 78,
        shopsNearby: 12,
        healthcareNearby: 3,
        communityRating: 4.8,
        localAttractions: ["Park", "Library", "Cafe"],
        parkingAvailable: "Free, 20 spaces",
        googleRating: 4.7,
        googleReviewCount: 156,
        carehomeCoUkRating: 9.4,
        carehomeCoUkReviews: 89,
        familySatisfaction: 94,
        residentSatisfaction: 91,
        complaintRate: 0.5,
        complaintResolution: "48 hours avg",
        familyEngagement: "Monthly meetings",
        communityEvents: 12,
        volunteerProgramme: true,
        localPartnerships: ["Local school", "Church", "Rotary"],
        // Additional metrics for Executive Summary
        phoneNumber: "0121 456 7890",
        waitingList: "Short",
        address: "123 Green Lane, Birmingham, B1 1AA",
      },
    },
    {
      name: "Oakwood Lodge",
      overallScore: 8.6,
      categoryScores: {
        safety: 8.9,
        medicalCare: 8.5,
        staffQuality: 8.8,
        financialStability: 8.3,
        comfort: 8.9,
        communityReputation: 8.4,
      },
      metrics: {
        cqcRating: "Good",
        cqcSafeRating: "Good",
        cqcEffectiveRating: "Good",
        cqcCaringRating: "Outstanding",
        cqcResponsiveRating: "Good",
        cqcWellLedRating: "Good",
        fsaRating: 5,
        fallIncidents: 4,
        fallTrend: "stable",
        staffRatio: "1:5",
        nightStaffRatio: "1:7",
        medicationErrors: 2,
        infectionRate: 1.2,
        emergencyResponseTime: 2.8,
        safeguardingIncidents: 1,
        nursesPerBed: 2.4,
        nurseQualifications: "RGN",
        gpVisitFrequency: "Weekly",
        specialistAccess: "Monthly visits",
        hospitalAdmissions: 5,
        medicationManagement: "Electronic MAR",
        dementiaCareLevel: "Dedicated wing",
        palliativeCare: true,
        physioAvailable: true,
        dietitianAccess: false,
        mentalHealthSupport: true,
        diabetesManagement: "Good",
        trainingRate: "94%",
        staffTurnover: "18%",
        avgTenure: "3.1 years",
        glassdoorRating: 4.2,
        staffSatisfaction: 85,
        qualifiedStaff: "78%",
        supervisionFrequency: "Monthly",
        continuingEducation: true,
        languageSupport: ["English", "Bengali"],
        backgroundChecks: "Enhanced DBS",
        staffRecognition: true,
        teamMeetingFrequency: "Weekly",
        staffWellbeing: "Basic support",
        seniorStaffRatio: "1:10",
        agencyStaffUsage: "12%",
        altmanZScore: 3.45,
        revenue: "£2.9M",
        netProfit: "£240K",
        profitMargin: "8.3%",
        currentRatio: 1.9,
        debtToEquity: 0.45,
        weeklyFee: 1280,
        feeTransparency: "Good",
        hiddenFees: ["Activities £40/week"],
        feeIncreasesHistory: "4.1% avg annually",
        fundingOptionsAccepted: ["Self-fund", "LA", "CHC"],
        valueForMoney: 8.0,
        occupancyRate: "91%",
        yearsInOperation: 12,
        ownershipType: "Private (Group)",
        parentCompany: "Caring Homes Ltd",
        financialTrend: "stable",
        insuranceCoverage: "Standard",
        privateRooms: "95%",
        roomSize: "16-20 sqm",
        enSuiteRooms: "90%",
        activityHours: 14,
        activityVariety: 18,
        outdoorSpace: "1.5 acres gardens",
        gardenAccess: true,
        petFriendly: false,
        visitingHours: "9am-7pm",
        wifiAvailable: true,
        tvInRooms: true,
        personalFurniture: true,
        roomCustomisation: "Allowed",
        diningOptions: "2 choices per meal",
        mealQuality: 8.2,
        snackAvailability: "Daytime",
        laundryService: "Included",
        housekeepingFrequency: "Daily",
        maintenanceResponse: "24 hours",
        recentRefurbishment: "2021",
        walkScore: 68,
        noiseLevel: "moderate",
        noiseDBA: 48,
        greenSpaceAccess: 80,
        transportScore: 65,
        shopsNearby: 8,
        healthcareNearby: 2,
        communityRating: 4.5,
        localAttractions: ["Park", "Shopping centre"],
        parkingAvailable: "Free, 15 spaces",
        googleRating: 4.4,
        googleReviewCount: 98,
        carehomeCoUkRating: 8.8,
        carehomeCoUkReviews: 62,
        familySatisfaction: 88,
        residentSatisfaction: 86,
        complaintRate: 1.2,
        complaintResolution: "72 hours avg",
        familyEngagement: "Quarterly meetings",
        communityEvents: 8,
        volunteerProgramme: true,
        localPartnerships: ["Local charity"],
        // Additional metrics for Executive Summary
        phoneNumber: "0121 123 4567",
        waitingList: "Medium",
        address: "456 Oak Street, Birmingham, B2 2BB",
      },
    },
    {
      name: "Riverside Care Home",
      overallScore: 7.7,
      categoryScores: {
        safety: 8.1,
        medicalCare: 7.8,
        staffQuality: 7.6,
        financialStability: 7.5,
        comfort: 7.9,
        communityReputation: 7.2,
      },
      metrics: {
        cqcRating: "Good",
        cqcSafeRating: "Good",
        cqcEffectiveRating: "Requires Improvement",
        cqcCaringRating: "Good",
        cqcResponsiveRating: "Good",
        cqcWellLedRating: "Good",
        fsaRating: 4,
        fallIncidents: 6,
        fallTrend: "stable",
        staffRatio: "1:5",
        nightStaffRatio: "1:8",
        medicationErrors: 3,
        infectionRate: 1.5,
        emergencyResponseTime: 3.2,
        safeguardingIncidents: 1,
        nursesPerBed: 2.0,
        nurseQualifications: "RGN",
        gpVisitFrequency: "Weekly",
        specialistAccess: "Referral based",
        hospitalAdmissions: 7,
        medicationManagement: "Paper-based",
        dementiaCareLevel: "General support",
        palliativeCare: true,
        physioAvailable: false,
        dietitianAccess: false,
        mentalHealthSupport: false,
        diabetesManagement: "Standard",
        trainingRate: "88%",
        staffTurnover: "22%",
        avgTenure: "2.4 years",
        glassdoorRating: 3.8,
        staffSatisfaction: 78,
        qualifiedStaff: "72%",
        supervisionFrequency: "Bi-monthly",
        continuingEducation: true,
        languageSupport: ["English"],
        backgroundChecks: "Enhanced DBS",
        staffRecognition: false,
        teamMeetingFrequency: "Bi-weekly",
        staffWellbeing: "Basic support",
        seniorStaffRatio: "1:12",
        agencyStaffUsage: "18%",
        altmanZScore: 2.85,
        revenue: "£2.1M",
        netProfit: "£150K",
        profitMargin: "7.1%",
        currentRatio: 1.6,
        debtToEquity: 0.58,
        weeklyFee: 1150,
        feeTransparency: "Fair",
        hiddenFees: ["Laundry £35/week", "Hairdressing £25/visit"],
        feeIncreasesHistory: "4.8% avg annually",
        fundingOptionsAccepted: ["Self-fund", "LA"],
        valueForMoney: 7.5,
        occupancyRate: "87%",
        yearsInOperation: 8,
        ownershipType: "Private (Individual)",
        parentCompany: "Independent",
        financialTrend: "declining",
        insuranceCoverage: "Standard",
        privateRooms: "85%",
        roomSize: "14-18 sqm",
        enSuiteRooms: "75%",
        activityHours: 10,
        activityVariety: 12,
        outdoorSpace: "0.8 acres courtyard",
        gardenAccess: true,
        petFriendly: false,
        visitingHours: "10am-6pm",
        wifiAvailable: true,
        tvInRooms: false,
        personalFurniture: true,
        roomCustomisation: "Limited",
        diningOptions: "Set menu",
        mealQuality: 7.5,
        snackAvailability: "Set times",
        laundryService: "Extra charge",
        housekeepingFrequency: "Alternate days",
        maintenanceResponse: "48 hours",
        recentRefurbishment: "2019",
        walkScore: 55,
        noiseLevel: "moderate",
        noiseDBA: 52,
        greenSpaceAccess: 65,
        transportScore: 58,
        shopsNearby: 5,
        healthcareNearby: 1,
        communityRating: 4.0,
        localAttractions: ["River walk"],
        parkingAvailable: "Limited, 8 spaces",
        googleRating: 4.0,
        googleReviewCount: 45,
        carehomeCoUkRating: 7.9,
        carehomeCoUkReviews: 34,
        familySatisfaction: 79,
        residentSatisfaction: 77,
        complaintRate: 2.1,
        complaintResolution: "5 days avg",
        familyEngagement: "Bi-annual meetings",
        communityEvents: 4,
        volunteerProgramme: false,
        localPartnerships: ["Local charity"],
        // Additional metrics for Executive Summary
        phoneNumber: "0121 987 6543",
        waitingList: "Long",
        address: "789 River Road, Birmingham, B3 3CC",
      },
    },
    {
      name: "Meadowbrook House",
      overallScore: 7.2,
      categoryScores: {
        safety: 7.0,
        medicalCare: 7.2,
        staffQuality: 7.1,
        financialStability: 7.8,
        comfort: 7.5,
        communityReputation: 6.8,
      },
      metrics: {
        cqcRating: "Good",
        cqcSafeRating: "Requires Improvement",
        cqcEffectiveRating: "Good",
        cqcCaringRating: "Good",
        cqcResponsiveRating: "Good",
        cqcWellLedRating: "Good",
        fsaRating: 4,
        fallIncidents: 8,
        fallTrend: "stable",
        staffRatio: "1:6",
        nightStaffRatio: "1:9",
        medicationErrors: 4,
        infectionRate: 1.8,
        emergencyResponseTime: 3.5,
        safeguardingIncidents: 2,
        nursesPerBed: 1.8,
        nurseQualifications: "RGN",
        gpVisitFrequency: "Weekly",
        specialistAccess: "External referral",
        hospitalAdmissions: 9,
        medicationManagement: "Electronic MAR",
        dementiaCareLevel: "Basic training",
        palliativeCare: false,
        physioAvailable: false,
        dietitianAccess: false,
        mentalHealthSupport: false,
        diabetesManagement: "Basic",
        trainingRate: "82%",
        staffTurnover: "28%",
        avgTenure: "1.8 years",
        glassdoorRating: 3.5,
        staffSatisfaction: 72,
        qualifiedStaff: "68%",
        supervisionFrequency: "Quarterly",
        continuingEducation: false,
        languageSupport: ["English"],
        backgroundChecks: "Enhanced DBS",
        staffRecognition: false,
        teamMeetingFrequency: "Monthly",
        staffWellbeing: "None",
        seniorStaffRatio: "1:14",
        agencyStaffUsage: "25%",
        altmanZScore: 3.15,
        revenue: "£1.8M",
        netProfit: "£180K",
        profitMargin: "10%",
        currentRatio: 2.1,
        debtToEquity: 0.28,
        weeklyFee: 980,
        feeTransparency: "Good",
        hiddenFees: ["Activities £30/week"],
        feeIncreasesHistory: "3.5% avg annually",
        fundingOptionsAccepted: ["Self-fund", "LA", "CHC"],
        valueForMoney: 8.2,
        occupancyRate: "92%",
        yearsInOperation: 22,
        ownershipType: "Private (Family)",
        parentCompany: "Independent",
        financialTrend: "stable",
        insuranceCoverage: "Comprehensive",
        privateRooms: "80%",
        roomSize: "14-16 sqm",
        enSuiteRooms: "70%",
        activityHours: 8,
        activityVariety: 10,
        outdoorSpace: "0.5 acres garden",
        gardenAccess: true,
        petFriendly: true,
        visitingHours: "9am-8pm",
        wifiAvailable: true,
        tvInRooms: true,
        personalFurniture: true,
        roomCustomisation: "Allowed",
        diningOptions: "2 choices per meal",
        mealQuality: 7.8,
        snackAvailability: "Daytime",
        laundryService: "Included",
        housekeepingFrequency: "Daily",
        maintenanceResponse: "Same day",
        recentRefurbishment: "2020",
        walkScore: 62,
        noiseLevel: "quiet",
        noiseDBA: 45,
        greenSpaceAccess: 70,
        transportScore: 55,
        shopsNearby: 6,
        healthcareNearby: 2,
        communityRating: 4.2,
        localAttractions: ["Meadow walks", "Village pub"],
        parkingAvailable: "Free, 12 spaces",
        googleRating: 3.9,
        googleReviewCount: 38,
        carehomeCoUkRating: 7.5,
        carehomeCoUkReviews: 28,
        familySatisfaction: 75,
        residentSatisfaction: 74,
        complaintRate: 2.5,
        complaintResolution: "7 days avg",
        familyEngagement: "Annual meeting",
        communityEvents: 3,
        volunteerProgramme: false,
        localPartnerships: ["Local church"],
        // Additional metrics for Executive Summary
        phoneNumber: "0121 555 1212",
        waitingList: "Medium",
        address: "101 Meadow Lane, Birmingham, B4 4DD",
      },
    },
    {
      name: "Sunnydale Residence",
      overallScore: 6.4,
      categoryScores: {
        safety: 6.5,
        medicalCare: 6.8,
        staffQuality: 6.4,
        financialStability: 6.2,
        comfort: 7.1,
        communityReputation: 5.4,
      },
      metrics: {
        cqcRating: "Requires Improvement",
        cqcSafeRating: "Requires Improvement",
        cqcEffectiveRating: "Requires Improvement",
        cqcCaringRating: "Good",
        cqcResponsiveRating: "Requires Improvement",
        cqcWellLedRating: "Requires Improvement",
        fsaRating: 3,
        fallIncidents: 12,
        fallTrend: "worsening",
        staffRatio: "1:7",
        nightStaffRatio: "1:10",
        medicationErrors: 6,
        infectionRate: 2.5,
        emergencyResponseTime: 4.2,
        safeguardingIncidents: 3,
        nursesPerBed: 1.5,
        nurseQualifications: "RGN",
        gpVisitFrequency: "Fortnightly",
        specialistAccess: "Hospital referral only",
        hospitalAdmissions: 14,
        medicationManagement: "Paper-based",
        dementiaCareLevel: "Limited",
        palliativeCare: false,
        physioAvailable: false,
        dietitianAccess: false,
        mentalHealthSupport: false,
        diabetesManagement: "Basic",
        trainingRate: "75%",
        staffTurnover: "35%",
        avgTenure: "1.2 years",
        glassdoorRating: 3.1,
        staffSatisfaction: 62,
        qualifiedStaff: "60%",
        supervisionFrequency: "Quarterly",
        continuingEducation: false,
        languageSupport: ["English"],
        backgroundChecks: "Standard DBS",
        staffRecognition: false,
        teamMeetingFrequency: "Monthly",
        staffWellbeing: "None",
        seniorStaffRatio: "1:16",
        agencyStaffUsage: "35%",
        altmanZScore: 1.95,
        revenue: "£1.4M",
        netProfit: "£70K",
        profitMargin: "5%",
        currentRatio: 1.2,
        debtToEquity: 0.72,
        weeklyFee: 850,
        feeTransparency: "Poor",
        hiddenFees: ["Laundry £40/week", "Activities £45/week", "Transport £15/trip"],
        feeIncreasesHistory: "6.2% avg annually",
        fundingOptionsAccepted: ["Self-fund", "LA"],
        valueForMoney: 6.0,
        occupancyRate: "78%",
        yearsInOperation: 5,
        ownershipType: "Private (Corporate)",
        parentCompany: "Sunrise Care Holdings",
        financialTrend: "declining",
        insuranceCoverage: "Basic",
        privateRooms: "75%",
        roomSize: "12-14 sqm",
        enSuiteRooms: "60%",
        activityHours: 6,
        activityVariety: 8,
        outdoorSpace: "Small courtyard",
        gardenAccess: true,
        petFriendly: false,
        visitingHours: "2pm-5pm",
        wifiAvailable: true,
        tvInRooms: false,
        personalFurniture: false,
        roomCustomisation: "Not allowed",
        diningOptions: "Set menu",
        mealQuality: 6.5,
        snackAvailability: "Limited",
        laundryService: "Extra charge",
        housekeepingFrequency: "Alternate days",
        maintenanceResponse: "3-5 days",
        recentRefurbishment: "2017",
        walkScore: 45,
        noiseLevel: "noisy",
        noiseDBA: 58,
        greenSpaceAccess: 40,
        transportScore: 42,
        shopsNearby: 3,
        healthcareNearby: 1,
        communityRating: 3.5,
        localAttractions: ["Bus stop"],
        parkingAvailable: "Limited, 6 spaces",
        googleRating: 3.2,
        googleReviewCount: 22,
        carehomeCoUkRating: 6.2,
        carehomeCoUkReviews: 15,
        familySatisfaction: 62,
        residentSatisfaction: 58,
        complaintRate: 4.5,
        complaintResolution: "14 days avg",
        familyEngagement: "None scheduled",
        communityEvents: 1,
        volunteerProgramme: false,
        localPartnerships: [],
        // Additional metrics for Executive Summary
        phoneNumber: "0121 333 4444",
        waitingList: "Very Long",
        address: "222 Sunnydale Road, Birmingham, B5 5EE",
      },
    },
  ] as CareHome[],
  keyTakeaway:
    "Greenfield Manor demonstrates exceptional care standards with strong financial backing and experienced staff. Their recent CQC inspection showed significant improvements in medication management, and family satisfaction scores are above regional average.",
}

const sampleCQCData = {
  home_name: "Greenfield Manor",
  current_rating: {
    overall: "Outstanding",
    inspection_date: "2024-03-15",
    report_url: "https://www.cqc.org.uk/location/example",
  },
  historical_ratings: [
    {
      inspection_date: "2024-03-15",
      overall_rating: "Outstanding",
      safe: 9.5,
      effective: 9.2,
      caring: 9.8,
      responsive: 9.3,
      well_led: 9.4,
    },
    {
      inspection_date: "2022-06-10",
      overall_rating: "Good",
      safe: 9.0,
      effective: 8.8,
      caring: 9.2,
      responsive: 8.7,
      well_led: 8.9,
    },
    {
      inspection_date: "2020-09-22",
      overall_rating: "Good",
      safe: 8.5,
      effective: 8.5,
      caring: 9.0,
      responsive: 8.3,
      well_led: 8.6,
    },
  ],
  enforcement_actions: [
    {
      date: "2024-01-01",
      type: "None" as const,
      status: "N/A" as const,
      description: "No enforcement actions in past 5 years",
    },
  ],
  action_plans: [],
}

const sampleFinancialData = {
  home_name: "Greenfield Manor",
  altman_z_score: {
    current: 3.2,
    interpretation: "Safe Zone" as const,
    components: {
      working_capital: 0.8,
      retained_earnings: 0.6,
      ebit: 0.9,
      market_value: 0.5,
      sales: 0.4,
    },
  },
  companies_house_data: [
    {
      year: 2023,
      total_assets: 2500000,
      total_liabilities: 850000,
      net_profit: 180000,
      revenue: 1800000,
    },
    {
      year: 2022,
      total_assets: 2300000,
      total_liabilities: 900000,
      net_profit: 160000,
      revenue: 1700000,
    },
    {
      year: 2021,
      total_assets: 2100000,
      total_liabilities: 950000,
      net_profit: 140000,
      revenue: 1600000,
    },
  ],
  trend_analysis: {
    direction: "Improving" as const,
    confidence: "High" as const,
    explanation:
      "Assets growing steadily, debt reducing year-over-year, and profit margins improving. Strong financial trajectory indicates sustainable business model.",
  },
  stability_verdict: "Financially Secure" as const,
}

const sampleStaffData = {
  home_name: "Greenfield Manor",
  external_ratings: {
    glassdoor: 4.2,
    indeed: 4.0,
    care_quality_commission_staff_rating: 8.9,
  },
  turnover_analysis: {
    annual_turnover_rate: "12%",
    industry_average: "28%",
    verdict: "Excellent" as const,
    indicator: "Low" as const,
  },
  sample_reviews: [
    {
      source: "Glassdoor" as const,
      sentiment: "Positive" as const,
      quote:
        "Supportive management team that genuinely cares about staff wellbeing. Excellent training opportunities and clear career progression paths.",
      date: "2024-02-15",
      role: "Senior Care Assistant",
    },
    {
      source: "Indeed" as const,
      sentiment: "Positive" as const,
      quote:
        "Great team environment where residents are always the priority. Management listens to staff feedback and makes real changes.",
      date: "2024-01-08",
      role: "Registered Nurse",
    },
    {
      source: "CQC Staff Survey" as const,
      sentiment: "Negative" as const,
      quote:
        "Can be very busy during peak times, though management is working on staffing levels. Overall positive workplace.",
      date: "2023-11-20",
      role: "Care Assistant",
    },
  ],
  overall_staff_quality_score: 8.9,
}

export function FullProfessionalReport({ data, reportId: propReportId }: FullProfessionalReportProps) {
  const { reportId: dataReportId, topChoice, allHomes, keyTakeaway } = data || sampleReportData
  const finalReportId = dataReportId || propReportId // Use propReportId here

  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 21 // Updated total pages based on the changes

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Estimate current page based on scroll position
      const scrollPercent = scrollPosition / (documentHeight - windowHeight)
      const estimatedPage = Math.max(1, Math.min(totalPages, Math.ceil(scrollPercent * totalPages) + 1))

      setCurrentPage(estimatedPage)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [totalPages])

  const executiveSummaryRecommendations = allHomes
    .sort((a, b) => b.overallScore - a.overallScore)
    .slice(0, 3)
    .map((home, index) => ({
      rank: index + 1,
      name: home.name,
      overallScore: Math.round(home.overallScore),
      topStrength: getTopStrength(home),
      strengthDetail: getStrengthDetail(home),
      phoneNumber: home.metrics.phoneNumber || "Contact via report",
      waitingList: home.metrics.waitingList || "Contact to confirm",
      weeklyFee: home.metrics.weeklyFee,
      address: home.metrics.address,
    }))

  const dashboardCategoryScores = [
    {
      category: "Safety",
      score: topChoice.categoryScores.safety,
      verdict: getVerdict(topChoice.categoryScores.safety),
    },
    {
      category: "Medical Care",
      score: topChoice.categoryScores.medicalCare,
      verdict: getVerdict(topChoice.categoryScores.medicalCare),
    },
    {
      category: "Staff Quality",
      score: topChoice.categoryScores.staffQuality,
      verdict: getVerdict(topChoice.categoryScores.staffQuality),
    },
    {
      category: "Financial Stability",
      score: topChoice.categoryScores.financialStability,
      verdict: getVerdict(topChoice.categoryScores.financialStability),
    },
    {
      category: "Comfort",
      score: topChoice.categoryScores.comfort,
      verdict: getVerdict(topChoice.categoryScores.comfort),
    },
    {
      category: "Community",
      score: topChoice.categoryScores.communityReputation,
      verdict: getVerdict(topChoice.categoryScores.communityReputation),
    },
  ]

  const dotMatrixHomes = allHomes.map((home) => ({
    name: home.name,
    scores: {
      safety: home.categoryScores.safety,
      medicalCare: home.categoryScores.medicalCare,
      staffQuality: home.categoryScores.staffQuality,
      financialStability: home.categoryScores.financialStability,
      comfort: home.categoryScores.comfort,
      communityReputation: home.categoryScores.communityReputation,
    },
    overall: Math.round(home.overallScore * 10),
  }))

  const safetyMetrics = [
    {
      name: "CQC Overall Rating",
      value: "Outstanding",
      benchmark: "Good or above",
      status: "excellent" as const,
      explanation: "Highest possible rating, achieved by only 4% of care homes.",
    },
    {
      name: "Fall Incidents",
      value: "2.1/100",
      benchmark: "< 5.0",
      status: "excellent" as const,
      explanation: "Significantly below national average of 6.5.",
    },
    {
      name: "Staff-to-Resident Ratio",
      value: "1:4",
      benchmark: "1:6 or better",
      status: "excellent" as const,
      explanation: "Above industry standard for supervision.",
    },
  ]

  const medicalMetrics = [
    {
      name: "Nurse-to-Resident Ratio",
      value: "1:12",
      benchmark: "1:15 or better",
      status: "excellent" as const,
      explanation: "Above average nursing coverage.",
    },
    {
      name: "Medication Error Rate",
      value: "0.3%",
      benchmark: "< 1.0%",
      status: "excellent" as const,
      explanation: "Well below acceptable threshold.",
    },
    {
      name: "GP Visits",
      value: "Weekly",
      benchmark: "Weekly+",
      status: "excellent" as const,
      explanation: "Regular medical oversight.",
    },
  ]

  const staffMetrics = [
    {
      name: "Staff Retention Rate",
      value: "89%",
      benchmark: "> 75%",
      status: "excellent" as const,
      explanation: "High retention indicates good workplace culture.",
    },
    {
      name: "Training Hours/Year",
      value: "48hrs",
      benchmark: "> 30hrs",
      status: "excellent" as const,
      explanation: "Above mandatory requirements.",
    },
    {
      name: "Employee Satisfaction",
      value: "4.2/5",
      benchmark: "> 3.5",
      status: "excellent" as const,
      explanation: "Staff satisfaction correlates with care quality.",
    },
  ]

  const financialMetrics = [
    {
      name: "Altman Z-Score",
      value: "3.2",
      benchmark: "> 2.6",
      status: "excellent" as const,
      explanation: "Strong financial health, low bankruptcy risk.",
    },
    {
      name: "Profit Margin",
      value: "8.5%",
      benchmark: "> 5%",
      status: "excellent" as const,
      explanation: "Healthy margin for reinvestment.",
    },
    {
      name: "Debt-to-Asset Ratio",
      value: "0.35",
      benchmark: "< 0.5",
      status: "excellent" as const,
      explanation: "Low debt indicates financial stability.",
    },
  ]

  const comfortMetrics = [
    {
      name: "Private Room %",
      value: "85%",
      benchmark: "> 70%",
      status: "excellent" as const,
      explanation: "High privacy availability.",
    },
    {
      name: "Activities/Week",
      value: "28",
      benchmark: "> 15",
      status: "excellent" as const,
      explanation: "Extensive activity programme.",
    },
    {
      name: "Garden Access",
      value: "Yes",
      benchmark: "Available",
      status: "excellent" as const,
      explanation: "Outdoor space for residents.",
    },
  ]

  const safetyVerification = [
    {
      question: "Can I see your most recent CQC inspection report?",
      why: "Verifies the rating is current.",
      redFlag: "Reluctance to share or outdated reports.",
    },
    {
      question: "What is your staff ratio during night shifts?",
      why: "Night staffing is often lower.",
      redFlag: "Ratios worse than 1:8.",
    },
  ]

  const medicalVerification = [
    {
      question: "How often does a GP visit the home?",
      why: "Regular medical oversight is essential.",
      redFlag: "Less than weekly visits.",
    },
    {
      question: "What happens in a medical emergency?",
      why: "Understand emergency protocols.",
      redFlag: "Vague or unclear procedures.",
    },
  ]

  const staffVerification = [
    {
      question: "What training do carers receive?",
      why: "Training quality affects care.",
      redFlag: "Only mandatory minimum training.",
    },
    {
      question: "How long have most staff worked here?",
      why: "Tenure indicates stability.",
      redFlag: "High turnover or new staff.",
    },
  ]

  const financialVerification = [
    {
      question: "Are fees likely to increase and by how much?",
      why: "Budget planning is essential.",
      redFlag: "Vague answers or no written policy.",
    },
    {
      question: "What happens if I need more care later?",
      why: "Understand cost escalation.",
      redFlag: "Large jumps in fees for extra care.",
    },
  ]

  const comfortVerification = [
    {
      question: "Can I see a sample weekly activities schedule?",
      why: "Verify activity claims.",
      redFlag: "No printed schedule available.",
    },
    {
      question: "Can residents personalise their rooms?",
      why: "Important for feeling at home.",
      redFlag: "Strict restrictions on personal items.",
    },
  ]

  const topStrengths = [
    "Outstanding CQC rating maintained for 3 consecutive inspections",
    "24/7 on-site nursing staff with specialist training",
    "Advanced fall prevention technology",
  ]

  const topConcerns = ["No significant concerns identified"]

  const topHome = allHomes.sort((a, b) => b.overallScore - a.overallScore)[0]
  const recipientName = "Family Member" // Placeholder

  const sampleUserPriorities = [
    { name: "Outstanding CQC safety rating", importance: 9, category: "safety" as const },
    { name: "24/7 nursing care for dementia", importance: 8, category: "medical" as const },
    { name: "Low staff turnover", importance: 7, category: "staff" as const },
    { name: "Within £1000/week budget", importance: 8, category: "financial" as const },
    { name: "Private room with en-suite", importance: 6, category: "comfort" as const },
  ]

  return (
    <div className="relative">
      <ReportNavigation />

      {/* Main content wrapper with left margin to prevent TOC overlap on desktop */}
      <div className="lg:ml-72 xl:ml-80">
        <ReportProgressBar currentPage={currentPage} totalPages={totalPages} reportId={finalReportId} />

        {/* Page 1: Executive Summary with empathy messaging integrated */}
        <div id="executive-summary" className="break-after-page print:break-after-page">
          <ReportLayout reportId={finalReportId} pageNumber={1} totalPages={totalPages}>
            <ProExecutiveSummary
              homes={allHomes}
              userNeeds={{
                safetyPriority: 9,
                medicalPriority: 8,
                budgetPriority: 7,
                locationPriority: 6,
                comfortPriority: 8,
              }}
            />
          </ReportLayout>
        </div>

        {/* Page 2: Risk Assessment Dashboard */}
        <div id="risk-assessment" className="break-after-page print:break-after-page">
          <ReportLayout reportId={finalReportId} pageNumber={2} totalPages={totalPages}>
            <RiskAssessmentDashboard homes={allHomes} />
          </ReportLayout>
        </div>

        {/* Page 3: Your Priorities Match Matrix */}
        <div id="priorities-match" className="break-after-page print:break-after-page">
          <ReportLayout reportId={finalReportId} pageNumber={3} totalPages={totalPages}>
            <PrioritiesMatchMatrix userPriorities={sampleUserPriorities} homes={allHomes} />
          </ReportLayout>
        </div>

        {/* Page 4-6: Detailed Home Analysis per category */}
        <div id="home-analysis" className="break-after-page print:break-after-page">
          <ReportLayout reportId={finalReportId} pageNumber={4} totalPages={totalPages}>
            <CategoryAnalysisPage
              category="Safety"
              homes={allHomes.map((h) => ({
                name: h.name,
                score: h.categoryScores.safety,
                metrics: h.metrics,
              }))}
              topHomeMetrics={[
                {
                  name: "CQC Overall Rating",
                  value: "Outstanding",
                  benchmark: "Good",
                  status: "excellent",
                  explanation: "Highest possible regulatory rating",
                },
                {
                  name: "Safeguarding Record",
                  value: "Zero incidents",
                  benchmark: "Industry avg: 2/year",
                  status: "excellent",
                  explanation: "No safeguarding concerns in past 3 years",
                },
              ]}
              topHomeStrengths={[
                "Outstanding CQC rating maintained for 3 consecutive inspections",
                "Zero safeguarding incidents in past 36 months",
                "Advanced fall prevention technology",
              ]}
              topHomeConcerns={topConcerns}
              verificationItems={safetyVerification}
            />
          </ReportLayout>
        </div>

        {/* Page 5: CQC Deep Dive + FSA Food Safety */}
        <div id="cqc-analysis" className="break-after-page print:break-after-page">
          <ReportLayout reportId={finalReportId} pageNumber={5} totalPages={totalPages}>
            <CQCDeepDive {...sampleCQCData} />
            <FSAFoodSafetySection
              userHasDietary={true}
              dietaryNeeds={["Diabetic diet management", "Soft food preparation"]}
            />
          </ReportLayout>
        </div>

        {/* Page 6: Staff Quality Analysis */}
        <div id="staff-quality" className="break-after-page print:break-after-page">
          <ReportLayout reportId={finalReportId} pageNumber={6} totalPages={totalPages}>
            <CategoryAnalysisPage
              category="Staff Quality"
              homes={allHomes.map((h) => ({
                name: h.name,
                score: h.categoryScores.staffQuality,
                metrics: {},
              }))}
              topHomeStrengths={[
                "89% staff retention rate (industry avg: 65%)",
                "Comprehensive training exceeding requirements",
                "Low agency staff usage ensures continuity",
              ]}
              topHomeConcerns={topConcerns}
              verificationItems={staffVerification}
            />
            <StaffQualityAnalysis {...sampleStaffData} />
          </ReportLayout>
        </div>

        {/* Page 7: Financial Stability Analysis */}
        <div id="financial-stability" className="break-after-page print:break-after-page">
          <ReportLayout reportId={finalReportId} pageNumber={7} totalPages={totalPages}>
            <CategoryAnalysisPage
              category="Financial Stability"
              homes={allHomes.map((h) => ({
                name: h.name,
                score: h.categoryScores.financialStability,
                metrics: {},
              }))}
              topHomeStrengths={[
                "Strong Altman Z-Score indicating low bankruptcy risk",
                "Transparent fee structure with no hidden costs",
                "15+ years in operation with stable ownership",
              ]}
              topHomeConcerns={topConcerns}
              verificationItems={financialVerification}
            />
            <FinancialStabilityAnalysis {...sampleFinancialData} />
          </ReportLayout>
        </div>

        {/* Page 8: Community Reputation + Google Places */}
        <div id="community-reputation" className="break-after-page print:break-after-page">
          <ReportLayout reportId={finalReportId} pageNumber={8} totalPages={totalPages}>
            <CommunityReputationReport homes={allHomes} />
            <GooglePlacesInsights />
          </ReportLayout>
        </div>

        {/* Page 9: Comparative Analysis */}
        <div id="comparative-analysis" className="break-after-page print:break-after-page">
          <ReportLayout reportId={finalReportId} pageNumber={9} totalPages={totalPages}>
            <DotMatrixComparison homes={dotMatrixHomes} />
            <UserNeedMatchScore
              homes={allHomes}
              userNeeds={{
                safetyPriority: 9,
                medicalPriority: 8,
                budgetPriority: 7,
                locationPriority: 6,
                comfortPriority: 8,
              }}
            />
          </ReportLayout>
        </div>

        {/* Page 10: Fair Cost Gap Analysis */}
        <div id="fair-cost-gap" className="break-after-page print:break-after-page">
          <ReportLayout reportId={finalReportId} pageNumber={10} totalPages={totalPages}>
            <FairCostGapCalculator
              homes={allHomes.map((home) => ({
                name: home.name,
                weeklyFee: home.metrics.weeklyFee,
                fairPrice: Math.round(home.metrics.weeklyFee * 0.88),
                overchargeAmount: Math.round(home.metrics.weeklyFee * 0.12),
                overchargePercent: 12,
                negotiationPotential: Math.round(home.metrics.weeklyFee * 0.08),
              }))}
            />
          </ReportLayout>
        </div>

        {/* Page 11: Funding Options */}
        <div id="funding-cost" className="break-after-page print:break-after-page">
          <ReportLayout reportId={finalReportId} pageNumber={11} totalPages={totalPages}>
            <ProFundingIntegration />
          </ReportLayout>
        </div>

        {/* Page 12: Cost Analysis with Tabs */}
        <div id="cost-analysis-tabs" className="break-after-page print:break-after-page">
          <ReportLayout reportId={finalReportId} pageNumber={12} totalPages={totalPages}>
            <CostAnalysisTabs homes={allHomes} />
          </ReportLayout>
        </div>

        {/* Page 13: Negotiation Strategy */}
        <div id="negotiation" className="break-after-page print:break-after-page">
          <ReportLayout reportId={finalReportId} pageNumber={13} totalPages={totalPages}>
            <NegotiationStrategy homes={allHomes} />
          </ReportLayout>
        </div>

        {/* Page 14: 14-Day Action Plan */}
        <div id="action-plan" className="break-after-page print:break-after-page">
          <ReportLayout reportId={finalReportId} pageNumber={14} totalPages={totalPages}>
            <EnhancedActionPlan topChoice={topChoice} allHomes={allHomes} />
          </ReportLayout>
        </div>

        {/* Page 15: Comfort & Lifestyle (consolidated wellbeing data) */}
        <div id="comfort-lifestyle" className="break-after-page print:break-after-page">
          <ReportLayout reportId={finalReportId} pageNumber={15} totalPages={totalPages}>
            <CategoryAnalysisPage
              category="Comfort"
              homes={allHomes.map((h) => ({
                name: h.name,
                score: h.categoryScores.comfort,
                metrics: {},
              }))}
              topHomeStrengths={[
                "85% private rooms with en-suite facilities",
                "28 weekly activities including outings",
                "Beautiful gardens with accessible pathways",
              ]}
              topHomeConcerns={topConcerns}
              verificationItems={comfortVerification}
            />
            <ComfortLifestyleReport homes={allHomes} />
          </ReportLayout>
        </div>

        {/* Page 16: Area Map */}
        <div id="area-map" className="break-after-page print:break-after-page">
          <ReportLayout reportId={finalReportId} pageNumber={16} totalPages={totalPages}>
            <ProAreaMap homes={allHomes} userLocation="Manchester, UK" />
          </ReportLayout>
        </div>

        {/* Page 17: Footfall & Visitor Trends */}
        <div id="footfall-trends" className="break-after-page print:break-after-page">
          <ReportLayout reportId={finalReportId} pageNumber={17} totalPages={totalPages}>
            <FootfallTrendsFromHomes homes={allHomes} />
          </ReportLayout>
        </div>

        {/* Page 18: Professional Report Dashboard (overview) */}
        <div id="dashboard" className="break-after-page print:break-after-page">
          <ReportLayout reportId={finalReportId} pageNumber={18} totalPages={totalPages}>
            <ProfessionalReportDashboard
              topChoice={topChoice}
              allHomes={allHomes}
              categoryScores={dashboardCategoryScores}
            />
          </ReportLayout>
        </div>

        {/* Page 19: AI-Powered Expert Insights */}
        <div id="ai-insights" className="break-after-page print:break-after-page">
          <ReportLayout reportId={finalReportId} pageNumber={19} totalPages={totalPages}>
            <LLMInsights recipientName={recipientName} topHome={topChoice.name} />
          </ReportLayout>
        </div>

        {/* Page 20: Share with Family */}
        <div id="share-family" className="break-after-page print:break-after-page">
          <ReportLayout reportId={finalReportId} pageNumber={20} totalPages={totalPages}>
            <ProShareWithFamily reportId={finalReportId} recipientName={recipientName} topRecommendation={topChoice} />
          </ReportLayout>
        </div>

        {/* Page 21: Appendix */}
        <div id="appendix" className="break-after-page print:break-after-page">
          <ReportLayout reportId={finalReportId} pageNumber={21} totalPages={totalPages}>
            <AppendixDataAccuracy />
          </ReportLayout>
        </div>
      </div>
    </div>
  )
}

function getTopStrength(home: CareHome): string {
  const scores = home.categoryScores
  const categories = [
    { name: "Highest Safety", score: scores.safety },
    { name: "Best Medical Care", score: scores.medicalCare },
    { name: "Best Staff Quality", score: scores.staffQuality },
    { name: "Best Financial Stability", score: scores.financialStability },
    { name: "Most Comfortable", score: scores.comfort },
    { name: "Best Reputation", score: scores.communityReputation },
  ]

  const top = categories.reduce((a, b) => (a.score > b.score ? a : b))
  return top.name
}

function getStrengthDetail(home: CareHome): string {
  const m = home.metrics
  const scores = home.categoryScores

  const topCategory = [
    { cat: "safety", score: scores.safety },
    { cat: "medical", score: scores.medicalCare },
    { cat: "staff", score: scores.staffQuality },
    { cat: "financial", score: scores.financialStability },
    { cat: "comfort", score: scores.comfort },
    { cat: "community", score: scores.communityReputation },
  ].reduce((a, b) => (a.score > b.score ? a : b)).cat

  switch (topCategory) {
    case "safety":
      return `CQC ${m.cqcRating}, ${m.medicationErrors} medication errors`
    case "medical":
      return `${m.nursesPerBed} nurses/bed, ${m.gpVisitFrequency} GP visits`
    case "staff":
      return `${m.glassdoorRating} Glassdoor rating, ${m.staffTurnover} turnover`
    case "financial":
      return `Altman Z-Score ${m.altmanZScore}, ${m.occupancyRate} occupancy`
    case "comfort":
      return `Walk Score ${m.walkScore}, ${m.noiseLevel}dB noise level`
    case "community":
      return `${m.googleRating} Google rating, ${m.familySatisfaction}% family satisfaction`
    default:
      return "Strong overall performance"
  }
}

function getVerdict(score: number): string {
  if (score >= 9.0) return "Excellent"
  if (score >= 8.0) return "Very Good"
  if (score >= 7.0) return "Good"
  if (score >= 6.0) return "Satisfactory"
  return "Needs Improvement"
}

function getFinancialVerdict(zScore: number): "Safe" | "Grey" | "Distress" {
  if (zScore >= 2.99) return "Safe"
  if (zScore >= 1.8) return "Grey"
  return "Distress"
}
