import {
  DEFAULT_LANG,
  LANGUAGES,
  SUPPORTED_LANGS,
  type Language,
} from "./config";
import { en } from "./locales/en";
import { es } from "./locales/es";

const translations = {
  en,
  es,
} as const;

/**
 * Obtiene el idioma de la URL
 */
export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split("/");

  // ✅ Type guard: verifica si lang es una key válida de LANGUAGES
  if (lang in LANGUAGES) {
    return lang as Language;
  }
  return DEFAULT_LANG;
}

/**
 * Hook para obtener traducciones con type-safety
 */
export function useTranslations(lang: Language = DEFAULT_LANG) {
  return translations[lang];
}

/**
 * Genera rutas alternativas para hreflang tags (SEO)
 */
export function getAlternateLinks(currentPath: string) {
  // ✅ Mejora: remueve el prefijo de idioma correctamente
  const pathWithoutLang = currentPath.replace(/^\/(en|es)/, "");

  return SUPPORTED_LANGS.map((lang) => ({
    lang,
    // ✅ Mejora: maneja el caso de home "/"
    path: `/${lang}${pathWithoutLang || "/"}`,
  }));
}

/**
 * Genera la ruta localizada desde cualquier pathname
 */
export function getLocalizedPath(
  pathname: string,
  targetLang: Language,
): string {
  const pathWithoutLang = pathname.replace(/^\/(en|es)/, "");
  return `/${targetLang}${pathWithoutLang || "/"}`;
}
