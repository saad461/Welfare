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
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ManifestoProps {
  showTitle?: boolean;
  background?: 'green' | 'white';
  columns?: 2 | 3;
}

export default function Manifesto({
  showTitle = true,
  background = 'green',
  columns = 3
}: ManifestoProps) {
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
    <section className={cn(
      "py-24 px-6 overflow-hidden",
      background === 'green' ? "bg-primary text-white" : "bg-white text-dark"
    )}>
      <div className="max-w-7xl mx-auto">
        {showTitle && (
          <div className="text-center mb-16">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className={cn(
                isUrdu ? "urdu mb-4" : "mb-4",
                background === 'green' ? "text-white" : "text-primary"
              )}
            >
              {t.manifesto.heading}
            </motion.h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>
        )}

        <div className={cn(
          "grid grid-cols-1 gap-8",
          columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"
        )}>
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
                className={cn(
                  "flex items-start gap-6 p-6 rounded-2xl border transition-colors group",
                  background === 'green'
                    ? "bg-white/5 border-white/10 hover:bg-white/10"
                    : "bg-background border-gray-100 hover:border-primary/20"
                )}
              >
                <div className="w-14 h-14 bg-secondary/20 text-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Icon size={28} />
                </div>
                <div>
                  <h4 className={cn(
                    isUrdu ? "urdu font-bold text-xl mb-2" : "font-bold text-xl mb-2",
                    "text-secondary"
                  )}>
                    {content.title}
                  </h4>
                  <p className={cn(
                    isUrdu ? "urdu text-sm leading-relaxed" : "text-sm leading-relaxed",
                    background === 'green' ? "text-white/80" : "text-dark/70"
                  )}>
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
