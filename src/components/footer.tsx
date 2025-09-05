import Link from "next/link";
import type { JSX } from "react";

export function Footer(): JSX.Element {
  return (
    <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
      <div className="text-center space-y-4">
        <div className="flex justify-center items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
          <Link
            href="https://github.com/mrlemoos/crypto-tracker"
            target="_blank"
            className="hover:text-blue-500 transition-colors duration-200"
          >
            GitHub
          </Link>
          <Link
            href="https://mrlemoos.dev"
            target="_blank"
            className="hover:text-blue-500 transition-colors duration-200"
          >
            About me
          </Link>
          <Link
            href="https://www.coingecko.com"
            target="_blank"
            className="hover:text-blue-500 transition-colors duration-200"
          >
            CoinGecko API
          </Link>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-500">
          Powered by{" "}
          <Link
            href="https://www.coingecko.com"
            target="_blank"
            className="text-blue-500 hover:text-blue-600 transition-colors duration-200"
          >
            CoinGecko
          </Link>{" "}
          • Real-time cryptocurrency data
        </p>
      </div>
    </footer>
  );
}
