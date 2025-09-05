import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { ReactNode, JSX } from "react";
import { NuqsAdapter } from "nuqs/adapters/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crypto Tracker - Real-time Cryptocurrency Prices",
  description:
    "Track your favorite cryptocurrencies with real-time prices powered by CoinGecko API. Monitor Bitcoin, Ethereum, Solana, and Dogecoin prices in USD, EUR, and GBP.",
};

namespace RootLayout {
  export interface Props {
    children: ReactNode;
  }
}

export default function RootLayout({
  children,
}: RootLayout.Props): JSX.Element {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
