'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export default function ZakatIntro() {
  const { t, isUrdu } = useLanguage();

  return (
    <section className="py-24 px-6 bg-white" id="zakat-intro">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative shadow-2xl">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full mb-6"
              >
                <Calculator size={20} />
                <span className={`font-bold tracking-wider text-xs uppercase ${isUrdu ? 'urdu' : ''}`}>
                  {t.footer.programs.zakat}
                </span>
              </motion.div>

              <h2 className={`text-4xl md:text-5xl font-display font-bold mb-6 ${isUrdu ? 'urdu' : ''}`}>
                {t.zakat.intro.title}
              </h2>

              <p className={`text-white/80 text-lg max-w-2xl mb-8 leading-relaxed ${isUrdu ? 'urdu' : ''}`}>
                {t.zakat.intro.description}
              </p>

              <Link
                href="/zakat"
                className={`inline-flex items-center gap-3 bg-secondary text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl group ${isUrdu ? 'urdu' : ''}`}
              >
                {t.zakat.intro.button}
                <ArrowRight size={22} className={`transition-transform group-hover:translate-x-1 ${isUrdu ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="hidden lg:block relative flex-shrink-0"
            >
               <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <Calculator size={100} className="text-secondary opacity-80" />
               </div>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
