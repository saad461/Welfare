'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Shield, Users } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Manifesto from './Manifesto';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function About() {
  const { t, isUrdu } = useLanguage();

  return (
    <>
      <section id="about" className="py-16 md:py-24 px-6 bg-background overflow-hidden">
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
              {/* Main Image Card */}
              <div className="aspect-[4/5] bg-gradient-to-br from-primary to-dark rounded-3xl overflow-hidden shadow-2xl relative">
                <Image
                  src="/images/about/organization.webp"
                  alt={t.about.altOrganization}
                  fill
                  className="object-cover object-right"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Overlapping Stat Cards */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -top-6 -right-6 md:right-10 bg-secondary text-white p-6 rounded-2xl shadow-xl max-w-[200px]"
              >
                <p className={cn("font-bold text-lg leading-tight", isUrdu && "urdu")}>{t.about.statOrphans}</p>
              </motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 md:left-10 bg-primary text-white p-6 rounded-2xl shadow-xl max-w-[200px]"
              >
                <p className={cn("font-bold text-lg leading-tight", isUrdu && "urdu")}>{t.about.statYears}</p>
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
              <p className={cn("text-secondary font-bold tracking-widest uppercase mb-4 text-sm", isUrdu && "urdu")}>
                {t.about.eyebrow}
              </p>
              <h2 className={cn("text-primary mb-8", isUrdu && "urdu")}>
                {t.about.heading}
              </h2>
              <div className={cn("space-y-6 text-dark/80 mb-10", isUrdu && "urdu")}>
                <p>{t.about.body1}</p>
                <p>{t.about.body2}</p>
              </div>

              {/* Quran Ayah Box */}
              <div className="bg-white p-6 md:p-8 rounded-2xl border-l-8 border-secondary shadow-sm mb-10">
                <p className="urdu text-xl md:text-2xl text-primary text-center mb-4">
                  {t.about.quranAyah}
                </p>
                <p className={cn("text-center text-sm md:text-base font-medium italic text-dark/60", isUrdu && "urdu")}>
                  {isUrdu ? "اور وہ اس کی محبت میں (خود اپنی ضرورت کے باوجود) مسکین، یتیم اور قیدی کو کھانا کھلاتے ہیں۔" : "And they give food in spite of love for it to the needy, the orphan, and the captive"}
                </p>
                <p className="text-center text-sm font-medium italic text-dark/40 mt-2">
                  {t.about.quranRef}
                </p>
              </div>

              {/* Value Cards */}
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2
                    }
                  }
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
              >
                {[
                  { icon: Shield, title: t.about.values.faith.title, desc: t.about.values.faith.desc },
                  { icon: Heart, title: t.about.values.compassion.title, desc: t.about.values.compassion.desc },
                  { icon: Users, title: t.about.values.transparency.title, desc: t.about.values.transparency.desc }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                      <value.icon size={24} />
                    </div>
                    <h4 className={cn("font-bold mb-2", isUrdu && "urdu")}>{value.title}</h4>
                    <p className={cn("text-sm text-dark/70", isUrdu && "urdu")}>{value.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              <div>
                <Link
                  href="/team"
                  className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <span className={isUrdu ? "urdu" : ""}>{t.about.learnMore}</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div id="about-manifesto">
        <Manifesto />
      </div>
    </>
  );
}
