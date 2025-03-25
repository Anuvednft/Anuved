import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/Layout';
import Image from 'next/image';

const AboutPage: NextPage = () => {
  return (
    <Layout title="About - Modern Blog" description="Learn more about Modern Blog and our mission">
      <section className="py-12 bg-accent-blue">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn more about Modern Blog and our mission to provide quality content.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 w-full">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Our team working together"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Modern Blog was founded with a simple mission: to create a clean, beautiful platform for sharing knowledge and insights about web development, design, and technology.
              </p>
              <p className="text-gray-600 mb-4">
                We believe that great content deserves a great presentation. That's why we've created a minimalist, user-friendly design that puts the focus on what matters most — the content.
              </p>
              <p className="text-gray-600">
                Our team of passionate writers and developers are committed to providing valuable and informative articles that help readers stay up-to-date with the latest trends and best practices in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-accent-gray">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We're constantly exploring new ideas and technologies to improve our platform and content.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Simplicity</h3>
              <p className="text-gray-600">
                We believe in keeping things simple, clean, and easy to understand, both in our design and our content.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                We're committed to fostering a supportive community of readers and contributors who share our passion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage; 