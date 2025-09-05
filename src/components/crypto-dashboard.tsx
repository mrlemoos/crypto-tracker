"use client";

import type { JSX } from "react";

import { CryptoGrid } from "./crypto-grid";

export function CryptoDashboard(): JSX.Element {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Crypto Tracker
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Track your favorite cryptocurrencies with real-time prices powered by
          CoinGecko API
        </p>
      </div>

      <CryptoGrid fiatCurrency="usd" />
    </div>
  );
}
