"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";

interface NewEntryCardProps {
  onClick?: () => void;
}

export default function NewEntryCard({ onClick }: NewEntryCardProps) {
  return (
    <Card
      onClick={onClick}
      className="group cursor-pointer border-dashed transition-all hover:border-primary hover:bg-muted/40"
    >
      <CardContent className="flex h-40 flex-col items-center justify-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted transition-colors group-hover:bg-primary/10">
          <Plus className="h-6 w-6 text-muted-foreground group-hover:text-primary" />
        </div>

        <p className="text-sm font-medium text-muted-foreground group-hover:text-primary">
          New Entry
        </p>
      </CardContent>
    </Card>
  );
}
