import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import uzTranslation from "./public/locales/uz/translation.json";
import ruTranslation from "./public/locales/ru/translation.json";
import enTranslation from "./public/locales/en/translation.json";

// Retrieve the language saved in localStorage
const savedLang = localStorage.getItem("lang") || "uz"; // Make sure it matches the key used in Header.js

const resources = {
  uz: { translation: uzTranslation },
  ru: { translation: ruTranslation },
  en: { translation: enTranslation },
};

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang, // Use the saved language
  fallbackLng: "uz",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
