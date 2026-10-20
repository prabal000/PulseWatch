import {
  Activity, Bell, Gauge, Globe, LayoutDashboard, Network, Route,
  ScrollText, Server, Settings, Siren, Sparkles, Target, type LucideIcon,
} from "lucide-react";

export type NavItem = { label: string; href: string; icon: LucideIcon; badge?: number };
export type NavGroup = { title?: string; items: NavItem[] };

export const navGroups: NavGroup[] = [
  {
    items: [
      { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { label: "Services", href: "/services", icon: Server },
      { label: "Monitors", href: "/monitors", icon: Globe },
      // PROTOTYPE: static badge count. Becomes live data with the incident engine (Day 12-13).
      { label: "Incidents", href: "/incidents", icon: Siren, badge: 2 },
      { label: "Alerts", href: "/alerts", icon: Bell },
    ],
  },
  {
    title: "Observability",
    items: [
      { label: "Metrics", href: "/metrics", icon: Gauge },
      { label: "Logs", href: "/logs", icon: ScrollText },
      { label: "Traces", href: "/traces", icon: Route },
      { label: "Service Map", href: "/service-map", icon: Network },
    ],
  },
  {
    title: "Intelligence",
    items: [
      { label: "Anomalies", href: "/anomalies", icon: Activity },
      { label: "SLO", href: "/slo", icon: Target },
      { label: "AI Assistant", href: "/ai-assistant", icon: Sparkles },
    ],
  },
  { items: [{ label: "Settings", href: "/settings", icon: Settings }] },
];