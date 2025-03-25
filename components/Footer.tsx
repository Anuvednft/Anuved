import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-surface-dark/30 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About section */}
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">Vedkamal</h3>
            <p className="text-text-secondary mb-4">
              A passionate Full Stack Developer with expertise in modern web technologies
              and a knack for creating seamless user experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Anuvednft" target="_blank" rel="noopener noreferrer" 
                className="text-text-secondary hover:text-primary transition-colors">
                <FaGithub size={22} />
              </a>
              <a href="https://linkedin.com/anuved" target="_blank" rel="noopener noreferrer" 
                className="text-text-secondary hover:text-primary transition-colors">
                <FaLinkedin size={22} />
              </a>
              <a href="https://twitter.com/anuvednfts" target="_blank" rel="noopener noreferrer" 
                className="text-text-secondary hover:text-primary transition-colors">
                <FaTwitter size={22} />
              </a>
              <a href="mailto:Vedkamlpal@gmail.com" 
                className="text-text-secondary hover:text-primary transition-colors">
                <FaEnvelope size={22} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-text-secondary hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-text-secondary hover:text-primary transition-colors">About</Link>
              </li>
              <li>
                <Link href="/projects" className="text-text-secondary hover:text-primary transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="/skills" className="text-text-secondary hover:text-primary transition-colors">Skills</Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-secondary hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-text-primary">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">Email:</span>
                <a href="mailto:Vedkamlpal@gmail.com" className="text-text-secondary hover:text-primary transition-colors">
                  Vedkamlpal@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">Location:</span>
                <span className="text-text-secondary"> Bareilly, Uttar Pradesh</span>
              </li>
              <li>
                <a href="/contact" className="button-primary inline-block mt-2">Get In Touch</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-text-muted/10 pt-6 mt-6 text-center">
          <p className="text-text-secondary text-sm">
            © {currentYear} Vedkamal. All Rights Reserved.
          </p>
          <p className="text-text-muted text-xs mt-2">
            Designed & Built with Anuved💙
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 