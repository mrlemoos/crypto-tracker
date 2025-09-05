import z from "zod";

export const cryptocurrency = z.enum([
  "bitcoin",
  "ethereum",
  "solana",
  "dogecoin",
]);
export type Cryptocurrency = z.infer<typeof cryptocurrency>;

export const fiatCurrency = z.enum(["usd", "eur", "gbp"]);
export type FiatCurrency = z.infer<typeof fiatCurrency>;
