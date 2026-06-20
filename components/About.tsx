'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import { Heart, Shield, Users } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function About() {
  const { t, isUrdu } = useLanguage();

  return (
    <section id="about" className="py-24 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column - Images/Stats */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Placeholder Image Card */}
            <div className="aspect-[4/5] bg-gradient-to-br from-primary to-dark rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
              <span className="text-white/20 font-display text-2xl">Organization Image</span>
            </div>

            {/* Overlapping Stat Cards */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -top-6 -right-6 md:right-10 bg-secondary text-white p-6 rounded-2xl shadow-xl max-w-[200px]"
            >
              <p className="font-bold text-lg leading-tight">{t.about.statOrphans}</p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 md:left-10 bg-primary text-white p-6 rounded-2xl shadow-xl max-w-[200px]"
            >
              <p className="font-bold text-lg leading-tight">{t.about.statYears}</p>
            </motion.div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <p className="text-secondary font-bold tracking-widest uppercase mb-4 text-sm">
              {t.about.eyebrow}
            </p>
            <h2 className="text-primary mb-8">
              {t.about.heading}
            </h2>
            <div className="space-y-6 text-dark/80 mb-10">
              <p>{t.about.body1}</p>
              <p>{t.about.body2}</p>
            </div>

            {/* Quran Ayah Box */}
            <div className="bg-white p-8 rounded-2xl border-l-8 border-secondary shadow-sm mb-10">
              <p className="urdu text-2xl text-primary text-center mb-4">
                {isUrdu ? t.about.quranAyah : "وَيُطْعِمُونَ الطَّعَامَ عَلَىٰ حُبِّهِ مِسْكِينًا وَيَتِيمًا وَأَسِيرًا"}
              </p>
              <p className={cn("text-center font-medium italic text-dark/60", isUrdu && "urdu")}>
                {!isUrdu && t.about.quranAyah}
                {isUrdu && "اور وہ اس کی محبت میں (خود اپنی ضرورت کے باوجود) مسکین، یتیم اور قیدی کو کھانا کھلاتے ہیں۔"}
              </p>
              <p className="text-center text-sm font-medium italic text-dark/40 mt-2">
                {t.about.quranRef}
              </p>
            </div>

            {/* Value Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                  <Shield size={24} />
                </div>
                <h4 className="font-bold mb-2">{t.about.values.faith.title}</h4>
                <p className="text-sm text-dark/70">{t.about.values.faith.desc}</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                  <Heart size={24} />
                </div>
                <h4 className="font-bold mb-2">{t.about.values.compassion.title}</h4>
                <p className="text-sm text-dark/70">{t.about.values.compassion.desc}</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                  <Users size={24} />
                </div>
                <h4 className="font-bold mb-2">{t.about.values.transparency.title}</h4>
                <p className="text-sm text-dark/70">{t.about.values.transparency.desc}</p>
              </motion.div>
            </div>

            <div>
              <Link
                href="#about-more"
                className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all duration-300"
              >
                {t.about.learnMore}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
