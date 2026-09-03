import { generateHueRotationPalettes, THEME_HUE_PRESETS } from "@venore/theme-sdk/palettes";

// Base = ouro litúrgico + safira real do theme.css (esquema forte desta sessão). As rotações de
// hue derivam variações mantendo a mesma força de chroma.
export const PALADINS_COLOR_PALETTES = generateHueRotationPalettes(
  {
    light: {
      primary: "oklch(0.74 0.152 84)",
      primaryForeground: "oklch(0.22 0.03 80)",
      accent: "oklch(0.5 0.19 260)",
      accentForeground: "oklch(0.98 0.02 260)",
      ring: "oklch(0.62 0.17 84)",
    },
    dark: {
      primary: "oklch(0.82 0.15 85)",
      primaryForeground: "oklch(0.2 0.03 80)",
      accent: "oklch(0.68 0.16 258)",
      accentForeground: "oklch(0.14 0.03 260)",
      ring: "oklch(0.82 0.15 85)",
    },
  },
  THEME_HUE_PRESETS,
);
