import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Refund Policy | RightCareHome",
  description: "Our 30-day money-back guarantee and refund policy for RightCareHome professional assessment services.",
}

export default function RefundPolicyPage() {
  return (
    <main className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 text-balance">Refund Policy</h1>

        <div className="prose prose-lg max-w-none space-y-8 text-foreground/90">
          <p className="text-xl leading-relaxed text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">1. Our 30-Day Money-Back Guarantee</h2>
            <p className="leading-relaxed">
              At RightCareHome, we stand behind the quality of our Professional Assessment service. If you are not
              completely satisfied with your assessment report, we offer a 30-day money-back guarantee. This policy
              demonstrates our commitment to delivering high-quality, valuable care home recommendations to every family
              we serve.
            </p>
            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg mt-4">
              <p className="leading-relaxed font-semibold text-foreground">
                You have 30 days from the date of purchase to request a full refund if our service does not meet your
                expectations.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">2. Who Qualifies for a Refund</h2>
            <p className="leading-relaxed">You may be eligible for a full refund if:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Your Professional Assessment report was not delivered within 48 hours of receiving complete information
                from you (excluding weekends and public holidays)
              </li>
              <li>
                The report contains significant factual errors or inaccuracies that materially affect its usefulness
              </li>
              <li>The service did not meet the specifications described at the time of purchase</li>
              <li>
                You provided accurate information but the recommendations were clearly inappropriate for your stated
                needs
              </li>
              <li>Technical issues on our end prevented you from accessing your report</li>
              <li>The request is made within 30 days of purchase</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">3. Services Covered by This Policy</h2>

            <h3 className="text-xl font-bold text-foreground mt-6">3.1 Professional Assessment (£119)</h3>
            <p className="leading-relaxed">
              Our refund policy applies to the Professional Assessment service, which includes comprehensive care home
              analysis, risk identification, quality scoring, and personalised recommendations.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-6">3.2 Free Services</h3>
            <p className="leading-relaxed">
              Our Free Shortlist service is provided at no cost and therefore is not covered by this refund policy. Free
              services are provided "as-is" without any money-back guarantee.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">4. How to Request a Refund</h2>
            <p className="leading-relaxed">To request a refund, please follow these steps:</p>

            <h3 className="text-xl font-bold text-foreground mt-6">Step 1: Contact Our Support Team</h3>
            <p className="leading-relaxed">
              Email our refunds team at{" "}
              <a href="mailto:refunds@rightcarehome.com" className="text-primary hover:underline">
                refunds@rightcarehome.com
              </a>{" "}
              within 30 days of your purchase date.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-6">Step 2: Provide Required Information</h3>
            <p className="leading-relaxed">Include the following in your refund request:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your full name and email address used at purchase</li>
              <li>Order reference number (found in your confirmation email)</li>
              <li>Date of purchase</li>
              <li>Detailed reason for requesting a refund</li>
              <li>Specific concerns or issues with the assessment report (if applicable)</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-6">Step 3: Review Process</h3>
            <p className="leading-relaxed">
              Our team will review your request within 2 business days. We may contact you to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Understand your concerns in more detail</li>
              <li>Offer to revise or supplement the report to address any issues</li>
              <li>Clarify any misunderstandings about the service</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-6">Step 4: Decision and Processing</h3>
            <p className="leading-relaxed">
              We will notify you of our decision via email. If your refund is approved, it will be processed within 5-7
              business days.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">5. Refund Processing and Timing</h2>
            <p className="leading-relaxed">Once your refund has been approved:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Processing Time:</strong> 5-7 business days from approval
              </li>
              <li>
                <strong>Payment Method:</strong> Refunded to your original payment method (credit/debit card)
              </li>
              <li>
                <strong>Bank Processing:</strong> Please allow an additional 3-5 business days for the refund to appear
                in your account, depending on your card issuer
              </li>
              <li>
                <strong>Confirmation:</strong> You will receive an email confirmation once the refund has been processed
              </li>
            </ul>
            <p className="leading-relaxed mt-4">
              If you do not see the refund in your account within the expected timeframe, please check with your bank or
              card issuer, as processing times can vary. If the issue persists, contact us for assistance.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">6. What Happens After a Refund</h2>
            <p className="leading-relaxed">Once a refund has been processed:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You will no longer have access to the Professional Assessment report</li>
              <li>Any personalised recommendations or follow-up support will be discontinued</li>
              <li>We may request that you delete or destroy any copies of the report you have saved</li>
              <li>The transaction will be marked as refunded in our records</li>
            </ul>
            <p className="leading-relaxed mt-4">
              You remain welcome to use our Free Shortlist service or purchase a new Professional Assessment at any time
              in the future.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">
              7. Exceptions and Non-Refundable Situations
            </h2>
            <p className="leading-relaxed">Refunds will not be issued in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Late Requests:</strong> Refund requests made more than 30 days after purchase
              </li>
              <li>
                <strong>Change of Mind:</strong> You changed your mind after receiving a complete and accurate report
                that met all specifications
              </li>
              <li>
                <strong>Inaccurate Information:</strong> You provided incorrect, incomplete, or misleading information
                that affected the quality of the assessment
              </li>
              <li>
                <strong>External Factors:</strong> Care home quality changed after report delivery, or care homes on the
                shortlist became unavailable
              </li>
              <li>
                <strong>Subjective Preferences:</strong> The recommendations met the criteria you specified, but you
                later decided you prefer different criteria
              </li>
              <li>
                <strong>Delays Beyond Our Control:</strong> Delivery was delayed due to incomplete information from you,
                your email provider blocking our emails, or other factors outside our control
              </li>
              <li>
                <strong>Duplicated Purchases:</strong> You accidentally purchased the service multiple times
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">8. Partial Refunds</h2>
            <p className="leading-relaxed">
              In certain circumstances, we may offer a partial refund rather than a full refund. This may apply when:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Minor errors or omissions were identified and corrected, but you prefer a refund</li>
              <li>The report was delivered slightly late, but you still received value from it</li>
              <li>You used a significant portion of our follow-up support services before requesting a refund</li>
            </ul>
            <p className="leading-relaxed mt-4">
              Partial refund amounts will be determined on a case-by-case basis and clearly communicated to you before
              processing.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">9. Chargebacks and Payment Disputes</h2>
            <p className="leading-relaxed">
              We encourage you to contact us directly before initiating a chargeback or payment dispute with your bank
              or card issuer. Chargebacks can have serious consequences for both parties:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Chargebacks incur additional fees and administrative costs</li>
              <li>Initiating a chargeback may result in suspension of your access to our services</li>
              <li>We may be unable to provide refunds for future purchases if chargebacks are filed</li>
            </ul>
            <p className="leading-relaxed mt-4">
              If you have concerns about a charge, please contact us first at{" "}
              <a href="mailto:refunds@rightcarehome.com" className="text-primary hover:underline">
                refunds@rightcarehome.com
              </a>
              . We are committed to resolving disputes fairly and promptly.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">10. Free Services and No-Cost Offerings</h2>
            <p className="leading-relaxed">
              Our Free Shortlist service and other no-cost offerings are provided without charge and are not covered by
              this refund policy. These services are provided "as-is" and "as available" without any guarantees or
              warranties.
            </p>
            <p className="leading-relaxed">
              If you are dissatisfied with a free service, we welcome your feedback at{" "}
              <a href="mailto:support@rightcarehome.com" className="text-primary hover:underline">
                support@rightcarehome.com
              </a>
              , and we will do our best to address your concerns.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">11. Changes to This Refund Policy</h2>
            <p className="leading-relaxed">
              We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon
              posting on our website. The policy in effect at the time of your purchase will govern your refund
              eligibility.
            </p>
            <p className="leading-relaxed">
              We will notify users of material changes by updating the "Last updated" date at the top of this page. We
              encourage you to review this policy before making a purchase.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">12. Your Rights Under UK Consumer Law</h2>
            <p className="leading-relaxed">
              This refund policy does not affect your statutory rights under UK consumer protection law. Under the
              Consumer Rights Act 2015, you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Receive services performed with reasonable care and skill</li>
              <li>Receive services as described</li>
              <li>Have any information provided be accurate</li>
            </ul>
            <p className="leading-relaxed mt-4">
              If our service fails to meet these standards, you may be entitled to a refund, price reduction, or
              re-performance of the service, regardless of the terms in this policy.
            </p>
            <p className="leading-relaxed">
              For more information about your consumer rights, visit the Citizens Advice website at{" "}
              <a
                href="https://www.citizensadvice.org.uk"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.citizensadvice.org.uk
              </a>{" "}
              or contact the Citizens Advice consumer helpline on 0808 223 1133.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">13. Contact Us</h2>
            <p className="leading-relaxed">
              If you have questions about this Refund Policy or need assistance with a refund request, please contact
              us:
            </p>
            <div className="bg-muted/50 p-6 rounded-lg mt-4">
              <p className="leading-relaxed">
                <strong>Refunds Team</strong>
                <br />
                RightCareHome
                <br />
                Email:{" "}
                <a href="mailto:refunds@rightcarehome.com" className="text-primary hover:underline">
                  refunds@rightcarehome.com
                </a>
                <br />
                Support:{" "}
                <a href="mailto:support@rightcarehome.com" className="text-primary hover:underline">
                  support@rightcarehome.com
                </a>
                <br />
                Post: [Your Registered Address]
              </p>
            </div>
            <p className="leading-relaxed mt-4">
              We aim to respond to all refund enquiries within 2 business days (Monday to Friday, excluding public
              holidays).
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
