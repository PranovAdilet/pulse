"use client";

import { useMemo } from "react";
import { useEventStore } from "@/entities/event";
import { useEventFilterStore } from "@/features/event-filter";
import { cn } from "@/shared/lib";

export const StatsBar = () => {
  const { events, buffer, paused } = useEventStore();
  const { filter } = useEventFilterStore();

  const errors = useMemo(
    () => events.filter((e) => e.type === "ERROR"),
    [events],
  ).length;

  const success = useMemo(
    () => events.filter((e) => e.type === "SUCCESS"),
    [events],
  ).length;

  return (
    <div className=" flex items-center gap-4 p-4 text-sm border-b border-white/10">
      <div className="flex items-center gap-1">
        <span className="text-gray-400">Events:</span>
        <span className="text-white">{events.length}</span>
      </div>

      <div className="flex items-center gap-1">
        <span className="text-gray-400">Errors:</span>
        <span className="text-red-400">{errors}</span>
      </div>

      <div className="flex items-center gap-1">
        <span className="text-gray-400">Success:</span>
        <span className="text-green-400">{success}</span>
      </div>

      <div className="ml-auto flex items-center gap-1">
        {paused && buffer.length > 0 && (
          <div className="text-xs text-yellow-400 px-2">
            +{buffer.length} new events
          </div>
        )}
        <span
          className={cn(
            "text-sm",
            paused ? "text-yellow-400" : "text-green-400",
          )}
        >
          ● {paused ? "Paused" : "Live"}
        </span>
      </div>
    </div>
  );
};
