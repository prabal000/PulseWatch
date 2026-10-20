import { Logo } from "@/components/ui/Logo";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-6">
      <Logo />
      <div className="w-full max-w-sm rounded-lg border border-line bg-surface p-6">{children}</div>
      <p className="text-xs text-fg-muted">Watch the pulse of your applications.</p>
    </main>
  );
}