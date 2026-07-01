import { useI18n } from '../i18n/useI18n';
import type { Locale } from '../i18n/types';

const locales: Locale[] = ['vi', 'en'];

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      className="flex rounded-lg border border-zinc-700 bg-zinc-900/80 p-0.5"
      role="group"
      aria-label={t.language.switcherLabel}
    >
      {locales.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLocale(item)}
          aria-pressed={locale === item}
          aria-label={
            item === 'vi' ? t.language.vietnamese : t.language.english
          }
          title={
            item === 'vi' ? t.language.vietnamese : t.language.english
          }
          className={`flex items-center gap-1 rounded-md px-1.5 py-1 text-xs font-semibold uppercase transition-colors sm:px-2 ${
            locale === item
              ? 'bg-cyan-500 text-zinc-950'
              : 'text-zinc-400 hover:text-zinc-100'
          }`}
        >
          <span className="text-base leading-none" aria-hidden="true">
            {item === 'vi'
              ? t.language.vietnameseFlag
              : t.language.englishFlag}
          </span>
          {item === 'vi'
            ? t.language.vietnameseShort
            : t.language.englishShort}
        </button>
      ))}
    </div>
  );
}
