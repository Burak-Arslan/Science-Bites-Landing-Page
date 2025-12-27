import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Science Bites",
  description: "Science Bites Privacy Policy - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-gray-500">
            Last updated: December 28, 2024
          </p>
        </div>

        {/* Content - Left aligned */}
        <div className="space-y-16">

          {/* 1. Introduction */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Welcome to Science Bites. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website.
            </p>
            <p className="text-gray-400 leading-relaxed">
              By using Science Bites, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies, please do not use our services.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              2. Information We Collect
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              We collect several types of information to provide and improve our services:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-medium">Personal Information</h3>
                <p className="text-gray-400">Name, email address, and profile information when you create an account.</p>
              </div>
              <div>
                <h3 className="text-white font-medium">Usage Data</h3>
                <p className="text-gray-400">Learning progress, completed lessons, quiz scores, and app interactions.</p>
              </div>
              <div>
                <h3 className="text-white font-medium">Device Information</h3>
                <p className="text-gray-400">Device type, operating system, unique device identifiers, and app version.</p>
              </div>
              <div>
                <h3 className="text-white font-medium">Analytics Data</h3>
                <p className="text-gray-400">App performance metrics, crash reports, and usage statistics.</p>
              </div>
            </div>
          </section>

          {/* 3. How We Use Your Information */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="text-gray-400 space-y-2 ml-6">
              <li>• To provide, maintain, and improve our educational services</li>
              <li>• To personalize your learning experience and track your progress</li>
              <li>• To communicate with you about updates, features, and support</li>
              <li>• To analyze usage patterns and optimize app performance</li>
              <li>• To ensure the security and integrity of our platform</li>
              <li>• To comply with legal obligations and enforce our terms</li>
            </ul>
          </section>

          {/* 4. Data Sharing */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              4. Data Sharing & Third Parties
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              We may share your information with trusted third-party service providers:
            </p>
            <table className="w-full mb-4">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 pr-8 text-white font-medium">Service</th>
                  <th className="text-left py-3 text-white font-medium">Purpose</th>
                </tr>
              </thead>
              <tbody className="text-gray-400">
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-8">Firebase</td>
                  <td className="py-3">Authentication & database</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-8">Google Analytics</td>
                  <td className="py-3">Usage analytics</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-8">RevenueCat</td>
                  <td className="py-3">Subscription management</td>
                </tr>
                <tr>
                  <td className="py-3 pr-8">Crashlytics</td>
                  <td className="py-3">Crash reporting</td>
                </tr>
              </tbody>
            </table>
            <p className="text-gray-500 text-sm">
              We do not sell your personal information to third parties. Data is only shared as necessary to provide our services.
            </p>
          </section>

          {/* 5. Data Security */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              5. Data Security
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your personal information:
            </p>
            <ul className="text-gray-400 space-y-2 ml-6 mb-6">
              <li>• SSL/TLS encryption for all data transmission</li>
              <li>• Secure cloud infrastructure with regular backups</li>
              <li>• Access controls and authentication protocols</li>
              <li>• Regular security audits and updates</li>
            </ul>
            <p className="text-gray-500 text-sm">
              While we strive to protect your data, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          {/* 6. Children's Privacy */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              6. Children&apos;s Privacy
            </h2>
            <div className="bg-amber-500/10 border-l-4 border-amber-500 p-4 mb-6">
              <p className="text-amber-200">
                <strong>Important:</strong> Science Bites is designed for children and families. We take children&apos;s privacy seriously.
              </p>
            </div>
            <ul className="text-gray-400 space-y-2 ml-6">
              <li>• We do not knowingly collect personal information from children under 13 without parental consent.</li>
              <li>• Parents can review, modify, or request deletion of their child&apos;s data at any time.</li>
              <li>• We comply with COPPA (Children&apos;s Online Privacy Protection Act) requirements.</li>
            </ul>
          </section>

          {/* 7. Your Rights */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              7. Your Rights
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              You have the following rights regarding your personal data:
            </p>
            <ul className="text-gray-400 space-y-2 ml-6">
              <li>• <strong className="text-white">Access:</strong> Request a copy of your personal data</li>
              <li>• <strong className="text-white">Correction:</strong> Update or correct inaccurate information</li>
              <li>• <strong className="text-white">Deletion:</strong> Request deletion of your data</li>
              <li>• <strong className="text-white">Portability:</strong> Export your data in a standard format</li>
              <li>• <strong className="text-white">Objection:</strong> Object to certain data processing</li>
              <li>• <strong className="text-white">Withdrawal:</strong> Withdraw consent at any time</li>
            </ul>
          </section>

          {/* 8. Cookies */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              8. Cookies & Tracking
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Our website uses cookies and similar tracking technologies to enhance your experience. Cookies are small text files stored on your device that help us understand how you use our services.
            </p>
            <p className="text-gray-400 leading-relaxed">
              You can control cookies through your browser settings. Disabling cookies may affect some features of our website.
            </p>
          </section>

          {/* 9. Policy Changes */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              9. Policy Changes
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any significant changes through in-app notifications or email.
            </p>
            <p className="text-gray-400 leading-relaxed">
              The &quot;Last updated&quot; date at the top of this policy indicates when it was last revised. Your continued use of Science Bites after changes are posted constitutes your acceptance of the updated policy.
            </p>
          </section>

          {/* 10. Contact */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              10. Contact Us
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
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
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
