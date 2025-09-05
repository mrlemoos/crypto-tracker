import type { Cryptocurrency, FiatCurrency } from "$/lib/schema";
import type { JSX } from "react";

export namespace CryptoCard {
  export interface Props {
    cryptocurrency: Cryptocurrency;
    price: number;
    fiatCurrency: FiatCurrency;
  }
}

const CRYPTO_INFO = {
  bitcoin: {
    name: "Bitcoin",
    symbol: "BTC",
    color: "bg-orange-500",
    icon: "₿",
  },
  ethereum: {
    name: "Ethereum",
    symbol: "ETH",
    color: "bg-blue-500",
    icon: "Ξ",
  },
  solana: {
    name: "Solana",
    symbol: "SOL",
    color: "bg-purple-500",
    icon: "◎",
  },
  dogecoin: {
    name: "Dogecoin",
    symbol: "DOGE",
    color: "bg-yellow-500",
    icon: "Ð",
  },
} as const;

const FIAT_SYMBOLS = {
  usd: "$",
  eur: "€",
  gbp: "£",
} as const;

export function CryptoCard({
  cryptocurrency,
  price,
  fiatCurrency,
}: CryptoCard.Props): JSX.Element {
  const info = CRYPTO_INFO[cryptocurrency];
  const fiatSymbol = FIAT_SYMBOLS[fiatCurrency];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div
            className={`w-12 h-12 rounded-full ${info.color} flex items-center justify-center text-white font-bold text-xl`}
          >
            {info.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {info.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {info.symbol}
            </p>
          </div>
        </div>
      </div>

      <div className="text-right">
        <p className="text-2xl font-bold text-gray-900 dark:text-white">
          {fiatSymbol}
          {price.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 uppercase">
          {fiatCurrency}
        </p>
      </div>
    </div>
  );
}
