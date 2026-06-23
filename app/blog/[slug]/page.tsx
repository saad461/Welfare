import React from 'react';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blogData';
import ClientPostPage from '@/components/blog/ClientPostPage';
import { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found | Aal e Imran Welfare',
    };
  }

  return {
    title: `${post.title} | Aal e Imran Welfare`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Aal e Imran Welfare`,
      description: post.excerpt,
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: 'article',
      publishedTime: post.date,
      authors: ['Aal e Imran Welfare Team'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <ClientPostPage post={post} />;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
