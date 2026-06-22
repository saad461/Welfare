import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SponsorshipProgram from '@/components/SponsorshipProgram';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: "Sponsor an Orphan | Aal e Imran Yateem Khana | Muzaffargarh Pakistan",
  description: "Sponsor an orphan child in Muzaffargarh for as little as Rs. 2,500/month. Your sponsorship provides shelter, education, meals and care to deserving orphans at Aal e Imran Yateem Khana and Zainab e Alia. Earn the reward of Jannah.",
  keywords: ["sponsor orphan pakistan", "orphan sponsorship muzaffargarh", "kafala yateem", "sponsor child pakistan", "aal e imran yateem khana"]
};

export default function SponsorPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <SponsorshipProgram />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
