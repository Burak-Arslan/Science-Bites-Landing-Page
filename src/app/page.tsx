import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>
      {/* Hero Section */}
      <section
        className="relative w-full aspect-[375/682] md:aspect-auto md:h-[95vh] md:min-h-[650px]"
      >
        {/* Mobile Hero Background */}
        <div className="md:hidden absolute inset-0 z-0">
          <Image
            src="/images/Hero-mobile.svg"
            alt="Background"
            fill
            style={{
              objectFit: "cover",
            }}
            priority
          />
        </div>
        {/* Desktop Hero Background */}
        <div className="hidden md:block absolute inset-0 z-0">
          <Image
            src="/images/Hero.svg"
            alt="Background"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center bottom",
            }}
            priority
          />
        </div>

        {/* Content on top of background */}
        <main
          className="relative z-10 flex flex-col items-center px-6 pt-6 sm:pt-10"
        >
          {/* Logo */}
          <div style={{ marginBottom: "20px" }}>
            <Image
              src="/images/Logo.svg"
              alt="Science Bites Logo"
              width={160}
              height={48}
              className="w-[130px] sm:w-[160px]"
              priority
            />
          </div>

          {/* Headline */}
          <h1
            className="font-[family-name:var(--font-londrina)] text-white text-center uppercase px-4 text-[44px] md:text-[64px]"
            style={{
              lineHeight: "1.1",
              maxWidth: "850px",
              marginBottom: "16px",
            }}
          >
            <span className="md:hidden">
              Learn Science<br />
              with Fun<br />
              Experiments<br />
              and Animations!
            </span>
            <span className="hidden md:inline">
              Learn Science with Fun Experiments and Animations!
            </span>
          </h1>

          {/* Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.ba.sciencebites"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/googleplay.svg"
                alt="Get it on Google Play"
                width={130}
                height={40}
                className="w-[120px] sm:w-[140px]"
              />
            </a>
            <a
              href="https://apps.apple.com/app/id6756946276"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/appstore.svg"
                alt="Download on the App Store"
                width={130}
                height={40}
                className="w-[120px] sm:w-[140px]"
              />
            </a>
          </div>
        </main>
      </section>

      {/* VIP Text Section - White Background */}
      <section
        className="relative w-full"
        style={{
          backgroundColor: "#FFFFFF",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        <div
          className="w-full flex justify-center"
          style={{ padding: "0 32px" }}
        >
          <div
            className="w-full flex flex-col md:flex-row items-center justify-between gap-8"
            style={{ maxWidth: "1100px" }}
          >
            {/* VIP Text Content - Centered on mobile, left on desktop */}
            <div className="flex-1 md:max-w-[400px] flex flex-col items-center md:items-start text-center md:text-left">
              {/* VIP Icon */}
              <div style={{ marginBottom: "20px" }}>
                <Image
                  src="/images/VIP_ivon.svg"
                  alt="Get VIP"
                  width={220}
                  height={88}
                  style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "220px",
                  }}
                />
              </div>

              {/* Description Text */}
              <p
                className="font-[family-name:var(--font-inter)]"
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                  lineHeight: "1.7",
                  color: "#333333",
                }}
              >
                Science Bites is a fun science world for kids. Join Professor Eureka to conduct experiments and unlock secret badges. It turns STEM learning into an adventure, teaching kids how the world works through interactive play.
              </p>
            </div>

            {/* Premium Area Image - Hidden on mobile, shown on desktop */}
            <div className="hidden md:flex flex-1 justify-end">
              <Image
                src="/images/Premium_area.svg"
                alt="Premium Subscription"
                width={526}
                height={526}
                style={{
                  width: "100%",
                  maxWidth: "526px",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* VIP Section - Mobile only (SVG has its own purple background) */}
      <section className="relative w-full md:hidden">
        <Image
          src="/images/VIP-mobile.svg"
          alt="Premium Subscription"
          width={375}
          height={526}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </section>

      {/* Footer */}
      <footer
        className="w-full py-5 px-8 bg-[#813BBA] md:bg-white"
      >
        <div className="w-full flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <p className="text-white/80 md:text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Science Bites. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/80 md:text-gray-500 md:ml-auto">
            <Link href="/privacy-policy" className="hover:text-white md:hover:text-gray-800 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white md:hover:text-gray-800 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
