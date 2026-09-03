import Link from "next/link";
import type { HeaderSlotProps } from "@venore/theme-sdk";
import { UserMenu } from "./UserMenu";
import { MobileNavToggleButton } from "./MobileNavToggleButton";
import { PlatformBrand } from "./PlatformBrand";

// Cabeçalho cerimonial — eixo de simetria do tema. A marca fica SEMPRE ao centro (absoluta,
// -translate-x-1/2), com controles espelhados: gatilho do menu mobile à esquerda, user à direita,
// ambos em colunas de largura fixa pra o centro nunca deslocar. Sem mecânica de encolher/inverter
// ao rolar (a solenidade vem do arranjo axial, não de animação de scroll) — por isso este tema
// não usa mais HeaderScrollSentinel. Fio de ouro fecha a base (shadow-header).
export function HeaderSlot({ brand, userbarEnabled, user, canAccessAdmin, onSignOut, userNavItems }: HeaderSlotProps) {
  return (
    <header className="relative flex h-20 items-center justify-between gap-4 border-b border-header-border-subtle bg-card px-4 text-foreground shadow-header sm:px-6 lg:h-24">
      <div className="flex w-24 items-center justify-start">
        <MobileNavToggleButton />
      </div>

      <Link
        href="/"
        aria-label={brand.name}
        className="absolute left-1/2 inline-flex -translate-x-1/2 items-center py-2 outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <PlatformBrand {...brand} isScrolled={false} />
      </Link>

      <div className="flex w-24 items-center justify-end">
        {userbarEnabled ? (
          user ? (
            <UserMenu user={user} canAccessAdmin={canAccessAdmin} onSignOut={onSignOut} userNavItems={userNavItems} />
          ) : (
            <Link
              href="/login"
              className="rounded-md px-3 py-1.5 text-xs font-medium uppercase tracking-caps text-muted-foreground ui-motion-base outline-none hover:bg-accent/14 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
            >
              Entrar
            </Link>
          )
        ) : null}
      </div>
    </header>
  );
}
