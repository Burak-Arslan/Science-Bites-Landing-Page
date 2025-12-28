import type { Metadata } from "next";
import { Londrina_Solid, Inter } from "next/font/google";
import "./globals.css";

const londrina = Londrina_Solid({
  variable: "--font-londrina",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Science Bites - Learn Science with Fun",
  description: "Learn science with fun experiments and animations! Science Bites makes learning exciting for kids.",
  keywords: ["science", "kids", "education", "experiments", "animations", "science bites"],
  authors: [{ name: "Science Bites" }],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Science Bites - Learn Science with Fun",
    description: "Learn science with fun experiments and animations!",
    type: "website",
    images: ["/icon-512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${londrina.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
