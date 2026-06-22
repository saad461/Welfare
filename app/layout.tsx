import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

const notoUrdu = Noto_Nastaliq_Urdu({
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-noto-nastaliq-urdu",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aal e Imran Welfare | Orphan Care & Women Empowerment in Pakistan",
  description: "Aal e Imran Welfare is a Pakistani non-profit organization dedicated to caring for orphans through Yateem Khana and empowering women through Zainab e Alia. Donate today and change lives.",
  keywords: "welfare organization Pakistan, orphan care Pakistan, yateem khana, zakat Pakistan, donate Pakistan, Islamic charity, women empowerment Pakistan",
  openGraph: {
    title: "Aal e Imran Welfare | Orphan Care & Women Empowerment in Pakistan",
    description: "Serving humanity through faith and compassion since 2014.",
    type: "website",
    locale: "en_PK",
    siteName: "Aal e Imran Welfare",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#1B6B3A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${notoUrdu.variable} antialiased`}>
        <LanguageProvider>
          <main className="min-h-screen overflow-x-hidden">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
