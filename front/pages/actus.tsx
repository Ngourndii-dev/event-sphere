import React, { useState } from 'react';
import "../styles/globals.css";
import { Globe, Calendar, MapPin, Clock, TrendingUp, Users, Sun, Moon, Home, Newspaper, Mail, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Separator from '@/components/Separator';

const eventNews = [
  {
    id: 1,
    title: "Festival international de jazz à Montréal",
    location: "Montréal, Canada",
    date: "2023-06-28",
    time: "19:00",
    category: "Musique",
    trending: true,
    description: "Le plus grand festival de jazz au monde célèbre sa 42e édition avec des artistes internationaux."
  },
  {
    id: 2,
    title: "Conférence sur le changement climatique à Berlin",
    location: "Berlin, Allemagne",
    date: "2023-07-05",
    time: "09:00",
    category: "Environnement",
    trending: false,
    description: "Experts mondiaux se réunissent pour discuter des solutions innovantes face au réchauffement climatique."
  },
  {
    id: 3,
    title: "Exposition d'art contemporain à Tokyo",
    location: "Tokyo, Japon",
    date: "2023-07-12",
    time: "10:00",
    category: "Art",
    trending: true,
    description: "Découvrez les œuvres avant-gardistes des artistes émergents asiatiques."
  },
  {
    id: 4,
    title: "Marathon de New York",
    location: "New York, États-Unis",
    date: "2023-11-05",
    time: "08:00",
    category: "Sport",
    trending: false,
    description: "Le célèbre marathon attire des milliers de coureurs du monde entier cette année encore."
  }
];

const Navbar: React.FC<{ isDarkMode: boolean; toggleTheme: () => void }> = ({ isDarkMode, toggleTheme }) => {
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
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-black dark:text-white bg-gradient-to-r from-green-500 to-black dark:from-green-400 dark:to-white bg-clip-text text-transparent">
            EventSphere
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
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
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
          >
            {isDarkMode ? <Sun className="w-5 h-5 text-green-400" /> : <Moon className="w-5 h-5 text-green-600" />}
          </button>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
          >
            {isDarkMode ? <Sun className="w-5 h-5 text-green-400" /> : <Moon className="w-5 h-5 text-green-600" />}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-all duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

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

export default function Actus() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };
 
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-gray-100'} transition-colors duration-300`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Separator />
      <div className="max-w-4xl mx-auto px-4 py-8 pt-24"> 
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-3">
            <Globe className={`w-8 h-8 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
            <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
              Actualités Événementielles
            </h1>
          </div>
        </div>

        <div className="space-y-8">
          {eventNews.map((event) => (
            <div 
              key={event.id}
              className={`relative p-6 rounded-xl shadow-lg overflow-hidden group transition-all duration-300 transform hover:scale-105 hover:shadow-2xl
                ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              <h3 className="text-xl font-bold group-hover:text-green-500 transition-colors duration-300">{event.title}</h3>
              <p className="text-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300">{event.description}</p>
              <div className="mt-2 flex items-center text-sm">
                <MapPin className="w-4 h-4 mr-2 text-green-500" /> <span>{event.location}</span>
              </div>
              <div className="mt-1 flex items-center text-sm">
                <Calendar className="w-4 h-4 mr-2 text-green-500" /> <span>{new Date(event.date).toLocaleDateString('fr-FR')}</span>
              </div>
              <div className="mt-1 flex items-center text-sm">
                <Clock className="w-4 h-4 mr-2 text-green-500" /> <span>{event.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Separator />
    </div>
  );
}