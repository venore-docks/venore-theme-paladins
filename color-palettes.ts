import { generateHueRotationPalettes, THEME_HUE_PRESETS } from "@venore/theme-sdk/palettes";

// Ponto de partida aproxima o dourado do bloco base de theme.css — presets alternativos que o
// admin pode escolher em /admin/settings/brand, girando o matiz a partir daqui.
export const PALADINS_COLOR_PALETTES = generateHueRotationPalettes(
  {
    light: {
      primary: "oklch(0.62 0.16 80)",
      primaryForeground: "oklch(0.18 0.03 60)",
      accent: "oklch(0.88 0.06 85)",
      accentForeground: "oklch(0.24 0.04 70)",
      ring: "oklch(0.62 0.14 80)",
    },
    dark: {
      primary: "oklch(0.7 0.13 80)",
      primaryForeground: "oklch(0.18 0.02 70)",
      accent: "oklch(0.34 0.04 80)",
      accentForeground: "oklch(0.92 0.02 80)",
      ring: "oklch(0.66 0.12 80)",
    },
  },
  THEME_HUE_PRESETS,
);
