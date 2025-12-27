import Link from "next/link";

export const metadata = {
  title: "Terms of Service - Science Bites",
  description: "Science Bites Terms of Service - Read our terms and conditions for using our educational platform.",
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center">
      {/* Header */}
      <header className="w-full border-b border-white/10">
        <div className="w-full flex justify-center">
          <div className="w-full" style={{ maxWidth: "700px", padding: "20px 32px" }}>
            <div className="flex justify-between items-center">
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
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full flex justify-center">
        <div className="w-full" style={{ maxWidth: "700px", padding: "64px 32px" }}>

          {/* Title - Centered */}
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold">
              Terms of Service
            </h1>
          </div>

          {/* Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>

            {/* 1. Acceptance */}
            <section>
              <h2 className="text-xl font-semibold text-white" style={{ marginBottom: "16px" }}>
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-400 leading-relaxed" style={{ marginBottom: "16px" }}>
                By accessing or using the Science Bites mobile application or website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We reserve the right to update these terms at any time. Your continued use of Science Bites after any changes constitutes acceptance of the new terms.
              </p>
            </section>

            {/* 2. Service Description */}
            <section>
              <h2 className="text-xl font-semibold text-white" style={{ marginBottom: "16px" }}>
                2. Service Description
              </h2>
              <p className="text-gray-400 leading-relaxed" style={{ marginBottom: "24px" }}>
                Science Bites is an educational platform designed to make science fun and accessible for children and families. Our services include:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
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
              <h2 className="text-xl font-semibold text-white" style={{ marginBottom: "16px" }}>
                3. User Accounts
              </h2>
              <p className="text-gray-400 leading-relaxed" style={{ marginBottom: "16px" }}>
                When creating an account, you agree to:
              </p>
              <ul className="text-gray-400" style={{ marginLeft: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li>• Provide accurate and complete information during registration</li>
                <li>• Maintain the security of your account credentials</li>
                <li>• Accept responsibility for all activities under your account</li>
                <li>• Not share your account with others or create multiple accounts</li>
                <li>• Notify us immediately of any unauthorized account access</li>
              </ul>
            </section>

            {/* 4. Acceptable Use */}
            <section>
              <h2 className="text-xl font-semibold text-white" style={{ marginBottom: "16px" }}>
                4. Acceptable Use
              </h2>
              <p className="text-gray-400 leading-relaxed" style={{ marginBottom: "16px" }}>
                You agree not to:
              </p>
              <ul className="text-gray-400" style={{ marginLeft: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
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
              <h2 className="text-xl font-semibold text-white" style={{ marginBottom: "16px" }}>
                5. Intellectual Property
              </h2>
              <p className="text-gray-400 leading-relaxed" style={{ marginBottom: "16px" }}>
                All content on Science Bites, including but not limited to text, graphics, logos, images, videos, animations, and software, is the property of Science Bites or its content suppliers and is protected by copyright and intellectual property laws.
              </p>
              <p className="text-gray-400 leading-relaxed">
                You may not reproduce, distribute, modify, or create derivative works from our content without explicit written permission.
              </p>
            </section>

            {/* 6. Subscriptions */}
            <section>
              <h2 className="text-xl font-semibold text-white" style={{ marginBottom: "16px" }}>
                6. Subscriptions & Payments
              </h2>
              <p className="text-gray-400 leading-relaxed" style={{ marginBottom: "24px" }}>
                For premium features:
              </p>
              <table style={{ width: "100%" }}>
                <tbody className="text-gray-400">
                  <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <td style={{ padding: "12px 32px 12px 0", color: "white", fontWeight: 500 }}>Billing</td>
                    <td style={{ padding: "12px 0" }}>Processed through App Store or Google Play</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <td style={{ padding: "12px 32px 12px 0", color: "white", fontWeight: 500 }}>Auto-Renewal</td>
                    <td style={{ padding: "12px 0" }}>Subscriptions renew automatically unless cancelled</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <td style={{ padding: "12px 32px 12px 0", color: "white", fontWeight: 500 }}>Cancellation</td>
                    <td style={{ padding: "12px 0" }}>Cancel anytime through your app store settings</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px 32px 12px 0", color: "white", fontWeight: 500 }}>Refunds</td>
                    <td style={{ padding: "12px 0" }}>Subject to app store refund policies</td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* 7. Disclaimer */}
            <section>
              <h2 className="text-xl font-semibold text-white" style={{ marginBottom: "16px" }}>
                7. Disclaimer of Warranties
              </h2>
              <div style={{ backgroundColor: "rgba(245, 158, 11, 0.1)", borderLeft: "4px solid #f59e0b", padding: "16px", marginBottom: "24px" }}>
                <p className="text-amber-200">
                  <strong>Important:</strong> Science Bites is provided &quot;as is&quot; without warranties of any kind, either express or implied.
                </p>
              </div>
              <p className="text-gray-400 leading-relaxed" style={{ marginBottom: "16px" }}>
                We do not guarantee that our services will be uninterrupted, error-free, or completely secure. Educational content is provided for informational purposes and should not replace professional advice.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Experiments and activities should be performed under appropriate adult supervision. We are not responsible for any injuries or damages resulting from activities performed based on our content.
              </p>
            </section>

            {/* 8. Limitation of Liability */}
            <section>
              <h2 className="text-xl font-semibold text-white" style={{ marginBottom: "16px" }}>
                8. Limitation of Liability
              </h2>
              <p className="text-gray-400 leading-relaxed" style={{ marginBottom: "16px" }}>
                To the maximum extent permitted by law, Science Bites and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our total liability for any claims arising from these terms or your use of our services shall not exceed the amount you paid us in the twelve months preceding the claim.
              </p>
            </section>

            {/* 9. Termination */}
            <section>
              <h2 className="text-xl font-semibold text-white" style={{ marginBottom: "16px" }}>
                9. Termination
              </h2>
              <p className="text-gray-400 leading-relaxed" style={{ marginBottom: "16px" }}>
                We reserve the right to suspend or terminate your account at any time for violation of these terms or for any other reason at our sole discretion.
              </p>
              <p className="text-gray-400 leading-relaxed">
                You may delete your account at any time through the app settings. Upon termination, your right to use our services will immediately cease.
              </p>
            </section>

            {/* 10. Governing Law */}
            <section>
              <h2 className="text-xl font-semibold text-white" style={{ marginBottom: "16px" }}>
                10. Governing Law
              </h2>
              <p className="text-gray-400 leading-relaxed" style={{ marginBottom: "16px" }}>
                These Terms of Service shall be governed by and construed in accordance with the laws of Turkey, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Any disputes arising from these terms or your use of our services shall be resolved in the courts of Turkey.
              </p>
            </section>

            {/* 11. Contact */}
            <section>
              <h2 className="text-xl font-semibold text-white" style={{ marginBottom: "16px" }}>
                11. Contact Us
              </h2>
              <p className="text-gray-400 leading-relaxed" style={{ marginBottom: "16px" }}>
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
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 mt-auto">
        <div className="w-full flex justify-center">
          <div className="w-full" style={{ maxWidth: "700px", padding: "32px" }}>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
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
          </div>
        </div>
      </footer>
    </div>
  );
}
