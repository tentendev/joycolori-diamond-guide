import React from 'react';
import { Award, CheckCircle, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CertificationGuide: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="certification" className="py-20 px-4 md:px-12 bg-joy-black text-white scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-joy-teal uppercase tracking-widest text-xs font-bold mb-2 block">{t.certification.label}</span>
          <h2 className="text-4xl font-serif mb-6">{t.certification.title}</h2>
          <p className="text-gray-400 font-light max-w-2xl mx-auto text-lg">
             {t.certification.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 border border-white/10 hover:border-joy-teal/50 transition-colors duration-300">
                <Award className="w-10 h-10 text-joy-teal mb-4" />
                <h3 className="text-xl font-serif mb-3">{t.certification.giaTitle}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    {t.certification.giaDesc}
                </p>
            </div>
            
            <div className="bg-white/5 p-8 border border-white/10 hover:border-joy-teal/50 transition-colors duration-300">
                <Shield className="w-10 h-10 text-joy-teal mb-4" />
                <h3 className="text-xl font-serif mb-3">{t.certification.conflictTitle}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    {t.certification.conflictDesc}
                </p>
            </div>

            <div className="bg-white/5 p-8 border border-white/10 hover:border-joy-teal/50 transition-colors duration-300">
                <CheckCircle className="w-10 h-10 text-joy-teal mb-4" />
                <h3 className="text-xl font-serif mb-3">{t.certification.guaranteeTitle}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    {t.certification.guaranteeDesc}
                </p>
            </div>
        </div>

        {/* Mock Certificate Card - Updated for IGI style */}
        <div className="mt-16 bg-white text-joy-black p-8 max-w-2xl mx-auto relative shadow-2xl transform md:-rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-yellow-500 to-joy-teal"></div>
            <div className="flex justify-between items-start border-b border-gray-200 pb-6 mb-6">
                <div>
                    <h4 className="font-serif text-3xl font-bold tracking-tight">IGI</h4>
                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mt-1">{t.certification.certReport}</p>
                </div>
                <div className="text-right">
                    <p className="font-mono text-sm">LG1234567890</p>
                    <p className="text-xs text-gray-500">Date: Oct 24, 2024</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 font-mono text-sm">
                <div>
                    <p className="text-gray-500 text-xs uppercase">{t.certification.certShape}</p>
                    <p>{t.certification.roundBrilliant}</p>
                </div>
                <div>
                    <p className="text-gray-500 text-xs uppercase">{t.certification.certMeasure}</p>
                    <p>6.50 - 6.54 x 4.01 mm</p>
                </div>
                <div>
                    <p className="text-gray-500 text-xs uppercase">{t.certification.certCarat}</p>
                    <p>1.50 carat</p>
                </div>
                <div>
                    <p className="text-gray-500 text-xs uppercase">{t.certification.certColor}</p>
                    <p>E</p>
                </div>
                 <div>
                    <p className="text-gray-500 text-xs uppercase">{t.certification.certClarity}</p>
                    <p>VVS1</p>
                </div>
                 <div>
                    <p className="text-gray-500 text-xs uppercase">{t.certification.certCut}</p>
                    <p>{t.certification.excellent}</p>
                </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
               <div className="text-[10px] text-gray-400 uppercase tracking-widest">Lab Grown Diamond</div>
               <div className="w-16 h-16 border-2 border-dashed border-gray-200 rounded-full flex items-center justify-center opacity-50">
                  <span className="text-[8px] font-bold rotate-[-15deg] text-gray-400">IGI SEAL</span>
               </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationGuide;