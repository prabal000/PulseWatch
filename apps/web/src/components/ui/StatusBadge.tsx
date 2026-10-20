export type Status = "healthy" | "warning" | "degraded" | "critical" | "unknown";

// Full class names are written out so Tailwind can detect them.
const styles: Record<Status, { label: string; badge: string; dot: string }> = {
  healthy: { label: "Healthy", badge: "bg-ok/15 text-ok", dot: "bg-ok" },
  warning: { label: "Warning", badge: "bg-warn/15 text-warn", dot: "bg-warn" },
  degraded: { label: "Degraded", badge: "bg-degraded/15 text-degraded", dot: "bg-degraded" },
  critical: { label: "Critical", badge: "bg-critical/15 text-critical", dot: "bg-critical" },
  unknown: { label: "Unknown", badge: "bg-unknown/15 text-unknown", dot: "bg-unknown" },
};

export function StatusBadge({ status }: { status: Status }) {
  const s = styles[status];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium ${s.badge}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      {s.label}
    </span>
  );
}