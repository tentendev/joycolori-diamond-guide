import React, { useState, useEffect } from 'react';
import { Menu, X, Diamond } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.cut, id: 'cut' },
    { name: t.nav.color, id: 'color' },
    { name: t.nav.clarity, id: 'clarity' },
    { name: t.nav.certification, id: 'certification' },
    { name: t.nav.guide, id: 'buying-guide' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
           <Diamond className={`w-6 h-6 ${isScrolled ? 'text-joy-teal' : 'text-joy-teal'}`} />
           <span className={`font-serif text-xl tracking-widest uppercase font-bold ${isScrolled ? 'text-joy-black' : 'text-joy-black'}`}>
             {t.hero.brand}
           </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm uppercase tracking-widest font-sans hover:text-joy-teal transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-gray-800'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button className="bg-joy-black text-white px-6 py-2 text-xs uppercase tracking-widest hover:bg-joy-teal transition-colors duration-300">
            {t.common.shopDiamonds}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-joy-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-8 flex flex-col items-center gap-6 md:hidden animate-in slide-in-from-top-5">
           {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-joy-black text-lg font-serif"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;