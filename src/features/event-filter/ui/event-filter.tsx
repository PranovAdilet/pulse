"use client";

import { cn } from "@/shared/lib";
import { filterTypes } from "../model/filter-options";
import { useEventFilterStore } from "../model/store";

export const EventFilter = () => {
  const { filter, setFilter } = useEventFilterStore();

  return (
    <div className="flex gap-2 px-2">
      {filterTypes.map((type) => (
        <button
          key={type.value}
          onClick={() => setFilter({ type: type.value })}
          className={cn(
            "px-2 py-1 text-sm border rounded border-white/5 hover:bg-white/5",
            {
              "bg-white/10 border-white/20": filter.type === type.value,
            },
          )}
        >
          {type.label}
        </button>
      ))}
    </div>
  );
};
