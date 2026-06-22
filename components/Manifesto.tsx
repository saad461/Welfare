'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import {
  Utensils,
  GraduationCap,
  Droplets,
  Scissors,
  Moon,
  Accessibility,
  Building2,
  Heart,
  CloudRain
} from 'lucide-react';

export default function Manifesto() {
  const { t, isUrdu } = useLanguage();

  const points = [
    { icon: Utensils, key: 'ration' },
    { icon: GraduationCap, key: 'education' },
    { icon: Droplets, key: 'water' },
    { icon: Scissors, key: 'sewing' },
    { icon: Moon, key: 'ramadan' },
    { icon: Accessibility, key: 'disability' },
    { icon: Building2, key: 'mosque' },
    { icon: Heart, key: 'wedding' },
    { icon: CloudRain, key: 'relief' },
  ];

  return (
    <section className="py-24 px-6 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className={isUrdu ? "urdu text-white mb-4" : "text-white mb-4"}
          >
            {t.manifesto.heading}
          </motion.h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => {
            const Icon = point.icon;
            const content = (t.manifesto.points as any)[point.key];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="w-14 h-14 bg-secondary/20 text-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Icon size={28} />
                </div>
                <div>
                  <h4 className={isUrdu ? "urdu font-bold text-xl mb-2 text-secondary" : "font-bold text-xl mb-2 text-secondary"}>
                    {content.title}
                  </h4>
                  <p className={isUrdu ? "urdu text-sm text-white/80 leading-relaxed" : "text-sm text-white/80 leading-relaxed"}>
                    {content.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
