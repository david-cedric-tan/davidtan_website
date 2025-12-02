import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "David Tan - 3D Portfolio",
  description:
    "Interactive 3D portfolio showcasing David Tan's work and creativity",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
