import { Globe2, ShieldCheck, X } from "lucide-react";
import type { NavGroup, SidebarLeftSlotProps } from "@venore/theme-sdk";
import { cn } from "@venore/theme-sdk/ui";
import { MobileNavDrawer } from "./MobileNavDrawer";
import { SidebarNavLink } from "./SidebarNavLink";
import { closeMobileNav } from "./mobile-nav-store";

// Navegação mobile — o drawer off-canvas (MobileNavDrawer, reutilizado). No desktop a navegação é
// a CenterNav; aqui `lg:hidden` no asideClassName faz este painel sumir a partir de lg.
export function MobileNav({ enabled, navMode, navItems, navGroups, canToggleAdminNav, onToggleNavMode }: SidebarLeftSlotProps) {
  if (!enabled) return null;
  const isAdmin = navMode === "admin";

  return (
    <MobileNavDrawer asideClassName="flex h-full w-full flex-col gap-4 bg-card px-5 py-6 text-foreground shadow-float lg:hidden">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-caps text-muted-foreground">Navegação</p>
        <button
          type="button"
          onClick={closeMobileNav}
          aria-label="Fechar navegação"
          className="ui-icon-button-sm ui-motion-base outline-none hover:bg-accent/14 focus-visible:ring-2 focus-visible:ring-ring"
        >
          <X className="size-4" aria-hidden="true" />
        </button>
      </div>

      {canToggleAdminNav && (
        <form action={onToggleNavMode} className="grid grid-cols-2 gap-1 rounded-md border border-border bg-muted p-1 text-[11px] font-semibold uppercase tracking-caps">
          <button
            type="submit"
            disabled={!isAdmin}
            aria-current={!isAdmin ? true : undefined}
            className={cn("flex h-9 items-center justify-center gap-1.5 rounded-sm ui-motion-base", !isAdmin ? "bg-card text-foreground shadow-float" : "text-muted-foreground")}
          >
            <Globe2 className="size-3.5 shrink-0" aria-hidden="true" />
            Site
          </button>
          <button
            type="submit"
            disabled={isAdmin}
            aria-current={isAdmin ? true : undefined}
            className={cn("flex h-9 items-center justify-center gap-1.5 rounded-sm ui-motion-base", isAdmin ? "bg-card text-foreground shadow-float" : "text-muted-foreground")}
          >
            <ShieldCheck className="size-3.5 shrink-0" aria-hidden="true" />
            Admin
          </button>
        </form>
      )}

      <nav data-nav-mode={navMode} className="min-h-0 flex-1 space-y-1 overflow-y-auto">
        {isAdmin
          ? navGroups.map((group) => <MobileGroup key={group.key} group={group} />)
          : navItems.map((item) => <SidebarNavLink key={item.key} item={item} collapsed={false} isAdmin={false} />)}
        {isAdmin && navGroups.length === 0 && <p className="px-3 text-sm text-muted-foreground/56">—</p>}
        {!isAdmin && navItems.length === 0 && <p className="px-3 text-sm text-muted-foreground/56">—</p>}
      </nav>
    </MobileNavDrawer>
  );
}

function MobileGroup({ group }: { group: NavGroup }) {
  return (
    <div className="space-y-1 pb-4">
      <p className="px-3 pb-1 text-[11px] font-semibold uppercase tracking-caps text-muted-foreground/70">{group.label}</p>
      {group.items.map((item) => (
        <SidebarNavLink key={item.key} item={item} collapsed={false} isAdmin />
      ))}
    </div>
  );
}
