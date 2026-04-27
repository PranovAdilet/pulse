import { EventFilter } from "@/features/event-filter";
import { EventFeed } from "@/widgets/event-feed";
import { StatsBar } from "@/widgets/stats-bar";

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-4 grow">
      <StatsBar />
      <EventFilter />
      <EventFeed />
    </div>
  );
};

export default DashboardPage;
