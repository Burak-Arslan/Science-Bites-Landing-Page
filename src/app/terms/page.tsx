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
        <div className="max-w-2xl mx-auto px-8 py-5 flex justify-between items-center">
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
      <main className="max-w-2xl mx-auto px-8 py-16">
        {/* Title - Centered */}
        <div className="text-center mb-16">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-3">
            Terms of Service
          </h1>
          <p className="text-gray-500">
            Last updated: December 28, 2024
          </p>
        </div>

        {/* Content - Left aligned */}
        <div className="space-y-16">

          {/* 1. Acceptance */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              By accessing or using the Science Bites mobile application or website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We reserve the right to update these terms at any time. Your continued use of Science Bites after any changes constitutes acceptance of the new terms.
            </p>
          </section>

          {/* 2. Service Description */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              2. Service Description
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Science Bites is an educational platform designed to make science fun and accessible for children and families. Our services include:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-medium">Interactive Lessons</h3>
                <p className="text-gray-400">Engaging science lessons designed for young learners with visual content.</p>
              </div>
              <div>
                <h3 className="text-white font-medium">Experiments & Activities</h3>
                <p className="text-gray-400">Hands-on experiments and activities to reinforce learning concepts.</p>
              </div>
              <div>
                <h3 className="text-white font-medium">Progress Tracking</h3>
                <p className="text-gray-400">Track learning progress and achievements with detailed analytics.</p>
              </div>
              <div>
                <h3 className="text-white font-medium">Gamification</h3>
                <p className="text-gray-400">Rewards, badges, and challenges to keep learners motivated.</p>
              </div>
            </div>
          </section>

          {/* 3. User Accounts */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              3. User Accounts
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              When creating an account, you agree to:
            </p>
            <ul className="text-gray-400 space-y-2 ml-6">
              <li>• Provide accurate and complete information during registration</li>
              <li>• Maintain the security of your account credentials</li>
              <li>• Accept responsibility for all activities under your account</li>
              <li>• Not share your account with others or create multiple accounts</li>
              <li>• Notify us immediately of any unauthorized account access</li>
            </ul>
          </section>

          {/* 4. Acceptable Use */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              4. Acceptable Use
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="text-gray-400 space-y-2 ml-6">
              <li>• Use our services for any illegal or unauthorized purpose</li>
              <li>• Attempt to hack, reverse engineer, or compromise our systems</li>
              <li>• Share, copy, or distribute our content without permission</li>
              <li>• Harass, abuse, or harm other users of the platform</li>
              <li>• Upload malicious content or attempt to spread viruses</li>
              <li>• Interfere with the proper functioning of our services</li>
            </ul>
          </section>

          {/* 5. Intellectual Property */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              5. Intellectual Property
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              All content on Science Bites, including but not limited to text, graphics, logos, images, videos, animations, and software, is the property of Science Bites or its content suppliers and is protected by copyright and intellectual property laws.
            </p>
            <p className="text-gray-400 leading-relaxed">
              You may not reproduce, distribute, modify, or create derivative works from our content without explicit written permission.
            </p>
          </section>

          {/* 6. Subscriptions */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              6. Subscriptions & Payments
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              For premium features:
            </p>
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
          </section>

          {/* 7. Disclaimer */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              7. Disclaimer of Warranties
            </h2>
            <div className="bg-amber-500/10 border-l-4 border-amber-500 p-4 mb-6">
              <p className="text-amber-200">
                <strong>Important:</strong> Science Bites is provided &quot;as is&quot; without warranties of any kind, either express or implied.
              </p>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              We do not guarantee that our services will be uninterrupted, error-free, or completely secure. Educational content is provided for informational purposes and should not replace professional advice.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Experiments and activities should be performed under appropriate adult supervision. We are not responsible for any injuries or damages resulting from activities performed based on our content.
            </p>
          </section>

          {/* 8. Limitation of Liability */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              To the maximum extent permitted by law, Science Bites and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our total liability for any claims arising from these terms or your use of our services shall not exceed the amount you paid us in the twelve months preceding the claim.
            </p>
          </section>

          {/* 9. Termination */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              9. Termination
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We reserve the right to suspend or terminate your account at any time for violation of these terms or for any other reason at our sole discretion.
            </p>
            <p className="text-gray-400 leading-relaxed">
              You may delete your account at any time through the app settings. Upon termination, your right to use our services will immediately cease.
            </p>
          </section>

          {/* 10. Governing Law */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              10. Governing Law
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              These Terms of Service shall be governed by and construed in accordance with the laws of Turkey, without regard to its conflict of law provisions.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Any disputes arising from these terms or your use of our services shall be resolved in the courts of Turkey.
            </p>
          </section>

          {/* 11. Contact */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
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
        <div className="max-w-2xl mx-auto px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
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
