'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import GalleryTabs from '@/components/gallery/GalleryTabs';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { useLanguage } from '@/context/LanguageContext';
import { galleryImages } from '@/lib/galleryData';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function GalleryPage() {
  const { t, isUrdu } = useLanguage();
  const [activeTab, setActiveTab] = useState('all');

  const filteredImages = activeTab === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeTab);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[40vh] flex items-center justify-center pt-16 md:pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('/images/hero/1744890781595.webp')] bg-cover bg-center mix-blend-overlay" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className={`text-4xl md:text-6xl font-display font-bold mb-4 ${isUrdu ? 'urdu' : ''}`}>
            {t.gallery.hero.heading}
          </h1>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto text-white/90 ${isUrdu ? 'urdu' : ''}`}>
            {t.gallery.hero.subtext}
          </p>

          {/* Breadcrumb */}
          <nav className="mt-8 flex items-center justify-center gap-2 text-sm text-white/70">
            <Link href="/" className="hover:text-white transition-colors">{t.nav.home}</Link>
            <ChevronRight size={14} className={isUrdu ? 'rotate-180' : ''} />
            <span className="text-white font-medium">{t.nav.gallery}</span>
          </nav>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <GalleryTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="mt-8">
          <GalleryGrid images={filteredImages} />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
