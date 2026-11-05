import { NumberTicker } from "@/components/ui/number-ticker";

interface StatsRowProps {
  stats: { value: number; suffix?: string; label: string }[];
}

export function StatsRow({ stats }: StatsRowProps) {
  return (
    <div className="flex flex-wrap justify-center gap-10 border-t border-border pt-8">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center gap-1.5 text-center">
          <div className="flex items-baseline gap-0.5 text-3xl font-extrabold">
            <NumberTicker value={stat.value} />
            {stat.suffix}
          </div>
          <span className="text-xs font-medium uppercase tracking-wide text-muted">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
