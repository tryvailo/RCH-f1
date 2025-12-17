import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | RightCareHome",
  description:
    "Learn how RightCareHome collects, uses, and protects your personal information in compliance with UK GDPR.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 text-balance">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none space-y-8 text-foreground/90">
          <p className="text-xl leading-relaxed text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">1. Introduction</h2>
            <p className="leading-relaxed">
              RightCareHome ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when you use our care home assessment
              services. We are registered as a data controller under the UK General Data Protection Regulation (UK GDPR)
              and the Data Protection Act 2018.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">2. What Information We Collect</h2>

            <h3 className="text-xl font-bold text-foreground mt-6">2.1 Information You Provide</h3>
            <p className="leading-relaxed">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal details: name, email address, telephone number, and postal address</li>
              <li>Care requirements: location preferences, type of care needed, mobility and medical needs</li>
              <li>Budget information: funding sources and available budget ranges</li>
              <li>
                Payment details: billing information for professional services (processed securely via our payment
                provider)
              </li>
              <li>Communications: enquiries, feedback, and correspondence with our support team</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-6">2.2 Information Collected Automatically</h3>
            <p className="leading-relaxed">When you visit our website, we automatically collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Device information: IP address, browser type, operating system</li>
              <li>Usage data: pages viewed, time spent on pages, navigation paths</li>
              <li>Cookies and similar technologies (see our Cookie Policy for details)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">3. How We Use Your Information</h2>
            <p className="leading-relaxed">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and deliver our care home assessment services and personalised recommendations</li>
              <li>Process your transactions and send related information, including invoices and receipts</li>
              <li>
                Communicate with you about our services, including technical notices, updates, and support messages
              </li>
              <li>Respond to your enquiries, comments, and questions</li>
              <li>Analyse usage patterns to improve our services and develop new features</li>
              <li>Detect, prevent, and address technical issues, fraud, or security concerns</li>
              <li>Comply with legal obligations and enforce our Terms of Service</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">4. Legal Basis for Processing (UK GDPR)</h2>
            <p className="leading-relaxed">We process your personal data under the following legal bases:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Contract Performance:</strong> To fulfil our agreement to provide assessment services
              </li>
              <li>
                <strong>Legitimate Interests:</strong> To improve our services, ensure security, and analyse usage
              </li>
              <li>
                <strong>Consent:</strong> For marketing communications (you may withdraw consent at any time)
              </li>
              <li>
                <strong>Legal Obligation:</strong> To comply with accounting, tax, and regulatory requirements
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">5. Sharing Your Information</h2>
            <p className="leading-relaxed">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Service Providers:</strong> Payment processors, email services, and hosting providers who assist
                in operating our services
              </li>
              <li>
                <strong>Professional Advisers:</strong> Lawyers, accountants, and auditors where necessary
              </li>
              <li>
                <strong>Regulatory Authorities:</strong> When required by law or to protect our legal rights
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets
              </li>
            </ul>
            <p className="leading-relaxed mt-4">
              All third parties are required to maintain the confidentiality and security of your information and use it
              only for the purposes we specify.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">6. Data Security</h2>
            <p className="leading-relaxed">
              We implement appropriate technical and organisational measures to protect your personal information
              against unauthorised access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>SSL/TLS encryption for data transmission</li>
              <li>Secure password-protected databases</li>
              <li>Regular security assessments and updates</li>
              <li>Limited staff access on a need-to-know basis</li>
              <li>Secure data backup and recovery procedures</li>
            </ul>
            <p className="leading-relaxed mt-4">
              Whilst we take all reasonable precautions, no method of transmission over the internet is 100% secure. We
              cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">7. Your Rights Under UK GDPR</h2>
            <p className="leading-relaxed">You have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Right of Access:</strong> Request a copy of the personal data we hold about you
              </li>
              <li>
                <strong>Right to Rectification:</strong> Correct inaccurate or incomplete data
              </li>
              <li>
                <strong>Right to Erasure:</strong> Request deletion of your personal data ("right to be forgotten")
              </li>
              <li>
                <strong>Right to Restrict Processing:</strong> Limit how we use your data
              </li>
              <li>
                <strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format
              </li>
              <li>
                <strong>Right to Object:</strong> Object to processing based on legitimate interests or for marketing
              </li>
              <li>
                <strong>Right to Withdraw Consent:</strong> Withdraw consent for processing at any time
              </li>
              <li>
                <strong>Right to Lodge a Complaint:</strong> Contact the Information Commissioner's Office (ICO)
              </li>
            </ul>
            <p className="leading-relaxed mt-4">
              To exercise any of these rights, please contact us at privacy@rightcarehome.com. We will respond within
              one month of receiving your request.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">8. Data Retention</h2>
            <p className="leading-relaxed">
              We retain your personal information for as long as necessary to fulfil the purposes outlined in this
              Privacy Policy, unless a longer retention period is required by law. Specifically:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Account information: Retained whilst your account is active and for 7 years thereafter for legal and
                accounting purposes
              </li>
              <li>Assessment data: Retained for 3 years to provide ongoing support and improve our services</li>
              <li>Marketing data: Retained until you unsubscribe or request deletion</li>
              <li>Analytics data: Anonymised and retained indefinitely for statistical purposes</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">9. Children's Privacy</h2>
            <p className="leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
              information from children. If you become aware that a child has provided us with personal information,
              please contact us immediately, and we will take steps to delete such information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">10. International Data Transfers</h2>
            <p className="leading-relaxed">
              Your information is primarily stored and processed within the United Kingdom. If we transfer your data
              outside the UK or European Economic Area (EEA), we ensure appropriate safeguards are in place, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Standard Contractual Clauses approved by the UK ICO</li>
              <li>Adequacy decisions confirming equivalent data protection standards</li>
              <li>Other legally approved transfer mechanisms</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">11. Changes to This Privacy Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal,
              operational, or regulatory reasons. We will notify you of any material changes by posting the updated
              policy on our website and updating the "Last updated" date. We encourage you to review this policy
              periodically.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">12. Contact Us and Complaints</h2>
            <p className="leading-relaxed">
              If you have any questions, concerns, or complaints about this Privacy Policy or our data practices, please
              contact us:
            </p>
            <div className="bg-muted/50 p-6 rounded-lg mt-4">
              <p className="leading-relaxed">
                <strong>Data Protection Officer</strong>
                <br />
                RightCareHome
                <br />
                Email:{" "}
                <a href="mailto:privacy@rightcarehome.com" className="text-primary hover:underline">
                  privacy@rightcarehome.com
                </a>
                <br />
                Post: [Your Registered Address]
              </p>
            </div>
            <p className="leading-relaxed mt-4">
              You also have the right to lodge a complaint with the Information Commissioner's Office (ICO), the UK's
              supervisory authority for data protection:
            </p>
            <div className="bg-muted/50 p-6 rounded-lg mt-4">
              <p className="leading-relaxed">
                <strong>Information Commissioner's Office</strong>
                <br />
                Wycliffe House, Water Lane
                <br />
                Wilmslow, Cheshire SK9 5AF
                <br />
                Telephone: 0303 123 1113
                <br />
                Website:{" "}
                <a
                  href="https://ico.org.uk"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.ico.org.uk
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
