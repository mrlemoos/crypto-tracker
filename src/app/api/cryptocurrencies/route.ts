import { fetchCryptocurrencies } from "$/lib/cryptocurrencies";
import { cryptocurrency, fiatCurrency } from "$/lib/schema";
import { NextResponse, type NextRequest } from "next/server";
import z from "zod";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const [cryptocurrencies, cryptocurrenciesError] =
    computeCryptocurrencies(searchParams);
  const [fiatCurrency, fiatCurrencyError] = computeFiatCurrency(searchParams);

  if (cryptocurrenciesError || fiatCurrencyError) {
    return NextResponse.json(
      { error: cryptocurrenciesError || fiatCurrencyError },
      { status: 422 }
    );
  }

  const prices = await fetchCryptocurrencies({
    tracking: cryptocurrencies,
    fiatVersus: fiatCurrency,
  });
  return NextResponse.json({ data: prices }, { status: 200 });
}

function computeCryptocurrencies(searchParams: URLSearchParams) {
  const { success, data, error } = z
    .array(cryptocurrency)
    .nullable()
    .safeParse(searchParams.get("tracking"));

  if (!success) {
    return [null, error] as const;
  }
  return [data, null] as const;
}

function computeFiatCurrency(searchParams: URLSearchParams) {
  const { success, data, error } = fiatCurrency
    .nullable()
    .safeParse(searchParams.get("fiatVersus"));

  if (!success) {
    return [null, error] as const;
  }
  return [data, null] as const;
}
