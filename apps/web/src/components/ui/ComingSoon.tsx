export function ComingSoon({ title, day }: { title: string; day: number }) {
  return (
    <div>
      <h1 className="text-xl font-semibold">{title}</h1>
      <div className="mt-6 rounded-lg border border-dashed border-line bg-surface p-10 text-center">
        <p className="text-sm text-fg-muted">
          This screen is planned for <span className="text-fg">Day {day}</span>.
        </p>
      </div>
    </div>
  );
}