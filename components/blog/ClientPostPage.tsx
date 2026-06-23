'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BlogPostView from '@/components/blog/BlogPost';
import BlogSidebar from '@/components/blog/BlogSidebar';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { BlogPost } from '@/lib/blogData';

interface ClientPostPageProps {
  post: BlogPost;
}

export default function ClientPostPage({ post }: ClientPostPageProps) {
  const { t, isUrdu } = useLanguage();

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb Header */}
      <section className="bg-white pt-24 pb-8 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-primary transition-colors">{t.nav.home}</Link>
          <ChevronRight size={14} className={isUrdu ? 'rotate-180' : ''} />
          <Link href="/blog" className="hover:text-primary transition-colors">{t.nav.blog}</Link>
          <ChevronRight size={14} className={isUrdu ? 'rotate-180' : ''} />
          <span className="text-gray-600 font-medium line-clamp-1">
            {isUrdu ? post.titleUr : post.title}
          </span>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Article */}
          <div className="lg:col-span-8">
            <BlogPostView post={post} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <BlogSidebar />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
