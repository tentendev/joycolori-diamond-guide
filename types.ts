export type DiamondShape = 'Round' | 'Princess' | 'Emerald' | 'Oval' | 'Cushion' | 'Pear';
export type Language = 'en' | 'zh-TW';

export interface ShapeInfo {
  name: DiamondShape;
  imageAlt: string;
  // Description is now handled via translation key
}

export interface ColorGrade {
  grade: string;
  categoryKey: string; // Changed to key for translation
  descriptionKey: string; // Changed to key for translation
  colorHex: string;
}

export interface ClarityGrade {
  grade: string;
  nameKey: string; // Changed to key for translation
  descriptionKey: string; // Changed to key for translation
  inclusionCount: number; // 0 for FL, high for I3
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}