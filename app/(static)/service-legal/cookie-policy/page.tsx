import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy | RightCareHome",
  description: "Learn about how RightCareHome uses cookies and similar technologies.",
}

export default function CookiePolicyPage() {
  return (
    <main className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 text-balance">Cookie Policy</h1>

        <div className="prose prose-lg max-w-none space-y-8 text-foreground/90">
          <p className="text-xl leading-relaxed text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">1. What Are Cookies</h2>
            <p className="leading-relaxed">
              Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you
              visit our website. They are widely used to make websites work more efficiently and provide information to
              website owners.
            </p>
            <p className="leading-relaxed">
              Cookies help us provide you with a better experience by remembering your preferences, understanding how
              you use our site, and personalising content and advertisements. Most web browsers automatically accept
              cookies, but you can modify your browser settings to decline cookies if you prefer.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">2. How We Use Cookies</h2>
            <p className="leading-relaxed">We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To enable essential website functionality and security</li>
              <li>To remember your preferences and settings</li>
              <li>To understand how visitors use our website and identify areas for improvement</li>
              <li>To deliver relevant advertisements and measure their effectiveness</li>
              <li>To provide personalised content and recommendations</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">3. Types of Cookies We Use</h2>

            <h3 className="text-xl font-bold text-foreground mt-6">3.1 Essential Cookies (Strictly Necessary)</h3>
            <p className="leading-relaxed">
              These cookies are necessary for the website to function and cannot be disabled in our systems. They are
              usually only set in response to actions made by you, such as setting your privacy preferences, logging in,
              or filling in forms. Without these cookies, some parts of our website may not function properly.
            </p>
            <p className="leading-relaxed mt-2">
              <strong>Examples:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Session cookies that keep you logged in</li>
              <li>Security cookies to protect against fraud and abuse</li>
              <li>Load balancing cookies to distribute traffic efficiently</li>
            </ul>
            <p className="leading-relaxed mt-2">
              <strong>Duration:</strong> Session cookies (deleted when you close your browser) or up to 12 months
            </p>

            <h3 className="text-xl font-bold text-foreground mt-6">3.2 Analytics Cookies (Performance Cookies)</h3>
            <p className="leading-relaxed">
              These cookies help us understand how visitors interact with our website by collecting and reporting
              information anonymously. This helps us improve the website's performance and user experience.
            </p>
            <p className="leading-relaxed mt-2">
              <strong>Information collected may include:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Number of visitors and unique users</li>
              <li>Pages visited and time spent on each page</li>
              <li>Navigation paths through the website</li>
              <li>Bounce rates and exit pages</li>
              <li>Device type, browser, and operating system</li>
            </ul>
            <p className="leading-relaxed mt-2">
              <strong>Third-party services we use:</strong> Google Analytics
            </p>
            <p className="leading-relaxed">
              <strong>Duration:</strong> Up to 24 months
            </p>

            <h3 className="text-xl font-bold text-foreground mt-6">3.3 Functional Cookies (Preference Cookies)</h3>
            <p className="leading-relaxed">
              These cookies enable enhanced functionality and personalisation, such as remembering your region
              selection, language preferences, or assessment form progress. They may be set by us or by third-party
              providers whose services we use.
            </p>
            <p className="leading-relaxed mt-2">
              <strong>Examples:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Remembering your location (e.g., Birmingham, Manchester)</li>
              <li>Saving progress in assessment questionnaires</li>
              <li>Storing display preferences (e.g., text size, contrast)</li>
            </ul>
            <p className="leading-relaxed mt-2">
              <strong>Duration:</strong> Up to 12 months
            </p>

            <h3 className="text-xl font-bold text-foreground mt-6">
              3.4 Marketing Cookies (Targeting/Advertising Cookies)
            </h3>
            <p className="leading-relaxed">
              These cookies track your online activity to help advertisers deliver more relevant advertising or to limit
              how many times you see an advertisement. They may be set by us or by third-party advertising networks with
              our permission.
            </p>
            <p className="leading-relaxed mt-2">
              <strong>What they do:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Track which pages you visit and links you click</li>
              <li>Build a profile of your interests</li>
              <li>Show you relevant adverts on other websites (retargeting)</li>
              <li>Measure the effectiveness of advertising campaigns</li>
            </ul>
            <p className="leading-relaxed mt-2">
              <strong>Duration:</strong> Up to 24 months
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">4. Third-Party Cookies</h2>
            <p className="leading-relaxed">
              In addition to our own cookies, we may use various third-party cookies to report usage statistics, deliver
              advertisements, and provide social media features. These third parties may collect information about your
              online activities over time and across different websites.
            </p>
            <p className="leading-relaxed mt-2">
              <strong>Third-party services we use include:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Google Analytics:</strong> Website analytics and performance monitoring
              </li>
              <li>
                <strong>Facebook Pixel:</strong> Advertising and conversion tracking
              </li>
              <li>
                <strong>LinkedIn Insight Tag:</strong> Professional audience analytics and advertising
              </li>
            </ul>
            <p className="leading-relaxed mt-4">
              These third parties have their own privacy policies and cookie policies. We recommend reviewing them to
              understand how they use your information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">5. Managing Your Cookie Preferences</h2>
            <p className="leading-relaxed">
              You have the right to decide whether to accept or reject cookies. You can manage your cookie preferences
              in several ways:
            </p>

            <h3 className="text-xl font-bold text-foreground mt-6">5.1 Cookie Consent Banner</h3>
            <p className="leading-relaxed">
              When you first visit our website, you will see a cookie consent banner allowing you to accept or reject
              different categories of cookies. You can change your preferences at any time by clicking the "Cookie
              Settings" link in our website footer.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-6">5.2 Browser Settings</h3>
            <p className="leading-relaxed">
              Most web browsers allow you to control cookies through their settings. You can typically:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>See what cookies are stored and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block cookies from specific websites</li>
              <li>Block all cookies</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>
            <p className="leading-relaxed mt-4">
              To manage cookies in your browser, please refer to your browser's help documentation:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
            <p className="leading-relaxed mt-4">
              <strong>Please note:</strong> If you disable or refuse cookies, some parts of our website may become
              inaccessible or not function properly. Essential cookies cannot be disabled as they are necessary for
              website operation.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">6. Cookies and Personal Data</h2>
            <p className="leading-relaxed">
              Most cookies do not collect information that directly identifies you. However, some cookies may collect
              personal data when combined with other information. We treat all information collected via cookies in
              accordance with our Privacy Policy and UK GDPR requirements.
            </p>
            <p className="leading-relaxed">
              When using analytics and advertising cookies, we strive to anonymise or pseudonymise data where possible.
              You have the right to access, correct, or delete any personal data collected through cookies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">7. Do Not Track Signals</h2>
            <p className="leading-relaxed">
              Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want your
              online activity tracked. Currently, there is no universal standard for recognising and implementing DNT
              signals. We do not currently respond to DNT signals, but we respect your right to manage cookies through
              your browser settings and our cookie consent banner.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">8. Changes to This Cookie Policy</h2>
            <p className="leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our
              business practices. When we make changes, we will update the "Last updated" date at the top of this page.
              We encourage you to review this policy periodically.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">9. Contact Us</h2>
            <p className="leading-relaxed">
              If you have questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="bg-muted/50 p-6 rounded-lg mt-4">
              <p className="leading-relaxed">
                <strong>RightCareHome</strong>
                <br />
                Email:{" "}
                <a href="mailto:privacy@rightcarehome.com" className="text-primary hover:underline">
                  privacy@rightcarehome.com
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
