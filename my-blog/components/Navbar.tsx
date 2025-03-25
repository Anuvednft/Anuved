import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return router.pathname === path ? 'text-blue-600 font-semibold' : '';
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-200">
          Modern Blog
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          <Link href="/" className={`nav-link ${isActive('/')}`}>
            Home
          </Link>
          <Link href="/blog" className={`nav-link ${isActive('/blog')}`}>
            Blog
          </Link>
          <Link href="/about" className={`nav-link ${isActive('/about')}`}>
            About
          </Link>
          <Link href="/contact" className={`nav-link ${isActive('/contact')}`}>
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden container pb-4">
          <div className="flex flex-col space-y-2">
            <Link href="/" className={`nav-link py-2 ${isActive('/')}`}>
              Home
            </Link>
            <Link href="/blog" className={`nav-link py-2 ${isActive('/blog')}`}>
              Blog
            </Link>
            <Link href="/about" className={`nav-link py-2 ${isActive('/about')}`}>
              About
            </Link>
            <Link href="/contact" className={`nav-link py-2 ${isActive('/contact')}`}>
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar; 