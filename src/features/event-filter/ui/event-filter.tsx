"use client";

import { ChangeEvent, useEffect } from "react";
import { filterTypes } from "../model/filter-options";
import { useEventFilterStore } from "../model/use-event-filter-store";
import { eventBus, useEventStore, userEvent } from "@/entities/event";
import { EventFilterOption } from "../model/types";
import { useDebounce } from "@/shared/hooks";
import { cn } from "@/shared/lib";

export const EventFilter = () => {
  const { filter, setFilter } = useEventFilterStore();

  const { flushBuffer, paused, setPaused } = useEventStore();

  const debouncedSearch = useDebounce(filter.search);

  useEffect(() => {
    if (!debouncedSearch) return;

    eventBus.emit(userEvent.search(debouncedSearch));
  }, [debouncedSearch]);

  const toggle = () => {
    if (paused) flushBuffer();
    setPaused(!paused);
  };

  const handleChangeFilterType = (type: EventFilterOption["value"]) => {
    setFilter({ type });
    eventBus.emit(userEvent.filterChange(type));
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFilter({ search: value });
  };

  return (
    <div className="flex items-center gap-3 px-2">
      {/* кнопки */}
      <div className="flex gap-2">
        {filterTypes.map((type) => (
          <button
            key={type.value}
            onClick={() => {
              handleChangeFilterType(type.value);
            }}
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

      <button
        onClick={toggle}
        className="ml-auto px-2 py-1 text-sm border border-white/10 rounded hover:bg-white/5"
      >
        {paused ? "Resume" : "Pause"}
      </button>

      <input
        value={filter.search}
        onChange={handleSearch}
        placeholder="Search events..."
        className="ml-auto p-2 text-sm  border border-white/10 rounded outline-none focus:ring-1 focus:ring-white/20"
      />
    </div>
  );
};
