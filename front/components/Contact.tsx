import React, { useState } from 'react';
import { Menu, X, Home, Newspaper, Mail, Calendar } from 'lucide-react';
import Link from 'next/link';
import { create } from 'zustand';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { EnvelopeIcon, UserIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import Separator from './Separator';
import Footer from './Footer';

const useThemeStore = create((set) => ({
  isDark: false,
  toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
}));

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useThemeStore();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'About', href: '/about', icon: <Home size={20} /> },
    { name: 'Actus', href: '/actus', icon: <Newspaper size={20} /> },
    { name: 'Contact', href: '/contact', icon: <Mail size={20} /> },
    { name: 'Events', href: '/event', icon: <Calendar size={20} /> },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-700 transition-all duration-300`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-black dark:text-white bg-gradient-to-r from-green-500 to-black dark:from-green-400 dark:to-white bg-clip-text text-transparent">
            EventSphere
          </span>
        </Link>
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="flex items-center space-x-2 text-black dark:text-white hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300">
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </div>
        <button onClick={toggleTheme} className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-all duration-300">
          {isDark ? '☀️' : '🌙'}
        </button>
        <button onClick={toggleMenu} className="md:hidden p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-all duration-300">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export default function Contact() {
  const { isDark } = useThemeStore();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(contactSchema) });

  const onSubmit = (data) => {
    console.log(data);
    reset();
    alert('Form submitted successfully!');
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-100'} transition-colors duration-300`}>
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className={`max-w-md mx-auto ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6`}>
          <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Contact Us</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="relative">
              <UserIcon className={`absolute left-3 top-3 h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
              <input {...register('name')} type="text" placeholder="Your Name" className={`w-full pl-10 pr-3 py-2 rounded-md border ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`} />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
            </div>
            <div className="relative">
              <EnvelopeIcon className={`absolute left-3 top-3 h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
              <input {...register('email')} type="email" placeholder="Your Email" className={`w-full pl-10 pr-3 py-2 rounded-md border ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`} />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
            </div>
            <div className="relative">
              <ChatBubbleLeftIcon className={`absolute left-3 top-3 h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
              <textarea {...register('message')} placeholder="Your Message" rows={4} className={`w-full pl-10 pr-3 py-2 rounded-md border ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`} />
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
            </div>
            <button type="submit" className="w-full bg-green-800 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">Send Message</button>
          </form>
        </div>
      </div>
       <Separator />
        <Footer/>
    </div>
  );
}
