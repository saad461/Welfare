'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { CONTACT_INFO, DONATION_INFO } from '@/lib/constants';
import { Copy, Check, MessageCircle, Phone, Mail, Globe, ExternalLink } from 'lucide-react';

export default function DonationSection() {
  const { t, isUrdu } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="donate" className="py-16 md:py-24 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className={isUrdu ? "urdu text-primary mb-4" : "text-primary mb-4"}
          >
            {t.donation.heading}
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={isUrdu ? "urdu text-dark/60 max-w-3xl mx-auto mb-10" : "text-dark/60 max-w-3xl mx-auto mb-10"}
          >
            {t.donation.subheading}
          </motion.p>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl border-l-8 border-secondary shadow-sm inline-block max-w-2xl text-center"
          >
            <p className="urdu text-2xl text-primary mb-4">
              {t.donation.quranAyah}
            </p>
            <p className="text-sm font-medium italic text-dark/40">
              {t.donation.quranRef}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Bank Transfer */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-primary text-white px-6 py-2 rounded-bl-2xl font-bold text-sm flex items-center gap-2">
              <Check size={16} /> {t.donation.bankTransfer.zakatBadge}
            </div>

            <h3 className={isUrdu ? "urdu text-2xl text-primary mb-8" : "text-2xl font-display text-primary mb-8"}>
              {t.donation.bankTransfer.heading}
            </h3>

            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{t.donation.bankTransfer.bank}</p>
                <p className="text-xl font-bold text-dark">{DONATION_INFO.bankName}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{t.donation.bankTransfer.title}</p>
                <p className="text-xl font-bold text-dark">{DONATION_INFO.accountTitle}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{t.donation.bankTransfer.iban}</p>
                <div className="flex flex-col md:flex-row md:items-center gap-4 mt-2">
                  <code className="bg-background px-4 py-3 rounded-xl font-mono text-sm md:text-base flex-1 border border-gray-200 break-all">
                    {DONATION_INFO.iban}
                  </code>
                  <button
                    onClick={() => copyToClipboard(DONATION_INFO.iban)}
                    className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-dark transition-colors whitespace-nowrap"
                  >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                    <span className={isUrdu ? "urdu" : ""}>{copied ? (isUrdu ? "کاپی ہوگیا" : "Copied!") : t.donation.bankTransfer.copyIban}</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Quick Contact */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="bg-primary p-6 md:p-10 rounded-3xl text-white shadow-xl flex-1">
              <h3 className={isUrdu ? "urdu text-2xl mb-8" : "text-2xl font-display mb-8"}>
                {t.donation.quickContact.heading}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white/10 hover:bg-white/20 p-4 rounded-2xl transition-colors border border-white/10"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-white/60">{t.donation.quickContact.whatsapp}</p>
                    <p className="font-bold">{CONTACT_INFO.whatsapp}</p>
                  </div>
                </a>

                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center gap-4 bg-white/10 hover:bg-white/20 p-4 rounded-2xl transition-colors border border-white/10"
                >
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-white/60">{t.donation.quickContact.phone}</p>
                    <p className="font-bold">{CONTACT_INFO.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-4 bg-white/10 hover:bg-white/20 p-4 rounded-2xl transition-colors border border-white/10"
                >
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-white/60">{t.donation.quickContact.email}</p>
                    <p className="font-bold text-sm break-all">{CONTACT_INFO.email}</p>
                  </div>
                </a>

                <a
                  href={DONATION_INFO.onlineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white/10 hover:bg-white/20 p-4 rounded-2xl transition-colors border border-white/10"
                >
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <Globe size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-white/60">{t.donation.quickContact.online}</p>
                    <p className="font-bold text-sm">Online Link</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-secondary p-8 rounded-3xl text-primary font-bold text-center shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <p className={isUrdu ? "urdu text-xl relative z-10" : "text-xl relative z-10"}>
                {t.donation.ctaBanner}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
