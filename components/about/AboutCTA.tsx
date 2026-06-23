'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import { Phone, Mail, MessageCircle, Heart, UserPlus, Info } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function AboutCTA() {
  const { t, isUrdu } = useLanguage();

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C9922A] to-[#A67818]"></div>

      {/* Islamic Geometric Pattern Overlay (CSS Only) */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={isUrdu ? "urdu text-white mb-6 text-4xl md:text-5xl" : "text-white mb-6 text-4xl md:text-5xl font-display"}
        >
          {t.aboutPage.cta.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={isUrdu ? "urdu text-white/90 text-xl mb-12 max-w-2xl mx-auto leading-relaxed" : "text-white/90 text-xl mb-12 max-w-2xl mx-auto leading-relaxed"}
        >
          {t.aboutPage.cta.subtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <Link
            href="/#donate"
            className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all flex items-center gap-3 shadow-xl"
          >
            <Heart size={20} fill="currentColor" />
            <span className={isUrdu ? "urdu" : ""}>{t.aboutPage.cta.buttons.donate}</span>
          </Link>

          <Link
            href="/sponsor"
            className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all flex items-center gap-3 shadow-xl"
          >
            <UserPlus size={20} />
            <span className={isUrdu ? "urdu" : ""}>{t.aboutPage.cta.buttons.sponsor}</span>
          </Link>

          <Link
            href="/#contact"
            className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all flex items-center gap-3 shadow-xl"
          >
            <Info size={20} />
            <span className={isUrdu ? "urdu" : ""}>{t.aboutPage.cta.buttons.contact}</span>
          </Link>
        </motion.div>

        {/* Contact Info Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-8 text-white/80 font-medium"
        >
          <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone size={18} />
            <span>{CONTACT_INFO.phone}</span>
          </a>
          <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={18} />
            <span className="text-sm md:text-base">{CONTACT_INFO.email}</span>
          </a>
          <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
            <MessageCircle size={18} />
            <span>WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
