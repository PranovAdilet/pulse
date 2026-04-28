"use client";

import { useMemo } from "react";
import { EventCard, useEventStore } from "@/entities/event";
import { useEventFilterStore } from "@/features/event-filter";

export const EventFeed = () => {
  const { events } = useEventStore();
  const { filter } = useEventFilterStore();

  const filteredEvents = useMemo(() => {
    const search = filter.search.toLowerCase();

    return events.filter((e) => {
      const matchType = filter.type === "ALL" || e.level === filter.type;

      const matchSearch =
        !search ||
        e.type.toLowerCase().includes(search) ||
        JSON.stringify(e.payload ?? {})
          .toLowerCase()
          .includes(search);

      return matchType && matchSearch;
    });
  }, [events, filter.search, filter.type]);

  if (!filteredEvents.length) {
    return <div className="text-gray-400 text-sm px-2">No events found...</div>;
  }

  return (
    <div className="flex flex-col gap-2 overflow-auto">
      {filteredEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};
