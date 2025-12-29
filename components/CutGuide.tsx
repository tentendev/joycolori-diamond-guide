import React, { useState } from 'react';
import { DiamondShape, ShapeInfo } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { Sparkles, Info } from 'lucide-react';

const CutGuide: React.FC = () => {
  const [activeShape, setActiveShape] = useState<DiamondShape>('Round');
  const [imgError, setImgError] = useState<boolean>(false);
  
  const { t } = useLanguage();

  const shapes: ShapeInfo[] = [
    { name: 'Round', imageAlt: 'Round Brilliant Diamond' },
    { name: 'Princess', imageAlt: 'Princess Cut Diamond' },
    { name: 'Emerald', imageAlt: 'Emerald Cut Diamond' },
    { name: 'Oval', imageAlt: 'Oval Cut Diamond' },
    { name: 'Cushion', imageAlt: 'Cushion Cut Diamond' },
  ];

  // Verified High-Quality Unsplash IDs for Loose Diamonds (Macro shots)
  const staticShapeImages: Record<string, string> = {
    Round: 'https://images.unsplash.com/photo-1615456494022-7f7220556133?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    Princess: 'https://images.unsplash.com/photo-1616893693245-8b3ebcd31358?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    Emerald: 'https://images.unsplash.com/photo-1596942512638-30154862080f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    Oval: 'https://images.unsplash.com/photo-1600109919655-46f9035d45cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    Cushion: 'https://images.unsplash.com/photo-1612479262276-80516805d76d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  };

  const handleShapeChange = (shape: DiamondShape) => {
    setImgError(false);
    setActiveShape(shape);
  };

  // Fallback SVG renderer to guarantee the user sees the shape even if images break
  const renderShapeSvg = (shape: string) => {
    const commonProps = {
      fill: "none",
      stroke: "white",
      strokeWidth: "1.5",
      className: "drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
    };

    switch(shape) {
        case 'Round':
            return (
                <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 animate-in fade-in zoom-in duration-500">
                    <circle cx="50" cy="50" r="45" {...commonProps} />
                    <circle cx="50" cy="50" r="25" stroke="white" strokeWidth="0.5" opacity="0.5" />
                    <path d="M50 5 L95 50 L50 95 L5 50 Z" stroke="white" strokeWidth="0.5" opacity="0.5" />
                </svg>
            );
        case 'Princess':
            return (
                <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 animate-in fade-in zoom-in duration-500">
                    <rect x="10" y="10" width="80" height="80" {...commonProps} />
                    <path d="M10 10 L90 90 M90 10 L10 90" stroke="white" strokeWidth="0.5" opacity="0.5" />
                    <rect x="30" y="30" width="40" height="40" stroke="white" strokeWidth="0.5" opacity="0.5" fill="none"/>
                </svg>
            );
        case 'Emerald':
            return (
                <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 animate-in fade-in zoom-in duration-500">
                    <path d="M20 10 L80 10 L90 20 L90 80 L80 90 L20 90 L10 80 L10 20 Z" {...commonProps} />
                    <rect x="25" y="25" width="50" height="50" stroke="white" strokeWidth="0.5" opacity="0.5" fill="none"/>
                    <line x1="10" y1="20" x2="25" y2="25" stroke="white" strokeWidth="0.5" opacity="0.5"/>
                    <line x1="90" y1="20" x2="75" y2="25" stroke="white" strokeWidth="0.5" opacity="0.5"/>
                    <line x1="90" y1="80" x2="75" y2="75" stroke="white" strokeWidth="0.5" opacity="0.5"/>
                    <line x1="10" y1="80" x2="25" y2="75" stroke="white" strokeWidth="0.5" opacity="0.5"/>
                </svg>
            );
        case 'Oval':
            return (
                <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 animate-in fade-in zoom-in duration-500">
                    <ellipse cx="50" cy="50" rx="30" ry="45" {...commonProps} />
                    <ellipse cx="50" cy="50" rx="15" ry="25" stroke="white" strokeWidth="0.5" opacity="0.5" fill="none"/>
                </svg>
            );
        case 'Cushion':
            return (
                <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 animate-in fade-in zoom-in duration-500">
                    <rect x="15" y="15" width="70" height="70" rx="20" {...commonProps} />
                    <rect x="30" y="30" width="40" height="40" rx="10" stroke="white" strokeWidth="0.5" opacity="0.5" fill="none"/>
                    <path d="M15 50 L85 50 M50 15 L50 85" stroke="white" strokeWidth="0.5" opacity="0.5" />
                </svg>
            );
        default:
             return <Sparkles className="w-20 h-20 text-white opacity-50" />;
    }
  };

  return (
    <section id="cut" className="py-20 px-4 md:px-12 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <span className="text-joy-teal uppercase tracking-widest text-xs font-bold mb-2 block">{t.cut.label}</span>
            <h2 className="text-4xl font-serif text-joy-black mb-6">{t.cut.title}</h2>
            <p className="text-gray-600 mb-8 font-light leading-relaxed">
              {t.cut.description}
            </p>
            
            <div className="space-y-6">
              <h3 className="font-serif text-xl border-b border-gray-200 pb-2">{t.cut.selectShape}</h3>
              <div className="flex flex-wrap gap-4">
                {shapes.map((shape) => (
                  <button
                    key={shape.name}
                    onClick={() => handleShapeChange(shape.name)}
                    className={`px-4 py-2 border transition-all duration-300 ${
                      activeShape === shape.name 
                      ? 'border-joy-teal bg-joy-teal text-white' 
                      : 'border-gray-300 text-gray-500 hover:border-joy-teal hover:text-joy-teal'
                    }`}
                  >
                    {shape.name}
                  </button>
                ))}
              </div>
              
              <div className="mt-8 p-8 bg-joy-grey rounded-sm border border-gray-100 transition-all duration-500 min-h-[160px]">
                <h4 className="text-2xl font-serif mb-2 text-joy-black">{activeShape}</h4>
                <p className="text-gray-600">
                  {t.cut.shapes[activeShape as keyof typeof t.cut.shapes]}
                </p>
              </div>
            </div>
          </div>

          {/* Photo Display - Focused on Cut */}
          <div className="relative h-[500px] w-full bg-black rounded-xl flex items-center justify-center border border-gray-100 shadow-2xl overflow-hidden group">
             
             {/* Background blur effect for ambiance - Only show if not error to avoid ugly blocks */}
             {!imgError && (
                 <div 
                    className="absolute inset-0 bg-cover bg-center opacity-40 blur-3xl scale-125 transition-all duration-700"
                    style={{ backgroundImage: `url(${staticShapeImages[activeShape]})` }}
                 ></div>
             )}

             {/* Main Image Display */}
             <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
                {imgError ? (
                    // Fallback: Elegant SVG Wireframe of the shape if photo fails
                    <div className="flex flex-col items-center gap-4">
                        {renderShapeSvg(activeShape)}
                        <p className="text-gray-400 text-xs tracking-widest uppercase mt-4">Shape Visualization</p>
                    </div>
                ) : (
                    // Success: Actual Photo
                    <img 
                        key={activeShape}
                        src={staticShapeImages[activeShape]} 
                        alt={`${activeShape} Diamond Cut`}
                        onError={() => setImgError(true)}
                        // IMPORTANT: object-contain ensures the WHOLE diamond is visible inside the box.
                        // No scale applied to prevent cropping.
                        className="w-full h-full object-contain drop-shadow-[0_10px_30px_rgba(255,255,255,0.2)] animate-in fade-in zoom-in-95 duration-700"
                    />
                )}
             </div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-80 z-20">
                <span className="text-[10px] tracking-widest text-white uppercase bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                   {imgError ? <Info className="w-3 h-3 text-joy-teal" /> : <Sparkles className="w-3 h-3 text-joy-teal" />}
                   {imgError ? 'Diagram Mode' : 'Macro View'}
                </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CutGuide;