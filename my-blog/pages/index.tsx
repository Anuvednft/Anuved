import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/Layout';
import BlogCard, { BlogPost } from '@/components/BlogCard';

// Sample data for blog posts (in a real app, this would come from an API or CMS)
const featuredPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Modern Web Development',
    excerpt: 'Learn the fundamentals of modern web development with the latest tools and frameworks.',
    date: 'May 15, 2023',
    author: 'John Doe',
    coverImage: 'https://images.unsplash.com/photo-1546900703-cf06143d1239?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    slug: 'getting-started-with-modern-web-development',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'The Art of Minimalistic Design',
    excerpt: 'Explore the principles of minimalistic design and how to apply them to your projects.',
    date: 'June 3, 2023',
    author: 'Jane Smith',
    coverImage: 'https://images.unsplash.com/photo-1616077168087-594885c9a40b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    slug: 'the-art-of-minimalistic-design',
    readTime: '4 min read'
  },
  {
    id: '3',
    title: 'Optimizing Performance in React Applications',
    excerpt: 'Discover techniques to improve the performance of your React applications.',
    date: 'July 12, 2023',
    author: 'Mike Johnson',
    coverImage: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    slug: 'optimizing-performance-in-react-applications',
    readTime: '7 min read'
  },
  {
    id: '4',
    title: 'Creating Accessible Web Experiences',
    excerpt: 'Learn how to build websites that are accessible to everyone, regardless of their abilities.',
    date: 'August 25, 2023',
    author: 'Sarah Wilson',
    coverImage: 'https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    slug: 'creating-accessible-web-experiences',
    readTime: '6 min read'
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
              <BlogCard key={post.id} post={post} />
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