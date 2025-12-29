import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const Footer: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh-TW' : 'en');
  };

  return (
    <footer className="bg-joy-black text-white py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="font-serif text-2xl mb-6 tracking-wider">{t.hero.brand}</h3>
        <div className="flex justify-center gap-8 mb-8 text-sm text-gray-400">
            <a href="#" className="hover:text-joy-teal transition-colors">{t.common.privacy}</a>
            <a href="#" className="hover:text-joy-teal transition-colors">{t.common.terms}</a>
            <a href="#" className="hover:text-joy-teal transition-colors">{t.common.contact}</a>
        </div>

        {/* Language Toggle */}
        <div className="mb-8 flex justify-center">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 hover:border-joy-teal hover:text-joy-teal transition-colors text-sm"
            >
               <Globe className="w-4 h-4" />
               <span>{language === 'en' ? '繁體中文' : 'English'}</span>
            </button>
        </div>

        <p className="text-gray-500 text-xs">© {new Date().getFullYear()} {t.hero.brand}. {t.common.rights}</p>
      </div>
    </footer>
  );
};

export default Footer;