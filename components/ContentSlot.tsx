import type { ContentSlotProps } from "@venore/theme-sdk";
import { Breadcrumbs } from "./Breadcrumbs";

// Régua ornamentada de losango — divisória sacra, fecha o topo e a base da área de leitura.
function DiamondRule() {
  return (
    <div aria-hidden="true" className="mx-auto flex w-full max-w-3xl items-center gap-3 px-6">
      <span className="h-px flex-1 bg-primary/40" />
      <span className="size-1.5 rotate-45 bg-primary/70" />
      <span className="h-px flex-1 bg-primary/40" />
    </div>
  );
}

// Coluna de leitura estreita e centrada (max-w-4xl), entre réguas de losango — o eixo axial do
// tema também vale pro conteúdo, não só pra navegação.
export function ContentSlot({ children, sidebarContextualEnabled, sidebarContextual, breadcrumbs, breadcrumbsJsonLd }: ContentSlotProps) {
  const showSidebar = sidebarContextualEnabled && sidebarContextual != null;

  return (
    <div data-sidebar-contextual={showSidebar} className="min-w-0 flex-1 bg-(image:--app-background)">
      <Breadcrumbs breadcrumbs={breadcrumbs} breadcrumbsJsonLd={breadcrumbsJsonLd} />
      <div className="pt-6">
        <DiamondRule />
      </div>
      <div className={`mx-auto flex w-full gap-10 px-6 py-10 ${showSidebar ? "max-w-6xl flex-col lg:flex-row" : "max-w-4xl"}`}>
        <main className="min-w-0 flex-1 text-foreground">{children}</main>
        {showSidebar && <aside className="w-full shrink-0 text-foreground lg:w-72">{sidebarContextual}</aside>}
      </div>
      <div className="pb-10">
        <DiamondRule />
      </div>
    </div>
  );
}
