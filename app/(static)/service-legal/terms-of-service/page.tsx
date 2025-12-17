import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | RightCareHome",
  description: "Terms and conditions for using RightCareHome care home assessment services.",
}

export default function TermsOfServicePage() {
  return (
    <main className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 text-balance">
          Terms of Service
        </h1>

        <div className="prose prose-lg max-w-none space-y-8 text-foreground/90">
          <p className="text-xl leading-relaxed text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing or using RightCareHome services (the "Service"), you agree to be bound by these Terms of
              Service ("Terms") and our Privacy Policy. If you do not agree to these Terms, please do not use our
              Service. These Terms constitute a legally binding agreement between you and RightCareHome.
            </p>
            <p className="leading-relaxed">
              You must be at least 18 years old to use our Service. By using the Service, you represent and warrant that
              you are of legal age to form a binding contract.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">2. Description of Service</h2>
            <p className="leading-relaxed">
              RightCareHome provides independent care home assessment and recommendation services to help families make
              informed decisions. Our services include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Free Shortlist Service:</strong> Basic care home recommendations based on location and care type
                preferences
              </li>
              <li>
                <strong>Professional Assessment (£119):</strong> Comprehensive analysis including risk identification,
                quality scoring, and detailed comparison of care homes
              </li>
              <li>
                <strong>Regional Market Analysis:</strong> Insights into local care home markets, pricing trends, and
                availability
              </li>
              <li>
                <strong>Educational Resources:</strong> Guides, articles, and information about care home selection
              </li>
            </ul>
            <p className="leading-relaxed mt-4">
              We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time without
              prior notice.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">3. Plans and Pricing</h2>

            <h3 className="text-xl font-bold text-foreground mt-6">3.1 Free Service</h3>
            <p className="leading-relaxed">
              Our Free Shortlist Service is provided at no cost and includes basic care home recommendations. This
              service is offered "as-is" without warranties of any kind.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-6">3.2 Professional Assessment</h3>
            <p className="leading-relaxed">
              The Professional Assessment is available for a one-time fee of £119 (inclusive of VAT). This service
              includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Comprehensive risk analysis and quality scoring</li>
              <li>Detailed comparison of suitable care homes</li>
              <li>Financial analysis and funding guidance</li>
              <li>Personalised recommendations based on specific needs</li>
              <li>Written report delivered within 48 hours</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">4. Payment Terms</h2>
            <p className="leading-relaxed">
              Payment for Professional Assessment services must be made in full at the time of purchase. We accept major
              credit and debit cards processed securely through our payment provider. All prices are displayed in
              British Pounds (£) and include VAT where applicable.
            </p>
            <p className="leading-relaxed">
              You authorise us to charge the payment method provided for the services ordered. If payment fails, we
              reserve the right to suspend service delivery until payment is received.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">5. Service Delivery and Performance</h2>
            <p className="leading-relaxed">
              Professional Assessment reports are typically delivered via email within 48 hours of receiving complete
              information from you. Delivery times may be extended during peak periods or if additional information is
              required.
            </p>
            <p className="leading-relaxed">
              Delays beyond our control (such as incomplete information, system outages, or force majeure events) do not
              constitute a breach of these Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">6. Information Accuracy and Limitations</h2>
            <p className="leading-relaxed">
              Whilst we strive to provide accurate and up-to-date information, we rely on publicly available data from
              care home providers, regulatory bodies (such as the Care Quality Commission), and other third-party
              sources. We cannot guarantee the absolute accuracy, completeness, or timeliness of all information.
            </p>
            <p className="leading-relaxed">
              Our assessments and recommendations are based on available data and general criteria. They do not
              constitute professional medical, legal, or financial advice. You should conduct your own due diligence,
              visit care homes in person, and consult with appropriate professionals before making final decisions.
            </p>
            <p className="leading-relaxed">
              Care home quality, pricing, and availability can change. Information current at the time of report
              generation may become outdated.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">7. Intellectual Property Rights</h2>
            <p className="leading-relaxed">
              All content, features, and functionality of the Service, including but not limited to text, graphics,
              logos, software, and assessment methodologies, are the exclusive property of RightCareHome and are
              protected by UK and international copyright, trademark, and other intellectual property laws.
            </p>
            <p className="leading-relaxed">
              You are granted a limited, non-exclusive, non-transferable licence to access and use the Service for
              personal, non-commercial purposes. You may not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reproduce, distribute, or publicly display any content without our written consent</li>
              <li>Reverse engineer or attempt to extract our proprietary algorithms or methodologies</li>
              <li>Use our Service to create a competing product or service</li>
              <li>Remove or modify any copyright, trademark, or proprietary notices</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">
              8. Your Responsibilities and Prohibited Conduct
            </h2>
            <p className="leading-relaxed">You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate, complete, and current information when using our Service</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Use the Service in compliance with all applicable laws and regulations</li>
              <li>Notify us immediately of any unauthorised use of your account</li>
            </ul>
            <p className="leading-relaxed mt-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the Service for any unlawful purpose or in violation of these Terms</li>
              <li>Attempt to gain unauthorised access to our systems or networks</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Upload viruses, malware, or other malicious code</li>
              <li>Harass, abuse, or harm other users or our staff</li>
              <li>Impersonate any person or entity</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">
              9. Limitation of Liability and Disclaimers
            </h2>
            <p className="leading-relaxed">
              <strong>To the fullest extent permitted by law:</strong>
            </p>
            <p className="leading-relaxed">
              The Service is provided "as is" and "as available" without warranties of any kind, either express or
              implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or
              non-infringement.
            </p>
            <p className="leading-relaxed">
              RightCareHome provides information and analysis to assist in care home selection. We are not responsible
              for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The quality, safety, or suitability of any care home</li>
              <li>Actions or omissions of care home providers</li>
              <li>Decisions you make based on our recommendations</li>
              <li>Changes in care home quality, pricing, or availability after report delivery</li>
              <li>Errors or omissions in third-party data we rely upon</li>
            </ul>
            <p className="leading-relaxed mt-4">
              In no event shall RightCareHome be liable for any indirect, incidental, special, consequential, or
              punitive damages, including but not limited to loss of profits, data, or goodwill, arising out of or
              relating to your use of the Service.
            </p>
            <p className="leading-relaxed">
              Our total liability to you for all claims arising from your use of the Service shall not exceed the amount
              you paid for the Service in the 12 months preceding the claim, or £119, whichever is greater.
            </p>
            <p className="leading-relaxed">
              Nothing in these Terms excludes or limits our liability for death or personal injury caused by negligence,
              fraud, or any liability that cannot be excluded by law.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">10. Refund Policy</h2>
            <p className="leading-relaxed">
              Our refund policy for Professional Assessment services is detailed in our separate Refund Policy document.
              Please review it carefully before purchasing. In summary, refunds are available within 30 days of purchase
              under certain conditions, such as non-delivery or significant errors in the report.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">11. Termination</h2>
            <p className="leading-relaxed">
              We may suspend or terminate your access to the Service immediately, without prior notice or liability, for
              any reason, including if you breach these Terms. Upon termination, your right to use the Service will
              cease immediately.
            </p>
            <p className="leading-relaxed">
              You may stop using the Service at any time. Termination does not affect any rights or obligations that
              arose before termination.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">12. Governing Law and Dispute Resolution</h2>
            <p className="leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of England and Wales, without
              regard to conflict of law principles.
            </p>
            <p className="leading-relaxed">
              Any disputes arising from these Terms or your use of the Service shall be subject to the exclusive
              jurisdiction of the courts of England and Wales.
            </p>
            <p className="leading-relaxed">
              Before initiating legal proceedings, we encourage you to contact us to seek an informal resolution of any
              dispute.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">13. Changes to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify you of material changes by posting
              the updated Terms on our website and updating the "Last updated" date. Changes become effective
              immediately upon posting.
            </p>
            <p className="leading-relaxed">
              Your continued use of the Service after changes are posted constitutes your acceptance of the revised
              Terms. If you do not agree to the changes, you must stop using the Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">14. Severability</h2>
            <p className="leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid by a court of competent
              jurisdiction, that provision shall be modified to reflect the parties' intention, or if modification is
              not possible, it shall be severed. The remaining provisions shall continue in full force and effect.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">15. Entire Agreement</h2>
            <p className="leading-relaxed">
              These Terms, together with our Privacy Policy, Cookie Policy, and Refund Policy, constitute the entire
              agreement between you and RightCareHome regarding the Service and supersede all prior agreements and
              understandings, whether written or oral.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">16. Contact Information</h2>
            <p className="leading-relaxed">For questions about these Terms, please contact us:</p>
            <div className="bg-muted/50 p-6 rounded-lg mt-4">
              <p className="leading-relaxed">
                <strong>RightCareHome</strong>
                <br />
                Email:{" "}
                <a href="mailto:legal@rightcarehome.com" className="text-primary hover:underline">
                  legal@rightcarehome.com
                </a>
                <br />
                Post: [Your Registered Address]
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
