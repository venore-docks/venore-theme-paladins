import type { ThemeManifest } from "@venore/theme-sdk";

export const paladinsManifest: ThemeManifest = {
  key: "paladins",
  name: "Paladins",
  version: "0.1.0",
  themeContractVersion: "6.0.0",
  // T2 (docs/implementation-roadmap.md — Fase 5): mesmos valores que eram o default global de
  // contexts/settings antes da migração — preserva o visual atual até alguém customizar por tema.
  brandAesthetics: { mode: "svg", size: 100, scrolledSize: 80, position: "left", color: "#143b52" },
  colorModes: ["light", "dark"],
};
