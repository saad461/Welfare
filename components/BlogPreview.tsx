'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { blogPosts } from '@/lib/blogData';
import BlogCard from './blog/BlogCard';

const BlogPreview = () => {
  const { t, isUrdu } = useLanguage();

  // Get 3 latest posts
  const latestPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);

  return (
    <section className="py-16 md:py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className={`text-4xl md:text-5xl font-display font-bold text-dark mb-4 ${isUrdu ? 'urdu' : ''}`}>
              {t.blog.homepage.title}
            </h2>
            <p className={`text-lg text-gray-600 max-w-xl ${isUrdu ? 'urdu' : ''}`}>
              {t.blog.homepage.subtitle}
            </p>
          </div>
          <Link
            href="/blog"
            className={`flex items-center gap-2 text-primary font-bold hover:text-secondary transition-all group ${isUrdu ? 'urdu' : ''}`}
          >
            {t.blog.homepage.viewAll} <ArrowRight size={20} className={`transition-transform group-hover:translate-x-1 ${isUrdu ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
