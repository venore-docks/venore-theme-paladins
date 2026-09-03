"use client";

import Link from "next/link";
import { ChevronDown, Globe2, ShieldCheck } from "lucide-react";
import { usePathname } from "next/navigation";
import type { MainNavItem, NavGroup, SidebarLeftSlotProps } from "@venore/theme-sdk";
import { cn } from "@venore/theme-sdk/ui";

// Navegação central simétrica — a assinatura estrutural do tema. Uma fileira de links centrada
// logo abaixo do cabeçalho cerimonial (nada de coluna lateral: distinto do Slime, do rail do
// Nightcity/Druids e do híbrido do Knights). Agregadores abrem um dropdown centrado (<details>
// nativo com `name` compartilhado — abrir um fecha o irmão). `collapsed`/`onToggleCollapsed` do
// contrato não têm o que significar aqui e não são usados. Desktop apenas (`hidden lg:block`); no
// mobile a navegação é o drawer (MobileNav).
function isDescendantActive(item: MainNavItem, pathname: string | null): boolean {
  if (item.href === null) return item.children.some((child) => isDescendantActive(child, pathname));
  return item.href === pathname;
}

const LINK =
  "inline-flex h-9 items-center gap-1.5 rounded-md px-3 text-xs font-semibold uppercase tracking-caps text-muted-foreground ui-motion-base outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring";
const LINK_ACTIVE = "text-foreground";
const PANEL =
  "absolute left-1/2 top-full z-40 mt-1 min-w-48 -translate-x-1/2 rounded-md border border-border bg-popover p-1.5 text-popover-foreground shadow-float";
const PANEL_LINK =
  "block rounded-sm px-2.5 py-1.5 text-sm ui-motion-base outline-none hover:bg-accent/14 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring";

function NavEntry({ item }: { item: MainNavItem }) {
  const pathname = usePathname();

  if (item.href === null) {
    const active = isDescendantActive(item, pathname);
    return (
      <details name="paladins-nav" className="group/nav relative">
        <summary className={cn(LINK, "cursor-pointer list-none [&::-webkit-details-marker]:hidden", active && LINK_ACTIVE)}>
          {item.label}
          <ChevronDown aria-hidden="true" className="size-3.5 shrink-0 ui-motion-base group-open/nav:rotate-180" />
        </summary>
        <div className={PANEL}>
          {item.children.map((child) =>
            child.href === null ? (
              <p key={child.key} className="px-2.5 py-1.5 text-xs text-muted-foreground">
                {child.label}
              </p>
            ) : (
              <Link key={child.key} href={child.href} className={PANEL_LINK}>
                {child.label}
              </Link>
            ),
          )}
        </div>
      </details>
    );
  }

  const active = pathname === item.href;
  return (
    <Link href={item.href} aria-current={active ? "page" : undefined} className={cn(LINK, active && LINK_ACTIVE)}>
      {item.label}
    </Link>
  );
}

function GroupEntry({ group }: { group: NavGroup }) {
  const pathname = usePathname();
  const active = group.items.some((item) => item.href === pathname);
  return (
    <details name="paladins-nav" className="group/nav relative">
      <summary className={cn(LINK, "cursor-pointer list-none [&::-webkit-details-marker]:hidden", active && LINK_ACTIVE)}>
        {group.label}
        <ChevronDown aria-hidden="true" className="size-3.5 shrink-0 ui-motion-base group-open/nav:rotate-180" />
      </summary>
      <div className={PANEL}>
        {group.items.map((item) => (
          <Link key={item.key} href={item.href} aria-current={pathname === item.href ? "page" : undefined} className={PANEL_LINK}>
            {item.label}
          </Link>
        ))}
      </div>
    </details>
  );
}

function SiteAdminToggle({ isAdmin, onToggleNavMode }: { isAdmin: boolean; onToggleNavMode: () => Promise<void> }) {
  return (
    <form action={onToggleNavMode} className="grid grid-cols-2 gap-1 rounded-md border border-border bg-muted p-1 text-[11px] font-semibold uppercase tracking-caps">
      <button
        type="submit"
        disabled={!isAdmin}
        aria-current={!isAdmin ? true : undefined}
        className={cn("flex h-8 items-center justify-center gap-1.5 rounded-sm px-3 ui-motion-base", !isAdmin ? "bg-card text-foreground shadow-float" : "text-muted-foreground hover:text-foreground")}
      >
        <Globe2 className="size-3.5 shrink-0" aria-hidden="true" />
        Site
      </button>
      <button
        type="submit"
        disabled={isAdmin}
        aria-current={isAdmin ? true : undefined}
        className={cn("flex h-8 items-center justify-center gap-1.5 rounded-sm px-3 ui-motion-base", isAdmin ? "bg-card text-foreground shadow-float" : "text-muted-foreground hover:text-foreground")}
      >
        <ShieldCheck className="size-3.5 shrink-0" aria-hidden="true" />
        Admin
      </button>
    </form>
  );
}

export function CenterNav({ enabled, navMode, navItems, navGroups, canToggleAdminNav, onToggleNavMode }: SidebarLeftSlotProps) {
  if (!enabled) return null;
  const isAdmin = navMode === "admin";

  return (
    <nav data-nav-mode={navMode} className="hidden border-b border-border bg-(image:--app-background) lg:block">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-2.5">
        <div className="flex flex-wrap items-center justify-center gap-1">
          {isAdmin
            ? navGroups.map((group) => <GroupEntry key={group.key} group={group} />)
            : navItems.map((item) => <NavEntry key={item.key} item={item} />)}
          {isAdmin && navGroups.length === 0 && <span className="text-xs text-muted-foreground/56">—</span>}
          {!isAdmin && navItems.length === 0 && <span className="text-xs text-muted-foreground/56">—</span>}
        </div>
        {canToggleAdminNav && <SiteAdminToggle isAdmin={isAdmin} onToggleNavMode={onToggleNavMode} />}
      </div>
    </nav>
  );
}
