'use client'
import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black/80 backdrop-blur-sm border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Social Media Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link
              href="https://github.com/SamyogGhimire"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Github size={24} />
            </Link>
            <Link
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-blue-500 transition-colors"
            >
              <Twitter size={24} />
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-blue-500 transition-colors"
            >
              <Linkedin size={24} />
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-sm text-white/50">
            © Copyright {new Date().getFullYear()} . All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
