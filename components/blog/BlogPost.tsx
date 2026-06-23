'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User, Share2, Facebook, MessageCircle, Link as LinkIcon } from 'lucide-react';
import { BlogPost } from '@/lib/blogData';
import { useLanguage } from '@/context/LanguageContext';

interface BlogPostProps {
  post: BlogPost;
}

const BlogPostView: React.FC<BlogPostProps> = ({ post }) => {
  const { t, isUrdu } = useLanguage();

  const handleShare = (platform: string) => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const text = isUrdu ? post.titleUr : post.title;

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        alert(isUrdu ? 'لنک کاپی ہو گیا!' : 'Link copied to clipboard!');
        break;
    }
  };

  return (
    <article className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
      {/* Featured Image */}
      <div className="relative h-[40vh] md:h-[50vh] w-full">
        <Image
          src={post.featuredImage}
          alt={isUrdu ? post.titleUr : post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8">
          <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm mb-4">
            <span className="bg-secondary text-white px-4 py-1 rounded-full font-bold text-xs uppercase tracking-widest">
              {isUrdu ? post.categoryLabelUr : post.categoryLabel}
            </span>
            <span className="flex items-center gap-1"><Calendar size={16} /> {post.date}</span>
            <span className="flex items-center gap-1"><Clock size={16} /> {post.readTime}</span>
          </div>
          <h1 className={`text-3xl md:text-5xl font-display font-bold text-white leading-tight ${isUrdu ? 'urdu' : ''}`}>
            {isUrdu ? post.titleUr : post.title}
          </h1>
        </div>
      </div>

      <div className="p-8 md:p-12">
        {/* Author Info */}
        <div className="flex items-center gap-4 mb-10 pb-8 border-b border-gray-100">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <User size={24} />
          </div>
          <div>
            <span className="block text-gray-400 text-xs uppercase tracking-widest font-bold">Written By</span>
            <span className={`font-bold text-dark text-lg ${isUrdu ? 'urdu' : ''}`}>
              {isUrdu ? 'آل عمران ویلفیئر ٹیم' : post.author}
            </span>
          </div>
        </div>

        {/* Content */}
        <div
          className={`blog-content prose prose-lg prose-primary max-w-none ${isUrdu ? 'urdu text-right' : ''}`}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Support CTA */}
        <div className="mt-16 p-10 bg-background rounded-[2rem] border border-primary/10 relative overflow-hidden group">
          <div className="relative z-10 text-center">
            <h3 className={`text-2xl md:text-3xl font-display font-bold text-primary mb-4 ${isUrdu ? 'urdu' : ''}`}>
              {t.blog.post.supportWork}
            </h3>
            <p className={`text-gray-600 mb-8 max-w-2xl mx-auto ${isUrdu ? 'urdu' : ''}`}>
              {isUrdu ? 'آپ کا تعاون مظفرگڑھ میں یتیموں اور مستحق خاندانوں کے لیے امید کی کرن بن سکتا ہے۔' : 'Your support can be a beacon of hope for orphans and deserving families in Muzaffargarh.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/923002038612" className="flex items-center gap-2 bg-[#25D366] text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-all shadow-lg">
                <MessageCircle size={20} /> WhatsApp
              </a>
              <Link href="/donate" className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-all shadow-lg">
                {t.nav.donateNow}
              </Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-primary/10 transition-colors" />
        </div>

        {/* Sharing */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className={`font-bold text-dark flex items-center gap-2 ${isUrdu ? 'urdu' : ''}`}>
            <Share2 size={20} className="text-secondary" /> {t.blog.post.share}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleShare('facebook')}
              className="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all"
            >
              <Facebook size={18} />
            </button>
            <button
              onClick={() => handleShare('whatsapp')}
              className="w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all"
            >
              <MessageCircle size={18} />
            </button>
            <button
              onClick={() => handleShare('copy')}
              className="w-10 h-10 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center hover:bg-gray-200 transition-all"
            >
              <LinkIcon size={18} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostView;
