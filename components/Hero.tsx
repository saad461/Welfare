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
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
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
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="#donate"
            className="w-full sm:w-auto bg-secondary text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300"
          >
            <span className={isUrdu ? "urdu" : ""}>{t.hero.ctaDonate}</span>
          </Link>
          <Link
            href="/projects"
            className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-all duration-300"
          >
            <span className={isUrdu ? "urdu" : ""}>{t.hero.ctaProjects}</span>
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[t.hero.stats.orphans, t.hero.stats.widows, t.hero.stats.years].map((stat, i) => (
            <div
              key={i}
              className={isUrdu ? "urdu bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 text-white font-medium" : "bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 text-white font-medium"}
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
