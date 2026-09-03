import type { ThemeShellProps } from "@venore/theme-sdk";
import { HeaderSlot } from "./HeaderSlot";
import { FooterSlot } from "./FooterSlot";
import { ContentSlot } from "./ContentSlot";
import { CenterNav } from "./CenterNav";
import { MobileNav } from "./MobileNav";

// Arranjo AXIAL (docs/themes/shell-contract.md — Abordagem A): tudo alinhado a um eixo central de
// simetria — cabeçalho cerimonial com a marca ao centro, uma fileira de navegação centrada logo
// abaixo (CenterNav, desktop) / drawer (MobileNav, mobile), coluna de conteúdo estreita e
// centrada entre réguas de losango, rodapé centrado. Sem nenhuma coluna lateral: reconhecível de
// longe como "outro tema", distinto do Slime (sidebar), do rail do Nightcity/Druids e do híbrido
// do Knights.
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
    <div className="flex min-h-full flex-1 flex-col">
      <HeaderSlot {...header} />
      <CenterNav {...sidebarLeft} />
      <MobileNav {...sidebarLeft} />
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
  );
}
