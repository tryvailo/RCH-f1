export function ReportFooter({ reportId, generatedAt }: { reportId: string; generatedAt: string }) {
  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  const currentTime = new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  })

  return (
    <footer className="bg-[#F9F9F9] py-12 px-4 sm:px-8 border-t border-border/50 print:bg-white print:border-t-2">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Column 1: Metadata + Disclaimer */}
          <div className="space-y-6 lg:col-span-1">
            {/* Report Metadata */}
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground/70">
                Report ID: <span className="font-mono">{reportId}</span>
              </p>
              <p className="text-xs text-muted-foreground/70">
                Generated: {generatedAt} at {currentTime}
              </p>
              <p className="text-xs text-muted-foreground/70">Data verified as of: {currentDate}</p>
            </div>

            <div className="bg-amber-100 border border-amber-300 rounded-lg p-4">
              <h3 className="font-semibold text-sm text-amber-900 mb-2 flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                Important Information
              </h3>
              <ul className="space-y-1 text-xs text-amber-900/80">
                <li>• This report is for informational purposes only</li>
                <li>• Always verify current information directly with care homes</li>
                <li>• Availability, pricing, and services may change</li>
                <li>• Funding eligibility estimates should be verified with NHS/Council</li>
              </ul>
            </div>
          </div>

          {/* Column 2: Data Sources */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-sm mb-3">Data Sources</h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>• Care Quality Commission (CQC) – Inspection ratings</li>
              <li>• Food Standards Agency (FSA) – Hygiene ratings</li>
              <li>• MSIF Data 2025–2026 – Fair cost calculations</li>
              <li>• LaingBuisson 2025 – Market pricing data</li>
              <li>• Government Adult Social Care Statistics</li>
              <li>• Age UK Reports – Family carer experiences</li>
            </ul>
          </div>

          {/* Column 3: Support & Contact */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-sm mb-3">Need Help?</h3>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:support@rightcarehome.co.uk"
                className="flex items-center gap-2 text-[#4F6F52] hover:underline font-medium"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                support@rightcarehome.co.uk
              </a>
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                We respond within 24 hours
              </p>
            </div>
          </div>

          {/* Column 4: Legal Links + Copyright */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-sm mb-3">Legal</h3>
            <nav className="flex flex-col space-y-2 text-xs">
              <a
                href="/service-legal/privacy-policy"
                className="text-muted-foreground hover:text-foreground hover:underline transition-colours"
              >
                Privacy Policy
              </a>
              <a
                href="/service-legal/terms-of-service"
                className="text-muted-foreground hover:text-foreground hover:underline transition-colours"
              >
                Terms of Service
              </a>
              <a
                href="/service-legal/cookie-policy"
                className="text-muted-foreground hover:text-foreground hover:underline transition-colours"
              >
                Cookie Policy
              </a>
              <a
                href="/service-legal/refund-policy"
                className="text-muted-foreground hover:text-foreground hover:underline transition-colours"
              >
                Refund Policy
              </a>
              <a
                href="/service-legal/accessibility"
                className="text-muted-foreground hover:text-foreground hover:underline transition-colours"
              >
                Accessibility
              </a>
            </nav>
          </div>
        </div>

        {/* Copyright - Full width bottom */}
        <div className="mt-8 pt-6 border-t border-border/30 text-centre space-y-1">
          <p className="text-[11px] text-muted-foreground/60">
            © 2025 RightCareHome Ltd. All rights reserved. Registered in England & Wales
          </p>
          <p className="text-[11px] text-muted-foreground/60">
            CQC data sourced from Care Quality Commission • FSA data sourced from Food Standards Agency
          </p>
        </div>
      </div>
    </footer>
  )
}
