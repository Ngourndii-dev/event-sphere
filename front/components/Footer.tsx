import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin, Phone, MapPin, Mail } from 'lucide-react';
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            EventWorld
          </h2>
          <p className="text-gray-400">
          Discover the most exciting events around the world. We connect enthusiasts with unforgettable experiences.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
            <li><a href="/actus" className="text-gray-400 hover:text-white transition-colors">Actus</a></li>
            <li><a href="/event" className="text-gray-400 hover:text-white transition-colors">Event</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-start space-x-2">
              <MapPin className="w-5 h-5 text-green-400 mt-0.5" />
              <span className="text-gray-400">123 Rue des Événements, Antananarivo, Madagascar</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-green-400" />
              <span className="text-gray-400">contact@eventworld.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-green-400" />
              <span className="text-gray-400">+33 1 23 45 67 89</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()}  EventWorld. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
          <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of use</a>
        </div>
      </div>
    </div>
  </footer>
  )
}
