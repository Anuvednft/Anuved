import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/Layout';
import BlogCard, { BlogPost } from '@/components/BlogCard';

// Sample data for blog posts (in a real app, this would come from an API or CMS)
const allPosts: BlogPost[] = [
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
  },
  {
    id: '5',
    title: 'Introduction to TypeScript for JavaScript Developers',
    excerpt: 'Discover how TypeScript can enhance your JavaScript development experience with static typing.',
    date: 'September 10, 2023',
    author: 'Alex Chen',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    slug: 'introduction-to-typescript-for-javascript-developers',
    readTime: '8 min read'
  },
  {
    id: '6',
    title: 'Responsive Design Best Practices in 2023',
    excerpt: 'Learn the latest techniques for creating responsive websites that work well on all devices.',
    date: 'October 5, 2023',
    author: 'Emily Davis',
    coverImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    slug: 'responsive-design-best-practices-in-2023',
    readTime: '5 min read'
  }
];

const BlogPage: NextPage = () => {
  return (
    <Layout title="Blog - Modern Blog" description="Explore our latest articles on web development, design, and technology">
      <section className="py-12 bg-accent-blue">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our collection of articles on web development, design, and technology.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage; 