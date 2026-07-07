"use client";

import type { ReactNode } from "react";
import { useJournalEntry } from "./journal-entry-context";

const AiAnalysis = () => {
  const { entry } = useJournalEntry();
  const analysis = entry.analysis;

  if (!analysis) {
    return (
      <p className="text-sm text-muted-foreground">
        No AI analysis available for this entry yet.
      </p>
    );
  }

  const analysisData: { name: string; value: ReactNode }[] = [
    { name: "Mood", value: analysis.mood },
    { name: "Summary", value: analysis.summary },
    {
      name: "Colour",
      value: (
        <span className="inline-flex items-center gap-2">
          <span
            className="h-3 w-3 rounded-full border border-border"
            style={{ backgroundColor: analysis.colour }}
          />
          {analysis.colour}
        </span>
      ),
    },
    { name: "Sentiment", value: analysis.sentiment.toFixed(2) },
  ];

  return (
    <dl className="space-y-4">
      {analysisData.map((item) => (
        <div key={item.name}>
          <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {item.name}
          </dt>
          <dd className="mt-1 text-sm text-foreground">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
};

export default AiAnalysis;
