import type { Translation } from "../en";
import comingSoon from "./sections/coming-soon.json";
import seo from "./seo.json";

//Se usa type aquí para asegurar que no falten traducciones al español que si existan en el inglés. Inglés es el idioma base.
export const es: Translation = {
  seo,
  sections: {
    comingSoon,
  },
} as const;
