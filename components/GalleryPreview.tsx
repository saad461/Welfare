'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Eye } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { galleryImages } from '@/lib/galleryData';

const GalleryPreview = () => {
  const { t, isUrdu } = useLanguage();
  const [previewImages, setPreviewImages] = React.useState<typeof galleryImages>([]);

  React.useEffect(() => {
    // Get 6 random images for the preview on the client side only
    const shuffled = [...galleryImages].sort(() => 0.5 - Math.random()).slice(0, 6);
    setPreviewImages(shuffled);
  }, []);

  return (
    <section className="py-16 md:py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className={`text-4xl md:text-5xl font-display font-bold text-dark mb-4 ${isUrdu ? 'urdu' : ''}`}>
              {t.gallery.homepage.title}
            </h2>
            <p className={`text-lg text-gray-600 max-w-xl ${isUrdu ? 'urdu' : ''}`}>
              {t.gallery.homepage.subtitle}
            </p>
          </div>
          <Link
            href="/gallery"
            className={`flex items-center gap-2 text-primary font-bold hover:text-secondary transition-all group ${isUrdu ? 'urdu' : ''}`}
          >
            {t.gallery.homepage.viewAll} <ArrowRight size={20} className={`transition-transform group-hover:translate-x-1 ${isUrdu ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 min-h-[300px]">
          {previewImages.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer shadow-lg"
            >
              <Link href="/gallery">
                <Image
                  src={img.src}
                  alt={isUrdu ? img.titleUr : img.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-white/90 p-3 rounded-full text-primary scale-0 group-hover:scale-100 transition-transform duration-300">
                    <Eye size={24} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
