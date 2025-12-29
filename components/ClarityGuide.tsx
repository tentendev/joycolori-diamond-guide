import React, { useState } from 'react';
import { ClarityGrade } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const ClarityGuide: React.FC = () => {
  const { t } = useLanguage();

  const clarityGrades: ClarityGrade[] = [
    { grade: 'FL', nameKey: 'FL', descriptionKey: 'FL', inclusionCount: 0 },
    { grade: 'IF', nameKey: 'IF', descriptionKey: 'IF', inclusionCount: 0 },
    { grade: 'VVS1', nameKey: 'VVS1', descriptionKey: 'VVS1', inclusionCount: 1 },
    { grade: 'VVS2', nameKey: 'VVS2', descriptionKey: 'VVS2', inclusionCount: 2 },
    { grade: 'VS1', nameKey: 'VS1', descriptionKey: 'VS1', inclusionCount: 4 },
    { grade: 'VS2', nameKey: 'VS2', descriptionKey: 'VS2', inclusionCount: 6 },
    { grade: 'SI1', nameKey: 'SI1', descriptionKey: 'SI1', inclusionCount: 10 },
    { grade: 'SI2', nameKey: 'SI2', descriptionKey: 'SI2', inclusionCount: 15 },
    { grade: 'I1', nameKey: 'I1', descriptionKey: 'I1', inclusionCount: 25 },
  ];

  const [activeClarity, setActiveClarity] = useState<ClarityGrade>(clarityGrades[0]);

  // Generate random positions for inclusions based on count
  const renderInclusions = (count: number) => {
    const inclusions = [];
    for (let i = 0; i < count; i++) {
        // Deterministic pseudo-random based on index to keep them consistent per grade
        const top = 30 + (i * 17) % 40; 
        const left = 30 + (i * 23) % 40;
        const size = i % 3 === 0 ? 4 : 2;
        
        inclusions.push(
            <div 
                key={i}
                className="absolute bg-gray-800 rounded-full opacity-60 pointer-events-none blur-[0.5px]"
                style={{ top: `${top}%`, left: `${left}%`, width: `${size}px`, height: `${size}px` }}
            />
        );
    }
    return inclusions;
  };

  return (
    <section id="clarity" className="py-20 px-4 md:px-12 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="order-2 lg:order-1">
                 {/* Visualizer */}
                 <div className="relative w-full aspect-square max-w-md mx-auto bg-gray-50 rounded-full flex items-center justify-center p-8 border border-gray-100">
                    <div className="relative w-full h-full">
                        {/* Diamond Outline SVG */}
                        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl">
                            <path d="M50 2 L85 30 L50 98 L15 30 Z" fill="white" stroke="#1a1a1a" strokeWidth="0.5"/>
                            <path d="M15 30 L85 30" fill="none" stroke="#1a1a1a" strokeWidth="0.2"/>
                            <path d="M25 30 L50 98 L75 30" fill="none" stroke="#1a1a1a" strokeWidth="0.2"/>
                            <path d="M15 30 L50 2 L85 30" fill="none" stroke="#e5e5e5" strokeWidth="0.5"/>
                            {/* Inner facets for realism */}
                            <path d="M30 30 L50 45 L70 30" fill="none" stroke="#e5e5e5" strokeWidth="0.2"/>
                        </svg>
                        
                        {/* Inclusions Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[60%] h-[60%] relative">
                                {renderInclusions(activeClarity.inclusionCount)}
                            </div>
                        </div>

                        {/* Magnifier Effect Hint */}
                        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold shadow-md text-joy-teal uppercase tracking-widest border border-gray-100">
                            {t.clarity.magnification}
                        </div>
                    </div>
                 </div>
            </div>

            <div className="order-1 lg:order-2">
                <span className="text-joy-teal uppercase tracking-widest text-xs font-bold mb-2 block">{t.clarity.label}</span>
                <h2 className="text-4xl font-serif text-joy-black mb-6">{t.clarity.title}</h2>
                <p className="text-gray-600 mb-8 font-light leading-relaxed">
                    {t.clarity.description}
                </p>

                <div className="grid grid-cols-3 gap-2 mb-8">
                    {clarityGrades.map((c) => (
                        <button
                            key={c.grade}
                            onClick={() => setActiveClarity(c)}
                            className={`py-3 text-sm font-serif transition-colors border ${
                                activeClarity.grade === c.grade 
                                ? 'bg-joy-black text-white border-joy-black' 
                                : 'bg-white text-gray-600 border-gray-200 hover:border-joy-teal'
                            }`}
                        >
                            {c.grade}
                        </button>
                    ))}
                </div>

                <div className="bg-joy-grey p-6 border-l-4 border-joy-teal">
                    <h3 className="text-2xl font-serif text-joy-black mb-2">
                        {t.clarity.names[activeClarity.nameKey as keyof typeof t.clarity.names]}
                    </h3>
                    <p className="text-gray-700">
                        {t.clarity.descriptions[activeClarity.descriptionKey as keyof typeof t.clarity.descriptions]}
                    </p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default ClarityGuide;