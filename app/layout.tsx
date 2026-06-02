import type { Metadata } from "next";
import { Playfair_Display, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsmono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "David Tan - 3D Portfolio",
  description: "David Tan's 3D Portfolio",
  keywords: [
    "David Tan",
    "Portfolio",
    "3D",
    "Interactive",
    "Developer",
    "Designer",
  ],
  authors: [{ name: "David Tan" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={`${playfair.className} antialiased`}>{children}</body> */}
      {/* <body className={`${jetbrainsmono.className} antialiased`}> */}
      <body className={`${manrope.className} antialiased`}>{children}</body>
    </html>
  );
}
