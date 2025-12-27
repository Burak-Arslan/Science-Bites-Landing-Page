import Link from "next/link";

export const metadata = {
  title: "Terms of Service - Science Bites",
  description: "Science Bites Terms of Service - Read our terms and conditions for using our educational platform.",
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link
            href="/"
            className="font-[family-name:var(--font-playfair)] text-xl font-semibold hover:text-purple-400 transition-colors"
          >
            Science Bites
          </Link>
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Title */}
        <div className="mb-12">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-500">
            Last updated: December 28, 2024
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">

          {/* 1. Acceptance */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10">
              1. Acceptance of Terms
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                By accessing or using the Science Bites mobile application or website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
              <p>
                We reserve the right to update these terms at any time. Your continued use of Science Bites after any changes constitutes acceptance of the new terms.
              </p>
            </div>
          </section>

          {/* 2. Service Description */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10">
              2. Service Description
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Science Bites is an educational platform designed to make science fun and accessible for children and families. Our services include:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-medium mb-1">Interactive Lessons</h3>
                <p className="text-gray-400">Engaging science lessons designed for young learners with visual content.</p>
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Experiments & Activities</h3>
                <p className="text-gray-400">Hands-on experiments and activities to reinforce learning concepts.</p>
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Progress Tracking</h3>
                <p className="text-gray-400">Track learning progress and achievements with detailed analytics.</p>
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Gamification</h3>
                <p className="text-gray-400">Rewards, badges, and challenges to keep learners motivated.</p>
              </div>
            </div>
          </section>

          {/* 3. User Accounts */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10">
              3. User Accounts
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              When creating an account, you agree to:
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-purple-500 mt-1">•</span>
                <span>Provide accurate and complete information during registration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 mt-1">•</span>
                <span>Maintain the security of your account credentials</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 mt-1">•</span>
                <span>Accept responsibility for all activities under your account</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 mt-1">•</span>
                <span>Not share your account with others or create multiple accounts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 mt-1">•</span>
                <span>Notify us immediately of any unauthorized account access</span>
              </li>
            </ul>
          </section>

          {/* 4. Acceptable Use */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10">
              4. Acceptable Use
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-purple-500 mt-1">•</span>
                <span>Use our services for any illegal or unauthorized purpose</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 mt-1">•</span>
                <span>Attempt to hack, reverse engineer, or compromise our systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 mt-1">•</span>
                <span>Share, copy, or distribute our content without permission</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 mt-1">•</span>
                <span>Harass, abuse, or harm other users of the platform</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 mt-1">•</span>
                <span>Upload malicious content or attempt to spread viruses</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 mt-1">•</span>
                <span>Interfere with the proper functioning of our services</span>
              </li>
            </ul>
          </section>

          {/* 5. Intellectual Property */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10">
              5. Intellectual Property
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                All content on Science Bites, including but not limited to text, graphics, logos, images, videos, animations, and software, is the property of Science Bites or its content suppliers and is protected by copyright and intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, or create derivative works from our content without explicit written permission.
              </p>
            </div>
          </section>

          {/* 6. Subscriptions */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10">
              6. Subscriptions & Payments
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              For premium features:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody className="text-gray-400">
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-8 font-medium text-white">Billing</td>
                    <td className="py-3">Processed through App Store or Google Play</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-8 font-medium text-white">Auto-Renewal</td>
                    <td className="py-3">Subscriptions renew automatically unless cancelled</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-8 font-medium text-white">Cancellation</td>
                    <td className="py-3">Cancel anytime through your app store settings</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-8 font-medium text-white">Refunds</td>
                    <td className="py-3">Subject to app store refund policies</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 7. Disclaimer */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10">
              7. Disclaimer of Warranties
            </h2>
            <div className="bg-amber-500/10 border-l-4 border-amber-500 p-4 mb-4">
              <p className="text-amber-200">
                <strong>Important:</strong> Science Bites is provided &quot;as is&quot; without warranties of any kind, either express or implied.
              </p>
            </div>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                We do not guarantee that our services will be uninterrupted, error-free, or completely secure. Educational content is provided for informational purposes and should not replace professional advice.
              </p>
              <p>
                Experiments and activities should be performed under appropriate adult supervision. We are not responsible for any injuries or damages resulting from activities performed based on our content.
              </p>
            </div>
          </section>

          {/* 8. Limitation of Liability */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10">
              8. Limitation of Liability
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                To the maximum extent permitted by law, Science Bites and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
              </p>
              <p>
                Our total liability for any claims arising from these terms or your use of our services shall not exceed the amount you paid us in the twelve months preceding the claim.
              </p>
            </div>
          </section>

          {/* 9. Termination */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10">
              9. Termination
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                We reserve the right to suspend or terminate your account at any time for violation of these terms or for any other reason at our sole discretion.
              </p>
              <p>
                You may delete your account at any time through the app settings. Upon termination, your right to use our services will immediately cease.
              </p>
            </div>
          </section>

          {/* 10. Governing Law */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10">
              10. Governing Law
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of Turkey, without regard to its conflict of law provisions.
              </p>
              <p>
                Any disputes arising from these terms or your use of our services shall be resolved in the courts of Turkey.
              </p>
            </div>
          </section>

          {/* 11. Contact */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10">
              11. Contact Us
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <p className="text-gray-400">
              <strong className="text-white">Email:</strong>{" "}
              <a href="mailto:info@dasyatisstudio.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                info@dasyatisstudio.com
              </a>
            </p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Science Bites. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
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
