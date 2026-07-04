"use client";

import { useEffect, useState } from "react";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ContributionsResponse {
  total: Record<string, number>;
  contributions: ContributionDay[];
}

const GITHUB_USERNAME = "liamflores-09";

const DOT_SIZE_CLASSES = ["h-1 w-1", "h-1.5 w-1.5", "h-2 w-2", "h-2.5 w-2.5", "h-3.5 w-3.5"];

export function GitHubContributions() {
  const [data, setData] = useState<ContributionsResponse | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load contributions");
        return res.json();
      })
      .then((json: ContributionsResponse) => {
        if (!cancelled) setData(json);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (error) return null;

  if (!data) {
    return (
      <div className="mx-auto mt-12 max-w-2xl">
        <div className="h-24 w-full animate-pulse rounded-2xl bg-surface" />
      </div>
    );
  }

  const firstDate = new Date(data.contributions[0].date);
  const startPadding = firstDate.getDay();
  const paddedDays: (ContributionDay | null)[] = [...Array(startPadding).fill(null), ...data.contributions];

  const allWeeks: (ContributionDay | null)[][] = [];
  for (let i = 0; i < paddedDays.length; i += 7) {
    allWeeks.push(paddedDays.slice(i, i + 7));
  }

  const firstActiveWeekIndex = allWeeks.findIndex((week) => week.some((day) => day && day.count > 0));
  const weeks = firstActiveWeekIndex > 0 ? allWeeks.slice(firstActiveWeekIndex) : allWeeks;

  const total = data.total.lastYear ?? Object.values(data.total)[0] ?? 0;

  return (
    <div className="mx-auto mt-12 max-w-2xl">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-xs font-bold tracking-widest text-muted uppercase">GitHub Activity</h4>
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noreferrer"
          className="text-xs font-semibold text-foreground transition-colors hover:text-accent"
        >
          @{GITHUB_USERNAME}
        </a>
      </div>
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))` }}>
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col items-center gap-1">
            {week.map((day, dayIndex) =>
              day ? (
                <div key={day.date} title={`${day.count} contributions on ${day.date}`} className="flex h-3.5 w-3.5 items-center justify-center">
                  <div
                    className={`rounded-full ${day.count > 0 ? "bg-accent" : "bg-border"} ${DOT_SIZE_CLASSES[day.level] ?? DOT_SIZE_CLASSES[0]}`}
                  />
                </div>
              ) : (
                <div key={dayIndex} className="h-3.5 w-3.5" />
              ),
            )}
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">{total} contributions in the last year</p>
    </div>
  );
}
