import React from 'react';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToContent = () => {
    const element = document.getElementById('guide-content');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-[80vh] w-full bg-joy-grey flex items-center justify-center overflow-hidden">
      {/* Abstract Background Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-joy-teal rounded-full blur-[128px] mix-blend-multiply transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-[128px] mix-blend-multiply transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-joy-teal font-serif text-xl md:text-2xl mb-4 tracking-widest uppercase">{t.hero.brand}</h2>
        <h1 className="text-4xl md:text-7xl font-serif text-joy-black mb-6 leading-tight">
          {t.hero.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
          {t.hero.subtitle}
        </p>
        <button 
          onClick={scrollToContent}
          className="group inline-flex items-center gap-2 border-b border-joy-black pb-1 text-joy-black hover:text-joy-teal hover:border-joy-teal transition-all duration-300 uppercase tracking-widest text-sm"
        >
          {t.hero.cta}
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default Hero;