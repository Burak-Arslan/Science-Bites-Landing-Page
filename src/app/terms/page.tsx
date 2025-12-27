import Link from "next/link";

export const metadata = {
  title: "Terms of Service - Science Bites",
  description: "Science Bites Terms of Service - Read our terms and conditions for using our educational platform.",
};

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Header */}
      <header className="w-full py-5 px-6 border-b border-white/10 sticky top-0 bg-black/90 backdrop-blur-md z-50">
        <nav className="max-w-3xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="font-[family-name:var(--font-playfair)] text-xl font-semibold hover:text-purple-400 transition-colors"
          >
            Science Bites
          </Link>
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </nav>
      </header>

      {/* Content */}
      <main className="flex-1 py-10 px-6">
        <article className="max-w-3xl mx-auto">
          {/* Page Header */}
          <div className="mb-10 text-center">
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-3">
              Terms of Service
            </h1>
            <p className="text-gray-500 text-sm">
              Last updated: December 28, 2024
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-14 text-gray-300 leading-7">

            {/* Acceptance */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the Science Bites mobile application or website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
              <p className="mt-4">
                We reserve the right to update these terms at any time. Your continued use of Science Bites after any changes constitutes acceptance of the new terms.
              </p>
            </section>

            {/* Description */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10">
                2. Service Description
              </h2>
              <p className="mb-5">
                Science Bites is an educational platform designed to make science fun and accessible for children and families. Our services include:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-2">Interactive Lessons</h3>
                  <p className="text-sm text-gray-400">Engaging science lessons designed for young learners with visual content.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-2">Experiments & Activities</h3>
                  <p className="text-sm text-gray-400">Hands-on experiments and activities to reinforce learning concepts.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-2">Progress Tracking</h3>
                  <p className="text-sm text-gray-400">Track learning progress and achievements with detailed analytics.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-2">Gamification</h3>
                  <p className="text-sm text-gray-400">Rewards, badges, and challenges to keep learners motivated.</p>
                </div>
              </div>
            </section>

            {/* User Accounts */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10">
                3. User Accounts
              </h2>
              <p className="mb-5">When creating an account, you agree to:</p>
              <ul className="space-y-3">
                {[
                  "Provide accurate and complete information during registration",
                  "Maintain the security of your account credentials",
                  "Accept responsibility for all activities under your account",
                  "Not share your account with others or create multiple accounts",
                  "Notify us immediately of any unauthorized account access",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Acceptable Use */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10">
                4. Acceptable Use
              </h2>
              <p className="mb-5">You agree not to:</p>
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5 space-y-3">
                {[
                  "Use our services for any illegal or unauthorized purpose",
                  "Attempt to hack, reverse engineer, or compromise our systems",
                  "Share, copy, or distribute our content without permission",
                  "Harass, abuse, or harm other users of the platform",
                  "Upload malicious content or attempt to spread viruses",
                  "Interfere with the proper functioning of our services",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10">
                5. Intellectual Property
              </h2>
              <p>
                All content on Science Bites, including but not limited to text, graphics, logos, images, videos, animations, and software, is the property of Science Bites or its content suppliers and is protected by copyright and intellectual property laws.
              </p>
              <p className="mt-4">
                You may not reproduce, distribute, modify, or create derivative works from our content without explicit written permission.
              </p>
            </section>

            {/* Subscriptions */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10">
                6. Subscriptions & Payments
              </h2>
              <p className="mb-5">For premium features:</p>
              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <table className="w-full">
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="py-3 px-5 text-white font-medium">Billing</td>
                      <td className="py-3 px-5 text-gray-400">Processed through App Store or Google Play</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-5 text-white font-medium">Auto-Renewal</td>
                      <td className="py-3 px-5 text-gray-400">Subscriptions renew automatically unless cancelled</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-5 text-white font-medium">Cancellation</td>
                      <td className="py-3 px-5 text-gray-400">Cancel anytime through your app store settings</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-5 text-white font-medium">Refunds</td>
                      <td className="py-3 px-5 text-gray-400">Subject to app store refund policies</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Disclaimer */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10">
                7. Disclaimer of Warranties
              </h2>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5 mb-5">
                <p className="text-amber-200">
                  <strong>Important:</strong> Science Bites is provided &quot;as is&quot; without warranties of any kind, either express or implied.
                </p>
              </div>
              <p>
                We do not guarantee that our services will be uninterrupted, error-free, or completely secure. Educational content is provided for informational purposes and should not replace professional advice.
              </p>
              <p className="mt-4">
                Experiments and activities should be performed under appropriate adult supervision. We are not responsible for any injuries or damages resulting from activities performed based on our content.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10">
                8. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, Science Bites and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
              </p>
              <p className="mt-4">
                Our total liability for any claims arising from these terms or your use of our services shall not exceed the amount you paid us in the twelve months preceding the claim.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10">
                9. Termination
              </h2>
              <p>
                We reserve the right to suspend or terminate your account at any time for violation of these terms or for any other reason at our sole discretion.
              </p>
              <p className="mt-4">
                You may delete your account at any time through the app settings. Upon termination, your right to use our services will immediately cease.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10">
                10. Governing Law
              </h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of Turkey, without regard to its conflict of law provisions.
              </p>
              <p className="mt-4">
                Any disputes arising from these terms or your use of our services shall be resolved in the courts of Turkey.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10">
                11. Contact Us
              </h2>
              <p className="mb-5">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email us at</p>
                    <a href="mailto:info@dasyatisstudio.com" className="text-lg text-white hover:text-purple-400 transition-colors font-semibold">
                      info@dasyatisstudio.com
                    </a>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 px-6 border-t border-white/10 mt-10">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Science Bites. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
