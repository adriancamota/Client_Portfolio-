import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio - Professional Video Editing & Graphic Design",
  description: "Hi I'm Frances! I do video editing and graphic design services that transform your ideas into stunning visual content",
  keywords: "video editing, graphic design, motion graphics, social media content, branding, creative services",
  authors: [{ name: "My Portfolio" }],
  creator: "Frances",
  openGraph: {
    title: "My Portfolio - Professional Video Editing & Graphic Design",
    description: "Hi I'm Frances! I do video editing and graphic design services that transform your ideas into stunning visual content",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Portfolio - Professional Video Editing & Graphic Design",
    description: "Professional video editing and graphic design services. Transform your ideas into stunning visual content.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
