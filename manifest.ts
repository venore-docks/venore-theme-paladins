import type { ThemeManifest } from "@venore/theme-sdk";

export const paladinsManifest: ThemeManifest = {
  key: "paladins",
  name: "Paladins",
  version: "2.0.0",
  themeContractVersion: "7.0.0",
  // Marca CENTRALIZADA no header — capacidade "center" já existia no contrato (HeaderBrandPosition)
  // mas nenhum tema a usava; é a peça central da simetria cerimonial do "Sanctum" (ver Shell.tsx).
  // Cor aproxima o dourado de --primary no modo claro (referência visual do tema).
  brandAesthetics: { mode: "svg", size: 100, scrolledSize: 84, position: "center", color: "oklch(0.62 0.16 80)" },
  colorModes: ["light", "dark"],
};
