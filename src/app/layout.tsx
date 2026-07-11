import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Southern Magnetic Tattoo | Custom Tattoo Studio in Charleston, SC",
  description:
    "Southern Magnetic Tattoo is a custom tattoo studio in Charleston, South Carolina. Custom tattoos, fine line, traditional, cover-ups, and walk-ins welcome. Book a consultation today.",
  keywords: [
    "tattoo shop Charleston SC",
    "custom tattoo Charleston",
    "fine line tattoo Charleston",
    "traditional tattoo Charleston",
    "cover up tattoo Charleston",
    "walk in tattoo Charleston SC",
  ],
  openGraph: {
    title: "Southern Magnetic Tattoo | Charleston, SC",
    description:
      "Custom tattoo artistry in Charleston, South Carolina. Book a consultation or walk in.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
