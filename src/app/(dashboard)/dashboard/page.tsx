"use client";

import { useEventBusBridge } from "@/entities/event";
import { EventFilter } from "@/features/event-filter";
import { EventFeed } from "@/widgets/event-feed";
import { StatsBar } from "@/widgets/stats-bar";

const DashboardPage = () => {
  useEventBusBridge();
  // useEventStream();

  return (
    <div className="flex flex-col gap-4">
      <StatsBar />
      <EventFilter />
      <EventFeed />
    </div>
  );
};

export default DashboardPage;
