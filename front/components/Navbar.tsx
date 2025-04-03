import React, { useState } from 'react';
import { Menu, X, Home, Newspaper, Mail, Calendar } from 'lucide-react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'About', href: '/about', icon: <Home size={20} /> },
    { name: 'Actus', href: '/actus', icon: <Newspaper size={20} /> },
    { name: 'Contact', href: '/contact', icon: <Mail size={20} /> },
    { name: 'Events', href: '/event', icon: <Calendar size={20} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-black dark:text-white bg-gradient-to-r from-green-500 to-black dark:from-green-400 dark:to-white bg-clip-text text-transparent">
            Wehewe
          </span>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center space-x-2 text-black dark:text-white hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300 group"
            >
              <span className="group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Bouton Menu Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-all duration-300"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center space-y-6 py-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={toggleMenu}
              className="flex items-center space-x-3 text-black dark:text-white hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300 animate-fade-in"
            >
              <span className="text-green-500">{item.icon}</span>
              <span className="text-lg font-medium">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;