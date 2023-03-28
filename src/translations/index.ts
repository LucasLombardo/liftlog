import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import es from "./es";

export default i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: getTranslationStrings(en),
    },
    es: {
      translation: getTranslationStrings(es),
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

function getTranslationStrings(langStrings: LangStrings) {
  return Object.entries(langStrings).reduce(
    (a: Translations, [file, translations]) => {
      Object.keys(translations).forEach((key) => {
        a[`${file}.${key}`] = translations[key];
      });
      return a;
    },
    {}
  );
}

declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

interface LangStrings {
  [key: string]: Translations;
}

interface Translations {
  [key: string]: string;
}
