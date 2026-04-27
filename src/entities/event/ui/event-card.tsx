"use client";

import { Event } from "../model/core/types";

export const EventCard = ({ event }: { event: Event }) => {
  return (
    <div className="p-3 border border-white/5 hover:bg-white/5 transition">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{event.type}</span>
        <span className="text-gray-400">
          {new Date(event.timestamp).toLocaleTimeString()}
        </span>
      </div>
      <span className="text-xs text-gray-400">[{event.source}]</span>

      <div className="text-sm text-gray-300 mt-1">{event.message}</div>
    </div>
  );
};
