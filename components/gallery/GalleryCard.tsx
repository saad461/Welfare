'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { GalleryImage } from '@/lib/galleryData';
import { useLanguage } from '@/context/LanguageContext';

interface GalleryCardProps {
  image: GalleryImage;
  onClick: () => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ image, onClick }) => {
  const { t, isUrdu } = useLanguage();

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'yateemkhana': return 'bg-primary';
      case 'zainabalia': return 'bg-secondary';
      case 'events': return 'bg-blue-600';
      case 'qurbani': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer mb-6 break-inside-avoid"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] shadow-md transition-shadow hover:shadow-xl">
        <Image
          src={image.src}
          alt={isUrdu ? image.titleUr : image.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Hover Overlay Content */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center">
          <div className="bg-white/90 p-3 rounded-full text-primary transform scale-0 group-hover:scale-100 transition-transform duration-300 mb-4">
            <Eye size={24} />
          </div>

          <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
            <h4 className={`text-white font-bold text-lg mb-1 ${isUrdu ? 'urdu' : ''}`}>
              {isUrdu ? image.titleUr : image.title}
            </h4>
            <span className={`text-white/80 text-xs font-medium px-3 py-1 rounded-full border border-white/30 ${isUrdu ? 'urdu' : ''}`}>
              {t.gallery.tabs[image.category as keyof typeof t.gallery.tabs]}
            </span>
          </div>
        </div>

        {/* Static Category Badge */}
        <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider transition-opacity duration-300 group-hover:opacity-0 ${getCategoryColor(image.category)}`}>
          {t.gallery.tabs[image.category as keyof typeof t.gallery.tabs]}
        </div>
      </div>

      <div className="mt-3 px-1 group-hover:opacity-0 transition-opacity duration-300">
        <h3 className={`text-lg font-bold text-primary ${isUrdu ? 'urdu' : ''}`}>
          {isUrdu ? image.titleUr : image.title}
        </h3>
        <p className={`text-sm text-gray-500 line-clamp-2 mt-1 leading-relaxed ${isUrdu ? 'urdu' : ''}`}>
          {isUrdu ? image.descriptionUr : image.description}
        </p>
      </div>
    </motion.div>
  );
};

export default GalleryCard;
