import { Sitemap } from "@venore/theme-sdk/ui";
import type { FooterSlotProps } from "@venore/theme-sdk";
import { PlatformBrand } from "./PlatformBrand";

// Rodapé centrado e simétrico — o mesmo eixo axial da Shell. Marca real (PlatformBrand) ao
// centro, descrição, régua de losango, sitemap. Fio de ouro no topo (--header-border-strong).
// brand.color não é consumido — o contrato só exige aceitar o campo.
export function FooterSlot({ brand, sitemapItems, creditsEnabled }: FooterSlotProps) {
  return (
    <footer className="mt-auto border-t-2 border-(--header-border-strong) bg-card px-6 py-12 text-center">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6">
        <div className="w-40">
          <PlatformBrand {...brand} isScrolled={false} />
        </div>
        {brand.description.trim().length > 0 && (
          <p className="max-w-[46ch] text-sm leading-6 text-muted-foreground">{brand.description}</p>
        )}
        <span aria-hidden="true" className="flex w-full items-center gap-3">
          <span className="h-px flex-1 bg-primary/30" />
          <span className="size-1.5 rotate-45 bg-primary/60" />
          <span className="h-px flex-1 bg-primary/30" />
        </span>
        {sitemapItems.length > 0 && (
          <div className="w-full">
            <Sitemap items={sitemapItems} />
          </div>
        )}
      </div>

      {creditsEnabled && (
        <div data-credits className="mx-auto mt-8 max-w-3xl border-t border-border pt-4 text-xs text-muted-foreground">
          Venore Docks
        </div>
      )}
    </footer>
  );
}
