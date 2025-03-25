import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  coverImage: string;
  slug: string;
  readTime: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-48 w-full">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      </Link>
      
      <div className="p-5">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>
        
        <Link href={`/blog/${post.slug}`} className="block">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors duration-200">
            {post.title}
          </h2>
        </Link>
        
        <p className="text-gray-600 mb-4">
          {post.excerpt}
        </p>
        
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-gray-700 font-medium">
              By {post.author}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard; 