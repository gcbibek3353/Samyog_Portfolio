'use client'
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link href="#home" className="flex-shrink-0">
            <span className="text-white text-xl font-semibold">Samyog Ghimire</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="#home" className="text-white hover:text-white/70 transition-colors">
                Home
              </Link>
              <Link href="#skills" className="text-white/70 hover:text-white transition-colors">
                Skills 
              </Link>
              <Link href="#projects" className="text-white/70 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-white/70 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white/70 hover:bg-black/50"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-sm">
            <a
              href="#"
              className="block px-3 py-2 text-white hover:bg-white/10 rounded-md"
            >
              Home
            </a>
            <a
              href="#skills"
              className="block px-3 py-2 text-white/70 hover:bg-white/10 rounded-md"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 text-white/70 hover:bg-white/10 rounded-md"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-white/70 hover:bg-white/10 rounded-md"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;