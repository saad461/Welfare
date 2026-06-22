import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ZakatCalculator from '@/components/ZakatCalculator';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: "Zakat Calculator 2026 | Calculate & Pay Your Zakat | Aal e Imran Welfare",
  description: "Use our free Zakat calculator to calculate your Zakat for 2026. Enter your gold, silver, cash and assets to instantly calculate your Zakat obligation and pay it to deserving orphans and widows in Muzaffargarh, Pakistan.",
  keywords: ["zakat calculator 2026", "calculate zakat pakistan", "zakat nisab 2026", "pay zakat online pakistan", "zakat on gold silver cash"]
};

export default function ZakatPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <ZakatCalculator />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
