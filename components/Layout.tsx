import React, { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import { FaWhatsapp } from 'react-icons/fa';
import { portfolioConfig } from '@/config/portfolio';

type LayoutProps = {
  children: ReactNode;
  title?: string;
  description?: string;
};

const Layout = ({
  children,
  title = `${portfolioConfig.personal.name} | ${portfolioConfig.personal.role}`,
  description = `Portfolio website of ${portfolioConfig.personal.name}, a skilled ${portfolioConfig.personal.role} specializing in modern applications`,
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomCursor />
      <div className="min-h-screen flex flex-col bg-background text-text-primary relative">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        
        {/* Floating WhatsApp Button */}
        {portfolioConfig.personal.whatsappNumber && (
          <a 
            href={`https://wa.me/${portfolioConfig.personal.whatsappNumber}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 z-50 flex items-center justify-center"
            style={{ boxShadow: '0 4px 14px rgba(34, 197, 94, 0.4)' }}
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp size={28} />
          </a>
        )}
      </div>
    </>
  );
};

export default Layout; 