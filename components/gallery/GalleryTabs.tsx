'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

interface GalleryTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const GalleryTabs: React.FC<GalleryTabsProps> = ({ activeTab, setActiveTab }) => {
  const { t } = useLanguage();

  const tabs = [
    { id: 'all', label: t.gallery.tabs.all },
    { id: 'yateemkhana', label: t.gallery.tabs.yateemkhana },
    { id: 'zainabalia', label: t.gallery.tabs.zainabalia },
    { id: 'events', label: t.gallery.tabs.events },
    { id: 'qurbani', label: t.gallery.tabs.qurbani },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`relative px-6 py-2 rounded-full font-bold transition-all duration-300 ${
            activeTab === tab.id
              ? 'bg-secondary text-white shadow-lg'
              : 'bg-white text-primary border border-primary hover:bg-primary/5'
          }`}
        >
          {tab.label}
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeTabUnderline"
              className="absolute -bottom-1 left-1/4 right-1/4 h-1 bg-white rounded-full opacity-50"
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default GalleryTabs;
