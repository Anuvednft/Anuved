import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { BlogPost } from '@/components/BlogCard';

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
  }
];

// Sample content for the first blog post
const sampleContent = `
<h2>Introduction to Modern Web Development</h2>
<p>Web development has evolved significantly over the past few years. With the introduction of modern frameworks and tools, building websites and web applications has become more efficient and powerful than ever before.</p>

<p>In this comprehensive guide, we'll explore the fundamentals of modern web development, discussing the latest tools, frameworks, and best practices that will help you build robust and scalable web applications.</p>

<h2>Understanding the Basics</h2>
<p>Before diving into advanced concepts, it's essential to have a solid foundation in the core technologies of the web: HTML, CSS, and JavaScript. These three technologies form the backbone of every website and web application.</p>

<h3>HTML: The Structure</h3>
<p>HTML (HyperText Markup Language) provides the structure of a web page. It's the skeleton that holds everything together. Modern HTML5 introduces semantic elements like &lt;header&gt;, &lt;footer&gt;, &lt;nav&gt;, and &lt;article&gt;, which provide more meaning to the structure of your web pages.</p>

<h3>CSS: The Presentation</h3>
<p>CSS (Cascading Style Sheets) is responsible for the presentation of your web pages. It controls how the HTML elements look on the screen. Modern CSS includes features like flexbox, grid, and custom properties, which make creating responsive and dynamic layouts easier than ever before.</p>

<h3>JavaScript: The Behavior</h3>
<p>JavaScript adds interactivity to your web pages. It's a powerful programming language that runs in the browser and allows you to create dynamic and interactive user experiences. Modern JavaScript (ES6+) introduced features like arrow functions, template literals, destructuring, and async/await, which make coding more concise and readable.</p>

<h2>Modern Frontend Frameworks</h2>
<p>Frontend frameworks have revolutionized the way we build web applications. They provide a structured approach to building user interfaces, making it easier to manage state, handle user interactions, and create reusable components.</p>

<h3>React</h3>
<p>React, developed by Facebook, is a declarative JavaScript library for building user interfaces. It uses a component-based architecture, making it easy to build and maintain complex UIs. React's virtual DOM and efficient rendering mechanism ensure optimal performance.</p>

<h3>Vue.js</h3>
<p>Vue.js is a progressive JavaScript framework that's easy to learn and integrate into projects. It offers a balance between simplicity and power, making it an excellent choice for both small and large-scale applications.</p>

<h3>Angular</h3>
<p>Angular, maintained by Google, is a comprehensive framework for building complex web applications. It provides a complete solution out of the box, including routing, form handling, and state management.</p>

<h2>Backend Technologies</h2>
<p>The backend of a web application handles data storage, processing, and business logic. Modern backend technologies focus on scalability, performance, and developer experience.</p>

<h3>Node.js</h3>
<p>Node.js allows you to run JavaScript on the server-side, enabling full-stack JavaScript development. Its event-driven, non-blocking I/O model makes it efficient and suitable for real-time applications.</p>

<h3>Express.js</h3>
<p>Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It's the de facto standard server framework for Node.js.</p>

<h3>API Development</h3>
<p>Modern web applications often use APIs (Application Programming Interfaces) to communicate between the frontend and backend. RESTful APIs and GraphQL are popular approaches to API development, each with its strengths and use cases.</p>

<h2>Conclusion</h2>
<p>Modern web development offers a wide range of tools and technologies that make building web applications more efficient and enjoyable. By understanding the fundamentals and exploring modern frameworks and tools, you'll be well-equipped to create robust, scalable, and user-friendly web applications.</p>

<p>Remember, the key to success in web development is continuous learning and experimentation. The field is constantly evolving, so stay curious and keep exploring new technologies and approaches.</p>
`;

interface PostPageProps {
  post: BlogPost & { content: string };
  relatedPosts: BlogPost[];
}

const PostPage: NextPage<PostPageProps> = ({ post, relatedPosts }) => {
  return (
    <Layout title={`${post.title} - Modern Blog`} description={post.excerpt}>
      <article>
        <div className="relative h-96 w-full">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
            <div className="container py-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
              <div className="flex items-center text-white">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
                <span className="mx-2">•</span>
                <span>By {post.author}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-12">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Share this post</h4>
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

      <section className="py-12 bg-accent-gray">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <div key={relatedPost.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <Link href={`/blog/${relatedPost.slug}`} className="block">
                  <div className="relative h-48 w-full">
                    <Image
                      src={relatedPost.coverImage}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>
                
                <div className="p-5">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{relatedPost.date}</span>
                    <span className="mx-2">•</span>
                    <span>{relatedPost.readTime}</span>
                  </div>
                  
                  <Link href={`/blog/${relatedPost.slug}`} className="block">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors duration-200">
                      {relatedPost.title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-600">
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
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  return {
    props: {
      post: {
        ...post,
        content: sampleContent
      },
      relatedPosts,
    },
  };
};

export default PostPage; 