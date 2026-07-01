import { createContext } from 'react';
import type { Locale, Translations } from './types';

export type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
};

export const I18nContext = createContext<I18nContextValue | null>(null);
