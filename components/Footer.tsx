'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, Send } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

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
              <span className="font-display font-bold text-xl tracking-tight">
                Aal e Imran Welfare
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="flex items-center space-x-4">
              <Link href="#" className="hover:text-secondary transition-colors"><Facebook size={20} /></Link>
              <Link href="#" className="hover:text-secondary transition-colors"><Instagram size={20} /></Link>
              <Link href="#" className="hover:text-secondary transition-colors"><Youtube size={20} /></Link>
              <Link href="#" className="hover:text-secondary transition-colors"><Send size={20} /></Link>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-display text-xl mb-6 text-secondary">{t.footer.quickLinks}</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="#home" className="hover:text-white transition-colors">{t.nav.home}</Link></li>
              <li><Link href="#about" className="hover:text-white transition-colors">{t.nav.about}</Link></li>
              <li><Link href="#projects" className="hover:text-white transition-colors">{t.nav.projects}</Link></li>
              <li><Link href="#gallery" className="hover:text-white transition-colors">{t.nav.gallery}</Link></li>
              <li><Link href="#blog" className="hover:text-white transition-colors">{t.nav.blog}</Link></li>
              <li><Link href="#events" className="hover:text-white transition-colors">{t.nav.events}</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Column 3 - Our Programs */}
          <div>
            <h4 className="font-display text-xl mb-6 text-secondary">{t.footer.ourPrograms}</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Aal e Imran Yateem Khana</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Zainab e Alia</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Orphan Sponsorship</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Qurbani Program</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Zakat Calculator</Link></li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="font-display text-xl mb-6 text-secondary">{t.footer.contactUs}</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3 text-sm">
                <span>📍</span>
                <span>{t.footer.address}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <span>📞</span>
                <span>{t.footer.phone}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <span>✉️</span>
                <span>{t.footer.email}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <span>💬</span>
                <span>{t.footer.whatsapp}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="mb-4 md:mb-0">{t.footer.rights}</p>
          <p className="flex items-center">
             {t.footer.madeWith}
          </p>
        </div>
      </div>
    </footer>
  );
}
