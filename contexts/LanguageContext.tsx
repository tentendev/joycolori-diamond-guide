import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language } from '../types';
import { translations, getTranslation } from '../utils/translations';

const SUPPORTED_LANGUAGES: Language[] = ['en', 'zh-TW'];

/**
 * Detects language from URL path (e.g., /zh-TW/...)
 */
const getLanguageFromUrl = (): Language | null => {
  const path = window.location.pathname;
  const match = path.match(/^\/(en|zh-TW)(\/|$)/);
  if (match && SUPPORTED_LANGUAGES.includes(match[1] as Language)) {
    return match[1] as Language;
  }
  return null;
};

/**
 * Detects user's preferred language from browser settings
 */
const getBrowserLanguage = (): Language => {
  const browserLang = navigator.language || (navigator as { userLanguage?: string }).userLanguage || 'en';

  // Check for Traditional Chinese variants
  if (browserLang.startsWith('zh-TW') || browserLang.startsWith('zh-Hant') || browserLang === 'zh-HK') {
    return 'zh-TW';
  }

  // Default to English for all other languages
  return 'en';
};

/**
 * Updates the URL to reflect the current language
 */
const updateUrlWithLanguage = (lang: Language) => {
  const currentPath = window.location.pathname;
  const currentLangMatch = currentPath.match(/^\/(en|zh-TW)(\/.*)?$/);

  let newPath: string;
  if (currentLangMatch) {
    // Replace existing language prefix
    const restOfPath = currentLangMatch[2] || '';
    newPath = `/${lang}${restOfPath}`;
  } else {
    // Add language prefix to path
    newPath = `/${lang}${currentPath === '/' ? '' : currentPath}`;
  }

  window.history.replaceState(null, '', newPath);
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations['en'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Priority: 1. URL language, 2. Browser language
    const urlLang = getLanguageFromUrl();
    if (urlLang) return urlLang;
    return getBrowserLanguage();
  });

  // Update URL when language changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    updateUrlWithLanguage(lang);
  };

  // Set initial URL on mount if not already set
  useEffect(() => {
    const urlLang = getLanguageFromUrl();
    if (!urlLang) {
      updateUrlWithLanguage(language);
    }
  }, []);

  // Listen for browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const urlLang = getLanguageFromUrl();
      if (urlLang && urlLang !== language) {
        setLanguageState(urlLang);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: getTranslation(language),
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};