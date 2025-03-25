import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/Layout';
import BlogCard, { BlogPost } from '../components/BlogCard';

// Sample data for blog posts (in a real app, this would come from an API or CMS)
const featuredPosts: BlogPost[] = [
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
  }
];

const Home: NextPage = () => {
  return (
    <Layout title="Modern Blog - Home" description="Welcome to Modern Blog, a clean and elegant blog site with minimalistic design">
      <section className="py-12 bg-accent-blue">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">Modern Blog</h1>
            <p className="text-xl text-gray-600">
              A clean and elegant blog with a minimalistic design focused on readability and user experience.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Posts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-accent-gray">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-gray-600 mb-6">
              Stay updated with our latest articles and news. No spam, ever.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
              <button
                type="submit"
                className="btn btn-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home; 