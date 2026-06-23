'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { usePathname } from 'next/navigation';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, isUrdu } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = pathname === '/';

  const navLinks = [
    { name: t.nav.home, href: isHomePage ? '#home' : '/' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.projects, href: '/projects' },
    { name: t.nav.sponsor, href: '/sponsor' },
    { name: t.nav.zakat, href: '/zakat' },
    { name: t.nav.gallery, href: '/gallery'},
    { name: t.nav.blog, href: '/blog'},
    { name: t.nav.events, href: isHomePage ? '#events' : '/#events' },
    { name: t.nav.qurbani, href: '/qurbani' },
    { name: t.nav.donate, href: isHomePage ? '#donate' : '/#donate' },
    { name: t.nav.contact, href: isHomePage ? '#contact' : '/#contact' },
  ];

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (!isHomePage) {
      if (pathname === '/projects') setActiveSection('projects');
      if (pathname === '/team') setActiveSection('team');
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = ['home', 'about', 'gallery', 'blog', 'events', 'qurbani', 'donate', 'contact'];
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [isHomePage, pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 h-16 md:h-20 flex items-center',
        (isScrolled || !isHomePage) ? 'glass-nav shadow-md' : 'bg-transparent'
      )}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Name */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-12 h-12 flex items-center justify-center overflow-hidden relative">
             <Image src="/images/logo/logo.webp" alt="Logo" fill className="object-contain" />
          </div>
          <div className="flex flex-col">
            <span className={cn("font-display font-bold text-lg leading-none", (isScrolled || !isHomePage) ? "text-primary" : "text-white")}>
              Aal e Imran Welfare
            </span>
            <span className={cn("urdu text-sm leading-none mt-1", (isScrolled || !isHomePage) ? "text-primary" : "text-white")}>
              آل عمران ویلفیئر
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '') ||
                           (link.href === '/projects' && pathname === '/projects') ||
                           (link.href === '/team' && pathname === '/team');
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-secondary group",
                  (isScrolled || !isHomePage) ? "text-dark" : "text-white",
                  isActive && "text-primary font-bold"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                  isActive ? "w-full" : "w-0"
                )} />
              </Link>
            );
          })}
        </div>

        {/* Right Side Items */}
        <div className="hidden lg:flex items-center space-x-6">
          <Search className={cn("w-5 h-5 cursor-pointer hover:text-secondary transition-colors", (isScrolled || !isHomePage) ? "text-dark" : "text-white")} />
          <LanguageToggle />
          <Link
            href={isHomePage ? "#donate" : "/#donate"}
            className="bg-secondary text-white px-6 py-2 rounded-full font-bold hover:bg-opacity-90 hover:scale-105 transition-all duration-300 shadow-md"
          >
            {t.nav.donateNow}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center space-x-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn((isScrolled || !isHomePage) ? "text-dark" : "text-white")}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white mt-2 rounded-2xl shadow-xl overflow-hidden absolute top-full left-6 right-6 border border-gray-100"
          >
            <div className="p-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-dark text-lg font-medium hover:text-primary transition-colors border-b border-gray-100 pb-2"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center justify-between py-2">
                <span className="text-dark font-medium">Language</span>
                <LanguageToggle />
              </div>
              <Link
                href={isHomePage ? "#donate" : "/#donate"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-secondary text-white text-center py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all"
              >
                {t.nav.donateNow}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
