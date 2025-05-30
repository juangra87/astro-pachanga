import i18next from 'i18next';
import esCommon from '../../public/locales/es/common.json';
import enCommon from '../../public/locales/en/common.json';

export const defaultLang = 'es';

export const languages = {
  es: 'Español',
  en: 'English',
};

i18next.init({
  lng: defaultLang,
  fallbackLng: defaultLang,
  resources: {
    es: {
      common: esCommon,
    },
    en: {
      common: enCommon,
    },
  },
  ns: ['common'],
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
