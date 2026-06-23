'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Ban, Bird, HeartHandshake, BarChart3 } from 'lucide-react';

export default function HowWeWork() {
  const { t, isUrdu } = useLanguage();

  const icons = [Ban, Bird, HeartHandshake, BarChart3];
  const cards = t.aboutPage.howWeWork.cards;

  return (
    <section className="py-24 px-6 bg-[#F0F7F4] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={isUrdu ? "urdu text-primary mb-4" : "text-primary mb-4"}
          >
            {t.aboutPage.howWeWork.heading}
          </motion.h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card: any, index: number) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-primary/5 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                  <Icon size={32} />
                </div>
                <h4 className={isUrdu ? "urdu font-bold text-lg mb-3 text-primary" : "font-bold text-lg mb-3 text-primary"}>
                  {card.title}
                </h4>
                <p className={isUrdu ? "urdu text-sm text-dark/70 leading-relaxed" : "text-sm text-dark/70 leading-relaxed"}>
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
