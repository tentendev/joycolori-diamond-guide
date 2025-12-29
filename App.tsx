import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CutGuide from './components/CutGuide';
import ColorGuide from './components/ColorGuide';
import ClarityGuide from './components/ClarityGuide';
import CertificationGuide from './components/CertificationGuide';
import BuyingGuide from './components/BuyingGuide';
import AiConcierge from './components/AiConcierge';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <div id="guide-content">
          <CutGuide />
          <ColorGuide />
          <ClarityGuide />
          <CertificationGuide />
          <BuyingGuide />
        </div>
        <Footer />
        <AiConcierge />
      </div>
    </LanguageProvider>
  );
};

export default App;