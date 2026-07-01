import type { Locale } from '../i18n/types';

const SAMPLE_LESSON_URL = 'https://llme-preview.ducky-ai.com';

export function getSampleLessonUrl(locale: Locale) {
  return locale === 'en' ? `${SAMPLE_LESSON_URL}/en` : SAMPLE_LESSON_URL;
}
