import { Language } from '../types';

export const translations = {
  en: {
    common: {
      shopDiamonds: 'Shop Lab-Grown',
      askExpert: 'Ask an Expert',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      contact: 'Contact Us',
      rights: 'All rights reserved.',
    },
    nav: {
      cut: 'Cut',
      color: 'Color',
      clarity: 'Clarity',
      certification: 'IGI Certification',
      guide: 'Buying Guide',
    },
    hero: {
      brand: 'Joycolori',
      title: 'The Future of Diamonds',
      subtitle: ' chemically, physically, and optically identical to mined diamonds. Explore our guide to sustainable, ethical Lab-Grown Diamonds.',
      cta: 'Discover the Future',
    },
    cut: {
      label: 'The First C',
      title: 'Cut & Shape',
      description: 'Lab-grown diamonds are cut with the same precision as mined stones. The "cut" determines how the stone interacts with light. Since lab-grown diamonds offer better value, you can often prioritize a higher cut grade for maximum brilliance.',
      selectShape: 'Select a Shape',
      visual: 'Visual Representation',
      shapes: {
        Round: 'The most popular cut, designed to maximize brilliance and fire with 58 facets.',
        Princess: 'A square cut with sharp corners, offering a modern look with intense sparkle.',
        Emerald: 'A rectangular step-cut featuring long, parallel facets that highlight clarity.',
        Oval: 'An elongated round cut that can make the finger appear longer and slender.',
        Cushion: 'A square or rectangular cut with rounded corners, resembling a pillow.',
      }
    },
    color: {
      label: 'The Second C',
      title: 'Color',
      description: 'Lab-grown diamonds are available in the same color ranges as mined ones. However, high-color grades (D-F) are more accessible in lab-grown diamonds, allowing you to own a colorless stone without the mining premium.',
      grade: 'Grade',
      categories: {
        Colorless: 'Colorless',
        NearColorless: 'Near Colorless',
        Faint: 'Faint',
        Light: 'Light'
      },
      descriptions: {
        D: 'Absolutely colorless. The highest color grade, easily obtainable in lab-grown.',
        E: 'Colorless. Minute traces of color, virtually undetectable.',
        F: 'Colorless. Slight color detectable by an expert, still premium quality.',
        G: 'Near colorless. Excellent value, color is hard to detect.',
        H: 'Near colorless. A great budget-friendly option that faces up white.',
        I: 'Near colorless. Slight yellow tint may be visible.',
        J: 'Near colorless. Slight yellow color is detectable.',
        K: 'Faint color. A warm tone is noticeable.',
        Z: 'Light color. Significant yellow or brown tint.'
      }
    },
    clarity: {
      label: 'The Third C',
      title: 'Clarity',
      description: 'Created in controlled environments, lab-grown diamonds often have fewer inclusions than mined ones. This means you can find higher clarity grades (VVS-VS) more easily.',
      magnification: '10x Magnification View',
      names: {
        FL: 'Flawless',
        IF: 'Internally Flawless',
        VVS1: 'Very, Very Slightly Included 1',
        VVS2: 'Very, Very Slightly Included 2',
        VS1: 'Very Slightly Included 1',
        VS2: 'Very Slightly Included 2',
        SI1: 'Slightly Included 1',
        SI2: 'Slightly Included 2',
        I1: 'Included 1',
      },
      descriptions: {
        FL: 'No inclusions or blemishes visible to a skilled grader using 10x magnification.',
        IF: 'No inclusions and only blemishes are visible to a skilled grader using 10x magnification.',
        VVS1: 'Inclusions are difficult for a skilled grader to see under 10x magnification.',
        VVS2: 'Inclusions are difficult for a skilled grader to see under 10x magnification.',
        VS1: 'Inclusions are minor and range from difficult to somewhat easy for a skilled grader to see under 10x magnification.',
        VS2: 'Inclusions are minor and range from difficult to somewhat easy for a skilled grader to see under 10x magnification.',
        SI1: 'Inclusions are noticeable to a skilled grader under 10x magnification.',
        SI2: 'Inclusions are noticeable to a skilled grader under 10x magnification.',
        I1: 'Inclusions are obvious under 10x magnification and may affect transparency and brilliance.',
      }
    },
    certification: {
      label: 'The Fifth Element',
      title: 'IGI Certification',
      description: 'For Lab-Grown Diamonds, the International Gemological Institute (IGI) is the global authority. An IGI report confirms the stone is lab-created and details its exact quality.',
      giaTitle: 'IGI Certified',
      giaDesc: 'IGI pioneered the grading of lab-grown diamonds. Their detailed reports are the industry gold standard for lab-created stones, ensuring you get exactly what you pay for.',
      conflictTitle: 'Sustainable & Ethical',
      conflictDesc: 'Joycolori Lab-Grown Diamonds are 100% conflict-free and eco-friendly. No mining, no earth displacement—just pure science and art.',
      guaranteeTitle: 'Joycolori Promise',
      guaranteeDesc: 'Chemically identical to mined diamonds, but kinder to the planet. We hand-select the top 1% of lab-grown stones for maximum light performance.',
      certReport: 'Laboratory Grown Diamond Report',
      certShape: 'Shape and Cutting Style',
      certMeasure: 'Measurements',
      certCarat: 'Carat Weight',
      certColor: 'Color Grade',
      certClarity: 'Clarity Grade',
      certCut: 'Cut Grade',
      roundBrilliant: 'Round Brilliant',
      excellent: 'Ideal / Excellent'
    },
    buyingGuide: {
      label: 'Expert Advice',
      title: 'Lab-Grown Buying Tips',
      subtitle: 'Essential insights for making an informed decision on your sustainable luxury journey.',
      tips: [
        {
          title: 'Value Over Carat',
          description: 'Because lab-grown diamonds offer better value, you can often afford a larger stone. Don\'t be afraid to look at 1.5ct or 2.0ct options.',
          imagePrompt: 'A simple doodle of a balance scale. One side has a small rock, the other a large sparkling diamond labeled "Lab". They are balanced.'
        },
        {
          title: 'Trust IGI Reports',
          description: 'Always ensure your lab-grown diamond comes with an IGI report. It verifies the diamond\'s origin and quality grades accurately.',
          imagePrompt: 'A simple doodle of an envelope with "IGI" written on it and a blue ribbon seal. Cute style.'
        },
        {
          title: 'Check Nuances',
          description: 'Lab diamonds can have specific growth patterns (CVD vs HPHT). Ask an expert to ensure there are no visible growth lines.',
          imagePrompt: 'A simple doodle of a magnifying glass holding over a sparkling diamond. Blue accents.'
        },
        {
          title: 'Eco-Friendly Choice',
          description: 'Choosing lab-grown reduces environmental impact significantly. It\'s a choice for the future of our planet.',
          imagePrompt: 'A simple doodle of a diamond inside a green leaf or growing from a plant. Minimalist style.'
        }
      ],
      infographic: {
        title: 'The Diamond Selection Cheat Sheet',
        description: 'A comprehensive visual summary of the 4Cs. This AI-curated chart helps you navigate the technical details of choosing the perfect lab-grown diamond.',
        points: ['Cut Proportions', 'Clarity Scale', 'Color Grades']
      }
    },
    ai: {
      title: '培育鑽石顧問',
      subtitle: 'AI 寶石學家',
      placeholder: '詢問關於實驗室 vs 開採...',
      welcome: '您好。我是您的 Joycolori 培育鑽石顧問。請問有關於永續奢華的問題嗎？',
      error: '很抱歉，我目前無法查閱我的記錄。請稍後再試。',
    }
  },
  'zh-TW': {
    common: {
      shopDiamonds: '選購培育鑽石',
      askExpert: '諮詢專家',
      privacy: '隱私權政策',
      terms: '服務條款',
      contact: '聯絡我們',
      rights: '版權所有',
    },
    nav: {
      cut: '車工',
      color: '顏色',
      clarity: '淨度',
      certification: 'IGI 認證',
      guide: '購買指南',
    },
    hero: {
      brand: 'Joycolori',
      title: '鑽石的未來',
      subtitle: '化學、物理和光學性質與開採鑽石完全相同。探索我們關於永續、道德的實驗室培育鑽石指南。',
      cta: '探索未來',
    },
    cut: {
      label: '第一個 C',
      title: '車工與形狀',
      description: '培育鑽石的切割精度與開採鑽石相同。「車工」決定了寶石與光線的互動。由於培育鑽石提供更高的價值，您通常可以優先考慮更高的車工等級以獲得最大的光彩。',
      selectShape: '選擇形狀',
      visual: '視覺展示',
      shapes: {
        Round: '最受歡迎的切割，擁有58個切面，旨在最大化亮度和火彩。',
        Princess: '帶有尖角的方形切割，提供現代外觀和強烈的閃爍。',
        Emerald: '長方形階梯式切割，具有長而平行的切面，突顯淨度。',
        Oval: '拉長的圓形切割，可以使手指看起來更修長纖細。',
        Cushion: '帶有圓角的方形或長方形切割，類似於枕頭。',
      }
    },
    color: {
      label: '第二個 C',
      title: '顏色',
      description: '培育鑽石的顏色範圍與開採鑽石相同。然而，高品質顏色等級（D-F）在培育鑽石中更容易獲得，讓您無需支付開採溢價即可擁有無色寶石。',
      grade: '等級',
      categories: {
        Colorless: '無色',
        NearColorless: '近無色',
        Faint: '微黃',
        Light: '淡黃'
      },
      descriptions: {
        D: '絕對無色。最高顏色等級，在培育鑽石中容易獲得。',
        E: '無色。微量顏色幾乎無法檢測。',
        F: '無色。專家可檢測到輕微顏色，仍屬優質。',
        G: '近無色。極佳的價值，顏色難以檢測。',
        H: '近無色。預算友好的選擇，外觀潔白。',
        I: '近無色。可見輕微黃色色調。',
        J: '近無色。可檢測到輕微黃色。',
        K: '微黃。明顯的暖色調。',
        Z: '淡黃。明顯的黃色或棕色色調。'
      }
    },
    clarity: {
      label: '第三個 C',
      title: '淨度',
      description: '在受控環境中培育，培育鑽石通常比開採鑽石含有更少的內含物。這意味著您可以更容易找到高淨度等級（VVS-VS）。',
      magnification: '10倍放大視圖',
      names: {
        FL: '無瑕級 (Flawless)',
        IF: '內無瑕級 (Internally Flawless)',
        VVS1: '極輕微內含級 1 (VVS1)',
        VVS2: '極輕微內含級 2 (VVS2)',
        VS1: '輕微內含級 1 (VS1)',
        VS2: '輕微內含級 2 (VS2)',
        SI1: '微內含級 1 (SI1)',
        SI2: '微內含級 2 (SI2)',
        I1: '內含級 1 (I1)',
      },
      descriptions: {
        FL: '熟練的分級師在10倍放大鏡下看不到內含物或瑕疵。',
        IF: '熟練的分級師在10倍放大鏡下只能看到表面瑕疵，無內含物。',
        VVS1: '熟練的分級師在10倍放大鏡下難以看到內含物。',
        VVS2: '熟練的分級師在10倍放大鏡下難以看到內含物。',
        VS1: '內含物很小，熟練的分級師在10倍放大鏡下從難以看到到有些容易看到。',
        VS2: '內含物很小，熟練的分級師在10倍放大鏡下從難以看到到有些容易看到。',
        SI1: '熟練的分級師在10倍放大鏡下明顯可見內含物。',
        SI2: '熟練的分級師在10倍放大鏡下明顯可見內含物。',
        I1: '在10倍放大鏡下內含物明顯，可能會影響透明度和亮度。',
      }
    },
    certification: {
      label: '第五元素',
      title: 'IGI 認證',
      description: '對於培育鑽石，國際寶石學院 (IGI) 是全球權威。IGI 報告確認寶石是實驗室培育的，並詳細說明其確切品質。',
      giaTitle: 'IGI 認證',
      giaDesc: 'IGI 率先對培育鑽石進行分級。他們的詳細報告是實驗室製造寶石的行業黃金標準，確保您物有所值。',
      conflictTitle: '永續與道德',
      conflictDesc: 'Joycolori 培育鑽石 100% 無衝突且環保。沒有開採，沒有破壞地球——只有純粹的科學與藝術。',
      guaranteeTitle: 'Joycolori 承諾',
      guaranteeDesc: '化學性質與開採鑽石相同，但對地球更友善。我們親手挑選前 1% 的培育寶石，以獲得最大的光性能。',
      certReport: '實驗室培育鑽石報告',
      certShape: '形狀與切割風格',
      certMeasure: '測量',
      certCarat: '克拉重量',
      certColor: '顏色等級',
      certClarity: '淨度等級',
      certCut: '車工等級',
      roundBrilliant: '圓形明亮式',
      excellent: '理想 / 極優 (Ideal / Excellent)'
    },
    buyingGuide: {
      label: '專家建議',
      title: '培育鑽石購買技巧',
      subtitle: '選擇完美實驗室培育鑽石的必備技巧，助您開啟永續奢華之旅。',
      tips: [
        {
          title: '價值勝於克拉',
          description: '由於培育鑽石提供更好的價值，您通常可以負擔得起更大的寶石。不要害怕考慮 1.5ct 或 2.0ct 的選擇。',
          imagePrompt: 'A simple doodle of a balance scale. One side has a small rock, the other a large sparkling diamond labeled "Lab". They are balanced.'
        },
        {
          title: '信任 IGI 報告',
          description: '務必確保您的培育鑽石附有 IGI 報告。它準確驗證了鑽石的來源和品質等級。',
          imagePrompt: 'A simple doodle of an envelope with "IGI" written on it and a blue ribbon seal. Cute style.'
        },
        {
          title: '檢查細節',
          description: '培育鑽石可能有特定的生長模式（CVD 與 HPHT）。請專家確保沒有可見的生長紋。',
          imagePrompt: 'A simple doodle of a magnifying glass holding over a sparkling diamond. Blue accents.'
        },
        {
          title: '環保選擇',
          description: '選擇培育鑽石可顯著減少對環境的影響。這是為了我們星球未來的選擇。',
          imagePrompt: 'A simple doodle of a diamond inside a green leaf or growing from a plant. Minimalist style.'
        }
      ],
      infographic: {
        title: '鑽石選擇指南',
        description: '4C 標準的綜合視覺摘要。這張由 AI 精選的圖表協助您掌握選擇完美培育鑽石的技術細節。',
        points: ['車工比例', '淨度分級', '顏色等級']
      }
    },
    ai: {
      title: '培育鑽石顧問',
      subtitle: 'AI 寶石學家',
      placeholder: '詢問關於實驗室 vs 開採...',
      welcome: '您好。我是您的 Joycolori 培育鑽石顧問。請問有關於永續奢華的問題嗎？',
      error: '很抱歉，我目前無法查閱我的記錄。請稍後再試。',
    }
  }
};

export const getTranslation = (lang: Language) => translations[lang];