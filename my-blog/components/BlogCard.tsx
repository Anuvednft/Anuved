import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  content?: string;
  coverImage?: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {post.coverImage && (
        <Link href={`/blog/${post.slug}`} className="block">
          <div className="relative h-40 w-full image-container">
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
          </div>
        </Link>
      )}
      <div className="p-4 md:p-6">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
          <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
            {post.title}
          </Link>
        </h2>
        <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">{post.excerpt}</p>
        <div className="flex items-center text-xs md:text-sm text-gray-500">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.author}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard; 