import { cache } from "react";

import type { Cryptocurrency, FiatCurrency } from "./schema";

/**
 * An internal base URL for the CoinGecko API.
 */
const COINGECKO_API_URL = "https://api.coingecko.com/api/v3";

const DEFAULT_TRACKING = [
  "bitcoin",
  "ethereum",
  "solana",
  "dogecoin",
] satisfies Cryptocurrency[];
const DEFAULT_FIAT_VERSUS = "usd" satisfies FiatCurrency;
export namespace fetchCryptocurrencies {
  export interface Dto<
    Tracking extends Cryptocurrency[] = typeof DEFAULT_TRACKING,
    FiatVersus extends FiatCurrency = typeof DEFAULT_FIAT_VERSUS
  > {
    /**
     * A list of cryptocurrencies to track (default: ["bitcoin", "ethereum", "solana", "dogecoin"]).
     * @default ["bitcoin", "ethereum", "solana", "dogecoin"]
     */
    tracking?: Tracking | null;
    /**
     * The fiat (or real-world) currency to use for the prices (default: "usd").
     * @default "usd"
     */
    fiatVersus?: FiatVersus | null;
  }
  export type Response<
    Tracking extends Cryptocurrency[] = typeof DEFAULT_TRACKING,
    FiatVersus extends FiatCurrency = typeof DEFAULT_FIAT_VERSUS
  > = {
    [K in Tracking[number]]: {
      [K2 in FiatVersus]: number;
    };
  };
}
/**
 * An asynchronous server function that fetches the latest prices
 * for the cryptocurrencies in the tracking list.
 *
 * @example
 * ```ts
 * const prices = await fetchCryptocurrencies();
 * ```
 */
export const fetchCryptocurrencies = cache(
  async <
    Tracking extends Cryptocurrency[] = typeof DEFAULT_TRACKING,
    FiatVersus extends FiatCurrency = typeof DEFAULT_FIAT_VERSUS
  >(
    dto: fetchCryptocurrencies.Dto<Tracking, FiatVersus> = {}
  ) => {
    const tracking = dto.tracking ?? DEFAULT_TRACKING;
    const fiatVersus = dto.fiatVersus ?? DEFAULT_FIAT_VERSUS;
    const response = await fetch(
      `${COINGECKO_API_URL}/simple/price?ids=${tracking
        .join(",")
        .trim()}&vs_currencies=${fiatVersus.trim()}`
    );
    const data = response.json() as unknown as fetchCryptocurrencies.Response<
      Tracking,
      FiatVersus
    >;
    return data;
  }
);
