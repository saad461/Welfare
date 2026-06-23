'use client';

import React from 'react';
import BlogCard from './BlogCard';
import { BlogPost } from '@/lib/blogData';

interface BlogGridProps {
  posts: BlogPost[];
}

const BlogGrid: React.FC<BlogGridProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default BlogGrid;
