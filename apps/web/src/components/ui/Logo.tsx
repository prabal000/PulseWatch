export function Logo({ collapsed = false }: { collapsed?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect width="28" height="28" rx="7" fill="var(--color-accent)" />
        <path
          d="M4 14h5l2.5-6 4 12 2.5-6H24"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {!collapsed && <span className="text-[15px] font-semibold tracking-tight">PulseWatch</span>}
    </div>
  );
}