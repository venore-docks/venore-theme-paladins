import type { ThemeManifest } from "@venore/theme-sdk";

export const paladinsManifest: ThemeManifest = {
  key: "paladins",
  name: "Paladins",
  version: "0.1.0",
  themeContractVersion: "6.0.0",
  // A marca usa o logo real do site (brand.logoUrl de contexts/settings), via PlatformBrand.
  brandAesthetics: { mode: "svg", size: 100, scrolledSize: 80, position: "left", color: "#c99a3e" },
  colorModes: ["light", "dark"],
};
