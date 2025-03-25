import React, { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

type LayoutProps = {
  children: ReactNode;
  title?: string;
  description?: string;
};

const Layout = ({
  children,
  title = 'Vedkamal | Full Stack Developer',
  description = 'Portfolio website of Vedkamal, a skilled Full Stack Developer specializing in modern web applications',
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
      </div>
    </>
  );
};

export default Layout; 