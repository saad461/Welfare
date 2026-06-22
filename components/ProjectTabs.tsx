'use client';

import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';
import { Home, GraduationCap, Droplets, HeartPulse, BookOpen, Utensils, ShieldCheck, Dumbbell, Star, ChevronRight } from 'lucide-react';

const YateemKhanaTab = () => {
  const { t, isUrdu } = useLanguage();

  const features = [
    { icon: Home, title: t.projects.yateemKhana.features.shelter.title, desc: t.projects.yateemKhana.features.shelter.desc },
    { icon: Utensils, title: t.projects.yateemKhana.features.meals.title, desc: t.projects.yateemKhana.features.meals.desc },
    { icon: GraduationCap, title: t.projects.yateemKhana.features.education.title, desc: t.projects.yateemKhana.features.education.desc },
    { icon: HeartPulse, title: t.projects.yateemKhana.features.healthcare.title, desc: t.projects.yateemKhana.features.healthcare.desc },
    { icon: Star, title: t.projects.yateemKhana.features.islamic.title, desc: t.projects.yateemKhana.features.islamic.desc },
    { icon: Dumbbell, title: t.projects.yateemKhana.features.recreation.title, desc: t.projects.yateemKhana.features.recreation.desc },
  ];

  const stats = [
    { label: t.projects.yateemKhana.stats.orphans, value: '50' },
    { label: t.projects.yateemKhana.stats.meals, value: '150+' },
    { label: t.projects.yateemKhana.stats.years, value: '16+' },
    { label: t.projects.yateemKhana.stats.cost, value: 'Rs. 7,500' },
  ];

  const galleryImages = [
    '/images/yateemkhana/IMG_1974.webp',
    '/images/yateemkhana/IMG_1979.webp',
    '/images/yateemkhana/IMG_1982.webp',
    '/images/yateemkhana/IMG_1987.webp',
    '/images/yateemkhana/IMG_1995.webp',
  ];

  return (
    <div className="space-y-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/images/yateemkhana/IMG_20230101_142923-scaled.webp"
            alt="Aal e Imran Yateem Khana"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <span className="text-secondary font-bold tracking-widest uppercase text-sm">{t.projects.yateemKhana.eyebrow}</span>
          <h2 className={isUrdu ? "urdu text-primary mt-4 mb-6" : "text-primary mt-4 mb-6"}>
            {t.projects.yateemKhana.heading}
          </h2>
          <p className={isUrdu ? "urdu text-dark/70 mb-8 leading-relaxed" : "text-dark/70 mb-8 leading-relaxed"}>
            {t.projects.yateemKhana.body}
          </p>
          <div className="inline-block bg-secondary text-white px-6 py-3 rounded-xl font-bold text-lg shadow-lg">
            {t.projects.yateemKhana.monthlyFee}
          </div>
        </div>
      </div>

      <div>
        <div className="text-center mb-12">
          <h3 className={isUrdu ? "urdu text-3xl text-primary mb-4" : "text-3xl font-display text-primary mb-4"}>
            {isUrdu ? "ہم کیا فراہم کرتے ہیں" : "What We Provide"}
          </h3>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <f.icon size={24} />
              </div>
              <h4 className={isUrdu ? "urdu font-bold text-xl mb-2" : "font-bold text-xl mb-2"}>{f.title}</h4>
              <p className={isUrdu ? "urdu text-sm text-dark/60" : "text-sm text-dark/60"}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="bg-primary p-8 rounded-2xl text-center text-white">
            <div className="text-3xl font-display text-secondary mb-2">{s.value}</div>
            <div className={isUrdu ? "urdu text-sm font-medium opacity-80" : "text-sm font-medium opacity-80"}>{s.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-primary rounded-3xl p-12 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="relative z-10">
          <h3 className={isUrdu ? "urdu text-3xl md:text-4xl mb-4" : "text-3xl md:text-4xl font-display mb-4"}>
            {t.projects.yateemKhana.cta.heading}
          </h3>
          <p className="urdu text-2xl text-secondary mb-8">{t.projects.yateemKhana.cta.hadith}</p>
          <p className="max-w-2xl mx-auto mb-10 opacity-80 italic">
            {t.projects.yateemKhana.cta.hadithRef}
          </p>
          <Link
            href="/#donate"
            className="inline-block bg-secondary text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors shadow-lg"
          >
            <span className={isUrdu ? "urdu" : ""}>{t.projects.yateemKhana.cta.button}</span>
          </Link>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-8">
          <h3 className={isUrdu ? "urdu text-2xl text-primary" : "text-2xl font-display text-primary"}>
             {isUrdu ? "تصویری جھلکیاں" : "Project Gallery"}
          </h3>
          <div className="flex gap-2">
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50">
              <ChevronRight className="rotate-180" size={20} />
            </div>
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50">
              <ChevronRight size={20} />
            </div>
          </div>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x no-scrollbar">
          {galleryImages.map((img, i) => (
            <div key={i} className="min-w-[300px] h-[220px] relative rounded-2xl overflow-hidden flex-shrink-0 snap-start group cursor-pointer shadow-sm">
              <Image
                src={img}
                alt={`Gallery ${i}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ZainabAliaTab = () => {
  const { t, isUrdu } = useLanguage();

  const subPrograms = [
    {
      title: t.projects.zainabAlia.programs.orphanage.title,
      icon: Home,
      fee: t.projects.zainabAlia.programs.orphanage.fee,
      purpose: t.projects.zainabAlia.programs.orphanage.purpose,
      features: t.projects.zainabAlia.programs.orphanage.features,
      button: t.projects.zainabAlia.programs.orphanage.button,
    },
    {
      title: t.projects.zainabAlia.programs.school.title,
      icon: GraduationCap,
      fee: t.projects.zainabAlia.programs.school.fee,
      purpose: t.projects.zainabAlia.programs.school.purpose,
      features: t.projects.zainabAlia.programs.school.features,
      button: t.projects.zainabAlia.programs.school.button,
    },
  ];

  const waterPrograms = [
    {
      title: t.projects.zainabAlia.programs.communityPump.title,
      icon: Droplets,
      cost: t.projects.zainabAlia.programs.communityPump.cost,
      depth: '200 feet',
      purpose: t.projects.zainabAlia.programs.communityPump.purpose,
    },
    {
      title: t.projects.zainabAlia.programs.householdPump.title,
      icon: Droplets,
      cost: t.projects.zainabAlia.programs.householdPump.cost,
      depth: '70-80 feet',
      purpose: t.projects.zainabAlia.programs.householdPump.purpose,
    },
  ];

  const stats = [
    { label: t.projects.zainabAlia.stats.orphans, value: '50' },
    { label: t.projects.zainabAlia.stats.students, value: '100+' },
    { label: t.projects.zainabAlia.stats.pumps, value: '77' },
    { label: t.projects.zainabAlia.stats.families, value: '500+' },
  ];

  const galleryImages = [
    '/images/zainabalia/IMG_1771.webp',
    '/images/zainabalia/IMG_1779.webp',
    '/images/zainabalia/IMG_1790.webp',
    '/images/zainabalia/IMG_1797.webp',
    '/images/zainabalia/IMG_1799.webp',
  ];

  return (
    <div className="space-y-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">{t.projects.zainabAlia.eyebrow}</span>
          <h2 className={isUrdu ? "urdu text-primary mt-4 mb-6" : "text-primary mt-4 mb-6"}>
            {t.projects.zainabAlia.heading}
          </h2>
          <p className={isUrdu ? "urdu text-dark/70 mb-8 leading-relaxed" : "text-dark/70 mb-8 leading-relaxed"}>
            {t.projects.zainabAlia.body}
          </p>
        </div>
        <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/images/zainabalia/IMG_1819.webp"
            alt="Zainab e Alia Program"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {subPrograms.map((p, i) => (
          <div key={i} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all border-t-8 border-t-primary flex flex-col h-full">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
              <p.icon size={32} />
            </div>
            <h3 className={isUrdu ? "urdu text-2xl mb-4" : "text-2xl font-display text-primary mb-4"}>{p.title}</h3>
            <div className="bg-secondary/10 text-secondary inline-block px-4 py-1 rounded-full font-bold mb-6 self-start">
              {p.fee}
            </div>
            <p className={isUrdu ? "urdu text-dark/70 mb-6 text-sm" : "text-dark/70 mb-6 text-sm leading-relaxed"}>
              {p.purpose}
            </p>
            <div className="flex flex-wrap gap-2 mb-8 mt-auto">
              {p.features.map((f, fi) => (
                <span key={fi} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full flex items-center gap-1">
                  <ShieldCheck size={12} /> <span className={isUrdu ? "urdu" : ""}>{f}</span>
                </span>
              ))}
            </div>
            <Link
              href="/#donate"
              className="block text-center py-4 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all shadow-sm"
            >
              <span className={isUrdu ? "urdu" : ""}>{p.button}</span>
            </Link>
          </div>
        ))}
      </div>

      <div>
        <div className="text-center mb-12">
          <h3 className={isUrdu ? "urdu text-3xl text-primary mb-4" : "text-3xl font-display text-primary mb-4"}>
            {isUrdu ? "صاف پانی کے منصوبے" : "Clean Water Initiatives"}
          </h3>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {waterPrograms.map((p, i) => (
            <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="w-14 h-14 bg-blue-50 text-blue-500 rounded-full flex-shrink-0 flex items-center justify-center">
                <p.icon size={28} />
              </div>
              <div>
                <h4 className={isUrdu ? "urdu font-bold text-lg mb-1" : "font-bold text-lg mb-1"}>{p.title}</h4>
                <div className="flex items-center gap-4 text-sm mb-3">
                  <span className="font-bold text-primary">{p.cost}</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-500">{p.depth} {isUrdu ? "گہرائی" : "depth"}</span>
                </div>
                <p className={isUrdu ? "urdu text-xs text-dark/60" : "text-xs text-dark/60"}>{p.purpose}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="bg-secondary p-8 rounded-2xl text-center text-primary shadow-sm">
            <div className="text-3xl font-display mb-2">{s.value}</div>
            <div className={isUrdu ? "urdu text-xs font-bold uppercase tracking-wider opacity-70" : "text-xs font-bold uppercase tracking-wider opacity-70"}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className={isUrdu ? "urdu text-2xl text-primary mb-8" : "text-2xl font-display text-primary mb-8"}>
          {isUrdu ? "تصویری جھلکیاں" : "Project Gallery"}
        </h3>
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x no-scrollbar">
          {galleryImages.map((img, i) => (
            <div key={i} className="min-w-[300px] h-[220px] relative rounded-2xl overflow-hidden flex-shrink-0 snap-start shadow-sm group">
              <Image
                src={img}
                alt={`Gallery ${i}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export interface ProjectTabsRef {
  setActiveTab: (index: number) => void;
}

const ProjectTabs = forwardRef<ProjectTabsRef>((_, ref) => {
  const { t, isUrdu } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  useImperativeHandle(ref, () => ({
    setActiveTab: (index: number) => {
      setActiveTab(index);
    }
  }));

  const tabs = [
    { label: t.projects.tabs.yateemKhana },
    { label: t.projects.tabs.zainabAlia },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center border-b border-gray-100 mb-20">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-8 py-6 text-lg md:text-xl font-bold transition-all relative ${
                activeTab === i ? 'text-primary' : 'text-gray-400 hover:text-primary/70'
              }`}
            >
              <div className="flex flex-col items-center">
                <span className={isUrdu ? "urdu" : ""}>{tab.label}</span>
              </div>
              {activeTab === i && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-secondary"
                />
              )}
            </button>
          ))}
        </div>

        <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 0 ? <YateemKhanaTab /> : <ZainabAliaTab />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
});

ProjectTabs.displayName = 'ProjectTabs';

export default ProjectTabs;
