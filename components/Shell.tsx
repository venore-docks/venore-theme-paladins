import type { ThemeShellProps } from "@venore/theme-sdk";
import { HeaderSlot } from "./HeaderSlot";
import { FooterSlot } from "./FooterSlot";
import { ContentSlot } from "./ContentSlot";
import { SidebarLeftSlot } from "./SidebarLeftSlot";

// "Sanctum" — simetria cerimonial. Header full-width no topo com a marca CENTRALIZADA
// (brandAesthetics.position: "center" no manifest — capacidade que já existe no contrato, só
// nenhum tema usava), sidebar à esquerda com um brilho "crista" no topo (ver SidebarLeftSlot.tsx)
// e o --app-background do theme.css é um halo radial dourado por trás do conteúdo, não o
// gradiente quase-plano do Venore Slime. A árvore em si (header em cima, sidebar+conteúdo
// abaixo) é a mais simples possível — a identidade vem da simetria e da luz, não de um arranjo
// exótico de regiões.
export function Shell({
  header,
  footer,
  sidebarLeft,
  children,
  sidebarContextualEnabled,
  sidebarContextual,
  breadcrumbs,
  breadcrumbsJsonLd,
}: ThemeShellProps) {
  return (
    <div className="flex min-h-dvh flex-col">
      <HeaderSlot {...header} />
      <div className="flex flex-1">
        <SidebarLeftSlot {...sidebarLeft} />
        <div className="flex min-w-0 flex-1 flex-col">
          <ContentSlot
            sidebarContextualEnabled={sidebarContextualEnabled}
            sidebarContextual={sidebarContextual}
            breadcrumbs={breadcrumbs}
            breadcrumbsJsonLd={breadcrumbsJsonLd}
          >
            {children}
          </ContentSlot>
          <FooterSlot {...footer} />
        </div>
      </div>
    </div>
  );
}
