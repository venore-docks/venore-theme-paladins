import { generateHueRotationPalettes, THEME_HUE_PRESETS } from "@venore/theme-sdk/palettes";

export const PALADINS_COLOR_PALETTES = generateHueRotationPalettes(
  {
    light: {
      primary: "oklch(0.62 0.13 75)",
      primaryForeground: "oklch(0.99 0.01 90)",
      accent: "oklch(0.7 0.11 235)",
      accentForeground: "oklch(0.99 0.01 235)",
      ring: "oklch(0.62 0.13 75)",
    },
    dark: {
      primary: "oklch(0.82 0.13 82)",
      primaryForeground: "oklch(0.2 0.03 70)",
      accent: "oklch(0.78 0.12 235)",
      accentForeground: "oklch(0.16 0.03 235)",
      ring: "oklch(0.82 0.13 82)",
    },
  },
  THEME_HUE_PRESETS,
);
