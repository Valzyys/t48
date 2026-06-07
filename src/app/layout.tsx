import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/providers/lenis";

const dmSans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Team48Live - Live Stream Theater JKT48",
  description: "Nonton live stream theater JKT48 dengan harga terjangkau. Pilih per show atau membership bulanan Rp 25.000. Streaming mudah, kapan saja, di mana saja.",
  keywords: ["JKT48", "theater JKT48", "live stream JKT48", "nonton JKT48", "Team48Live"],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Team48Live - Live Stream Theater JKT48",
    description: "Nonton live stream theater JKT48 dengan harga terjangkau. Membership bulanan Rp 25.000.",
    url: "https://t48live.my.i",
    siteName: "Team48Live",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${dmSans.className} antialiased w-full min-h-screen overflow-x-hidden`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
