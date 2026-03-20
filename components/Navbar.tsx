import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

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
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
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
        scrolled ? 'py-3 backdrop-blur-xl shadow-lg' : 'py-5'
      }`}
      style={scrolled ? { background: 'var(--nav-bg)', borderBottom: '1px solid var(--border)' } : {}}
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
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="ml-4 p-2 rounded-full hover:bg-surface text-text-primary transition-colors flex items-center justify-center"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <FaSun size={20} className="text-yellow-400" /> : <FaMoon size={20} className="text-slate-700" />}
            </button>
          )}
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
          className="md:hidden backdrop-blur-xl"
          style={{ background: 'var(--nav-bg)', borderTop: '1px solid var(--border)' }}
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
            <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
              <a 
                href="#" 
                className="button-primary text-center flex-1 mr-4"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  router.push('/contact');
                }}
              >
                Hire Me
              </a>
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-3 rounded-full hover:bg-surface text-text-primary transition-colors border"
                  style={{ borderColor: 'var(--border)' }}
                  aria-label="Toggle Theme"
                >
                  {theme === 'dark' ? <FaSun size={20} className="text-yellow-400" /> : <FaMoon size={20} className="text-slate-700" />}
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar; 