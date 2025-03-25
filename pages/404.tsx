import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';

export default function Custom404() {
  return (
    <Layout title="Page Not Found | Vedkamal - Full Stack Developer">
      <section className="flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h1 className="text-8xl md:text-9xl font-bold mb-4 gradient-text">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Page Not Found</h2>
            <p className="text-text-secondary text-lg mb-8">
              Oops! The page you are looking for doesn't exist or has been moved.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="button-primary">
                Back to Home
              </Link>
              <Link href="/contact" className="button-secondary">
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
} 