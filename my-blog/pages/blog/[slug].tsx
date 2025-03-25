import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { BlogPost } from '../../components/BlogCard';
import { useRouter } from 'next/router';

// Sample data for blog posts (in a real app, this would come from an API or CMS)
const allPosts: BlogPost[] = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js',
    excerpt: 'Learn how to build modern web applications with Next.js',
    date: '2024-03-25',
    author: 'Ved Kamal',
    coverImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2070&q=80',
    content: `
      Next.js is a powerful framework for building React applications. It provides
      features like server-side rendering, static site generation, and API routes
      out of the box.

      In this post, we'll explore the basics of Next.js and how to get started
      with your first project.
    `
  },
  {
    slug: 'typescript-best-practices',
    title: 'TypeScript Best Practices',
    excerpt: 'Essential tips and tricks for writing better TypeScript code',
    date: '2024-03-24',
    author: 'Ved Kamal',
    coverImage: 'https://images.unsplash.com/photo-1592609931095-54a2168ae893?auto=format&fit=crop&w=2070&q=80',
    content: `
      TypeScript adds static typing to JavaScript, making your code more reliable
      and easier to maintain. Here are some best practices to follow when writing
      TypeScript code.
    `
  }
];

interface PostPageProps {
  post: BlogPost & { content: string };
  relatedPosts: BlogPost[];
}

const PostPage: NextPage<PostPageProps> = ({ post, relatedPosts }) => {
  const router = useRouter();
  const { slug } = router.query;

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-6 md:py-8">
          <h1 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Post not found</h1>
          <Link href="/blog" className="text-blue-600 hover:underline">
            Back to Blog
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={`${post.title} - Modern Blog`} description={post.excerpt}>
      <article>
        {post.coverImage ? (
          <div className="relative h-64 md:h-96 w-full image-container">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
              loading="eager"
              unoptimized={true}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
              <div className="container py-4 md:py-8">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4">{post.title}</h1>
                <div className="flex items-center text-white text-sm md:text-base">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>By {post.author}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container py-6 md:py-8">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">{post.title}</h1>
            <div className="flex items-center text-gray-500 text-sm md:text-base">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>By {post.author}</span>
            </div>
          </div>
        )}

        <div className="container py-6 md:py-12">
          <div className="max-w-3xl mx-auto px-4 md:px-0">
            <div className="prose prose-sm md:prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
            
            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-gray-800">Share this post</h4>
                  <div className="flex space-x-4 mt-2">
                    <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <Link href="/blog" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                  ← Back to all posts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="py-8 md:py-12 bg-accent-gray">
        <div className="container">
          <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
            {relatedPosts.map((relatedPost) => (
              <div key={relatedPost.slug} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <Link href={`/blog/${relatedPost.slug}`} className="block">
                  {relatedPost.coverImage ? (
                    <div className="relative h-36 md:h-48 w-full image-container">
                      <Image
                        src={relatedPost.coverImage}
                        alt={relatedPost.title}
                        fill
                        sizes="100vw"
                        className="object-cover"
                        priority
                        loading="eager"
                        unoptimized={true}
                      />
                    </div>
                  ) : (
                    <div className="h-16 bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-400">No image</span>
                    </div>
                  )}
                </Link>
                
                <div className="p-4 md:p-5">
                  <div className="flex items-center text-xs md:text-sm text-gray-500 mb-2">
                    <span>{relatedPost.date}</span>
                  </div>
                  
                  <Link href={`/blog/${relatedPost.slug}`} className="block">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors duration-200">
                      {relatedPost.title}
                    </h3>
                  </Link>
                  
                  <p className="text-sm md:text-base text-gray-600">
                    {relatedPost.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // In a real application, you would fetch this data from an API or database
  const paths = allPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false, // Return 404 for paths not returned by getStaticPaths
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // In a real application, you would fetch this data from an API or database
  const slug = params?.slug as string;
  const post = allPosts.find((post) => post.slug === slug);
  
  if (!post) {
    return {
      notFound: true,
    };
  }

  // Get related posts (excluding the current post)
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return {
    props: {
      post: {
        ...post,
        content: post.content
      },
      relatedPosts,
    },
  };
};

export default PostPage; 