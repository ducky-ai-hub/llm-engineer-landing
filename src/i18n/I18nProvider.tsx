import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { I18nContext } from './context';
import en from './lang/en';
import vi from './lang/vi';
import type { Locale, Translations } from './types';

const STORAGE_KEY = 'llme-locale';
const translations: Record<Locale, Translations> = { vi, en };

function getLocaleFromPathname(pathname: string): Locale | null {
  const firstPathSegment = pathname.split('/').filter(Boolean)[0];
  return firstPathSegment === 'vi' || firstPathSegment === 'en'
    ? firstPathSegment
    : null;
}

function getLocaleUrl(locale: Locale) {
  return `/${locale}${window.location.search}${window.location.hash}`;
}

function getInitialLocale(): Locale {
  const pathLocale = getLocaleFromPathname(window.location.pathname);
  if (pathLocale) {
    return pathLocale;
  }

  const storedLocale = window.localStorage.getItem(STORAGE_KEY);
  return storedLocale === 'en' || storedLocale === 'vi' ? storedLocale : 'vi';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = useCallback((nextLocale: Locale) => {
    if (getLocaleFromPathname(window.location.pathname) !== nextLocale) {
      window.history.pushState(null, '', getLocaleUrl(nextLocale));
    }

    setLocaleState(nextLocale);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
    document.title = translations[locale].meta.title;

    if (window.location.pathname !== `/${locale}`) {
      window.history.replaceState(null, '', getLocaleUrl(locale));
    }
  }, [locale]);

  useEffect(() => {
    const handlePopState = () => {
      const pathLocale = getLocaleFromPathname(window.location.pathname);
      setLocaleState(pathLocale ?? 'vi');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const value = useMemo(
    () => ({ locale, setLocale, t: translations[locale] }),
    [locale, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
