'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export default function AboutHero() {
  const { t, isUrdu } = useLanguage();

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center pt-20 pb-16 px-6 overflow-hidden bg-[#1B6B3A]">
      {/* Background Gradient & Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B6B3A] to-[#0D3D20]"></div>

      {/* Islamic Geometric Pattern Overlay (CSS Only) */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }}></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-secondary/20 border border-secondary/30 text-secondary px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-6"
        >
          {t.aboutPage.hero.badge}
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={isUrdu ? "urdu text-white mb-6 text-4xl md:text-6xl" : "text-white mb-6 text-4xl md:text-6xl"}
        >
          {t.aboutPage.hero.heading}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={isUrdu ? "urdu text-white/90 max-w-2xl mx-auto text-lg md:text-xl mb-10 leading-relaxed" : "text-white/90 max-w-2xl mx-auto text-lg md:text-xl mb-10 leading-relaxed"}
        >
          {t.aboutPage.hero.subheading}
        </motion.p>

        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          aria-label="Breadcrumb"
          className="flex items-center justify-center gap-3 text-sm"
        >
          <Link href="/" className="text-white/70 hover:text-secondary transition-colors">
            {t.aboutPage.hero.breadcrumbHome}
          </Link>
          <span className="text-secondary font-bold font-mono">{">"}</span>
          <span className="text-white font-medium">
            {t.aboutPage.hero.breadcrumbAbout}
          </span>
        </motion.nav>
      </div>
    </section>
  );
}
