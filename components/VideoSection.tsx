'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Play, X } from 'lucide-react';

interface VideoCardProps {
  title: string;
  description: string;
  thumbnailColor: string;
  onPlay: () => void;
  isUrdu: boolean;
}

const VideoCard = ({ title, description, thumbnailColor, onPlay, isUrdu }: VideoCardProps) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group"
  >
    <div
      className={`aspect-video ${thumbnailColor} flex items-center justify-center relative cursor-pointer`}
      onClick={onPlay}
    >
      <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Play className="text-white fill-white ml-1" size={32} />
      </div>
      <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
        {isUrdu ? 'جلد آرہی ہے' : 'Coming Soon'}
      </div>
    </div>
    <div className="p-6">
      <h3 className={isUrdu ? "urdu text-xl font-bold mb-2" : "text-xl font-bold mb-2"}>{title}</h3>
      <p className={isUrdu ? "urdu text-dark/60 text-sm" : "text-dark/60 text-sm"}>{description}</p>
    </div>
  </motion.div>
);

export default function VideoSection() {
  const { t, isUrdu } = useLanguage();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 'yateemkhana',
      title: t.videos.card1.title,
      description: t.videos.card1.desc,
      thumbnailColor: 'bg-gradient-to-br from-primary to-dark',
    },
    {
      id: 'zainabalia',
      title: t.videos.card2.title,
      description: t.videos.card2.desc,
      thumbnailColor: 'bg-gradient-to-br from-secondary to-[#B8860B]',
    },
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={isUrdu ? "urdu text-primary mb-4" : "text-primary mb-4"}>
            {t.videos.heading}
          </h2>
          <p className={isUrdu ? "urdu text-2xl text-secondary" : "text-secondary"}>
             {isUrdu ? "انسانیت کی خدمت کے مناظر" : "Watch our impact in Muzaffargarh"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              title={video.title}
              description={video.description}
              thumbnailColor={video.thumbnailColor}
              onPlay={() => setSelectedVideo(video.title)}
              isUrdu={isUrdu}
            />
          ))}
        </div>

        {/* Video Modal Placeholder */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-4xl aspect-video bg-dark rounded-3xl flex flex-col items-center justify-center text-center p-12"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                  onClick={() => setSelectedVideo(null)}
                >
                  <X size={32} />
                </button>

                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-8">
                  <Play className="text-primary fill-primary ml-1" size={40} />
                </div>

                <h3 className={isUrdu ? "urdu text-white text-3xl mb-4" : "text-white text-3xl font-display mb-4"}>
                  {selectedVideo}
                </h3>
                <p className="text-white/60 text-xl urdu mb-8">
                  {t.videos.comingSoon} ان شاء اللہ
                </p>
                <p className="text-white/40 max-w-md">
                  We are currently preparing high-quality video content for this section. Please check back soon.
                </p>

                <div className="mt-12 text-xs text-white/20 uppercase tracking-widest">
                  Phase 7: Real video streaming will be implemented
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
