'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, Send, Music2, Share2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { CONTACT_INFO, DONATION_INFO } from '@/lib/constants';

export default function Footer() {
  const { t, isUrdu } = useLanguage();

  return (
    <footer className="bg-dark text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1 - Brand */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-secondary font-bold text-xs border-2 border-secondary overflow-hidden">
                AIW
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tight leading-none">
                  Aal e Imran Welfare
                </span>
                <span className="urdu text-sm leading-none mt-1">
                  آل عمران ویلفیئر
                </span>
              </div>
            </div>
            <p className={isUrdu ? "urdu text-gray-400 leading-relaxed" : "text-gray-400 leading-relaxed"}>
              {t.footer.tagline}
            </p>
            <div className="flex items-center space-x-4">
              <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><Facebook size={20} /></a>
              {/* TODO: Add real content for social links below */}
              <a href="#" className="hover:text-secondary transition-colors opacity-50 cursor-not-allowed"><Instagram size={20} /></a>
              <a href="#" className="hover:text-secondary transition-colors opacity-50 cursor-not-allowed"><Youtube size={20} /></a>
              <a href="#" className="hover:text-secondary transition-colors opacity-50 cursor-not-allowed"><Share2 size={20} /></a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className={isUrdu ? "urdu text-xl mb-6 text-secondary" : "font-display text-xl mb-6 text-secondary"}>{t.footer.quickLinks}</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">{t.nav.home}</Link></li>
              <li><Link href="/#about" className="hover:text-white transition-colors">{t.nav.about}</Link></li>
              <li><Link href="/team" className="hover:text-white transition-colors">{t.nav.team}</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">{t.nav.projects}</Link></li>
              <li><Link href="/#contact" className="hover:text-white transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Column 3 - Our Programs */}
          <div>
            <h4 className={isUrdu ? "urdu text-xl mb-6 text-secondary" : "font-display text-xl mb-6 text-secondary"}>{t.footer.ourPrograms}</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/projects" className="hover:text-white transition-colors">{t.footer.programs.yateemKhana}</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">{t.footer.programs.zainabAlia}</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">{t.footer.programs.orphanSponsorship}</Link></li>
              <li><Link href="/#qurbani" className="hover:text-white transition-colors">{t.footer.programs.qurbani}</Link></li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className={isUrdu ? "urdu text-xl mb-6 text-secondary" : "font-display text-xl mb-6 text-secondary"}>{t.footer.contactUs}</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3 text-sm">
                <span className="flex-shrink-0">📍</span>
                <span className={isUrdu ? "urdu" : ""}>{t.footer.address}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <span>📞</span>
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <span>✉️</span>
                <span className="break-all">{CONTACT_INFO.email}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <span>💬</span>
                <span>{CONTACT_INFO.whatsapp}</span>
              </li>
            </ul>
            <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Bank Details</p>
              <p className="text-xs text-secondary font-bold">{DONATION_INFO.bankName}</p>
              <p className="text-[10px] font-mono text-gray-400 break-all mt-1">{DONATION_INFO.iban}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className={isUrdu ? "urdu mb-4 md:mb-0" : "mb-4 md:mb-0"}>{t.footer.rights}</p>
          <p className={isUrdu ? "urdu flex items-center" : "flex items-center"}>
             {t.footer.madeWith}
          </p>
        </div>
      </div>
    </footer>
  );
}
