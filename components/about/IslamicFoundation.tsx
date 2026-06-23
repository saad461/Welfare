'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function IslamicFoundation() {
  const { t, isUrdu } = useLanguage();

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={isUrdu ? "urdu text-primary mb-4" : "text-primary mb-4"}
          >
            {t.aboutPage.foundation.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={isUrdu ? "urdu text-dark/70 max-w-2xl mx-auto" : "text-dark/70 max-w-2xl mx-auto"}
          >
            {t.aboutPage.foundation.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Quran Ayah Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[2rem] border-l-8 border-secondary shadow-lg shadow-secondary/5"
          >
            <p className="urdu text-2xl md:text-3xl text-primary text-center mb-8 leading-loose">
              {t.aboutPage.foundation.quran.arabic}
            </p>
            <div className="space-y-4">
              <p className="text-dark/80 text-center italic font-medium leading-relaxed">
                &quot;{t.aboutPage.foundation.quran.translation}&quot;
              </p>
              <p className="text-secondary font-bold text-center text-sm uppercase tracking-widest">
                {t.aboutPage.foundation.quran.ref}
              </p>
            </div>
          </motion.div>

          {/* Hadith Cards Stack */}
          <div className="flex flex-col gap-8">
            {/* Hadith 1 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border-l-8 border-primary shadow-lg shadow-primary/5"
            >
              <p className="urdu text-xl text-primary mb-6 text-center">
                {t.aboutPage.foundation.hadith1.arabic}
              </p>
              <p className="text-dark/70 text-sm italic mb-4 leading-relaxed">
                &quot;{t.aboutPage.foundation.hadith1.translation}&quot;
              </p>
              <p className="text-primary font-bold text-xs uppercase tracking-widest">
                — {t.aboutPage.foundation.hadith1.ref}
              </p>
            </motion.div>

            {/* Hadith 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl border-l-8 border-secondary shadow-lg shadow-secondary/5"
            >
              <p className="text-dark/70 text-sm italic mb-4 leading-relaxed">
                &quot;{t.aboutPage.foundation.hadith2.translation}&quot;
              </p>
              <p className="text-secondary font-bold text-xs uppercase tracking-widest">
                — {t.aboutPage.foundation.hadith2.ref}
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
