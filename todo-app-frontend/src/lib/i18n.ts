import { translations } from './translations';

type TranslationKeys = keyof (typeof translations)['en']; // Extract valid keys
type Languages = keyof typeof translations; // Extract valid languages

let currentLanguage: Languages = 'en'; // Default language

export const setLanguage = (lang: Languages) => {
	currentLanguage = lang;
};

export const t = (key: TranslationKeys): string => {
	return translations[currentLanguage][key];
};
