"use client";

import { EventCard, useEventStore } from "@/entities/event";
import { useEventFilterStore } from "@/features/event-filter";
import { useMemo } from "react";

export const EventFeed = () => {
  const { events } = useEventStore();
  const { filter } = useEventFilterStore();

  const filteredEvents = useMemo(() => {
    return events.filter((e) => {
      const search = filter.search.toLowerCase();
      const matchType = filter.type === "ALL" || e.type === filter.type;
      const matchSearch =
        !search ||
        e.message.toLowerCase().includes(search) ||
        e.type.toLowerCase().includes(search);
      return matchType && matchSearch;
    });
  }, [events, filter.search, filter.type]);

  if (!filteredEvents.length) {
    return <div className="text-gray-400 text-sm px-2">No events found...</div>;
  }

  return (
    <div className="flex flex-col gap-2">
      {filteredEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};
