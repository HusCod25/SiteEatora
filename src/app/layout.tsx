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
  title: "EatoraAI™ | Intelligent restaurant growth",
  description:
    "EatoraAI is an AI-powered meal assistant that generates personalized meals from user-selected ingredients, supports macro-based targets, and helps users eat smarter and save time.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "EatoraAI™ | Intelligent restaurant growth",
    description:
      "EatoraAI is an AI-powered meal assistant that generates personalized meals from user-selected ingredients, supports macro-based targets, and helps users eat smarter and save time.",
    url: "/",
    siteName: "EatoraAI",
    type: "website",
    images: [
      {
        url: "/seo/og-image.png",
        width: 1200,
        height: 630,
        alt: "EatoraAI meal assistant preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EatoraAI™ | Intelligent restaurant growth",
    description:
      "EatoraAI is an AI-powered meal assistant that generates personalized meals from user-selected ingredients, supports macro-based targets, and helps users eat smarter and save time.",
    images: ["/seo/og-image.png"],
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
