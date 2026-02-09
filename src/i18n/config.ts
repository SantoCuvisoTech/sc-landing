export const LANGUAGES = {
  en: {
    code: "en",
    name: "English",
    dir: "ltr",
    locale: "en-US",
  },
  es: {
    code: "es",
    name: "Español",
    dir: "ltr",
    locale: "es-MX",
  },
} as const;

export const DEFAULT_LANG = "en";
export const SUPPORTED_LANGS = Object.keys(LANGUAGES) as Language[];

export type Language = keyof typeof LANGUAGES;

// Útil para SEO y sitemap
export const SITE_URL = "https://santocuviso.com";
