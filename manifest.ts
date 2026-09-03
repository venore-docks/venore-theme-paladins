import type { ThemeManifest } from "@venore/theme-sdk";

export const paladinsManifest: ThemeManifest = {
  key: "paladins",
  name: "Paladins",
  version: "0.1.0",
  themeContractVersion: "6.0.0",
  // mode "text": a marca é o símbolo do BrandMark do próprio tema.
  brandAesthetics: { mode: "text", size: 100, scrolledSize: 80, position: "left", color: "#c99a3e" },
  colorModes: ["light", "dark"],
};
