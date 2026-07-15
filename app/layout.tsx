import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammed Adil BK | AI Content Creator & Visual Storyteller",
  description: "Portfolio of Mohammed Adil BK, professional AI content creator specializing in cinematic AI videos, commercial production, social media campaigns, and AI creative solutions.",
  keywords: ["Mohammed Adil BK", "AI Content Creator", "Cinematic AI Video", "AI Commercials", "Vibe Coding", "Creative Director"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
