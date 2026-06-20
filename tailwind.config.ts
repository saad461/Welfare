import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B6B3A',      // Deep Islamic Green
        secondary: '#C9922A',    // Warm Gold
        white: '#FFFFFF',        // Pure White
        dark: '#1C1C1C',         // Rich Charcoal
        background: '#F0F7F4',   // Soft Mint
      },
      fontFamily: {
        display: ['var(--font-playfair-display)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        urdu: ['var(--font-noto-nastaliq-urdu)', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
