'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blogData';
import { useLanguage } from '@/context/LanguageContext';
import { Phone, Share2, Facebook, Link as LinkIcon, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const BlogSidebar: React.FC = () => {
  const { t, isUrdu } = useLanguage();
  const recentPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);

  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') {
          setStatus('success'); // Already subscribed is still a success for the user
        } else {
          throw error;
        }
      } else {
        setStatus('success');
        setEmail('');
      }
    } catch (err: any) {
      console.error('Newsletter error:', err);
      setStatus('error');
      setErrorMessage(isUrdu ? 'کچھ غلط ہو گیا ہے۔ براہ کرم دوبارہ کوشش کریں۔' : 'Something went wrong. Please try again.');
    }
  };

  return (
    <aside className="space-y-12">
      {/* Recent Posts */}
      <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
        <h3 className={`text-xl font-bold text-primary mb-6 flex items-center gap-2 ${isUrdu ? 'urdu' : ''}`}>
          <div className="w-1 h-6 bg-secondary rounded-full" />
          {t.blog.sidebar.recentPosts}
        </h3>
        <div className="space-y-6">
          {recentPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex gap-4">
              <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden">
                <Image
                  src={post.featuredImage}
                  alt={isUrdu ? post.titleUr : post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <div className="flex-grow">
                <h4 className={`text-sm font-bold text-dark group-hover:text-primary transition-colors line-clamp-2 ${isUrdu ? 'urdu' : ''}`}>
                  {isUrdu ? post.titleUr : post.title}
                </h4>
                <span className="text-xs text-gray-400 mt-1 block">{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Support Us Widget */}
      <div className="bg-primary rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <h3 className={`text-2xl font-bold mb-4 ${isUrdu ? 'urdu' : ''}`}>{t.blog.sidebar.supportUs}</h3>
          <p className={`text-white/80 text-sm mb-6 ${isUrdu ? 'urdu' : ''}`}>
            {isUrdu ? 'آپ کے عطیات یتیموں کے لیے چھت اور تعلیم بنتے ہیں۔' : 'Your donations become shelter and education for orphans.'}
          </p>
          <div className="space-y-4">
            <Link
              href="/donate"
              className="block w-full bg-secondary text-white text-center py-3 rounded-full font-bold hover:scale-105 transition-all shadow-lg"
            >
              {t.nav.donateNow}
            </Link>
            <a
              href="https://wa.me/923002038612"
              className="flex items-center justify-center gap-2 w-full bg-white/10 text-white text-center py-3 rounded-full font-bold hover:bg-white/20 transition-all border border-white/20"
            >
              <Phone size={18} /> WhatsApp
            </a>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
      </div>

      {/* Newsletter Signup */}
      <div className="bg-background rounded-3xl p-8 border border-primary/10">
        <h3 className={`text-xl font-bold text-primary mb-2 ${isUrdu ? 'urdu' : ''}`}>{t.blog.sidebar.newsletter}</h3>
        <p className={`text-gray-500 text-sm mb-6 ${isUrdu ? 'urdu' : ''}`}>{t.blog.sidebar.newsletterDesc}</p>

        {status === 'success' ? (
          <div className="bg-green-50 text-green-700 p-4 rounded-xl flex items-center gap-3">
            <CheckCircle className="flex-shrink-0" size={20} />
            <p className={`text-sm ${isUrdu ? 'urdu' : ''}`}>
              {isUrdu ? 'آپ کو سبسکرائب کرنے کا شکریہ!' : 'Thank you for subscribing!'}
            </p>
          </div>
        ) : (
          <form className="space-y-3" onSubmit={handleSubscribe}>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={isUrdu ? 'ای میل ایڈریس' : 'Email Address'}
              className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              disabled={status === 'loading'}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
            >
              {status === 'loading' && <Loader2 className="animate-spin" size={18} />}
              {t.blog.sidebar.subscribe}
            </button>
            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-500 text-xs mt-2">
                <AlertCircle size={14} />
                <span>{errorMessage}</span>
              </div>
            )}
          </form>
        )}
      </div>

      {/* Sponsor an Orphan CTA */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
            <Share2 size={24} />
          </div>
          <div>
            <h4 className={`font-bold text-dark ${isUrdu ? 'urdu' : ''}`}>{t.blog.sidebar.sponsorCTA}</h4>
            <div className="mt-1 space-y-1">
              <p className="text-xs text-gray-500 font-medium">
                {isUrdu ? 'مقامی بچہ: 7,500 روپے ماہانہ' : 'Local Child: Rs. 7,500/month'}
              </p>
              <p className="text-xs text-gray-500 font-medium">
                {isUrdu ? 'زینب عالیہ / یتیم بچہ: 8,500 روپے ماہانہ' : 'Zainab e Alia / Orphan: Rs. 8,500/month'}
              </p>
            </div>
          </div>
        </div>
        <Link href="/sponsor" className="block w-full text-center bg-gray-50 text-secondary text-sm font-bold py-2 rounded-xl hover:bg-secondary hover:text-white transition-all">
          {isUrdu ? 'ابھی اسپانسر کریں' : 'Sponsor Now'}
        </Link>
      </div>
    </aside>
  );
};

export default BlogSidebar;
