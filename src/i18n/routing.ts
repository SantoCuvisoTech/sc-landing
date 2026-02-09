import type { Language } from "./config";

/**
 * Define las rutas de tu sitio para cada idioma
 */
export const routes = {
  home: {
    en: "/en/",
    es: "/es/",
  },
  catalog: {
    en: "/en/catalog/",
    es: "/es/catalogo/",
  },
  product: {
    en: (slug: string) => `/en/product/${slug}/`,
    es: (slug: string) => `/es/producto/${slug}/`,
  },
} as const;

export type RouteKey = keyof typeof routes;

/**
 * Obtiene la ruta localizada
 */
export function getRoute(key: RouteKey, lang: Language, slug?: string): string {
  const route = routes[key][lang];

  // Si es una función (ruta dinámica), ejecutarla con el slug
  if (typeof route === "function") {
    if (!slug) {
      throw new Error(`Slug is required for dynamic route: ${key}`);
    }
    return route(slug);
  }

  return route as string;
}

/**
 * Genera hash links para secciones dentro de la landing page
 * Ejemplo: /en/#about, /es/#contacto
 */
export function getSectionLink(sectionId: string, lang: Language): string {
  return `/${lang}/#${sectionId}`;
}
