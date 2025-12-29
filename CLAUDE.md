# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Joycolori Diamond Guide is a React 19 + TypeScript educational web app about lab-grown diamonds for the Joycolori brand. It features an AI-powered concierge chat using Google's Gemini API.

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server on port 3000
npm run build        # Production build
npm run preview      # Preview production build
```

## Environment Setup

Set `GEMINI_API_KEY` in `.env.local` for the AI concierge functionality.

## Architecture

**Entry Flow**: `index.html` → `index.tsx` → `App.tsx`

**Key Patterns**:

- **Flat structure**: Components, services, contexts, and utils are in root-level directories (no `src/` folder)
- **Path alias**: `@/*` maps to project root
- **Tailwind via CDN**: Configured inline in `index.html` with custom `joy-*` colors (joy-teal, joy-black, joy-grey)
- **Fonts**: Playfair Display (headings) + Lato (body) via Google Fonts

**Internationalization** (`contexts/LanguageContext.tsx`):
- URL-based routing: `/en/...` for English, `/zh-TW/...` for Traditional Chinese
- Browser language detection: Auto-detects `zh-TW`, `zh-Hant`, `zh-HK` → Traditional Chinese; all others → English
- Priority: URL language > browser language
- `useLanguage()` hook provides `language`, `setLanguage`, and `t` (translations object)
- `setLanguage()` automatically updates the URL
- `utils/translations.ts`: Contains all UI text for both languages

**AI Integration** (`services/geminiService.ts`):
- `sendMessageToGemini()`: Chat with Gemini 3 Flash, maintains conversation history, respects language setting
- `generateTipImage()`: Generates doodle-style images with Gemini 2.5 Flash Image
- API key accessed via `process.env.API_KEY` (injected by Vite config)

**Types** (`types.ts`):
- `Language`: `'en' | 'zh-TW'`
- `DiamondShape`, `ColorGrade`, `ClarityGrade`: Diamond-specific domain types
- `ChatMessage`: Chat UI message structure

## Component Structure

Main sections in `App.tsx` render order:
1. Header (navigation)
2. Hero (landing section)
3. Guide content: CutGuide → ColorGuide → ClarityGuide → CertificationGuide → BuyingGuide
4. Footer
5. AiConcierge (floating chat widget)
