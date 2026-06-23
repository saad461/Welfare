'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BlogGrid from '@/components/blog/BlogGrid';
import { useLanguage } from '@/context/LanguageContext';
import { blogPosts } from '@/lib/blogData';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function BlogPage() {
  const { t, isUrdu } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: t.blog.categories.all },
    { id: 'orphan-care', label: t.blog.categories.orphanCare },
    { id: 'zakat-giving', label: t.blog.categories.zakatGiving },
    { id: 'women-empowerment', label: t.blog.categories.womenEmpowerment },
    { id: 'field-reports', label: t.blog.categories.fieldReports },
    { id: 'news-updates', label: t.blog.categories.newsUpdates },
  ];

  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[40vh] flex items-center justify-center pt-16 md:pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('/images/hero/Be the Reason a Child Learns_20250417_170051_0000.webp')] bg-cover bg-center mix-blend-overlay" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className={`text-4xl md:text-6xl font-display font-bold mb-4 ${isUrdu ? 'urdu' : ''}`}>
            {t.blog.hero.heading}
          </h1>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto text-white/90 ${isUrdu ? 'urdu' : ''}`}>
            {t.blog.hero.subtext}
          </p>

          {/* Breadcrumb */}
          <nav className="mt-8 flex items-center justify-center gap-2 text-sm text-white/70">
            <Link href="/" className="hover:text-white transition-colors">{t.nav.home}</Link>
            <ChevronRight size={14} className={isUrdu ? 'rotate-180' : ''} />
            <span className="text-white font-medium">{t.nav.blog}</span>
          </nav>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-background text-gray-600 hover:bg-primary/5 border border-transparent hover:border-primary/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        {filteredPosts.length > 0 ? (
          <BlogGrid posts={filteredPosts} />
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No articles found in this category.</p>
          </div>
        )}
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
