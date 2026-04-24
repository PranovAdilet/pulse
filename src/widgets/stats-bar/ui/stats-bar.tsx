"use client";

import { useEventStore } from "@/entities/event";
import { useMemo } from "react";

export const StatsBar = () => {
  const { events } = useEventStore();

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
        <span className="text-green-400">●</span>
        <span className="text-gray-300">Live</span>
      </div>
    </div>
  );
};
