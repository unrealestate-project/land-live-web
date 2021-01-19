import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';

import translationEn from './locales/en/translation.json';
import translationKo from './locales/ko/translation.json';

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    debug: false,
    lng: 'ko',
    fallbackLng: 'ko',

    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },

    resources: {
      ko: {
        translations: translationKo,
      },
      en: {
        translations: translationEn,
      },
    },
    ns: ['translations'],
    defaultNS: 'translations',
  });

export default i18n;
