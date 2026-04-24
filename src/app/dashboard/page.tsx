"use client";

import { Event, useEventStore } from "@/entities/event";
import { EventFilter } from "@/features/event-filter";
import { EventFeed } from "@/widgets/event-feed";
import { StatsBar } from "@/widgets/stats-bar";
import { useEffect } from "react";

const DashboardPage = () => {
  const { setEvents } = useEventStore();

  useEffect(() => {
    setEvents(mockEvents);
  }, [setEvents]);

  return (
    <div className="flex flex-col gap-4">
      <StatsBar />
      <EventFilter />
      <EventFeed />
    </div>
  );
};

export default DashboardPage;

export const mockEvents: Event[] = [
  {
    id: "1",
    type: "ERROR",
    message: "API timeout",
    timestamp: Date.now(),
  },
  {
    id: "2",
    type: "SUCCESS",
    message: "User logged in",
    timestamp: Date.now() - 1000,
  },
];
