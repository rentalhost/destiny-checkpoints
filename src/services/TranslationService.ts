import languagePtBr from "@/translations/pt-BR.json";

type TranslationEntries = Record<string, string>;

export const languages = {
  en: {} as TranslationEntries,
  "pt-BR": languagePtBr as TranslationEntries,
};

export type AvailableLanguages = keyof typeof languages;

export const t = (language: keyof typeof languages | undefined, term: string) =>
  language === undefined ? term : languages[language][term] ?? term;
