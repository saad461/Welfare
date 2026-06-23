'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

export default function AboutIntroduction() {
  const { t, isUrdu } = useLanguage();

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-16 items-center">

          {/* Left Column - Text Content (60%) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <p className={isUrdu ? "urdu text-secondary font-bold tracking-widest uppercase mb-4 text-sm" : "text-secondary font-bold tracking-widest uppercase mb-4 text-sm"}>
              {t.aboutPage.intro.eyebrow}
            </p>
            <h2 className={isUrdu ? "urdu text-primary mb-8" : "text-primary mb-8"}>
              {t.aboutPage.intro.heading}
            </h2>
            <div className={isUrdu ? "urdu space-y-6 text-dark/80 leading-relaxed" : "space-y-6 text-dark/80 leading-relaxed"}>
              <p>{t.aboutPage.intro.p1}</p>
              <p>{t.aboutPage.intro.p2}</p>
              <p>{t.aboutPage.intro.p3}</p>
            </div>
          </motion.div>

          {/* Right Column - Logo & Floating Cards (40%) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 relative flex flex-col items-center"
          >
            {/* Logo Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center p-8 bg-background rounded-full shadow-inner mb-8">
              <div className="relative w-full h-full">
                <Image
                  src="/images/logo/logo.webp"
                  alt="Organization Logo"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Floating Stat Card 1 (Gold) */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                className="absolute -top-4 -right-4 bg-secondary text-white p-4 rounded-2xl shadow-xl border-4 border-white"
              >
                <p className={isUrdu ? "urdu font-bold whitespace-nowrap" : "font-bold whitespace-nowrap"}>
                  {t.aboutPage.intro.statFounded}
                </p>
              </motion.div>

              {/* Floating Stat Card 2 (Green) */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
                className="absolute -bottom-4 -left-4 bg-primary text-white p-4 rounded-2xl shadow-xl border-4 border-white"
              >
                <p className={isUrdu ? "urdu font-bold whitespace-nowrap" : "font-bold whitespace-nowrap"}>
                  {t.aboutPage.intro.statLocation}
                </p>
              </motion.div>
            </div>

            <p className={isUrdu ? "urdu text-primary font-bold text-xl text-center italic" : "text-primary font-bold text-xl text-center italic"}>
              &quot;{t.aboutPage.intro.tagline}&quot;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
