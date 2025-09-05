# Crypto Tracker

A modern, real-time cryptocurrency tracking application built with Next.js 15, React 19, and TypeScript. Track your favorite cryptocurrencies with live prices powered by the CoinGecko API.

- [Check out the website](https://crypto-tracker.mrlemoos.dev)

## ✨ Features

- **Real-time Price Tracking**: Live cryptocurrency prices updated from CoinGecko API
- **Modern UI**: Clean, responsive design with dark mode support
- **Multiple Currencies**: Support for USD, EUR, and GBP
- **Server-Side Rendering**: Fast initial page loads with Next.js App Router
- **Type-Safe**: Built with TypeScript and Zod for runtime validation
- **Responsive Design**: Optimized for desktop and mobile devices

## 🚀 Supported Cryptocurrencies

- Bitcoin (BTC)
- Ethereum (ETH)
- Solana (SOL)
- Dogecoin (DOGE)

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **Validation**: Zod
- **State Management**: React Context
- **API**: CoinGecko API
- **Package Manager**: pnpm

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone git@github.com:mrlemoos/crypto-tracker.git
   cd crypto-tracker
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Run the development server**

   ```bash
   pnpm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── cryptocurrencies/
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── crypto-card.tsx   # Individual crypto card
│   ├── crypto-dashboard.tsx # Main dashboard
│   ├── crypto-grid.tsx   # Grid layout
│   └── footer.tsx        # Footer component
├── context/              # React Context providers
│   └── cryptocurrencies-context.tsx
├── lib/                  # Utilities and services
│   ├── cryptocurrencies.ts # CoinGecko API integration
│   ├── invariant.ts     # Utility functions
│   └── schema.ts         # Zod schemas
```

## 🔧 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build production application
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🌐 API Endpoints

### GET `/api/cryptocurrencies`

Fetch cryptocurrency prices with optional parameters:

**Query Parameters:**

- `tracking` - Array of cryptocurrency IDs (default: `["bitcoin", "ethereum", "solana", "dogecoin"]`)
- `fiatVersus` - Fiat currency code (default: `"usd"`, supports: `"usd"`, `"eur"`, `"gbp"`)

**Example:**

```
GET /api/cryptocurrencies?tracking=bitcoin,ethereum&fiatVersus=usd
```

**Response:**

```json
{
  "data": {
    "bitcoin": {
      "usd": 45000.0
    },
    "ethereum": {
      "usd": 3000.0
    }
  }
}
```

## 🎨 Features in Detail

### Real-time Price Updates

The application fetches live cryptocurrency prices from the CoinGecko API. Prices are displayed with proper formatting and currency symbols.

### Responsive Design

The crypto cards are displayed in a responsive grid that adapts to different screen sizes:

- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 2 columns

### Dark Mode Support

The application includes built-in dark mode support using Tailwind CSS dark mode classes.

### Type Safety

- **Runtime Validation**: Zod schemas ensure API responses match expected types
- **Compile-time Safety**: TypeScript provides static type checking
- **Schema Validation**: API parameters are validated using Zod schemas

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [CoinGecko API](https://www.coingecko.com/en/api)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
