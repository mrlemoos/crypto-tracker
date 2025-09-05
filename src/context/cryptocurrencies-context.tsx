"use client";

import type { Cryptocurrency, FiatCurrency } from "$/lib/schema";
import { createContext, JSX, useMemo, type ReactNode } from "react";

export namespace CryptocurrenciesContext {
  export type Value = {
    [K in Cryptocurrency]: {
      [K2 in FiatCurrency]: number;
    };
  };
}

export const CryptocurrenciesContext =
  createContext<CryptocurrenciesContext.Value | null>(null);

export namespace CryptocurrenciesProvider {
  export interface Props {
    data: CryptocurrenciesContext.Value;
    children: ReactNode;
  }
}
export function CryptocurrenciesProvider({
  children,
  data,
}: CryptocurrenciesProvider.Props): JSX.Element {
  const contextValue = useMemo(() => data, [data]);
  return (
    <CryptocurrenciesContext.Provider value={contextValue}>
      {children}
    </CryptocurrenciesContext.Provider>
  );
}
