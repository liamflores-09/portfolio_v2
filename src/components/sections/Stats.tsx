import { NumberTicker } from "@/components/ui/number-ticker";
import { stats } from "@/data/stats";

export function Stats() {
  return (
    <div className="relative z-10 mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-y-6 border-t border-b border-border py-8 sm:flex sm:gap-y-0 sm:divide-x sm:divide-border">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-1 flex-col items-center gap-2 px-2 text-center sm:px-4">
          <div className="flex items-baseline gap-0.5 text-3xl font-extrabold sm:text-4xl">
            <NumberTicker value={stat.value} className="text-foreground" />
            {stat.suffix && <span>{stat.suffix}</span>}
          </div>
          <span className="text-xs font-medium tracking-wide text-muted uppercase">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
