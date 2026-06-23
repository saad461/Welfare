'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/lib/blogData';
import { useLanguage } from '@/context/LanguageContext';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const { t, isUrdu } = useLanguage();

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full group"
    >
      <Link href={`/blog/${post.slug}`} className="relative h-56 overflow-hidden block">
        <Image
          src={post.featuredImage}
          alt={isUrdu ? post.titleUr : post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-secondary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          {isUrdu ? post.categoryLabelUr : post.categoryLabel}
        </div>
      </Link>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
          <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
          <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h3 className={`text-2xl font-display font-bold text-primary mb-4 line-clamp-2 hover:text-secondary transition-colors ${isUrdu ? 'urdu' : ''}`}>
            {isUrdu ? post.titleUr : post.title}
          </h3>
        </Link>

        <p className={`text-gray-600 mb-6 line-clamp-3 leading-relaxed flex-grow ${isUrdu ? 'urdu' : ''}`}>
          {isUrdu ? post.excerptUr : post.excerpt}
        </p>

        <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <User size={16} />
            </div>
            {isUrdu ? t.blog.card.author : post.author}
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className={`text-primary font-bold inline-flex items-center gap-1 hover:gap-2 transition-all ${isUrdu ? 'urdu' : ''}`}
          >
            {t.blog.card.readMore} <ArrowRight size={18} className={isUrdu ? 'rotate-180' : ''} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
