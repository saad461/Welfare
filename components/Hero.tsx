'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export default function Hero() {
  const { t, isUrdu } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="home" className="relative min-h-[65dvh] md:min-h-[80dvh] w-full flex flex-col items-center justify-start overflow-hidden pt-24 md:pt-32">
      {/* Background with Gradient and Placeholder Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          background: 'linear-gradient(135deg, #1B6B3A 0%, #0D3D20 100%)',
          /* Replace with: backgroundImage: 'url("/images/hero.jpg")' once image is available */
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <motion.p
          variants={itemVariants}
          className={isUrdu ? "urdu text-secondary font-bold tracking-widest uppercase mb-4 text-sm md:text-base" : "text-secondary font-bold tracking-widest uppercase mb-4 text-sm md:text-base"}
        >
          {t.hero.eyebrow}
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className={isUrdu ? "urdu text-white mb-6" : "text-white mb-6"}
        >
          {t.hero.heading}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className={isUrdu ? "urdu text-white/90 mb-10 max-w-2xl mx-auto" : "text-white/90 mb-10 max-w-2xl mx-auto"}
        >
          {t.hero.subheading}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-row flex-wrap items-center justify-center gap-3 mt-6 mb-12"
        >
          <Link
            href="#donate"
            className="min-h-[44px] bg-secondary text-white px-5 py-2.5 rounded-full font-bold hover:scale-105 transition-transform duration-300 text-sm md:text-base md:px-8 md:py-4"
          >
            <span className={isUrdu ? "urdu" : ""}>{t.hero.ctaDonate}</span>
          </Link>
          <Link
            href="/projects"
            className="min-h-[44px] border-2 border-white text-white px-5 py-2.5 rounded-full font-bold hover:bg-white hover:text-primary transition-all duration-300 text-sm md:text-base md:px-8 md:py-4"
          >
            <span className={isUrdu ? "urdu" : ""}>{t.hero.ctaProjects}</span>
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-row flex-wrap items-center justify-center gap-2 mt-4"
        >
          {[t.hero.stats.orphans, t.hero.stats.widows, t.hero.stats.years].map((stat, i) => (
            <div
              key={i}
              className={isUrdu ? "urdu bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 text-white font-medium text-xs md:text-sm md:px-6 md:py-2" : "bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 text-white font-medium text-xs md:text-sm md:px-6 md:py-2"}
            >
              {stat}
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce-slow">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
