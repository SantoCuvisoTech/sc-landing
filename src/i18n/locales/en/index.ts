import comingSoon from "./sections/coming-soon.json";
import seo from "./seo.json";

export const en = {
  seo,
  sections: {
    comingSoon,
  },
} as const;

export type Translation = typeof en;
