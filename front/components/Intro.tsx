import React, { useState } from 'react';
import { Menu, X, Home, Newspaper, Mail, Calendar, Sun, Moon, Rocket, Users, Handshake, ArrowRight, CheckCircle, SparklesIcon, LightbulbIcon, MessageSquare } from 'lucide-react';
import { Facebook, Twitter, Instagram, Linkedin, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import Separator from './Separator';

const Navbar: React.FC<{ darkMode: boolean; toggleDarkMode: () => void }> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'About', href: '/about', icon: <Home size={20} /> },
    { name: 'Actus', href: '/actus', icon: <Newspaper size={20} /> },
    { name: 'Contact', href: '/contact', icon: <Mail size={20} /> },
    { name: 'Events', href: '/event', icon: <Calendar size={20} /> },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-md shadow-lg border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-all duration-300`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-black'} bg-gradient-to-r ${darkMode ? 'from-green-400 to-white' : 'from-green-500 to-black'} bg-clip-text text-transparent`}>
            EventSphere
          </span>
        </Link>

        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-2 ${darkMode ? 'text-white hover:text-green-400' : 'text-black hover:text-green-500'} transition-colors duration-300 group`}
            >
              <span className="group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-all duration-300"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className={`flex flex-col items-center space-y-6 py-6 ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-md border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={toggleMenu}
              className={`flex items-center space-x-3 ${darkMode ? 'text-white hover:text-green-400' : 'text-black hover:text-green-500'} transition-colors duration-300 animate-fade-in`}
            >
              <span className="text-green-500">{item.icon}</span>
              <span className="text-lg font-medium">{item.name}</span>
            </Link>
          ))}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default function Intro() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const features = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Publiez facilement",
      description: "Créez et partagez vos événements en quelques clics seulement."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Trouvez des participants",
      description: "Connectez-vous avec des personnes partageant les mêmes centres d'intérêt."
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Obtenez de l'aide",
      description: "Demandez et offrez de l'aide pour organiser des événements réussis."
    }
  ];

  const steps = [
    "Décrivez votre événement",
    "Choisissez date et lieu",
    "Publiez et partagez"
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <section className="py-16 px-4 pt-24">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <span className={`inline-flex items-center px-4 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'} mb-4 animate-bounce`}>
              <LightbulbIcon className="w-4 h-4 mr-2" />
              Nouveau ! Publiez vos événements
            </span>
            <h1 className={`text-4xl md:text-5xl font-extrabold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Créez, Partagez, <span className="bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">Organisez</span>
            </h1>
            <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              La plateforme ultime pour publier vos événements et trouver l'aide nécessaire pour les réaliser.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <button className={`px-6 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all duration-300 ${darkMode ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-green-600 hover:bg-green-700 text-white'} shadow-lg hover:shadow-xl`}>
                <span>Commencer maintenant</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className={`px-6 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all duration-300 ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}>
                <span><a href="/event">Voir les événements</a></span>
              </button>
            </div>
          </div>

          <div className="relative max-w-4xl mx-auto h-64 bg-gradient-to-r from-green-500 to-green-700 rounded-xl overflow-hidden shadow-2xl mb-16">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`p-8 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg animate-pulse-slow`}>
                <Calendar className={`w-12 h-12 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Comment ça marche</h2>
          
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex justify-between relative">
              <div className={`absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <div 
                  className="h-full bg-green-500 transition-all duration-500 ease-in-out" 
                  style={{ width: `${(currentStep + 1) * 33.33}%` }}
                ></div>
              </div>
              
              {steps.map((step, index) => (
                <div key={index} className="relative z-10 flex flex-col items-center">
                  <button
                    onClick={() => setCurrentStep(index)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${currentStep >= index ? 'bg-green-500 text-white' : darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-600'} ${currentStep === index ? 'scale-110 shadow-lg' : ''}`}
                  >
                    {currentStep > index ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </button>
                  <span className={`text-sm font-medium ${currentStep === index ? 'text-green-600 dark:text-green-400' : darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-50'} shadow-md`}
              >
                <div className={`w-16 h-16 rounded-full ${darkMode ? 'bg-gray-600' : 'bg-white'} flex items-center justify-center mb-4 mx-auto shadow-sm`}>
                  {React.cloneElement(feature.icon, { 
                    className: `w-8 h-8 ${darkMode ? 'text-green-400' : 'text-green-600'}`
                  })}
                </div>
                <h3 className={`text-xl font-semibold mb-2 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h3>
                <p className={`text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-16 px-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container mx-auto text-center">
          <div className={`max-w-2xl mx-auto p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <MessageSquare className={`w-12 h-12 mx-auto mb-4 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
            <h2 className="text-2xl font-bold mb-4">Prêt à lancer votre événement ?</h2>
            <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Rejoignez notre communauté et commencez à créer des expériences inoubliables dès aujourd'hui.
            </p>
            <button className={`px-6 py-3 rounded-lg font-medium ${darkMode ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-green-600 hover:bg-green-700 text-white'} transition-colors duration-300 flex items-center mx-auto space-x-2`}>
              <span>S'inscrire gratuitement</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
      <Separator />
      <footer className="bg-gray-900 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                EventWorld
              </h2>
              <p className="text-gray-400">
                Découvrez les événements les plus passionnants à travers le monde. Nous connectons les passionnés aux expériences inoubliables.
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
              <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Accueil</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Événements</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Catégories</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">À propos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Catégories</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Musique</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sport</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Art</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Technologie</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Gastronomie</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contactez-nous</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5 text-green-400 mt-0.5" />
                  <span className="text-gray-400">123 Rue des Événements, Paris, France</span>
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
              © {new Date().getFullYear()} EventWorld. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Politique de confidentialité</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Conditions d'utilisation</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Mentions légales</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
}