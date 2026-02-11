import { defineMiddleware } from "astro:middleware";
import { DEFAULT_LANG, SUPPORTED_LANGS, type Language } from "./i18n/config";

export const onRequest = defineMiddleware((context, next) => {
  const { url, redirect, cookies, request } = context;

  if (url.pathname === "/") {
    // 1. Verificar edad (cookie esencial, no requiere banner)
    const ageVerified = cookies.get("age_verified")?.value === "true";

    // if (!ageVerified) {
    //   // Detectar idioma para el modal
    //   const acceptLanguage = request.headers.get("accept-language") || "";
    //   const browserLang = acceptLanguage.toLowerCase().includes("es")
    //     ? "es"
    //     : "en";

    //   // Redirige al modal en el idioma del navegador
    //   return redirect(`/${browserLang}/age-verification`, 307);
    // }

    // 2. Usuario ya verificó edad → detectar idioma preferido
    const acceptLanguage = request.headers.get("accept-language") || "";
    const browserLang = acceptLanguage.toLowerCase().includes("es")
      ? "es"
      : "en";
    const preferredLang = cookies.get("preferred_lang")?.value as Language;
    const targetLang = preferredLang || browserLang;

    // 3. Redirigir al idioma correcto
    return redirect(`/${targetLang}/`, 307);
  }

  return next();
});
