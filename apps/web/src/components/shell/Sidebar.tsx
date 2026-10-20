"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { navGroups } from "@/lib/nav";

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`flex shrink-0 flex-col border-r border-line bg-surface transition-[width] duration-200 ${
        collapsed ? "w-16" : "w-60"
      }`}
    >
      <div className="flex h-14 items-center border-b border-line px-4">
        <Logo collapsed={collapsed} />
      </div>

      <nav className="flex-1 space-y-4 overflow-y-auto p-3" aria-label="Main">
        {navGroups.map((group, i) => (
          <div key={i} className="space-y-1">
            {group.title &&
              (collapsed ? (
                <div className="mx-2 border-t border-line" />
              ) : (
                <p className="px-3 pb-1 pt-2 text-[11px] font-medium uppercase tracking-wider text-fg-muted">
                  {group.title}
                </p>
              ))}
            {group.items.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  title={collapsed ? item.label : undefined}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                    active ? "bg-accent/15 text-fg" : "text-fg-muted hover:bg-surface-2 hover:text-fg"
                  }`}
                >
                  <Icon size={18} className={active ? "text-accent" : ""} />
                  {!collapsed && <span className="flex-1">{item.label}</span>}
                  {item.badge &&
                    (collapsed ? (
                      <span className="absolute right-2 top-1.5 h-2 w-2 rounded-full bg-critical" />
                    ) : (
                      <span className="rounded-full bg-critical/20 px-1.5 text-xs font-medium text-critical">
                        {item.badge}
                      </span>
                    ))}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      <button
        type="button"
        onClick={() => setCollapsed((c) => !c)}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        className="m-3 flex items-center gap-3 rounded-md px-3 py-2 text-sm text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg"
      >
        {collapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
        {!collapsed && <span>Collapse</span>}
      </button>
    </aside>
  );
}