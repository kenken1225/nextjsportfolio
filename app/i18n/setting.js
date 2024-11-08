export const fallbackLng = "en";
export const defaultNS = "translation";

export const languages = [fallbackLng, "ja"];

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
