import { Footer } from "$/components/footer";
import { CryptoDashboard } from "$/components/crypto-dashboard";
import {
  type CryptocurrenciesContext,
  CryptocurrenciesProvider,
} from "$/context/cryptocurrencies-context";
import { fetchCryptocurrencies } from "$/lib/cryptocurrencies";
import type { JSX } from "react";

export default async function Page(): Promise<JSX.Element> {
  const data = await fetchCryptocurrencies();
  return (
    <CryptocurrenciesProvider data={data as CryptocurrenciesContext.Value}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-4 py-8 md:py-12 lg:py-16">
          <CryptoDashboard />
          <Footer />
        </div>
      </div>
    </CryptocurrenciesProvider>
  );
}
