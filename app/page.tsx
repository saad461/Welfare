'use client';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatWeDo from "@/components/WhatWeDo";
import ZakatCalculator from "@/components/ZakatCalculator";
import ImpactStats from "@/components/ImpactStats";
import ProjectsPreview from "@/components/ProjectsPreview";
import VideoSection from "@/components/VideoSection";
import DonationSection from "@/components/DonationSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t, isUrdu } = useLanguage();

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <WhatWeDo />

      {/* Zakat Section */}
      <ZakatCalculator />

      <ImpactStats />
      <ProjectsPreview />

      {/* Sponsorship Preview Section */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-display font-bold text-dark mb-6 ${isUrdu ? 'urdu' : ''}`}>
            {isUrdu ? 'یتیم کی کفالت کریں' : 'Sponsor an Orphan'}
          </h2>
          <p className={`text-lg text-gray-600 mb-12 max-w-2xl mx-auto ${isUrdu ? 'urdu' : ''}`}>
            {isUrdu ? 'آج ہی ایک بچے کی تعلیم، خوراک اور چھت کی کفالت کر کے اس کی زندگی بدلیں۔' : 'Change a life today by sponsoring a child\'s education, food, and shelter.'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: isUrdu ? t.sponsorPage.tiers.boys.title : "Orphan Boys",
                amount: isUrdu ? '7,500 روپے' : "Rs. 7,500",
                color: "border-primary"
              },
              {
                title: isUrdu ? t.sponsorPage.tiers.girls.title : "Orphan Girls",
                amount: isUrdu ? '8,500 روپے' : "Rs. 8,500",
                color: "border-secondary"
              },
              {
                title: isUrdu ? t.sponsorPage.tiers.education.title : "Education",
                amount: isUrdu ? '2,500 روپے' : "Rs. 2,500",
                color: "border-green-500"
              }
            ].map((item, idx) => (
              <div key={idx} className={`bg-white p-8 rounded-3xl shadow-lg border-t-4 ${item.color}`}>
                <h3 className={`text-xl font-bold mb-2 ${isUrdu ? 'urdu' : ''}`}>{item.title}</h3>
                <p className={`text-2xl font-bold text-primary mb-4 ${isUrdu ? 'urdu' : ''}`}>
                  {item.amount} <span className="text-sm font-normal text-gray-500">/ {isUrdu ? 'ماہ' : 'month'}</span>
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className={`flex items-center gap-2 text-sm text-gray-600 ${isUrdu ? 'urdu' : ''}`}>
                    <Check size={14} className="text-primary" /> {isUrdu ? 'مکمل دیکھ بھال اور تعاون' : 'Full Care & Support'}
                  </li>
                  <li className={`flex items-center gap-2 text-sm text-gray-600 ${isUrdu ? 'urdu' : ''}`}>
                    <Check size={14} className="text-primary" /> {isUrdu ? 'معیاری تعلیم' : 'Quality Education'}
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <Link
            href="/sponsor"
            className={`inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all ${isUrdu ? 'urdu' : ''}`}
          >
            {isUrdu ? 'مکمل تفصیلات دیکھیں' : 'View Full Details'} <ArrowRight size={20} className={isUrdu ? 'rotate-180' : ''} />
          </Link>
        </div>
      </section>

      <VideoSection />

      {/* Phase 1 Placeholders for other sections */}
      <section id="gallery" className="py-24 px-6 bg-white flex items-center justify-center border-b border-gray-100">
        <h2 className="text-gray-300 font-display">Gallery Section [Phase 4]</h2>
      </section>

      <section id="blog" className="py-24 px-6 bg-background flex items-center justify-center border-b border-gray-100">
        <h2 className="text-gray-300 font-display">Blog Section [Phase 5]</h2>
      </section>

      <section id="events" className="py-24 px-6 bg-white flex items-center justify-center border-b border-gray-100">
        <h2 className="text-gray-300 font-display">Events Section [Phase 6]</h2>
      </section>

      {/* Qurbani Preview Section */}
      <section id="qurbani" className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <span className={`inline-block bg-white/20 px-4 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-widest ${isUrdu ? 'urdu' : ''}`}>
                  {isUrdu ? 'قربانی 2026 مکمل' : 'Qurbani 2026 Completed'}
                </span>
                <h2 className={`text-4xl md:text-5xl font-display font-bold mb-4 ${isUrdu ? 'urdu' : ''}`}>
                  {isUrdu ? 'آپ کی قربانی، ان کی خوشی' : 'Your Sacrifice, Their Blessing'}
                </h2>
                <p className={`text-white/80 max-w-xl ${isUrdu ? 'urdu' : ''}`}>
                  {isUrdu ? 'الحمدللہ، ہم نے 2026 میں سینکڑوں خاندانوں میں تازہ گوشت کامیابی سے تقسیم کیا۔ آج ہی 2027 کے لیے اپنی دلچسپی کا اندراج کریں۔' : 'Alhamdulillah, we successfully distributed fresh meat to hundreds of families in 2026. Register your interest for 2027 today.'}
                </p>
              </div>
              <Link
                href="/qurbani"
                className={`bg-secondary text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl ${isUrdu ? 'urdu' : ''}`}
              >
                {isUrdu ? '2027 کے لیے اندراج کریں' : 'Register for 2027'}
              </Link>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-3xl" />
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-white flex items-center justify-center">
        <h2 className="text-gray-300 font-display">Contact Section [Phase 10]</h2>
      </section>

      <DonationSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
