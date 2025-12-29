import React, { useState } from 'react';
import { ColorGrade } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const ColorGuide: React.FC = () => {
  const { t } = useLanguage();

  const colorGrades: ColorGrade[] = [
    { grade: 'D', categoryKey: 'Colorless', descriptionKey: 'D', colorHex: '#ffffff' },
    { grade: 'E', categoryKey: 'Colorless', descriptionKey: 'E', colorHex: '#fbfbfb' },
    { grade: 'F', categoryKey: 'Colorless', descriptionKey: 'F', colorHex: '#f8f8f8' },
    { grade: 'G', categoryKey: 'NearColorless', descriptionKey: 'G', colorHex: '#f4f4f0' },
    { grade: 'H', categoryKey: 'NearColorless', descriptionKey: 'H', colorHex: '#f0f0eb' },
    { grade: 'I', categoryKey: 'NearColorless', descriptionKey: 'I', colorHex: '#ecece6' },
    { grade: 'J', categoryKey: 'NearColorless', descriptionKey: 'J', colorHex: '#e8e8e1' },
    { grade: 'K', categoryKey: 'Faint', descriptionKey: 'K', colorHex: '#e4e4dd' },
    { grade: 'Z', categoryKey: 'Light', descriptionKey: 'Z', colorHex: '#dcdcc0' },
  ];

  const [selectedColor, setSelectedColor] = useState<ColorGrade>(colorGrades[0]);

  return (
    <section id="color" className="py-20 px-4 md:px-12 bg-joy-grey scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-joy-teal uppercase tracking-widest text-xs font-bold mb-2 block">{t.color.label}</span>
          <h2 className="text-4xl font-serif text-joy-black mb-4">{t.color.title}</h2>
          <p className="text-gray-600 font-light max-w-2xl mx-auto">
            {t.color.description}
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm">
          {/* Visual Diamond Representation */}
          <div className="flex justify-center mb-12">
            <div 
              className="w-48 h-48 md:w-64 md:h-64 transition-colors duration-700 ease-in-out clip-diamond relative shadow-2xl"
              style={{ 
                backgroundColor: selectedColor.colorHex,
                boxShadow: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), inset 0 0 40px rgba(0,0,0,0.05)`
              }}
            >
                {/* Facet Lines Simulation */}
                <div className="absolute inset-0 border border-gray-200 opacity-20 rotate-45 transform scale-75"></div>
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-300 opacity-30"></div>
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-300 opacity-30"></div>
                
                {/* Shine effect */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/60 to-transparent pointer-events-none"></div>
            </div>
            <style>{`
              .clip-diamond {
                clip-path: polygon(50% 0%, 100% 25%, 85% 100%, 15% 100%, 0% 25%);
              }
            `}</style>
          </div>

          {/* Slider / Selector */}
          <div className="relative pt-12 pb-6">
            <div className="h-2 bg-gradient-to-r from-white via-yellow-50 to-yellow-200 rounded-full w-full mb-8 border border-gray-100"></div>
            
            <div className="flex justify-between items-start w-full relative">
              {colorGrades.map((c) => (
                <div key={c.grade} className="flex flex-col items-center group cursor-pointer" onClick={() => setSelectedColor(c)}>
                   <div className={`w-4 h-4 rounded-full mb-2 transition-all duration-300 ${selectedColor.grade === c.grade ? 'bg-joy-teal scale-150 ring-4 ring-joy-teal/20' : 'bg-gray-300 group-hover:bg-gray-400'}`}></div>
                   <span className={`font-serif text-lg ${selectedColor.grade === c.grade ? 'text-joy-black font-bold' : 'text-gray-400'}`}>{c.grade}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center bg-joy-grey/50 p-6 rounded-lg">
             <h3 className="text-2xl font-serif text-joy-black mb-2">
                 {t.color.grade}: {selectedColor.grade} ({t.color.categories[selectedColor.categoryKey as keyof typeof t.color.categories]})
             </h3>
             <p className="text-gray-600">
                {t.color.descriptions[selectedColor.descriptionKey as keyof typeof t.color.descriptions]}
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorGuide;