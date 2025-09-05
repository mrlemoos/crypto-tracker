"use client";

import { type JSX, use } from "react";

import { CryptocurrenciesContext } from "$/context/cryptocurrencies-context";
import type { Cryptocurrency, FiatCurrency } from "$/lib/schema";
import { CryptoCard } from "./crypto-card";

export namespace CryptoGrid {
  export interface Props {
    fiatCurrency?: FiatCurrency;
  }
}

export function CryptoGrid({
  fiatCurrency = "usd",
}: CryptoGrid.Props): JSX.Element | null {
  const data = use(CryptocurrenciesContext);

  if (!data) {
    return null;
  }

  const cryptocurrencies = Object.keys(data) as Cryptocurrency[];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Current Prices
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Live cryptocurrency prices updated from CoinGecko
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {cryptocurrencies.map((crypto) => (
          <CryptoCard
            key={crypto}
            cryptocurrency={crypto}
            price={data[crypto][fiatCurrency]}
            fiatCurrency={fiatCurrency}
          />
        ))}
      </div>
    </div>
  );
}
