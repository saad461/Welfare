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

export default function WhatWeDo() {
  const { t, isUrdu } = useLanguage();

  const services = [
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
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className={isUrdu ? "urdu text-primary mb-4" : "text-primary mb-4"}
          >
            {t.whatWeDo.heading}
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={isUrdu ? "urdu text-dark/60 max-w-2xl mx-auto" : "text-dark/60 max-w-2xl mx-auto"}
          >
            {t.whatWeDo.subheading}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const content = (t.manifesto.points as any)[service.key];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-background border border-gray-100 hover:border-secondary transition-all group cursor-pointer"
                onClick={() => {
                  const targetId = service.key === 'education' || service.key === 'ration' ? 'projects' : 'impact';
                  document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon size={32} />
                </div>
                <h4 className={isUrdu ? "urdu font-bold text-xl mb-3 text-primary" : "font-bold text-xl mb-3 text-primary"}>
                  {content.title}
                </h4>
                <p className={isUrdu ? "urdu text-sm text-dark/70 leading-relaxed" : "text-sm text-dark/70 leading-relaxed"}>
                  {content.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
