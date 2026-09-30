import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
// @ts-ignore: CSS module declaration missing in this project setup
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Talal Nadeem Awan | Security Engineer & AI Architect",
  description:
    "Security Engineer & Developer specializing in AppSec, GRC (ISO 27001), Production RAG Architectures, and Active Defense Systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}