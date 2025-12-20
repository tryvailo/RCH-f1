import { ShieldCheck } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-border/20 pb-12">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-centre shadow-lg shadow-primary/20">
                <ShieldCheck className="w-6 h-6 text-primary-foreground" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-serif font-bold text-background">RightCareHome</span>
            </div>
            <p className="text-muted-foreground/80 text-base leading-relaxed">
              Independent care home assessments helping families avoid financial risks and find the best care for their
              loved ones.
            </p>
          </div>

          {/* Col 2: Company */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-background">Company</h4>
            <ul className="space-y-4 text-muted-foreground/80 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary transition-colours">
                  About Us
                </Link>
              </li>
              <li>
                <a href="mailto:hello@rightcarehome.com" className="hover:text-primary transition-colours">
                  Contact
                </a>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colours">
                  Our Methodology
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-background">Services</h4>
            <ul className="space-y-4 text-muted-foreground/80 text-sm">
              <li>
                <Link href="#" className="hover:text-primary transition-colours">
                  Free Shortlist
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary transition-colours">
                  Professional Assessment
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colours">
                  Regional Reports
                </Link>
              </li>
              <li>
                <Link href="/monitoring" className="hover:text-primary transition-colours">
                  Family Care <span className="text-muted-foreground/60">(soon)</span>
                </Link>
              </li>
              <li>
                <Link href="/funding-calculator" className="hover:text-primary transition-colours">
                  Funding Calculator
                </Link>
              </li>
              <li>
                <Link href="/professional-report" className="hover:text-primary transition-colours">
                  Report Template
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-background">Legal</h4>
            <ul className="space-y-4 text-muted-foreground/80 text-sm">
              <li>
                <Link href="/service-legal/privacy-policy" className="hover:text-primary transition-colours">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/service-legal/terms-of-service" className="hover:text-primary transition-colours">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/service-legal/cookie-policy" className="hover:text-primary transition-colours">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/service-legal/refund-policy" className="hover:text-primary transition-colours">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-centre text-muted-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} RightCareHome. Registered in England & Wales. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
