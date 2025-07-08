'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-amber-500">
            <Image src="/images/logo.png" alt="CyberMango" width={250} height={48} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-700 hover:text-amber-500 transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-amber-500 transition-colors">
              About
            </Link>
            <Link href="#clients" className="text-gray-700 hover:text-amber-500 transition-colors">
              Clients
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-amber-500 transition-colors">
              Contact
            </Link>
            <a href="#contact" className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors">
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
                            <Link href="#services" className="text-gray-700 hover:text-amber-500 transition-colors">
                Services
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-amber-500 transition-colors">
                About
              </Link>
              <Link href="#clients" className="text-gray-700 hover:text-amber-500 transition-colors">
                Clients
            </Link>
              <Link href="#contact" className="text-gray-700 hover:text-amber-500 transition-colors">
                Contact
              </Link>
              <a href="#contact" className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors w-fit">
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 