'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'EN' ? 'UR' : 'EN')}
      className="flex items-center space-x-1 font-medium text-sm md:text-base hover:text-secondary transition-colors duration-300"
    >
      <span className={language === 'EN' ? 'text-primary font-bold' : 'text-gray-500'}>EN</span>
      <span className="text-gray-300 mx-1">|</span>
      <span className={language === 'UR' ? 'text-primary font-bold urdu' : 'text-gray-500 urdu'}>اردو</span>
    </button>
  );
}
