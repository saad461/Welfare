'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import { ArrowRight, Home, GraduationCap } from 'lucide-react';

export default function ProjectsPreview() {
  const { t, isUrdu } = useLanguage();

  const projects = [
    {
      id: 'yateemkhana',
      title: t.projects.overview.yateemKhana.title,
      desc: t.projects.overview.yateemKhana.desc,
      stat: t.about.statOrphans,
      icon: Home,
      color: 'primary',
    },
    {
      id: 'zainabalia',
      title: t.projects.overview.zainabAlia.title,
      desc: t.projects.overview.zainabAlia.desc,
      stat: t.about.statYears, // Reusing relevant stat for preview
      icon: GraduationCap,
      color: 'secondary',
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={isUrdu ? "urdu text-primary mb-4" : "text-primary mb-4"}>
            {t.preview.heading}
          </h2>
          <p className={isUrdu ? "urdu text-dark/70" : "max-w-2xl mx-auto text-dark/70"}>
            {t.preview.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-3xl border-2 border-gray-100 hover:border-primary transition-all duration-300 bg-background"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                project.color === 'primary' ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white' : 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white'
              }`}>
                <project.icon size={32} />
              </div>

              <h3 className={isUrdu ? "urdu text-2xl font-display mb-4" : "text-2xl font-display mb-4"}>
                {project.title}
              </h3>

              <p className={isUrdu ? "urdu text-dark/70 mb-6 line-clamp-3 h-18" : "text-dark/70 mb-6 line-clamp-3 h-18"}>
                {project.desc}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span className={isUrdu ? "urdu font-bold text-primary" : "font-bold text-primary"}>
                  {project.stat}
                </span>
                <Link
                  href="/projects"
                  className="flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all"
                >
                  <span className={isUrdu ? "urdu" : ""}>{t.preview.learnMore}</span>
                  <ArrowRight size={20} className={isUrdu ? "rotate-180" : ""} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-10 py-4 bg-primary text-white rounded-full font-bold hover:bg-dark transition-all duration-300 shadow-lg"
          >
            <span className={isUrdu ? "urdu" : ""}>{t.preview.viewAll}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
