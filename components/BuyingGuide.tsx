import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Sparkles } from 'lucide-react';

const BuyingGuide: React.FC = () => {
  const { t } = useLanguage();

  // STYLES: 
  // Thick stroke (#1e3a8a / dark blue-black) to match the marker look.
  // Fills: White or #dbeafe (light blue) or #56C1B6 (Joy Teal).
  // "Hand-drawn" effect achieved by using slight curves in paths instead of straight lines.

  const ValueIllustration = () => (
    <svg viewBox="0 0 200 200" className="w-full h-full p-6 transition-transform duration-700 group-hover:scale-105">
      {/* Comparison: Small Diamond (Expensive) vs Big Diamond (Affordable) */}
      
      {/* Left: Small Diamond */}
      <g transform="translate(40, 100)">
        <path d="M15 0 L35 0 L25 15 L15 0 Z" fill="white" stroke="#1e293b" strokeWidth="3" strokeLinejoin="round" />
        <path d="M15 0 L10 10 L25 25 L40 10 L35 0" fill="none" stroke="#1e293b" strokeWidth="3" strokeLinejoin="round" />
        {/* Price Bubble */}
        <path d="M-10 -40 Q -20 -40 -20 -30 L -20 -10 Q -20 0 -10 0 L 10 0 L 15 10 L 25 0 L 50 0 Q 60 0 60 -10 L 60 -30 Q 60 -40 50 -40 Z" fill="#f1f5f9" stroke="#1e293b" strokeWidth="3" />
        <text x="20" y="-15" textAnchor="middle" fontSize="16" fontFamily="sans-serif" fontWeight="bold" fill="#1e293b">$$$</text>
        <text x="25" y="45" textAnchor="middle" fontSize="10" fontFamily="sans-serif" fill="#64748b">MINED</text>
      </g>

      {/* Right: Big Diamond */}
      <g transform="translate(130, 90)">
        <path d="M10 0 L50 0 L60 15 L30 45 L0 15 L10 0 Z" fill="#ecfeff" stroke="#1e293b" strokeWidth="3" strokeLinejoin="round" />
        <path d="M10 0 L0 15 L30 45 L60 15 L50 0" fill="none" stroke="#1e293b" strokeWidth="3" strokeLinejoin="round" />
        <path d="M0 15 L60 15" stroke="#1e293b" strokeWidth="3" />
        <path d="M10 0 L30 15 L50 0" stroke="#1e293b" strokeWidth="3" />
        
        {/* Sparkles */}
        <path d="M-10 -10 L-5 -15 M-10 -15 L-5 -10" stroke="#56C1B6" strokeWidth="3" />
        <path d="M70 -5 L75 -10 M70 -10 L75 -5" stroke="#56C1B6" strokeWidth="3" />

        {/* Price Bubble */}
        <path d="M0 -50 Q -10 -50 -10 -40 L -10 -20 Q -10 -10 0 -10 L 20 -10 L 25 0 L 35 -10 L 60 -10 Q 70 -10 70 -20 L 70 -40 Q 70 -50 60 -50 Z" fill="#56C1B6" stroke="#1e293b" strokeWidth="3" />
        <text x="30" y="-25" textAnchor="middle" fontSize="20" fontFamily="sans-serif" fontWeight="bold" fill="white">$</text>
        <text x="30" y="65" textAnchor="middle" fontSize="10" fontFamily="sans-serif" fill="#64748b">LAB</text>
      </g>
    </svg>
  );

  const TrustIllustration = () => (
    <svg viewBox="0 0 200 200" className="w-full h-full p-6 transition-transform duration-700 group-hover:scale-105">
      <defs>
        <filter id="wobble">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="1" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
        </filter>
      </defs>
      
      {/* Envelope Body */}
      <path d="M40 80 Q 40 78 42 78 L 158 78 Q 160 78 160 80 L 160 150 Q 160 160 150 160 L 50 160 Q 40 160 40 150 Z" fill="#f8fafc" stroke="#1e293b" strokeWidth="4" strokeLinejoin="round" />
      
      {/* Envelope Flap (Open) */}
      <path d="M40 80 L 100 130 L 160 80" fill="none" stroke="#1e293b" strokeWidth="4" strokeLinejoin="round" />
      
      {/* Document Sliding Out */}
      <g transform="translate(0, -30)">
          <path d="M55 50 L 145 50 L 145 100 L 55 100 Z" fill="white" stroke="#1e293b" strokeWidth="3" />
          {/* Text Lines */}
          <line x1="65" y1="65" x2="135" y2="65" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
          <line x1="65" y1="75" x2="135" y2="75" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
          
          {/* Diamond Sketch on Paper */}
          <path d="M90 85 L 100 95 L 110 85 L 100 80 Z" fill="#e0f2fe" stroke="#1e293b" strokeWidth="1.5" />
          
          {/* IGI Text */}
          <text x="100" y="45" textAnchor="middle" fontSize="20" fontFamily="serif" fontWeight="bold" fill="#1e293b" transform="rotate(-2 100 45)">IGI</text>
      </g>

      {/* Blue Ribbon / Seal */}
      <circle cx="130" cy="130" r="12" fill="#56C1B6" stroke="#1e293b" strokeWidth="3" />
      <path d="M130 130 L 125 155 L 130 150 L 135 155 Z" fill="#56C1B6" stroke="#1e293b" strokeWidth="3" />
    </svg>
  );

  const NuanceIllustration = () => (
    <svg viewBox="0 0 200 200" className="w-full h-full p-6 transition-transform duration-700 group-hover:scale-105">
      {/* Big Diamond */}
      <g transform="translate(75, 75) scale(1.2)">
         <path d="M0 20 L 40 20 L 50 0 L -10 0 Z" fill="white" stroke="#1e293b" strokeWidth="2.5" strokeLinejoin="round" />
         <path d="M0 20 L 20 45 L 40 20" fill="none" stroke="#1e293b" strokeWidth="2.5" strokeLinejoin="round" />
         {/* Facets */}
         <path d="M-10 0 L 20 45 L 50 0" fill="none" stroke="#1e293b" strokeWidth="1.5" />
         <path d="M0 20 L 40 20" stroke="#1e293b" strokeWidth="1.5" />
         <path d="M10 0 L 20 20 L 30 0" stroke="#1e293b" strokeWidth="1.5" />
      </g>

      {/* Magnifying Glass */}
      <g transform="translate(20, 20)">
         {/* Handle */}
         <path d="M110 110 L 150 150" stroke="#1e293b" strokeWidth="10" strokeLinecap="round" />
         <path d="M110 110 L 150 150" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" strokeDasharray="2 6" opacity="0.5" />
         
         {/* Lens Rim */}
         <circle cx="90" cy="90" r="45" fill="rgba(86, 193, 182, 0.15)" stroke="#1e293b" strokeWidth="5" />
         
         {/* Reflection Highlight */}
         <path d="M60 70 Q 75 60 90 70" fill="none" stroke="white" strokeWidth="4" opacity="0.8" strokeLinecap="round" />
         <path d="M65 75 Q 75 68 85 75" fill="none" stroke="white" strokeWidth="2" opacity="0.6" strokeLinecap="round" />
      </g>
      
      {/* "Look Closer" sparkles */}
      <path d="M140 60 L 145 65 M 140 65 L 145 60" stroke="#56C1B6" strokeWidth="3" />
    </svg>
  );

  const EcoIllustration = () => (
    <svg viewBox="0 0 200 200" className="w-full h-full p-6 transition-transform duration-700 group-hover:scale-105">
      {/* Diamond embedded in earth/pot */}
      <path d="M70 140 Q 100 150 130 140 L 120 170 Q 100 180 80 170 Z" fill="#f1f5f9" stroke="#1e293b" strokeWidth="3" strokeLinejoin="round" />
      
      {/* Stem */}
      <path d="M100 140 Q 100 120 100 100" fill="none" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
      
      {/* Leaves */}
      <g transform="translate(100, 110)">
         <path d="M0 0 Q 20 -10 30 -30 Q 10 -30 0 0" fill="#56C1B6" stroke="#1e293b" strokeWidth="3" />
         <path d="M0 0 Q -20 -5 -30 -25 Q -10 -30 0 0" fill="#ccfbf1" stroke="#1e293b" strokeWidth="3" />
      </g>
      
      {/* Diamond Flower */}
      <g transform="translate(80, 50)">
         <path d="M20 50 L 0 20 L 10 0 L 30 0 L 40 20 L 20 50 Z" fill="white" stroke="#1e293b" strokeWidth="3" strokeLinejoin="round" />
         <path d="M0 20 L 40 20" stroke="#1e293b" strokeWidth="2" />
         <path d="M10 0 L 20 20 L 30 0" stroke="#1e293b" strokeWidth="2" />
         <path d="M0 20 L 20 0" stroke="#1e293b" strokeWidth="1" />
         <path d="M40 20 L 20 0" stroke="#1e293b" strokeWidth="1" />
      </g>
      
      {/* Radiating 'Green' Energy */}
      <path d="M50 40 L 40 30" stroke="#56C1B6" strokeWidth="3" strokeLinecap="round" />
      <path d="M150 40 L 160 30" stroke="#56C1B6" strokeWidth="3" strokeLinecap="round" />
      <path d="M100 20 L 100 10" stroke="#56C1B6" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );

  const getIllustration = (index: number) => {
    switch (index) {
      case 0: return <ValueIllustration />;
      case 1: return <TrustIllustration />;
      case 2: return <NuanceIllustration />;
      case 3: return <EcoIllustration />;
      default: return <ValueIllustration />;
    }
  };

  return (
    <section id="buying-guide" className="py-20 px-4 md:px-12 bg-white scroll-mt-20 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-joy-teal uppercase tracking-widest text-xs font-bold mb-2 block">{t.buyingGuide.label}</span>
          <h2 className="text-4xl font-serif text-joy-black mb-4">{t.buyingGuide.title}</h2>
          <p className="text-gray-600 font-light max-w-2xl mx-auto">
            {t.buyingGuide.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {t.buyingGuide.tips.map((tip, index) => (
            <div key={index} className="bg-joy-grey rounded-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 flex flex-col">
              {/* Illustration Area */}
              <div className="h-64 w-full bg-white relative overflow-hidden flex items-center justify-center border-b border-gray-100">
                 {getIllustration(index)}
              </div>
              
              {/* Content Area */}
              <div className="p-8 bg-joy-grey flex-1">
                <h3 className="font-serif text-2xl text-joy-black mb-3">{tip.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-sm">
                  {tip.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* New Infographic Section */}
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-joy-black text-white relative">
            <div className="absolute top-0 right-0 p-4 opacity-50 pointer-events-none">
                <Sparkles className="w-24 h-24 text-joy-teal blur-2xl opacity-20" />
            </div>
            
            <div className="flex flex-col">
                <div className="p-8 md:p-12 relative z-10 text-center max-w-3xl mx-auto">
                    
                    <h3 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
                        {t.buyingGuide.infographic?.title}
                    </h3>
                    
                    <p className="text-gray-400 font-light leading-relaxed mb-8 text-lg">
                        {t.buyingGuide.infographic?.description}
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 font-mono">
                        {t.buyingGuide.infographic?.points.map((point, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-joy-teal"></div>
                                <span>{point}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative w-full bg-black flex items-center justify-center p-4">
                     <img 
                        src="https://s4.tenten.co/tentenai_temp-2025-12-29-at-11.10.34-AM.jpg" 
                        alt="Diamond Guide Infographic"
                        className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                     />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BuyingGuide;