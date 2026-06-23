'use client';

import React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import { GalleryImage } from '@/lib/galleryData';
import { useLanguage } from '@/context/LanguageContext';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: GalleryImage[];
  currentIndex: number;
}

const LightboxModal: React.FC<LightboxModalProps> = ({ isOpen, onClose, images, currentIndex }) => {
  const { isUrdu } = useLanguage();

  const slides = images.map((img) => ({
    src: img.src,
    title: isUrdu ? img.titleUr : img.title,
    description: isUrdu ? img.descriptionUr : img.description,
  }));

  return (
    <Lightbox
      open={isOpen}
      close={onClose}
      index={currentIndex}
      slides={slides}
      plugins={[Zoom, Captions, Thumbnails, Counter]}
      captions={{
        showToggle: true,
        descriptionMaxLines: 3,
      }}
      counter={{ container: { style: { top: "unset", bottom: "10px" } } }}
    />
  );
};

export default LightboxModal;
