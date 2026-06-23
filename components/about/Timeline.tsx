'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Timeline() {
  const { t, isUrdu } = useLanguage();

  const milestones = t.aboutPage.timeline.items;

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={isUrdu ? "urdu text-primary mb-4" : "text-primary mb-4"}
          >
            {t.aboutPage.timeline.heading}
          </motion.h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="relative">
          {/* Vertical Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-100 hidden md:block"></div>

          <div className="space-y-12 md:space-y-0">
            {milestones.map((item: any, index: number) => (
              <div key={index} className="relative flex flex-col md:flex-row items-center justify-center">
                {/* Mobile Line extension */}
                <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-100 md:hidden"></div>

                <div className={cn(
                  "flex items-center w-full md:w-1/2 mb-8 md:mb-24",
                  index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                )}>
                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={cn(
                      "w-[calc(100%-2rem)] ml-8 md:ml-0 md:w-[90%] p-8 rounded-3xl shadow-lg border-t-4",
                      index % 2 === 0 ? "bg-primary text-white border-secondary" : "bg-white text-dark border-primary"
                    )}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar size={18} className={index % 2 === 0 ? "text-secondary" : "text-primary"} />
                      <span className={cn(
                        "font-bold tracking-widest text-sm",
                        index % 2 === 0 ? "text-secondary" : "text-primary"
                      )}>
                        {item.year}
                      </span>
                    </div>
                    <h4 className={cn(
                      isUrdu ? "urdu text-xl font-bold mb-3" : "text-xl font-bold mb-3",
                      index % 2 === 0 ? "text-white" : "text-primary"
                    )}>
                      {item.title}
                    </h4>
                    <p className={cn(
                      isUrdu ? "urdu text-sm leading-relaxed" : "text-sm leading-relaxed",
                      index % 2 === 0 ? "text-white/80" : "text-dark/70"
                    )}>
                      {item.desc}
                    </p>
                  </motion.div>
                </div>

                {/* Central Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-secondary rounded-full z-10 flex items-center justify-center shadow-lg">
                   <div className="w-2 h-2 bg-secondary rounded-full"></div>
                </div>

                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
