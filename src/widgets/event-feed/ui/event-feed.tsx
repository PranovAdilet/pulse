"use client";

import { EventCard, useEventStore } from "@/entities/event";
import { useEventFilterStore } from "@/features/event-filter";
import { useMemo } from "react";

export const EventFeed = () => {
  const { events } = useEventStore();
  const { filter } = useEventFilterStore();

  const filteredEvents = useMemo(() => {
    if (filter.type === "ALL") return events;
    return events.filter((e) => e.type === filter.type);
  }, [filter.type, events]);

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
