'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Target, Eye, Scale, CheckCircle2 } from 'lucide-react';

export default function MissionVision() {
  const { t, isUrdu } = useLanguage();

  const values = t.aboutPage.missionVision.values.list;

  return (
    <section className="py-24 px-6 bg-[#F0F7F4] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-primary/5 flex flex-col"
          >
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8">
              <Target size={32} />
            </div>
            <h3 className={isUrdu ? "urdu text-2xl font-bold mb-4 text-primary" : "text-2xl font-bold mb-4 text-primary"}>
              {t.aboutPage.missionVision.mission.title}
            </h3>
            <p className={isUrdu ? "urdu text-dark/70 leading-relaxed" : "text-dark/70 leading-relaxed"}>
              {t.aboutPage.missionVision.mission.content}
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-secondary/5 flex flex-col"
          >
            <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-8">
              <Eye size={32} />
            </div>
            <h3 className={isUrdu ? "urdu text-2xl font-bold mb-4 text-secondary" : "text-2xl font-bold mb-4 text-secondary"}>
              {t.aboutPage.missionVision.vision.title}
            </h3>
            <p className={isUrdu ? "urdu text-dark/70 leading-relaxed" : "text-dark/70 leading-relaxed"}>
              {t.aboutPage.missionVision.vision.content}
            </p>
          </motion.div>

          {/* Values Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-primary/5 flex flex-col"
          >
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8">
              <Scale size={32} />
            </div>
            <h3 className={isUrdu ? "urdu text-2xl font-bold mb-6 text-primary" : "text-2xl font-bold mb-6 text-primary"}>
              {t.aboutPage.missionVision.values.title}
            </h3>
            <ul className="space-y-4">
              {values.map((value: any, index: number) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-secondary flex-shrink-0" />
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-dark">{value.title}</span>
                    <span className="text-dark/40">—</span>
                    <span className={isUrdu ? "urdu text-sm text-dark/60" : "text-sm text-dark/60"}>
                      {isUrdu ? value.ur || value.title : value.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
