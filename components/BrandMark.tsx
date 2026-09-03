// Marca do tema Paladins (vocação de Tibia) — símbolo em currentColor, nome de brand.name.
export function BrandMark({ name }: { name: string }) {
  return (
    <span className="inline-flex min-w-0 items-center gap-2.5 text-foreground">
      <svg viewBox="0 0 32 32" role="img" aria-hidden="true" className="size-7 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <circle cx="16" cy="16" r="5.5"/>
  <path d="M16 2v5M16 25v5M2 16h5M25 16h5M6 6l3.5 3.5M22.5 22.5L26 26M26 6l-3.5 3.5M9.5 22.5L6 26"/>
      </svg>
      <span className="min-w-0 truncate font-[600] tracking-[0.03em]">{name}</span>
    </span>
  );
}
