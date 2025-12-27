import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "Science Bites - Bilimi Keşfet",
  description: "Science Bites ile bilimi eğlenceli ve kolay bir şekilde keşfedin. Yakında sizlerle!",
  keywords: ["science", "bilim", "eğitim", "science bites"],
  authors: [{ name: "Science Bites" }],
  openGraph: {
    title: "Science Bites - Bilimi Keşfet",
    description: "Science Bites ile bilimi eğlenceli ve kolay bir şekilde keşfedin.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${playfair.variable} ${sourceSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
