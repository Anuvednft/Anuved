import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-white/90 backdrop-blur-lg shadow-sm' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold gradient-text">Vedkamal</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              className={`navbar-item ${
                router.pathname === item.path ? 'navbar-item-active' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
          <a 
            href="#" 
            className="button-primary ml-4"
            onClick={(e) => {
              e.preventDefault();
              router.push('/contact');
            }}
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-text-primary p-2 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/95 backdrop-blur-lg shadow-sm"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={`block py-2 px-4 rounded-lg ${
                  router.pathname === item.path 
                    ? 'bg-primary/10 text-primary font-medium' 
                    : 'text-text-secondary hover:bg-surface'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a 
              href="#" 
              className="button-primary text-center"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                router.push('/contact');
              }}
            >
              Hire Me
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar; 