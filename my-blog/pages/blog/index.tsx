import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/Layout';
import BlogCard, { BlogPost } from '../../components/BlogCard';

// Sample data for blog posts (in a real app, this would come from an API or CMS)
const allPosts: BlogPost[] = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js',
    excerpt: 'Learn how to build modern web applications with Next.js',
    date: '2024-03-25',
    author: 'Ved Kamal',
    coverImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2070&q=80'
  },
  {
    slug: 'typescript-best-practices',
    title: 'TypeScript Best Practices',
    excerpt: 'Essential tips and tricks for writing better TypeScript code',
    date: '2024-03-24',
    author: 'Ved Kamal',
    coverImage: 'https://images.unsplash.com/photo-1592609931095-54a2168ae893?auto=format&fit=crop&w=2070&q=80'
  },
  {
    slug: 'modern-web-development',
    title: 'Modern Web Development Techniques',
    excerpt: 'Explore the latest approaches to building fast, responsive websites',
    date: '2024-03-20',
    author: 'Ved Kamal',
    coverImage: 'https://images.unsplash.com/photo-1546900703-cf06143d1239?auto=format&fit=crop&w=1350&q=80'
  },
  {
    slug: 'minimalistic-design',
    title: 'The Art of Minimalistic Design',
    excerpt: 'Explore the principles of minimalistic design and how to apply them to your projects',
    date: '2024-03-15',
    author: 'Ved Kamal',
    coverImage: 'https://images.unsplash.com/photo-1616077168087-594885c9a40b?auto=format&fit=crop&w=1350&q=80'
  },
  {
    slug: 'react-performance',
    title: 'Optimizing Performance in React Applications',
    excerpt: 'Discover techniques to improve the performance of your React applications',
    date: '2024-03-10',
    author: 'Ved Kamal',
    coverImage: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&w=1350&q=80'
  },
  {
    slug: 'accessible-web',
    title: 'Creating Accessible Web Experiences',
    excerpt: 'Learn how to build websites that are accessible to everyone, regardless of their abilities',
    date: '2024-03-05',
    author: 'Ved Kamal',
    coverImage: 'https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?auto=format&fit=crop&w=1350&q=80'
  }
];

const BlogPage: NextPage = () => {
  return (
    <Layout title="Blog - Modern Blog" description="Explore our latest articles on web development, design, and technology">
      <section className="py-8 md:py-12 bg-accent-blue">
        <div className="container">
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">Our Blog</h1>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our collection of articles on web development, design, and technology.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
            {allPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage; 