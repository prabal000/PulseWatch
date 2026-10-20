import { Bell, Search } from "lucide-react";

export function Topbar() {
  return (
    <header className="flex h-14 shrink-0 items-center gap-4 border-b border-line bg-surface px-6">
      <div className="relative w-full max-w-md">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-fg-muted" />
        <input
          type="search"
          placeholder="Search services, incidents, logs…"
          aria-label="Search"
          className="w-full rounded-md border border-line bg-bg py-1.5 pl-9 pr-3 text-sm text-fg placeholder:text-fg-muted focus:border-accent focus:outline-none"
        />
      </div>
      <div className="ml-auto flex items-center gap-3">
        <button
          type="button"
          aria-label="Notifications"
          className="relative rounded-md p-2 text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg"
        >
          <Bell size={18} />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-critical" />
        </button>
        {/* PROTOTYPE: placeholder avatar. Real user menu arrives with auth (Day 3). */}
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-2 text-xs font-medium">
          PP
        </div>
      </div>
    </header>
  );
}