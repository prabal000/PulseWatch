import { StatusBadge, type Status } from "@/components/ui/StatusBadge";

// PROTOTYPE: static sample data so we can design the layout.
// Replaced with real API data starting Day 5.
const kpis = [
  { label: "Services", value: "12", hint: "9 healthy" },
  { label: "Active incidents", value: "2", hint: "1 critical" },
  { label: "Uptime", value: "98.72%", hint: "last 24h" },
  { label: "P95 latency", value: "184 ms", hint: "last 24h" },
];

const services: { name: string; status: Status; latency: string }[] = [
  { name: "API Gateway", status: "healthy", latency: "18 ms" },
  { name: "Order Service", status: "healthy", latency: "42 ms" },
  { name: "Payment Service", status: "critical", latency: "842 ms" },
  { name: "PostgreSQL", status: "degraded", latency: "450 ms" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <span className="rounded-full border border-line px-2 py-0.5 text-xs text-fg-muted">
          Sample data
        </span>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Key metrics">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-lg border border-line bg-surface p-4">
            <p className="text-sm text-fg-muted">{k.label}</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight">{k.value}</p>
            <p className="mt-1 text-xs text-fg-muted">{k.hint}</p>
          </div>
        ))}
      </section>

      <section className="rounded-lg border border-line bg-surface" aria-label="Services">
        <h2 className="border-b border-line px-4 py-3 text-sm font-medium">Services</h2>
        <ul className="divide-y divide-line">
          {services.map((s) => (
            <li key={s.name} className="flex items-center justify-between px-4 py-3 text-sm">
              <span>{s.name}</span>
              <span className="flex items-center gap-4">
                <span className="font-mono text-fg-muted">{s.latency}</span>
                <StatusBadge status={s.status} />
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}