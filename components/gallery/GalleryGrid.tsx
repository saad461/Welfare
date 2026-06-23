'use client';

import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import { AnimatePresence } from 'framer-motion';
import GalleryCard from './GalleryCard';
import LightboxModal from './LightboxModal';
import { GalleryImage } from '@/lib/galleryData';

interface GalleryGridProps {
  images: GalleryImage[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images }) => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    768: 3,
    640: 2,
    480: 1
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex -ml-6 w-auto"
        columnClassName="pl-6 bg-clip-padding"
      >
        <AnimatePresence mode='popLayout'>
          {images.map((image, index) => (
            <GalleryCard
              key={image.id}
              image={image}
              onClick={() => setLightboxIndex(index)}
            />
          ))}
        </AnimatePresence>
      </Masonry>

      <LightboxModal
        isOpen={lightboxIndex > -1}
        onClose={() => setLightboxIndex(-1)}
        images={images}
        currentIndex={lightboxIndex}
      />
    </>
  );
};

export default GalleryGrid;
