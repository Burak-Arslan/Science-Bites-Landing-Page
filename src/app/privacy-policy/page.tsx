import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Science Bites",
  description: "Science Bites Privacy Policy - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-gray-500 text-sm">
              Last updated: December 28, 2024
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-14 text-gray-300 leading-7">

            {/* Introduction */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10">
                1. Introduction
              </h2>
              <p>
                Welcome to Science Bites. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website.
              </p>
              <p className="mt-4">
                By using Science Bites, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies, please do not use our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10">
                2. Information We Collect
              </h2>
              <p className="mb-5">We collect several types of information to provide and improve our services:</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-2">Personal Information</h3>
                  <p className="text-sm text-gray-400">Name, email address, and profile information when you create an account.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-2">Usage Data</h3>
                  <p className="text-sm text-gray-400">Learning progress, completed lessons, quiz scores, and app interactions.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-2">Device Information</h3>
                  <p className="text-sm text-gray-400">Device type, operating system, unique device identifiers, and app version.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-2">Analytics Data</h3>
                  <p className="text-sm text-gray-400">App performance metrics, crash reports, and usage statistics.</p>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10">
                3. How We Use Your Information
              </h2>
              <p className="mb-5">We use the collected information for the following purposes:</p>
              <ul className="space-y-3">
                {[
                  "To provide, maintain, and improve our educational services",
                  "To personalize your learning experience and track your progress",
                  "To communicate with you about updates, features, and support",
                  "To analyze usage patterns and optimize app performance",
                  "To ensure the security and integrity of our platform",
                  "To comply with legal obligations and enforce our terms",
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

            {/* Data Sharing */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10">
                4. Data Sharing & Third Parties
              </h2>
              <p className="mb-5">We may share your information with trusted third-party service providers:</p>
              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="text-left py-3 px-5 text-white font-semibold">Service</th>
                      <th className="text-left py-3 px-5 text-white font-semibold">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="py-3 px-5 text-purple-400">Firebase</td>
                      <td className="py-3 px-5 text-gray-400">Authentication & database</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-5 text-purple-400">Google Analytics</td>
                      <td className="py-3 px-5 text-gray-400">Usage analytics</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-5 text-purple-400">RevenueCat</td>
                      <td className="py-3 px-5 text-gray-400">Subscription management</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-5 text-purple-400">Crashlytics</td>
                      <td className="py-3 px-5 text-gray-400">Crash reporting</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                We do not sell your personal information to third parties. Data is only shared as necessary to provide our services.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10">
                5. Data Security
              </h2>
              <p className="mb-5">We implement industry-standard security measures to protect your personal information:</p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
                {[
                  "SSL/TLS encryption for all data transmission",
                  "Secure cloud infrastructure with regular backups",
                  "Access controls and authentication protocols",
                  "Regular security audits and updates",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">
                While we strive to protect your data, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10">
                6. Children&apos;s Privacy
              </h2>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5 mb-5">
                <p className="text-amber-200">
                  <strong>Important:</strong> Science Bites is designed for children and families. We take children&apos;s privacy seriously.
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 text-lg">•</span>
                  <span>We do not knowingly collect personal information from children under 13 without parental consent.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 text-lg">•</span>
                  <span>Parents can review, modify, or request deletion of their child&apos;s data at any time.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 text-lg">•</span>
                  <span>We comply with COPPA (Children&apos;s Online Privacy Protection Act) requirements.</span>
                </li>
              </ul>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10">
                7. Your Rights
              </h2>
              <p className="mb-5">You have the following rights regarding your personal data:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { title: "Access", desc: "Request a copy of your personal data" },
                  { title: "Correction", desc: "Update or correct inaccurate information" },
                  { title: "Deletion", desc: "Request deletion of your data" },
                  { title: "Portability", desc: "Export your data in standard format" },
                  { title: "Objection", desc: "Object to certain data processing" },
                  { title: "Withdrawal", desc: "Withdraw consent at any time" },
                ].map((right, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="font-semibold text-white mb-1">{right.title}</h4>
                    <p className="text-sm text-gray-400">{right.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10">
                8. Cookies & Tracking
              </h2>
              <p>
                Our website uses cookies and similar tracking technologies to enhance your experience. Cookies are small text files stored on your device that help us understand how you use our services.
              </p>
              <p className="mt-4">
                You can control cookies through your browser settings. Disabling cookies may affect some features of our website.
              </p>
            </section>

            {/* Policy Changes */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10">
                9. Policy Changes
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any significant changes through in-app notifications or email.
              </p>
              <p className="mt-4">
                The &quot;Last updated&quot; date at the top of this policy indicates when it was last revised. Your continued use of Science Bites after changes are posted constitutes your acceptance of the updated policy.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10">
                10. Contact Us
              </h2>
              <p className="mb-5">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
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
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
