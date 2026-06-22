import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QurbaniProgram from '@/components/QurbaniProgram';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: "Qurbani 2026 | Aal e Imran Welfare Muzaffargarh | Qurbani 2027 Registration",
  description: "Aal e Imran Welfare successfully completed Qurbani 2026 in Muzaffargarh, Punjab. Meat was distributed to orphans, widows and deserving families. Register now for Qurbani 2027 and share the blessing with those in need.",
  keywords: ["qurbani 2026 pakistan", "qurbani muzaffargarh", "eid ul adha 2026 qurbani", "qurbani on behalf pakistan", "qurbani 2027"]
};

export default function QurbaniPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <QurbaniProgram />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
